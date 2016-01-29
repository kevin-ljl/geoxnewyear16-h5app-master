
<!--WeChat Autho
====================================================== -->
<?php 
  // session_start();
    
  // $_SESSION['url'] = 'http://'.$_SERVER['SERVER_NAME'].$_SERVER["REQUEST_URI"];
  //  if(!isset($_SESSION["openid"]) && !isset($_SESSION["headimgurl"]) && !isset($_SESSION["nickname"]))
  //  {
  //        include_once 'weChat/weChatAutho.php';
  //  }else
  //   {
  //        //userinfo
  //        //echo 'openid:'.$_SESSION['openid'] . '<br />';
  //        //echo 'headimgurl:'.$_SESSION['img'] . '<br />';
  //        //echo 'nickname:'.$_SESSION['nickname'] . '<br />';
  //   }
     //for debug
    $_SESSION['openid'] = 'o1zitjlK5QY7rH113wDe2f96ThUtOw';
    $_SESSION['img'] = 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLBUibh2dXOLU3DkiblnVLNCfOb6D6ViawSD8mtPSFl86lVg59cdSIZ7u40lBLPr3ibvVc1xynrpn2U2UQ/0';
    $_SESSION['nickname'] = 'coton_chen';
?>

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

    <link rel="stylesheet" href="css/app.css">
    <link rel="stylesheet" href="js/swiper/swiper.min.css">
    <link rel="stylesheet" href="js/swiper/animate.min.css">

</head>
<body>
<!-- loading -->
<div class="loading">
  <img class="loader-e-2" src="img/load/bg.png" alt="">
  <div id="loader-e-1" class="loader-e-1"></div>
  <div class="loader"><h1></h1></div>
</div> 

<!-- pagelist-->
<div class="swiper-container">
    <div class="swiper-wrapper">

        <div class="swiper-slide p1">
                <img src="img/p1/bg.png" alt="">
                <img class="e-1-1 ani" src="img/p1/e-1.png" alt="" swiper-animate-effect="zoomIn" swiper-animate-delay="0.1s">
                <img class="e-1-2 ani" src="img/p1/e-2.png" alt="" swiper-animate-effect="bounceInUp" swiper-animate-delay="0.2s">
                <img class="e-1-3 ani" src="img/p1/e-3.png" alt="" swiper-animate-effect="bounceInUp" swiper-animate-delay="0.3s">
                <img class="e-1-4 ani" src="img/p1/e-4.png" alt="" swiper-animate-effect="bounceInUp" swiper-animate-delay="0.4s">
                <img class="e-1-5 ani" src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
        </div>

        <div class="swiper-slide p2">
                <img data-src="img/p2/bg.png" alt="">
                <img class="e-2-1 ani" data-src="img/p2/e-1.png" alt="" swiper-animate-effect="bounceInLeft" swiper-animate-delay="0.2s">
                <img class="e-2-2 ani" data-src="img/p2/e-2.png" alt="" swiper-animate-effect="bounceInRight" swiper-animate-delay="0.6s">
                <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
        </div>

        <div class="swiper-slide p3">
          <img data-src="img/p3/bg.png" alt="">
                <img class="e-3-1" data-src="img/p3/e-1.png" alt="">
                <img class="e-3-2 ani" data-src="img/p3/e-2.png" alt="" swiper-animate-effect="fadeInDown" swiper-animate-delay="0.2s">
                <img class="e-3-3 ani" data-src="img/p3/e-3.png" alt="" swiper-animate-effect="zoomInRight" swiper-animate-delay="0.6s">
          <div class="a3-1">
              <div id="e-3-4" class="e-3-4"></div>
              <div id="e-3-5" class="e-3-4"></div>
              <div id="e-3-6" class="e-3-4"></div>
          </div>
                <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
                <img class="float" data-src="img/p11/1.png" alt="">
                <img class="p4-a" data-src="img/p11/2.png" alt="">   
        </div>

        <div class="swiper-slide p4">
          <div class="a4-2">
                <img data-src="img/p4/bg.png" alt="">
                <img class="e-3-1" data-src="img/p3/e-1.png" alt="">
                <img class="e-4-1 ani" data-src="img/p4/e-1.png" alt="" swiper-animate-effect="fadeInDown" swiper-animate-delay="0.2s">
                <img class="e-4-2 ani" data-src="img/p4/e-2.png" alt="" swiper-animate-effect="zoomInLeft" swiper-animate-delay="0.4s">
                  <div id="e-4-3-1" class="e-4-3"></div>
                  <div id="e-4-3-2" class="e-4-3"></div>
                  <div id="e-4-3-3" class="e-4-3"></div>
                  <div id="e-4-3-4" class="e-4-3"></div>
                  <div id="e-4-3-5" class="e-4-3"></div>
                  <div id="e-4-3-6" class="e-4-3"></div>
                  <div id="e-4-3-7" class="e-4-3"></div>
                  <div id="e-4-3-8" class="e-4-3"></div>
                <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
          </div>
              <img class="p5-a" data-src="img/p11/2.png" alt="">
              <img class="p6-a" data-src="img/p11/3.png" alt="">       
        </div>

        <div class="swiper-slide p5">
        <div class="a5-3">
              <img data-src="img/p5/bg.png" alt="">
              <img class="e-3-1" data-src="img/p3/e-1.png" alt="">
              <img class="e-5-1 ani" data-src="img/p5/e-1.png" alt="" swiper-animate-effect="fadeInDown" swiper-animate-delay="0.2s">
              <img class="e-5-2 ani" data-src="img/p5/e-2.png" alt="" swiper-animate-effect="zoomInRight" swiper-animate-delay="0.4s">
              <div id="e-5-4" class="e-5-4"></div>
              <div id="e-5-5" class="e-5-4"></div>
              <div id="e-5-6" class="e-5-4"></div>
              <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
        </div>
              <img class="p7-a" data-src="img/p11/3.png" alt="">
              <img class="p8-a" data-src="img/p11/4.png" alt="">   
        </div>

        <div class="swiper-slide p6">
        <div class="a6-4">
              <img data-src="img/p6/bg.png" alt="">
              <img class="e-3-1" data-src="img/p3/e-1.png" alt="">
              <img class="e-6-1 ani" data-src="img/p6/e-1.png" alt="" swiper-animate-effect="fadeInDown" swiper-animate-delay="0.2s">
              <img class="e-6-2 ani" data-src="img/p6/e-2.png" alt="" swiper-animate-effect="zoomInLeft" swiper-animate-delay="0.4s">
              <div id="e-6-4" class="e-6-4"></div>
              <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
          </div>
              <img class="p9-a" data-src="img/p11/4.png" alt="">
              <img class="p10-a" data-src="img/p11/5.png" alt="">
        </div>

        <div class="swiper-slide p7">
          <div class="a7-5">
              <img data-src="img/p7/bg.png" alt="">
              <img class="e-3-1 ani" data-src="img/p3/e-1.png" alt="" swiper-animate-duration="3s">
              <img class="e-7-1 ani" data-src="img/p7/e-1.png" alt="" swiper-animate-effect="fadeInDown" swiper-animate-delay="0.2s">
              <img class="e-7-2 ani" data-src="img/p7/e-2.png" alt="" swiper-animate-effect="zoomInRight" swiper-animate-delay="0.4s">
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
              <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
          </div>
          <img class="p11-a" data-src="img/p11/5.png" alt="">
          <img class="p12-a" data-src="img/p11/6.png" alt="">            
        </div>

        <div class="swiper-slide p8">
         <div class="a8-6">
              <img data-src="img/p8/bg.png" alt="">
              <img class="e-3-1 ani" data-src="img/p3/e-1.png" alt="" swiper-animate-duration="3s">
              <img class="e-8-1 ani" data-src="img/p8/e-1.png" alt="" swiper-animate-effect="fadeInDown" swiper-animate-delay="0.2s">
              <img class="e-8-2 ani" data-src="img/p8/e-2.png" alt="" swiper-animate-effect="zoomInLeft" swiper-animate-delay="0.4s">
              <img class="e-8-5" data-src="img/p8/e-5.png" alt="">
              <img class="e-8-6" data-src="img/p8/e-6.png" alt="">
              <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
          </div>
          <img class="p13-a" data-src="img/p11/6.png" alt="">
          <img class="p14-a" data-src="img/p11/7.png" alt="">           
        </div>

        <div class="swiper-slide p9">
          <div class="a9-7">
              <img data-src="img/p9/bg.png" alt="">
              <img class="e-3-1 " data-src="img/p3/e-1.png" alt="" swiper-animate-duration="3s">
              <img class="e-9-1 ani" data-src="img/p9/e-1.png" alt="" swiper-animate-effect="fadeInDown" swiper-animate-delay="0.2s">
              <img class="e-9-2 ani" data-src="img/p9/e-2.png" alt="" swiper-animate-effect="zoomInRight" swiper-animate-delay="0.4s">
              <img class="e-1-5 ani" data-src="img/p1/e-5.png" alt="" swiper-animate-effect="slideInUp infinite" swiper-animate-delay="0.5s">
              <img class="e-9-3" data-src="img/p9/1.png" alt="">
          </div>
          <img class="p15-a" data-src="img/p11/7.png" alt="">
          <img class="p16-a" data-src="img/p11/7.png" alt="">                  
        </div>

        <!-- <div class="swiper-slide p10">
          <img data-src="img/p10/bg10.png" alt="" class="e-10-2">
          <img class="e-10-1 ani" data-src="img/p10/10-1.png" alt="" swiper-animate-effect="slideInDown infinite" swiper-animate-delay="0.5s">         
        </div> -->

    </div>
</div>
<img class="button1" data-src="img/p11/e-5.png" alt="">
<img class="button2" data-src="img/p11/e-3.png" alt="">
<img class="logo" data-src="img/p11/e-1.png" alt="">


<!-- audio player -->
<div class="audio-icon">
    <audio id="audio-player" src="media/audio/cloud.mp3" preload="preload" loop="loop" />
</div>


<img class="hiddenimg"  src="img/p1/bg.png" alt="">
<img class="hiddenimg"  src="img/p2/bg.png" alt="">
<img class="hiddenimg"  src="img/p3/bg.png" alt="">
<img class="hiddenimg"  src="img/p4/bg.png" alt="">
<img class="hiddenimg"  src="img/p5/bg.png" alt="">
<img class="hiddenimg"  src="img/p6/bg.png" alt="">
<img class="hiddenimg"  src="img/p7/bg.png" alt="">
<img class="hiddenimg"  src="img/p8/bg.png" alt="">
<img class="hiddenimg"  src="img/p9/bg.png" alt="">
<img class="hiddenimg"  src="img/p11/e-1.png" alt="">
<img class="hiddenimg"  src="img/p11/e-2.png" alt="">
<img class="hiddenimg"  src="img/p11/e-3.png" alt="">
<img class="hiddenimg"  src="img/p10/bg10.png" alt="">
<img class="hiddenimg"  src="img/p10/e-5.png" alt="">
<img class="hiddenimg"  src="img/p10/e-2.png" alt="">
<img class="hiddenimg"  src="img/p10/e-3.png" alt="">
<img class="hiddenimg"  src="img/p10/e-4.png" alt="">
<img class="hiddenimg"  src="img/p10/e-5.png" alt="">
<img class="hiddenimg"  src="img/p10/e-6.png" alt="">
<img class="hiddenimg"  src="img/p10/e-7.png" alt="">

<!--Script
====================================================== -->
<script src="js/zepto/zepto.min.js"></script>
<script src="js/motion/loader.min.js"></script>
<script src="js/swiper/swiper.min.js"></script>
<script src="js/motion/film.min.js"></script>
<script src="js/utils/uuid.core.js"></script>
<script src="js/swiper/swiper.animate1.0.2.min.js"></script>
<script src="js/fastclick/fastclick.js"></script>
<script src="js/motion/landscape.min.js"></script>
<script src="js/motion/overlay.min.js"></script>  
<?php include_once 'weChat/weChatShareJS.php';?>
<script>
    var $OPENID = "<?php echo $_SESSION['openid'] ?>";
    var $HEADIMGURL = "<?php echo $_SESSION['img'] ?>";
    var $NICKNAME = "<?php echo $_SESSION['nickname'] ?>";
</script>
<script src="js/app.js"></script>
</body>
</html>


