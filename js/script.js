//COUNTING NUMBERS
var hasCounted = false;

function startCounting() {
  $('.counter').countTo()
  //ADDING A "." AFTER COUNTING
  setTimeout(delayedFunction, 2500)
  hasCounted = true;
}

function delayedFunction() {
  let x = document.getElementById('counter-with-commas').innerText
  document.getElementById('counter-with-commas').innerText = numberWithCommas(x)
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

//FADING IN FROM SIDES
function callbackFunc(entries) {
  entries.forEach(entry => {
    element = document.getElementById(entry.target.id)

    if (entry.isIntersecting) {
      if (entry.target.id.includes('Right')) element.classList.add('fadeInRight', 'fadeIn')
      else if (entry.target.id.includes('Left')) element.classList.add('fadeInLeft', 'fadeIn')
      else if (entry.target.id.includes('Down')) element.classList.add('fadeInDown', 'fadeIn')
      else if (entry.target.id.includes('Up')) element.classList.add('fadeInUp', 'fadeIn')
      else if (entry.target.id === 'counting' && hasCounted === false) startCounting()
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  };

let observer = new IntersectionObserver(callbackFunc, options);

let fadeElements = ['fadeInLeft1', 'fadeInRight1', 'fadeInUp1', 'fadeInDown1', 'fadeInLeft2', 'fadeInRight2', 'fadeInUp2', 
'fadeInLeft3', 'fadeInRight3', 'fadeInUp3', 'fadeInUp4', 'counting']

fadeElements.forEach(id => {
  observer.observe(document.getElementById(id))
})


//CAROUSELS
var $owl1 = $('#owl1');

$owl1.children().each( function( index ) {
  $(this).attr( 'data-position', index )});

$owl1.owlCarousel({
  loop:true,
  margin:80,
  autoplay:true,
  autoplayTimeout: 2000,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      576:{
          items:2
      },
      992:{
          items:3
      },
      1200:{
          items:4
      }
  }
})


var $owl2 = $('#owl2');

$owl2.children().each( function( index ) {
  $(this).attr( 'data-position', index )});

$owl2.owlCarousel({
    center: true,
    loop: true,
    responsive:{
      0:{
          items:3
      },
      992:{
          items:5
      },
  }
});


$(document).on('click', '.owl-item>div', function() {
  var $speed = 300;
  $owl2.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});



