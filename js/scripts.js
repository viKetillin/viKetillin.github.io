var page = window.location.pathname;
var pageHTML = "/paginas/html5/html5.html";
var pageC = "/paginas/c/c.html";
var dataSourceCard = null;
var datasourceCardHTML = null;
var dataSourceCardC = null;

datasourceCardHTML = [{
    tituloCard: "INTRODUÇÃO",
    descricaoCard: "Entenderemos o que é HTML (Hypertext Markup Language), sua estrutura e qual é seu objetivo no contexto do desenvolvimento de software.",
    hrefBotao: "introducao.html",
},
{
    tituloCard: "TAGS",
    descricaoCard: "Aqui iremos ver o que são tags e os principais atributos dessas tags.",
    hrefBotao: "tags.html",
},
{
    tituloCard: "META TAGS",
    descricaoCard: "Aqui encontraremos todas as informações que você precisa saber sobre meta tags.",
    hrefBotao: "metaTags.html",
},
{
    tituloCard: "ESTRUTURA",
    descricaoCard: "Aqui veremos a estrutura básica do HTML.",
    hrefBotao: "estrutura.html",
},
{
    tituloCard: "SEMÂNTICA",
    descricaoCard: "Entenderemos o significado das informações HTML para páginas da Web.",
    hrefBotao: "semantica.html",
},
{
    tituloCard: "TEXTO",
    descricaoCard: "Nesta parte falarei sobre a formatação de texto no html e meu objetivo é que você entenda como organizar seu conteúdo distribuindo corretamento os títulos, parágrafos, negritos, itálicos, etc de forma semântica.",
    hrefBotao: "texto.html",
},
{
    tituloCard: "LISTAS",
    descricaoCard: "Nessa parte aprenderemos sobre representações de listas no HTML.",
    hrefBotao: "listas.html",
},
{
    tituloCard: "LINKS",
    descricaoCard: "Nessa seção encontraremos informações sobre links.",
    hrefBotao: "links.html",
},
{
    tituloCard: "TABELAS",
    descricaoCard: "Nessa sessão entenderemos o que são tabelas e como incluir em páginas HTML.",
    hrefBotao: "tabelas.html",
},
{
    tituloCard: "FORMULÁRIOS",
    descricaoCard: "Veremos como estruturar um formulário HTML.",
    hrefBotao: "formularios.html",
},
{
    tituloCard: "IMAGENS",
    descricaoCard: "Aqui veremos como inserir imagens em seu web site.",
    hrefBotao: "imagens.html",
},
{
    tituloCard: "VIDEO",
    descricaoCard: "Nessa sessão veremos como inserir vídeos através do HTML em sua página web.",
    hrefBotao: "video.html",
},
]

datasourceCardC = [{
    tituloCard: "Visão geral",
    descricaoCard: "Nessa sessão veremos uma macrovisão do curso.",
    hrefBotao: "introducao.html",
},
{
    tituloCard: "TAGS",
    descricaoCard: "Aqui iremos ver o que são tags e os principais atributos dessas tags.",
    hrefBotao: "tags.html",
},
{
    tituloCard: "META TAGS",
    descricaoCard: "Aqui encontraremos todas as informações que você precisa saber sobre meta tags.",
    hrefBotao: "metaTags.html",
},
{
    tituloCard: "ESTRUTURA",
    descricaoCard: "Aqui veremos a estrutura básica do HTML.",
    hrefBotao: "estrutura.html",
},
{
    tituloCard: "SEMÂNTICA",
    descricaoCard: "Entenderemos o significado das informações HTML para páginas da Web.",
    hrefBotao: "semantica.html",
},
{
    tituloCard: "TEXTO",
    descricaoCard: "Nesta parte falarei sobre a formatação de texto no html e meu objetivo é que você entenda como organizar seu conteúdo distribuindo corretamento os títulos, parágrafos, negritos, itálicos, etc de forma semântica.",
    hrefBotao: "texto.html",
},
{
    tituloCard: "LISTAS",
    descricaoCard: "Nessa parte aprenderemos sobre representações de listas no HTML.",
    hrefBotao: "listas.html",
},
{
    tituloCard: "LINKS",
    descricaoCard: "Nessa seção encontraremos informações sobre links.",
    hrefBotao: "links.html",
},
{
    tituloCard: "TABELAS",
    descricaoCard: "Nessa sessão entenderemos o que são tabelas e como incluir em páginas HTML.",
    hrefBotao: "tabelas.html",
},
{
    tituloCard: "FORMULÁRIOS",
    descricaoCard: "Veremos como estruturar um formulário HTML.",
    hrefBotao: "formularios.html",
},
{
    tituloCard: "IMAGENS",
    descricaoCard: "Aqui veremos como inserir imagens em seu web site.",
    hrefBotao: "imagens.html",
},
{
    tituloCard: "VIDEO",
    descricaoCard: "Nessa sessão veremos como inserir vídeos através do HTML em sua página web.",
    hrefBotao: "video.html",
},
]

if (window.location.pathname == pageHTML) {
    dataSourceCard = datasourceCardHTML;
} else if (window.location.pathname == pageC) {
    dataSourceCard = dataSourceCardC;
} else {
    dataSourceCard = null;
}

var iconStar = "M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999 c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499 l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822 c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345 c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z";
var iconBook = "M17.92,3.065l-1.669-2.302c-0.336-0.464-0.87-0.75-1.479-0.755C14.732,0.008,7.653,0,7.653,0v5.6 c0,0.096-0.047,0.185-0.127,0.237c-0.081,0.052-0.181,0.06-0.268,0.02l-1.413-0.64C5.773,5.183,5.69,5.183,5.617,5.215l-1.489,0.65 c-0.087,0.038-0.19,0.029-0.271-0.023c-0.079-0.052-0.13-0.141-0.13-0.235V0H2.191C1.655,0,1.233,0.434,1.233,0.97 c0,0,0.025,15.952,0.031,15.993c0.084,0.509,0.379,0.962,0.811,1.242l2.334,1.528C4.671,19.905,4.974,20,5.286,20h10.307 c1.452,0,2.634-1.189,2.634-2.64V4.007C18.227,3.666,18.12,3.339,17.92,3.065z M16.42,17.36c0,0.464-0.361,0.833-0.827,0.833H5.341 l-1.675-1.089h10.341c0.537,0,0.953-0.44,0.953-0.979V2.039l1.459,2.027V17.36L16.42,17.36z";

function btnVoltar_onClick() {
    window.history.back();
}

$(document).ready(function () {
    $('#navBar').append(
        '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
        '<a class="navbar-brand" href="index.html"><img src="img/logo.png" width="80px;"></a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"' +
        'aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">' +
        '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="navbarNavDropdown">' +
        '<ul class="navbar-nav">' +
        '<li class="nav-item active">' +
        '<a class="nav-link" href="index.html">INICIAL <span class="sr-only">(Página atual)</span></a>' +
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
        '<a class="dropdown-item" href="paginas/html5/html5.html">HTML5</a>' +
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
        '<a class="dropdown-item" href="paginas/c/c.html">C#</a>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</nav>'
    );

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

    var qtdCards = datasourceCard.length;

    for (var i = 0; i < qtdCards; i++) {
        var par = i % 2;
        var ladoCard = null;
        var iconCard = null;

        if (par != 0) {
            ladoCard = " right";
        } else {
            ladoCard = "";
        }

        if (i == 0) {
            iconCard = iconStar;
        } else {
            iconCard = iconBook;
        }

        $("#timelineItem").append(
            '<div class="timeline-item">' +
            '<div class="timeline-icon">' +
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"' +
            'xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="20px"' +
            'viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">' +
            '<path fill="#FFFFFF" d="' + iconCard + '" />' +
            '</svg>' +
            '</div>' +
            '<div class="timeline-content' + ladoCard + '">' +
            '<h2> ' + datasourceCard[i].tituloCard + ' </h2>' +
            '<p>' +
            datasourceCard[i].descricaoCard +
            '</p>' +
            '<a href="' + datasourceCard[i].hrefBotao + '" class="btn btnTimeline">Ver Conteúdo</a>' +
            '</div>' +
            '</div>'
        );
    }


});