$('.main').css('display', 'none')
jQuery(document).ready(function ($) {
    $('.chargement').fadeOut('slow')
    $('.main').fadeIn('slow')
    //change le fond du header pendant le scroll
    //et affiche le bouton retour
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('header').css('background', 'linear-gradient(205deg, rgba(0, 204, 211) 0%, rgba(0, 218, 138) 100%)');
            $('.retour-btn').fadeIn();
        } else {
            $('header').css('background', 'linear-gradient(205deg, rgba(0, 204, 211, 0) 0%, rgba(0, 218, 138, 0) 100%)');
            $('.retour-btn').fadeOut();
        }

        //la class active change de liens pendant le scroll
        var tabLiens = [];
        $id = null;
        $('#liens a, #mobile a').each(function () {
            tabLiens.push($($(this).attr('href')));
        })

        var scrollTop = $(this).scrollTop();
        for (var i in tabLiens) {
            var tabLiensI = tabLiens[i];
            if (scrollTop > tabLiensI.offset().top - 200) {
                $id = tabLiensI.attr('id');
            }
        }
        $('#liens a').removeClass('active');
        $('#liens a[href="#' + $id + '"]').addClass('active')

        $('#mobile a').removeClass('active');
        $('#mobile a[href="#' + $id + '"]').addClass('active')

    });


    //gere le click sur le bouton click 
    $('.retour-btn').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    //je passe une condition pour afficher le header si le scroll est superieur a 100
    if ($(this).scrollTop() > 100) {
        $('header').css('background', 'linear-gradient(205deg, rgba(0, 204, 211) 0%, rgba(0, 218, 138) 100%)');
        $('.retour-btn').fadeIn();
    }

    //gere la navigation mobile
    //1. affiche la navigation
    $('.fa-align-justify').on('click', function () {
        $('.mobile-liens').show(400);
        $('.fixed-top').css('display', 'none');
        $('.retour-btn').fadeOut();
        $('.owl-carousel').css('display', 'none')
    });
    //2.masque le navigation sur click du bouton ferme
    $('.fa-times').on('click', function () {
        $('.mobile-liens').hide(400);
        $('.fixed-top').css('display', 'block');
        $('.retour-btn').fadeIn();
        $('.owl-carousel').css('position', 'relative')
        $('.tete .fa-align-justify').css('margin-top', '27px');
        $('.owl-carousel').css('display', 'block')
    });
    //3.masque le navigation sur le click d'un lien
    $('#mobile a').on('click', function () {
        $('.mobile-liens').hide(200);
        $('.fixed-top').css('display', 'block');
        $('.tete .fa-align-justify').css('margin-top', '30px');
        $('.owl-carousel').css('display', 'block')

    });
    $('.btnvoir').on('click', function () {
        $('.cacher').slideToggle(500);
    });


    //gere la galerie
    $equipeLien = $('.equipe-liens a');
    $equipeL = $('.equipe-liens li');
    $equipeLien.on('click', function (e) {
        e.preventDefault();
        //on remove la class active
        $equipeLien.removeClass('active');
        $equipeL.removeClass('activeLi');

        //on l'ajoute sur le a cliquer
        $(this).addClass('active');
        $(this).parent().addClass('activeLi');


        //on affiche les photos apropriés au lien
        $equipePhoto = $(this).attr('href');
        $('.equipe-photo').css('display', 'none');
        $('.equipe-photo' + $equipePhoto).fadeIn();

        if ($equipePhoto == '#tous') {
            $('.equipe-photo').fadeIn();
            return true;
        }
    });

    //gere le scroll de la navigation
    $nav = $('#liens a, #mobile a, #acceuil a');
    $nav.on('click', function (e) {
        $nav.removeClass('active');
        $(this).addClass('active');
        var lienSpy = $(this.hash);
        var scrollto = lienSpy.offset().top - 100;
        $('html, body').animate({
            scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

    });
    
    $('.owl-carousel').owlCarousel({
        autoplay:true,
        autoplaySpeed:1500,
        autoplayHoverPause:true,
        stagePadding:35,
        loop:true,
        margin:10,
        nav:true,
        navText:[
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ], 
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    })
    
});
