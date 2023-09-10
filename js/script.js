// js
$(function() {
  $('.open_btn').on('click',function(){// .btnをクリックすると〜
      $('.open_btn').toggleClass('active');// .btnにcloseというクラスが追加される
      $('.header_menu').toggleClass('active');// .btnにcloseというクラスが追加される
      $('.nav').toggleClass('active');// .btnにcloseというクラスが追加される
      // $('.nav').fadeToggle(500);// navの表示・非表示切り替わる
    });
  });

//出てきたメニューをクリックした時
$('nav a').click(function(){
  $('nav').toggleClass('active');
  $('.header_menu').toggleClass('active');// .btnにcloseというクラスが追加される
  $('.open_btn').toggleClass('active')
    // $('.h1').toggleClass('active')
});

 //トップへ戻るボタンを途中で表示
 $(function() {
  // 変数にクラスを入れる
  var btn = $('.to_pagetop');
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 500) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });
  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});


//スクロールでふわっと表示
// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime_up(){
    // ふわっ
    $('.item_img').each(function(){ //fadeUpTriggerというクラス名が
      var elemPos = $(this).offset().top;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      // $(this).addClass('.fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
      $(this).css('opacity', '1');
      $(this).css('transform', 'translateY(0)');
      }
      });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime_up();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述

  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    // $(window).on('load', function(){
    //   fadeAnime();/* アニメーション用の関数を呼ぶ*/
    // });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  
/*pickup スライダー　slick */
$('.pickup_wrap').slick({
  arrows: false,
  centerMode: true,
  centerPadding: '100px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '50px',
        slidesToShow: 1
      }
    }
  ]
});

/**
 * スムーズスクロール
 */
$('a[href^="#"]').click(function(){
  // リンクを取得
  let href= $(this).attr("href");
  // ジャンプ先のid名をセット
  let target = $(href == "#" || href == "" ? 'html' : href);
  // トップからジャンプ先の要素までの距離を取得
  let position = target.offset().top;
  // animateでスムーススクロールを行う
  // 600はスクロール速度で単位はミリ秒
  $("html, body").animate({scrollTop:position}, 600, "swing");
  return false;
});
