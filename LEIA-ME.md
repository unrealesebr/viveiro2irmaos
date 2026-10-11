| `--olive-800` | `#31322D` | base da foto de retirada |

> O selo "+25 anos" (`.split-badge`) **não usa mais o `--olive-750`**: virou vidro
> branco a 92%, com o "+25" em `--leaf-ink` (6,30:1) e o rótulo em `--gray-700`
> (7,19:1). O vidro escuro competia com a fotografia atrás.| ~~`variedade-*.svg`~~ (3) | ✅ **Dobra 2 — a muda recortada nos três cards** | — |
| `--moss-400` | `#5B7B5F` | brilho e divisor da seção de procedência |
| `--moss-700` | `#2D4B31` | texto do bloco de outras variedades |
| `--moss-900` | `#203923` | fecho do degradê da seção de procedência || `hero-estufa.jpg` | 1600 × 893 | — | painel da direita, em todas as larguras |
| `hero-estufa-1000.jpg` | 1000 × 558 | — | telas pequenas |

> Esta tabela já listou os recortes `hero-viveiro-*` como sendo os do painel. Não
> são: o painel passou a usar os `hero-estufa-*` numa troca anterior, e os
> `hero-viveiro-*` hoje servem a **dobra 6** (ver abaixo).
| ~~`cta-final.svg`~~ | ✅ **Dobra 7 — foto real aplicada** | — |
# Viveiro 2 Irmãos — Landing Page

Landing page institucional e comercial do Viveiro 2 Irmãos (Goianira — GO), com 7 dobras
e conversão concentrada no WhatsApp.

HTML, CSS e JavaScript puros — sem build, sem dependências. Para publicar, basta enviar
a pasta inteira para a hospedagem.

---

## Estrutura de arquivos

```
index.html                  página completa (7 dobras)
assets/css/style.css        estilos e tokens da identidade visual
assets/js/main.js           menu mobile, animações e links do WhatsApp
assets/img/                 logo + imagens da página
```

Os arquivos originais do projeto (`briefing_viveiro_2_irmaos.pdf`, `copy_viveiro_2_irmaos.pdf`,
`logo viveiro.png`, `referencia-page.jpg`, `HERO.jpg`, `FOTO 02.png`, `FOTO 03.PNG`) foram
mantidos na raiz e **não são
usados pela página** — não precisam ir para a hospedagem.

**Logo — duas versões.** A **folha e o "2"** levam o degradê da marca
(`#358D2F → #86D339`, a 135°); o restante do texto é que muda entre as duas:

| Arquivo | Texto | Onde é usada |
|---|---|---|
| `logo-viveiro.png` | branco | cabeçalho e rodapé (ambos escuros) |
| `logo-viveiro-escura.png` | `#23261D` | reserva, para fundo claro |

A logo original, de folha verde-neon e texto branco, continua intacta em
`logo viveiro.png`, na raiz. **Cada versão só funciona no fundo para o qual foi feita** —
a de texto branco some sobre o claro, e vice-versa. Hoje a página usa só a de texto
branco: o cabeçalho ficou escuro quando a hero ficou.

### O degradê está nos pixels, não no CSS

O logo é PNG, não SVG, então não há como um `background-clip` alcançar partes dele. O
degradê foi **gravado nos próprios pixels**, por um script que roda sobre os dois
arquivos:

- **A folha** é selecionada por cor — `#6A7356` é exclusivo dela no arquivo.
- **O "2"** é selecionado por região (`x 574..739, y 0..184`). Ele não dá para separar
  por cor, porque é branco como o resto do texto; a caixa veio de segmentar os glifos
  por colunas vazias, e ele se identifica sozinho por ter **185px de altura contra os
  111px das outras letras**.

Cada um recebe o degradê inteiro ao longo da própria caixa, e **o canal alpha original
é preservado** — é ele que guarda o antialiasing das bordas.

> Para regerar (outra paleta, outro logo), o script está em `scratchpad/gradlogo.ps1`
> da sessão. Se o logo mudar de arte, **a caixa do "2" tem de ser remedida** — ela é
> coordenada fixa, não busca.

**Isto corrigiu um contraste que estava reprovando.** A folha em `#6A7356` dava
**2,80:1** contra o cabeçalho, abaixo do mínimo de 3:1 que a WCAG pede para gráfico.
O degradê vai de **3,34:1** a **7,60:1**.

---

## Identidade visual aplicada

| Item | Valor |
|---|---|
| Tipografia | Altone, com Montserrat de reserva (400 / 500 / 600 / 700) |
| Títulos | Altone **Regular 400**, caixa baixa, tracking fechado |
| Subtítulos | Altone **Medium 500** — os parágrafos de apoio sob os títulos |
| Corpo de texto | Altone Regular 400 |
| Degradê oficial | `#23261D` → `#3C4738` |
| Superfície clara | `#F8F6F0` (bege claro) |

**Degradês em uso** (todos no `:root` de `assets/css/style.css`):

| Token | Valor | Onde |
|---|---|---|
| `--grad` | `#23261D → #3C4738` | degradê oficial puro |
| `--grad-rich` | `#23261D → #3C4738 → #2F5A22` | fundos escuros — o oliva oficial fechando no verde |
| `--grad-leaf` | `#358D2F → #86D339` | **CTAs de WhatsApp**, numeração dos passos, folha e "2" do logo |
| `--grad-leaf-tinta` | `#125A20 → #2F8429` | o mesmo degradê rebaixado, para uso **sobre superfície clara** |
| `--glow-leaf` | brilho verde radial | sobreposto às seções escuras, tira o aspecto chapado |

**Degradê verde da página: `#757F5E → #A9CC5F`**

| Token | Cor | Uso |
|---|---|---|
| `--leaf` | `#757F5E` | início do degradê; bolinhas sobre fundo claro |
| `--leaf-bright` | `#A9CC5F` | fim do degradê; ícones e detalhes **sobre fundo escuro** |
| `--leaf-ink` | `#545C41` | texto e numeração **sobre fundo claro** |
| `--leaf-olive` | `#3F4733` | fecho do degradê das seções escuras |

As variantes existem porque **nenhuma das duas pontas serve a todos os fundos**:
`#A9CC5F` sobre fundo claro é ilegível, e `#757F5E` sobre fundo escuro some.

O degradê é a **cor de ação** — os 7 botões de WhatsApp usam ele, com **texto escuro**
(`#23261D`). Veja a observação de contraste abaixo. O degradê oficial `#23261D → #3C4738`
segue como base de todas as superfícies escuras.

### Observação de contraste nos botões

O degradê atravessa uma faixa larga de luminosidade, então o contraste do texto varia
ao longo do botão:

| Ponto do botão | Contraste com texto escuro |
|---|---|
| ponta clara `#A9CC5F` | 8,41:1 ✅ |
| meio `#8FA55E` | 5,64:1 ✅ |
| ponta escura `#757F5E` | **3,63:1** ⚠️ abaixo do mínimo AA (4,5:1) |

Texto branco não resolve: daria 1,83:1 na ponta clara, bem pior. Na prática, só as
primeiras letras caem na faixa de 3,6:1 — o resto do texto fica acima de 5:1.

**Se quiser conformidade AA total**, basta clarear o início do degradê de `#757F5E`
para `#8FA55E` em `--leaf`. O visual muda pouco e todo o botão passa de 5,6:1.

---

## Paleta da referência (`referencia-page.jpg`)

As cores foram **amostradas do arquivo**, não estimadas. Os escuros da referência
(`#21231C`, `#1E1F13`, `#2F2F22`) praticamente coincidem com o `#23261D` oficial do
viveiro — por isso as duas paletas se integram sem conflito.

Cada cor está atribuída à faixa de contraste em que funciona de fato:

| Token | Cor | Uso na página |
|---|---|---|
| `--surface` | `#FFFFFF` | cards de variedades e de público |
| `--surface-card` | `#CDEBD2` | cards da dobra 6 — verde claro, mais escuro que a dobra |
| `--surface-2` | `#F6FDF6` | fundo do site e das seções claras |
| `--surface-3` | `#EDF6EE` | blocos secundários sobre dobra clara |
| `--line-2` | `#D7E4D9` | bordas e divisores em fundo claro |
| `--gray-400` | `#A0A1A1` | texto secundário sobre fundo escuro |
| `--gray-500` | `#7F8181` | linha final do rodapé |
| `--gray-600` | `#60615F` | rótulo do card da hero |
| `--gray-700` | `#50514F` | corpo de texto sobre fundo claro, numeração do público |
| `--olive-500` | `#504E41` | hover dos cards de documentação, borda do rodapé |
| `--olive-600` | `#5F5F50` | divisores das listas em fundo escuro |
| `--olive-700` | `#3F3E31` | fundo dos cards de documentação |
| `--olive-750` | `#40423E` | botão do menu mobile, card da hero |
| `--olive-800` | `#31322D` | selo "+25 anos", base da foto de retirada |
| `--olive-900` | `#2F2F22` | base das fotos dos cards de variedade |
| `--deep-900` | `#1E1F13` | header fixo ao rolar, base da seção de procedência |
| `--deep-950` | `#11130E` | base do rodapé |
| `--moss-400` | `#5B7B5F` | brilho e divisor da seção de procedência |
| `--moss-700` | `#2D4B31` | texto do bloco de outras variedades |
| `--moss-900` | `#203923` | fecho do degradê da seção de procedência |
| `--sage` | `#CBD8BE` | bloco de outras variedades |

**Degradês derivados:** `--grad` (oficial puro, menu mobile), `--grad-soft` (oficial
invertido, rodapé), `--grad-rich` (oficial + verde da logo, seções escuras),
`--grad-moss` (oficial + musgo, seção de procedência), `--grad-leaf` (verde da logo, CTAs).

**O que foi deixado de fora:** tons amostrados de dentro das fotografias da referência
(`#C6CDD5` céu, `#939393` e `#767A6B` meios-tons de foto, `#5A514C`, `#505457`). São
conteúdo fotográfico, não decisões de design — entrariam como ruído.

Todos os pares de texto/fundo foram medidos e passam em contraste AA (mínimo aferido: 4,77:1).

Alterar os tokens no `:root` propaga para a página inteira.

---

## Substituir as imagens provisórias

As imagens atuais são **placeholders** gerados em tons do degradê oficial, marcados como
"IMAGEM PROVISÓRIA". Quando as fotografias finais do viveiro estiverem prontas, substitua
cada uma e atualize o `src` correspondente no `index.html`.

| Arquivo provisório | Onde aparece | Proporção sugerida |
|---|---|---|
| ~~`hero-viveiro.svg`~~ | ✅ **Dobra 1 — foto real aplicada** | — |
| `variedade-laranja-pera.svg` | Dobra 2 — card Laranja Pera | 4:3 |
| `variedade-tangerina-ponkan.svg` | Dobra 2 — card Tangerina Ponkan | 4:3 |
| `variedade-limao-tahiti.svg` | Dobra 2 — card Limão Tahiti | 4:3 |
| ~~`estrutura-producao.svg`~~ | ✅ **Dobra 3 — foto real aplicada** | — |
| ~~`retirada-viveiro.svg`~~ | ✅ **Dobra 6 — foto real aplicada** | — |
| `cta-final.svg` | Dobra 7 — fundo do CTA final | 16:7 (horizontal) |

**Como trocar:**

1. Coloque a foto em `assets/img/` (ex.: `hero-viveiro.jpg`).
2. No `index.html`, troque a extensão no `src` da imagem correspondente
   (ex.: `assets/img/hero-viveiro.svg` → `assets/img/hero-viveiro.jpg`).
3. Ajuste o `width` e o `height` do `<img>` para as dimensões reais do arquivo
   (evita deslocamento de layout durante o carregamento).
4. Revise o texto `alt`, descrevendo o que a foto realmente mostra.

As fotos são exibidas com `object-fit: cover`, então pequenas diferenças de proporção
são absorvidas sem distorcer a imagem.

> Conforme o briefing: usar apenas fotografias do próprio viveiro (ou imagens geradas a
> partir delas). Não utilizar fotos de outros viveiros nem representar estruturas que não
> existam no local.

---

## WhatsApp

Todos os CTAs apontam para **5562986200199** com mensagem pré-preenchida conforme o contexto
da dobra (hero, variedade específica, cotação final etc.).

- O número está em dois lugares: no atributo `href` de cada link `.js-wa` no `index.html`
  e na constante `WHATSAPP_NUMBER`, no topo de `assets/js/main.js`.
- A mensagem de cada botão fica no atributo `data-wa-msg` do próprio link, em texto normal.
  O JavaScript faz a codificação da URL automaticamente.
- Se o JavaScript não carregar, os links continuam abrindo a conversa — apenas sem a
  mensagem pré-preenchida.

---

## Ícones

Todos os ícones-símbolo são **preenchidos** (`fill`), não de contorno. Os que têm um
detalhe interno — o check do escudo, as dobras do documento, o furo do pino, os
meridianos do globo — usam `fill-rule="evenodd"` num path só: o detalhe é um subpath que
*vaza* a forma, em vez de ser desenhado por cima. Assim o ícone funciona em qualquer
fundo sem precisar de uma segunda cor.

Três exceções, de propósito:

- **As setas** (`.ico-arrow`) seguem em traço. Seta é glifo direcional, e fica pesada
  preenchida — sistemas de ícones sólidos também mantêm as setas em linha.
- **As folhas ao vento** são fotografia, não ícone: entram como `<img>`, não
  como SVG inline. Veja a seção própria mais abaixo.
- **O broto do `.eyebrow`** é o mesmo desenho, mas entra como `mask-image` num data
  URI (`--ico-broto`) aplicado a um `<span>`, não inline: ele se repete em sete
  lugares, e como máscara a definição fica numa linha só. A cor continua herdando,
  via `background-color`.

Contraste medido em todos os contextos: de **5,12:1 a 8,41:1**, acima do 3:1 que a
WCAG pede para gráficos. Ao criar um ícone novo, desenhe no mesmo `viewBox="0 0 24 24"`
e deixe o `fill` herdar a cor — nenhum ícone traz cor fixa.

---

## A fonte

A família é a **Altone**, a mesma do keyfor.com.br. Ela não vem do Google
Fonts — aquele site a hospeda por conta própria, o que indica licença
comercial. Os arquivos aqui são locais, em `assets/fonts/`.

### ⚠️ Os arquivos são TRIAL

`altonetrial-regular.ttf` e `altonetrial-bold.ttf` são a versão de avaliação.
**Licença trial não cobre site publicado.** Antes de subir, troque pelos
arquivos da licença comprada — o `@font-face` só precisa dos novos nomes.

### Dois arquivos cobrindo quatro pesos

A trial traz regular e bold; a página usa 400, 500, 600 e 700. Cada arquivo
declara uma **faixa** de peso, não um valor:

```css
regular → font-weight: 400 500;
bold    → font-weight: 600 700;
```

Isso existe para o navegador não gerar pesos sintéticos, que saem borrados.
Verificado: `Mudas cítricas` em 100px mede 716px tanto em 400 quanto em 500, e
729px em 600 e 700 — mesma largura, ou seja, nenhuma síntese.

Se a licença trouxer um Medium de verdade, vale separá-lo: hoje o que deveria
ser peso 500 está renderizando como 400.

### Antes de publicar

- **Converter para `.woff2`.** Os dois `.ttf` somam **95 KB**; em woff2 isso
  costuma cair para 25–30 KB. É o maior ganho de carregamento disponível aqui.
- **Apagar a pasta `/fonte`** na raiz. É a cópia original (inclui os oblíquos,
  que a página não usa) e iria junto para produção.

Acentuação conferida: `á à â ã ç é ê í ó ô õ ú ü Á Ã Ç É Í Ó Õ Ú º ª — – ·`
todos presentes. Falta só `₂`, que a página não usa.

A Montserrat continua na pilha logo depois da Altone — sem os arquivos, a
página cai nela sem quebrar.

---

## Tipografia: títulos em caixa baixa

A diagramação segue `referencia-02.webp` (na raiz do projeto) — **só a
diagramação**. O verde que aquela página usa é coincidência; a cor daqui vem de
outra referência, descrita na seção da paleta.

Caixa alta saiu de **títulos, botões e navegação**. Permanece nos micro-rótulos
(`.eyebrow`, `.hero-card-label`, `.hero-tags`, `.footer-label`, `.cta-phone-rotulo`),
que funcionam como etiqueta e ganham hierarquia justamente por contrastar com os
títulos em caixa baixa.

### Dois ajustes que acompanham a troca

**O tracking inverteu de sinal.** Caixa alta precisa de espaço entre letras para
respirar — os títulos estavam em `+.022em`. Em caixa baixa o mesmo valor afrouxa
a palavra, então foram para **`-.011em`** (e `-.019em` no `h1`).

**Os corpos subiram.** Minúsculas têm altura-x menor e perdem presença no mesmo
tamanho: `h1` foi de `3,3rem` para `3,6rem`, `h2` de `2,1rem` para `2,35rem`,
`h3` de `1,06rem` para `1,12rem`. No botão de revelação, o corpo do mobile subiu
de `.72rem` para `.8rem` pelo mesmo motivo.

Contrastes conferidos depois da troca: `h1` 14,10:1, destaque verde no título
6,47:1, corpo 14,10:1, navegação 7,39:1, botão de revelação 4,56:1.

### Os títulos usam o peso Regular

`h1`, `h2` e `h3` são **400**. Antes eram 500 (que cai no mesmo arquivo
Regular da Altone) e o `h3` era 600 — o único que chegava a puxar o arquivo
Bold.

Na prática isso só muda de fato o `h3`: era o único título que renderizava em
Bold. Os demais já vinham do Regular, e a declaração em 400 apenas passou a
dizer o que o navegador já fazia.

**Consequência no `h3`:** ele perdeu o peso que o separava do corpo de texto.
Onde os dois ficam encostados — os itens da `.feature-list`, os cards de
documentação, os passos — a hierarquia agora depende só do corpo
(`1,12rem` contra `1rem`) e do `line-height`. Se algum desses blocos parecer
achatado, o lugar de mexer é o tamanho do `h3`, não o peso: voltar a 600
reintroduz o Bold e desencontra o `h3` dos outros títulos.

---

## As superfícies claras

As cores de fundo foram **amostradas da `referencia-02.webp`**, varrendo a altura
da imagem e marcando onde o tom muda. São cinco, guardadas em tokens próprios:

| token | cor | onde |
|---|---|---|
| `--dobra-clara` | `#F6FDF6` | variedades |
| `--dobra-suave` | `#E2FAE4` | como comprar |
| `--dobra-verde` | `#7ED883` | público |
| `--dobra-escura` | `#25422B` | tarja, viveiro, CTA |
| `--dobra-funda` | `#1C3025` | **hero**, procedência |

O ritmo repete o da referência: **escuro** (hero), escuro, claro, escuro,
**verde**, fundo, suave, escuro.

### A hero é escura

É a primeira faixa da referência-02, não uma seção clara — na primeira leitura
do scan eu a tratei como clara e errei. Fundo `--dobra-funda`, e tudo que vive
nela inverte para tinta clara.

**O título tem `<br>` próprios.** As quatro linhas são fixas por decisão de
diagramação, então a hero desliga o `text-wrap: balance` do `h1` — os dois
brigariam pelo mesmo controle.

Inverter o fundo levou junto quatro coisas que ninguém lembra de olhar:

| | antes | depois |
|---|---|---|
| logo | `logo-viveiro-escura.png` — sumia | `logo-viveiro.png` |
| navegação | 1,76:1 | **12,73:1** |
| destaque do `h1` (`--leaf-ink`) | 2,00:1 | **7,60:1** com `--leaf-bright` |
| botão fantasma | fundo branco chapado | contorno translúcido |

E uma armadilha na sequência: ao clarear as barras do menu hambúrguer junto com
o resto, elas sumiram — **o botão tem fundo claro próprio**, mesmo com o header
escuro. Voltaram para `--ink-800`, em 15,23:1.

O header também escureceu (`rgba(28,48,37,.82)`), já que agora nasce sobre a
hero escura. Ele segue translúcido e continua legível sobre as dobras claras
mais abaixo.

### Fundo de dobra não é tinta

Antes, `.strip`, `.section-dark` e `.audience-cta` usavam `--ink-800` como
fundo — a mesma variável que pinta o texto do corpo. Ao trocar os fundos para a
cor da referência, o texto da página inteira teria virado verde-médio.

Os cinco tokens de dobra são separados exatamente por isso. **`--ink-*` é
tinta, `--dobra-*` é superfície.** Não misture de novo.

### O que a mudança de fundo derrubou

A dobra escura da referência (`#25422B`) é mais clara que a anterior
(`#1E281F`), e dois textos secundários caíram junto:

| | antes | corrigido |
|---|---|---|
| `--txt-on-dark-soft` (eyebrow nas escuras) | 4,28:1 | **5,17:1** com `#AEB2AF` |
| legal do rodapé (`--gray-500`) | 4,03:1 | **5,95:1** com `#9BA09D` |

É o efeito colateral típico de clarear um fundo: o texto que passava raspando
deixa de passar. Ao mexer em `--dobra-escura` ou `--deep-950`, remeça esses dois.



### Os cards da dobra 6 são mais escuros que o fundo

`.steps li` e `.pickup-card` usam `--surface-card` (`#CDEBD2`), não o `--surface`
branco das outras dobras. **E são mais escuros que a dobra, não mais claros** — é a
única parte da página que inverte essa relação.

O branco puro ali incomodava, e **o motivo não era contraste**. Medindo quanto o
verde se destaca em cada superfície (G menos a média de R e B):

| | fundo | card branco |
|---|---|---|
| dobra 2 — variedades | `#F6FDF6`, verde **7,0** | verde 0,0 |
| dobra 6 — consulta e retirada | `#E2FAE4`, verde **23,0** | verde 0,0 |
| dobra 4 — público | `#7ED883`, verde 87,5 | verde 0,0 |

O branco é **neutro** (R=G=B). Contra um fundo com 23 pontos de verde ele lia como
frio e chapado — o maior salto de temperatura entre as dobras claras.

A primeira tentativa foi clarear menos, com `#F7FCF8`: na medição parecia certo
(1,063 de separação contra os 1,104 do branco), mas **na tela era invisível** —
muda 8 pontos em dois canais. Erro de ter perseguido o número em vez de olhar.

A saída foi inverter: em vez de um branco levemente verde, um **verde claro mais
escuro que a dobra**.

| tom | separação | corpo do texto |
|---|---|---|
| `#FFFFFF` (antes) | 1,104 (mais claro) | 7,23:1 |
| `#DBF5DE` | 1,050 | 6,89:1 |
| **`#CDEBD2`** (em uso) | **1,160** | **6,24:1** |
| `#C6E6CC` | 1,220 | 5,93:1 |

Legibilidade não é a restrição aqui: em toda essa faixa o corpo fica acima de
5,5:1 e o título acima de 10:1. O que muda é só quanto o card se separa da dobra.

**A borda praticamente sumiu, e está certo.** `--line-light` (`#D7E4D9`) agora fica
a 1,026 do card — invisível. Antes ela ajudava a delimitar o branco; agora quem
delimita é a própria cor do card (1,160). Se um dia o tom do card mudar, revise a
borda junto.

⚠️ **Só vale sobre a dobra suave.** Sobre as dobras quase brancas este tom seria
mais escuro que o necessário, e sobre o verde forte da dobra 4 ele não se separaria
do fundo — lá o branco puro é proposital, e o LEIA-ME já registra que 1,5:1 é pouco.
A dobra 2 segue com cards brancos: o salto dela é de 7 pontos, não de 23.

### Na dobra verde, quem separa o card é a sombra

A diferença de cor entre o card e o `#7ED883` é de apenas 1,5:1 — baixa demais
para delimitar sozinha. Sobre o verde os cards usam `--surface` puro, borda
branca translúcida e sombra marcada.

Texto na dobra verde: título 8,73:1, corpo 5,57:1. O cinza secundário padrão
daria 3,57:1 ali, por isso `.section-mint p` força `--ink-600`.

---

## A paleta verde

Os verdes vieram de uma imagem de referência: um gradiente que vai de
`#B7F648` no centro (matiz 82, saturação 91%) a `#1B7229` nos cantos
(matiz 130, saturação 62%).

**Não foram copiados literalmente.** A paleta anterior tinha luminâncias
escolhidas uma a uma para fechar contraste — `#B7F648` sozinho tem luminância
0,76, e texto branco em cima dá 1,2:1. Substituir cor por cor derrubaria todos
os pares medidos nesta página.

O que foi adotado da referência é o **matiz e a saturação**; a **luminância de
cada token foi preservada**. Para cada cor: lê-se onde a luminância dela cai na
rampa da imagem, pega-se o matiz e a saturação daquele ponto, e busca-se o `L`
do HSL que reproduz exatamente a luminância original.

| token | antes | agora | luminância |
|---|---|---|---|
| `--leaf` | `#757F5E` | `#358D2F` | 0,198 → 0,200 |
| `--leaf-bright` | `#A9CC5F` | `#86D339` | 0,524 → 0,520 |
| `--leaf-ink` | `#545C41` | `#176724` | 0,099 → 0,100 |
| `--leaf-olive` | `#3F4733` | `#114F1D` | 0,058 → 0,058 |
| `--leaf-botao` | `#6E7A52` | `#2B8729` | 0,178 → 0,180 |
| `--ink-800` | `#23261D` | `#18291B` | 0,018 → 0,019 |
| `--deep-900` | `#1E1F13` | `#122215` | 0,013 → 0,013 |

### Os fundos escuros são neutros, não verdes

Essa parte precisou de duas tentativas. Na primeira, a saturação dos `--ink-*`,
`--olive-*` e `--deep-900` foi limitada a 40% da rampa — o que ainda deu **26%**,
o dobro dos 12–13% que eles tinham antes. As seções escuras e a tarja viraram
verde-garrafa chapado e passaram a competir com os acentos.

Voltaram para **10–15% de saturação**, mantendo o matiz novo (~128). São escuros
com um toque de verde, não verdes — é isso que faz o `#86D339` dos acentos
saltar em cima deles.

| token | saturado demais | neutro (atual) |
|---|---|---|
| `--ink-800` | `#18291B` (26%) | `#1E281F` (14%) |
| `--ink-600` | `#2C4B31` (26%) | `#374839` (13%) |
| `--olive-700` | `#27432C` (27%) | `#324134` (13%) |
| `--deep-900` | `#122215` (30%) | `#162117` (20%) |

**A regra:** num esquema monocromático, fundo e acento não podem ter saturação
parecida. O acento vive a 64%; os fundos precisam ficar abaixo de 15% para que a
diferença leia como hierarquia, e não como ruído.


**Os tons terrosos não existem mais.** Eles eram o contraponto quente da paleta
(`--earth-400/700/900`, amostrados da `referencia-page.jpg`) e sobreviveram a esta
migração de propósito — na primeira passada o `--earth-900` foi convertido por
engano e teve de ser revertido.

Depois voltaram a incomodar: na dobra de procedência o degradê fechava num marrom
visível no canto, que lia como fora da identidade. Viraram `--moss-400/700/900`,
verdes no matiz 128 dos outros escuros.

**A luminância de cada um foi preservada**, pelo mesmo método desta seção — por isso
nenhum contraste precisou ser remedido:

| token | antes | agora | luminância |
|---|---|---|---|
| `--moss-400` | `#81715F` | `#5B7B5F` | 0,173 → 0,173 |
| `--moss-700` | `#4F4230` | `#2D4B31` | 0,0577 → 0,0577 |
| `--moss-900` | `#3D3222` | `#203923` | 0,0339 → 0,0339 |

Aferido depois da troca: texto do bloco de outras variedades 6,52:1 e o `strong`
8,44:1, iguais aos de antes.

Contrastes depois da troca: texto do botão 4,56 (era 4,60), pastilha 4,13 (era
4,16), texto da tarja 13,85, corpo 14,16. Nada quebrou — era o ponto de
preservar as luminâncias.

---

## A navegação (`.nav`)

Os links vivem numa **pastilha própria** — fundo `rgba(241,245,242,.07)`,
borda a `.13` e raio total. Existe porque o header é escuro e nasce sobre a
hero, que também é escura: sem um recorte próprio os quatro links se diluíam
no fundo. A pastilha mede 434px no desktop, contra os 386px que os links
soltos ocupavam.

**O blur não se repete aqui.** O `.site-header` já tem `backdrop-filter`;
declarar outro na pastilha borraria o que já está borrado, de graça.

O sublinhado que crescia no hover saiu — dentro de uma pastilha ele brigava
com a borda do container. O hover agora preenche o próprio link
(`rgba(241,245,242,.11)`), no mesmo raio.

### A seção visível fica marcada

O link da seção em tela recebe `.is-active` e `aria-current="location"`:
verde `--leaf-bright` chapado com texto `--ink-800` em cima, **8,26:1**. Foi o
único par que passou AA com folga — texto claro sobre esse verde dá 1,83:1.

No menu mobile o fundo é claro e a pastilha verde seria ilegível, então lá o
destaque é a tinta `--leaf-ink` (6,77:1) com uma régua de 3px na lateral.

**Quem calcula é aritmética sobre `scrollY`, no rAF que o header já tinha.**
Não é `IntersectionObserver`: ele exigiria um `rootMargin` derivado da altura
do header e, em aba oculta, não roda — o mesmo motivo que tirou as
scroll-driven animations das folhas. As medidas ficam em cache e só são
refeitas em `resize` e `load`.

A linha de ativação fica em `scrollY + 110`, acompanhando o
`scroll-padding-top` de 94px: a seção entra quando o topo dela encosta logo
abaixo do header.

Dois comportamentos de borda, ambos corretos:

- **Na hero, nenhum link fica marcado.** Ela não tem entrada na navegação, e
  nenhuma seção passou da linha ainda.
- **`#publico` não tem link**, então ao rolar por ela quem segue marcado é
  `O viveiro` — a última seção navegável que ficou para trás. O mesmo vale
  para o CTA final e o rodapé, que mantêm `Como comprar`.

---

## Os cards de variedade

A foto é um **PNG recortado da muda** e o bloco atrás dela é **CSS**, não pixel.

A imagem de origem (`MUDA PNG.png`, 1263×1103) vinha com um retângulo cinza
desenhado atrás das mudas. Queimar esse bloco na imagem tem três problemas: a cor
não é da paleta, o bloco não acompanha a largura do card no mobile, e a planta fica
presa dentro dele. Com o bloco em CSS, **a muda ultrapassa o topo** — que é o que dá
profundidade ao card.

| Arquivo | Dimensões | Peso | Quando é servido |
|---|---|---|---|
| `muda-card.png` | 445 × 980 | 638 KB | a partir de ~250px de exibição |
| `muda-card-560.png` | 254 × 560 | 229 KB | telas menores |

A origem tem **82,2% de área transparente**; o recorte usa a caixa do conteúdo
(x 409, y 75, 444×977) com 6px de folga, para não comer o antialiasing da borda.
Os três cards apontam para o mesmo arquivo, então o download acontece uma vez só.

### O bloco

`.card-variety-media::before`, ancorado embaixo, com 62% da altura e 7% de folga
lateral. A cor é `#C8DCCB → #DEEAE0`.

**O primeiro par testado (`--dobra-suave → --surface-3`) não servia:** dava
**1,10:1** contra o branco do card, e não delimitava nada. O par em uso fecha
**1,44:1** — a mesma ordem de grandeza que separa os cards na dobra verde, onde o
LEIA-ME já registra que abaixo de ~1,5 a cor sozinha não basta.

### A muda é vertical, e isso refez os cortes

A imagem é 445×980 (proporção 0,45). As media queries que existiam aqui foram
escritas para a foto **horizontal** anterior e quebraram as duas:

| faixa | era | virou |
|---|---|---|
| ≤ 980px | card em linha, media com `min-height:190px` | **duas colunas**, card vertical |
| ≤ 760px | `aspect-ratio:16/9` | uma coluna, card vertical |

Com `16/9` a muda saía com **82px de largura** — e como são três plantas na mesma
foto, cada uma ficava com 27px. Com o card em linha, o efeito era o oposto: a imagem
esticava a altura para 521px e sobrava um vazio grande ao lado do texto curto.

Hoje a muda mede 200×442 em duas colunas e 174×384 no telefone.

### O nome da variedade é o único título em bold

`.card-variety-body h3` é **700**; todos os outros títulos da página são 400. É o
único `h3` que puxa o arquivo Bold da Altone, e é proposital: o nome é o produto.

### A marca d'água é do viveiro

Os círculos discretos sobre os sacos foram aplicados pelo próprio viveiro, para que
a imagem salva da página carregue a marca. **Não remova ao regerar o recorte.**

---

## O micro-rótulo (`.eyebrow`)

`[ TEXTO DO RÓTULO 🌱 ]` — colchetes soltos nas pontas, símbolo no fim, nos sete
lugares onde aparece.

Antes era um traço de 26×2px seguido do texto em caixa alta com `.17em` de tracking.
Duas razões para trocar:

- **A forma é genérica.** Traço curto + caixa alta espaçada é a assinatura visual de
  praticamente toda landing page gerada por template.
- **Não cabia no telefone.** O rótulo da hero tem 40 caracteres; com `.17em` de
  tracking ele quebrava em duas linhas a 375px, e um micro-rótulo de duas linhas
  perde a função de etiqueta.

### Os colchetes são glifos, não borda

`::before` traz `[` e `::after` traz `]`, ambos a `1.5em` e peso 400 — mais altos e
mais leves que o rótulo, para lerem como moldura e não como letra do texto. O
`line-height:0` impede que esse corpo maior estique a linha, e `letter-spacing:0`
tira deles o tracking do rótulo.

Eles ficam **soltos**, separados por `gap:10px`. Uma primeira versão usou borda e
`border-radius` para fazer uma pastilha fechada — não era o desenho pedido, e a
moldura contínua pesava mais que os dois glifos.

### O que faz caber no telefone

O tracking caiu de `.17em` para `.11em`, e **abaixo de 520px vai a `.055em`**. A 375px
o rótulo da hero mede **298px** dentro dos 335px disponíveis — uma linha, com folga
de 37px. Os outros seis são bem mais curtos e nunca estiveram em risco; o ajuste
existe por causa do primeiro.

### O símbolo é máscara, não emoji

O broto é o mesmo path que a tarja usa no primeiro item, num `<span class="eyebrow-ico">`
que lê `--ico-broto` por `mask-image` e pinta com `background-color`.

> **Por que não o emoji 🌱 literal**, que era o pedido: emoji é bitmap colorido. O
> desenho muda em cada sistema (Windows, Android e iOS têm três plantas diferentes) e
> a cor é fixa — ele não serviria aos três fundos desta página. O ícone monocromático
> faz verde claro sobre as dobras escuras e verde escuro sobre as claras com uma linha
> de CSS. **Se o emoji for mesmo o desejado**, troque o `<span>` pelo caractere e
> remova `.eyebrow-ico`; o custo é esse.

O `<span>` é `aria-hidden`, então o leitor de tela anuncia só o texto do rótulo.

### As cores mudam com o fundo

São três contextos, e colchetes e broto acompanham a tinta:

| | texto | colchetes e broto |
|---|---|---|
| `.eyebrow` (dobras escuras) | `--txt-on-dark-soft` | `--leaf-bright` |
| `.eyebrow-dark` (dobras claras) | `--ink-500` | `--leaf-ink` |
| `.hero .eyebrow-dark` | `#C6CAC7` | `--leaf-bright` |

A terceira linha é a pegadinha: **a hero usa `.eyebrow-dark` mas tem fundo escuro.**
A classe veio de quando a dobra era clara, e tanto a tinta quanto os acentos precisam
ser revertidos ali. Ao mexer na regra de `.eyebrow-dark`, confira a hero.

Contrastes do texto: 5,92:1 na hero, 6,99:1 nas dobras claras, 5,57:1 na dobra verde.

---

## O botão com revelação (`.btn-reveal`)

No repouso é uma pastilha com o degradê da marca e a seta, à esquerda do rótulo,
sobre o botão branco. No hover a pastilha cresce até cobrir o botão inteiro e a
seta caminha para o centro — o rótulo fica atrás dela. Veio de um componente React/Framer Motion; aqui foi
refeito em CSS, já que o projeto não tem React nem build.

**O hover é CSS puro.** O JS entra só para medir, na carga e no resize, duas
coisas que o CSS não calcula sozinho: `--escala` (o quanto a pastilha precisa
crescer) e `--desloc` (o quanto a seta anda até o centro). A conta da escala é o
raio da pastilha contra o canto mais distante do botão, com 2% de folga:

    escala = 2 · hypot(max(cx, w−cx), max(cy, h−cy)) · 1,02 / diâmetro

No CTA da hero isso dá 13,9 — raio final de 320px contra 313px do canto mais
longe. **Sem JS o botão continua clicável**, apenas sem o efeito: `--escala`
nasce em 1.

As medidas são refeitas também em `document.fonts.ready`, porque a fonte entra
depois da carga e muda a largura do rótulo — medir antes disso daria uma
escala curta demais, e a pastilha deixaria um canto do botão sem cobrir.

### O botão é branco e a pastilha traz o degradê

No repouso: **botão branco**, rótulo em tinta, e a pastilha com o `--grad-leaf` à
esquerda. No hover a pastilha cresce e preenche o botão com o degradê da marca.

Isso **simplificou o componente**. A versão anterior tinha o botão verde e a
pastilha clara, e a pastilha precisava escurecer enquanto crescia — senão, ao
cobrir o botão, ela o apagava contra o fundo da página. Era uma transição de
`background-color` casada com a de `scale`.

Agora a pastilha nasce verde e só cresce: a inversão acontece sozinha, e a
transição de cor saiu. **Degradê não interpola em `background-color`**, então essa
simplificação é justamente o que torna o degradê possível aqui.

| | repouso | hover |
|---|---|---|
| botão | branco, 14,01:1 sobre a hero | coberto pelo degradê |
| rótulo | tinta sobre branco, 15,23:1 | some sob a pastilha |
| seta | tinta sobre o degradê | idem, deslocada ao centro |

**A seta é tinta, não branca.** Sobre o degradê o branco cai a **1,84:1** na ponta
clara; a tinta fecha 3,63:1 na ponta escura e 8,26:1 na clara. É o mesmo critério
que define a cor do link ativo na navegação.

A borda da pastilha contra o botão branco fica em 1,84:1 na ponta clara do
degradê. É baixo, mas quem comunica ali é a seta, que tem contraste próprio — a
pastilha é superfície, não controle.

### Histórico: as duas versões anteriores

Ficam registradas porque explicam decisões que **não valem mais** — se alguém
reintroduzir qualquer uma delas, vai reencontrar o problema que a derrubou.

**1. Pastilha branca que só crescia** (o preset original). Funciona sobre fundo
escuro; aqui o fundo era bege claro e, ao cobrir o botão, ela o apagava:
`#F3F4EF` contra `#F8F6F0` dá **1,02:1**.

**2. Pastilha que escurecia enquanto crescia.** Transicionava `background-color`
de `--bone` para `--deep-900` junto com o `scale`, e a seta fazia o caminho
inverso. Resolvia o contraste, mas prendia a pastilha a uma cor sólida —
`background-color` não interpola degradê, então era incompatível com o
`--grad-leaf` que o botão usa hoje.

O botão também já teve cor de fundo própria: `--leaf-botao` (`#2B8729`), escolhida
porque o `#78845E` do preset dava 4,01:1 com texto branco e reprovava no AA. Com o
botão branco, **esse token não é mais usado por ele** — continua no `:root` caso
sirva a outro componente.

### O que esse botão abre mão

Ele não tem o ícone do WhatsApp, e o rótulo do preset é só "Consultar
disponibilidade" — sem a palavra WhatsApp. Para um CTA que leva ao WhatsApp isso
custa reconhecimento imediato. Trocar o SVG da seta pelo glifo do WhatsApp dentro
de `.btn-reveal-glifo` resolveria sem perder o efeito.

Abaixo de 520px a fonte cai para `.72rem` e o espacejamento para `.035em`. Não é
estética: em `.86rem` o rótulo não cabia na medida que sobra depois da pastilha e
quebrava em duas linhas, deixando o botão desproporcional. Com o ajuste ele fica
em uma linha, 277px de largura e 52px de altura — ainda acima dos 44px de alvo
de toque.

No hover o rótulo desaparece sob a pastilha. É o comportamento do componente
original, não um defeito.

`prefers-reduced-motion` mantém o botão estático: a pastilha não cresce e nada se
desloca. O efeito também responde a `:focus-visible`, para quem navega por
teclado.

---

## O botão verde (`.btn-leaf`)

Texto branco sobre o degradê `--grad-leaf` (`#757F5E → #A9CC5F`), com o glifo do
WhatsApp num badge circular branco.

O glifo usa `fill: url(#grad-wa)`, um `<linearGradient>` declarado uma única vez logo
após o `<body>` — vários SVG inline referenciam o mesmo id, então ele não pode viver
dentro de um deles. Esse degradê é uma versão escurecida da paleta (`#5A6B3D → #7E9A42`)
porque o verde original sobre o badge branco dava 1,83:1; assim fica entre 5,8:1 e
3,2:1, acima do 3:1 de gráfico.

### ⚠️ Exceção de contraste, consciente

O texto branco **não fecha AA na ponta clara do degradê**:

| | início `#757F5E` | fim `#A9CC5F` |
|---|---|---|
| texto branco (atual) | 4,24:1 | **1,83:1** |
| texto escuro (anterior) | **3,63:1** | 8,41:1 |

O degradê tem amplitude grande demais para qualquer uma das duas cores: é escuro demais
para branco na ponta clara e claro demais para tinta escura na ponta escura. A versão
anterior, com texto escuro, também reprovava — em 3,63:1.

Isto está registrado como **decisão de design tomada com os números à vista**, não como
descuido. Se for para corrigir, as três saídas medidas são:

1. **Escurecer o degradê** para `#4A5239 → #637D30` — branco passa a 8,1:1 / 4,7:1. O
   verde-limão vivo migra para o badge do ícone.
2. **Voltar ao texto escuro e clarear a ponta escura** para `#8A9470 → #A9CC5F` — tinta
   escura passa a 4,9:1 / 8,4:1.
3. **Verde chapado** `#5A6B3D` — branco a 5,8:1, constante, sem ponta fraca.

Uma `text-shadow` discreta melhora a leitura percebida sem mexer na cor, mas não conta
para o cálculo da WCAG.

---

## Procedência (`#procedencia`) — diagramação

Duas colunas de `1fr` iguais: texto à esquerda, cards à direita.

Quatro coisas aqui existem por um motivo, e desfazer qualquer uma reintroduz um
defeito que já foi corrigido:

**Nada de `position:sticky` na coluna de texto.** Havia um `sticky; top:110px` no
`.doc-intro`. Como as colunas têm altura parecida (361 contra 427px), ele só prendia
por ~66px de rolagem — o suficiente para o título descolar do topo do primeiro card,
sem nenhum ganho de leitura. Sticky só compensa quando a coluna fixa é bem mais curta
que a que rola.

**As colunas são `1fr`/`1fr`, não `.9fr`/`1.1fr`.** A proporção antiga dava a coluna
estreita (494px) ao texto denso e a larga (604px) aos cards, que são esparsos — o
oposto do que o conteúdo pedia. O parágrafo ficava em 50 caracteres por linha e quebrava
mal ("O Viveiro 2 / Irmãos"). Hoje são 59 por linha, dentro da faixa confortável.

**`text-wrap:balance` nos `p` dos cards.** Com 589px de largura e textos de 68 a 83
caracteres, a quebra natural dava 67 + 1: a segunda linha vinha órfã, com "operação."
sozinha. O `balance` reparte em 34/42/40.

**A régua da nota atravessa a shell inteira.** Ela tinha `max-width:70ch`, o que a
deixava com 667px de 1235 — uma régua curta e solta no canto. Agora quem segura a medida
do texto é `padding-right`, não um `max-width`, e esse padding vale **só acima de
980px**: empilhado ele espremia a nota em ~220px no celular.

---

## A última dobra

É a única assimétrica da página, e isso é de propósito: as outras alternam
centralizado e duas colunas simétricas, então o fechamento precisava de um
desencaixe para não parecer mais uma seção.

Título grande à esquerda (`1,08fr`), ação isolada à direita (`0,92fr`) por uma
régua vertical. O título pôde crescer para `3,3rem` porque não divide mais a
linha com o texto corrido — na versão centralizada ele ficava limitado pelos
760px do bloco.

**O telefone deixou de ser rodapé.** Estava em `.76rem` embaixo do botão, como
nota de pé. Num fechamento ele é a segunda via de contato, não uma observação:
agora tem régua própria, rótulo em caixa alta e o número em até `1,45rem`.

Empilha em **860px**, não nos 980px habituais: com duas colunas, o título grande
e o texto ficam estreitos demais antes mesmo do tablet. Ao empilhar, a régua
vertical vira horizontal.

Contraste sobre o scrim: ver os números medidos contra a fotografia definitiva,
logo abaixo. (Os 11,95:1 e 5,10:1 registrados antes valiam para o placeholder.)

### A fotografia (dobra 7)

A `FINAL.jpg` da raiz — a panorâmica interna da estufa, 5504×3072 e **9,9 MB**.
Entra recortada ao centro, sem distorcer:

| Arquivo | Dimensões | Peso | Quando é servido |
|---|---|---|---|
| `cta-final.jpg` | 1920 × 1080 | 424 KB | a partir de 1200px |
| `cta-final-1200.jpg` | 1200 × 675 | 193 KB | telas menores |

#### O scrim já está no mínimo

A foto definitiva é bem mais clara que o placeholder que ela substituiu, e isso
**derrubou um contraste**: o rótulo `WHATSAPP COMERCIAL` caiu de 5,10:1 para
**3,05:1**. Ele ganhou cor própria (`#DCE3DD`, 5,01:1) em vez do
`--txt-on-dark-soft` das outras dobras escuras.

Medido o scrim inteiro contra a foto real, **nenhum alívio cabe**:

| scrim | pior elemento | |
|---|---|---|
| **`.94 / .76 / .82`** (em uso) | **4,70:1** | OK |
| `.88 / .68 / .74` | 3,87:1 | ✗ |
| `.82 / .60 / .66` | 3,23:1 | ✗ |

Quem estoura primeiro é sempre o `.eyebrow`. Ou seja: **a fotografia aparece pouco
nesta dobra de propósito** — ela tem texto nos dois lados, e o véu que o texto exige
é o que cobre a foto. Para vê-la mais, o caminho não é baixar o alpha global, e sim
afrouxar o scrim só na faixa inferior, onde não há texto.

Contrastes atuais: título 7,05:1, número 5,60:1, rótulo 5,01:1, texto 4,96:1,
eyebrow 4,70:1.

---

## O reflexo da tarja

Uma faixa de luz inclinada atravessa a tarja escura conforme ela cruza a tela.
É o mesmo `--p` das folhas: o `main.js` já escreve o progresso de rolagem na
`.strip`, e o `::after` dela desloca o gradiente de `-115%` a `+115%`.

A luz passa **por cima** do texto, de propósito. Se passasse só por baixo,
clarearia o fundo e deixaria o texto para trás — como ela cobre os dois, eles
clareiam juntos, que é como luz se comporta numa superfície.

### O brilho forte mora nas bordas

A primeira versão tinha só uma lâmina de luz no corpo da tarja, a `.10` de alpha
espalhados por ~300px. No papel estava certa; na tela **não se via nada**.

O corpo da tarja é exatamente onde está o texto, e ali cada ponto de brilho sai
direto do contraste de leitura. A medição mostra o teto com clareza:

| lâmina no corpo | texto | ícone |
|---|---|---|
| `.10` | 5,39:1 | 3,43:1 |
| **`.12`** (em uso) | **4,99:1** | **3,21:1** |
| `.14` | 4,65:1 | 3,02:1 — margem de 0,02 |
| `.18` | 4,07:1 ✗ | 2,70:1 ✗ |

O ícone estoura antes do texto, e é ele que fixa o limite. `.14` tecnicamente
passa, mas por 0,02 — não é margem, é sorte.

Então a luz visível não vem do corpo: vem das **arestas**, onde não há texto e o
brilho pode ser alto. O `::after` tem cinco camadas:

| camada | brilho | onde |
|---|---|---|
| halo superior | `.95` | elipse 42%×33% ancorada na aresta de cima |
| halo inferior | `.72` | elipse 36%×27% na aresta de baixo |
| fio superior | `1.0` | 3px, dá a borda dura da luz |
| fio inferior | `.85` | 2px |
| lâmina do corpo | `.12` | única parte que cruza o texto |

Os halos sobem no máximo 33% da altura (~38px) e o conteúdo começa a 40px de
cada aresta: chegam perto, não encostam. **Para dar mais presença, alargue os
halos na horizontal** — foi assim que a versão atual ganhou força, indo de 30%
para 42% de largura. Aumentar o alpha da lâmina é o caminho que não existe.

### Dois detalhes que custaram caro

**`--p` precisou virar herdada.** O `@property` estava com `inherits:false` e o
JS escrevia em cada folha. Para a tarja aproveitar o mesmo valor, passou a
`inherits:true` e o JS escreve uma vez só na camada — menos escritas por quadro.
**Mas a regra `.folha` declarava `--p:0`**, e uma declaração local vence a
herança: as folhas congelaram todas em zero. A linha foi removida; o valor
inicial já vem do próprio `@property`.

**O pico da luz estava em `.13` e derrubava o texto da tarja para 4,81:1.** Passa
no AA, mas sem margem: qualquer ajuste no gradiente da tarja quebraria. Em `.10`
fica em **5,39:1**, contra 8,83:1 sem reflexo nenhum.

| | contraste do texto da tarja |
|---|---|
| sem reflexo | 8,83:1 |
| pico em `.13` | 4,81:1 (apertado) |
| **pico em `.10`** | **5,39:1** |

`prefers-reduced-motion` esconde o `::after`, mas **não** esconde a tarja — ela é
conteúdo, não decoração. Essa distinção está no `desligar()` do `initVento`: só
as camadas `.vento` somem.

---

## Folhas ao vento


Seis folhas recortadas de uma foto de estúdio (fundo branco), em
`assets/img/folhas/folha-01..06.webp` — **60 KB somados**, menos da metade de
uma fotografia. Doze instâncias distribuídas por cinco seções, reaproveitando os
mesmos seis arquivos em perfis de voo diferentes.

### Como o movimento funciona

O percurso não corre no tempo: corre na **posição do scroll**. O `main.js`
escreve uma única custom property, `--p` (de 0 a 1), em cada folha; todo o resto
— deslocamento, giro, escala, opacidade — é interpolado no CSS a partir dela.
Como `--p` é função da posição e não guarda estado, **rolar de volta desfaz o
percurso de graça**.

`--p` é registrada com `@property … syntax:'<number>'`, o que permite usá-la
dentro de `calc()` em `translate`/`rotate`/`scale`. Sem esse registro o navegador
trataria o valor como texto e não interpolaria.

As medidas das camadas ficam em cache e só são refeitas em `resize`, `load` e no
retorno de aba oculta. Durante o scroll não há `getBoundingClientRect`: o frame
faz aritmética sobre `scrollY` e escreve a property. Só `translate`, `rotate`,
`scale` e `opacity` — nada que force layout.

### Por que não as scroll-driven animations nativas

`animation-timeline: view()` faria isso sem JS e mais barato, e o CSS chegou a
estar escrito assim. O problema é que elas rodam no compositor, e o ambiente de
teste deste projeto mantém a página em aba oculta — onde o navegador, por
economia, não roda compositor, `requestAnimationFrame` nem `IntersectionObserver`.
Não deu para verificar o efeito, e efeito não verificado não vai para o ar. A
versão em JS é verificável e ainda funciona no Firefox e no Safari antigo, onde
as nativas não chegaram.

**Consequência prática:** qualquer teste de animação nesta página precisa do
painel do navegador *visível*. Com ele oculto, `document.hidden` é `true` e nada
anima — inclusive os `.reveal`, que por isso precisam de `is-in` forçado na mão
durante inspeções.

### Três coisas que não podem ser desfeitas

**`body { overflow-x: clip }`, nunca `hidden`.** Pela regra do CSS, `overflow-x:
hidden` com `overflow-y: visible` promove o `y` a `auto` — o computado vira
`hidden auto`, o body vira scroll container e as timelines de scroll param de
funcionar. O `clip` recorta sem criar container.

**Cada arquivo tem os pixels de uma folha só — mas duas delas têm duas folhas.**

O recorte não saiu por bounding box: cada pixel foi rotulado por componente
conectado, e o recorte copia só os pixels do seu próprio rótulo. Sem isso, cada
folha levava junto pedaços das vizinhas nos cantos.

Isso resolve fragmentos soltos, mas **não** resolve folhas que se encostam: em
contato, duas folhas formam um componente só e passam pelo teste de contagem de
manchas. `folha-01` e `folha-06` são assim, por decisão — foram separadas uma
vez e a versão separada foi descartada.

Se um dia for preciso separá-las, o caminho está medido. A técnica é erosão: a
máscara encolhe passo a passo até se partir em dois núcleos, que viram sementes
e crescem de volta disputando o território original. A `folha-01` parte no passo
13; a `folha-06`, no passo 5. As demais têm um núcleo só — inclusive a
`folha-03`, que parece dupla mas é uma folha torcida mostrando os dois lados
(nervura central contínua).

Uma ressalva de quando isso foi feito: na `folha-01` as duas estão
**sobrepostas**, e o pedaço escondido não existe na foto — a separação rende a
folha de cima inteira e um fragmento disforme. Já na `folha-06` elas apenas se
cruzam, e as duas saem completas.

**As bordas foram descontaminadas.** Pixel de borda vem misturado com o branco do
fundo; o recorte desfaz a mistura (`cor = (observado − 255·(1−a)) / a`) antes de
gravar. Sem isso sobra um halo claro em volta, visível assim que a folha passa
sobre fundo escuro.

### Acessibilidade e limites

- `prefers-reduced-motion: reduce` **remove as camadas** e desliga o listener de
  scroll. Movimento preso ao scroll é gatilho conhecido de enjoo vestibular.
  A preferência é observada ao vivo, não só na carga.
- As camadas são `aria-hidden` e `pointer-events: none`, então nada do que elas
  cobrem deixa de ser clicável ou de ser lido por leitor de tela.
- `.vento` tem `overflow: clip`, então nenhuma folha empurra scroll lateral.
- Abaixo de 760px as duas folhas mais distantes somem e os percursos encurtam —
  numa tela estreita o texto ocupa a largura toda e elas virariam ruído.

### As folhas são sólidas, e isso tem preço

`--op` vai de 0,70 a 1,0. A profundidade vem do tamanho, do giro e de um
desfoque leve nas distantes — quase não vem mais da opacidade.

A versão anterior usava 0,26 a 0,62. Era mais segura, mas as folhas pareciam
fantasmas. Medindo os dois cenários na página inteira, de 360 em 360px:

| | pior bloco de texto | média |
|---|---|---|
| opacidades antigas | 8,9% **esmaecido** (legível por baixo) | ~1% |
| **sólidas** (atual) | 17,8% **bloqueado** (some) | ~1% |

Na média quase nada muda. O risco é pontual: perto de 5040px de rolagem uma
folha cobre 17,8% de um bloco, e ali as palavras desaparecem em vez de
esmaecer. Se o leitor parar a rolagem nesse ponto, ficam ilegíveis até ele
rolar de novo.

**Para recuperar legibilidade sem desfazer a solidez**, o caminho é afastar as
trajetórias da faixa de texto — mexer em `top`/`left` e nos destinos de cada
perfil — e não baixar `--op` de volta. A `.folha-6` é a pior nesse quesito:
nasce em `top:44%; left:36%`, bem no meio da coluna de leitura.

### As folhas passam POR CIMA do conteúdo


`.vento` tem `z-index: 50`: acima do conteúdo (`.shell` = 1), abaixo do header
fixo (100) e do botão flutuante do WhatsApp (95). As folhas cruzam texto e
fotografia, mas nunca a navegação nem o CTA.

O custo disso foi medido varrendo a página inteira a cada 420px e cruzando as
caixas de cada folha com as de cada bloco de texto, ponderado pela opacidade:
**0,97% de cobertura média**, e no pior ponto da página um único bloco a 14,3%.
As folhas são translúcidas e estão em movimento, então na prática a leitura
segue limpa. Se um dia parecer demais, o ajuste é `--op` em cada perfil, não o
`z-index`.

### Mexer nos perfis de voo

Cada `.folha-1` … `.folha-6` é um perfil completo: posição inicial (`top`/`left`),
tamanho (`--tam`), opacidade de pico (`--op`) e o percurso (`--x1`, `--y1`,
`--r0`→`--r1`, `--s0`→`--s1`). A profundidade é composta: o que está longe é
menor, mais apagado, gira menos e leva `blur`. Para uma folha nova, copie um
perfil e mude os valores — o keyframe não precisa ser tocado.

---

## Acessibilidade e desempenho




- Navegação por teclado com foco visível e link "Ir para o conteúdo".
- Animações desativadas automaticamente para quem usa `prefers-reduced-motion`.
- Imagens abaixo da dobra com `loading="lazy"`; hero com `fetchpriority="high"`.
- Sem bibliotecas externas — apenas a fonte Montserrat, via Google Fonts.

---

---

## Foto da hero (já aplicada)

A hero é **escura** e tem duas fotografias: a do painel arredondado à direita, com o
card do "+25 anos" flutuando sobre ela, e a do fundo da dobra inteira, descrita mais
abaixo. O texto fica à esquerda, sobre a parte escurecida do fundo.

A foto é a `HERO.jpg` — a vista externa das estufas ao entardecer.

| Arquivo | Dimensões | Peso | Quando é servido |
|---|---|---|---|
| `hero-viveiro-vertical.jpg` | 1000 × 1778 | 213 KB | **desktop** (≥ 981px) — painel da direita |
| `hero-viveiro-1600.jpg` | 1600 × 893 | 205 KB | até 980px — faixa abaixo do texto |
| `hero-viveiro-1000.jpg` | 1000 × 558 | 81 KB | telas pequenas |

São **dois enquadramentos da mesma foto**, trocados por `<picture>`:

- **Desktop:** recorte vertical 9:16, porque o painel é alto e estreito (502 × 640px) —
  a panorâmica original ficaria espremida ali.
- **Até 980px:** a panorâmica, em faixa larga abaixo do texto, onde ela cabe inteira.
  O card deixa de flutuar e passa a vir logo depois da foto.

### A fotografia de fundo da dobra

Além da foto no painel, a hero inteira tem uma **fotografia de fundo**, atrás
de todo o conteúdo: `.hero-bg`, no mesmo padrão do `.cta-media` — `position:
absolute; inset:0; z-index:-1`, preso pelo `isolation:isolate` do `.hero`.

A origem é a `BACKGROUND-HERO.png` da raiz: o interior da estufa, já tratado
com escurecimento e desfoque progressivos do lado esquerdo, que é onde o
texto se apoia.

| Arquivo | Dimensões | Peso | Quando é servido |
|---|---|---|---|
| `hero-bg.jpg` | 1920 × 900 | 172 KB | a partir de 1200px |
| `hero-bg-1200.jpg` | 1200 × 563 | 83 KB | telas menores |

**O PNG original tem 2,1 MB e canal alpha.** Os dois JPEG saíram dele em
qualidade 82, compostos sobre `#1C3025` — sem compor, as áreas transparentes
virariam preto, porque JPEG não guarda alpha. O ganho é de ~92%.

O `--dobra-funda` continua declarado no `.hero`: é ele que pinta enquanto a
foto carrega, e é sobre ele que o contraste foi medido.

#### O scrim é assimétrico

Escuro, não branco. Camadas de branco sobre foto já foram tentadas aqui e deixavam a
dobra ofuscante. Este
mantém a hero escura que já existia e devolve o contraste que a foto tiraria.

A ponta esquerda vai a `.95` e a direita a `.55`: à esquerda mora o texto, e à
direita só há o painel e o card, que têm fundo próprio. **É na direita que a
estufa aparece.** Abaixo de 980px a hero empilha, o texto passa a ocupar a
largura toda e o véu vira parelho, em `.93`.

#### Contraste medido sobre a foto composta

Pior caso (percentil 98 da luminância do fundo dentro da caixa de cada bloco):

| | desktop | mobile |
|---|---|---|
| `h1` | 10,05:1 | 10,77:1 |
| destaque verde do `h1` | 6,76:1 | 6,43:1 |
| `.hero-text` | 9,73:1 | 8,69:1 |
| `.hero-tags` | 9,28:1 | 9,38:1 |
| `.eyebrow` | **5,92:1** | 7,15:1 |

**O eyebrow precisou de uma cor própria.** Com o `--txt-on-dark-soft` das
outras dobras escuras ele caía para **4,57:1** — passava no AA por 0,07, que
não é margem. O canto superior esquerdo da foto (o teto da estufa) é a parte
clara que o derrubava.

Reforçar o scrim ali não resolve: naquele ponto ele já está em `.95`, perto do
piso, e levá-lo a `.70` numa camada extra só levava o rótulo a 5,17:1. A saída
foi clarear o texto um passo, para `#C6CAC7` — 5,92:1, e continua cinza, sem
virar título.

> **Ao trocar a fotografia de fundo, remeça.** O cálculo é a luminância da foto
> na caixa de cada bloco de texto, composta com o gradiente do scrim, contra a
> cor de cada token. Uma foto mais clara no canto superior esquerdo derruba o
> eyebrow primeiro — é o bloco com menos folga.

### Recortes sem uso

A `FOTO 03.PNG` chegou a ser o fundo full-bleed da hero, numa versão intermediária.
Como a hero voltou a ser clara com a foto contida no painel, os recortes dela ficaram
sem uso e **podem ser apagados**: `hero-estufa.jpg`, `hero-estufa-1000.jpg` e
`hero-estufa-mobile.jpg`. O mesmo vale para `hero-viveiro.jpg` (2400 × 1340),
`hero-viveiro-mobile.jpg` e `hero-viveiro-vertical.jpg`.

Os recortes `hero-viveiro-1600.jpg` e `hero-viveiro-1000.jpg` **voltaram ao ar**: são
hoje a foto do card de retirada, na dobra 6. Os `retirada-viveiro*.jpg` que estavam
ali ficaram sem uso na troca.

A própria `FOTO 03.PNG` continua na raiz e é uma boa candidata para substituir um dos
placeholders restantes — a dobra 6 (retirada no viveiro), por exemplo.

### A tarja entre a hero e a dobra 2

A hero e a dobra 2 usam as duas o mesmo `--surface-2`, então emendavam num bloco bege
só, sem marcação. A tarja `.strip` quebra isso: uma faixa escura e baixa (117px no
desktop) com o degradê oficial, logo depois da hero.

Ela carrega **quatro provas que não aparecem na hero** — porta-enxertos próprios, nota
fiscal e trânsito vegetal, certificação, atendimento nacional. O "+25 anos" ficou de
fora de propósito: está no card logo acima, e repetir ali seria redundante.

São 4 colunas até 1080px, 2 até 760px e 1 abaixo disso. A borda divisória entre os itens
é recalculada em cada faixa, para o primeiro de cada linha não começar com um risco solto.

### O card flutuante (liquid glass)

O card do "+25 anos" é posicionado em `absolute` dentro de `.hero-visual`, ancorado no
rodapé do painel da foto (`left`, `right` e `bottom`). Abaixo de 980px ele volta a
`static`, aparece logo depois da foto e **perde o vidro**, virando `--surface` sólido —
ali não há foto atrás dele para desfocar.

No desktop é **vidro claro**: `backdrop-filter: blur(30px) saturate(180%)` sob um tint
de `rgba(255,255,255, .72)`, mais um degradê branco (`.38 → .06 → .22`) que imita a luz
refratando na quina de cima, e duas `inset` que dão a espessura — uma clara forte no
topo, um rebote embaixo.

⚠️ **O tint não pode subir muito, e é isso que faz o efeito.** Uma versão antiga usava
branco a 92%: o `backdrop-filter` estava lá, mas não sobrava nada para ele mostrar, e o
card lia como uma chapada branca. Vidro só parece vidro quando a imagem atravessa.

Em `.72` ainda atravessam **28%** da folhagem — contra os 38% da versão escura que
existiu antes dele. É menos refração, e foi o preço de ter o conteúdo em tinta escura.

#### Por que a versão escura não valia mais

O card já foi vidro **escuro** (tint `rgba(22,33,23,.62)`, texto branco, "+25" em verde
claro). O argumento de então era que, com tint fraco, a folhagem domina o fundo e texto
escuro não fecharia contraste.

Isso foi medido de novo, simulando o `blur(30px)` — que **reduz a variância do fundo** e
era justamente o que faltava na conta anterior. Sobre a folhagem desfocada, o branco
fecha AA bem antes de virar chapada:

| tint branco | texto `--ink-800` | `--ink-600` | bolinhas `--leaf-ink` |
|---|---|---|---|
| 62% | 7,63:1 | 4,00:1 ✗ | 3,50:1 |
| 68% | 8,61:1 | 4,51:1 | 3,96:1 |
| **72%** (em uso) | **9,31:1** | **4,88:1** | **4,28:1** |
| 76% | 10,05:1 | 5,27:1 | 4,61:1 |

`.72` é o primeiro ponto com folga real nos três, e não só passando raspando.

#### Os quatro tokens

O card define `--card-fg`, `--card-fg-soft`, `--card-accent` e `--card-rule`, e todo o
conteúdo interno lê deles. **Ao mexer em cor dentro do card, mexa no token.**

Desde que o desktop ficou claro, **o mobile não redefine mais nenhum deles** — as quatro
linhas que ele repetia eram idênticas às do bloco base. Lá embaixo só muda o material:
sem `backdrop-filter`, fundo `--surface` sólido, sombra menor.

`--card-accent` voltou a ser o `--leaf-ink` (`#176724`) da paleta. O `#C9E68C` clareado
existia para sobreviver ao fundo escuro; num card claro ele daria 1,3:1.

#### O "+25" e as bolinhas levam degradê

Ambos usam `--grad-leaf-tinta`, não o `--grad-leaf`. O "+25" o recebe por
`background-clip:text`, com a cor sólida mantida como base **antes** do bloco
`@supports` — sem o recorte, `color:transparent` apagaria o número.

**Por que não o degradê da marca.** Sobre o vidro branco, a ponta `#86D339` dá
**1,23:1**. É o mesmo problema que o `grad-wa` já resolve no glifo do WhatsApp, e a
saída é a mesma: rebaixar as duas pontas.

| degradê | ponta escura | ponta clara |
|---|---|---|
| `--grad-leaf` `#358D2F → #86D339` | 2,80:1 ✗ | **1,23:1** ✗ |
| um passo `#1F7A27 → #4FA62F` | 3,62:1 | 2,05:1 ✗ |
| **`--grad-leaf-tinta`** `#125A20 → #2F8429` | **5,59:1** | **3,15:1** |

⚠️ **A ponta clara fica em 3,15:1, contra o mínimo de 3:1.** Passa, mas a margem é
de 0,15. Quem segura esse número é o tint branco de 72%, que domina o fundo do card
e limita o quanto a fotografia pode mexer nele — por isso a margem fina é tolerável
aqui, e não seria se o fundo fosse só a foto. **Ao mexer no tint, remeça esta linha
antes de qualquer outra.**

**O degradê é discreto, e isso é estrutural.** Num fundo claro as duas pontas têm de
ficar abaixo da luminância que fecha 3:1, então sobra pouca amplitude: na prática o
"+25" lê quase como verde sólido, e nas bolinhas de 5px o degradê não se percebe.
**Degradê vivo e card claro não coexistem** — o `--grad-leaf` inteiro só volta a
caber se o card voltar a ser escuro.


#### Contraste medido

Contra o ponto **mais escuro** do fundo composto na área do card (o pior caso para
texto escuro), com o blur simulado:

| | ratio | exigido |
|---|---|---|
| "+25", lista e link | 10,13:1 | 4,5:1 |
| rótulo e descrição | 6,50:1 | 4,5:1 |
| bolinhas | 4,65:1 | 3:1 (gráfico) |

Todos acima da versão escura, que ficava em 4,60:1 e 3,32:1. No mobile, sobre o card
sólido, a folga é ainda maior.

**Se trocar a fotografia do painel, remeça.** O cálculo é a luminância da foto na área
do card — desfocada em 30px, como o `backdrop-filter` faz — composta com o tint e o
degradê, contra a cor de cada token. Uma foto mais escura nessa faixa derruba o texto
escuro, que é o inverso do risco que a versão anterior corria.

---

## Pendências antes da publicação

- [x] ~~Substituir as 3 imagens provisórias~~ — resolvido: os três cards usam a muda recortada.
- [ ] Opcional: fotografar cada variedade separadamente. Hoje os três cards mostram **a mesma muda**, e o `alt` das imagens está vazio justamente para não afirmar que aquela foto é de Laranja Pera, Ponkan ou Tahiti.
- [ ] Não enviar `HERO.jpg`, `FOTO 02.png`, `FOTO 03.PNG`, `BACKGROUND-HERO.png`, `FINAL.jpg` e `MUDA PNG.png` para a hospedagem — são só os originais.
- [ ] Opcional: apagar os recortes sem uso — `hero-viveiro.jpg` (2400×1340), `hero-viveiro-mobile.jpg`, `hero-viveiro-vertical.jpg` e, desde a troca da dobra 6, `retirada-viveiro.jpg` e `retirada-viveiro-900.jpg`.
- [ ] Confirmar com o viveiro os textos sobre certificação e documentação de trânsito vegetal.
- [ ] Definir o domínio e atualizar a tag `<link rel="canonical">` e a `og:image` no `index.html`.
- [ ] Opcional: criar um favicon dedicado (hoje usa a logo em PNG).

**Imagens já aplicadas:**
- ✅ Dobra 1 (Hero, painel): `FOTO 03.PNG` → hero-estufa.jpg, hero-estufa-1000.jpg
- ✅ Dobra 3 (Estrutura): `FOTO 02.png` → estrutura-producao.jpg  
- ✅ Dobra 6 (Retirada): `HERO.jpg` → hero-viveiro-1600.jpg (1600×893), hero-viveiro-1000.jpg (responsivo) — a vista externa das estufas ao entardecer
- ✅ Dobra 1 (fundo da dobra): `BACKGROUND-HERO.png` → hero-bg.jpg (1920×900), hero-bg-1200.jpg (responsivo)
- ✅ Dobra 7 (CTA final): `FINAL.jpg` → cta-final.jpg (1920×1080), cta-final-1200.jpg (responsivo)
- ✅ Dobra 2 (3 cards de variedade): `MUDA PNG.png` → muda-card.png (445×980), muda-card-560.png (responsivo)
