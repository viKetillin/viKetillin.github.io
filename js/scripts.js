function btnVoltar_onClick() {
    window.history.back();
}

$(document).ready(function() {
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
                    '<a class="nav-link" href="index.html">INICIAL <span class="sr-only">(Página atual)</span></a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="#">SOBRE</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="#">SNIPPETS</a>'+
                '</li>'+
                '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"'+
                        'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                        'FRONT-END'+
                    '</a>'+
                    '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">'+
                        '<a class="dropdown-item" href="paginas/html5/html5.html">HTML5</a>'+
                        '<a class="dropdown-item" href="#">CSS3</a>'+
                        '<a class="dropdown-item" href="#">JAVASCRIPT</a>'+
                    '</div>'+
                '</li>'+
                '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"'+
                        'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                        'BACK-END'+
                    '</a>'+
                    '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">'+
                        '<a class="dropdown-item" href="#">MySQL</a>'+
                    '</div>'+
                '</li>'+
            '</ul>'+
        '</div>'+
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
                    '<a class="nav-link" href="../../index.html">INICIAL <span class="sr-only">(Página atual)</span></a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="#">SOBRE</a>'+
                '</li>'+
                '<li class="nav-item">'+
                    '<a class="nav-link" href="#">SNIPPETS</a>'+
                '</li>'+
                '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"'+
                        'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                        'FRONT-END'+
                    '</a>'+
                    '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">'+
                        '<a class="dropdown-item" href="../html5/html5.html">HTML5</a>'+
                        '<a class="dropdown-item" href="#">CSS3</a>'+
                        '<a class="dropdown-item" href="#">JAVASCRIPT</a>'+
                    '</div>'+
                '</li>'+
                '<li class="nav-item dropdown">'+
                    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"'+
                        'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
                        'BACK-END'+
                    '</a>'+
                    '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">'+
                        '<a class="dropdown-item" href="#">MySQL</a>'+
                    '</div>'+
                '</li>'+
            '</ul>'+
        '</div>'+
    '</nav>'
);

});