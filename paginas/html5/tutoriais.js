var urlString = window.location.href;
var url = new URL(urlString);
var codigoTutorialURL = url.searchParams.get("codigoTutorialURL");

var codigoBtnVoltar = JSON.parse(parseInt(codigoTutorialURL) - 1);
var codigoBtnProximo = JSON.parse(parseInt(codigoTutorialURL) + 1);

var tituloTutorial = [{
        codigoTutorial: 0,
        titulo: "INTRODUÇÃO AO HTML",
        subtitulo: "O que é HTML?"
    },
    {
        codigoTutorial: 1,
        titulo: "TAGS",
        subtitulo: "O que são tags?"
    },
    {
        codigoTutorial: 2,
        titulo: "META TAGS",
        subtitulo: "O que são metatags?"
    },
    {
        codigoTutorial: 3,
        titulo: "ESTRUTURA BÁSICA HTML",
        subtitulo: "Iniciando o código básico de HTML"
    },
    {
        codigoTutorial: 4,
        titulo: "SEMÂNTICA",
        subtitulo: "Elementos semânticos do HTML"
    },
    {
        codigoTutorial: 5,
        titulo: "TAGS DE TEXTOS",
        subtitulo: "Tags de título, parágrafo e formatação de texto"
    },
    {
        codigoTutorial: 6,
        titulo: "LISTAS",
        subtitulo: "Listas do HTML"
    },
    {
        codigoTutorial: 7,
        titulo: "LINKS",
        subtitulo: "O que são links"
    },
    {
        codigoTutorial: 8,
        titulo: "TABELAS",
        subtitulo: ""
    },
    {
        codigoTutorial: 9,
        titulo: "FORMULÁRIOS",
        subtitulo: ""
    },
    {
        codigoTutorial: 10,
        titulo: "IMAGENS",
        subtitulo: ""
    },
    {
        codigoTutorial: 11,
        titulo: "VÍDEO",
        subtitulo: ""
    }
]

var cardsTagsHTML = [{
        codigoCardTag: 0,
        titulo: "accesskey",
        descricao: "Determina uma (ou mais) tecla(s) de atalho para o elemento. Para definir mais de uma tecla, coloque-as separadas por espaço."
    },
    {
        codigoCardTag: 1,
        titulo: "class",
        descricao: "Determina uma (ou mais) classe(s) para o elemento. Para definir mais de uma classe, coloque-as separadas por espaço."
    },
    {
        codigoCardTag: 2,
        titulo: "draggable",
        descricao: "Define se um elemento é arrastável ou não."
    },
    {
        codigoCardTag: 3,
        titulo: "hidden",
        descricao: "Oculta o elemento onde for declarado."
    },
    {
        codigoCardTag: 4,
        titulo: "id",
        descricao: "É o identificador único do elemento. Somente deve ser declarado um id por elemento. E este id não deve ser repetido na mesma página."
    },
    {
        codigoCardTag: 5,
        titulo: "lang",
        descricao: "Determina o idioma em que está escrito o conteúdo do elemento."
    },
    {
        codigoCardTag: 6,
        titulo: "style",
        descricao: "Determina propriedades CSS diretamente no elemento."
    },
    {
        codigoCardTag: 7,
        titulo: "tabindex",
        descricao: "Organiza os elementos por ordem de tabulação. Deve-se usar valor numérico."
    },
    {
        codigoCardTag: 8,
        titulo: "title",
        descricao: "Representa um auxílio ao elemento. Semelhante a dica do elemento."
    }
]

var cardsMetaTagsHTML = [{
        codigoCardTag: 0,
        titulo: "Author",
        descricao: "O nome do autor da página."
    },
    {
        codigoCardTag: 1,
        titulo: "Copyright",
        descricao: "Direito autoral da página."
    },
    {
        codigoCardTag: 2,
        titulo: "Description",
        descricao: "Descrição da página."
    },
    {
        codigoCardTag: 3,
        titulo: "Expires",
        descricao: "Data em que o documento deve ser considerado expirado."
    },
    {
        codigoCardTag: 4,
        titulo: "Keywords",
        descricao: "Aqui é um dos locais onde os motores de busca procuram informações a respeito da página."
    }
]

var cardsTagsSemanticas = [{
        codigoCardTag: 0,
        titulo: "header",
        descricao: "O <strong>&lt;header&gt</strong>; é utilizado para representar o cabeçalho de um documento ou seção declarado no HTML. Nele podemos inserir elementos de &lt;h1&gt; a &lt;h6&gt;, até elementos para representar imagens, parágrafos ou mesmo listas de navegação."
    },
    {
        codigoCardTag: 1,
        titulo: "section",
        descricao: "O elemento <strong>&lt;section&gt;</strong> representa uma seção dentro de um documento e geralmente contém um título, o qual é definido por meio de um dos elementos entre &lt;h1&gt; e &lt;h6&gt;. Podemos utilizar o &lt;section&gt;, por exemplo, para descrever as seções/tópicos de um documento."
    },
    {
        codigoCardTag: 2,
        titulo: "nav",
        descricao: "O elemento <strong>&lt;nav&gt;</strong> é utilizado quando precisamos representar um agrupamento de links de navegação, que, por sua vez, são criados com os elementos &lt;ul&gt;, &lt;li&gt; e &lt;a&gt;."
    },
    {
        codigoCardTag: 3,
        titulo: "aside",
        descricao: "O elemento <strong>&lt;aside&gt;</strong> é utilizado quando precisamos criar um conteúdo de apoio/adicional ao conteúdo principal. Por exemplo, ao falar de HTML semântico, podemos indicar ao leitor outros conteúdos sobre a linguagem HTML como sugestão de leitura complementar."
    },
    {
        codigoCardTag: 4,
        titulo: "main",
        descricao: "O elemento <strong>&lt;main&gt;</strong> especifica o conteúdo principal e, consequentemente, de maior relevância dentro da página. Para ser considerada bem construída, uma página deve apresentar apenas um conteúdo principal."
    },
    {
        codigoCardTag: 5,
        titulo: "figure",
        descricao: "O elemento <strong>&lt;figure&gt;</strong> é uma marcação de uso específico para a inserção de uma figura. Para incluir a descrição dessa figura, podemos utilizar o elemento &lt;figcaption&gt;."
    },
    {
        codigoCardTag: 6,
        titulo: "footer",
        descricao: "O elemento <strong>&lt;footer&gt;</strong> representa um rodapé de um documento, como a área presente no final de uma página web. Normalmente é utilizado para descrever informações de autoria, como nome e contato do autor, e data de criação do conteúdo."
    },
]

var cardsTagsSemanticasTexto = [{
        codigoCardTag: 0,
        titulo: "a",
        descricao: "A principal função do elemento <strong>&lt;a&gt;</strong> é descrever um link, conectando os diversos documentos de um site e permitindo a navegação por esse conteúdo. Normalmente esses documentos estão relacionados por compartilharem um assunto em comum."
    },
    {
        codigoCardTag: 1,
        titulo: "em",
        descricao: "O elemento <strong>&lt;em&gt;</strong> é utilizado quando desejamos enfatizar um trecho ou palavra no texto, indicando que ela contribui de forma mais relevante para o sentido/compreensão do conteúdo."
    },
    {
        codigoCardTag: 2,
        titulo: "strong",
        descricao: "O elemento <strong>&lt;strong&gt;</strong> também é utilizado para destacar uma parte do texto. Sua principal diferença em relação ao elemento <em> é que <em> pode alterar o propósito de uma frase, como vimos anteriormente."
    },
    {
        codigoCardTag: 3,
        titulo: "cite e q",
        descricao: "O elemento <strong>&lt;cite&gt;</strong> é utilizado para declarar que naquele trecho há uma citação, isto é, um trecho de texto que não foi escrito pelo autor do conteúdo.Normalmente utiliza-se o &lt;cite&gt; em conjunto com o elemento &lt;q&gt;,responsável por apresentar o conteúdo retirado de outra fonte."
    },
    {
        codigoCardTag: 4,
        titulo: "time",
        descricao: "O elemento <strong>&lt;time&gt;</strong> é utilizado para representar datas.Assim, caso seja necessário informar a data em que um conteúdo foi escrito, podemos declarar a tag &lt;time&gt; e acrescentar a ela o atributo datetime para escrever a data de forma padronizada."
    },
]

var cardsTagsTexto = [{
        codigoCardTag: 0,
        titulo: "Tag de título",
        descricao: "<p class='card-text'>Existem 6 tipos de títulos diferentes em html classificados pelo tamanho de fonte que vão desde <strong>&lt;h1&gt;&lt;/h1&gt;</strong> até<strong>&lt;h6&gt; &lt;/h6&gt</strong>.<div class='code' style='line-height: 15pt; padding-bottom:1px; padding-top:5px;'><p style='margin-top:10px;'>&lt;<span class='rosa'>h1</span>&gt; &lt;/<span class='rosa'>h1</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h2</span>&gt; &lt;/<span class='rosa'>h2</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h3</span>&gt; &lt;/<span class='rosa'>h3</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h4</span>&gt; &lt;/<span class='rosa'>h4</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h5</span>&gt; &lt;/<span class='rosa'>h5</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h6</span>&gt; &lt;/<span class='rosa'>h6</span>&gt;</p></div><p>Motores de busca utilizam os títulos, ou seja, as tags de título para indexar a estrutura e a organização do conteúdo dos sites.</p><p>Essa estrutura indexada segue o padrão: &lt;h1&gt; para os títulos principais, &lt;h2&gt; para os subtítulos, &lt;h3&gt; para os subtítulos dos subtítulos e contínua seguindo essa ordem do mais importante ao menos importante.</p><p><strong>Dica:</strong> Use as tags de título somenta para títulos, jamais pela formatação da fonte!</p></p>"
    },
    {
        codigoCardTag: 1,
        titulo: "Tag de parágrafo",
        descricao: "<p class='card-text'>A tag que representa um parágrafo dentro do html é a tag<b>&lt;p&gt;</b><b>&lt;/p&gt;</b>.<div class='code' style='line-height: 15pt; padding-bottom:1px; padding-top:5px;'><p style='margin-top:10px;'>&lt;<span class='rosa'>p</span>&gt; Páragrafo aqui! &lt;/<span class='rosa'>p</span>&gt;</p></div><p><strong>Observação:</strong> A tag de parágrafo remove todos os espaços adicionais, por isso para colocar espaços em brancos propositalmente, não adianta apenas utilizar espaço, você deve ou criar um estilo para adicionar o espaço ou utilizar a entidade &nbsp; do html.</p></p>"
    },
    {
        codigoCardTag: 2,
        titulo: "Quebra de linha",
        descricao: "<p class='card-text'><p>Para quebrar linhas utilizamos a tag <b>&lt;/br&gt;</b>.</p><p>Existe também a tag &lt;hr&gt;&lt;/hr&gt; que em adicional a quebra de linha, ela cria um desenho de uma linha horizontal indicando o fim da seção.</p></p>"
    },
    {
        codigoCardTag: 3,
        titulo: "Tags de formatação de textos",
        descricao: "<p class='card-text'><p>A tag <b>&lt;b&gt;&lt;/b&gt;</b> é utilizado para deixar o texto em negrito, apenas por questão de estilização.</p><p>A tag <b>&lt;strong&gt;&lt;/strong&gt;</b> tem o mesmo efeito que a tag b visualmente, mas ela serve espeficicamente para ênfatizar o conteúdo do texto que está dentro dela.</p><p>A tag <b>&lt;i&gt;&lt;/i&gt;</b> serve para deixar o texto em itálico, não tem efeito algum na semântica.</p><p>Outra tag que deixa o texto em itálico é a tag <b>&lt;em&gt;&lt;/em&gt;</b>, mas diferente da tag i ela serve vai além de deixar apenas o texto em itálico, ela serve também para dar ênfase ao texto.</p><p>A tag <b>&lt;ins&gt;&lt;/ins&gt;</b> mostra que um texto foi inserido na página.</p><p>Em conjunto com a tag <b>&lt;cite&gt;&lt;/cite&gt;</b> é utilizado a tag &lt;blockquote&gt;&lt;/blockquote&gt; ou a tag &lt;q&gt;&lt;/q&gt; para inserir citações, a tag &lt;blockquote&gt;&lt;/blockquote&gt; para citaçõesmaiores e a tag &lt;q&gt;&lt;/q&gt; para citações menores.</p><p>A tag <b>&lt;abbr&gt;&lt;/abbr&gt;</b> apresenta abreviações, juntamente com a forma completa.</p><p>A tag <b>&lt;address&gt;&lt;/address&gt;</b> serve para especificar as informações de contato do autor/proprietário de um documento ou artigo</p><p>Essa é uma tag de definição <b>&lt;dfn&gt;&lt;/dfn&gt;</b>, ela serve para descrever algum conteúdo, por exemplo, no contexto de um dicionário você usaria da seguinte forma<b>&lt;dfn&gt;Pneumoultramicroscopicossilicovulcanoconiótico&lt;/dfn&gt;</b> Indica alguém ou algo relacionado com uma doença aguda nos pulmões que se origina com a inalação de cinzas vulcânicas.</p><p>A tag <b>&lt;code&gt;&lt;/code&gt;</b> serve para apresentar trechos de códigos dentro de um parágrafo.</p><p>A tag <b>&lt;sub&gt;&lt;/sub&gt;</b> serve para deixar um texto subscrito. Exemplo: H<sub>2</sub>O = Água</p><p>A tag <b>&lt;sup&gt;&lt;/sup&gt;</b> serve para deixar um texto sobscrito. Exemplo 2<sup>2</sup> = 4</p><p>A tag <b>&lt;small&gt;&lt;/small&gt;</b> reduz o tamanho do texto, o objetivo é referir informações redundantes ou inválidas.</p></p>"
    }
]

var cardsListas = [{
        codigoCardTag: 0,
        titulo: "Tag de título",
        descricao: "<p class='card-text'>Existem 6 tipos de títulos diferentes em html classificados pelo tamanho de fonte que vão desde <strong>&lt;h1&gt;&lt;/h1&gt;</strong> até<strong>&lt;h6&gt; &lt;/h6&gt</strong>.<div class='code' style='line-height: 15pt; padding-bottom:1px; padding-top:5px;'><p style='margin-top:10px;'>&lt;<span class='rosa'>h1</span>&gt; &lt;/<span class='rosa'>h1</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h2</span>&gt; &lt;/<span class='rosa'>h2</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h3</span>&gt; &lt;/<span class='rosa'>h3</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h4</span>&gt; &lt;/<span class='rosa'>h4</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h5</span>&gt; &lt;/<span class='rosa'>h5</span>&gt;</p><p style='margin-top:10px;'>&lt;<span class='rosa'>h6</span>&gt; &lt;/<span class='rosa'>h6</span>&gt;</p></div><p>Motores de busca utilizam os títulos, ou seja, as tags de título para indexar a estrutura e a organização do conteúdo dos sites.</p><p>Essa estrutura indexada segue o padrão: &lt;h1&gt; para os títulos principais, &lt;h2&gt; para os subtítulos, &lt;h3&gt; para os subtítulos dos subtítulos e contínua seguindo essa ordem do mais importante ao menos importante.</p><p><strong>Dica:</strong> Use as tags de título somenta para títulos, jamais pela formatação da fonte!</p></p>"
    },
    {
        codigoCardTag: 1,
        titulo: "Tag de parágrafo",
        descricao: "<p class='card-text'>A tag que representa um parágrafo dentro do html é a tag<b>&lt;p&gt;</b><b>&lt;/p&gt;</b>.<div class='code' style='line-height: 15pt; padding-bottom:1px; padding-top:5px;'><p style='margin-top:10px;'>&lt;<span class='rosa'>p</span>&gt; Páragrafo aqui! &lt;/<span class='rosa'>p</span>&gt;</p></div><p><strong>Observação:</strong> A tag de parágrafo remove todos os espaços adicionais, por isso para colocar espaços em brancos propositalmente, não adianta apenas utilizar espaço, você deve ou criar um estilo para adicionar o espaço ou utilizar a entidade &nbsp; do html.</p></p>"
    },
    {
        codigoCardTag: 2,
        titulo: "Quebra de linha",
        descricao: "<p class='card-text'><p>Para quebrar linhas utilizamos a tag <b>&lt;/br&gt;</b>.</p><p>Existe também a tag &lt;hr&gt;&lt;/hr&gt; que em adicional a quebra de linha, ela cria um desenho de uma linha horizontal indicando o fim da seção.</p></p>"
    },
    {
        codigoCardTag: 3,
        titulo: "Tags de formatação de textos",
        descricao: "<p class='card-text'><p>A tag <b>&lt;b&gt;&lt;/b&gt;</b> é utilizado para deixar o texto em negrito, apenas por questão de estilização.</p><p>A tag <b>&lt;strong&gt;&lt;/strong&gt;</b> tem o mesmo efeito que a tag b visualmente, mas ela serve espeficicamente para ênfatizar o conteúdo do texto que está dentro dela.</p><p>A tag <b>&lt;i&gt;&lt;/i&gt;</b> serve para deixar o texto em itálico, não tem efeito algum na semântica.</p><p>Outra tag que deixa o texto em itálico é a tag <b>&lt;em&gt;&lt;/em&gt;</b>, mas diferente da tag i ela serve vai além de deixar apenas o texto em itálico, ela serve também para dar ênfase ao texto.</p><p>A tag <b>&lt;ins&gt;&lt;/ins&gt;</b> mostra que um texto foi inserido na página.</p><p>Em conjunto com a tag <b>&lt;cite&gt;&lt;/cite&gt;</b> é utilizado a tag &lt;blockquote&gt;&lt;/blockquote&gt; ou a tag &lt;q&gt;&lt;/q&gt; para inserir citações, a tag &lt;blockquote&gt;&lt;/blockquote&gt; para citaçõesmaiores e a tag &lt;q&gt;&lt;/q&gt; para citações menores.</p><p>A tag <b>&lt;abbr&gt;&lt;/abbr&gt;</b> apresenta abreviações, juntamente com a forma completa.</p><p>A tag <b>&lt;address&gt;&lt;/address&gt;</b> serve para especificar as informações de contato do autor/proprietário de um documento ou artigo</p><p>Essa é uma tag de definição <b>&lt;dfn&gt;&lt;/dfn&gt;</b>, ela serve para descrever algum conteúdo, por exemplo, no contexto de um dicionário você usaria da seguinte forma<b>&lt;dfn&gt;Pneumoultramicroscopicossilicovulcanoconiótico&lt;/dfn&gt;</b> Indica alguém ou algo relacionado com uma doença aguda nos pulmões que se origina com a inalação de cinzas vulcânicas.</p><p>A tag <b>&lt;code&gt;&lt;/code&gt;</b> serve para apresentar trechos de códigos dentro de um parágrafo.</p><p>A tag <b>&lt;sub&gt;&lt;/sub&gt;</b> serve para deixar um texto subscrito. Exemplo: H<sub>2</sub>O = Água</p><p>A tag <b>&lt;sup&gt;&lt;/sup&gt;</b> serve para deixar um texto sobscrito. Exemplo 2<sup>2</sup> = 4</p><p>A tag <b>&lt;small&gt;&lt;/small&gt;</b> reduz o tamanho do texto, o objetivo é referir informações redundantes ou inválidas.</p></p>"
    }
]

var qtdCardTagsHTML = cardsTagsHTML.length;
var qtdCardMetaTagsHTML = cardsMetaTagsHTML.length;
var qtdTagsSemanticas = cardsTagsSemanticas.length;
var qtdTagsSemanticasTexto = cardsTagsSemanticasTexto.length;
var qtdTagsTexto = cardsTagsTexto.length;
var conteudoCardsTags = null;

var cardTagHtml = [0];
var cardMetaTagHtml = [0];
var cardTagsSemanticas = [0];
var cardTagsSemanticasTexto = [0];
var cardTagsTexto = [0];

for (var i = 0; i < qtdCardTagsHTML; i++) {
    cardTagHtml[i] =
        '<div class="card mb-3 w-100 shadow">' +
        '<div class="card-header text-white bg-orange"><dfn class="tituloDefinicao"> ' + cardsTagsHTML[i].titulo + ' </dfn>' +
        '</div>' +
        '<div class="card-body">' +
        '<p class="card-text">' + cardsTagsHTML[i].descricao + '</p>' +
        '</div>' +
        '</div>'
}

for (var i = 0; i < qtdCardMetaTagsHTML; i++) {
    cardMetaTagHtml[i] =
        '<div class="card mb-3 w-100 shadow">' +
        '<div class="card-header text-white bg-orange"><dfn class="tituloDefinicao"> ' + cardsMetaTagsHTML[i].titulo + ' </dfn>' +
        '</div>' +
        '<div class="card-body">' +
        '<p class="card-text">' + cardsMetaTagsHTML[i].descricao + '</p>' +
        '</div>' +
        '</div>'
}

for (var i = 0; i < qtdTagsSemanticas; i++) {
    cardTagsSemanticas[i] =
        '<div class="card mb-3 w-100 shadow">' +
        '<div class="card-header text-white bg-orange"><dfn class="tituloDefinicao"> ' + cardsTagsSemanticas[i].titulo + ' </dfn>' +
        '</div>' +
        '<div class="card-body">' +
        '<p class="card-text">' + cardsTagsSemanticas[i].descricao + '</p>' +
        '</div>' +
        '</div>'
}

for (var i = 0; i < qtdTagsSemanticasTexto; i++) {
    cardTagsSemanticasTexto[i] =
        '<div class="card mb-3 w-100 shadow">' +
        '<div class="card-header text-white bg-orange"><dfn class="tituloDefinicao"> ' + cardsTagsSemanticasTexto[i].titulo + ' </dfn>' +
        '</div>' +
        '<div class="card-body">' +
        '<p class="card-text">' + cardsTagsSemanticasTexto[i].descricao + '</p>' +
        '</div>' +
        '</div>'
}

for (var i = 0; i < qtdTagsTexto; i++) {
    cardTagsTexto[i] =
        '<div class="card mb-3 w-100 shadow">' +
        '<div class="card-header text-white bg-orange"><dfn class="tituloDefinicao"> ' + cardsTagsTexto[i].titulo + ' </dfn>' +
        '</div>' +
        '<div class="card-body">' +
        '<p class="card-text">' + cardsTagsTexto[i].descricao + '</p>' +
        '</div>' +
        '</div>'
}

var conteudoTutorial = [{
        codigoTutorial: 0,
        paragrafo: [
            "<p>HTML é uma linguagem que utilizamos para desenvolver websites. Sua abreviação vem do inglês e significa <i>Hypertext Markup Language</i> ou em português Linguagem de Marcação de Hipertexto. Ela é utilizada para desenvolver estruturas de páginas web <strong>html não é uma linguagem de programação</strong>.</p>",
            "<p>Basicamente o html encapsula dados em seus elementos, que define e descreve quais são suas funcionalidades dentro de uma página. O navegador, então, lê o código HTML, que diz a ele quais partes correspondem aos títulos, aos parágrafos, aos links etc. O HTML descreve os dados para o navegador, que os exibe de acordo com as instruções. </p>",
            "<p>Os elementos html são representados por tags, elas servem para marcar o ínicio e o fim de um elemento. Tags são palavras reservadas ocultas em páginas da web que definem como o navegador deve formatar e exibir o conteúdo. A maioria das tags devem ter duas partes, uma de abertura e uma de fechamento. Porém, existe algumas excessões dessa regra que não necessitam de fechamento. Um exemplo é a tag &ltimg&gt que serve para mostrar imagens. </p>",
        ],
    },
    {
        codigoTutorial: 1,
        paragrafo: [
            "<p><strong>TAGS</strong> são etiquetas que servem para indicar ao navegador como ele deve apresentar o site.Ou seja, quando escrevo um código HTML estou escrevendo tags que serão interpretadas pelo browser, produzindo assim a estrutura do site.</p>",
            "<p>Todas as tags são definidas por <strong>&lt &gt</strong>. As tags em sua maioria, possuem duas partes, uma tag de abertura e uma de fechamento que indicam o inicio e o fim de um determinado elemento, temos como exemplo a tag <strong>&ltp&gt &lt/p&gt</strong>. Existe também tags que não necessitam de um par, um exemplo disso é a tag <strong>&lthr/&gt</strong>, geralmente esse tipo de tag indica o inicio e o fim na mesma tag inserindo a <strong>/</strong> do lado direito.</p>",
            "<p>O html possui uma série de tag pré definidas para você construir suas páginas, porém, atualmente é possível que você crie suas próprias tags.</p>",
            "<p>Você pode fazer anotações em seu código, essas anotações são chamadas de comentários, os comentários são bastante úteis para estudantes, pois você pode esquecer o que determinada parte do código faz, através do comentário, você pode indicar do que se trata cada parte. Quando um código é desenvolvido em grupo, comentários também pode ser útil, pois assim, não é necessário explicar a cada individuo o que o código faz. Os comentários aparecem apenas no código e fica oculto no browser. Cada linguagem de programação tem o seu próprio formato de comentário, na linguagem de hipertexto (HTML) ele é feito da seguinte forma: <strong>&lt!--ANOTAÇÃO--&gt</strong>.</p>",
            "<p>O HTML não é case-sensitive, ou seja, nos marcadores não faz diferença escrever em maiúsculas ou minúsculas.</p>",
            "<h4>Atributos</h4>",
            "<p>Atributos são informações que passamos na Tag para que ela se comporte da maneira esperada. Existem atributos globais (que funcionam em todas as Tags) e específicos (que são direcionados para cada Tag, através de especificação).</p>",
            "<p>Os Atributos possuem nome e um valor, existem Atributos que você vai usar praticamente sempre e existem outros que serão mais raros.</p>",
            "<p><strong>Atributos globais:</strong></p>",
            cardTagHtml,
            "<p><strong>Exemplo prático de uso de Tags e Atributos:</strong></p>",
            "<div class='code' style='line-height: 15pt; padding-bottom:1px; padding-top:5px;'><p style='margin-top:10px;'>&lt<span class='rosa'>img</span> <span class='verde'>src</span>=<span class='amarelo'>'logo.png' alt='HTML 5 Logo'</span>&gt</p></div>",
            "<p>A Tag <strong>&ltimg&gt</strong> define que o conteúdo do elemento é uma imagem e os atributos que utilizamos são <strong>src</strong> e <strong>alt</strong>.</p>",
            "<p> Existe a possibilidade de você criar o seu próprio atributo, para que o browser renderize isso você precisa criar um código em javascript que lê as tags que possuem esse atributo por exemplo:</p>",
            "<div class='code' style='line-height: 15pt; padding-top: 10px;'> &lt<span class='rosa'>input</span> <span class='verde'>type</span>=<span class='amarelo'>'text'</span> <span class='verde'>startCode-cpf</span>&gt</div>Você pode aplicar por exemplo, uma máscara para colocar cpf. Esse tipo de atributo não é necessário atribuição de um valor.</div>"
        ],
    },
    {
        codigoTutorial: 2,
        paragrafo: [
            "<p>A Meta Tag, representada pela tag <meta> é uma tag diferenciada das demais por não ter nenhum efeito aparente na página em si, mas sim por ser responsável por ações externas à página, como por exemplo informar à buscadores como Google ou Bing algumas informações a respeito da página, como título e uma breve descrição.</p>",
            "<h4>Tipos de Meta Tags</h4>", [cardMetaTagHtml],
        ]
    },
    {
        codigoTutorial: 3,
        paragrafo: [
            "<p>O documento HTML possui uma estrutura básica, você sempre começará o seu HTML por esse código.Geralmente editores de textos como o visual studio code já tem atalhos para iniciar     essa os documentos HTMLs com essa estrutura automáticamente, não é necessário que você decore ela, mas é bom que memorize.</p>",
            "<p><strong>Estrutura Básica:</strong></p>",
            "<div class='code' style='line-height: 15pt;'><p>&lt!<span class='rosa'>DOCTYPE html</span>&gt</p><p>&lt<span class='rosa'>html</span> <span class='verde'>lang</span>=<span class='amarelo'>'pt-br'</span>&gt</p><p>&lt<span class='rosa'>head</span>&gt</p><p>&lt<span class='rosa'>title</span>&gtTítulo da página&lt/<span class='rosa'>title</span>&gt</p><p>&lt<span class='rosa'>meta</span><span class='verde'>charset</span>=<span class='amarelo'>'utf-8'</span>/&gt</p><p>&lt/<span class='rosa'>head</span>&gt</p><p>&lt<span class='rosa'>body</span>&gt</p><p> Aqui vai o código HTML que fará seu site aparecer.</p><p>&lt/<span class='rosa'> body </span>&gt</p><p>&lt/<span class='rosa'>html</span>&gt</p></div>",
            "<p>É possível compreender o documento em HTML de uma maneira muito simples, através de uma divisão de blocos das tags essenciais, conforme a a seguinte estrutura: </p>",
            "<ul style='margin-left: 20px;'><li>Definição do documento (doctype)</li><li>Cabeça (head)</li><li>Corpo (body)</li><li>Doctype - Definindo o documento</li></ul>",
            "<p>O doctype não é uma tag HTML, mas uma instrução para o navegador e outros programas que podem ler seu site, que o código encontrado ali é um código HTML. Assim eles sabem o que fazer para mostrar seu site da melhor forma possível. Lembre-se: o doctype é OBRIGATÓRIO e deve ser sempre a PRIMEIRA LINHA do seu documento.</p>",
            "<p><strong>HEAD</strong></p>",
            "<p>Contém informações que não são transpostas visivelmente para o usuário/leitor do documento. São dados implícitos, de uso e controle do documento: vinculação com outros arquivos, aplicação de lógica de programação de scripts e metadados. Na prática, todo o conteúdo do cabeçalho fica delimitado entre a abertura e fechamento tag head.</p>",
            "<p><strong>BODY</strong></p>",
            "<p>Trata-se do documento em si, ou seja, a informação legível para o usuário/leitor do documento. É todo e qualquer texto que se deseja apresentar, assim como toda e qualquer forma de mídia de saída (imagens, sons, miniaplicativos embutidos, conteúdo multimídia, etc). Além disso, toda a apresentação de entrada de dados (formulários) também se aplica neste seção do documento. Na prática, o corpo do documento é delimitado pelo par de tags</p>",
            "<p><strong>&ltbody&gt</strong> e <strong>&lt/body&gt</strong>.</p>",
            "<p>Este é o preceito básico que deve estar muito bem claro para você: onde as marcações se aplicam, e quais são os resultados deste modelo. Por exemplo: se vocês deseja informar conteúdo textual para saída legível ao usuário do seu sistema web, esta marcação deverá obrigatoriamente estar no bloco do corpo da página. Ainda: para definir qual o tipo de codificação da página (uma meta informação do documento), esta deve obrigatoriamente estar marcada no cabeçalho do mesmo documento.</p>",
            "<p>Dentro do elemento BODY sua estrutura de página terá os elementos semânticos da construção da sua página, onde serão declarados e identificados cabeçalhos, rodapé, conteúdo principal, etc.</p>"
        ]
    },
    {
        codigoTutorial: 4,
        paragrafo: [
            "<p>O HTML semântico tem como objetivo descrever o significado do conteúdo presente em documentos HTML, tornando - o mais claro tanto para programadores quanto para browsers e outras engines que processam essa informação. </p>",
            "<p> É graças a semântica que sua página vai indexar bem ou não nos buscadores. Não somente por isso, a semântica ajuda na acessibilidade de sua página ou aplicação. </p>",
            "<p>O Crawler do Google não vai ver se sua página está bonitinha, mas vai ler seu HTML e indexar conforme o conteúdo esteja estruturado. Um leitor de tela também não vai ficar falando pra pessoa com necessidades especiais que determinado botão é uma lixeira ou um xiszinho vermelho, mas vai ler as tags e identificar o que você escreveu no atributo x e falar para o usuário.</p>",
            "<h4>Principais tags semânticas:</h4>",
            cardTagsSemanticas,
            "<h4>Semântica no nível de texto</h4>",
            "<p>Além da semântica estrutural, o HTML nos permite descrever o significado de um conteúdo em nível de texto utilizando um conjunto de elementos semânticos. Assim, é possível, por exemplo, destacar os trechos de texto que devem receber algum tipo de destaque. </p>",
            cardTagsSemanticasTexto
        ]
    },
    {
        codigoTutorial: 5,
        paragrafo: [
            "As tags de formatação de textos, não servem somente para formatar os textos de forma visual, o principal objetivo dessas tags é deixar o html semântico, ou seja, descrever o conteúdo do documento para o browser para o melhor entendimento. Algumas das tags abaixo já foram vistas no capítulo 'Semântica', mas serão abordadas novamente para facilitar o entendimento.",
            cardTagsTexto
        ]
    },
    {
        codigoTutorial: 6,
        paragrafo: [
            "<p> Lista é um importante recurso de HTML, pois permite criarmos tópicos de textos para uma melhor exemplificação de um determinado assunto. São recursos extremamente usados, inclusive quando nem imaginamos que ele esta sendo usado, como no caso de menus. Hoje, boa parte dos menus em HTML é feito com listas. Há três tipos de listas:<ul style='margin-left:20px;'><li>Não ordenada</li><li>Ordenada</li><li>De definição</li></ul></p>",

        ]
    }
]

$(document).ready(function() {
    //#region [Navbar]
    $('#navBarPages').append(
        '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand" href="../../index.html"><img src="../../img/logo.png" width="80px;"></a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"' +
        'aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarNavDropdown">' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item active">' +
        '<a class="nav-link" href="../../index.html">INICIAL <span class="sr-only">(Página atual)</span></a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="#">SOBRE</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" href="#">SNIPPETS</a>' +
        '</li>' +
        '<li class="nav-item dropdown">' +
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"' +
        'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
        'FRONT-END' +
        '</a>' +
        '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">' +
        '<a class="dropdown-item" href="../html5/html5.html">HTML5</a>' +
        '<a class="dropdown-item" href="#">CSS3</a>' +
        '<a class="dropdown-item" href="#">JAVASCRIPT</a>' +
        '</div>' +
        '</li>' +
        '<li class="nav-item dropdown">' +
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"' +
        'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
        'BACK-END' +
        '</a>' +
        '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">' +
        '<a class="dropdown-item" href="#">MySQL</a>' +
        '<a class="dropdown-item" href="../c/c.html">C#</a>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</nav>'
    );
    ////#endregion [Navbar]

    var ultimoTutorial = (tituloTutorial.length) - 1;

    $("#divBtnVoltar").append(
        '<div class="botao widthMax divBtnProximo">' +
        '<a href="tutoriais.html?codigoTutorialURL=' + codigoBtnVoltar + '" class="btn" id="btnVoltar">Voltar</a>' +
        '<a href="tutoriais.html?codigoTutorialURL=' + codigoBtnProximo + '" class="btn" id="btnProximo">Próximo</a>' +
        '</div>'
    );

    if (parseInt(codigoTutorialURL) == 0) {
        $("#btnVoltar").css("display", "none");
    } else if (parseInt(codigoTutorialURL) == ultimoTutorial) {
        $("#btnProximo").css("display", "none");
    }

    var qtdTitulosTutoriais = tituloTutorial.length;
    for (var i = 0; i < qtdTitulosTutoriais; i++) {
        if (tituloTutorial[i].codigoTutorial == parseInt(codigoTutorialURL)) {
            $("#tituloPrincipal").append(
                '<h1 class="tituloPrincipalHtml"> ' + tituloTutorial[i].titulo + ' </h1>'
            )

            $("#subtitulo").append(
                '<h4 id="subtitulo"> ' + tituloTutorial[i].subtitulo + ' </h4>'
            )
        }
    }

    for (var i = 0; i < qtdTitulosTutoriais; i++) {
        if (conteudoTutorial[i].codigoTutorial == parseInt(codigoTutorialURL)) {
            var qtdParagrafos = conteudoTutorial[i].paragrafo.length;
            for (var b = 0; b < qtdParagrafos; b++) {
                $("#textoConteudo").append(
                    '<div class="textoConteudo"> ' + conteudoTutorial[i].paragrafo[b] + ' </div>'
                )
            }

        }
    }

});