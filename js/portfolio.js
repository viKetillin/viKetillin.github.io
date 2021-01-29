var urlString = window.location.href;
var url = new URL(urlString);
var codigoNav = url.searchParams.get("codigoNav");

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    if (screen.width <= 1024) {
        $(".divInfoContato").removeClass("col-md-6");
        $(".divInfoContato").addClass("col-md-12");
    }

    if (screen.width <= 768) {
        $(".removerCol").removeClass("col-md-1");
        $(".removerCol").removeClass("col-md-11");
        $(".removerCol .fas, .removerCol .fab").css("margin-right", "12px");
    }
};

var $window = $(window);

$window.on("mousewheel DOMMouseScroll", onMouseWheel);

function onMouseWheel(event) {
    var delta = event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

    if (delta < -1) {
        var newCodeNav = null;
        if (parseInt(codigoNav) < 4) {
            newCodeNav = parseInt(codigoNav) + 1;
            window.location.href = "index.html?codigoNav=" + newCodeNav;
        }
    } else if (delta > 1) {
        var newCodeNav = null;
        if (parseInt(codigoNav) > 0) {
            newCodeNav = parseInt(codigoNav) - 1;
            window.location.href = "index.html?codigoNav=" + newCodeNav;
        }
    }
    event.preventDefault();
}


$(document).ready(function() {
    $("#sidebar").append(
        '<nav>' +
        '<div class="imgPortfolio">' +
        '<img src="img/eu.png" alt="Minha foto com um cachorro">' +
        '</div>' +
        '<ul class="ulNome">' +
        '<li class="liNome">Vitória Ketillin</li>' +
        '<li class="liCargo">Desenvolvedora web</li>' +
        '</ul>' +
        '<ul class="ulNav">' +
        '<li id="navInicio"><a href="index.html?codigoNav=0"><i class="fas fa-home"></i> Inicial</li>' +
        '<li id="navSobre"><a href="index.html?codigoNav=1"><i class="fas fa-female"></i> Sobre</a></li>' +
        '<li id="navResumo"><a href="index.html?codigoNav=2"><i class="fas fa-graduation-cap"></i> Resumo</a></li>' +
        '<li id="navPortfolio"><a href="index.html?codigoNav=3"><i class="fas fa-briefcase"></i> Portfólio</a></li>' +
        '<li id="navContato"><a href="index.html?codigoNav=4"><i class="fas fa-address-book"></i> Contato</a></li>' +
        '<li><a target="_blank" href="indexHTML.html"><i class="fas fa-chalkboard-teacher"></i> Tutoriais</a></li>' +
        '</ul>' +

        '<span style="text-align: center; font-size: 12px; color:  rgba(255, 255, 255, 0.705); position: absolute; bottom: 18px; left: 28px;">Copyright © Code Lady - 2019</span>' +
        '</nav>'
    );

    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        $("nav").slideToggle(900);
    });

    //#region [Display sessões]
    if (parseInt(codigoNav) == 0 || codigoNav == null) {
        $("#navInicio").addClass("active");
        $("#divInicio").css("display", "");
        $("#divSobre").css("display", "none");
        $("#divResumo").css("display", "none");
        $("#divPortfolio").css("display", "none");
        $("#divContato").css("display", "none");
    } else if (parseInt(codigoNav) == 1) {
        $("#navSobre").addClass("active");
        $("#divInicio").css("display", "none");
        $("#divSobre").css("display", "");
        $("#divResumo").css("display", "none");
        $("#divPortfolio").css("display", "none");
        $("#divContato").css("display", "none");
    } else if (parseInt(codigoNav) == 2) {
        $("#navResumo").addClass("active");
        $("#divInicio").css("display", "none");
        $("#divSobre").css("display", "none");
        $("#divResumo").css("display", "");
        $("#divPortfolio").css("display", "none");
        $("#divContato").css("display", "none");
    } else if (parseInt(codigoNav) == 3) {
        $("#navPortfolio").addClass("active");
        $("#divInicio").css("display", "none");
        $("#divSobre").css("display", "none");
        $("#divResumo").css("display", "none");
        $("#divPortfolio").css("display", "");
        $("#divContato").css("display", "none");
    } else if (parseInt(codigoNav) == 4) {
        $("#navContato").addClass("active");
        $("#divInicio").css("display", "none");
        $("#divSobre").css("display", "none");
        $("#divResumo").css("display", "none");
        $("#divPortfolio").css("display", "none");
        $("#divContato").css("display", "");
    }
    //#endregion [Display sessões]

    //#region [Display botões]
    $("#btnEducacao").click(function() {
        $("#btnEducacao").addClass("ativo");
        $("#btnExperiencia").removeClass("ativo");
        $("#btnHabilidades").removeClass("ativo");

        $("#sessaoEducacao").css("display", "");
        $("#sessaoExperiencia").css("display", "none");
        $("#sessaoHabilidades").css("display", "none");
    });
    $("#btnExperiencia").click(function() {
        $("#btnExperiencia").addClass("ativo");
        $("#btnEducacao").removeClass("ativo");
        $("#btnHabilidades").removeClass("ativo");

        $("#sessaoEducacao").css("display", "none");
        $("#sessaoExperiencia").css("display", "");
        $("#sessaoHabilidades").css("display", "none");
    });
    $("#btnHabilidades").click(function() {
        $("#btnHabilidades").addClass("ativo");
        $("#btnEducacao").removeClass("ativo");
        $("#btnExperiencia").removeClass("ativo");

        $("#sessaoEducacao").css("display", "none");
        $("#sessaoExperiencia").css("display", "none");
        $("#sessaoHabilidades").css("display", "");
    });
    //#endregion [Display botões]
});