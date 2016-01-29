<!-- for debug
http://localhost/geoxnewyear16-h5app/share.php?id=f9bb3722-a925-40fe-a83b-ff9421446f63&p=6
-->
<!DOCTYPE html>
<html lang="en">
<!-- <html lang="en" manifest="app.appcache"> -->
<head>
	<meta charset="UTF-8">
	<title>云系列新春日历</title>

    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=640, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no">

    <link rel="stylesheet" href="css/share.css">
    <link rel="stylesheet" href="js/swiper/animate.min.css">

</head>
<body>
<!-- loading -->
<div class="loading">
  <img class="loader-e-2" src="img/load/bg.png" alt="">
  <div id="loader-e-1" class="loader-e-1"></div>
  <div class="loader"><h1></h1></div>
</div> 

<div class="share">
    
    <div class="spage p3">
              <img data-src="img/p11/bg.png" alt="" class="share-bg">
              <img data-src="img/p3/e-3.png" alt="" class="shoes">
              <img data-src="img/p3/e-4.png" alt="" class="shoes e-3-4">
              <div id="e-3-4" class="e-3-4"></div>
              <div id="e-3-5" class="e-3-4"></div>
              <div id="e-3-6" class="e-3-4"></div>

    </div>

    <div class="swiper-slide p4">
              <img data-src="img/p11/bg.png" alt="" class="share-bg">
              <img data-src="img/p4/e-2.png" alt="" class="shoes">
              <div id="e-4-3-1" class="e-4-3"></div>
              <div id="e-4-3-2" class="e-4-3"></div>
              <div id="e-4-3-3" class="e-4-3"></div>
              <div id="e-4-3-4" class="e-4-3"></div>
              <div id="e-4-3-5" class="e-4-3"></div>
              <div id="e-4-3-6" class="e-4-3"></div>
              <div id="e-4-3-7" class="e-4-3"></div>
              <div id="e-4-3-8" class="e-4-3"></div>
    </div>

    <div class="swiper-slide p5">
          <img data-src="img/p11/bg.png" alt="" class="share-bg">
          <img data-src="img/p5/e-2.png" alt="" class="shoes">
          <div id="e-5-4" class="e-5-4"></div>
          <div id="e-5-5" class="e-5-4"></div>
          <div id="e-5-6" class="e-5-4"></div>
    </div>

    <div class="swiper-slide p6">
          <img data-src="img/p11/bg.png" alt="" class="share-bg">
          <img data-src="img/p6/e-2.png" alt="" class="shoes">
          <img data-src="img/p6/e-3.png" alt="" class="e-6-4">
          <div id="e-6-4" class="e-6-4"></div>
    </div>

    <div class="swiper-slide p7">
          <img data-src="img/p11/bg.png" alt="" class="share-bg">
          <img data-src="img/p7/e-2.png" alt="" class="shoes">
          <img class="e-7-3" data-src="img/p7/e-3.png" alt="">
          <img class="e-7-4" data-src="img/p7/p7-1/1.png" alt="">
          <img class="e-7-5" data-src="img/p7/p7-1/2.png" alt="">
          <img class="e-7-6" data-src="img/p7/p7-1/3.png" alt="">
          <img class="e-7-7" data-src="img/p7/p7-1/4.png" alt="">
          <img class="e-7-8" data-src="img/p7/p7-1/5.png" alt="">
          <img class="e-7-9" data-src="img/p7/p7-1/6.png" alt="">
          <img class="e-7-10" data-src="img/p7/p7-1/7.png" alt="">
          <img class="e-7-11" data-src="img/p7/p7-1/8.png" alt="">
          <img class="e-7-12" data-src="img/p7/p7-1/9.png" alt="">
          <img class="e-7-13" data-src="img/p7/p7-1/10.png" alt="">         
    </div>
    <div class="swiper-slide p8">
          <img data-src="img/p11/bg.png" alt="" class="share-bg">
          <img class="e-8-5" data-src="img/p8/e-5.png" alt="">
          <img class="e-8-6" data-src="img/p8/e-6.png" alt="">
          <img data-src="img/p8/e-2.png" alt="" class="shoes">
    </div>

    <div class="swiper-slide p9">
          <img data-src="img/p11/bg.png" alt="" class="share-bg">
          <img data-src="img/p9/e-2.png" alt="" class="shoes">
          <img class="e-9-3" data-src="img/p9/1.png" alt="">           
    </div>

</div>

<div class="userinfo">
  <div class="user">
      <img src="" alt="" class="userimg">            
      <div class="username"></div>                            
  </div>

  <img src="img/p11/e-4.png" alt="" class="button"> 
  <img src="img/p11/e-6.png" alt="" class="button ani" alt="" swiper-animate-effect="flash infinite"  swiper-animate-delay="0.6s" swiper-animate-duration="1s">
  <img src="img/transparent.png" alt="" class="btn-goto">

</div>

<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/loader.min.js"></script>
<script src="js/swiper/swiper.min.js"></script>
<script src="js/motion/film.min.js"></script>
<script src="js/swiper/swiper.animate1.0.2.min.js"></script>
<script src="js/fastclick/fastclick.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/share.js"></script>
<?php include_once 'weChat/weChatShareJS.php';?>
</body>
</html>