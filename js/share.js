var app={};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

/*-- loading
====================================================== */
app.template = function(){};
/* loader */
app.template.loader = function(){};
app.template.loader.init= function(){
  // loader

    var getSource = function(){
      var res = [];

      var pageflag = parseInt(app.tools.geturlparam("p"));
      switch(pageflag)
      {
        case 0:
          res = app.p3.loadresource();
          break;
        case 1:
          res = app.p4.loadresource();
          break;
        case 2:
          res = app.p5.loadresource();
          break;
        case 3:
          res = app.p6.loadresource();
          break;
        case 4:
          res = app.p7.loadresource();
          break;
        case 5:
          res = app.p8.loadresource();
          break;
        case 6:
          res = app.p9.loadresource();
          break;
      }

        return res;
    }
    // this.show_animation();
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
            // app.template.loader.done_callback.call();
            // app.template.loader.done_callback2.call();
        }
    });
};


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


/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){
    this.show_animation1();
    this.show_animation2();
    this.show_animation3();   
};

app.p3.loadresource = function(){
    var res = [];

    res.push("img/p11/bg.png");
    res.push("img/p3/e-3.png");
    res.push("img/p3/e-4.png");
    res.push("img/p3/p3-1/4.png");
    res.push("img/p3/p3-1/5.png");
    res.push("img/p3/p3-1/6.png");
    res.push("img/p3/p3-1/7.png");
    res.push("img/p3/p3-1/8.png");
    res.push("img/p3/p3-1/9.png");

  return res;
};

app.p3.show_animation1 = function(){
    var resource = ["img/p3/p3-1/4.png",
                              "img/p3/p3-1/5.png"  
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
    var resource = ["img/p3/p3-1/6.png",
                              "img/p3/p3-1/7.png"    
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
    var resource = ["img/p3/p3-1/8.png",
                              "img/p3/p3-1/9.png"    
                            ];  

    $('#e-3-6').html("");  
    var multiplePic = new mo.Film(document.querySelector('#e-3-6'),{  
        resource : resource,  
        totalFrame : 2,  //帧数
        playTime: 400  
    });  

    multiplePic.play(500);//每帧播放时间差  
};  

app.p3.destory = function(){
  $('#e-3-4').html("");   
  $('#e-3-5').html(""); 
  $('#e-3-6').html(""); 
};

/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init=function(){
          this.show_animation_firework1();
          this.show_animation_firework2();
          this.show_animation_firework3();
          this.show_animation_firework4();
          this.show_animation_firework5();
          this.show_animation_firework6();
          this.show_animation_firework7();
          this.show_animation_firework8();
}

app.p4.loadresource = function(){
    var res = [];
    res.push("img/p11/bg.png");
    res.push("img/p4/e-2.png");
    res.push("img/p4/p4-1/p4-1-1/1.png");
    res.push("img/p4/p4-1/p4-1-1/2.png");
    res.push("img/p4/p4-1/p4-1-1/3.png");
    res.push("img/p4/p4-1/p4-1-1/4.png");
    res.push("img/p4/p4-1/p4-1-1/5.png");
    res.push("img/p4/p4-1/p4-1-1/6.png");
    res.push("img/p4/p4-1/p4-1-1/7.png");
    res.push("img/p4/p4-1/p4-1-1/8.png");
    res.push("img/p4/p4-1/p4-1-1/9.png");
    res.push("img/p4/p4-1/p4-1-1/10.png");
    res.push("img/p4/p4-1/p4-1-1/11.png");
    res.push("img/p4/p4-1/p4-1-1/12.png");
    res.push("img/p4/p4-1/p4-1-1/13.png");
    res.push("img/p4/p4-1/p4-1-1/14.png");
    res.push("img/p4/p4-1/p4-1-1/15.png");
    res.push("img/p4/p4-1/p4-1-1/16.png");
    res.push("img/p4/p4-1/p4-1-1/17.png");
    res.push("img/p4/p4-1/p4-1-1/18.png");
    res.push("img/p4/p4-1/p4-1-1/19.png");
    res.push("img/p4/p4-1/p4-1-1/20.png");
    res.push("img/p4/p4-1/p4-1-1/21.png");
    res.push("img/p4/p4-1/p4-1-2/1.png");
    res.push("img/p4/p4-1/p4-1-2/2.png");
    res.push("img/p4/p4-1/p4-1-2/3.png");
    res.push("img/p4/p4-1/p4-1-2/4.png");
    res.push("img/p4/p4-1/p4-1-2/5.png");
    res.push("img/p4/p4-1/p4-1-2/6.png");
    res.push("img/p4/p4-1/p4-1-2/7.png");
    res.push("img/p4/p4-1/p4-1-3/1.png");
    res.push("img/p4/p4-1/p4-1-3/2.png");
    res.push("img/p4/p4-1/p4-1-3/3.png");
    res.push("img/p4/p4-1/p4-1-3/4.png");
    res.push("img/p4/p4-1/p4-1-3/5.png");
    res.push("img/p4/p4-1/p4-1-3/6.png");
    res.push("img/p4/p4-1/p4-1-3/7.png");
    res.push("img/p4/p4-1/p4-1-3/8.png");
    res.push("img/p4/p4-1/p4-1-3/9.png");
    res.push("img/p4/p4-1/p4-1-3/10.png");
    res.push("img/p4/p4-1/p4-1-3/11.png");
    res.push("img/p4/p4-1/p4-1-3/12.png");
    res.push("img/p4/p4-1/p4-1-3/13.png");
    res.push("img/p4/p4-1/p4-1-3/14.png");
    res.push("img/p4/p4-1/p4-1-4/1.png");
    res.push("img/p4/p4-1/p4-1-4/2.png");
    res.push("img/p4/p4-1/p4-1-4/3.png");
    res.push("img/p4/p4-1/p4-1-4/4.png");
    res.push("img/p4/p4-1/p4-1-4/5.png");
    res.push("img/p4/p4-1/p4-1-4/6.png");
    res.push("img/p4/p4-1/p4-1-4/7.png");
    res.push("img/p4/p4-1/p4-1-4/8.png");
    res.push("img/p4/p4-1/p4-1-4/9.png");
    res.push("img/p4/p4-1/p4-1-4/10.png");
    res.push("img/p4/p4-1/p4-1-4/11.png");
    res.push("img/p4/p4-1/p4-1-4/12.png");
    res.push("img/p4/p4-1/p4-1-4/13.png");
    res.push("img/p4/p4-1/p4-1-4/14.png");

    return res;
};

app.p4.show_animation_firework1 = function(){
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
    var resource = [ "img/p4/p4-1/p4-1-1/8.png"  
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
    var resource = [ "img/p4/p4-1/p4-1-1/15.png"
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
    var resource = [ "img/p4/p4-1/p4-1-2/1.png"  
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
    multiplePic.play(300);//每帧播放时间差 
};  

app.p4.show_animation_firework5 = function(){
    var resource = [ "img/p4/p4-1/p4-1-3/1.png"  
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
    multiplePic.play(400);//每帧播放时间差
};  

app.p4.show_animation_firework6 = function(){
    var resource = [ "img/p4/p4-1/p4-1-3/8.png"  
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
    multiplePic.play(400);//每帧播放时间差  
};  
app.p4.show_animation_firework7 = function(){
    var resource = ["img/p4/p4-1/p4-1-4/1.png"  
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
        playTime: 2800  
    });  
    multiplePic.play(400);//每帧播放时间差
};  

app.p4.show_animation_firework8 = function(){
    var resource = [ "img/p4/p4-1/p4-1-4/8.png"  
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
        playTime: 2800  
    });  
    multiplePic.play(400);//每帧播放时间差  
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
    this.show_animation();
};

app.p5.loadresource = function(){

    var res = [];
    res.push("img/p11/bg.png");
    res.push("img/p5/e-2.png");
    res.push("img/transparent.png");
    res.push("img/p5/1.png");
    res.push("img/p5/2.png");
    res.push("img/p5/3.png");

    return res;

};

app.p5.show_animation = function(){
    var resource = [ "img/transparent.png"  
                               ,"img/p5/1.png"
                               ,"img/p5/2.png" 
                               ,"img/p5/3.png"                           
                            ];  

    $('#e-5-4').html("");  
    var multiplePic = new mo.Film(document.querySelector('#e-5-4'),{  
        resource : resource,  
        totalFrame : 4,  //帧数
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
    this.show_animation();
};

app.p6.loadresource = function(){

    var res = [];
    res.push("img/p11/bg.png");
    res.push("img/p6/e-2.png");
    res.push("img/p6/e-3.png");
    res.push("img/p6/1.png");
    res.push("img/p6/2.png");
    res.push("img/p6/3.png");

    return res;
};

app.p6.show_animation = function(){
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

app.p6.destory = function(){ 
  $('#e-6-4').html("");  
};



/*-- p7
====================================================== */
app.p7 = function(){};
app.p7.init = function(){

};

app.p7.loadresource = function(){
    var res = [];

    res.push("img/p11/bg.png");
    res.push("img/p7/e-2.png");
    res.push("img/p7/e-3.png");
    res.push("img/p7/p7-1/1.png");
    res.push("img/p7/p7-1/2.png");
    res.push("img/p7/p7-1/3.png");
    res.push("img/p7/p7-1/4.png");
    res.push("img/p7/p7-1/5.png");
    res.push("img/p7/p7-1/6.png");
    res.push("img/p7/p7-1/7.png");
    res.push("img/p7/p7-1/8.png");
    res.push("img/p7/p7-1/9.png");
    res.push("img/p7/p7-1/10.png");

    return res;

};


/*-- p8
====================================================== */
app.p8 = function(){};
app.p8.init = function(){

};

app.p8.loadresource = function(){

    var res = [];
    res.push("img/p11/bg.png");
    res.push("img/p8/e-2.png");
    res.push("img/p8/e-3.png");

    return res;
};


/*-- p9
====================================================== */
app.p9 = function(){};
app.p9.init = function(){

};

app.p9.loadresource = function(){

    var res = [];
    res.push("img/p11/bg.png");
    res.push("img/p9/1.png");
    res.push("img/p9/e-2.png");

    return res;
};




/*-- share.php
====================================================== */
app.p1 =function(){};


app.p1.init=function(){
  app.p1.getuserinfobyid();
  app.p1.show();
  app.p1.bind_touch_event();
};

app.p1.bind_touch_event = function(){
     $(".btn-goto").on("touchend", function(){
      window.location.href = "index.php";

     });
};

app.p1.getuserinfobyid=function(){
  $.getJSON('db/getsharelog.php', {id: app.tools.geturlparam("id")}, function(data){
        $('.userimg').attr("src", data[0].headimgurl);
        $('.username').html(data[0].nickname);
  });
}

app.p1.show = function(){
  var p = parseInt(app.tools.geturlparam("p")) + 3;

  $(".p" + p + " img").each(function(i, n){
    $(this).attr("src", $(this).attr("data-src")).removeAttr("data-src");
  });

  $(".p"+p).show();
  $(".userinfo").show();

};

/*-- page init
====================================================== */
(function(){

  /* loading */
  app.loading.init();

  // 框架

  app.template.touch.init();
  app.template.loader.init();
  app.template.Landscape.init();

  var pageflag = parseInt(app.tools.geturlparam("p"));
  switch(pageflag)
  {
    case 0:
      app.p3.init();
      break;
    case 1:
      app.p4.init();
      break;
    case 2:
      app.p5.init();
      break;
    case 3:
      app.p6.init();
      break;
    case 4:
      app.p7.init();
      break;
    case 5:
      app.p8.init();
      break;
    case 6:
      app.p9.init();
      break;
  }

  app.p1.init();

})();