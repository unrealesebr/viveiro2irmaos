/* ============================================================
   VIVEIRO 2 IRMÃOS — interações da landing page
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '5562986200199';

  /* ---------- 1. Links do WhatsApp com mensagem pré-preenchida ----------
     O href base já funciona sem JS; aqui apenas acrescentamos o texto
     devidamente codificado para cada contexto de CTA.                     */
  function buildWhatsAppLinks() {
    var links = document.querySelectorAll('.js-wa');

    Array.prototype.forEach.call(links, function (link) {
      var msg = link.getAttribute('data-wa-msg');
      if (!msg) return;
      link.setAttribute(
        'href',
        'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg)
      );
    });
  }

  /* ---------- 2. Header: estado ao rolar + menu mobile ---------- */
  function initHeader() {
    var header = document.querySelector('.site-header');
    var toggle = document.querySelector('.nav-toggle');
    var menu = document.getElementById('menu-mobile');
    if (!header) return;

    var ticking = false;
    var marcarSecao = initScrollSpy();

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        header.classList.toggle('is-stuck', window.scrollY > 24);
        marcarSecao();
        ticking = false;
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    if (!toggle || !menu) return;

    function setMenu(open) {
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      menu.hidden = !open;
    }

    setMenu(false);

    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && header.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 980 && header.classList.contains('is-open')) {
        setMenu(false);
      }
    });
  }

  /* ---------- Seção visível na navegação ----------
     Aritmética sobre scrollY, no mesmo rAF do header. Um IntersectionObserver
     exigiria rootMargin derivado da altura do header e, em aba oculta, não
     roda — o mesmo motivo que tirou as scroll-driven animations das folhas.
     As medidas ficam em cache e só são refeitas em resize/load.

     Devolve a função de atualização; quem chama por frame é o initHeader. */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('.nav a[href^="#"], .mobile-menu a[href^="#"]')
    );
    if (!links.length) return function () {};

    var alvos = [];
    var ativo = null;

    function medir() {
      alvos = [];
      links.forEach(function (link) {
        var secao = document.getElementById(link.getAttribute('href').slice(1));
        if (!secao) return;

        // o link do desktop e o do menu mobile apontam para a mesma seção
        var existente = null;
        for (var i = 0; i < alvos.length; i++) {
          if (alvos[i].secao === secao) { existente = alvos[i]; break }
        }
        if (existente) { existente.links.push(link); return }

        var topo = 0, el = secao;
        while (el) { topo += el.offsetTop; el = el.offsetParent }
        alvos.push({ secao: secao, topo: topo, links: [link] });
      });
      alvos.sort(function (a, b) { return a.topo - b.topo });
    }

    function pintar(alvo, ligado) {
      if (!alvo) return;
      alvo.links.forEach(function (l) {
        l.classList.toggle('is-active', ligado);
        if (ligado) l.setAttribute('aria-current', 'location');
        else l.removeAttribute('aria-current');
      });
    }

    function atualizar() {
      // A linha de ativação acompanha o scroll-padding-top do html (94px): a
      // seção entra quando o topo dela encosta embaixo do header.
      var linha = window.scrollY + 110;
      var atual = null;
      for (var i = 0; i < alvos.length; i++) {
        if (alvos[i].topo > linha) break;
        atual = alvos[i];
      }
      // Na hero nenhuma seção passou da linha, e nenhum link fica marcado.
      if (atual === ativo) return;
      pintar(ativo, false);
      pintar(atual, true);
      ativo = atual;
    }

    medir();
    // as imagens entram depois da carga e empurram o topo das seções
    addEventListener('resize', function () { medir(); atualizar() }, { passive: true });
    addEventListener('load', function () { medir(); atualizar() });

    return atualizar;
  }

  /* ---------- 3. Animações de entrada ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(items, function (el) {
        el.classList.add('is-in');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 }
    );

    Array.prototype.forEach.call(items, function (el) {
      observer.observe(el);
    });
  }

  /* ---------- 4. Botão flutuante do WhatsApp ---------- */
  function initFloatingButton() {
    var floatBtn = document.querySelector('.wa-float');
    var hero = document.querySelector('.hero');
    if (!floatBtn) return;

    if (!hero || !('IntersectionObserver' in window)) {
      floatBtn.classList.add('is-visible');
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          floatBtn.classList.toggle('is-visible', !entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: '-60% 0px 0px 0px' }
    );

    observer.observe(hero);
  }

  /* ---------- 5. Ano corrente no rodapé ---------- */
  function initYear() {
    var year = document.getElementById('ano');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Folhas ao vento ---------- */
  /* Escreve --p (0 a 1) em cada folha conforme a camada atravessa a tela.
     Como --p e funcao da posicao, e nao do tempo, rolar para tras desfaz o
     percurso -- e de graca, sem guardar estado.

     As medidas das camadas ficam em cache e so sao refeitas no resize: assim
     o scroll nao chama getBoundingClientRect e nunca forca layout. O que roda
     por frame e aritmetica sobre scrollY mais uma escrita de custom property
     nas folhas que estao na tela. */
  function initVento() {
    // As camadas de folhas e a tarja (que usa --p para mover o reflexo).
    var camadas = Array.prototype.slice.call(document.querySelectorAll('.vento, .strip'));
    if (!camadas.length) return;

    // Movimento presa ao scroll e gatilho de enjoo vestibular: quem pediu
    // menos movimento fica sem as folhas.
    var semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');
    var medidas = [];
    var agendado = false;

    function medir() {
      medidas = camadas.map(function (c) {
        var topo = 0, el = c;
        while (el) { topo += el.offsetTop; el = el.offsetParent }
        return { el: c, topo: topo, altura: c.offsetHeight };
      });
    }

    function atualizar() {
      agendado = false;
      var vh = window.innerHeight, y = window.scrollY;
      for (var i = 0; i < medidas.length; i++) {
        var m = medidas[i];
        var topoNaTela = m.topo - y;
        // fora da tela (com uma folga): nao ha o que escrever
        if (topoNaTela > vh || topoNaTela + m.altura < 0) continue;
        // 0 quando o topo encosta na base da tela; 1 quando a base sai por cima
        var p = (vh - topoNaTela) / (vh + m.altura);
        p = p < 0 ? 0 : p > 1 ? 1 : p;
        // uma escrita so: --p herda para as folhas e para o reflexo
        m.el.style.setProperty('--p', p.toFixed(4));
      }
    }

    function agendar() {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(atualizar);
    }

    function ligar() {
      camadas.forEach(function (c) { c.style.display = '' });
      medir();
      atualizar();
      addEventListener('scroll', agendar, { passive: true });
    }
    function desligar() {
      // So as camadas de folhas somem. A tarja e conteudo: fica, e o reflexo
      // dela ja e escondido pelo CSS em prefers-reduced-motion.
      camadas.forEach(function (c) {
        if (c.classList.contains('vento')) c.style.display = 'none';
      });
      removeEventListener('scroll', agendar);
    }

    addEventListener('resize', function () { medir(); agendar() }, { passive: true });
    // as imagens entram depois e mudam a altura das secoes
    addEventListener('load', function () { medir(); agendar() });
    // Em aba oculta o navegador nao roda rAF: ao voltar, as folhas estariam
    // paradas na posicao antiga. Remede e redesenha na volta.
    addEventListener("visibilitychange", function () {
      if (!document.hidden) { medir(); agendar() }
    });

    if (semMovimento.matches) desligar(); else ligar();
    semMovimento.addEventListener('change', function (e) {
      if (e.matches) desligar(); else ligar();
    });
  }

  /* ---------- Botão com revelação ---------- */
  /* Mede o quanto a pastilha precisa crescer para cobrir o botao inteiro e
     quanto a seta anda ate o centro. So roda na carga e no resize: o hover
     em si e CSS puro (e no primeiro hover, para quem nasce escondido). Sem JS
     o botao continua clicavel, apenas sem o efeito. */
  function initBotaoReveal() {
    var botoes = Array.prototype.slice.call(document.querySelectorAll('.btn-reveal'));
    if (!botoes.length) return;

    function medirUm(btn) {
      var badge = btn.querySelector('.btn-reveal-badge');
      if (!badge) return;
      // offset* ignora transform, entao a medida nao se contamina se o
      // ponteiro estiver sobre o botao na hora de medir.
      var w = btn.offsetWidth, h = btn.offsetHeight;
      var d = badge.offsetWidth;
      if (!w || !h || !d) return;
      var cx = badge.offsetLeft + d / 2;
      var cy = badge.offsetTop + d / 2;
      // raio ate o canto mais distante, com uma folga de 2%
      var longe = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));
      btn.style.setProperty('--escala', (2 * longe * 1.02 / d).toFixed(3));
      btn.style.setProperty('--desloc', (w / 2 - cx).toFixed(1) + 'px');
    }

    function medir() { botoes.forEach(medirUm); }

    // O botao do menu mobile nasce dentro de um [hidden]: na carga ele mede 0 e
    // a conta sai errada. Remedir no primeiro contato cobre esse caso e
    // qualquer outro botao que entre em cena depois.
    botoes.forEach(function (btn) {
      btn.addEventListener('pointerenter', function () { medirUm(btn); });
      btn.addEventListener('focus', function () { medirUm(btn); });
    });

    medir();
    addEventListener('resize', medir, { passive: true });
    // a fonte troca depois da carga e muda a largura do rotulo
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir);
    addEventListener('load', medir);
  }

  /* ---------- Inicialização ---------- */
  function init() {
    buildWhatsAppLinks();
    initHeader();
    initReveal();
    initFloatingButton();
    initVento();
    initBotaoReveal();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
