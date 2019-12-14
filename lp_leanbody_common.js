function isScrollReached(percentage) {
  const contentHeight = $(document).height();
  const scrollPosition = $(window).height() + $(window).scrollTop();
  return percentage >= ((contentHeight - scrollPosition) / contentHeight);
}

function isMobile() {
  const documentWidth = $(document).width();
  return documentWidth < 768;
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



// 1桁の数字を0埋めで2桁にする
function toDoubleDigits(num) {
  num += "";
  if (num.length === 1) {
    num = "0" + num;
  }
 return num;     
};


// 日付をYYYY/MM/DD HH:DD:MI:SS形式で取得
let yyyymmddhhmiss = function() {
  let date = new Date();
  let mm = toDoubleDigits(date.getMonth() + 1);
  let dd = toDoubleDigits(date.getDate());
  let hh = toDoubleDigits(date.getHours());
  let mi = toDoubleDigits(date.getMinutes());
  return hh + ':' + mi;
}
  
function dateCounter() {
    let timer = setInterval(function() {
    //現在の日時取得
    let nowDate = new Date();
    //カウントダウンしたい日を設定
    let anyDate = new Date("2019/12/18 00:00:00");
    //日数を計算
    let daysBetween = Math.ceil((anyDate - nowDate)/(1000*60*60*24));
    let ms = (anyDate - nowDate);
    if (ms >= 0) {
        //時間を取得
        let h = Math.floor(ms / 3600000);
        let _h = h % 24;
        //分を取得
        let m = Math.floor((ms - h * 3600000) / 60000);
        //秒を取得
        let s = Math.round((ms - h * 3600000 - m * 60000) / 1000);
        
        let hh = toDoubleDigits(_h);
        let mm = toDoubleDigits(m);
        let ss = toDoubleDigits(s);
        
        //HTML上に出力
        document.getElementById("js-countdown").innerHTML = hh + ":" + mm + ":" + ss;
    } else {
        return;
    }
    }, 1000);
  console.log();
}
dateCounter();
