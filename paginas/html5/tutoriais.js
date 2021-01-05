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
    subtitulo: "O que são links"
},
{
    codigoTutorial: 7,
    titulo: "LINKS",
    subtitulo: ""
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
}]

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
}]

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
}]

var qtdCardTagsHTML = cardsTagsHTML.length;
var qtdCardMetaTagsHTML = cardsMetaTagsHTML.length;
var conteudoCardsTags = null;

var cardTagHtml = [0]; 
var cardMetaTagHtml = [0]; 

for(var i = 0; i < qtdCardTagsHTML; i++) {
    cardTagHtml[i] =
        '<div class="card mb-3 w-100 shadow">' +
            '<div class="card-header text-white bg-orange"><dfn class="tituloDefinicao"> ' + cardsTagsHTML[i].titulo + ' </dfn>'+
            '</div>'+
            '<div class="card-body">'+
                '<p class="card-text">' + cardsTagsHTML[i].descricao + '</p>' +
            '</div>'+
        '</div>'
}

for(var i = 0; i < qtdCardMetaTagsHTML; i++) {
    cardMetaTagHtml[i] =
        '<div class="card mb-3 w-100 shadow">' +
            '<div class="card-header text-white bg-orange"><dfn class="tituloDefinicao"> ' + cardsMetaTagsHTML[i].titulo + ' </dfn>'+
            '</div>'+
            '<div class="card-body">'+
                '<p class="card-text">' + cardsMetaTagsHTML[i].descricao + '</p>' +
            '</div>'+
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
        "<h4>Tipos de Meta Tags</h4>",
        [cardMetaTagHtml],
    ]
},
]

$(document).ready(function () {
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