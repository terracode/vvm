(function(){window.defaults={"const":{RIGHT_CLICK:2,BREAKPOINTS:[400,600,800,1e3,1200,1400]},forms:{submit_delay:1e3},map:{switchBreakpoint:2,zoom:16,placemarkColor:"#a4b100"},menu:{switchBreakpoint:0,expandBetween:[0,2],darkPage:{switchBreakpoint:0}},ios:{orientationNoticeHideAfter:1e4},lightbox:function(){return{arrows:!1,click:!0,swipe:!0,touchpad:!0,keyboard:!0,hash:!0,shadows:!1,loop:!0,nav:"thumbs",fit:"contain",width:"100%",ratio:"1000/500",allowfullscreen:"native",transition:"dissolve",clicktransition:"dissolve"}},presentation:function(){return $.extend(this.lightbox(),{nav:!1,caption:!1,hash:!1,autoplay:5e3,fit:"cover"})},carousel:{"default":function(t){var n;return null==t&&(t=null),n={log:!1,speed:500,timeout:0,manualSpeed:500,swipe:!0,paused:!0,prev:$(this).parent().find(".previous"),next:$(this).parent().find(".next"),slides:"> .frame",slideActiveClass:"_active",pager:$(this).parent().find(".pager"),pagerTemplate:'<span class="dot"></span>',pagerActiveClass:"_active"}}},tooltip:function(t){return null==t&&(t=null),{content:t,style:{def:!1,classes:"tooltip",tip:{corner:!0,mimic:!1,method:!0,width:15,height:7,border:0,offset:0}},position:{my:"bottom center",at:"top center",viewport:$(window),adjust:{x:1,y:7}},show:{event:"click mouseenter",effect:function(){return $(this).fadeIn(150)}},hide:{distance:30,event:"mouseleave unfocus",effect:function(){return $(this).fadeOut(150)}}}},popup:function(){var t,n,e;return e={type:"inline",preloader:!1,midClick:!0,closeBtnInside:!0,fixedContentPos:!0,mainClass:"mfp-zoom-in",removalDelay:500,callbacks:{}},t=["beforeOpen","elementParse","change","resize","open","beforeClose","close","afterClose","markupParse","updateStatus","imageLoadComplete","parseAjax","ajaxContentAdded"],(n=function(n){var e,r,i;for(r=0,i=t.length;i>r;r++)e=t[r],n.callbacks[e]=$.proxy_fire("popup:"+e,{on_object:"content"});return n})(e)}}}).call(this);