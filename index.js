function isScrollReached(percentage) {
  const contentHeight = $(document).height();
  const scrollPosition = $(window).height() + $(window).scrollTop();
  return percentage >= ((contentHeight - scrollPosition) / contentHeight);
}

function isMobile() {
  const documentWidth = $(document).width();
  return documentWidth < 1024;
}


window.addEventListener('scroll', () => {
  if(isScrollReached(0.8)) {
    $('.js-header').addClass('is-scrolled');
  } else {
    $('.js-header').removeClass('is-scrolled');
  }
});

function hasIsShow() {
  if ($(event.target).next('.js-toggleContent').hasClass('is-show')) {
    return true;
  }
}

$(() => {
  $('.js-toggle').on('click', () => {
    if(hasIsShow()){  
      $(event.target).next('.js-toggleContent').removeClass('is-show');
    } else {
      $(event.target).next('.js-toggleContent').addClass('is-show');
    }
  });
  
  const movie = isMobile() ? document.getElementById('js-movie-sp') : document.getElementById('js-movie-pc');
  
  $('.js-moviePlay').on('click', () => {
    $('#js-movie-sp')[0].play();
    movie.play();
    $('.js-moviePlay').addClass('is-clicked');
  }); 
  
  
  movie.addEventListener('play', () => {
     movie.addEventListener('mouseover',() => {
      movie.setAttribute("controls", "controls");
    }).removeEventListener('mouseover', () => {
       movie.removeAttribute("controls");
     });
  });
});
