// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  }); 
});

$('.grid-item').on('click', function() {
  $(this).toggleClass('grid-item--gigante');
  $grid.masonry();
});
     