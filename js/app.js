var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};
/* loader */
app.template.loader = function(){};
app.template.loader.init= function(){
	// loader
    var getSource = function(){
        var res = [];
        res.push("img/load/bg.png");
        res.push("img/load/1.png");
        res.push("img/load/2.png");
        res.push("img/load/3.png");
        res.push("img/load/4.png");
        res.push("img/load/5.png");
        res.push("img/load/6.png");
        res.push("img/load/7.png");
        res.push("img/load/8.png");
        res.push("img/load/9.png");
        res.push("img/load/10.png");
        res.push("img/load/11.png");
        res.push("img/load/12.png");
        res.push("img/load/13.png");

        return res;
    }

    new mo.Loader(getSource(),{
        loadType : 1,
        minTime : 100,
        onLoading : function(count,total){
            console.log('onloading:single loaded:',arguments)
            $(".loader h1").html(' '+Math.round(count/total*100)+'%');
        },
        onComplete : function(time){
            console.log('oncomplete:all source loaded:',arguments);
            app.template.destory();
            app.template.loader.done_callback.call();
            app.template.loader.done_callback2.call();
        }
    });
    $(".audio-icon").hide();
};
app.template.loader.done_callback = function(){};
app.template.loader.done_callback2 = function(){};

app.template.destory = function(){
    $(".loading").remove();
};

/* Landscape */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

/* pageslide swiper */
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.init = function(){
	app.template.loader.done_callback = this.bind;
};
app.template.swiper.bind = function(){
 $(".swiper-container").css("display", "block");

    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:500,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        direction : 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画 

            app.template.swiper.on_pageslideend(0);
        }, 
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

            app.template.swiper.on_pageslideend(swiper.activeIndex);
            //app.template.swiper.mySwiper.lockSwipes();
        } 
    });

    //app.template.swiper.lock();
};
app.template.swiper.lock = function(){
	app.template.swiper.mySwiper.lockSwipes();
};
app.template.swiper.on_pageslideend = function(index){};

app.template.swiper.next = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideNext();
};

app.template.swiper.prev = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slidePrev();
};

app.template.swiper.to = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};
app.template.swiper.touch = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};

app.template.touch = function(){};
app.template.touch.eventlistener_handler = function(e){

    //e.stopPropagation();  // 阻止事件传递
    e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
};


app.template.touch.init = function(){

    // fastclick
    FastClick.attach(document.body);

    document.body.addEventListener("touchmove", app.template.touch.eventlistener_handler, false);

    $("body").on("doubleTap longTap swipeUp swipedown", function(e){
        // e.stopPropagation();  // 阻止事件传递
         e.preventDefault();   // 阻止浏览器默认动作(网页滚动)
        return false;
    });
};

app.template.data = {};
app.template.data.add = function(key, value){
    app.template.data[key] = value;
};
app.template.data.get = function(key){
    return app.template.data[key];
};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
	var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};


/*-- audio player
====================================================== */
app.audio = function(){};
app.audio.player = undefined;
app.audio.status = "";
app.audio.init = function(){
    app.audio.player = $("#audio-player");

    $(".audio-icon").on("touchend", function(){
        if(app.audio.player[0].paused)
        {
            app.audio.play();
            $(".audio-icon").addClass("audio-icon-animation");
        }
        else
        {
            app.audio.pause();
            $(".audio-icon").removeClass("audio-icon-animation");
        }
    });

    app.template.loader.done_callback2 = app.audio.show;
};


app.audio.show = function(){
    $(".audio-icon").css({"display": "block"});
    $(".audio-icon").addClass("audio-icon-animation");
    app.audio.play();
};

app.audio.play = function(){
    $(".audio-icon").removeClass("audio-icon-stop");
    app.audio.player[0].play();
    if(!app.audio.player[0].paused)
        app.audio.status = "play";
};

app.audio.pause = function(){
    app.audio.status = "pause";
    app.audio.player[0].pause();
};

app.audio.pause_bysystem = function(){
    app.audio.status = "pause_bysystem";
    app.audio.player[0].pause();
};

app.audio.stop = function(){
    app.audio.player.attr("src", "");
    app.audio.player[0].load();
};

app.audio.changesong = function(src){
    app.audio.player.attr("src", src);
    app.audio.player[0].load();

    if(app.audio.status == "play")
       app.audio.play(); 
};

app.audio.play_tap = function(){
    if(app.audio.status == "play")
        $("#audio-player-tap")[0].play();
};



/*-- loading
====================================================== */
app.loading = function(){};

app.loading.init = function(){
  this.show_animation();
};

app.loading.show_animation = function(){
    var resource = ["img/load/1.png"  
                   , "img/load/2.png"  
                   , "img/load/3.png"  
                   , "img/load/4.png"  
                   , "img/load/5.png" 
                   , "img/load/6.png"  
                   , "img/load/7.png" 
                   , "img/load/8.png"  
                   , "img/load/9.png" 
                   , "img/load/10.png"  
                   , "img/load/11.png"  
                   , "img/load/12.png"  
                   , "img/load/13.png" 
                ];  

    $('#loader-e-1').html("");  
    var multiplePic = new mo.Film(document.querySelector('#loader-e-1'),{  
        resource : resource,  
        totalFrame : 13,  //帧数
        playTime: 500  
    });  
    multiplePic.play(100);//每帧播放时间差  
}; 

/*-- p1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){
    app.p1.loadallresource();
};

app.p1.loadallresource = function(){
  $("img[data-src]").each(function(i, n){
    $(this).attr("src", $(this).attr("data-src")).removeAttr("data-src");
  });
};

app.p1.bind_touch_event = function(){

};

app.p1.destory = function(){  
};

/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
    $(".p2").on("touchend",function(){});
};
app.p2.bind_touch_event = function(){

     $(".p2 .e-1-5").on("touchend", function(){
     });
};

app.p2.destory = function(){  
};
/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){
    this.show_animation1();
    this.show_animation2();
    this.show_animation3();
};

app.p3.show_animation1 = function(){
          var resource = ["img/p3/p3-1/4.png"  
                                 , "img/p3/p3-1/5.png"  
                      ];  
      
          $('#e-3-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-3-4'),{  
              resource : resource,  
              totalFrame : 2,  //帧数
              playTime: 400  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  

app.p3.show_animation2 = function(){
          var resource = ["img/p3/p3-1/6.png"  
                         , "img/p3/p3-1/7.png"    
                      ];  
      
          $('#e-3-5').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-3-5'),{  
              resource : resource,  
              totalFrame : 2,  //帧数
              playTime: 400  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  

app.p3.show_animation3 = function(){
          var resource = ["img/p3/p3-1/8.png"  
                         , "img/p3/p3-1/9.png"    
                      ];  
      
          $('#e-3-6').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-3-6'),{  
              resource : resource,  
              totalFrame : 2,  //帧数
              playTime: 400  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  
app.p3.bind_touch_event = function(){
     $(".p3 .e-1-5").on("touchend", function(){
     });

     $(".p3").on("swipeLeft", function(){ 
                 
          $(".a3-1").hide();
          $(".float").show();
          $(".p4-a").show();
          setTimeout(function(){
          $(".button1").show();
          $(".button2").show();            
          $(".logo").show();            
        },2000);

        app.template.swiper.lock();
        app.wechat.sharecontent_update(0);
        app.template.data.add("page",1);
      });
};





app.p3.destory = function(){
  $('#e-3-4').html("");   
  $('#e-3-5').html(""); 
  $('#e-3-6').html(""); 
};
/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init = function(){
    this.show_animation_firework();
};
app.p4.init = function(){
       this.show_animation();
};
app.p4.show_animation_firework = function(){
          var resource = ["img/p4/p4-1/p4-1-1/1.png"  
                         , "img/p4/p4-1/p4-1-1/2.png"  
                         , "img/p4/p4-1/p4-1-1/3.png"  
                         , "img/p4/p4-1/p4-1-1/4.png" 
                         , "img/p4/p4-1/p4-1-1/5.png"  
                         , "img/p4/p4-1/p4-1-1/6.png"  
                         , "img/p4/p4-1/p4-1-1/7.png"    
                      ];  
      
          $('#e-4-3-1').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-1'),{  
              resource : resource,  
              totalFrame : 42,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差  
};  

app.p4.show_animation_firework2 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-1/8.png"  
                         , "img/p4/p4-1/p4-1-1/9.png"  
                         , "img/p4/p4-1/p4-1-1/10.png"  
                         , "img/p4/p4-1/p4-1-1/11.png"  
                         , "img/p4/p4-1/p4-1-1/12.png"  
                         , "img/p4/p4-1/p4-1-1/13.png"  
                         , "img/p4/p4-1/p4-1-1/14.png"  
                      ];  
      
          $('#e-4-3-2').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-2'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          }); 
           multiplePic.play(200);//每帧播放时间差  
};  
app.p4.show_animation_firework3 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-1/15.png"
                         , "img/p4/p4-1/p4-1-1/16.png"  
                         , "img/p4/p4-1/p4-1-1/17.png"  
                         , "img/p4/p4-1/p4-1-1/18.png"  
                         , "img/p4/p4-1/p4-1-1/19.png"  
                         , "img/p4/p4-1/p4-1-1/20.png"   
                         , "img/p4/p4-1/p4-1-1/21.png"  
                      ];  
      
          $('#e-4-3-3').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-3'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差  
};  

app.p4.show_animation_firework4 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-2/1.png"  
                         , "img/p4/p4-1/p4-1-2/2.png"  
                         , "img/p4/p4-1/p4-1-2/3.png"  
                         , "img/p4/p4-1/p4-1-2/4.png" 
                         , "img/p4/p4-1/p4-1-2/5.png"  
                         , "img/p4/p4-1/p4-1-2/6.png"  
                         , "img/p4/p4-1/p4-1-2/7.png"   
                      ];  
      
          $('#e-4-3-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-4'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差 
};  

app.p4.show_animation_firework5 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-3/1.png"  
                         , "img/p4/p4-1/p4-1-3/2.png"  
                         , "img/p4/p4-1/p4-1-3/3.png"  
                         , "img/p4/p4-1/p4-1-3/4.png" 
                         , "img/p4/p4-1/p4-1-3/5.png"  
                         , "img/p4/p4-1/p4-1-3/6.png"  
                         , "img/p4/p4-1/p4-1-3/7.png"  
                      ];  
      
          $('#e-4-3-5').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-5'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差
};  

app.p4.show_animation_firework6 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-3/8.png"  
                         , "img/p4/p4-1/p4-1-3/9.png"  
                         , "img/p4/p4-1/p4-1-3/10.png"  
                         , "img/p4/p4-1/p4-1-3/11.png"  
                         , "img/p4/p4-1/p4-1-3/12.png"  
                         , "img/p4/p4-1/p4-1-3/13.png"  
                         , "img/p4/p4-1/p4-1-3/14.png"   
                      ];  
      
          $('#e-4-3-6').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-6'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差  
};  
app.p4.show_animation_firework7 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-4/1.png"  
                         , "img/p4/p4-1/p4-1-4/2.png"  
                         , "img/p4/p4-1/p4-1-4/3.png"  
                         , "img/p4/p4-1/p4-1-4/4.png"  
                         , "img/p4/p4-1/p4-1-4/5.png"  
                         , "img/p4/p4-1/p4-1-4/6.png"  
                         , "img/p4/p4-1/p4-1-4/7.png"  
                      ];  
      
          $('#e-4-3-7').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-7'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差
};  

app.p4.show_animation_firework8 = function(){
          var resource = [ 
                           "img/p4/p4-1/p4-1-4/8.png"  
                         , "img/p4/p4-1/p4-1-4/9.png"  
                         , "img/p4/p4-1/p4-1-4/10.png"  
                         , "img/p4/p4-1/p4-1-4/11.png"  
                         , "img/p4/p4-1/p4-1-4/12.png"  
                         , "img/p4/p4-1/p4-1-4/13.png"  
                         , "img/p4/p4-1/p4-1-4/14.png"  
                      ];  
      
          $('#e-4-3-8').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-4-3-8'),{  
              resource : resource,  
              totalFrame : 7,  //帧数
              playTime: 800  
          });  
          multiplePic.play(200);//每帧播放时间差  
};  
app.p4.show_animation=function(){
          this.show_animation_firework();
          this.show_animation_firework2();
          this.show_animation_firework3();
           setTimeout(function(){
            app.p4.show_animation_firework4();
           }, 600);
           setTimeout(function(){
            app.p4.show_animation_firework5();
            app.p4.show_animation_firework6();
           }, 1200);     
           setTimeout(function(){
            app.p4.show_animation_firework7();
            app.p4.show_animation_firework8();
           }, 1800);   
}


app.p4.bind_touch_event = function(){

     $(".p4").on("swipeLeft", function(){
     
          $(".a4-2").hide();
          $(".p5-a").show();
          $(".p6-a").show();
          setTimeout(function(){
          $(".button1").show();
          $(".button2").show();            
          $(".logo").show();            
        },2000); 
        app.template.data.add("page",2);  
        app.template.swiper.lock();
        app.wechat.sharecontent_update(1);
      });
};


app.p4.destory = function(){ 
    $('#e-4-3-1').html(""); 
    $('#e-4-3-2').html(""); 
    $('#e-4-3-3').html(""); 
    $('#e-4-3-4').html(""); 
    $('#e-4-3-5').html(""); 
    $('#e-4-3-6').html(""); 
    $('#e-4-3-7').html(""); 
    $('#e-4-3-8').html(""); 
};
/*-- p5
====================================================== */
app.p5 = function(){};
app.p5.init = function(){
    this.show_animation5();
};
app.p5.bind_touch_event = function(){
     $(".p5").on("swipeLeft", function(){  
        
          $(".p7-a").show();
          $(".p8-a").show();
          $(".a5-3").hide();
          setTimeout(function(){
          $(".button1").show();
          $(".button2").show();            
          $(".logo").show();            
        },2000);
        app.template.data.add("page",3);
        app.template.swiper.lock();
        app.wechat.sharecontent_update(2);
      });
};
app.p5.show_animation5 = function(){
          var resource = [ "img/transparent.png"
                           ,"img/p5/1.png"
                           ,"img/p5/2.png" 
                           ,"img/p5/3.png"
                      ];  
      
          $('#e-5-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-5-4'),{  
              resource : resource,  
              totalFrame : 3,  //帧数
              playTime: 4000  
          });  
          multiplePic.play(1000);//每帧播放时间差  
}; 



app.p5.destory = function(){
  $('#e-5-4').html("");   
};
/*-- p6
====================================================== */
app.p6 = function(){};
app.p6.init = function(){
    this.show_animation_boat();
};
app.p6.show_animation_boat = function(){
          var resource = ["img/p6/1.png"  
                                 ,"img/p6/2.png" 
                                 ,"img/p6/3.png" 
                      ];  
      
          $('#e-6-4').html("");  
          var multiplePic = new mo.Film(document.querySelector('#e-6-4'),{  
              resource : resource,  
              totalFrame : 3,  //帧数
              playTime: 1500  
          });  
          multiplePic.play(500);//每帧播放时间差  
};  
app.p6.bind_touch_event = function(){
     $(".p6").on("swipeLeft", function(){ 
     
          $(".p9-a").show();
          $(".p10-a").show();
          $(".a6-4").hide();
          setTimeout(function(){
          $(".button1").show();
          $(".button2").show();            
          $(".logo").show();            
        },2000);
        app.template.data.add("page",4); 
        app.template.swiper.lock();
        app.wechat.sharecontent_update(3);
      });
};

app.p6.destory = function(){ 
  $('#e-6-4').html("");  
};
/*-- p7
====================================================== */
app.p7 = function(){};
app.p7.init = function(){
          $(".p8 .e-8-5").hide();
          $(".p8 .e-8-6").hide();
};
app.p7.bind_touch_event = function(){
     $(".p7").on("swipeLeft", function(){  
        
          $(".p11-a").show();
          $(".p12-a").show();
          $(".a7-5").hide();
          setTimeout(function(){
          $(".button1").show();
          $(".button2").show();            
          $(".logo").show();            
        },2000);
        app.template.data.add("page",5);
        app.template.swiper.lock();
        app.wechat.sharecontent_update(4);
      });
};


app.p7.destory = function(){ 
};

/*-- p8
====================================================== */
app.p8 = function(){};
app.p8.init = function(){
          $(".p8 .e-8-5").show();
          $(".p8 .e-8-6").show();
};
app.p8.bind_touch_event = function(){
     $(".p8").on("swipeLeft", function(){
     
          $(".p13-a").show();
          $(".p14-a").show();
          $(".a8-6").hide();
          setTimeout(function(){
          $(".button1").show();
          $(".button2").show();            
          $(".logo").show();            
        },2000);
        app.template.data.add("page",6);  
        app.template.swiper.lock();
        app.wechat.sharecontent_update(5);
      });
};

app.p8.destory = function(){ 
};


/*-- p9
====================================================== */
app.p9 = function(){};
app.p9.init = function(){

          $(".p8 .e-8-5").hide();
          $(".p8 .e-8-6").hide();
};
app.p9.bind_touch_event = function(){
     
    // $(".p9").on("swipeUp", function(){
    //     app.template.swiper.to(2);
    //  })

     $(".p9").on("swipeLeft swipeUp", function(e){ 
          
          if(e.type == "swipeUp"){
            app.template.swiper.to(2);
          }else{
              $(".p15-a").show();
              $(".p16-a").show();
              $(".a9-7").hide();
              setTimeout(function(){
              $(".button1").show();
              $(".button2").show();            
              $(".logo").show();            
            },2000);
          }
          
        app.template.data.add("page",7); 
        app.template.swiper.lock();
        app.wechat.sharecontent_update(6);
      });
     
};


app.p9.destory = function(){  
};



/*-- shareoverloader
====================================================== */

app.shareoverload = function(){}
app.shareoverload.bind_touch_event = function(){
     $(".button1").on("touchend", function(){
          $(".button1").hide();
          $(".button2").hide();          
          $(".logo").hide();         
          app.shareoverload.show_e2_overlay();
      });
      $(".button2").on("touchend", function(){
          window.location.href = "http://mp.weixin.qq.com/s?__biz=MzA3MjQxMzMzNw==&mid=401457259&idx=1&sn=692997b70a2e856cad84d1ebefcd49c1&scene=0&previewkey=Kg%2BwfuBNnx7974uB5uGKTcNS9bJajjJKzz%2F0By7ITJA%3D#wechat_redirect";
      });      
};
app.shareoverload.show_e2_overlay = function(){
    var page = app.template.data.get("page");
    window.overlay= new mo.Overlay({
        content: '<img class="e-10-1" src="img/p10/e-'+page+'.png" ><img class="e-12-1" src="img/transparent.png" alt="" />',
        width:640,
        height:1031
    });
    overlay.on('open', function(){
        $(".e-12-1").css({"top": "45px","left": "50px","position":"absolute"});
        $(".e-12-1").on('touchend', function(){
            window.overlay.close();
            $(".button1").show();
            $(".button2").show();            
            $(".logo").show(); 
        });
    });
};

app.wechat.sharecontent_update = function(i){
      var id=UUID.generate();
      $.post("db/addsharelog.php", {id:id, pageflag:i}, function(){});
      var nickname=$NICKNAME;
      var sharecontent = [{title: "NEBULA云系列送“履”行箱啦！", desc: "祝您诸事顺风顺水，GEOX“履”行箱等你拿！", moment: "祝您诸事顺风顺水，玩转云系列，定制猴年祝福赢“履”行箱！"},
                                      {title: "NEBULA云系列送“履”行箱啦！", desc: "祝您生活多姿多彩，GEOX“履”行箱等你拿！", moment: "祝您生活多姿多彩，玩转云系列，定制猴年祝福赢“履”行箱！"},
                                      {title: "NEBULA云系列送“履”行箱啦！", desc: "祝您事业平步青云，GEOX“履”行箱等你拿！", moment: "祝您事业平步青云，玩转云系列，定制猴年祝福赢“履”行箱！"},
                                      {title: "NEBULA云系列送“履”行箱啦！", desc: "祝您猴年一帆风顺，GEOX“履”行箱等你拿！", moment: "祝您猴年一帆风顺，玩转云系列，定制猴年祝福赢“履”行箱！"},
                                      {title: "NEBULA云系列送“履”行箱啦！", desc: "祝您业绩一枝独秀，GEOX“履”行箱等你拿！", moment: "祝您业绩一枝独秀，玩转云系列，定制猴年祝福赢“履”行箱！"},
                                      {title: "NEBULA云系列送“履”行箱啦！", desc: "祝您工作硕果累累，GEOX“履”行箱等你拿！", moment: "祝您工作硕果累累，玩转云系列，定制猴年祝福赢“履”行箱！"},
                                      {title: "NEBULA云系列送“履”行箱啦！", desc: "祝您职场大展宏图，GEOX“履”行箱等你拿！", moment: "祝您职场大展宏图，玩转云系列，定制猴年祝福赢“履”行箱！"}
                                      ]

      app.wechat.sharecontent = {title: sharecontent[i].title,
                                 desc: nickname + sharecontent[i].desc,
                                 titleformoment: nickname + sharecontent[i].moment, 
                                 url: "http://www.createcdigital.com/geoxnewyear16-h5app/share.php?id="+id+"&p="+i, 
                                 icon: "http://www.createcdigital.com/geoxnewyear16-h5app/img/share.jpg"
      };
      app.wechat.set_sharecontent();
}



/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.p1 = function(){};
fuckandroid.app.p1.bind_touch_event = function(){
};

/*-- page init
====================================================== */
(function(){
    // 检测OS
    app.tools.platform.init();

    // 兼容android(如果开启android模式则重写响应函数用来)
    if(app.tools.platform.debug == "android"
     || app.tools.platform.os == "android")
    {
    }

    // 框架
    app.template.touch.init();
    app.template.loader.init();
    app.template.swiper.init();
    app.template.Landscape.init();
    app.audio.init();
    //tracking.pv_byfrom();
    
    /* loading */
    app.loading.init();

    /* page init */
    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory();
                app.p3.init();
                break;
            case 3:
                app.p3.destory();
                app.p4.init();
                break;
            case 4:
                app.p4.destory();
                app.p5.init();
                break;
            case 5:
                app.p5.destory();
                app.p6.init();
                break;
            case 6:
                app.p6.destory();
                app.p7.init();
                break;
            case 7:
                app.p7.destory();
                app.p8.init();
                break;
            case 8:
                app.p8.destory();
                app.p9.init();
                break;
            case 9:
                app.p9.destory();

                break;

        }
    };
     app.p1.bind_touch_event();
     app.p2.bind_touch_event();
     app.p3.bind_touch_event();
     app.p4.bind_touch_event();
     app.p5.bind_touch_event();
     app.p6.bind_touch_event();
     app.p7.bind_touch_event();
     app.p8.bind_touch_event();
     app.p9.bind_touch_event();
     app.shareoverload.bind_touch_event();
     app.debug.enable = false;
})();

