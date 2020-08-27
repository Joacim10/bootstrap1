
var $owl1 = $('#owl1');

$owl1.children().each( function( index ) {
  $(this).attr( 'data-position', index )});

$owl1.owlCarousel({
  loop:true,
  margin:80,
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



