function respoNavOpen(){
    document.getElementById('respoNav').style.cssText ='visibility: visible;';
    document.getElementById('navBarBars').style.cssText ='display: none;';
    document.getElementById('navBarCross').style.cssText ='display: block;';
}

function respoNavClose(){
    document.getElementById('respoNav').style.cssText ='visibility: hidden;';
    document.getElementById('navBarBars').style.cssText ='display: block;';
    document.getElementById('navBarCross').style.cssText ='display: none;';
}


//Jqeury for owl carousel
$('.experience_kerala').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.whats_happening').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})