# Viveiro 2 Irmãos — landing page

Página única do viveiro de mudas cítricas de Goianira/GO. HTML, CSS e
JavaScript sem build: o que está no repositório é exatamente o que o
navegador recebe.

```
index.html          a página inteira
assets/css/         style.css
assets/js/          main.js (animações de entrada e o efeito dos botões)
assets/img/         fotografias, logo e as folhas decorativas
assets/fonts/       Altone Trial (regular e bold)
LEIA-ME.md          decisões de design, paleta e contraste
```

## Rodar localmente

Qualquer servidor estático na raiz serve. Abrir o `index.html` direto pelo
sistema de arquivos também funciona, mas as fontes podem não carregar.

## Publicar

É um site estático na raiz do repositório: em **Settings → Pages**, apontar
para a branch `main` e a pasta `/ (root)`.

## O que não está aqui

As fotos e artes de origem (vários MB cada), os PDFs de briefing e copy e o
servidor local de desenvolvimento ficam de fora pelo `.gitignore`. O
repositório carrega só o que a página serve.
