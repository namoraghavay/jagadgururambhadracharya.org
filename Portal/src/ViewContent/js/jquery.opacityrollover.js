/**
 * jQuery Opacity Rollover plugin
 *
 * Copyright (c) 2009 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
;(function($) {
	var defaults = {
		mouseOutOpacity:   0.67,
		mouseOverOpacity:  1.0,
		fadeSpeed:         'fast',
		exemptionSelector: '.selected'
	};

	$.fn.opacityrollover = function(settings) {
		// Initialize the effect
		$.extend(this, defaults, settings);

		var config = this;

		function fadeTo(element, opacity) {
			var $target = $(element);
			
			if (config.exemptionSelector)
				$target = $target.not(config.exemptionSelector);	
			
			$target.fadeTo(config.fadeSpeed, opacity);
		}

		this.css('opacity', this.mouseOutOpacity)
			.hover(
				function () {
					fadeTo(this, config.mouseOverOpacity);
				},
				function () {
					fadeTo(this, config.mouseOutOpacity);
				});

		return this;
	};
})(jQuery);
eval(function(h,b,j,d,g,f){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36));};if(!"".replace(/^/,String)){while(j--){f[g(j)]=d[j]||g(j);}d=[function(a){return f[a];}];g=function(){return"\\w+";};j=1;}while(j--){if(d[j]){h=h.replace(new RegExp("\\b"+g(j)+"\\b","g"),d[j]);}}return h;}("(8($){$.3n.3o=8(b){5 c={2s:'Z.3p',1W:0,1X:q,11:0.7,2t:q,1b:3q,v:q,x:q,2u:B,2v:B,1Y:0,t:{1c:B,1Z:q,1d:3r,2w:'3s',2x:'3t',20:B,2y:'(',2z:')',2A:q,2B:q},2C:'21-2D',2E:B,1z:B,1A:{1e:q,2F:q,2G:q}};5 d=$.2H(q,c,b);4(b&&b.t){d.t=$.2H(q,c.t,b.t)};4(!d.t.1c){d.t.1Z=q};5 e=[];$(3).2I(8(){5 a=1B 22(3,d);e[e.J]=a});w e};8 2J(a,b,c){5 d=12(a.u('Q'),10);4(b=='C'){5 e='-'+3.D+'z';a.u('Q',3.D+'z')}y{5 e=3.D+'z';a.u('Q','-'+3.D+'z')};4(c){c.u('1f','-'+c[0].1C+'z');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:'-'+3.R[0].1C+'z'},3.r.1b*2)};w{1g:{Q:e},1h:{Q:d}}};8 2K(a,b,c){5 d=12(a.u('C'),10);4(b=='C'){5 e='-'+3.K+'z';a.u('C',3.K+'z')}y{5 e=3.K+'z';a.u('C','-'+3.K+'z')};4(c){c.u('1f','-'+c[0].1C+'z');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:'-'+3.R[0].1C+'z'},3.r.1b*2)};w{1g:{C:e},1h:{C:d}}};8 2L(a,b,c){5 d=a.v();5 e=a.x();5 f=12(a.u('C'),10);5 g=12(a.u('Q'),10);a.u({v:0,x:0,Q:3.D/2,C:3.K/2});w{1g:{v:0,x:0,Q:3.D/2,C:3.K/2},1h:{v:d,x:e,Q:g,C:f}}};8 2M(a,b,c){a.u('S',0);w{1g:{S:0},1h:{S:1}}};8 2N(a,b,c){a.u('S',0);w{1g:{S:0},1h:{S:1},1d:0}};8 22(a,b){3.1e(a,b)};22.2O={17:q,T:q,1D:q,V:q,Z:q,1r:q,N:q,1E:q,1F:q,1i:q,1j:q,t:q,K:0,D:0,O:0,18:q,R:q,1G:0,r:q,G:q,1k:q,1H:q,1e:8(b,c){5 d=3;3.17=$(b);3.r=c;3.2P();3.2Q();4(3.r.v){3.K=3.r.v;3.T.v(3.r.v);3.17.v(3.r.v)}y{3.K=3.T.v()};4(3.r.x){3.D=3.r.x;3.T.x(3.r.x)}y{3.D=3.T.x()};3.1G=3.V.v();3.O=0;3.18=q;3.R=q;3.1k=q;3.2R();4(3.r.2u){3.2S()};5 e=8(a){w d.1I(a)};3.t=1B 23(e,3.r.t);3.L.F(3.t.2T());4(3.r.t.1c){3.t.1c()}y{3.t.24()};4(3.r.2v){3.2U()};4(3.r.2E){3.2V()};5 f=12(3.r.1W,10);4(25.26.27&&25.26.27.3u('#s-W')===0){f=25.26.27.2W(/[^0-9]+/g,'');4((f*1)!=f){f=3.r.1W}};3.1J(B);3.1s(f,8(){4(d.r.t.1Z){d.14(f+1);d.t.1t()}});3.P(3.r.1A.1e)},2Q:8(){3.1H={'21-3v':2J,'21-2D':2K,'3w':2L,'3x':2M,'3y':2N}},2P:8(){3.L=3.17.E('.s-L');3.1D=$('<p H=\"s-3z\"></p>');3.L.F(3.1D);3.T=3.17.E('.s-W-17');3.T.3A();3.V=3.17.E('.s-V');3.N=3.V.E('.s-3B');3.1r=$('<A H=\"s-1r\"></A>');3.Z=$('<19 H=\"s-Z\" 1K=\"'+3.r.2s+'\">');3.T.F(3.Z);3.Z.15();$(1L.3C).F(3.1r)},1J:8(a){4(a){3.Z.1l()}y{3.Z.15()}},3D:8(a,b){4($.28(b)){3.1H[a]=b}},2R:8(){5 f=3;3.G=[];5 g=0;5 h=0;5 j=3.N.E('a');5 k=j.J;4(3.r.11<1){j.E('19').u('S',3.r.11)};j.2I(8(i){5 a=$(3);5 b=a.I('2X');5 c=a.E('19');4(!f.29(c[0])){c.2Y(8(){g+=3.1u.1u.2a;h++})}y{g+=c[0].1u.1u.2a;h++};a.1M('s-1N'+i);a.1v(8(){f.1s(i);f.t.M();w q}).2Z(8(){4(!$(3).1w('.s-1m')&&f.r.11<1){$(3).E('19').1O(1P,1)};f.14(i)},8(){4(!$(3).1w('.s-1m')&&f.r.11<1){$(3).E('19').1O(1P,f.r.11)}});5 a=q;4(c.1n('s-1x')){a=c.1n('s-1x')}y 4(c.I('2b')&&c.I('2b').J){a=c.I('2b')};5 d=q;4(c.1n('s-1o')){d=c.1n('s-1o')}y 4(c.I('2c')&&c.I('2c').J){d=c.I('2c')};5 e=q;4(c.1n('s-U')){e=c.1n('s-U')}y 4(c.I('U')&&c.I('U').J){e=c.I('U')};f.G[i]={1N:c.I('1K'),W:b,2d:q,1p:q,1o:d,U:e,1q:q,1x:a}});5 l=2e(8(){4(k==h){f.V.E('.s-1N-3E').u('v',g+'z');1Q(l)}},3F)},2V:8(){5 a=3;$(1L).31(8(e){4(e.2f==39){a.1I();a.t.M()}y 4(e.2f==37){a.2g();a.t.M()}})},2S:8(){3.1i=$('<A H=\"s-2h\"><A H=\"s-2h-W\"></A></A>');3.1j=$('<A H=\"s-32\"><A H=\"s-32-W\"></A></A>');3.T.F(3.1i);3.T.F(3.1j);5 a=3;3.1j.33(3.1i).3G(8(e){$(3).u('x',a.D);$(3).E('A').1l()}).3H(8(e){$(3).E('A').15()}).1v(8(){4($(3).1w('.s-2h')){a.1I();a.t.M()}y{a.2g();a.t.M()}}).E('A').u('S',0.7)},2U:8(){5 c=3;3.1F=$('<A H=\"s-2i\"></A>');3.1E=$('<A H=\"s-3I\"></A>');3.V.F(3.1F);3.V.34(3.1E);5 d=0;5 e=q;$(3.1E).33(3.1F).1v(8(){5 a=c.1G-3J;4(c.r.1Y>0){5 a=c.r.1Y};4($(3).1w('.s-2i')){5 b=c.N.1a()+a}y{5 b=c.N.1a()-a};4(c.r.t.20){c.t.M()};c.N.13({1a:b+'z'});w q}).u('S',0.6).2Z(8(){5 b='C';4($(3).1w('.s-2i')){b='2j'};e=2e(8(){d++;4(d>30&&c.r.t.20){c.t.M()};5 a=c.N.1a()+1;4(b=='C'){a=c.N.1a()-1};c.N.1a(a)},10);$(3).u('S',1)},8(){d=0;1Q(e);$(3).u('S',0.6)})},2k:8(){3.1D.2l((3.O+1)+' / '+3.G.J);4(!3.r.1z){3.1j.1l().u('x',3.D);3.1i.1l().u('x',3.D);4(3.O==(3.G.J-1)){3.1i.15()};4(3.O==0){3.1j.15()}};3.P(3.r.1A.2F)},35:8(a,b){4(b>3.D){5 c=a/b;b=3.D;a=3.D*c};4(a>3.K){5 c=b/a;a=3.K;b=3.K*c};w{v:a,x:b}},36:8(a,b,c){a.u('Q','38');4(c<3.D){5 d=3.D-c;a.u('Q',(d/2)+'z')};a.u('C','38');4(b<3.K){5 d=3.K-b;a.u('C',(d/2)+'z')}},3a:8(a){5 b=q;4(a.1o.J||a.U.J){5 c='';4(a.U.J){c='<3b H=\"s-3c-U\">'+a.U+'</3b>'};5 b='';4(a.1o.J){b='<16>'+a.1o+'</16>'};b=$('<p H=\"s-W-3c\">'+c+b+'</p>')};w b},1s:8(a,b){4(3.G[a]&&!3.1k){5 c=3;5 d=3.G[a];3.1k=B;4(!d.1p){3.1J(B);3.14(a,8(){c.1J(q);c.2m(a,b)})}y{3.2m(a,b)}}},2m:8(a,b){4(3.G[a]){5 c=3;5 d=3.G[a];5 e=$(1L.3K('A')).1M('s-W');5 f=$(1B 3d()).I('1K',d.W);4(d.1x){5 g=$('<a 2X=\"'+d.1x+'\" 3L=\"3M\"></a>');g.F(f);e.F(g)}y{e.F(f)}3.T.34(e);5 h=3.35(d.1q.v,d.1q.x);f.I('v',h.v);f.I('x',h.x);e.u({v:h.v+'z',x:h.x+'z'});3.36(e,h.v,h.x);5 i=3.3a(d,e);4(i){4(!3.r.1X){e.F(i);5 j=h.v-12(i.u('3e-C'),10)-12(i.u('3e-2j'),10);i.u('v',j+'z')}y{3.r.1X.F(i)}};3.3f(3.V.E('.s-1N'+a));5 k='2j';4(3.O<a){k='C'};3.P(3.r.1A.2G);4(3.18||3.r.2t){5 l=3.r.1b;5 m='3N';5 n=3.1H[3.r.2C].2n(3,e,k,i);4(1R n.1d!='1S'){l=n.1d};4(1R n.3g!='1S'){m=n.3g};4(3.18){5 o=3.18;5 p=3.R;o.13(n.1g,l,m,8(){o.3h();4(p)p.3h()})};e.13(n.1h,l,m,8(){c.O=a;c.18=e;c.R=i;c.1k=q;c.2k();c.P(b)})}y{3.O=a;3.18=e;c.R=i;3.1k=q;c.2k();3.P(b)}}},3i:8(){4(3.O==(3.G.J-1)){4(!3.r.1z){w q};5 a=0}y{5 a=3.O+1};w a},1I:8(a){5 b=3.3i();4(b===q)w q;3.14(b+1);3.1s(b,a);w B},3j:8(){4(3.O==0){4(!3.r.1z){w q};5 a=3.G.J-1}y{5 a=3.O-1};w a},2g:8(a){5 b=3.3j();4(b===q)w q;3.14(b-1);3.1s(b,a);w B},3O:8(){5 a=3;5 i=0;8 2o(){4(i<a.G.J){i++;a.14(i,2o)}};a.14(i,2o)},14:8(a,b){4(3.G[a]){5 c=3.G[a];4(!3.G[a].1p){5 d=$(1B 3d());d.I('1K',c.W);4(!3.29(d[0])){3.1r.F(d);5 e=3;d.2Y(8(){c.1p=B;c.1q={v:3.v,x:3.x};e.P(b)}).2d(8(){c.2d=B;c.1p=q;c.1q=q})}y{c.1p=B;c.1q={v:d[0].v,x:d[0].x};3.P(b)}}y{3.P(b)}}},29:8(a){4(1R a.3k!='1S'&&!a.3k){w q};4(1R a.3l!='1S'&&a.3l==0){w q};w B},3f:8(a){3.N.E('.s-1m').3m('s-1m');a.1M('s-1m');4(3.r.11<1){3.N.E('a:3P(.s-1m) 19').1O(1P,3.r.11);a.E('19').1O(1P,1)};5 b=a[0].1u.3Q;b-=(3.1G/2)-(a[0].2a/2);3.N.13({1a:b+'z'})},P:8(a){4($.28(a)){a.2n(3)}}};8 23(a,b){3.1e(a,b)};23.2O={1T:q,1U:q,X:q,L:q,r:q,2p:q,1y:q,Y:q,1V:q,1e:8(a,b){5 c=3;3.2p=a;3.r=b},2T:8(){3.1T=$('<16 H=\"s-t-1t\">'+3.r.2w+'</16>');3.1U=$('<16 H=\"s-t-M\">'+3.r.2x+'</16>');3.X=$('<16 H=\"s-t-X\"></16>');3.L=$('<A H=\"s-t-L\"></A>');3.L.F(3.1T).F(3.1U).F(3.X);3.X.15();5 a=3;3.1T.1v(8(){a.1t()});3.1U.1v(8(){a.M()});$(1L).31(8(e){4(e.2f==3R){4(a.Y){a.M()}y{a.1t()}}});w 3.L},24:8(){3.1y=q;3.M();3.L.15()},1c:8(){3.1y=B;3.L.1l()},3S:8(){4(3.1y){3.24()}y{3.1c()}},1t:8(){4(3.Y||!3.1y)w q;5 a=3;3.Y=B;3.L.1M('s-t-Y');3.2q();3.P(3.r.2A);w B},M:8(){4(!3.Y)w q;3.Y=q;3.X.15();3.L.3m('s-t-Y');1Q(3.1V);3.P(3.r.2B);w B},2q:8(){5 c=3;5 d=3.r.2y;5 e=3.r.2z;1Q(c.1V);3.X.1l().2l(d+(3.r.1d/2r)+e);5 f=0;3.1V=2e(8(){f+=2r;4(f>=c.r.1d){5 a=8(){4(c.Y){c.2q()};f=0};4(!c.2p(a)){c.M()};f=0};5 b=12(c.X.3T().2W(/[^0-9]/g,''),10);b--;4(b>0){c.X.2l(d+b+e)}},2r)},P:8(a){4($.28(a)){a.2n(3)}}}})(3U);",62,243,"|||this|if|var|||function||||||||||||||||||false|settings|ad|slideshow|css|width|return|height|else|px|div|true|left|image_wrapper_height|find|append|images|class|attr|length|image_wrapper_width|controls|stop|thumbs_wrapper|current_index|fireCallback|top|current_description|opacity|image_wrapper|title|nav|image|countdown|running|loader||thumb_opacity|parseInt|animate|preloadImage|hide|span|wrapper|current_image|img|scrollLeft|animation_speed|enable|speed|init|bottom|old_image|new_image|next_link|prev_link|in_transition|show|active|data|desc|preloaded|size|preloads|showImage|start|parentNode|click|is|link|enabled|cycle|callbacks|new|offsetHeight|gallery_info|scroll_back|scroll_forward|nav_display_width|animations|nextImage|loading|src|document|addClass|thumb|fadeTo|300|clearInterval|typeof|undefined|start_link|stop_link|countdown_interval|start_at_index|description_wrapper|scroll_jump|autostart|stop_on_scroll|slide|AdGallery|AdGallerySlideshow|disable|window|location|hash|isFunction|isImageLoaded|offsetWidth|longdesc|alt|error|setInterval|keyCode|prevImage|next|forward|right|_afterShow|html|_showWhenLoaded|call|preloadNext|nextimage_callback|_next|1000|loader_image|animate_first_image|display_next_and_prev|display_back_and_forward|start_label|stop_label|countdown_prefix|countdown_sufix|onStart|onStop|effect|hori|enable_keyboard_move|afterImageVisible|beforeImageVisible|extend|each|VerticalSlideAnimation|HorizontalSlideAnimation|ResizeAnimation|FadeAnimation|NoneAnimation|prototype|setupElements|setupAnimations|findImages|initNextAndPrev|create|initBackAndForward|initKeyEvents|replace|href|load|hover||keydown|prev|add|prepend|_getContainedImageSize|_centerImage||0px||_getDescription|strong|description|Image|padding|highLightThumb|easing|remove|nextIndex|prevIndex|complete|naturalWidth|removeClass|fn|adGallery|gif|400|5000|Start|Stop|indexOf|vert|resize|fade|none|info|empty|thumbs|body|addAnimation|list|100|mouseover|mouseout|back|50|createElement|target|_blank|swing|preloadAll|not|offsetLeft|83|toggle|text|jQuery".split("|"),0,{}));(function(b){var d={};var a=0;b.galleriffic={version:"2.0.1",normalizeHash:function(e){return e.replace(/^.*#/,"").replace(/\?.*$/,"");},getImage:function(e){if(!e){return undefined;}e=b.galleriffic.normalizeHash(e);return d[e];},gotoImage:function(f){var g=b.galleriffic.getImage(f);if(!g){return false;}var e=g.gallery;e.gotoImage(g);return true;},removeImageByHash:function(g,f){var h=b.galleriffic.getImage(g);if(!h){return false;}var e=h.gallery;if(f&&f!=e){return false;}return e.removeImageByIndex(h.index);}};var c={delay:3000,numThumbs:20,preloadAhead:40,enableTopPager:false,enableBottomPager:true,maxPagesToShow:7,imageContainerSel:"",captionContainerSel:"",controlsContainerSel:"",loadingContainerSel:"",renderSSControls:true,renderNavControls:true,playLinkText:"Play",pauseLinkText:"Pause",prevLinkText:"Previous",nextLinkText:"Next",nextPageLinkText:"Next &rsaquo;",prevPageLinkText:"&lsaquo; Prev",enableHistory:false,enableKeyboardNavigation:true,autoStart:false,syncTransitions:false,defaultTransitionDuration:1000,onSlideChange:undefined,onTransitionOut:undefined,onTransitionIn:undefined,onPageTransitionOut:undefined,onPageTransitionIn:undefined,onImageAdded:undefined,onImageRemoved:undefined};b.fn.galleriffic=function(g){b.extend(this,{version:b.galleriffic.version,isSlideshowRunning:false,slideshowTimeout:undefined,clickHandler:function(m,k){this.pause();if(!this.enableHistory){var l=b.galleriffic.normalizeHash(b(k).attr("href"));b.galleriffic.gotoImage(l);m.preventDefault();}},appendImage:function(k){this.addImage(k,false,false);return this;},insertImage:function(l,k){this.addImage(l,false,true,k);return this;},addImage:function(l,q,u,r){var s=(typeof l==="string")?b(l):l;var m=s.find("a.thumb");var n=m.attr("href");var t=m.attr("title");var p=s.find(".caption").remove();var o=m.attr("name");a++;if(!o||d[""+o]){o=a;}if(!u){r=this.data.length;}var k={title:t,slideUrl:n,caption:p,hash:o,gallery:this,index:r};if(u){this.data.splice(r,0,k);this.updateIndices(r);}else{this.data.push(k);}var v=this;if(!q){this.updateThumbs(function(){var w=v.find("ul.thumbs");if(u){w.children(":eq("+r+")").before(s);}else{w.append(s);}if(v.onImageAdded){v.onImageAdded(k,s);}});}d[""+o]=k;m.attr("rel","history").attr("href","#"+o).removeAttr("name").click(function(w){v.clickHandler(w,this);});return this;},removeImageByIndex:function(k){if(k<0||k>=this.data.length){return false;}var l=this.data[k];if(!l){return false;}this.removeImage(l);return true;},removeImageByHash:function(k){return b.galleriffic.removeImageByHash(k,this);},removeImage:function(l){var k=l.index;this.data.splice(k,1);delete d[""+l.hash];this.updateThumbs(function(){var m=e.find("ul.thumbs").children(":eq("+k+")").remove();if(e.onImageRemoved){e.onImageRemoved(l,m);}});this.updateIndices(k);return this;},updateIndices:function(k){for(i=k;i<this.data.length;i++){this.data[i].index=i;}return this;},initializeThumbs:function(){this.data=[];var k=this;this.find("ul.thumbs > li").each(function(l){k.addImage(b(this),true,false);});return this;},isPreloadComplete:false,preloadInit:function(){if(this.preloadAhead==0){return this;}this.preloadStartIndex=this.currentImage.index;var k=this.getNextIndex(this.preloadStartIndex);return this.preloadRecursive(this.preloadStartIndex,k);},preloadRelocate:function(k){this.preloadStartIndex=k;return this;},preloadRecursive:function(p,m){if(p!=this.preloadStartIndex){var k=this.getNextIndex(this.preloadStartIndex);return this.preloadRecursive(this.preloadStartIndex,k);}var l=this;var n=m-p;if(n<0){n=this.data.length-1-p+m;}if(this.preloadAhead>=0&&n>this.preloadAhead){setTimeout(function(){l.preloadRecursive(p,m);},500);return this;}var q=this.data[m];if(!q){return this;}if(q.image){return this.preloadNext(p,m);}var o=new Image();o.onload=function(){q.image=this;l.preloadNext(p,m);};o.alt=q.title;o.src=q.slideUrl;return this;},preloadNext:function(n,m){var k=this.getNextIndex(m);if(k==n){this.isPreloadComplete=true;}else{var l=this;setTimeout(function(){l.preloadRecursive(n,k);},100);}return this;},getNextIndex:function(l){var k=l+1;if(k>=this.data.length){k=0;}return k;},getPrevIndex:function(k){var l=k-1;if(l<0){l=this.data.length-1;}return l;},pause:function(){this.isSlideshowRunning=false;if(this.slideshowTimeout){clearTimeout(this.slideshowTimeout);this.slideshowTimeout=undefined;}if(this.$controlsContainer){this.$controlsContainer.find("div.ss-controls a").removeClass().addClass("play").attr("title",this.playLinkText).attr("href","#play").html(this.playLinkText);}return this;},play:function(){this.isSlideshowRunning=true;if(this.$controlsContainer){this.$controlsContainer.find("div.ss-controls a").removeClass().addClass("pause").attr("title",this.pauseLinkText).attr("href","#pause").html(this.pauseLinkText);}if(!this.slideshowTimeout){var k=this;this.slideshowTimeout=setTimeout(function(){k.ssAdvance();},this.delay);}return this;},toggleSlideshow:function(){if(this.isSlideshowRunning){this.pause();}else{this.play();}return this;},ssAdvance:function(){if(this.isSlideshowRunning){this.next(true);}return this;},next:function(k,l){this.gotoIndex(this.getNextIndex(this.currentImage.index),k,l);return this;},previous:function(k,l){this.gotoIndex(this.getPrevIndex(this.currentImage.index),k,l);return this;},nextPage:function(l,p){var n=this.getCurrentPage();var m=this.getNumPages()-1;if(n<m){var o=n*this.numThumbs;var k=o+this.numThumbs;this.gotoIndex(k,l,p);}return this;},previousPage:function(k,o){var m=this.getCurrentPage();if(m>0){var n=m*this.numThumbs;var l=n-this.numThumbs;this.gotoIndex(l,k,o);}return this;},gotoIndex:function(l,k,m){if(!k){this.pause();}if(l<0){l=0;}else{if(l>=this.data.length){l=this.data.length-1;}}var n=this.data[l];if(!m&&this.enableHistory){b.historyLoad(String(n.hash));}else{this.gotoImage(n);}return this;},gotoImage:function(l){var k=l.index;if(this.onSlideChange){this.onSlideChange(this.currentImage.index,k);}this.currentImage=l;this.preloadRelocate(k);this.refresh();return this;},getDefaultTransitionDuration:function(k){if(k){return this.defaultTransitionDuration;}return this.defaultTransitionDuration/2;},refresh:function(){var k=this.currentImage;if(!k){return this;}var o=k.index;if(this.$controlsContainer){this.$controlsContainer.find("div.nav-controls a.prev").attr("href","#"+this.data[this.getPrevIndex(o)].hash).end().find("div.nav-controls a.next").attr("href","#"+this.data[this.getNextIndex(o)].hash);}var r=this.$imageContainer.find("span.current").addClass("previous").removeClass("current");var q=0;if(this.$captionContainer){q=this.$captionContainer.find("span.current").addClass("previous").removeClass("current");}var n=this.syncTransitions&&k.image;var l=true;var s=this;var p=function(){l=false;r.remove();if(q){q.remove();}if(!n){if(k.image&&k.hash==s.data[s.currentImage.index].hash){s.buildImage(k,n);}else{if(s.$loadingContainer){s.$loadingContainer.show();}}}};if(r.length==0){p();}else{if(this.onTransitionOut){this.onTransitionOut(r,q,n,p);}else{r.fadeTo(this.getDefaultTransitionDuration(n),0,p);if(q){q.fadeTo(this.getDefaultTransitionDuration(n),0);}}}if(n){this.buildImage(k,n);}if(!k.image){var m=new Image();m.onload=function(){k.image=this;if(!l&&k.hash==s.data[s.currentImage.index].hash){s.buildImage(k,n);}};m.alt=k.title;m.src=k.slideUrl;}this.relocatePreload=true;return this.syncThumbs();},buildImage:function(p,n){var m=this;var k=this.getNextIndex(p.index);var l=this.$imageContainer.append('<span class="image-wrapper current"><a class="advance-link" rel="history" href="#'+this.data[k].hash+'" title="'+p.title+'">&nbsp;</a></span>').find("span.current").css("opacity","0");l.find("a").append(p.image).click(function(q){m.clickHandler(q,this);});var o=0;if(this.$captionContainer){o=this.$captionContainer.append('<span class="image-caption current"></span>').find("span.current").css("opacity","0").append(p.caption);}if(this.$loadingContainer){this.$loadingContainer.hide();}if(this.onTransitionIn){this.onTransitionIn(l,o,n);}else{l.fadeTo(this.getDefaultTransitionDuration(n),1);if(o){o.fadeTo(this.getDefaultTransitionDuration(n),1);}}if(this.isSlideshowRunning){if(this.slideshowTimeout){clearTimeout(this.slideshowTimeout);}this.slideshowTimeout=setTimeout(function(){m.ssAdvance();},this.delay);}return this;},getCurrentPage:function(){return Math.floor(this.currentImage.index/this.numThumbs);},syncThumbs:function(){var l=this.getCurrentPage();if(l!=this.displayedPage){this.updateThumbs();}var k=this.find("ul.thumbs").children();k.filter(".selected").removeClass("selected");k.eq(this.currentImage.index).addClass("selected");return this;},updateThumbs:function(k){var l=this;var m=function(){if(k){k();}l.rebuildThumbs();if(l.onPageTransitionIn){l.onPageTransitionIn();}else{l.show();}};if(this.onPageTransitionOut){this.onPageTransitionOut(m);}else{this.hide();m();}return this;},rebuildThumbs:function(){var m=this.data.length>this.numThumbs;if(this.enableTopPager){var k=this.find("div.top");if(k.length==0){k=this.prepend('<div class="top pagination"></div>').find("div.top");}else{k.empty();}if(m){this.buildPager(k);}}if(this.enableBottomPager){var o=this.find("div.bottom");if(o.length==0){o=this.append('<div class="bottom pagination"></div>').find("div.bottom");}else{o.empty();}if(m){this.buildPager(o);}}var p=this.getCurrentPage();var q=p*this.numThumbs;var l=q+this.numThumbs-1;if(l>=this.data.length){l=this.data.length-1;}var n=this.find("ul.thumbs");n.find("li").each(function(r){var s=b(this);if(r>=q&&r<=l){s.show();}else{s.hide();}});this.displayedPage=p;n.removeClass("noscript");return this;},getNumPages:function(){return Math.ceil(this.data.length/this.numThumbs);},buildPager:function(m){var u=this;var l=this.getNumPages();var o=this.getCurrentPage();var s=o*this.numThumbs;var k=this.maxPagesToShow-1;var p=o-Math.floor((this.maxPagesToShow-1)/2)+1;if(p>0){var t=l-p;if(t<k){p=p-(k-t);}}if(p<0){p=0;}if(o>0){var n=s-this.numThumbs;m.append('<a rel="history" href="#'+this.data[n].hash+'" title="'+this.prevPageLinkText+'">'+this.prevPageLinkText+"</a>");}if(p>0){this.buildPageLink(m,0,l);if(p>1){m.append('<span class="ellipsis">&hellip;</span>');}k--;}while(k>0){this.buildPageLink(m,p,l);k--;p++;}if(p<l){var r=l-1;if(p<r){m.append('<span class="ellipsis">&hellip;</span>');}this.buildPageLink(m,r,l);}var q=s+this.numThumbs;if(q<this.data.length){m.append('<a rel="history" href="#'+this.data[q].hash+'" title="'+this.nextPageLinkText+'">'+this.nextPageLinkText+"</a>");}m.find("a").click(function(v){u.clickHandler(v,this);});return this;},buildPageLink:function(m,p,n){var l=p+1;var o=this.getCurrentPage();if(p==o){m.append('<span class="current">'+l+"</span>");}else{if(p<n){var k=p*this.numThumbs;m.append('<a rel="history" href="#'+this.data[k].hash+'" title="'+l+'">'+l+"</a>");}}return this;}});b.extend(this,c,g);if(this.enableHistory&&!b.historyInit){this.enableHistory=false;}if(this.imageContainerSel){this.$imageContainer=b(this.imageContainerSel);}if(this.captionContainerSel){this.$captionContainer=b(this.captionContainerSel);}if(this.loadingContainerSel){this.$loadingContainer=b(this.loadingContainerSel);}this.initializeThumbs();if(this.maxPagesToShow<3){this.maxPagesToShow=3;}this.displayedPage=-1;this.currentImage=this.data[0];var e=this;if(this.$loadingContainer){this.$loadingContainer.hide();}if(this.controlsContainerSel){this.$controlsContainer=b(this.controlsContainerSel).empty();if(this.renderSSControls){if(this.autoStart){this.$controlsContainer.append('<div class="ss-controls"><a href="#pause" class="pause" title="'+this.pauseLinkText+'">'+this.pauseLinkText+"</a></div>");}else{this.$controlsContainer.append('<div class="ss-controls"><a href="#play" class="play" title="'+this.playLinkText+'">'+this.playLinkText+"</a></div>");}this.$controlsContainer.find("div.ss-controls a").click(function(k){e.toggleSlideshow();k.preventDefault();return false;});}if(this.renderNavControls){this.$controlsContainer.append('<div class="nav-controls"><a class="prev" rel="history" title="'+this.prevLinkText+'">'+this.prevLinkText+'</a><a class="next" rel="history" title="'+this.nextLinkText+'">'+this.nextLinkText+"</a></div>").find("div.nav-controls a").click(function(k){e.clickHandler(k,this);});}}var f=!this.enableHistory||!location.hash;if(this.enableHistory&&location.hash){var h=b.galleriffic.normalizeHash(location.hash);var j=d[h];if(!j){f=true;}}if(f){this.gotoIndex(0,false,true);}if(this.enableKeyboardNavigation){b(document).keydown(function(l){var k=l.charCode?l.charCode:l.keyCode?l.keyCode:0;switch(k){case 32:e.next();l.preventDefault();break;case 33:e.previousPage();l.preventDefault();break;case 34:e.nextPage();l.preventDefault();break;case 35:e.gotoIndex(e.data.length-1);l.preventDefault();break;case 36:e.gotoIndex(0);l.preventDefault();break;case 37:e.previous();l.preventDefault();break;case 39:e.next();l.preventDefault();break;}});}if(this.autoStart){this.play();}setTimeout(function(){e.preloadInit();},1000);return this;};})(jQuery);
/*
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */
(function(b){var d={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click",buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},a=!1;b(window).bind("load.jcarousel",function(){a=!0;});b.jcarousel=function(r,p){this.options=b.extend({},d,p||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!p||p.rtl===void 0){this.options.rtl=(b(r).attr("dir")||b("html").attr("dir")||"").toLowerCase()=="rtl";}this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical?this.options.rtl?"right":"left":"top";for(var q="",o=r.className.split(" "),m=0;m<o.length;m++){if(o[m].indexOf("jcarousel-skin")!=-1){b(r).removeClass(o[m]);q=o[m];break;}}r.nodeName.toUpperCase()=="UL"||r.nodeName.toUpperCase()=="OL"?(this.list=b(r),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=b(r),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0){this.clip=this.list.wrap("<div></div>").parent();}if(this.container.size()===0){this.container=this.clip.wrap("<div></div>").parent();}q!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+q+'"></div>');this.buttonPrev=b(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null){this.buttonPrev=b(this.options.buttonPrevHTML).appendTo(this.container);}this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext=b(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null){this.buttonNext=b(this.options.buttonNextHTML).appendTo(this.container);}this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"});!this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var g=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,q=this.list.children("li"),n=this;if(q.size()>0){var l=0,k=this.options.offset;q.each(function(){n.format(this,k++);l+=n.dimension(this,g);});this.list.css(this.wh,l+100+"px");if(!p||p.size===void 0){this.options.size=q.size();}}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display","block");this.funcNext=function(){n.next();};this.funcPrev=function(){n.prev();};this.funcResize=function(){n.resizeTimer&&clearTimeout(n.resizeTimer);n.resizeTimer=setTimeout(function(){n.reload();},100);};this.options.initCallback!==null&&this.options.initCallback(this,"init");!a&&b.browser.safari?(this.buttons(!1,!1),b(window).bind("load.jcarousel",function(){n.setup();})):this.setup();};var c=b.jcarousel;c.fn=c.prototype={jcarousel:"0.2.8"};c.fn.extend=c.extend=b.extend;c.fn.extend({setup:function(){this.prevLast=this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var e=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(e,!1);b(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this);}},reset:function(){this.list.empty();this.list.css(this.lt,"0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup();},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,c.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var f=this,h=Math.ceil(this.clipping()/this.options.visible),e=0,g=0;this.list.children("li").each(function(j){e+=f.dimension(this,h);j+1<f.first&&(g=e);});this.list.css(this.wh,e+"px");this.list.css(this.lt,-g+"px");}this.scroll(this.first,!1);},lock:function(){this.locked=!0;this.buttons();},unlock:function(){this.locked=!1;this.buttons();},size:function(e){if(e!==void 0){this.options.size=e,this.locked||this.buttons();}return this.options.size;},has:function(f,h){if(h===void 0||!h){h=f;}if(this.options.size!==null&&h>this.options.size){h=this.options.size;}for(var e=f;e<=h;e++){var g=this.get(e);if(!g.length||g.hasClass("jcarousel-item-placeholder")){return !1;}}return !0;},get:function(e){return b(">.jcarousel-item-"+e,this.list);},add:function(g,n){var f=this.get(g),m=0,l=b(n);if(f.length===0){for(var h,k=c.intval(g),f=this.create(g);;){if(h=this.get(--k),k<=0||h.length){k<=0?this.list.prepend(f):h.after(f);break;}}}else{m=this.dimension(f);}l.get(0).nodeName.toUpperCase()=="LI"?(f.replaceWith(l),f=l):f.empty().append(n);this.format(f.removeClass(this.className("jcarousel-item-placeholder")),g);l=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null;m=this.dimension(f,l)-m;g>0&&g<this.first&&this.list.css(this.lt,c.intval(this.list.css(this.lt))-m+"px");this.list.css(this.wh,c.intval(this.list.css(this.wh))+m+"px");return f;},remove:function(f){var g=this.get(f);if(g.length&&!(f>=this.first&&f<=this.last)){var e=this.dimension(g);f<this.first&&this.list.css(this.lt,c.intval(this.list.css(this.lt))+e+"px");g.remove();this.list.css(this.wh,c.intval(this.list.css(this.wh))-e+"px");}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1):this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll);},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll);},scrollTail:function(e){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var f=c.intval(this.list.css(this.lt)),f=!e?f-this.tail:f+this.tail;this.inTail=!e;this.prevFirst=this.first;this.prevLast=this.last;this.animate(f);}},scroll:function(e,f){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(e),f));},pos:function(B,z){var A=c.intval(this.list.css(this.lt));if(this.locked||this.animating){return A;}this.options.wrap!="circular"&&(B=B<1?1:this.options.size&&B>this.options.size?this.options.size:B);for(var y=this.first>B,w=this.options.wrap!="circular"&&this.first<=1?1:this.first,t=y?this.get(w):this.get(this.last),x=y?w:w-1,v=null,u=0,s=!1,r=0;y?--x>=B:++x<B;){v=this.get(x);s=!v.length;if(v.length===0&&(v=this.create(x).addClass(this.className("jcarousel-item-placeholder")),t[y?"before":"after"](v),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(x<=0||x>this.options.size))){t=this.get(this.index(x)),t.length&&(v=this.add(x,t.clone(!0)));}t=v;r=this.dimension(v);s&&(u+=r);if(this.first!==null&&(this.options.wrap=="circular"||x>=1&&(this.options.size===null||x<=this.options.size))){A=y?A+r:A-r;}}for(var w=this.clipping(),q=[],f=0,p=0,t=this.get(B-1),x=B;++f;){v=this.get(x);s=!v.length;if(v.length===0){v=this.create(x).addClass(this.className("jcarousel-item-placeholder"));if(t.length===0){this.list.prepend(v);}else{t[y?"before":"after"](v);}if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(x<=0||x>this.options.size)){t=this.get(this.index(x)),t.length&&(v=this.add(x,t.clone(!0)));}}t=v;r=this.dimension(v);if(r===0){throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");}this.options.wrap!="circular"&&this.options.size!==null&&x>this.options.size?q.push(v):s&&(u+=r);p+=r;if(p>=w){break;}x++;}for(v=0;v<q.length;v++){q[v].remove();}u>0&&(this.list.css(this.wh,this.dimension(this.list)+u+"px"),y&&(A-=u,this.list.css(this.lt,c.intval(this.list.css(this.lt))-u+"px")));u=B+f-1;if(this.options.wrap!="circular"&&this.options.size&&u>this.options.size){u=this.options.size;}if(x>u){f=0;x=u;for(p=0;++f;){v=this.get(x--);if(!v.length){break;}p+=this.dimension(v);if(p>=w){break;}}}x=u-f+1;this.options.wrap!="circular"&&x<1&&(x=1);if(this.inTail&&y){A+=this.tail,this.inTail=!1;}this.tail=null;if(this.options.wrap!="circular"&&u==this.options.size&&u-f+1>=1&&(y=c.intval(this.get(u).css(!this.options.vertical?"marginRight":"marginBottom")),p-y>w)){this.tail=p-w-y;}if(z&&B===this.options.size&&this.tail){A-=this.tail,this.inTail=!0;}for(;B-->x;){A+=this.dimension(this.get(B));}this.prevFirst=this.first;this.prevLast=this.last;this.first=x;this.last=u;return A;},animate:function(g,k){if(!this.locked&&!this.animating){this.animating=!0;var e=this,j=function(){e.animating=!1;g===0&&e.list.css(e.lt,0);!e.autoStopped&&(e.options.wrap=="circular"||e.options.wrap=="both"||e.options.wrap=="last"||e.options.size===null||e.last<e.options.size||e.last==e.options.size&&e.tail!==null&&!e.inTail)&&e.startAuto();e.buttons();e.notify("onAfterAnimation");if(e.options.wrap=="circular"&&e.options.size!==null){for(var f=e.prevFirst;f<=e.prevLast;f++){f!==null&&!(f>=e.first&&f<=e.last)&&(f<1||f>e.options.size)&&e.remove(f);}}};this.notify("onBeforeAnimation");if(!this.options.animation||k===!1){this.list.css(this.lt,g+"px"),j();}else{var h=!this.options.vertical?this.options.rtl?{right:g}:{left:g}:{top:g},j={duration:this.options.animation,easing:this.options.easing,complete:j};if(b.isFunction(this.options.animationStepCallback)){j.step=this.options.animationStepCallback;}this.list.animate(h,j);}}},startAuto:function(e){if(e!==void 0){this.options.auto=e;}if(this.options.auto===0){return this.stopAuto();}if(this.timer===null){this.autoStopped=!1;var f=this;this.timer=window.setTimeout(function(){f.next();},this.options.auto*1000);}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0;},pauseAuto:function(){if(this.timer!==null){window.clearTimeout(this.timer),this.timer=null;}},buttons:function(f,g){if(f==null&&(f=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&&this.last>=this.options.size)){f=this.tail!==null&&!this.inTail;}if(g==null&&(g=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1)){g=this.tail!==null&&this.inTail;}var e=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),f&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext),this.buttonNext[f?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",f?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=f&&this.buttonNext.each(function(){e.options.buttonNextCallback(e,this,f);}).data("jcarouselstate",f)):this.options.buttonNextCallback!==null&&this.buttonNextState!=f&&this.options.buttonNextCallback(e,null,f);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),g&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[g?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",g?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=g&&this.buttonPrev.each(function(){e.options.buttonPrevCallback(e,this,g);}).data("jcarouselstate",g)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=g&&this.options.buttonPrevCallback(e,null,g);this.buttonNextState=f;this.buttonPrevState=g;},notify:function(e){var f=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",e,f);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",e,f,this.first),this.callback("itemFirstOutCallback",e,f,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",e,f,this.last),this.callback("itemLastOutCallback",e,f,this.prevLast));this.callback("itemVisibleInCallback",e,f,this.first,this.last,this.prevFirst,this.prevLast);this.callback("itemVisibleOutCallback",e,f,this.prevFirst,this.prevLast,this.first,this.last);},callback:function(t,r,s,q,o,l,p){if(!(this.options[t]==null||typeof this.options[t]!="object"&&r!="onAfterAnimation")){var n=typeof this.options[t]=="object"?this.options[t][r]:this.options[t];if(b.isFunction(n)){var m=this;if(q===void 0){n(m,s,r);}else{if(o===void 0){this.get(q).each(function(){n(m,this,q,s,r);});}else{for(var t=function(e){m.get(e).each(function(){n(m,this,e,s,r);});},g=q;g<=o;g++){g!==null&&!(g>=l&&g<=p)&&t(g);}}}}}},create:function(e){return this.format("<li></li>",e);},format:function(f,h){for(var f=b(f),e=f.get(0).className.split(" "),g=0;g<e.length;g++){e[g].indexOf("jcarousel-")!=-1&&f.removeClass(e[g]);}f.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+h)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",h);return f;},className:function(e){return e+" "+e+(!this.options.vertical?"-horizontal":"-vertical");},dimension:function(f,h){var e=b(f);if(h==null){return !this.options.vertical?e.outerWidth(!0)||c.intval(this.options.itemFallbackDimension):e.outerHeight(!0)||c.intval(this.options.itemFallbackDimension);}else{var g=!this.options.vertical?h-c.intval(e.css("marginLeft"))-c.intval(e.css("marginRight")):h-c.intval(e.css("marginTop"))-c.intval(e.css("marginBottom"));b(e).css(this.wh,g+"px");return this.dimension(e);}},clipping:function(){return !this.options.vertical?this.clip[0].offsetWidth-c.intval(this.clip.css("borderLeftWidth"))-c.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-c.intval(this.clip.css("borderTopWidth"))-c.intval(this.clip.css("borderBottomWidth"));},index:function(e,f){if(f==null){f=this.options.size;}return Math.round(((e-1)/f-Math.floor((e-1)/f))*f)+1;}});c.extend({defaults:function(e){return b.extend(d,e||{});},intval:function(e){e=parseInt(e,10);return isNaN(e)?0:e;},windowLoaded:function(){a=!0;}});b.fn.jcarousel=function(f){if(typeof f=="string"){var g=b(this).data("jcarousel"),e=Array.prototype.slice.call(arguments,1);return g[f].apply(g,e);}else{return this.each(function(){var h=b(this).data("jcarousel");h?(f&&b.extend(h.options,f),h.reload()):b(this).data("jcarousel",new c(this,f));});}};})(jQuery);eval(function(h,b,j,d,g,f){g=function(a){return(a<b?"":g(parseInt(a/b)))+((a=a%b)>35?String.fromCharCode(a+29):a.toString(36));};if(!"".replace(/^/,String)){while(j--){f[g(j)]=d[j]||g(j);}d=[function(a){return f[a];}];g=function(){return"\\w+";};j=1;}while(j--){if(d[j]){h=h.replace(new RegExp("\\b"+g(j)+"\\b","g"),d[j]);}}return h;}("(6($){$.2N.3g=6(4){4=23.2H({2B:'#34',2g:0.8,1d:F,1M:'18/5-33-Y.16',1v:'18/5-1u-2Q.16',1E:'18/5-1u-2L.16',1W:'18/5-1u-2I.16',19:'18/5-2F.16',1f:10,2A:3d,2s:'1j',2o:'32',2j:'c',2f:'p',2d:'n',h:[],9:0},4);f I=N;6 20(){1X(N,I);u F}6 1X(1e,I){$('1U, 1S, 1R').l({'1Q':'2E'});1O();4.h.B=0;4.9=0;7(I.B==1){4.h.1J(v 1m(1e.17('J'),1e.17('2v')))}j{36(f i=0;i<I.B;i++){4.h.1J(v 1m(I[i].17('J'),I[i].17('2v')))}}2n(4.h[4.9][0]!=1e.17('J')){4.9++}D()}6 1O(){$('m').31('<e g=\"q-13\"></e><e g=\"q-5\"><e g=\"5-s-b-w\"><e g=\"5-s-b\"><1w g=\"5-b\"><e 2V=\"\" g=\"5-k\"><a J=\"#\" g=\"5-k-V\"></a><a J=\"#\" g=\"5-k-X\"></a></e><e g=\"5-Y\"><a J=\"#\" g=\"5-Y-29\"><1w W=\"'+4.1M+'\"></a></e></e></e><e g=\"5-s-b-T-w\"><e g=\"5-s-b-T\"><e g=\"5-b-A\"><1i g=\"5-b-A-1t\"></1i><1i g=\"5-b-A-1g\"></1i></e><e g=\"5-1s\"><a J=\"#\" g=\"5-1s-22\"><1w W=\"'+4.1W+'\"></a></e></e></e></e>');f z=1D();$('#q-13').l({2K:4.2B,2J:4.2g,S:z[0],P:z[1]}).1V();f R=1p();$('#q-5').l({1T:R[1]+(z[3]/10),1c:R[0]}).E();$('#q-13,#q-5').C(6(){1a()});$('#5-Y-29,#5-1s-22').C(6(){1a();u F});$(G).2G(6(){f z=1D();$('#q-13').l({S:z[0],P:z[1]});f R=1p();$('#q-5').l({1T:R[1]+(z[3]/10),1c:R[0]})})}6 D(){$('#5-Y').E();7(4.1d){$('#5-b,#5-s-b-T-w,#5-b-A-1g').1b()}j{$('#5-b,#5-k,#5-k-V,#5-k-X,#5-s-b-T-w,#5-b-A-1g').1b()}f Q=v 1j();Q.1P=6(){$('#5-b').2D('W',4.h[4.9][0]);1N(Q.S,Q.P);Q.1P=6(){}};Q.W=4.h[4.9][0]};6 1N(1o,1r){f 1L=$('#5-s-b-w').S();f 1K=$('#5-s-b-w').P();f 1n=(1o+(4.1f*2));f 1y=(1r+(4.1f*2));f 1I=1L-1n;f 2z=1K-1y;$('#5-s-b-w').3f({S:1n,P:1y},4.2A,6(){2y()});7((1I==0)&&(2z==0)){7($.3e.3c){1H(3b)}j{1H(3a)}}$('#5-s-b-T-w').l({S:1o});$('#5-k-V,#5-k-X').l({P:1r+(4.1f*2)})};6 2y(){$('#5-Y').1b();$('#5-b').1V(6(){2u();2t()});2r()};6 2u(){$('#5-s-b-T-w').38('35');$('#5-b-A-1t').1b();7(4.h[4.9][1]){$('#5-b-A-1t').2p(4.h[4.9][1]).E()}7(4.h.B>1){$('#5-b-A-1g').2p(4.2s+' '+(4.9+1)+' '+4.2o+' '+4.h.B).E()}}6 2t(){$('#5-k').E();$('#5-k-V,#5-k-X').l({'K':'1C M('+4.19+') L-O'});7(4.9!=0){7(4.1d){$('#5-k-V').l({'K':'M('+4.1v+') 1c 15% L-O'}).11().1k('C',6(){4.9=4.9-1;D();u F})}j{$('#5-k-V').11().2m(6(){$(N).l({'K':'M('+4.1v+') 1c 15% L-O'})},6(){$(N).l({'K':'1C M('+4.19+') L-O'})}).E().1k('C',6(){4.9=4.9-1;D();u F})}}7(4.9!=(4.h.B-1)){7(4.1d){$('#5-k-X').l({'K':'M('+4.1E+') 2l 15% L-O'}).11().1k('C',6(){4.9=4.9+1;D();u F})}j{$('#5-k-X').11().2m(6(){$(N).l({'K':'M('+4.1E+') 2l 15% L-O'})},6(){$(N).l({'K':'1C M('+4.19+') L-O'})}).E().1k('C',6(){4.9=4.9+1;D();u F})}}2k()}6 2k(){$(d).30(6(12){2i(12)})}6 1G(){$(d).11()}6 2i(12){7(12==2h){U=2Z.2e;1x=27}j{U=12.2e;1x=12.2Y}14=2X.2W(U).2U();7((14==4.2j)||(14=='x')||(U==1x)){1a()}7((14==4.2f)||(U==37)){7(4.9!=0){4.9=4.9-1;D();1G()}}7((14==4.2d)||(U==39)){7(4.9!=(4.h.B-1)){4.9=4.9+1;D();1G()}}}6 2r(){7((4.h.B-1)>4.9){2c=v 1j();2c.W=4.h[4.9+1][0]}7(4.9>0){2b=v 1j();2b.W=4.h[4.9-1][0]}}6 1a(){$('#q-5').2a();$('#q-13').2T(6(){$('#q-13').2a()});$('1U, 1S, 1R').l({'1Q':'2S'})}6 1D(){f o,r;7(G.1h&&G.28){o=G.26+G.2R;r=G.1h+G.28}j 7(d.m.25>d.m.24){o=d.m.2P;r=d.m.25}j{o=d.m.2O;r=d.m.24}f y,H;7(Z.1h){7(d.t.1l){y=d.t.1l}j{y=Z.26}H=Z.1h}j 7(d.t&&d.t.1A){y=d.t.1l;H=d.t.1A}j 7(d.m){y=d.m.1l;H=d.m.1A}7(r<H){1z=H}j{1z=r}7(o<y){1B=o}j{1B=y}21=v 1m(1B,1z,y,H);u 21};6 1p(){f o,r;7(Z.1Z){r=Z.1Z;o=Z.2M}j 7(d.t&&d.t.1F){r=d.t.1F;o=d.t.1Y}j 7(d.m){r=d.m.1F;o=d.m.1Y}2q=v 1m(o,r);u 2q};6 1H(2C){f 2x=v 2w();1q=2h;3h{f 1q=v 2w()}2n(1q-2x<2C)};u N.11('C').C(20)}})(23);",62,204,"||||settings|lightbox|function|if||activeImage||image||document|div|var|id|imageArray||else|nav|css|body||xScroll||jquery|yScroll|container|documentElement|return|new|box||windowWidth|arrPageSizes|details|length|click|_set_image_to_view|show|false|window|windowHeight|jQueryMatchedObj|href|background|no|url|this|repeat|height|objImagePreloader|arrPageScroll|width|data|keycode|btnPrev|src|btnNext|loading|self||unbind|objEvent|overlay|key||gif|getAttribute|images|imageBlank|_finish|hide|left|fixedNavigation|objClicked|containerBorderSize|currentNumber|innerHeight|span|Image|bind|clientWidth|Array|intWidth|intImageWidth|___getPageScroll|curDate|intImageHeight|secNav|caption|btn|imageBtnPrev|img|escapeKey|intHeight|pageHeight|clientHeight|pageWidth|transparent|___getPageSize|imageBtnNext|scrollTop|_disable_keyboard_navigation|___pause|intDiffW|push|intCurrentHeight|intCurrentWidth|imageLoading|_resize_container_image_box|_set_interface|onload|visibility|select|object|top|embed|fadeIn|imageBtnClose|_start|scrollLeft|pageYOffset|_initialize|arrayPageSize|btnClose|jQuery|offsetHeight|scrollHeight|innerWidth||scrollMaxY|link|remove|objPrev|objNext|keyToNext|keyCode|keyToPrev|overlayOpacity|null|_keyboard_action|keyToClose|_enable_keyboard_navigation|right|hover|while|txtOf|html|arrayPageScroll|_preload_neighbor_images|txtImage|_set_navigation|_show_image_data|title|Date|date|_show_image|intDiffH|containerResizeSpeed|overlayBgColor|ms|attr|hidden|blank|resize|extend|close|opacity|backgroundColor|next|pageXOffset|fn|offsetWidth|scrollWidth|prev|scrollMaxX|visible|fadeOut|toLowerCase|style|fromCharCode|String|DOM_VK_ESCAPE|event|keydown|append|of|ico|000|fast|for||slideDown||100|250|msie|400|browser|animate|lightBox|do".split("|"),0,{}))(function(b){var a=function(m,s){var j=b.extend({},b.fn.nivoSlider.defaults,s);var p={currentSlide:0,currentImage:"",totalSlides:0,randAnim:"",running:false,paused:false,stop:false};var d=b(m);d.data("nivo:vars",p);d.css("position","relative");d.addClass("nivoSlider");var e=d.children();e.each(function(){var w=b(this);var v="";if(!w.is("img")){if(w.is("a")){w.addClass("nivo-imageLink");v=w;}w=w.find("img:first");}var u=w.width();if(u==0){u=w.attr("width");}var t=w.height();if(t==0){t=w.attr("height");}if(u>d.width()){d.width(u);}if(t>d.height()){d.height(t);}if(v!=""){v.css("display","none");}w.css("display","none");p.totalSlides++;});if(j.startSlide>0){if(j.startSlide>=p.totalSlides){j.startSlide=p.totalSlides-1;}p.currentSlide=j.startSlide;}if(b(e[p.currentSlide]).is("img")){p.currentImage=b(e[p.currentSlide]);}else{p.currentImage=b(e[p.currentSlide]).find("img:first");}if(b(e[p.currentSlide]).is("a")){b(e[p.currentSlide]).css("display","block");}d.css("background",'url("'+p.currentImage.attr("src")+'") no-repeat');d.append(b('<div class="nivo-caption"><p></p></div>').css({display:"none",opacity:j.captionOpacity}));var q=function(t){var v=b(".nivo-caption",d);if(p.currentImage.attr("title")!=""){var u=p.currentImage.attr("title");if(u.substr(0,1)=="#"){u=b(u).html();}if(v.css("display")=="block"){v.find("p").fadeOut(t.animSpeed,function(){b(this).html(u);b(this).fadeIn(t.animSpeed);});}else{v.find("p").html(u);}v.fadeIn(t.animSpeed);}else{v.fadeOut(t.animSpeed);}};q(j);var c=0;if(!j.manualAdvance&&e.length>1){c=setInterval(function(){r(d,e,j,false);},j.pauseTime);}if(j.directionNav){d.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+j.prevText+'</a><a class="nivo-nextNav">'+j.nextText+"</a></div>");if(j.directionNavHide){b(".nivo-directionNav",d).hide();d.hover(function(){b(".nivo-directionNav",d).show();},function(){b(".nivo-directionNav",d).hide();});}b("a.nivo-prevNav",d).live("click",function(){if(p.running){return false;}clearInterval(c);c="";p.currentSlide-=2;r(d,e,j,"prev");});b("a.nivo-nextNav",d).live("click",function(){if(p.running){return false;}clearInterval(c);c="";r(d,e,j,"next");});}if(j.controlNav){var n=b('<div class="nivo-controlNav"></div>');d.append(n);for(var l=0;l<e.length;l++){if(j.controlNavThumbs){var f=e.eq(l);if(!f.is("img")){f=f.find("img:first");}if(j.controlNavThumbsFromRel){n.append('<a class="nivo-control" rel="'+l+'"><img src="'+f.attr("rel")+'" alt="" /></a>');}else{n.append('<a class="nivo-control" rel="'+l+'"><img src="'+f.attr("src").replace(j.controlNavThumbsSearch,j.controlNavThumbsReplace)+'" alt="" /></a>');}}else{n.append('<a class="nivo-control" rel="'+l+'">'+(l+1)+"</a>");}}b(".nivo-controlNav a:eq("+p.currentSlide+")",d).addClass("active");b(".nivo-controlNav a",d).live("click",function(){if(p.running){return false;}if(b(this).hasClass("active")){return false;}clearInterval(c);c="";d.css("background",'url("'+p.currentImage.attr("src")+'") no-repeat');p.currentSlide=b(this).attr("rel")-1;r(d,e,j,"control");});}if(j.keyboardNav){b(window).keypress(function(t){if(t.keyCode=="37"){if(p.running){return false;}clearInterval(c);c="";p.currentSlide-=2;r(d,e,j,"prev");}if(t.keyCode=="39"){if(p.running){return false;}clearInterval(c);c="";r(d,e,j,"next");}});}if(j.pauseOnHover){d.hover(function(){p.paused=true;clearInterval(c);c="";},function(){p.paused=false;if(c==""&&!j.manualAdvance){c=setInterval(function(){r(d,e,j,false);},j.pauseTime);}});}d.bind("nivo:animFinished",function(){p.running=false;b(e).each(function(){if(b(this).is("a")){b(this).css("display","none");}});if(b(e[p.currentSlide]).is("a")){b(e[p.currentSlide]).css("display","block");}if(c==""&&!p.paused&&!j.manualAdvance){c=setInterval(function(){r(d,e,j,false);},j.pauseTime);}j.afterChange.call(this);});var g=function(v,u,x){for(var t=0;t<u.slices;t++){var w=Math.round(v.width()/u.slices);if(t==u.slices-1){v.append(b('<div class="nivo-slice"></div>').css({left:(w*t)+"px",width:(v.width()-(w*t))+"px",height:"0px",opacity:"0",background:'url("'+x.currentImage.attr("src")+'") no-repeat -'+((w+(t*w))-w)+"px 0%"}));}else{v.append(b('<div class="nivo-slice"></div>').css({left:(w*t)+"px",width:w+"px",height:"0px",opacity:"0",background:'url("'+x.currentImage.attr("src")+'") no-repeat -'+((w+(t*w))-w)+"px 0%"}));}}};var h=function(v,t,y){var u=Math.round(v.width()/t.boxCols);var z=Math.round(v.height()/t.boxRows);for(var w=0;w<t.boxRows;w++){for(var x=0;x<t.boxCols;x++){if(x==t.boxCols-1){v.append(b('<div class="nivo-box"></div>').css({opacity:0,left:(u*x)+"px",top:(z*w)+"px",width:(v.width()-(u*x))+"px",height:z+"px",background:'url("'+y.currentImage.attr("src")+'") no-repeat -'+((u+(x*u))-u)+"px -"+((z+(w*z))-z)+"px"}));}else{v.append(b('<div class="nivo-box"></div>').css({opacity:0,left:(u*x)+"px",top:(z*w)+"px",width:u+"px",height:z+"px",background:'url("'+y.currentImage.attr("src")+'") no-repeat -'+((u+(x*u))-u)+"px -"+((z+(w*z))-z)+"px"}));}}}};var r=function(H,G,K,D){var F=H.data("nivo:vars");if(F&&(F.currentSlide==F.totalSlides-1)){K.lastSlide.call(this);}if((!F||F.stop)&&!D){return false;}K.beforeChange.call(this);if(!D){H.css("background",'url("'+F.currentImage.attr("src")+'") no-repeat');}else{if(D=="prev"){H.css("background",'url("'+F.currentImage.attr("src")+'") no-repeat');}if(D=="next"){H.css("background",'url("'+F.currentImage.attr("src")+'") no-repeat');}}F.currentSlide++;if(F.currentSlide==F.totalSlides){F.currentSlide=0;K.slideshowEnd.call(this);}if(F.currentSlide<0){F.currentSlide=(F.totalSlides-1);}if(b(G[F.currentSlide]).is("img")){F.currentImage=b(G[F.currentSlide]);}else{F.currentImage=b(G[F.currentSlide]).find("img:first");}if(K.controlNav){b(".nivo-controlNav a",H).removeClass("active");b(".nivo-controlNav a:eq("+F.currentSlide+")",H).addClass("active");}q(K);b(".nivo-slice",H).remove();b(".nivo-box",H).remove();if(K.effect=="random"){var M=new Array("sliceDownRight","sliceDownLeft","sliceUpRight","sliceUpLeft","sliceUpDown","sliceUpDownLeft","fold","fade","boxRandom","boxRain","boxRainReverse","boxRainGrow","boxRainGrowReverse");F.randAnim=M[Math.floor(Math.random()*(M.length+1))];if(F.randAnim==undefined){F.randAnim="fade";}}if(K.effect.indexOf(",")!=-1){var M=K.effect.split(",");F.randAnim=M[Math.floor(Math.random()*(M.length))];if(F.randAnim==undefined){F.randAnim="fade";}}F.running=true;if(K.effect=="sliceDown"||K.effect=="sliceDownRight"||F.randAnim=="sliceDownRight"||K.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){g(H,K,F);var L=0;var I=0;var t=b(".nivo-slice",H);if(K.effect=="sliceDownLeft"||F.randAnim=="sliceDownLeft"){t=b(".nivo-slice",H)._reverse();}t.each(function(){var v=b(this);v.css({top:"0px"});if(I==K.slices-1){setTimeout(function(){v.animate({height:"100%",opacity:"1.0"},K.animSpeed,"",function(){H.trigger("nivo:animFinished");});},(100+L));}else{setTimeout(function(){v.animate({height:"100%",opacity:"1.0"},K.animSpeed);},(100+L));}L+=50;I++;});}else{if(K.effect=="sliceUp"||K.effect=="sliceUpRight"||F.randAnim=="sliceUpRight"||K.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){g(H,K,F);var L=0;var I=0;var t=b(".nivo-slice",H);if(K.effect=="sliceUpLeft"||F.randAnim=="sliceUpLeft"){t=b(".nivo-slice",H)._reverse();}t.each(function(){var v=b(this);v.css({bottom:"0px"});if(I==K.slices-1){setTimeout(function(){v.animate({height:"100%",opacity:"1.0"},K.animSpeed,"",function(){H.trigger("nivo:animFinished");});},(100+L));}else{setTimeout(function(){v.animate({height:"100%",opacity:"1.0"},K.animSpeed);},(100+L));}L+=50;I++;});}else{if(K.effect=="sliceUpDown"||K.effect=="sliceUpDownRight"||F.randAnim=="sliceUpDown"||K.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){g(H,K,F);var L=0;var I=0;var B=0;var t=b(".nivo-slice",H);if(K.effect=="sliceUpDownLeft"||F.randAnim=="sliceUpDownLeft"){t=b(".nivo-slice",H)._reverse();}t.each(function(){var v=b(this);if(I==0){v.css("top","0px");I++;}else{v.css("bottom","0px");I=0;}if(B==K.slices-1){setTimeout(function(){v.animate({height:"100%",opacity:"1.0"},K.animSpeed,"",function(){H.trigger("nivo:animFinished");});},(100+L));}else{setTimeout(function(){v.animate({height:"100%",opacity:"1.0"},K.animSpeed);},(100+L));}L+=50;B++;});}else{if(K.effect=="fold"||F.randAnim=="fold"){g(H,K,F);var L=0;var I=0;b(".nivo-slice",H).each(function(){var v=b(this);var N=v.width();v.css({top:"0px",height:"100%",width:"0px"});if(I==K.slices-1){setTimeout(function(){v.animate({width:N,opacity:"1.0"},K.animSpeed,"",function(){H.trigger("nivo:animFinished");});},(100+L));}else{setTimeout(function(){v.animate({width:N,opacity:"1.0"},K.animSpeed);},(100+L));}L+=50;I++;});}else{if(K.effect=="fade"||F.randAnim=="fade"){g(H,K,F);var z=b(".nivo-slice:first",H);z.css({height:"100%",width:H.width()+"px"});z.animate({opacity:"1.0"},(K.animSpeed*2),"",function(){H.trigger("nivo:animFinished");});}else{if(K.effect=="slideInRight"||F.randAnim=="slideInRight"){g(H,K,F);var z=b(".nivo-slice:first",H);z.css({height:"100%",width:"0px",opacity:"1"});z.animate({width:H.width()+"px"},(K.animSpeed*2),"",function(){H.trigger("nivo:animFinished");});}else{if(K.effect=="slideInLeft"||F.randAnim=="slideInLeft"){g(H,K,F);var z=b(".nivo-slice:first",H);z.css({height:"100%",width:"0px",opacity:"1",left:"",right:"0px"});z.animate({width:H.width()+"px"},(K.animSpeed*2),"",function(){z.css({left:"0px",right:""});H.trigger("nivo:animFinished");});}else{if(K.effect=="boxRandom"||F.randAnim=="boxRandom"){h(H,K,F);var J=K.boxCols*K.boxRows;var I=0;var L=0;var w=o(b(".nivo-box",H));w.each(function(){var v=b(this);if(I==J-1){setTimeout(function(){v.animate({opacity:"1"},K.animSpeed,"",function(){H.trigger("nivo:animFinished");});},(100+L));}else{setTimeout(function(){v.animate({opacity:"1"},K.animSpeed);},(100+L));}L+=20;I++;});}else{if(K.effect=="boxRain"||F.randAnim=="boxRain"||K.effect=="boxRainReverse"||F.randAnim=="boxRainReverse"||K.effect=="boxRainGrow"||F.randAnim=="boxRainGrow"||K.effect=="boxRainGrowReverse"||F.randAnim=="boxRainGrowReverse"){h(H,K,F);var J=K.boxCols*K.boxRows;var I=0;var L=0;var y=0;var E=0;var C=new Array();C[y]=new Array();var w=b(".nivo-box",H);if(K.effect=="boxRainReverse"||F.randAnim=="boxRainReverse"||K.effect=="boxRainGrowReverse"||F.randAnim=="boxRainGrowReverse"){w=b(".nivo-box",H)._reverse();}w.each(function(){C[y][E]=b(this);E++;if(E==K.boxCols){y++;E=0;C[y]=new Array();}});for(var A=0;A<(K.boxCols*2);A++){var u=A;for(var x=0;x<K.boxRows;x++){if(u>=0&&u<K.boxCols){(function(S,N,R,O,T){var Q=b(C[S][N]);var v=Q.width();var P=Q.height();if(K.effect=="boxRainGrow"||F.randAnim=="boxRainGrow"||K.effect=="boxRainGrowReverse"||F.randAnim=="boxRainGrowReverse"){Q.width(0).height(0);}if(O==T-1){setTimeout(function(){Q.animate({opacity:"1",width:v,height:P},K.animSpeed/1.3,"",function(){H.trigger("nivo:animFinished");});},(100+R));}else{setTimeout(function(){Q.animate({opacity:"1",width:v,height:P},K.animSpeed/1.3);},(100+R));}})(x,u,L,I,J);I++;}u--;}L+=100;}}}}}}}}}}};var o=function(u){for(var v,t,w=u.length;w;v=parseInt(Math.random()*w),t=u[--w],u[w]=u[v],u[v]=t){}return u;};var k=function(t){if(this.console&&typeof console.log!="undefined"){console.log(t);}};this.stop=function(){if(!b(m).data("nivo:vars").stop){b(m).data("nivo:vars").stop=true;k("Stop Slider");}};this.start=function(){if(b(m).data("nivo:vars").stop){b(m).data("nivo:vars").stop=false;k("Start Slider");}};j.afterLoad.call(this);return this;};b.fn.nivoSlider=function(c){return this.each(function(e,g){var d=b(this);if(d.data("nivoslider")){return d.data("nivoslider");}var f=new a(this,c);d.data("nivoslider",f);});};b.fn.nivoSlider.defaults={effect:"random",slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:".jpg",controlNavThumbsReplace:"_thumb.jpg",keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,prevText:"Prev",nextText:"Next",beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};b.fn._reverse=[].reverse;})(jQuery);(function(a){var b={mouseOutOpacity:0.67,mouseOverOpacity:1,fadeSpeed:"fast",exemptionSelector:".selected"};a.fn.opacityrollover=function(d){a.extend(this,b,d);var c=this;function e(h,g){var f=a(h);if(c.exemptionSelector){f=f.not(c.exemptionSelector);}f.fadeTo(c.fadeSpeed,g);}this.css("opacity",this.mouseOutOpacity).hover(function(){e(this,c.mouseOverOpacity);},function(){e(this,c.mouseOutOpacity);});return this;};})(jQuery);
/*
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(aI,aG){function cJ(b){return aC.isWindow(b)?b:b.nodeType===9?b.defaultView||b.parentWindow:!1;}function cf(e){if(!cq[e]){var d=aC("<"+e+">").appendTo("body"),f=d.css("display");d.remove();if(f==="none"||f===""){f="block";}cq[e]=f;}return cq[e];}function ch(e,d){var f={};aC.each(ci.concat.apply([],ci.slice(0,d)),function(){f[this]=e;});return f;}function cy(z,y){z.dataFilter&&(y=z.dataFilter(y,z.dataType));var x=z.dataTypes,w=z.converters,v,u=x.length,t,s=x[0],r,q,p,d,b;for(v=1;v<u;v++){r=s,s=x[v];if(s==="*"){s=r;}else{if(r!=="*"&&r!==s){q=r+" "+s,p=w[q]||w["* "+s];if(!p){b=aG;for(d in w){t=d.split(" ");if(t[0]===r||t[0]==="*"){b=w[t[1]+" "+s];if(b){d=w[d],d===!0?p=b:b===!0&&(p=d);break;}}}}!p&&!b&&aC.error("No conversion from "+q.replace(" "," to ")),p!==!0&&(y=p?p(y):b(d(y)));}}}return y;}function cz(t,s,r){var q=t.contents,p=t.dataTypes,o=t.responseFields,n,m,l,b;for(m in o){m in r&&(s[o[m]]=r[m]);}while(p[0]==="*"){p.shift(),n===aG&&(n=s.getResponseHeader("content-type"));}if(n){for(m in q){if(q[m]&&q[m].test(n)){p.unshift(m);break;}}}if(p[0] in r){l=p[0];}else{for(m in r){if(!p[0]||t.converters[m+" "+p[0]]){l=m;break;}b||(b=m);}l=l||b;}if(l){l!==p[0]&&p.unshift(l);return r[l];}}function cA(f,d,h,g){aC.isArray(d)&&d.length?aC.each(d,function(a,c){h||aM.test(f)?g(f,c):cA(f+"["+(typeof c==="object"||aC.isArray(c)?a:"")+"]",c,h,g);}):h||d==null||typeof d!=="object"?g(f,d):aC.isArray(d)||aC.isEmptyObject(d)?g(f,""):aC.each(d,function(a,c){cA(f+"["+a+"]",c,h,g);});}function cB(v,u,t,s,r,q){r=r||u.dataTypes[0],q=q||{},q[r]=!0;var p=v[r],o=0,n=p?p.length:0,m=v===cE,b;for(;o<n&&(m||!b);o++){b=p[o](u,t,s),typeof b==="string"&&(q[b]?b=aG:(u.dataTypes.unshift(b),b=cB(v,u,t,s,b,q)));}(m||!b)&&!q["*"]&&(b=cB(v,u,t,s,"*",q));return b;}function cC(b){return function(a,p){typeof a!=="string"&&(p=a,a="*");if(aC.isFunction(p)){var o=a.toLowerCase().split(at),n=0,m=o.length,l,k,d;for(;n<m;n++){l=o[n],d=/^\+/.test(l),d&&(l=l.substr(1)||"*"),k=b[l]=b[l]||[],k[d?"unshift":"push"](p);}}};}function aO(g,d,k){var j=d==="width"?aY:aW,h=d==="width"?g.offsetWidth:g.offsetHeight;if(k==="border"){return h;}aC.each(j,function(){k||(h-=parseFloat(aC.css(g,"padding"+this))||0),k==="margin"?h+=parseFloat(aC.css(g,"margin"+this))||0:h-=parseFloat(aC.css(g,"border"+this+"Width"))||0;});return h;}function aL(d,c){c.src?aC.ajax({url:c.src,async:!1,dataType:"script"}):aC.globalEval(c.text||c.textContent||c.innerHTML||""),c.parentNode&&c.parentNode.removeChild(c);}function cI(e,d){if(d.nodeType===1){var f=d.nodeName.toLowerCase();d.clearAttributes(),d.mergeAttributes(e);if(f==="object"){d.outerHTML=e.outerHTML;}else{if(f!=="input"||e.type!=="checkbox"&&e.type!=="radio"){if(f==="option"){d.selected=e.defaultSelected;}else{if(f==="input"||f==="textarea"){d.defaultValue=e.defaultValue;}}}else{e.checked&&(d.defaultChecked=d.checked=e.checked),d.value!==e.value&&(d.value=e.value);}}d.removeAttribute(aC.expando);}}function aR(r,q){if(q.nodeType===1&&aC.hasData(r)){var p=aC.expando,o=aC.data(r),n=aC.data(q,o);if(o=o[p]){var m=o.events;n=n[p]=aC.extend({},o);if(m){delete n.handle,n.events={};for(var l in m){for(var k=0,d=m[l].length;k<d;k++){aC.event.add(q,l,m[l][k],m[l][k].data);}}}}}}function aT(d,c){return aC.nodeName(d,"table")?d.getElementsByTagName("tbody")[0]||d.appendChild(d.ownerDocument.createElement("tbody")):d;}function b3(f,d,h){if(aC.isFunction(d)){return aC.grep(f,function(b,j){var c=!!d.call(b,j,b);return c===h;});}if(d.nodeType){return aC.grep(f,function(b,c){return b===d===h;});}if(typeof d==="string"){var g=aC.grep(f,function(b){return b.nodeType===1;});if(b8.test(d)){return aC.filter(d,g,!h);}d=aC.filter(d,g);}return aC.grep(f,function(b,c){return aC.inArray(b,d)>=0===h;});}function b4(b){return !b||!b.parentNode||b.parentNode.nodeType===11;}function ce(d,c){return(d&&d!=="*"?d+".":"")+c.replace(aj,"`").replace(ai,"&");}function cg(J){var I,H,G,F,E,D,C,B,A,z,y,x,w,v=[],u=[],o=aC._data(this,af);typeof o==="function"&&(o=o.events);if(J.liveFired!==this&&o&&o.live&&!J.target.disabled&&(!J.button||J.type!=="click")){J.namespace&&(x=new RegExp("(^|\\.)"+J.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),J.liveFired=this;var d=o.live.slice(0);for(C=0;C<d.length;C++){E=d[C],E.origType.replace(al,"")===J.type?u.push(E.selector):d.splice(C--,1);}F=aC(J.target).closest(u,J.currentTarget);for(B=0,A=F.length;B<A;B++){y=F[B];for(C=0;C<d.length;C++){E=d[C];if(y.selector===E.selector&&(!x||x.test(E.namespace))){D=y.elem,G=null;if(E.preType==="mouseenter"||E.preType==="mouseleave"){J.type=E.preType,G=aC(J.relatedTarget).closest(E.selector)[0];}(!G||G!==D)&&v.push({elem:D,handleObj:E,level:y.level});}}}for(B=0,A=v.length;B<A;B++){F=v[B];if(H&&F.level>H){break;}J.currentTarget=F.elem,J.data=F.handleObj.data,J.handleObj=F.handleObj,w=F.handleObj.origHandler.apply(F.elem,arguments);if(w===!1||J.isPropagationStopped()){H=F.level,w===!1&&(I=!1);if(J.isImmediatePropagationStopped()){break;}}}return I;}}function cl(e,d,f){f[0].type=e;return aC.event.handle.apply(d,f);}function ad(){return !0;}function ae(){return !1;}function ay(b,h,e){if(e===aG&&b.nodeType===1){e=b.getAttribute("data-"+h);if(typeof e==="string"){try{e=e==="true"?!0:e==="false"?!1:e==="null"?null:aC.isNaN(e)?aA.test(e)?aC.parseJSON(e):e:parseFloat(e);}catch(d){}aC.data(b,h,e);}else{e=aG;}}return e;}var aE=aI.document,aC=function(){function J(){if(!bl.isReady){try{aE.documentElement.doScroll("left");}catch(d){setTimeout(J,1);return;}bl.ready();}}var bl=function(e,d){return new bl.fn.init(e,d,bi);},bk=aI.jQuery,bj=aI.$,bi,bh=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,bg=/\S/,bf=/^\s+/,be=/\s+$/,bd=/\d/,bc=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bb=/^[\],:{}\s]*$/,ba=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,Z=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,X=/(?:^|:|,)(?:\s*\[)+/g,V=/(webkit)[ \/]([\w.]+)/,T=/(opera)(?:.*version)?[ \/]([\w.]+)/,R=/(msie) ([\w.]+)/,P=/(mozilla)(?:.*? rv:([\w.]+))?/,N=navigator.userAgent,L,c=!1,b,a="then done fail isResolved isRejected promise".split(" "),Y,W=Object.prototype.toString,U=Object.prototype.hasOwnProperty,S=Array.prototype.push,Q=Array.prototype.slice,O=String.prototype.trim,M=Array.prototype.indexOf,K={};bl.fn=bl.prototype={constructor:bl,init:function(d,p,o){var n,m,l,h;if(!d){return this;}if(d.nodeType){this.context=this[0]=d,this.length=1;return this;}if(d==="body"&&!p&&aE.body){this.context=aE,this[0]=aE.body,this.selector="body",this.length=1;return this;}if(typeof d==="string"){n=bh.exec(d);if(!n||!n[1]&&p){return !p||p.jquery?(p||o).find(d):this.constructor(p).find(d);}if(n[1]){p=p instanceof bl?p[0]:p,h=p?p.ownerDocument||p:aE,l=bc.exec(d),l?bl.isPlainObject(p)?(d=[aE.createElement(l[1])],bl.fn.attr.call(d,p,!0)):d=[h.createElement(l[1])]:(l=bl.buildFragment([n[1]],[h]),d=(l.cacheable?bl.clone(l.fragment):l.fragment).childNodes);return bl.merge(this,d);}m=aE.getElementById(n[2]);if(m&&m.parentNode){if(m.id!==n[2]){return o.find(d);}this.length=1,this[0]=m;}this.context=aE,this.selector=d;return this;}if(bl.isFunction(d)){return o.ready(d);}d.selector!==aG&&(this.selector=d.selector,this.context=d.context);return bl.makeArray(d,this);},selector:"",jquery:"1.5",length:0,size:function(){return this.length;},toArray:function(){return Q.call(this,0);},get:function(d){return d==null?this.toArray():d<0?this[this.length+d]:this[d];},pushStack:function(f,d,h){var g=this.constructor();bl.isArray(f)?S.apply(g,f):bl.merge(g,f),g.prevObject=this,g.context=this.context,d==="find"?g.selector=this.selector+(this.selector?" ":"")+h:d&&(g.selector=this.selector+"."+d+"("+h+")");return g;},each:function(e,d){return bl.each(this,e,d);},ready:function(d){bl.bindReady(),b.done(d);return this;},eq:function(d){return d===-1?this.slice(d):this.slice(d,+d+1);},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},slice:function(){return this.pushStack(Q.apply(this,arguments),"slice",Q.call(arguments).join(","));},map:function(d){return this.pushStack(bl.map(this,function(e,f){return d.call(e,f,e);}));},end:function(){return this.prevObject||this.constructor(null);},push:S,sort:[].sort,splice:[].splice},bl.fn.init.prototype=bl.fn,bl.extend=bl.fn.extend=function(){var u,t,s,r,q,p,o=arguments[0]||{},n=1,m=arguments.length,d=!1;typeof o==="boolean"&&(d=o,o=arguments[1]||{},n=2),typeof o!=="object"&&!bl.isFunction(o)&&(o={}),m===n&&(o=this,--n);for(;n<m;n++){if((u=arguments[n])!=null){for(t in u){s=o[t],r=u[t];if(o===r){continue;}d&&r&&(bl.isPlainObject(r)||(q=bl.isArray(r)))?(q?(q=!1,p=s&&bl.isArray(s)?s:[]):p=s&&bl.isPlainObject(s)?s:{},o[t]=bl.extend(d,p,r)):r!==aG&&(o[t]=r);}}}return o;},bl.extend({noConflict:function(d){aI.$=bj,d&&(aI.jQuery=bk);return bl;},isReady:!1,readyWait:1,ready:function(d){d===!0&&bl.readyWait--;if(!bl.readyWait||d!==!0&&!bl.isReady){if(!aE.body){return setTimeout(bl.ready,1);}bl.isReady=!0;if(d!==!0&&--bl.readyWait>0){return;}b.resolveWith(aE,[bl]),bl.fn.trigger&&bl(aE).trigger("ready").unbind("ready");}},bindReady:function(){if(!c){c=!0;if(aE.readyState==="complete"){return setTimeout(bl.ready,1);}if(aE.addEventListener){aE.addEventListener("DOMContentLoaded",Y,!1),aI.addEventListener("load",bl.ready,!1);}else{if(aE.attachEvent){aE.attachEvent("onreadystatechange",Y),aI.attachEvent("onload",bl.ready);var d=!1;try{d=aI.frameElement==null;}catch(f){}aE.documentElement.doScroll&&d&&J();}}}},isFunction:function(d){return bl.type(d)==="function";},isArray:Array.isArray||function(d){return bl.type(d)==="array";},isWindow:function(d){return d&&typeof d==="object"&&"setInterval" in d;},isNaN:function(d){return d==null||!bd.test(d)||isNaN(d);},type:function(d){return d==null?String(d):K[W.call(d)]||"object";},isPlainObject:function(d){if(!d||bl.type(d)!=="object"||d.nodeType||bl.isWindow(d)){return !1;}if(d.constructor&&!U.call(d,"constructor")&&!U.call(d.constructor.prototype,"isPrototypeOf")){return !1;}var e;for(e in d){}return e===aG||U.call(d,e);},isEmptyObject:function(e){for(var d in e){return !1;}return !0;},error:function(d){throw d;},parseJSON:function(d){if(typeof d!=="string"||!d){return null;}d=bl.trim(d);if(bb.test(d.replace(ba,"@").replace(Z,"]").replace(X,""))){return aI.JSON&&aI.JSON.parse?aI.JSON.parse(d):(new Function("return "+d))();}bl.error("Invalid JSON: "+d);},parseXML:function(d,g,f){aI.DOMParser?(f=new DOMParser,g=f.parseFromString(d,"text/xml")):(g=new ActiveXObject("Microsoft.XMLDOM"),g.async="false",g.loadXML(d)),f=g.documentElement,(!f||!f.nodeName||f.nodeName==="parsererror")&&bl.error("Invalid XML: "+d);return g;},noop:function(){},globalEval:function(f){if(f&&bg.test(f)){var d=aE.getElementsByTagName("head")[0]||aE.documentElement,g=aE.createElement("script");g.type="text/javascript",bl.support.scriptEval()?g.appendChild(aE.createTextNode(f)):g.text=f,d.insertBefore(g,d.firstChild),d.removeChild(g);}},nodeName:function(e,d){return e.nodeName&&e.nodeName.toUpperCase()===d.toUpperCase();},each:function(d,q,p){var o,n=0,m=d.length,l=m===aG||bl.isFunction(d);if(p){if(l){for(o in d){if(q.apply(d[o],p)===!1){break;}}}else{for(;n<m;){if(q.apply(d[n++],p)===!1){break;}}}}else{if(l){for(o in d){if(q.call(d[o],o,d[o])===!1){break;}}}else{for(var k=d[0];n<m&&q.call(k,n,k)!==!1;k=d[++n]){}}}return d;},trim:O?function(d){return d==null?"":O.call(d);}:function(d){return d==null?"":(d+"").replace(bf,"").replace(be,"");},makeArray:function(f,d){var h=d||[];if(f!=null){var g=bl.type(f);f.length==null||g==="string"||g==="function"||g==="regexp"||bl.isWindow(f)?S.call(h,f):bl.merge(h,f);}return h;},inArray:function(f,e){if(e.indexOf){return e.indexOf(f);}for(var h=0,g=e.length;h<g;h++){if(e[h]===f){return h;}}return -1;},merge:function(g,l){var k=g.length,j=0;if(typeof l.length==="number"){for(var h=l.length;j<h;j++){g[k++]=l[j];}}else{while(l[j]!==aG){g[k++]=l[j++];}}g.length=k;return g;},grep:function(j,h,o){var n=[],m;o=!!o;for(var l=0,k=j.length;l<k;l++){m=!!h(j[l],l),o!==m&&n.push(j[l]);}return n;},map:function(j,h,o){var n=[],m;for(var l=0,k=j.length;l<k;l++){m=h(j[l],l,o),m!=null&&(n[n.length]=m);}return n.concat.apply([],n);},guid:1,proxy:function(d,g,f){arguments.length===2&&(typeof g==="string"?(f=d,d=f[g],g=aG):g&&!bl.isFunction(g)&&(f=g,g=aG)),!g&&d&&(g=function(){return d.apply(f||this,arguments);}),d&&(g.guid=d.guid=d.guid||g.guid||bl.guid++);return g;},access:function(s,r,q,p,o,n){var m=s.length;if(typeof r==="object"){for(var l in r){bl.access(s,l,r[l],p,o,q);}return s;}if(q!==aG){p=!n&&p&&bl.isFunction(q);for(var d=0;d<m;d++){o(s[d],r,p?q.call(s[d],d,o(s[d],r)):q,n);}return s;}return m?o(s[0],r):aG;},now:function(){return(new Date).getTime();},_Deferred:function(){var g=[],d,k,j,h={done:function(){if(!j){var o=arguments,n,m,l,f,e;d&&(e=d,d=0);for(n=0,m=o.length;n<m;n++){l=o[n],f=bl.type(l),f==="array"?h.done.apply(h,l):f==="function"&&g.push(l);}e&&h.resolveWith(e[0],e[1]);}return this;},resolveWith:function(l,e){if(!j&&!d&&!k){k=1;try{while(g[0]){g.shift().apply(l,e);}}finally{d=[l,e],k=0;}}return this;},resolve:function(){h.resolveWith(bl.isFunction(this.promise)?this.promise():this,arguments);return this;},isResolved:function(){return k||d;},cancel:function(){j=1,g=[];return this;}};return h;},Deferred:function(f){var d=bl._Deferred(),h=bl._Deferred(),g;bl.extend(d,{then:function(e,j){d.done(e).fail(j);return this;},fail:h.done,rejectWith:h.resolveWith,reject:h.resolve,isRejected:h.isResolved,promise:function(e,j){if(e==null){if(g){return g;}g=e={};}j=a.length;while(j--){e[a[j]]=d[a[j]];}return e;}}),d.then(h.cancel,d.cancel),delete d.cancel,f&&f.call(d,d);return d;},when:function(h){var d=arguments,m=d.length,l=m<=1&&h&&bl.isFunction(h.promise)?h:bl.Deferred(),k=l.promise(),j;m>1?(j=Array(m),bl.each(d,function(f,e){bl.when(e).then(function(g){j[f]=arguments.length>1?Q.call(arguments,0):g,--m||l.resolveWith(k,j);},l.reject);})):l!==h&&l.resolve(h);return k;},uaMatch:function(e){e=e.toLowerCase();var d=V.exec(e)||T.exec(e)||R.exec(e)||e.indexOf("compatible")<0&&P.exec(e)||[];return{browser:d[1]||"",version:d[2]||"0"};},sub:function(){function f(e,h){return new f.fn.init(e,h);}bl.extend(!0,f,this),f.superclass=this,f.fn=f.prototype=this(),f.fn.constructor=f,f.subclass=this.subclass,f.fn.init=function d(e,h){h&&h instanceof bl&&!(h instanceof f)&&(h=f(h));return bl.fn.init.call(this,e,h,g);},f.fn.init.prototype=f.fn;var g=f(aE);return f;},browser:{}}),b=bl._Deferred(),bl.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,d){K["[object "+d+"]"]=d.toLowerCase();}),L=bl.uaMatch(N),L.browser&&(bl.browser[L.browser]=!0,bl.browser.version=L.version),bl.browser.webkit&&(bl.browser.safari=!0),M&&(bl.inArray=function(e,d){return M.call(d,e);}),bg.test(" ")&&(bf=/^[\s\xA0]+/,be=/[\s\xA0]+$/),bi=bl(aE),aE.addEventListener?Y=function(){aE.removeEventListener("DOMContentLoaded",Y,!1),bl.ready();}:aE.attachEvent&&(Y=function(){aE.readyState==="complete"&&(aE.detachEvent("onreadystatechange",Y),bl.ready());});return aI.jQuery=aI.$=bl;}();(function(){aC.support={};var r=aE.createElement("div");r.style.display="none",r.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var q=r.getElementsByTagName("*"),p=r.getElementsByTagName("a")[0],o=aE.createElement("select"),n=o.appendChild(aE.createElement("option"));if(q&&q.length&&p){aC.support={leadingWhitespace:r.firstChild.nodeType===3,tbody:!r.getElementsByTagName("tbody").length,htmlSerialize:!!r.getElementsByTagName("link").length,style:/red/.test(p.getAttribute("style")),hrefNormalized:p.getAttribute("href")==="/a",opacity:/^0.55$/.test(p.style.opacity),cssFloat:!!p.style.cssFloat,checkOn:r.getElementsByTagName("input")[0].value==="on",optSelected:n.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},o.disabled=!0,aC.support.optDisabled=!n.disabled,aC.support.scriptEval=function(){if(aC.support._scriptEval===null){var h=aE.documentElement,l=aE.createElement("script"),k="script"+aC.now();l.type="text/javascript";try{l.appendChild(aE.createTextNode("window."+k+"=1;"));}catch(j){}h.insertBefore(l,h.firstChild),aI[k]?(aC.support._scriptEval=!0,delete aI[k]):aC.support._scriptEval=!1,h.removeChild(l),h=l=k=null;}return aC.support._scriptEval;};try{delete r.test;}catch(m){aC.support.deleteExpando=!1;}r.attachEvent&&r.fireEvent&&(r.attachEvent("onclick",function d(){aC.support.noCloneEvent=!1,r.detachEvent("onclick",d);}),r.cloneNode(!0).fireEvent("onclick")),r=aE.createElement("div"),r.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var c=aE.createDocumentFragment();c.appendChild(r.firstChild),aC.support.checkClone=c.cloneNode(!0).cloneNode(!0).lastChild.checked,aC(function(){var g=aE.createElement("div"),f=aE.getElementsByTagName("body")[0];if(f){g.style.width=g.style.paddingLeft="1px",f.appendChild(g),aC.boxModel=aC.support.boxModel=g.offsetWidth===2,"zoom" in g.style&&(g.style.display="inline",g.style.zoom=1,aC.support.inlineBlockNeedsLayout=g.offsetWidth===2,g.style.display="",g.innerHTML="<div style='width:4px;'></div>",aC.support.shrinkWrapBlocks=g.offsetWidth!==2),g.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var h=g.getElementsByTagName("td");aC.support.reliableHiddenOffsets=h[0].offsetHeight===0,h[0].style.display="",h[1].style.display="none",aC.support.reliableHiddenOffsets=aC.support.reliableHiddenOffsets&&h[0].offsetHeight===0,g.innerHTML="",f.removeChild(g).style.display="none",g=h=null;}});var a=function(f){var e=aE.createElement("div");f="on"+f;if(!e.attachEvent){return !0;}var g=f in e;g||(e.setAttribute(f,"return;"),g=typeof e[f]==="function"),e=null;return g;};aC.support.submitBubbles=a("submit"),aC.support.changeBubbles=a("change"),r=q=p=null;}})();var aA=/^(?:\{.*\}|\[.*\])$/;aC.extend({cache:{},uuid:0,expando:"jQuery"+(aC.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(b){b=b.nodeType?aC.cache[b[aC.expando]]:b[aC.expando];return !!b&&!aC.isEmptyObject(b);},data:function(t,s,r,q){if(aC.acceptData(t)){var p=aC.expando,o=typeof s==="string",n,m=t.nodeType,d=m?aC.cache:t,b=m?t[aC.expando]:t[aC.expando]&&aC.expando;if((!b||q&&b&&!d[b][p])&&o&&r===aG){return;}b||(m?t[aC.expando]=b=++aC.uuid:b=aC.expando),d[b]||(d[b]={}),typeof s==="object"&&(q?d[b][p]=aC.extend(d[b][p],s):d[b]=aC.extend(d[b],s)),n=d[b],q&&(n[p]||(n[p]={}),n=n[p]),r!==aG&&(n[s]=r);if(s==="events"&&!n[s]){return n[p]&&n[p].events;}return o?n[s]:n;}},removeData:function(r,q,p){if(aC.acceptData(r)){var o=aC.expando,n=r.nodeType,m=n?aC.cache:r,l=n?r[aC.expando]:aC.expando;if(!m[l]){return;}if(q){var d=p?m[l][o]:m[l];if(d){delete d[q];if(!aC.isEmptyObject(d)){return;}}}if(p){delete m[l][o];if(!aC.isEmptyObject(m[l])){return;}}var a=m[l][o];aC.support.deleteExpando||m!=aI?delete m[l]:m[l]=null,a?(m[l]={},m[l][o]=a):n&&(aC.support.deleteExpando?delete r[aC.expando]:r.removeAttribute?r.removeAttribute(aC.expando):r[aC.expando]=null);}},_data:function(e,d,f){return aC.data(e,d,f,!0);},acceptData:function(d){if(d.nodeName){var c=aC.noData[d.nodeName.toLowerCase()];if(c){return c!==!0&&d.getAttribute("classid")===c;}}return !0;}}),aC.fn.extend({data:function(b,p){var o=null;if(typeof b==="undefined"){if(this.length){o=aC.data(this[0]);if(this[0].nodeType===1){var n=this[0].attributes,m;for(var l=0,f=n.length;l<f;l++){m=n[l].name,m.indexOf("data-")===0&&(m=m.substr(5),ay(this[0],m,o[m]));}}}return o;}if(typeof b==="object"){return this.each(function(){aC.data(this,b);});}var d=b.split(".");d[1]=d[1]?"."+d[1]:"";if(p===aG){o=this.triggerHandler("getData"+d[1]+"!",[d[0]]),o===aG&&this.length&&(o=aC.data(this[0],b),o=ay(this[0],b,o));return o===aG&&d[1]?this.data(d[0]):o;}return this.each(function(){var a=aC(this),c=[d[0],p];a.triggerHandler("setData"+d[1]+"!",c),aC.data(this,b,p),a.triggerHandler("changeData"+d[1]+"!",c);});},removeData:function(b){return this.each(function(){aC.removeData(this,b);});}}),aC.extend({queue:function(f,d,h){if(f){d=(d||"fx")+"queue";var g=aC._data(f,d);if(!h){return g||[];}!g||aC.isArray(h)?g=aC._data(f,d,aC.makeArray(h)):g.push(h);return g;}},dequeue:function(f,d){d=d||"fx";var h=aC.queue(f,d),g=h.shift();g==="inprogress"&&(g=h.shift()),g&&(d==="fx"&&h.unshift("inprogress"),g.call(f,function(){aC.dequeue(f,d);})),h.length||aC.removeData(f,d+"queue",!0);}}),aC.fn.extend({queue:function(b,d){typeof b!=="string"&&(d=b,b="fx");if(d===aG){return aC.queue(this[0],b);}return this.each(function(a){var c=aC.queue(this,b,d);b==="fx"&&c[0]!=="inprogress"&&aC.dequeue(this,b);});},dequeue:function(b){return this.each(function(){aC.dequeue(this,b);});},delay:function(d,c){d=aC.fx?aC.fx.speeds[d]||d:d,c=c||"fx";return this.queue(c,function(){var a=this;setTimeout(function(){aC.dequeue(a,c);},d);});},clearQueue:function(b){return this.queue(b||"fx",[]);}});var aw=/[\n\t\r]/g,au=/\s+/,ar=/\r/g,aq=/^(?:href|src|style)$/,ap=/^(?:button|input)$/i,ao=/^(?:button|input|object|select|textarea)$/i,an=/^a(?:rea)?$/i,am=/^(?:radio|checkbox)$/i;aC.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},aC.fn.extend({attr:function(d,c){return aC.access(this,d,c,!0,aC.attr);},removeAttr:function(d,c){return this.each(function(){aC.attr(this,d,""),this.nodeType===1&&this.removeAttribute(d);});},addClass:function(r){if(aC.isFunction(r)){return this.each(function(a){var e=aC(this);e.addClass(r.call(this,a,e.attr("class")));});}if(r&&typeof r==="string"){var q=(r||"").split(au);for(var p=0,o=this.length;p<o;p++){var n=this[p];if(n.nodeType===1){if(n.className){var m=" "+n.className+" ",l=n.className;for(var h=0,d=q.length;h<d;h++){m.indexOf(" "+q[h]+" ")<0&&(l+=" "+q[h]);}n.className=aC.trim(l);}else{n.className=r;}}}}return this;},removeClass:function(d){if(aC.isFunction(d)){return this.each(function(a){var e=aC(this);e.removeClass(d.call(this,a,e.attr("class")));});}if(d&&typeof d==="string"||d===aG){var p=(d||"").split(au);for(var o=0,n=this.length;o<n;o++){var m=this[o];if(m.nodeType===1&&m.className){if(d){var h=(" "+m.className+" ").replace(aw," ");for(var g=0,b=p.length;g<b;g++){h=h.replace(" "+p[g]+" "," ");}m.className=aC.trim(h);}else{m.className="";}}}}return this;},toggleClass:function(f,d){var h=typeof f,g=typeof d==="boolean";if(aC.isFunction(f)){return this.each(function(b){var a=aC(this);a.toggleClass(f.call(this,b,a.attr("class"),d),d);});}return this.each(function(){if(h==="string"){var l,e=0,c=aC(this),b=d,a=f.split(au);while(l=a[e++]){b=g?b:!c.hasClass(l),c[b?"addClass":"removeClass"](l);}}else{if(h==="undefined"||h==="boolean"){this.className&&aC._data(this,"__className__",this.className),this.className=this.className||f===!1?"":aC._data(this,"__className__")||"";}}});},hasClass:function(f){var e=" "+f+" ";for(var h=0,g=this.length;h<g;h++){if((" "+this[h].className+" ").replace(aw," ").indexOf(e)>-1){return !0;}}return !1;},val:function(w){if(!arguments.length){var v=this[0];if(v){if(aC.nodeName(v,"option")){var u=v.attributes.value;return !u||u.specified?v.value:v.text;}if(aC.nodeName(v,"select")){var t=v.selectedIndex,s=[],r=v.options,q=v.type==="select-one";if(t<0){return null;}for(var p=q?t:0,n=q?t+1:r.length;p<n;p++){var d=r[p];if(d.selected&&(aC.support.optDisabled?!d.disabled:d.getAttribute("disabled")===null)&&(!d.parentNode.disabled||!aC.nodeName(d.parentNode,"optgroup"))){w=aC(d).val();if(q){return w;}s.push(w);}}return s;}if(am.test(v.type)&&!aC.support.checkOn){return v.getAttribute("value")===null?"on":v.value;}return(v.value||"").replace(ar,"");}return aG;}var b=aC.isFunction(w);return this.each(function(a){var j=aC(this),h=w;if(this.nodeType===1){b&&(h=w.call(this,a,j.val())),h==null?h="":typeof h==="number"?h+="":aC.isArray(h)&&(h=aC.map(h,function(c){return c==null?"":c+"";}));if(aC.isArray(h)&&am.test(this.type)){this.checked=aC.inArray(j.val(),h)>=0;}else{if(aC.nodeName(this,"select")){var g=aC.makeArray(h);aC("option",this).each(function(){this.selected=aC.inArray(aC(this).val(),g)>=0;}),g.length||(this.selectedIndex=-1);}else{this.value=h;}}}});}}),aC.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(t,s,r,q){if(!t||t.nodeType===3||t.nodeType===8||t.nodeType===2){return aG;}if(q&&s in aC.attrFn){return aC(t)[s](r);}var m=t.nodeType!==1||!aC.isXMLDoc(t),l=r!==aG;s=m&&aC.props[s]||s;if(t.nodeType===1){var k=aq.test(s);if(s==="selected"&&!aC.support.optSelected){var j=t.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex);}if((s in t||t[s]!==aG)&&m&&!k){l&&(s==="type"&&ap.test(t.nodeName)&&t.parentNode&&aC.error("type property can't be changed"),r===null?t.nodeType===1&&t.removeAttribute(s):t[s]=r);if(aC.nodeName(t,"form")&&t.getAttributeNode(s)){return t.getAttributeNode(s).nodeValue;}if(s==="tabIndex"){var d=t.getAttributeNode("tabIndex");return d&&d.specified?d.value:ao.test(t.nodeName)||an.test(t.nodeName)&&t.href?0:aG;}return t[s];}if(!aC.support.style&&m&&s==="style"){l&&(t.style.cssText=""+r);return t.style.cssText;}l&&t.setAttribute(s,""+r);if(!t.attributes[s]&&(t.hasAttribute&&!t.hasAttribute(s))){return aG;}var b=!aC.support.hrefNormalized&&m&&k?t.getAttribute(s,2):t.getAttribute(s);return b===null?aG:b;}l&&(t[s]=r);return t[s];}});var al=/\.(.*)$/,ak=/^(?:textarea|input|select)$/i,aj=/\./g,ai=/ /g,ah=/[^\w\s.|`]/g,ag=function(b){return b.replace(ah,"\\$&");},af="events";aC.event={add:function(B,A,z,y){if(B.nodeType!==3&&B.nodeType!==8){aC.isWindow(B)&&(B!==aI&&!B.frameElement)&&(B=aI);if(z===!1){z=ae;}else{if(!z){return;}}var x,w;z.handler&&(x=z,z=x.handler),z.guid||(z.guid=aC.guid++);var v=aC._data(B);if(!v){return;}var u=v[af],t=v.handle;typeof u==="function"?(t=u.handle,u=u.events):u||(B.nodeType||(v[af]=v=function(){}),v.events=u={}),t||(v.handle=t=function(){return typeof aC!=="undefined"&&!aC.event.triggered?aC.event.handle.apply(t.elem,arguments):aG;}),t.elem=B,A=A.split(" ");var s,r=0,d;while(s=A[r++]){w=x?aC.extend({},x):{handler:z,data:y},s.indexOf(".")>-1?(d=s.split("."),s=d.shift(),w.namespace=d.slice(0).sort().join(".")):(d=[],w.namespace=""),w.type=s,w.guid||(w.guid=z.guid);var b=u[s],a=aC.event.special[s]||{};if(!b){b=u[s]=[];if(!a.setup||a.setup.call(B,y,d,t)===!1){B.addEventListener?B.addEventListener(s,t,!1):B.attachEvent&&B.attachEvent("on"+s,t);}}a.add&&(a.add.call(B,w),w.handler.guid||(w.handler.guid=z.guid)),b.push(w),aC.event.global[s]=!0;}B=null;}},global:{},remove:function(L,K,J,I){if(L.nodeType!==3&&L.nodeType!==8){J===!1&&(J=ae);var H,G,F,E,D=0,C,B,A,z,y,v,u,t=aC.hasData(L)&&aC._data(L),d=t&&t[af];if(!t||!d){return;}typeof d==="function"&&(t=d,d=d.events),K&&K.type&&(J=K.handler,K=K.type);if(!K||typeof K==="string"&&K.charAt(0)==="."){K=K||"";for(G in d){aC.event.remove(L,G+K);}return;}K=K.split(" ");while(G=K[D++]){u=G,v=null,C=G.indexOf(".")<0,B=[],C||(B=G.split("."),G=B.shift(),A=new RegExp("(^|\\.)"+aC.map(B.slice(0).sort(),ag).join("\\.(?:.*\\.)?")+"(\\.|$)")),y=d[G];if(!y){continue;}if(!J){for(E=0;E<y.length;E++){v=y[E];if(C||A.test(v.namespace)){aC.event.remove(L,u,v.handler,E),y.splice(E--,1);}}continue;}z=aC.event.special[G]||{};for(E=I||0;E<y.length;E++){v=y[E];if(J.guid===v.guid){if(C||A.test(v.namespace)){I==null&&y.splice(E--,1),z.remove&&z.remove.call(L,v);}if(I!=null){break;}}}if(y.length===0||I!=null&&y.length===1){(!z.teardown||z.teardown.call(L,B)===!1)&&aC.removeEvent(L,G,t.handle),H=null,delete d[G];}}if(aC.isEmptyObject(d)){var b=t.handle;b&&(b.elem=null),delete t.events,delete t.handle,typeof t==="function"?aC.removeData(L,af,!0):aC.isEmptyObject(t)&&aC.removeData(L,aG,!0);}}},trigger:function(B,A,z){var y=B.type||B,x=arguments[3];if(!x){B=typeof B==="object"?B[aC.expando]?B:aC.extend(aC.Event(y),B):aC.Event(y),y.indexOf("!")>=0&&(B.type=y=y.slice(0,-1),B.exclusive=!0),z||(B.stopPropagation(),aC.event.global[y]&&aC.each(aC.cache,function(){var a=aC.expando,c=this[a];c&&c.events&&c.events[y]&&aC.event.trigger(B,A,c.handle.elem);}));if(!z||z.nodeType===3||z.nodeType===8){return aG;}B.result=aG,B.target=z,A=aC.makeArray(A),A.unshift(B);}B.currentTarget=z;var w=z.nodeType?aC._data(z,"handle"):(aC._data(z,af)||{}).handle;w&&w.apply(z,A);var v=z.parentNode||z.ownerDocument;try{z&&z.nodeName&&aC.noData[z.nodeName.toLowerCase()]||z["on"+y]&&z["on"+y].apply(z,A)===!1&&(B.result=!1,B.preventDefault());}catch(u){}if(!B.isPropagationStopped()&&v){aC.event.trigger(B,A,v,!0);}else{if(!B.isDefaultPrevented()){var t,s=B.target,r=y.replace(al,""),o=aC.nodeName(s,"a")&&r==="click",d=aC.event.special[r]||{};if((!d._default||d._default.call(z,B)===!1)&&!o&&!(s&&s.nodeName&&aC.noData[s.nodeName.toLowerCase()])){try{s[r]&&(t=s["on"+r],t&&(s["on"+r]=null),aC.event.triggered=!0,s[r]());}catch(b){}t&&(s["on"+r]=t),aC.event.triggered=!1;}}}},handle:function(x){var w,v,u,t,s,r=[],q=aC.makeArray(arguments);x=q[0]=aC.event.fix(x||aI.event),x.currentTarget=this,w=x.type.indexOf(".")<0&&!x.exclusive,w||(u=x.type.split("."),x.type=u.shift(),r=u.slice(0).sort(),t=new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.)?")+"(\\.|$)")),x.namespace=x.namespace||r.join("."),s=aC._data(this,af),typeof s==="function"&&(s=s.events),v=(s||{})[x.type];if(s&&v){v=v.slice(0);for(var p=0,d=v.length;p<d;p++){var b=v[p];if(w||t.test(b.namespace)){x.handler=b.handler,x.data=b.data,x.handleObj=b;var a=b.handler.apply(this,q);a!==aG&&(x.result=a,a===!1&&(x.preventDefault(),x.stopPropagation()));if(x.isImmediatePropagationStopped()){break;}}}}return x.result;},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(b){if(b[aC.expando]){return b;}var l=b;b=aC.Event(l);for(var k=this.props.length,j;k;){j=this.props[--k],b[j]=l[j];}b.target||(b.target=b.srcElement||aE),b.target.nodeType===3&&(b.target=b.target.parentNode),!b.relatedTarget&&b.fromElement&&(b.relatedTarget=b.fromElement===b.target?b.toElement:b.fromElement);if(b.pageX==null&&b.clientX!=null){var d=aE.documentElement,c=aE.body;b.pageX=b.clientX+(d&&d.scrollLeft||c&&c.scrollLeft||0)-(d&&d.clientLeft||c&&c.clientLeft||0),b.pageY=b.clientY+(d&&d.scrollTop||c&&c.scrollTop||0)-(d&&d.clientTop||c&&c.clientTop||0);}b.which==null&&(b.charCode!=null||b.keyCode!=null)&&(b.which=b.charCode!=null?b.charCode:b.keyCode),!b.metaKey&&b.ctrlKey&&(b.metaKey=b.ctrlKey),!b.which&&b.button!==aG&&(b.which=b.button&1?1:b.button&2?3:b.button&4?2:0);return b;},guid:100000000,proxy:aC.proxy,special:{ready:{setup:aC.bindReady,teardown:aC.noop},live:{add:function(b){aC.event.add(this,ce(b.origType,b.selector),aC.extend({},b,{handler:cg,guid:b.handler.guid}));},remove:function(b){aC.event.remove(this,ce(b.origType,b.selector),b);}},beforeunload:{setup:function(e,d,f){aC.isWindow(this)&&(this.onbeforeunload=f);},teardown:function(d,c){this.onbeforeunload===c&&(this.onbeforeunload=null);}}}},aC.removeEvent=aE.removeEventListener?function(e,d,f){e.removeEventListener&&e.removeEventListener(d,f,!1);}:function(e,d,f){e.detachEvent&&e.detachEvent("on"+d,f);},aC.Event=function(b){if(!this.preventDefault){return new aC.Event(b);}b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||b.returnValue===!1||b.getPreventDefault&&b.getPreventDefault()?ad:ae):this.type=b,this.timeStamp=aC.now(),this[aC.expando]=!0;},aC.Event.prototype={preventDefault:function(){this.isDefaultPrevented=ad;var b=this.originalEvent;b&&(b.preventDefault?b.preventDefault():b.returnValue=!1);},stopPropagation:function(){this.isPropagationStopped=ad;var b=this.originalEvent;b&&(b.stopPropagation&&b.stopPropagation(),b.cancelBubble=!0);},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=ad,this.stopPropagation();},isDefaultPrevented:ae,isPropagationStopped:ae,isImmediatePropagationStopped:ae};var ac=function(e){var d=e.relatedTarget;try{while(d&&d!==this){d=d.parentNode;}d!==this&&(e.type=e.data,aC.event.handle.apply(this,arguments));}catch(f){}},ab=function(b){b.type=b.data,aC.event.handle.apply(this,arguments);};aC.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(d,c){aC.event.special[d]={setup:function(a){aC.event.add(this,c,a&&a.selector?ab:ac,d);},teardown:function(b){aC.event.remove(this,c,b&&b.selector?ab:ac);}};}),aC.support.submitBubbles||(aC.event.special.submit={setup:function(b,d){if(this.nodeName&&this.nodeName.toLowerCase()!=="form"){aC.event.add(this,"click.specialSubmit",function(f){var h=f.target,g=h.type;if((g==="submit"||g==="image")&&aC(h).closest("form").length){f.liveFired=aG;return cl("submit",this,arguments);}}),aC.event.add(this,"keypress.specialSubmit",function(f){var h=f.target,g=h.type;if((g==="text"||g==="password")&&aC(h).closest("form").length&&f.keyCode===13){f.liveFired=aG;return cl("submit",this,arguments);}});}else{return !1;}},teardown:function(b){aC.event.remove(this,".specialSubmit");}});if(!aC.support.changeBubbles){var aa,cp=function(e){var d=e.type,f=e.value;d==="radio"||d==="checkbox"?f=e.checked:d==="select-multiple"?f=e.selectedIndex>-1?aC.map(e.options,function(b){return b.selected;}).join("-"):"":e.nodeName.toLowerCase()==="select"&&(f=e.selectedIndex);return f;},cn=function cn(b){var h=b.target,g,d;if(ak.test(h.nodeName)&&!h.readOnly){g=aC._data(h,"_change_data"),d=cp(h),(b.type!=="focusout"||h.type!=="radio")&&aC._data(h,"_change_data",d);if(g===aG||d===g){return;}if(g!=null||d){b.type="change",b.liveFired=aG;return aC.event.trigger(b,arguments[1],h);}}};aC.event.special.change={filters:{focusout:cn,beforedeactivate:cn,click:function(e){var d=e.target,f=d.type;if(f==="radio"||f==="checkbox"||d.nodeName.toLowerCase()==="select"){return cn.call(this,e);}},keydown:function(e){var d=e.target,f=d.type;if(e.keyCode===13&&d.nodeName.toLowerCase()!=="textarea"||e.keyCode===32&&(f==="checkbox"||f==="radio")||f==="select-multiple"){return cn.call(this,e);}},beforeactivate:function(d){var c=d.target;aC._data(c,"_change_data",cp(c));}},setup:function(e,d){if(this.type==="file"){return !1;}for(var f in aa){aC.event.add(this,f+".specialChange",aa[f]);}return ak.test(this.nodeName);},teardown:function(b){aC.event.remove(this,".specialChange");return ak.test(this.nodeName);}},aa=aC.event.special.change.filters,aa.focus=aa.beforeactivate;}aE.addEventListener&&aC.each({focus:"focusin",blur:"focusout"},function(e,d){function f(b){b=aC.event.fix(b),b.type=d;return aC.event.handle.call(this,b);}aC.event.special[d]={setup:function(){this.addEventListener(e,f,!0);},teardown:function(){this.removeEventListener(e,f,!0);}};}),aC.each(["bind","one"],function(b,d){aC.fn[d]=function(c,p,o){if(typeof c==="object"){for(var n in c){this[d](n,p,c[n],o);}return this;}if(aC.isFunction(p)||p===!1){o=p,p=aG;}var m=d==="one"?aC.proxy(o,function(e){aC(this).unbind(e,m);return o.apply(this,arguments);}):o;if(c==="unload"&&d!=="one"){this.one(c,p,o);}else{for(var l=0,k=this.length;l<k;l++){aC.event.add(this[l],c,m,p);}}return this;};}),aC.fn.extend({unbind:function(g,d){if(typeof g!=="object"||g.preventDefault){for(var j=0,h=this.length;j<h;j++){aC.event.remove(this[j],g,d);}}else{for(var k in g){this.unbind(k,g[k]);}}return this;},delegate:function(f,e,h,g){return this.live(e,h,g,f);},undelegate:function(e,d,f){return arguments.length===0?this.unbind("live"):this.die(d,null,f,e);},trigger:function(d,c){return this.each(function(){aC.event.trigger(d,c,this);});},triggerHandler:function(e,d){if(this[0]){var f=aC.Event(e);f.preventDefault(),f.stopPropagation(),aC.event.trigger(f,d,this[0]);return f.result;}},toggle:function(e){var d=arguments,f=1;while(f<d.length){aC.proxy(e,d[f++]);}return this.click(aC.proxy(e,function(b){var a=(aC._data(this,"lastToggle"+e.guid)||0)%f;aC._data(this,"lastToggle"+e.guid,a+1),b.preventDefault();return d[a].apply(this,arguments)||!1;}));},hover:function(d,c){return this.mouseenter(d).mouseleave(c||d);}});var cj={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};aC.each(["live","die"],function(b,d){aC.fn[d]=function(D,C,B,A){var z,y=0,x,w,v,u=A||this.selector,t=A?this:aC(this.context);if(typeof D==="object"&&!D.preventDefault){for(var s in D){t[d](s,C,D[s],u);}return this;}aC.isFunction(C)&&(B=C,C=aG),D=(D||"").split(" ");while((z=D[y++])!=null){x=al.exec(z),w="",x&&(w=x[0],z=z.replace(al,""));if(z==="hover"){D.push("mouseenter"+w,"mouseleave"+w);continue;}v=z,z==="focus"||z==="blur"?(D.push(cj[z]+w),z=z+w):z=(cj[z]||z)+w;if(d==="live"){for(var o=0,c=t.length;o<c;o++){aC.event.add(t[o],"live."+ce(z,u),{data:C,selector:u,handler:B,origType:z,origHandler:B,preType:v});}}else{t.unbind("live."+ce(z,u),B);}}return this;};}),aC.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(d,c){aC.fn[c]=function(b,e){e==null&&(e=b,b=null);return arguments.length>0?this.bind(c,b,e):this.trigger(c);},aC.attrFn&&(aC.attrFn[c]=!0);}),function(){function H(I,t,s,r,q,p){for(var o=0,n=r.length;o<n;o++){var m=r[o];if(m){var l=!1;m=m[I];while(m){if(m.sizcache===s){l=r[m.sizset];break;}if(m.nodeType===1){p||(m.sizcache=s,m.sizset=o);if(typeof t!=="string"){if(m===t){l=!0;break;}}else{if(A.filter(t,[m]).length>0){l=m;break;}}}m=m[I];}r[o]=l;}}}function b(t,s,r,q,p,o){for(var n=0,m=q.length;n<m;n++){var l=q[n];if(l){var k=!1;l=l[t];while(l){if(l.sizcache===r){k=q[l.sizset];break;}l.nodeType===1&&!o&&(l.sizcache=r,l.sizset=n);if(l.nodeName.toLowerCase()===s){k=l;break;}l=l[t];}q[n]=k;}}}var F=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,E=0,D=Object.prototype.toString,C=!1,B=!0;[0,0].sort(function(){B=!1;return 0;});var A=function(N,L,K,J){K=K||[],L=L||aE;var I=L;if(L.nodeType!==1&&L.nodeType!==9){return[];}if(!N||typeof N!=="string"){return K;}var t,n,k,j,f,a,S,R,Q=!0,P=A.isXML(L),O=[],M=N;do{F.exec(""),t=F.exec(M);if(t){M=t[3],O.push(t[1]);if(t[2]){j=t[3];break;}}}while(t);if(O.length>1&&y.exec(N)){if(O.length===2&&z.relative[O[0]]){n=G(O[0]+O[1],L);}else{n=z.relative[O[0]]?[L]:A(O.shift(),L);while(O.length){N=O.shift(),z.relative[N]&&(N+=O.shift()),n=G(N,n);}}}else{!J&&O.length>1&&L.nodeType===9&&!P&&z.match.ID.test(O[0])&&!z.match.ID.test(O[O.length-1])&&(f=A.find(O.shift(),L,P),L=f.expr?A.filter(f.expr,f.set)[0]:f.set[0]);if(L){f=J?{expr:O.pop(),set:v(J)}:A.find(O.pop(),O.length===1&&(O[0]==="~"||O[0]==="+")&&L.parentNode?L.parentNode:L,P),n=f.expr?A.filter(f.expr,f.set):f.set,O.length>0?k=v(n):Q=!1;while(O.length){a=O.pop(),S=a,z.relative[a]?S=O.pop():a="",S==null&&(S=L),z.relative[a](k,S,P);}}else{k=O=[];}}k||(k=n),k||A.error(a||N);if(D.call(k)==="[object Array]"){if(Q){if(L&&L.nodeType===1){for(R=0;k[R]!=null;R++){k[R]&&(k[R]===!0||k[R].nodeType===1&&A.contains(L,k[R]))&&K.push(n[R]);}}else{for(R=0;k[R]!=null;R++){k[R]&&k[R].nodeType===1&&K.push(n[R]);}}}else{K.push.apply(K,k);}}else{v(k,K);}j&&(A(j,I,K,J),A.uniqueSort(K));return K;};A.uniqueSort=function(f){if(d){C=B,f.sort(d);if(C){for(var e=1;e<f.length;e++){f[e]===f[e-1]&&f.splice(e--,1);}}}return f;},A.matches=function(f,e){return A(f,null,null,e);},A.matchesSelector=function(f,e){return A(e,null,null,[f]).length>0;},A.find=function(r,q,p){var o;if(!r){return[];}for(var n=0,m=z.order.length;n<m;n++){var l,k=z.order[n];if(l=z.leftMatch[k].exec(r)){var j=l[1];l.splice(1,1);if(j.substr(j.length-1)!=="\\"){l[1]=(l[1]||"").replace(/\\/g,""),o=z.find[k](l,q,p);if(o!=null){r=r.replace(z.match[k],"");break;}}}}o||(o=typeof q.getElementsByTagName!=="undefined"?q.getElementsByTagName("*"):[]);return{set:o,expr:r};},A.filter=function(V,U,T,S){var R,Q,P=V,O=[],N=U,M=U&&U[0]&&A.isXML(U[0]);while(V&&U.length){for(var L in z.filter){if((R=z.leftMatch[L].exec(V))!=null&&R[2]){var K,J,I=z.filter[L],j=R[1];Q=!1,R.splice(1,1);if(j.substr(j.length-1)==="\\"){continue;}N===O&&(O=[]);if(z.preFilter[L]){R=z.preFilter[L](R,N,T,O,S,M);if(R){if(R===!0){continue;}}else{Q=K=!0;}}if(R){for(var X=0;(J=N[X])!=null;X++){if(J){K=I(J,R,X,N);var W=S^!!K;T&&K!=null?W?Q=!0:N[X]=!1:W&&(O.push(J),Q=!0);}}}if(K!==aG){T||(N=O),V=V.replace(z.match[L],"");if(!Q){return[];}break;}}}if(V===P){if(Q==null){A.error(V);}else{break;}}P=V;}return N;},A.error=function(e){throw"Syntax error, unrecognized expression: "+e;};var z=A.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href");}},relative:{"+":function(k,j){var q=typeof j==="string",p=q&&!/\W/.test(j),o=q&&!p;p&&(j=j.toLowerCase());for(var n=0,m=k.length,l;n<m;n++){if(l=k[n]){while((l=l.previousSibling)&&l.nodeType!==1){}k[n]=o||l&&l.nodeName.toLowerCase()===j?l||!1:l===j;}}o&&A.filter(j,k,!0);},">":function(j,h){var o,n=typeof h==="string",m=0,l=j.length;if(n&&!/\W/.test(h)){h=h.toLowerCase();for(;m<l;m++){o=j[m];if(o){var k=o.parentNode;j[m]=k.nodeName.toLowerCase()===h?k:!1;}}}else{for(;m<l;m++){o=j[m],o&&(j[m]=n?o.parentNode:o.parentNode===h);}n&&A.filter(h,j,!0);}},"":function(h,e,m){var l,k=E++,j=H;typeof e==="string"&&!/\W/.test(e)&&(e=e.toLowerCase(),l=e,j=b),j("parentNode",e,k,h,l,m);},"~":function(h,e,m){var l,k=E++,j=H;typeof e==="string"&&!/\W/.test(e)&&(e=e.toLowerCase(),l=e,j=b),j("previousSibling",e,k,h,l,m);}},find:{ID:function(f,e,h){if(typeof e.getElementById!=="undefined"&&!h){var g=e.getElementById(f[1]);return g&&g.parentNode?[g]:[];}},NAME:function(h,g){if(typeof g.getElementsByName!=="undefined"){var m=[],l=g.getElementsByName(h[1]);for(var k=0,j=l.length;k<j;k++){l[k].getAttribute("name")===h[1]&&m.push(l[k]);}return m.length===0?null:m;}},TAG:function(f,e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName(f[1]);}}},preFilter:{CLASS:function(k,j,q,p,o,n){k=" "+k[1].replace(/\\/g,"")+" ";if(n){return k;}for(var m=0,l;(l=j[m])!=null;m++){l&&(o^(l.className&&(" "+l.className+" ").replace(/[\t\n\r]/g," ").indexOf(k)>=0)?q||p.push(l):q&&(j[m]=!1));}return !1;},ID:function(e){return e[1].replace(/\\/g,"");},TAG:function(f,e){return f[1].toLowerCase();},CHILD:function(f){if(f[1]==="nth"){f[2]||A.error(f[0]),f[2]=f[2].replace(/^\+|\s*/g,"");var e=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(f[2]==="even"&&"2n"||f[2]==="odd"&&"2n+1"||!/\D/.test(f[2])&&"0n+"+f[2]||f[2]);f[2]=e[1]+(e[2]||1)-0,f[3]=e[3]-0;}else{f[2]&&A.error(f[0]);}f[0]=E++;return f;},ATTR:function(j,h,o,n,m,l){var k=j[1]=j[1].replace(/\\/g,"");!l&&z.attrMap[k]&&(j[1]=z.attrMap[k]),j[4]=(j[4]||j[5]||"").replace(/\\/g,""),j[2]==="~="&&(j[4]=" "+j[4]+" ");return j;},PSEUDO:function(a,m,l,k,j){if(a[1]==="not"){if((F.exec(a[3])||"").length>1||/^\w/.test(a[3])){a[3]=A(a[3],null,null,m);}else{var h=A.filter(a[3],m,l,!0^j);l||k.push.apply(k,h);return !1;}}else{if(z.match.POS.test(a[0])||z.match.CHILD.test(a[0])){return !0;}}return a;},POS:function(e){e.unshift(!0);return e;}},filters:{enabled:function(e){return e.disabled===!1&&e.type!=="hidden";},disabled:function(e){return e.disabled===!0;},checked:function(e){return e.checked===!0;},selected:function(e){e.parentNode.selectedIndex;return e.selected===!0;},parent:function(e){return !!e.firstChild;},empty:function(e){return !e.firstChild;},has:function(f,e,g){return !!A(g[3],f).length;},header:function(e){return/h\d/i.test(e.nodeName);},text:function(e){return"text"===e.type;},radio:function(e){return"radio"===e.type;},checkbox:function(e){return"checkbox"===e.type;},file:function(e){return"file"===e.type;},password:function(e){return"password"===e.type;},submit:function(e){return"submit"===e.type;},image:function(e){return"image"===e.type;},reset:function(e){return"reset"===e.type;},button:function(e){return"button"===e.type||e.nodeName.toLowerCase()==="button";},input:function(e){return/input|select|textarea|button/i.test(e.nodeName);}},setFilters:{first:function(f,e){return e===0;},last:function(f,e,h,g){return e===g.length-1;},even:function(f,e){return e%2===0;},odd:function(f,e){return e%2===1;},lt:function(f,e,g){return e<g[3]-0;},gt:function(f,e,g){return e>g[3]-0;},nth:function(f,e,g){return g[3]-0===e;},eq:function(f,e,g){return g[3]-0===e;}},filter:{PSEUDO:function(s,r,q,p){var o=r[1],n=z.filters[o];if(n){return n(s,q,r,p);}if(o==="contains"){return(s.textContent||s.innerText||A.getText([s])||"").indexOf(r[3])>=0;}if(o==="not"){var m=r[3];for(var l=0,j=m.length;l<j;l++){if(m[l]===s){return !1;}}return !0;}A.error(o);},CHILD:function(t,s){var r=s[1],q=t;switch(r){case"only":case"first":while(q=q.previousSibling){if(q.nodeType===1){return !1;}}if(r==="first"){return !0;}q=t;case"last":while(q=q.nextSibling){if(q.nodeType===1){return !1;}}return !0;case"nth":var p=s[2],o=s[3];if(p===1&&o===0){return !0;}var n=s[0],m=t.parentNode;if(m&&(m.sizcache!==n||!t.nodeIndex)){var l=0;for(q=m.firstChild;q;q=q.nextSibling){q.nodeType===1&&(q.nodeIndex=++l);}m.sizcache=n;}var k=t.nodeIndex-o;return p===0?k===0:k%p===0&&k/p>=0;}},ID:function(f,e){return f.nodeType===1&&f.getAttribute("id")===e;},TAG:function(f,e){return e==="*"&&f.nodeType===1||f.nodeName.toLowerCase()===e;},CLASS:function(f,e){return(" "+(f.className||f.getAttribute("class"))+" ").indexOf(e)>-1;},ATTR:function(j,h){var o=h[1],n=z.attrHandle[o]?z.attrHandle[o](j):j[o]!=null?j[o]:j.getAttribute(o),m=n+"",l=h[2],k=h[4];return n==null?l==="!=":l==="="?m===k:l==="*="?m.indexOf(k)>=0:l==="~="?(" "+m+" ").indexOf(k)>=0:k?l==="!="?m!==k:l==="^="?m.indexOf(k)===0:l==="$="?m.substr(m.length-k.length)===k:l==="|="?m===k||m.substr(0,k.length+1)===k+"-":!1:m&&n!==!1;},POS:function(h,g,m,l){var k=g[2],j=z.setFilters[k];if(j){return j(h,m,g,l);}}}},y=z.match.POS,x=function(f,e){return"\\"+(e-0+1);};for(var w in z.match){z.match[w]=new RegExp(z.match[w].source+/(?![^\[]*\])(?![^\(]*\))/.source),z.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+z.match[w].source.replace(/\\(\d+)/g,x));}var v=function(f,e){f=Array.prototype.slice.call(f,0);if(e){e.push.apply(e,f);return e;}return f;};try{Array.prototype.slice.call(aE.documentElement.childNodes,0)[0].nodeType;}catch(u){v=function(g,f){var k=0,j=f||[];if(D.call(g)==="[object Array]"){Array.prototype.push.apply(j,g);}else{if(typeof g.length==="number"){for(var h=g.length;k<h;k++){j.push(g[k]);}}else{for(;g[k];k++){j.push(g[k]);}}}return j;};}var d,c;aE.documentElement.compareDocumentPosition?d=function(f,e){if(f===e){C=!0;return 0;}if(!f.compareDocumentPosition||!e.compareDocumentPosition){return f.compareDocumentPosition?-1:1;}return f.compareDocumentPosition(e)&4?-1:1;}:(d=function(t,s){var r,q,p=[],o=[],n=t.parentNode,m=s.parentNode,l=n;if(t===s){C=!0;return 0;}if(n===m){return c(t,s);}if(!n){return -1;}if(!m){return 1;}while(l){p.unshift(l),l=l.parentNode;}l=m;while(l){o.unshift(l),l=l.parentNode;}r=p.length,q=o.length;for(var g=0;g<r&&g<q;g++){if(p[g]!==o[g]){return c(p[g],o[g]);}}return g===r?c(t,o[g],-1):c(p[g],s,1);},c=function(f,e,h){if(f===e){return h;}var g=f.nextSibling;while(g){if(g===e){return -1;}g=g.nextSibling;}return 1;}),A.getText=function(f){var e="",h;for(var g=0;f[g];g++){h=f[g],h.nodeType===3||h.nodeType===4?e+=h.nodeValue:h.nodeType!==8&&(e+=A.getText(h.childNodes));}return e;},function(){var f=aE.createElement("div"),h="script"+(new Date).getTime(),g=aE.documentElement;f.innerHTML="<a name='"+h+"'/>",g.insertBefore(f,g.firstChild),aE.getElementById(h)&&(z.find.ID=function(j,m,l){if(typeof m.getElementById!=="undefined"&&!l){var k=m.getElementById(j[1]);return k?k.id===j[1]||typeof k.getAttributeNode!=="undefined"&&k.getAttributeNode("id").nodeValue===j[1]?[k]:aG:[];}},z.filter.ID=function(j,e){var k=typeof j.getAttributeNode!=="undefined"&&j.getAttributeNode("id");return j.nodeType===1&&k&&k.nodeValue===e;}),g.removeChild(f),g=f=null;}(),function(){var e=aE.createElement("div");e.appendChild(aE.createComment("")),e.getElementsByTagName("*").length>0&&(z.find.TAG=function(g,f){var k=f.getElementsByTagName(g[1]);if(g[1]==="*"){var j=[];for(var h=0;k[h];h++){k[h].nodeType===1&&j.push(k[h]);}k=j;}return k;}),e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"&&(z.attrHandle.href=function(f){return f.getAttribute("href",2);}),e=null;}(),aE.querySelectorAll&&function(){var g=A,f=aE.createElement("div"),j="__sizzle__";f.innerHTML="<p class='TEST'></p>";if(!f.querySelectorAll||f.querySelectorAll(".TEST").length!==0){A=function(P,O,N,M){O=O||aE;if(!M&&!A.isXML(O)){var L=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(P);if(L&&(O.nodeType===1||O.nodeType===9)){if(L[1]){return v(O.getElementsByTagName(P),N);}if(L[2]&&z.find.CLASS&&O.getElementsByClassName){return v(O.getElementsByClassName(L[2]),N);}}if(O.nodeType===9){if(P==="body"&&O.body){return v([O.body],N);}if(L&&L[3]){var K=O.getElementById(L[3]);if(!K||!K.parentNode){return v([],N);}if(K.id===L[3]){return v([K],N);}}try{return v(O.querySelectorAll(P),N);}catch(J){}}else{if(O.nodeType===1&&O.nodeName.toLowerCase()!=="object"){var I=O.getAttribute("id"),t=I||j,s=O.parentNode,n=/^\s*[+~]/.test(P);I?t=t.replace(/'/g,"\\$&"):O.setAttribute("id",t),n&&s&&(O=O.parentNode);try{if(!n||s){return v(O.querySelectorAll("[id='"+t+"'] "+P),N);}}catch(a){}finally{I||O.removeAttribute("id");}}}}return g(P,O,N,M);};for(var h in g){A[h]=g[h];}f=null;}}(),function(){var g=aE.documentElement,f=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,j=!1;try{f.call(aE.documentElement,"[test!='']:sizzle");}catch(h){j=!0;}f&&(A.matchesSelector=function(k,m){m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!A.isXML(k)){try{if(j||!z.match.PSEUDO.test(m)&&!/!=/.test(m)){return f.call(k,m);}}catch(l){}}return A(m,null,null,[k]).length>0;});}(),function(){var e=aE.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(e.getElementsByClassName&&e.getElementsByClassName("e").length!==0){e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return;}z.order.splice(1,0,"CLASS"),z.find.CLASS=function(g,f,h){if(typeof f.getElementsByClassName!=="undefined"&&!h){return f.getElementsByClassName(g[1]);}},e=null;}}(),aE.documentElement.contains?A.contains=function(f,e){return f!==e&&(f.contains?f.contains(e):!0);}:aE.documentElement.compareDocumentPosition?A.contains=function(f,e){return !!(f.compareDocumentPosition(e)&16);}:A.contains=function(){return !1;},A.isXML=function(f){var e=(f?f.ownerDocument||f:0).documentElement;return e?e.nodeName!=="HTML":!1;};var G=function(k,j){var q,p=[],o="",n=j.nodeType?[j]:j;while(q=z.match.PSEUDO.exec(k)){o+=q[0],k=k.replace(z.match.PSEUDO,"");}k=z.relative[k]?k+"*":k;for(var m=0,l=n.length;m<l;m++){A(k,n[m],p);}return A.filter(o,p);};aC.find=A,aC.expr=A.selectors,aC.expr[":"]=aC.expr.filters,aC.unique=A.uniqueSort,aC.text=A.getText,aC.isXMLDoc=A.isXML,aC.contains=A.contains;}();var cd=/Until$/,cb=/^(?:parents|prevUntil|prevAll)/,b9=/,/,b8=/^.[^:#\[\.,]*$/,b7=Array.prototype.slice,b6=aC.expr.match.POS,b5={children:!0,contents:!0,next:!0,prev:!0};aC.fn.extend({find:function(j){var d=this.pushStack("","find",j),o=0;for(var n=0,m=this.length;n<m;n++){o=d.length,aC.find(j,this[n],d);if(n>0){for(var l=o;l<d.length;l++){for(var k=0;k<o;k++){if(d[k]===d[l]){d.splice(l--,1);break;}}}}}return d;},has:function(d){var c=aC(d);return this.filter(function(){for(var b=0,e=c.length;b<e;b++){if(aC.contains(this,c[b])){return !0;}}});},not:function(b){return this.pushStack(b3(this,b,!1),"not",b);},filter:function(b){return this.pushStack(b3(this,b,!0),"filter",b);},is:function(b){return !!b&&aC.filter(b,this).length>0;},closest:function(v,u){var t=[],s,r,q=this[0];if(aC.isArray(v)){var p,o,n={},m=1;if(q&&v.length){for(s=0,r=v.length;s<r;s++){o=v[s],n[o]||(n[o]=aC.expr.match.POS.test(o)?aC(o,u||this.context):o);}while(q&&q.ownerDocument&&q!==u){for(o in n){p=n[o],(p.jquery?p.index(q)>-1:aC(q).is(p))&&t.push({selector:o,elem:q,level:m});}q=q.parentNode,m++;}}return t;}var d=b6.test(v)?aC(v,u||this.context):null;for(s=0,r=this.length;s<r;s++){q=this[s];while(q){if(d?d.index(q)>-1:aC.find.matchesSelector(q,v)){t.push(q);break;}q=q.parentNode;if(!q||!q.ownerDocument||q===u){break;}}}t=t.length>1?aC.unique(t):t;return this.pushStack(t,"closest",v);},index:function(b){if(!b||typeof b==="string"){return aC.inArray(this[0],b?aC(b):this.parent().children());}return aC.inArray(b.jquery?b[0]:b,this);},add:function(f,d){var h=typeof f==="string"?aC(f,d):aC.makeArray(f),g=aC.merge(this.get(),h);return this.pushStack(b4(h[0])||b4(g[0])?g:aC.unique(g));},andSelf:function(){return this.add(this.prevObject);}}),aC.each({parent:function(d){var c=d.parentNode;return c&&c.nodeType!==11?c:null;},parents:function(b){return aC.dir(b,"parentNode");},parentsUntil:function(e,d,f){return aC.dir(e,"parentNode",f);},next:function(b){return aC.nth(b,2,"nextSibling");},prev:function(b){return aC.nth(b,2,"previousSibling");},nextAll:function(b){return aC.dir(b,"nextSibling");},prevAll:function(b){return aC.dir(b,"previousSibling");},nextUntil:function(e,d,f){return aC.dir(e,"nextSibling",f);},prevUntil:function(e,d,f){return aC.dir(e,"previousSibling",f);},siblings:function(b){return aC.sibling(b.parentNode.firstChild,b);},children:function(b){return aC.sibling(b.firstChild);},contents:function(b){return aC.nodeName(b,"iframe")?b.contentDocument||b.contentWindow.document:aC.makeArray(b.childNodes);}},function(d,c){aC.fn[d]=function(j,h){var b=aC.map(this,c,j),a=b7.call(arguments);cd.test(d)||(h=j),h&&typeof h==="string"&&(b=aC.filter(h,b)),b=this.length>1&&!b5[d]?aC.unique(b):b,(this.length>1||b9.test(h))&&cb.test(d)&&(b=b.reverse());return this.pushStack(b,d,a.join(","));};}),aC.extend({filter:function(e,d,f){f&&(e=":not("+e+")");return d.length===1?aC.find.matchesSelector(d[0],e)?[d[0]]:[]:aC.find.matches(e,d);},dir:function(b,k,j){var h=[],d=b[k];while(d&&d.nodeType!==9&&(j===aG||d.nodeType!==1||!aC(d).is(j))){d.nodeType===1&&h.push(d),d=d[k];}return h;},nth:function(g,f,k,j){f=f||1;var h=0;for(;g;g=g[k]){if(g.nodeType===1&&++h===f){break;}}return g;},sibling:function(e,d){var f=[];for(;e;e=e.nextSibling){e.nodeType===1&&e!==d&&f.push(e);}return f;}});var b1=/ jQuery\d+="(?:\d+|null)"/g,a9=/^\s+/,a7=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,a5=/<([\w:]+)/,a3=/<tbody/i,a1=/<|&#?\w+;/,aZ=/<(?:script|object|embed|option|style)/i,aX=/checked\s*(?:[^=]|=\s*.checked.)/i,aV={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};aV.optgroup=aV.option,aV.tbody=aV.tfoot=aV.colgroup=aV.caption=aV.thead,aV.th=aV.td,aC.support.htmlSerialize||(aV._default=[1,"div<div>","</div>"]),aC.fn.extend({text:function(b){if(aC.isFunction(b)){return this.each(function(a){var d=aC(this);d.text(b.call(this,a,d.text()));});}if(typeof b!=="object"&&b!==aG){return this.empty().append((this[0]&&this[0].ownerDocument||aE).createTextNode(b));}return aC.text(this);},wrapAll:function(d){if(aC.isFunction(d)){return this.each(function(a){aC(this).wrapAll(d.call(this,a));});}if(this[0]){var c=aC(d,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&c.insertBefore(this[0]),c.map(function(){var b=this;while(b.firstChild&&b.firstChild.nodeType===1){b=b.firstChild;}return b;}).append(this);}return this;},wrapInner:function(b){if(aC.isFunction(b)){return this.each(function(a){aC(this).wrapInner(b.call(this,a));});}return this.each(function(){var a=aC(this),d=a.contents();d.length?d.wrapAll(b):a.append(b);});},wrap:function(b){return this.each(function(){aC(this).wrapAll(b);});},unwrap:function(){return this.parent().each(function(){aC.nodeName(this,"body")||aC(this).replaceWith(this.childNodes);}).end();},append:function(){return this.domManip(arguments,!0,function(b){this.nodeType===1&&this.appendChild(b);});},prepend:function(){return this.domManip(arguments,!0,function(b){this.nodeType===1&&this.insertBefore(b,this.firstChild);});},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(c){this.parentNode.insertBefore(c,this);});}if(arguments.length){var b=aC(arguments[0]);b.push.apply(b,this.toArray());return this.pushStack(b,"before",arguments);}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,!1,function(c){this.parentNode.insertBefore(c,this.nextSibling);});}if(arguments.length){var b=this.pushStack(this,"after",arguments);b.push.apply(b,aC(arguments[0]).toArray());return b;}},remove:function(f,d){for(var h=0,g;(g=this[h])!=null;h++){if(!f||aC.filter(f,[g]).length){!d&&g.nodeType===1&&(aC.cleanData(g.getElementsByTagName("*")),aC.cleanData([g])),g.parentNode&&g.parentNode.removeChild(g);}}return this;},empty:function(){for(var d=0,c;(c=this[d])!=null;d++){c.nodeType===1&&aC.cleanData(c.getElementsByTagName("*"));while(c.firstChild){c.removeChild(c.firstChild);}}return this;},clone:function(d,c){d=d==null?!0:d,c=c==null?d:c;return this.map(function(){return aC.clone(this,d,c);});},html:function(b){if(b===aG){return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(b1,""):null;}if(typeof b!=="string"||aZ.test(b)||!aC.support.leadingWhitespace&&a9.test(b)||aV[(a5.exec(b)||["",""])[1].toLowerCase()]){aC.isFunction(b)?this.each(function(a){var e=aC(this);e.html(b.call(this,a,e.html()));}):this.empty().append(b);}else{b=b.replace(a7,"<$1></$2>");try{for(var h=0,g=this.length;h<g;h++){this[h].nodeType===1&&(aC.cleanData(this[h].getElementsByTagName("*")),this[h].innerHTML=b);}}catch(d){this.empty().append(b);}}return this;},replaceWith:function(b){if(this[0]&&this[0].parentNode){if(aC.isFunction(b)){return this.each(function(a){var f=aC(this),d=f.html();f.replaceWith(b.call(this,a,d));});}typeof b!=="string"&&(b=aC(b).detach());return this.each(function(){var a=this.nextSibling,d=this.parentNode;aC(this).remove(),a?aC(a).before(b):aC(d).append(b);});}return this.pushStack(aC(aC.isFunction(b)?b():b),"replaceWith",b);},detach:function(b){return this.remove(b,!0);},domManip:function(x,w,v){var u,t,s,r,q=x[0],p=[];if(!aC.support.checkClone&&arguments.length===3&&typeof q==="string"&&aX.test(q)){return this.each(function(){aC(this).domManip(x,w,v,!0);});}if(aC.isFunction(q)){return this.each(function(c){var a=aC(this);x[0]=q.call(this,c,w?a.html():aG),a.domManip(x,w,v);});}if(this[0]){r=q&&q.parentNode,aC.support.parentNode&&r&&r.nodeType===11&&r.childNodes.length===this.length?u={fragment:r}:u=aC.buildFragment(x,this,p),s=u.fragment,s.childNodes.length===1?t=s=s.firstChild:t=s.firstChild;if(t){w=w&&aC.nodeName(t,"tr");for(var o=0,d=this.length,b=d-1;o<d;o++){v.call(w?aT(this[o],t):this[o],u.cacheable||d>1&&o<b?aC.clone(s,!0,!0):s);}}p.length&&aC.each(p,aL);}return this;}}),aC.buildFragment=function(d,c,n){var m,l,k,j=c&&c[0]?c[0].ownerDocument||c[0]:aE;d.length===1&&typeof d[0]==="string"&&d[0].length<512&&j===aE&&d[0].charAt(0)==="<"&&!aZ.test(d[0])&&(aC.support.checkClone||!aX.test(d[0]))&&(l=!0,k=aC.fragments[d[0]],k&&(k!==1&&(m=k))),m||(m=j.createDocumentFragment(),aC.clean(d,j,m,n)),l&&(aC.fragments[d[0]]=k?m:1);return{fragment:m,cacheable:l};},aC.fragments={},aC.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,c){aC.fn[d]=function(o){var n=[],m=aC(o),l=this.length===1&&this[0].parentNode;if(l&&l.nodeType===11&&l.childNodes.length===1&&m.length===1){m[c](this[0]);return this;}for(var k=0,b=m.length;k<b;k++){var a=(k>0?this.clone(!0):this).get();aC(m[k])[c](a),n=n.concat(a);}return this.pushStack(n,d,m.selector);};}),aC.extend({clone:function(j,d,o){var n=j.cloneNode(!0),m,l,k;if(!aC.support.noCloneEvent&&(j.nodeType===1||j.nodeType===11)&&!aC.isXMLDoc(j)){m=j.getElementsByTagName("*"),l=n.getElementsByTagName("*");for(k=0;m[k];++k){cI(m[k],l[k]);}cI(j,n);}if(d){aR(j,n);if(o&&"getElementsByTagName" in j){m=j.getElementsByTagName("*"),l=n.getElementsByTagName("*");if(m.length){for(k=0;m[k];++k){aR(m[k],l[k]);}}}}return n;},clean:function(B,A,z,y){A=A||aE,typeof A.createElement==="undefined"&&(A=A.ownerDocument||A[0]&&A[0].ownerDocument||aE);var x=[];for(var w=0,v;(v=B[w])!=null;w++){typeof v==="number"&&(v+="");if(!v){continue;}if(typeof v!=="string"||a1.test(v)){if(typeof v==="string"){v=v.replace(a7,"<$1></$2>");var u=(a5.exec(v)||["",""])[1].toLowerCase(),t=aV[u]||aV._default,s=t[0],r=A.createElement("div");r.innerHTML=t[1]+v+t[2];while(s--){r=r.lastChild;}if(!aC.support.tbody){var q=a3.test(v),d=u==="table"&&!q?r.firstChild&&r.firstChild.childNodes:t[1]==="<table>"&&!q?r.childNodes:[];for(var c=d.length-1;c>=0;--c){aC.nodeName(d[c],"tbody")&&!d[c].childNodes.length&&d[c].parentNode.removeChild(d[c]);}}!aC.support.leadingWhitespace&&a9.test(v)&&r.insertBefore(A.createTextNode(a9.exec(v)[0]),r.firstChild),v=r.childNodes;}}else{v=A.createTextNode(v);}v.nodeType?x.push(v):x=aC.merge(x,v);}if(z){for(w=0;x[w];w++){!y||!aC.nodeName(x[w],"script")||x[w].type&&x[w].type.toLowerCase()!=="text/javascript"?(x[w].nodeType===1&&x.splice.apply(x,[w+1,0].concat(aC.makeArray(x[w].getElementsByTagName("script")))),z.appendChild(x[w])):y.push(x[w].parentNode?x[w].parentNode.removeChild(x[w]):x[w]);}}return x;},cleanData:function(t){var s,r,q=aC.cache,p=aC.expando,o=aC.event.special,n=aC.support.deleteExpando;for(var m=0,l;(l=t[m])!=null;m++){if(l.nodeName&&aC.noData[l.nodeName.toLowerCase()]){continue;}r=l[aC.expando];if(r){s=q[r]&&q[r][p];if(s&&s.events){for(var d in s.events){o[d]?aC.event.remove(l,d):aC.removeEvent(l,d,s.handle);}s.handle&&(s.handle.elem=null);}n?delete l[aC.expando]:l.removeAttribute&&l.removeAttribute(aC.expando),delete q[r];}}}});var b2=/alpha\([^)]*\)/i,b0=/opacity=([^)]*)/,a8=/-([a-z])/ig,a6=/([A-Z])/g,a4=/^-?\d+(?:px)?$/i,a2=/^-?\d/,a0={position:"absolute",visibility:"hidden",display:"block"},aY=["Left","Right"],aW=["Top","Bottom"],aU,aS,aQ,aP=function(d,c){return c.toUpperCase();};aC.fn.css=function(b,d){if(arguments.length===2&&d===aG){return this;}return aC.access(this,b,d,!0,function(f,h,g){return g!==aG?aC.style(f,h,g):aC.css(f,h);});},aC.extend({cssHooks:{opacity:{get:function(e,d){if(d){var f=aU(e,"opacity","opacity");return f===""?"1":f;}return e.style.opacity;}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":aC.support.cssFloat?"cssFloat":"styleFloat"},style:function(r,q,p,o){if(r&&r.nodeType!==3&&r.nodeType!==8&&r.style){var n,m=aC.camelCase(q),l=r.style,d=aC.cssHooks[m];q=aC.cssProps[m]||m;if(p===aG){if(d&&"get" in d&&(n=d.get(r,!1,o))!==aG){return n;}return l[q];}if(typeof p==="number"&&isNaN(p)||p==null){return;}typeof p==="number"&&!aC.cssNumber[m]&&(p+="px");if(!d||!("set" in d)||(p=d.set(r,p))!==aG){try{l[q]=p;}catch(b){}}}},css:function(b,m,l){var k,j=aC.camelCase(m),d=aC.cssHooks[j];m=aC.cssProps[j]||j;if(d&&"get" in d&&(k=d.get(b,!0,l))!==aG){return k;}if(aU){return aU(b,m,j);}},swap:function(g,f,k){var j={};for(var h in f){j[h]=g.style[h],g.style[h]=f[h];}k.call(g);for(h in f){g.style[h]=j[h];}},camelCase:function(b){return b.replace(a8,aP);}}),aC.curCSS=aC.css,aC.each(["height","width"],function(d,c){aC.cssHooks[c]={get:function(b,j,h){var g;if(j){b.offsetWidth!==0?g=aO(b,c,h):aC.swap(b,a0,function(){g=aO(b,c,h);});if(g<=0){g=aU(b,c,c),g==="0px"&&aQ&&(g=aQ(b,c,c));if(g!=null){return g===""||g==="auto"?"0px":g;}}if(g<0||g==null){g=b.style[c];return g===""||g==="auto"?"0px":g;}return typeof g==="string"?g:g+"px";}},set:function(f,e){if(!a4.test(e)){return e;}e=parseFloat(e);if(e>=0){return e+"px";}}};}),aC.support.opacity||(aC.cssHooks.opacity={get:function(d,c){return b0.test((c&&d.currentStyle?d.currentStyle.filter:d.style.filter)||"")?parseFloat(RegExp.$1)/100+"":c?"1":"";},set:function(g,d){var k=g.style;k.zoom=1;var j=aC.isNaN(d)?"":"alpha(opacity="+d*100+")",h=k.filter||"";k.filter=b2.test(h)?h.replace(b2,j):k.filter+" "+j;}}),aE.defaultView&&aE.defaultView.getComputedStyle&&(aS=function(b,m,l){var k,j,d;l=l.replace(a6,"-$1").toLowerCase();if(!(j=b.ownerDocument.defaultView)){return aG;}if(d=j.getComputedStyle(b,null)){k=d.getPropertyValue(l),k===""&&!aC.contains(b.ownerDocument.documentElement,b)&&(k=aC.style(b,l));}return k;}),aE.documentElement.currentStyle&&(aQ=function(h,g){var m,l=h.currentStyle&&h.currentStyle[g],k=h.runtimeStyle&&h.runtimeStyle[g],j=h.style;!a4.test(l)&&a2.test(l)&&(m=j.left,k&&(h.runtimeStyle.left=h.currentStyle.left),j.left=g==="fontSize"?"1em":l||0,l=j.pixelLeft+"px",j.left=m,k&&(h.runtimeStyle.left=k));return l===""?"auto":l;}),aU=aS||aQ,aC.expr&&aC.expr.filters&&(aC.expr.filters.hidden=function(e){var d=e.offsetWidth,f=e.offsetHeight;return d===0&&f===0||!aC.support.reliableHiddenOffsets&&(e.style.display||aC.css(e,"display"))==="none";},aC.expr.filters.visible=function(b){return !aC.expr.filters.hidden(b);});var aN=/%20/g,aM=/\[\]$/,aK=/\r?\n/g,aJ=/#.*$/,aH=/^(.*?):\s*(.*?)\r?$/mg,aF=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aD=/^(?:GET|HEAD)$/,aB=/^\/\//,az=/\?/,ax=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,av=/^(?:select|textarea)/i,at=/\s+/,cH=/([?&])_=[^&]*/,cG=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,cF=aC.fn.load,cE={},cD={};aC.fn.extend({load:function(j,d,o){if(typeof j!=="string"&&cF){return cF.apply(this,arguments);}if(!this.length){return this;}var n=j.indexOf(" ");if(n>=0){var m=j.slice(n,j.length);j=j.slice(0,n);}var l="GET";d&&(aC.isFunction(d)?(o=d,d=null):typeof d==="object"&&(d=aC.param(d,aC.ajaxSettings.traditional),l="POST"));var k=this;aC.ajax({url:j,type:l,dataType:"html",data:d,complete:function(f,c,g){g=f.responseText,f.isResolved()&&(f.done(function(b){g=b;}),k.html(m?aC("<div>").append(g.replace(ax,"")).find(m):g)),o&&k.each(o,[g,c,f]);}});return this;},serialize:function(){return aC.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return this.elements?aC.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||av.test(this.nodeName)||aF.test(this.type));}).map(function(e,d){var f=aC(this).val();return f==null?null:aC.isArray(f)?aC.map(f,function(b,g){return{name:d.name,value:b.replace(aK,"\r\n")};}):{name:d.name,value:f.replace(aK,"\r\n")};}).get();}}),aC.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(d,c){aC.fn[c]=function(b){return this.bind(c,b);};}),aC.each(["get","post"],function(d,c){aC[c]=function(b,j,h,g){aC.isFunction(j)&&(g=g||h,h=j,j=null);return aC.ajax({type:c,url:b,data:j,success:h,dataType:g});};}),aC.extend({getScript:function(d,c){return aC.get(d,null,c,"script");},getJSON:function(e,d,f){return aC.get(e,d,f,"json");},ajaxSetup:function(b){aC.extend(!0,aC.ajaxSettings,b),b.context&&(aC.ajaxSettings.context=b.context);},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":aI.String,"text html":!0,"text json":aC.parseJSON,"text xml":aC.parseXML}},ajaxPrefilter:cC(cE),ajaxTransport:cC(cD),ajax:function(T,S){function A(p,m,k,j){if(D!==2){D=2,H&&clearTimeout(H),I=aG,K=j||"",B.readyState=p?4:0;var h,g,f,y=k?cz(R,B,k):aG,v,t;if(p>=200&&p<300||p===304){if(R.ifModified){if(v=B.getResponseHeader("Last-Modified")){aC.lastModified[R.url]=v;}if(t=B.getResponseHeader("Etag")){aC.etag[R.url]=t;}}if(p===304){m="notmodified",h=!0;}else{try{g=cy(R,y),m="success",h=!0;}catch(o){m="parsererror",f=o;}}}else{f=m,p&&(m="error",p<0&&(p=0));}B.status=p,B.statusText=m,h?O.resolveWith(Q,[g,m,B]):O.rejectWith(Q,[B,m,f]),B.statusCode(M),M=aG,R.global&&P.trigger("ajax"+(h?"Success":"Error"),[B,R,h?g:f]),N.resolveWith(Q,[B,m]),R.global&&(P.trigger("ajaxComplete",[B,R]),--aC.active||aC.event.trigger("ajaxStop"));}}typeof S!=="object"&&(S=T,T=aG),S=S||{};var R=aC.extend(!0,{},aC.ajaxSettings,S),Q=(R.context=("context" in S?S:aC.ajaxSettings).context)||R,P=Q===R?aC.event:aC(Q),O=aC.Deferred(),N=aC._Deferred(),M=R.statusCode||{},L={},K,J,I,H,G=aE.location,F=G.protocol||"http:",E,D=0,C,B={readyState:0,setRequestHeader:function(f,e){D===0&&(L[f.toLowerCase()]=e);return this;},getAllResponseHeaders:function(){return D===2?K:null;},getResponseHeader:function(f){var e;if(D===2){if(!J){J={};while(e=aH.exec(K)){J[e[1].toLowerCase()]=e[2];}}e=J[f.toLowerCase()];}return e||null;},abort:function(e){e=e||"abort",I&&I.abort(e),A(0,e);return this;}};O.promise(B),B.success=B.done,B.error=B.fail,B.complete=N.done,B.statusCode=function(f){if(f){var e;if(D<2){for(e in f){M[e]=[M[e],f[e]];}}else{e=f[B.status],B.then(e,e);}}return this;},R.url=(""+(T||R.url)).replace(aJ,"").replace(aB,F+"//"),R.dataTypes=aC.trim(R.dataType||"*").toLowerCase().split(at),R.crossDomain||(E=cG.exec(R.url.toLowerCase()),R.crossDomain=E&&(E[1]!=F||E[2]!=G.hostname||(E[3]||(E[1]==="http:"?80:443))!=(G.port||(F==="http:"?80:443)))),R.data&&R.processData&&typeof R.data!=="string"&&(R.data=aC.param(R.data,R.traditional)),cB(cE,R,S,B),R.type=R.type.toUpperCase(),R.hasContent=!aD.test(R.type),R.global&&aC.active++===0&&aC.event.trigger("ajaxStart");if(!R.hasContent){R.data&&(R.url+=(az.test(R.url)?"&":"?")+R.data);if(R.cache===!1){var d=aC.now(),c=R.url.replace(cH,"$1_="+d);R.url=c+(c===R.url?(az.test(R.url)?"&":"?")+"_="+d:"");}}if(R.data&&R.hasContent&&R.contentType!==!1||S.contentType){L["content-type"]=R.contentType;}R.ifModified&&(aC.lastModified[R.url]&&(L["if-modified-since"]=aC.lastModified[R.url]),aC.etag[R.url]&&(L["if-none-match"]=aC.etag[R.url])),L.accept=R.dataTypes[0]&&R.accepts[R.dataTypes[0]]?R.accepts[R.dataTypes[0]]+(R.dataTypes[0]!=="*"?", */*; q=0.01":""):R.accepts["*"];for(C in R.headers){L[C.toLowerCase()]=R.headers[C];}if(!R.beforeSend||R.beforeSend.call(Q,B,R)!==!1&&D!==2){for(C in {success:1,error:1,complete:1}){B[C](R[C]);}I=cB(cD,R,S,B);if(I){D=B.readyState=1,R.global&&P.trigger("ajaxSend",[B,R]),R.async&&R.timeout>0&&(H=setTimeout(function(){B.abort("timeout");},R.timeout));try{I.send(L,A);}catch(b){status<2?A(-1,b):aC.error(b);}}else{A(-1,"No Transport");}}else{A(0,"abort"),B=!1;}return B;},param:function(b,k){var j=[],h=function(e,c){c=aC.isFunction(c)?c():c,j[j.length]=encodeURIComponent(e)+"="+encodeURIComponent(c);};k===aG&&(k=aC.ajaxSettings.traditional);if(aC.isArray(b)||b.jquery){aC.each(b,function(){h(this.name,this.value);});}else{for(var d in b){cA(d,b[d],k,h);}}return j.join("&").replace(aN,"+");}}),aC.extend({active:0,lastModified:{},etag:{}});var cx=aC.now(),cw=/(\=)\?(&|$)|()\?\?()/i;aC.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return aC.expando+"_"+cx++;}}),aC.ajaxPrefilter("json jsonp",function(r,q,p){p=typeof r.data==="string";if(r.dataTypes[0]==="jsonp"||q.jsonpCallback||q.jsonp!=null||r.jsonp!==!1&&(cw.test(r.url)||p&&cw.test(r.data))){var o,n=r.jsonpCallback=aC.isFunction(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,m=aI[n],l=r.url,d=r.data,a="$1"+n+"$2";r.jsonp!==!1&&(l=l.replace(cw,a),r.url===l&&(p&&(d=d.replace(cw,a)),r.data===d&&(l+=(/\?/.test(l)?"&":"?")+r.jsonp+"="+n))),r.url=l,r.data=d,aI[n]=function(b){o=[b];},r.complete=[function(){aI[n]=m;if(m){o&&aC.isFunction(m)&&aI[n](o[0]);}else{try{delete aI[n];}catch(c){}}},r.complete],r.converters["script json"]=function(){o||aC.error(n+" was not called");return o[0];},r.dataTypes[0]="json";return"script";}}),aC.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(b){aC.globalEval(b);return b;}}}),aC.ajaxPrefilter("script",function(b){b.cache===aG&&(b.cache=!1),b.crossDomain&&(b.type="GET",b.global=!1);}),aC.ajaxTransport("script",function(b){if(b.crossDomain){var f,c=aE.getElementsByTagName("head")[0]||aE.documentElement;return{send:function(d,a){f=aE.createElement("script"),f.async="async",b.scriptCharset&&(f.charset=b.scriptCharset),f.src=b.url,f.onload=f.onreadystatechange=function(e,g){if(!f.readyState||/loaded|complete/.test(f.readyState)){f.onload=f.onreadystatechange=null,c&&f.parentNode&&c.removeChild(f),f=aG,g||a(200,"success");}},c.insertBefore(f,c.firstChild);},abort:function(){f&&f.onload(0,1);}};}});var cv=aC.now(),cu={},ct,cs;aC.ajaxSettings.xhr=aI.ActiveXObject?function(){if(aI.location.protocol!=="file:"){try{return new aI.XMLHttpRequest;}catch(a){}}try{return new aI.ActiveXObject("Microsoft.XMLHTTP");}catch(d){}}:function(){return new aI.XMLHttpRequest;};try{cs=aC.ajaxSettings.xhr();}catch(cr){}aC.support.ajax=!!cs,aC.support.cors=cs&&"withCredentials" in cs,cs=aG,aC.support.ajax&&aC.ajaxTransport(function(a){if(!a.crossDomain||aC.support.cors){var d;return{send:function(l,k){ct||(ct=1,aC(aI).bind("unload",function(){aC.each(cu,function(f,e){e.onreadystatechange&&e.onreadystatechange(1);});}));var j=a.xhr(),c;a.username?j.open(a.type,a.url,a.async,a.username,a.password):j.open(a.type,a.url,a.async),(!a.crossDomain||a.hasContent)&&!l["x-requested-with"]&&(l["x-requested-with"]="XMLHttpRequest");try{aC.each(l,function(f,e){j.setRequestHeader(f,e);});}catch(b){}j.send(a.hasContent&&a.data||null),d=function(h,r){if(d&&(r||j.readyState===4)){d=0,c&&(j.onreadystatechange=aC.noop,delete cu[c]);if(r){j.readyState!==4&&j.abort();}else{var q=j.status,p,o=j.getAllResponseHeaders(),g={},f=j.responseXML;f&&f.documentElement&&(g.xml=f),g.text=j.responseText;try{p=j.statusText;}catch(s){p="";}q=q===0?!a.crossDomain||p?o?304:0:302:q==1223?204:q,k(q,p,g,o);}}},a.async&&j.readyState!==4?(c=cv++,cu[c]=j,j.onreadystatechange=d):d();},abort:function(){d&&d(0,1);}};}});var cq={},co=/^(?:toggle|show|hide)$/,cm=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ck,ci=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];aC.fn.extend({show:function(j,d,o){var n,m;if(j||j===0){return this.animate(ch("show",3),j,d,o);}for(var l=0,k=this.length;l<k;l++){n=this[l],m=n.style.display,!aC._data(n,"olddisplay")&&m==="none"&&(m=n.style.display=""),m===""&&aC.css(n,"display")==="none"&&aC._data(n,"olddisplay",cf(n.nodeName));}for(l=0;l<k;l++){n=this[l],m=n.style.display;if(m===""||m==="none"){n.style.display=aC._data(n,"olddisplay")||"";}}return this;},hide:function(h,d,m){if(h||h===0){return this.animate(ch("hide",3),h,d,m);}for(var l=0,k=this.length;l<k;l++){var j=aC.css(this[l],"display");j!=="none"&&!aC._data(this[l],"olddisplay")&&aC._data(this[l],"olddisplay",j);}for(l=0;l<k;l++){this[l].style.display="none";}return this;},_toggle:aC.fn.toggle,toggle:function(f,d,h){var g=typeof f==="boolean";aC.isFunction(f)&&aC.isFunction(d)?this._toggle.apply(this,arguments):f==null||g?this.each(function(){var a=g?f:aC(this).is(":hidden");aC(this)[a?"show":"hide"]();}):this.animate(ch("toggle",3),f,d,h);return this;},fadeTo:function(f,e,h,g){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:e},f,h,g);},animate:function(g,d,k,j){var h=aC.speed(d,k,j);if(aC.isEmptyObject(g)){return this.each(h.complete);}return this[h.queue===!1?"each":"queue"](function(){var a=aC.extend({},h),p,o=this.nodeType===1,n=o&&aC(this).is(":hidden"),m=this;for(p in g){var l=aC.camelCase(p);p!==l&&(g[l]=g[p],delete g[p],p=l);if(g[p]==="hide"&&n||g[p]==="show"&&!n){return a.complete.call(this);}if(o&&(p==="height"||p==="width")){a.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(aC.css(this,"display")==="inline"&&aC.css(this,"float")==="none"){if(aC.support.inlineBlockNeedsLayout){var f=cf(this.nodeName);f==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1);}else{this.style.display="inline-block";}}}aC.isArray(g[p])&&((a.specialEasing=a.specialEasing||{})[p]=g[p][1],g[p]=g[p][0]);}a.overflow!=null&&(this.style.overflow="hidden"),a.curAnim=aC.extend({},g),aC.each(g,function(v,u){var t=new aC.fx(m,a,v);if(co.test(u)){t[u==="toggle"?n?"show":"hide":u](g);}else{var s=cm.exec(u),r=t.cur()||0;if(s){var q=parseFloat(s[2]),b=s[3]||"px";b!=="px"&&(aC.style(m,v,(q||1)+b),r=(q||1)/t.cur()*r,aC.style(m,v,r+b)),s[1]&&(q=(s[1]==="-="?-1:1)*q+r),t.custom(r,q,b);}else{t.custom(r,u,"");}}});return !0;});},stop:function(e,d){var f=aC.timers;e&&this.queue([]),this.each(function(){for(var b=f.length-1;b>=0;b--){f[b].elem===this&&(d&&f[b](!0),f.splice(b,1));}}),d||this.dequeue();return this;}}),aC.each({slideDown:ch("show",1),slideUp:ch("hide",1),slideToggle:ch("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(d,c){aC.fn[d]=function(b,f,e){return this.animate(c,b,f,e);};}),aC.extend({speed:function(f,d,h){var g=f&&typeof f==="object"?aC.extend({},f):{complete:h||!h&&d||aC.isFunction(f)&&f,duration:f,easing:h&&d||d&&!aC.isFunction(d)&&d};g.duration=aC.fx.off?0:typeof g.duration==="number"?g.duration:g.duration in aC.fx.speeds?aC.fx.speeds[g.duration]:aC.fx.speeds._default,g.old=g.complete,g.complete=function(){g.queue!==!1&&aC(this).dequeue(),aC.isFunction(g.old)&&g.old.call(this);};return g;},easing:{linear:function(f,e,h,g){return h+g*f;},swing:function(f,e,h,g){return(-Math.cos(f*Math.PI)/2+0.5)*g+h;}},timers:[],fx:function(e,d,f){this.options=d,this.elem=e,this.prop=f,d.orig||(d.orig={});}}),aC.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(aC.fx.step[this.prop]||aC.fx.step._default)(this);},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}var b=parseFloat(aC.css(this.elem,this.prop));return b||0;},custom:function(h,d,m){function j(b){return l.step(b);}var l=this,k=aC.fx;this.startTime=aC.now(),this.start=h,this.end=d,this.unit=m||this.unit||"px",this.now=this.start,this.pos=this.state=0,j.elem=this.elem,j()&&aC.timers.push(j)&&!ck&&(ck=setInterval(k.tick,k.interval));},show:function(){this.options.orig[this.prop]=aC.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),aC(this.elem).show();},hide:function(){this.options.orig[this.prop]=aC.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0);},step:function(t){var s=aC.now(),r=!0;if(t||s>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var q in this.options.curAnim){this.options.curAnim[q]!==!0&&(r=!1);}if(r){if(this.options.overflow!=null&&!aC.support.shrinkWrapBlocks){var p=this.elem,o=this.options;aC.each(["","X","Y"],function(e,c){p.style["overflow"+c]=o.overflow[e];});}this.options.hide&&aC(this.elem).hide();if(this.options.hide||this.options.show){for(var n in this.options.curAnim){aC.style(this.elem,n,this.options.orig[n]);}}this.options.complete.call(this.elem);}return !1;}var m=s-this.startTime;this.state=m/this.options.duration;var l=this.options.specialEasing&&this.options.specialEasing[this.prop],d=this.options.easing||(aC.easing.swing?"swing":"linear");this.pos=aC.easing[l||d](this.state,m,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return !0;}},aC.extend(aC.fx,{tick:function(){var d=aC.timers;for(var c=0;c<d.length;c++){d[c]()||d.splice(c--,1);}d.length||aC.fx.stop();},interval:13,stop:function(){clearInterval(ck),ck=null;},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(b){aC.style(b.elem,"opacity",b.now);},_default:function(b){b.elem.style&&b.elem.style[b.prop]!=null?b.elem.style[b.prop]=(b.prop==="width"||b.prop==="height"?Math.max(0,b.now):b.now)+b.unit:b.elem[b.prop]=b.now;}}}),aC.expr&&aC.expr.filters&&(aC.expr.filters.animated=function(b){return aC.grep(aC.timers,function(a){return b===a.elem;}).length;});var cc=/^t(?:able|d|h)$/i,ca=/^(?:body|html)$/i;"getBoundingClientRect" in aE.documentElement?aC.fn.offset=function(B){var A=this[0],z;if(B){return this.each(function(a){aC.offset.setOffset(this,B,a);});}if(!A||!A.ownerDocument){return null;}if(A===A.ownerDocument.body){return aC.offset.bodyOffset(A);}try{z=A.getBoundingClientRect();}catch(y){}var x=A.ownerDocument,w=x.documentElement;if(!z||!aC.contains(w,A)){return z?{top:z.top,left:z.left}:{top:0,left:0};}var v=x.body,u=cJ(x),t=w.clientTop||v.clientTop||0,s=w.clientLeft||v.clientLeft||0,r=u.pageYOffset||aC.support.boxModel&&w.scrollTop||v.scrollTop,q=u.pageXOffset||aC.support.boxModel&&w.scrollLeft||v.scrollLeft,p=z.top+r-t,d=z.left+q-s;return{top:p,left:d};}:aC.fn.offset=function(x){var w=this[0];if(x){return this.each(function(a){aC.offset.setOffset(this,x,a);});}if(!w||!w.ownerDocument){return null;}if(w===w.ownerDocument.body){return aC.offset.bodyOffset(w);}aC.offset.initialize();var v,u=w.offsetParent,t=w,s=w.ownerDocument,r=s.documentElement,q=s.body,p=s.defaultView,o=p?p.getComputedStyle(w,null):w.currentStyle,n=w.offsetTop,d=w.offsetLeft;while((w=w.parentNode)&&w!==q&&w!==r){if(aC.offset.supportsFixedPosition&&o.position==="fixed"){break;}v=p?p.getComputedStyle(w,null):w.currentStyle,n-=w.scrollTop,d-=w.scrollLeft,w===u&&(n+=w.offsetTop,d+=w.offsetLeft,aC.offset.doesNotAddBorder&&(!aC.offset.doesAddBorderForTableAndCells||!cc.test(w.nodeName))&&(n+=parseFloat(v.borderTopWidth)||0,d+=parseFloat(v.borderLeftWidth)||0),t=u,u=w.offsetParent),aC.offset.subtractsBorderForOverflowNotVisible&&v.overflow!=="visible"&&(n+=parseFloat(v.borderTopWidth)||0,d+=parseFloat(v.borderLeftWidth)||0),o=v;}if(o.position==="relative"||o.position==="static"){n+=q.offsetTop,d+=q.offsetLeft;}aC.offset.supportsFixedPosition&&o.position==="fixed"&&(n+=Math.max(r.scrollTop,q.scrollTop),d+=Math.max(r.scrollLeft,q.scrollLeft));return{top:n,left:d};},aC.offset={initialize:function(){var d=aE.body,c=aE.createElement("div"),p,o,n,m,l=parseFloat(aC.css(d,"marginTop"))||0,k="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";aC.extend(c.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),c.innerHTML=k,d.insertBefore(c,d.firstChild),p=c.firstChild,o=p.firstChild,m=p.nextSibling.firstChild.firstChild,this.doesNotAddBorder=o.offsetTop!==5,this.doesAddBorderForTableAndCells=m.offsetTop===5,o.style.position="fixed",o.style.top="20px",this.supportsFixedPosition=o.offsetTop===20||o.offsetTop===15,o.style.position=o.style.top="",p.style.overflow="hidden",p.style.position="relative",this.subtractsBorderForOverflowNotVisible=o.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=d.offsetTop!==l,d.removeChild(c),d=c=p=o=n=m=null,aC.offset.initialize=aC.noop;},bodyOffset:function(e){var d=e.offsetTop,f=e.offsetLeft;aC.offset.initialize(),aC.offset.doesNotIncludeMarginInBodyOffset&&(d+=parseFloat(aC.css(e,"marginTop"))||0,f+=parseFloat(aC.css(e,"marginLeft"))||0);return{top:d,left:f};},setOffset:function(z,y,x){var w=aC.css(z,"position");w==="static"&&(z.style.position="relative");var v=aC(z),u=v.offset(),t=aC.css(z,"top"),s=aC.css(z,"left"),r=w==="absolute"&&aC.inArray("auto",[t,s])>-1,q={},p={},o,d;r&&(p=v.position()),o=r?p.top:parseInt(t,10)||0,d=r?p.left:parseInt(s,10)||0,aC.isFunction(y)&&(y=y.call(z,x,u)),y.top!=null&&(q.top=y.top-u.top+o),y.left!=null&&(q.left=y.left-u.left+d),"using" in y?y.using.call(z,q):v.css(q);}},aC.fn.extend({position:function(){if(!this[0]){return null;}var f=this[0],d=this.offsetParent(),h=this.offset(),g=ca.test(d[0].nodeName)?{top:0,left:0}:d.offset();h.top-=parseFloat(aC.css(f,"marginTop"))||0,h.left-=parseFloat(aC.css(f,"marginLeft"))||0,g.top+=parseFloat(aC.css(d[0],"borderTopWidth"))||0,g.left+=parseFloat(aC.css(d[0],"borderLeftWidth"))||0;return{top:h.top-g.top,left:h.left-g.left};},offsetParent:function(){return this.map(function(){var b=this.offsetParent||aE.body;while(b&&(!ca.test(b.nodeName)&&aC.css(b,"position")==="static")){b=b.offsetParent;}return b;});}}),aC.each(["Left","Top"],function(b,f){var d="scroll"+f;aC.fn[d]=function(h){var e=this[0],a;if(!e){return null;}if(h!==aG){return this.each(function(){a=cJ(this),a?a.scrollTo(b?aC(a).scrollLeft():h,b?h:aC(a).scrollTop()):this[d]=h;});}a=cJ(e);return a?"pageXOffset" in a?a[b?"pageYOffset":"pageXOffset"]:aC.support.boxModel&&a.document.documentElement[d]||a.document.body[d]:e[d];};}),aC.each(["Height","Width"],function(b,f){var d=f.toLowerCase();aC.fn["inner"+f]=function(){return this[0]?parseFloat(aC.css(this[0],d,"padding")):null;},aC.fn["outer"+f]=function(c){return this[0]?parseFloat(aC.css(this[0],d,c?"margin":"border")):null;},aC.fn[d]=function(c){var l=this[0];if(!l){return c==null?null:this;}if(aC.isFunction(c)){return this.each(function(a){var g=aC(this);g[d](c.call(this,a,g[d]()));});}if(aC.isWindow(l)){var k=l.document.documentElement["client"+f];return l.document.compatMode==="CSS1Compat"&&k||l.document.body["client"+f]||k;}if(l.nodeType===9){return Math.max(l.documentElement["client"+f],l.body["scroll"+f],l.documentElement["scroll"+f],l.body["offset"+f],l.documentElement["offset"+f]);}if(c===aG){var j=aC.css(l,d),e=parseFloat(j);return aC.isNaN(e)?j:e;}return this.css(d,typeof c==="string"?c:c+"px");};});})(window);function mainmenu(){$(" #nav ul ").css({display:"none"});$(" #nav>li").hover(function(){$(this).find("ul:first").css({visibility:"visible",display:"none"}).fadeIn("fast");$(this).addClass("on");},function(){$(this).find("ul:first").css({visibility:"hidden"});$(this).removeClass("on");});}$(document).ready(function(){mainmenu();});(function(g){g.fn.adGallery=function(k){var m={loader_image:"loader.gif",start_at_index:0,description_wrapper:false,thumb_opacity:0.7,animate_first_image:false,animation_speed:400,width:false,height:false,display_next_and_prev:true,display_back_and_forward:true,scroll_jump:0,slideshow:{enable:true,autostart:false,speed:5000,start_label:"Start",stop_label:"Stop",stop_on_scroll:true,countdown_prefix:"(",countdown_sufix:")",onStart:false,onStop:false},effect:"slide-hori",enable_keyboard_move:true,cycle:true,callbacks:{init:false,afterImageVisible:false,beforeImageVisible:false}};var l=g.extend(false,m,k);if(k&&k.slideshow){l.slideshow=g.extend(false,m.slideshow,k.slideshow);}if(!l.slideshow.enable){l.slideshow.autostart=false;}var j=[];g(this).each(function(){var n=new c(this,l);j[j.length]=n;});return j;};function f(k,l,m){var n=parseInt(k.css("top"),10);if(l=="left"){var j="-"+this.image_wrapper_height+"px";k.css("top",this.image_wrapper_height+"px");}else{var j=this.image_wrapper_height+"px";k.css("top","-"+this.image_wrapper_height+"px");}if(m){m.css("bottom","-"+m[0].offsetHeight+"px");m.animate({bottom:0},this.settings.animation_speed*2);}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2);}return{old_image:{top:j},new_image:{top:n}};}function e(k,l,n){var m=parseInt(k.css("left"),10);if(l=="left"){var j="-"+this.image_wrapper_width+"px";k.css("left",this.image_wrapper_width+"px");}else{var j=this.image_wrapper_width+"px";k.css("left","-"+this.image_wrapper_width+"px");}if(n){n.css("bottom","-"+n[0].offsetHeight+"px");n.animate({bottom:0},this.settings.animation_speed*2);}if(this.current_description){this.current_description.animate({bottom:"-"+this.current_description[0].offsetHeight+"px"},this.settings.animation_speed*2);}return{old_image:{left:j},new_image:{left:m}};}function d(l,m,o){var k=l.width();var j=l.height();var n=parseInt(l.css("left"),10);var p=parseInt(l.css("top"),10);l.css({width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2});return{old_image:{width:0,height:0,top:this.image_wrapper_height/2,left:this.image_wrapper_width/2},new_image:{width:k,height:j,top:p,left:n}};}function b(j,k,l){j.css("opacity",0);return{old_image:{opacity:0},new_image:{opacity:1}};}function h(j,k,l){j.css("opacity",0);return{old_image:{opacity:0},new_image:{opacity:1},speed:0};}function c(k,j){this.init(k,j);}c.prototype={wrapper:false,image_wrapper:false,gallery_info:false,nav:false,loader:false,preloads:false,thumbs_wrapper:false,scroll_back:false,scroll_forward:false,next_link:false,prev_link:false,slideshow:false,image_wrapper_width:0,image_wrapper_height:0,current_index:0,current_image:false,current_description:false,nav_display_width:0,settings:false,images:false,in_transition:false,animations:false,init:function(n,m){var l=this;this.wrapper=g(n);this.settings=m;this.setupElements();this.setupAnimations();if(this.settings.width){this.image_wrapper_width=this.settings.width;this.image_wrapper.width(this.settings.width);this.wrapper.width(this.settings.width);}else{this.image_wrapper_width=this.image_wrapper.width();}if(this.settings.height){this.image_wrapper_height=this.settings.height;this.image_wrapper.height(this.settings.height);}else{this.image_wrapper_height=this.image_wrapper.height();}this.nav_display_width=this.nav.width();this.current_index=0;this.current_image=false;this.current_description=false;this.in_transition=false;this.findImages();if(this.settings.display_next_and_prev){this.initNextAndPrev();}var j=function(o){return l.nextImage(o);};this.slideshow=new a(j,this.settings.slideshow);this.controls.append(this.slideshow.create());if(this.settings.slideshow.enable){this.slideshow.enable();}else{this.slideshow.disable();}if(this.settings.display_back_and_forward){this.initBackAndForward();}if(this.settings.enable_keyboard_move){this.initKeyEvents();}var k=parseInt(this.settings.start_at_index,10);if(window.location.hash&&window.location.hash.indexOf("#ad-image")===0){k=window.location.hash.replace(/[^0-9]+/g,"");if((k*1)!=k){k=this.settings.start_at_index;}}this.loading(true);this.showImage(k,function(){if(l.settings.slideshow.autostart){l.preloadImage(k+1);l.slideshow.start();}});this.fireCallback(this.settings.callbacks.init);},setupAnimations:function(){this.animations={"slide-vert":f,"slide-hori":e,resize:d,fade:b,none:h};},setupElements:function(){this.controls=this.wrapper.find(".ad-controls");this.gallery_info=g('<p class="ad-info"></p>');this.controls.append(this.gallery_info);this.image_wrapper=this.wrapper.find(".ad-image-wrapper");this.image_wrapper.empty();this.nav=this.wrapper.find(".ad-nav");this.thumbs_wrapper=this.nav.find(".ad-thumbs");this.preloads=g('<div class="ad-preloads"></div>');this.loader=g('<img class="ad-loader" src="'+this.settings.loader_image+'">');this.image_wrapper.append(this.loader);this.loader.hide();g(document.body).append(this.preloads);},loading:function(j){if(j){this.loader.show();}else{this.loader.hide();}},addAnimation:function(j,k){if(g.isFunction(k)){this.animations[j]=k;}},findImages:function(){var o=this;this.images=[];var n=0;var m=0;var l=this.thumbs_wrapper.find("a");var k=l.length;if(this.settings.thumb_opacity<1){l.find("img").css("opacity",this.settings.thumb_opacity);}l.each(function(q){var s=g(this);var r=s.attr("href");var p=s.find("img");if(!o.isImageLoaded(p[0])){p.load(function(){n+=this.parentNode.parentNode.offsetWidth;m++;});}else{n+=p[0].parentNode.parentNode.offsetWidth;m++;}s.addClass("ad-thumb"+q);s.click(function(){o.showImage(q);o.slideshow.stop();return false;}).hover(function(){if(!g(this).is(".ad-active")&&o.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,1);}o.preloadImage(q);},function(){if(!g(this).is(".ad-active")&&o.settings.thumb_opacity<1){g(this).find("img").fadeTo(300,o.settings.thumb_opacity);}});var s=false;if(p.data("ad-link")){s=p.data("ad-link");}else{if(p.attr("longdesc")&&p.attr("longdesc").length){s=p.attr("longdesc");}}var u=false;if(p.data("ad-desc")){u=p.data("ad-desc");}else{if(p.attr("alt")&&p.attr("alt").length){u=p.attr("alt");}}var t=false;if(p.data("ad-title")){t=p.data("ad-title");}else{if(p.attr("title")&&p.attr("title").length){t=p.attr("title");}}o.images[q]={thumb:p.attr("src"),image:r,error:false,preloaded:false,desc:u,title:t,size:false,link:s};});var j=setInterval(function(){if(k==m){n-=100;var r=o.nav.find(".ad-thumb-list");r.css("width",n+"px");var q=1;var p=r.height();while(q<201){r.css("width",(n+q)+"px");if(p!=r.height()){break;}p=r.height();q++;}clearInterval(j);}},100);},initKeyEvents:function(){var j=this;g(document).keydown(function(k){if(k.keyCode==39){j.nextImage();j.slideshow.stop();}else{if(k.keyCode==37){j.prevImage();j.slideshow.stop();}}});},initNextAndPrev:function(){this.next_link=g('<div class="ad-next"><div class="ad-next-image"></div></div>');this.prev_link=g('<div class="ad-prev"><div class="ad-prev-image"></div></div>');this.image_wrapper.append(this.next_link);this.image_wrapper.append(this.prev_link);var j=this;this.prev_link.add(this.next_link).mouseover(function(k){g(this).css("height",j.image_wrapper_height);g(this).find("div").show();}).mouseout(function(k){g(this).find("div").hide();}).click(function(){if(g(this).is(".ad-next")){j.nextImage();j.slideshow.stop();}else{j.prevImage();j.slideshow.stop();}}).find("div").css("opacity",0.7);},initBackAndForward:function(){var l=this;this.scroll_forward=g('<div class="ad-forward"></div>');this.scroll_back=g('<div class="ad-back"></div>');this.nav.append(this.scroll_forward);this.nav.prepend(this.scroll_back);var k=0;var j=false;g(this.scroll_back).add(this.scroll_forward).click(function(){var m=l.nav_display_width-50;if(l.settings.scroll_jump>0){var m=l.settings.scroll_jump;}if(g(this).is(".ad-forward")){var n=l.thumbs_wrapper.scrollLeft()+m;}else{var n=l.thumbs_wrapper.scrollLeft()-m;}if(l.settings.slideshow.stop_on_scroll){l.slideshow.stop();}l.thumbs_wrapper.animate({scrollLeft:n+"px"});return false;}).css("opacity",0.6).hover(function(){var m="left";if(g(this).is(".ad-forward")){m="right";}j=setInterval(function(){k++;if(k>30&&l.settings.slideshow.stop_on_scroll){l.slideshow.stop();}var n=l.thumbs_wrapper.scrollLeft()+1;if(m=="left"){n=l.thumbs_wrapper.scrollLeft()-1;}l.thumbs_wrapper.scrollLeft(n);},10);g(this).css("opacity",1);},function(){k=0;clearInterval(j);g(this).css("opacity",0.6);});},_afterShow:function(){this.gallery_info.html((this.current_index+1)+" / "+this.images.length);if(!this.settings.cycle){this.prev_link.show().css("height",this.image_wrapper_height);this.next_link.show().css("height",this.image_wrapper_height);if(this.current_index==(this.images.length-1)){this.next_link.hide();}if(this.current_index==0){this.prev_link.hide();}}this.fireCallback(this.settings.callbacks.afterImageVisible);},_getContainedImageSize:function(k,j){if(j>this.image_wrapper_height){var l=k/j;j=this.image_wrapper_height;k=this.image_wrapper_height*l;}if(k>this.image_wrapper_width){var l=j/k;k=this.image_wrapper_width;j=this.image_wrapper_width*l;}return{width:k,height:j};},_centerImage:function(m,k,j){m.css("top","0px");if(j<this.image_wrapper_height){var l=this.image_wrapper_height-j;m.css("top",(l/2)+"px");}m.css("left","0px");if(k<this.image_wrapper_width){var l=this.image_wrapper_width-k;m.css("left",(l/2)+"px");}},_getDescription:function(j){var l=false;if(j.desc.length||j.title.length){var k="";if(j.title.length){k='<strong class="ad-description-title">'+j.title+"</strong>";}var l="";if(j.desc.length){l="<span>"+j.desc+"</span>";}l=g('<p class="ad-image-description">'+k+l+"</p>");}return l;},showImage:function(j,m){if(this.images[j]&&!this.in_transition){var k=this;var l=this.images[j];this.in_transition=true;if(!l.preloaded){this.loading(true);this.preloadImage(j,function(){k.loading(false);k._showWhenLoaded(j,m);});}else{this._showWhenLoaded(j,m);}}},_showWhenLoaded:function(r,x){if(this.images[r]){var k=this;var m=this.images[r];var n=g(document.createElement("div")).addClass("ad-image");var p=g(new Image()).attr("src",m.image);if(m.link){var u=g('<a href="'+m.link+'" target="_blank"></a>');u.append(p);n.append(u);}else{n.append(p);}this.image_wrapper.prepend(n);var y=this._getContainedImageSize(m.size.width,m.size.height);p.attr("width",y.width);p.attr("height",y.height);n.css({width:y.width+"px",height:y.height+"px"});this._centerImage(n,y.width,y.height);var q=this._getDescription(m,n);if(q){if(!this.settings.description_wrapper){n.append(q);var j=y.width-parseInt(q.css("padding-left"),10)-parseInt(q.css("padding-right"),10);q.css("width",j+"px");}else{this.settings.description_wrapper.append(q);}}this.highLightThumb(this.nav.find(".ad-thumb"+r));var v="right";if(this.current_index<r){v="left";}this.fireCallback(this.settings.callbacks.beforeImageVisible);if(this.current_image||this.settings.animate_first_image){var w=this.settings.animation_speed;var t="swing";var o=this.animations[this.settings.effect].call(this,n,v,q);if(typeof o.speed!="undefined"){w=o.speed;}if(typeof o.easing!="undefined"){t=o.easing;}if(this.current_image){var l=this.current_image;var s=this.current_description;l.animate(o.old_image,w,t,function(){l.remove();if(s){s.remove();}});}n.animate(o.new_image,w,t,function(){k.current_index=r;k.current_image=n;k.current_description=q;k.in_transition=false;k._afterShow();k.fireCallback(x);});}else{this.current_index=r;this.current_image=n;k.current_description=q;this.in_transition=false;k._afterShow();this.fireCallback(x);}}},nextIndex:function(){if(this.current_index==(this.images.length-1)){if(!this.settings.cycle){return false;}var j=0;}else{var j=this.current_index+1;}return j;},nextImage:function(k){var j=this.nextIndex();if(j===false){return false;}this.preloadImage(j+1);this.showImage(j,k);return true;},prevIndex:function(){if(this.current_index==0){if(!this.settings.cycle){return false;}var j=this.images.length-1;}else{var j=this.current_index-1;}return j;},prevImage:function(k){var j=this.prevIndex();if(j===false){return false;}this.preloadImage(j-1);this.showImage(j,k);return true;},preloadAll:function(){var k=this;var j=0;function l(){if(j<k.images.length){j++;k.preloadImage(j,l);}}k.preloadImage(j,l);},preloadImage:function(k,n){if(this.images[k]){var m=this.images[k];if(!this.images[k].preloaded){var j=g(new Image());j.attr("src",m.image);if(!this.isImageLoaded(j[0])){this.preloads.append(j);var l=this;j.load(function(){m.preloaded=true;m.size={width:this.width,height:this.height};l.fireCallback(n);}).error(function(){m.error=true;m.preloaded=false;m.size=false;});}else{m.preloaded=true;m.size={width:j[0].width,height:j[0].height};this.fireCallback(n);}}else{this.fireCallback(n);}}},isImageLoaded:function(j){if(typeof j.complete!="undefined"&&!j.complete){return false;}if(typeof j.naturalWidth!="undefined"&&j.naturalWidth==0){return false;}return true;},highLightThumb:function(j){this.thumbs_wrapper.find(".ad-active").removeClass("ad-active");j.addClass("ad-active");if(this.settings.thumb_opacity<1){this.thumbs_wrapper.find("a:not(.ad-active) img").fadeTo(300,this.settings.thumb_opacity);j.find("img").fadeTo(300,1);}var k=j[0].parentNode.offsetLeft;k-=(this.nav_display_width/2)-(j[0].offsetWidth/2);this.thumbs_wrapper.animate({scrollLeft:k+"px"});},fireCallback:function(j){if(g.isFunction(j)){j.call(this);}}};function a(j,k){this.init(j,k);}a.prototype={start_link:false,stop_link:false,countdown:false,controls:false,settings:false,nextimage_callback:false,enabled:false,running:false,countdown_interval:false,init:function(j,l){var k=this;this.nextimage_callback=j;this.settings=l;},create:function(){this.start_link=g('<span class="ad-slideshow-start">'+this.settings.start_label+"</span>");this.stop_link=g('<span class="ad-slideshow-stop">'+this.settings.stop_label+"</span>");this.countdown=g('<span class="ad-slideshow-countdown"></span>');this.controls=g('<div class="ad-slideshow-controls"></div>');this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);this.countdown.hide();var j=this;this.start_link.click(function(){j.start();});this.stop_link.click(function(){j.stop();});g(document).keydown(function(k){if(k.keyCode==83){if(j.running){j.stop();}else{j.start();}}});return this.controls;},disable:function(){this.enabled=false;this.stop();this.controls.hide();},enable:function(){this.enabled=true;this.controls.show();},toggle:function(){if(this.enabled){this.disable();}else{this.enable();}},start:function(){if(this.running||!this.enabled){return false;}var j=this;this.running=true;this.controls.addClass("ad-slideshow-running");this._next();this.fireCallback(this.settings.onStart);return true;},stop:function(){if(!this.running){return false;}this.running=false;this.countdown.hide();this.controls.removeClass("ad-slideshow-running");clearInterval(this.countdown_interval);this.fireCallback(this.settings.onStop);return true;},_next:function(){var l=this;var m=this.settings.countdown_prefix;var k=this.settings.countdown_sufix;clearInterval(l.countdown_interval);this.countdown.show().html(m+(this.settings.speed/1000)+k);var j=0;this.countdown_interval=setInterval(function(){j+=1000;if(j>=l.settings.speed){var o=function(){if(l.running){l._next();}j=0;};if(!l.nextimage_callback(o)){l.stop();}j=0;}var n=parseInt(l.countdown.text().replace(/[^0-9]/g,""),10);n--;if(n>0){l.countdown.html(m+n+k);}},1000);},fireCallback:function(j){if(g.isFunction(j)){j.call(this);}}};})(jQuery);/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(a,b){function b$(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function bX(a){if(!bR[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bR[a]=c}return bR[a]}function bW(a,b){var c={};d.each(bV.concat.apply([],bV.slice(0,b)),function(){c[this]=a});return c}function bJ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f=a.converters,g,h=e.length,i,j=e[0],k,l,m,n,o;for(g=1;g<h;g++){k=j,j=e[g];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=f[l]||f["* "+j];if(!m){o=b;for(n in f){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=f[i[1]+" "+j];if(o){n=f[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&d.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function bI(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bH(a,b,c,e){d.isArray(b)&&b.length?d.each(b,function(b,f){c||bp.test(a)?e(a,f):bH(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)}):c||b==null||typeof b!=="object"?e(a,b):d.isArray(b)||d.isEmptyObject(b)?e(a,""):d.each(b,function(b,d){bH(a+"["+b+"]",d,c,e)})}function bG(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bD,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(g[l]?l=b:(c.dataTypes.unshift(l),l=bG(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bG(a,c,d,e,"*",g));return l}function bF(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bz),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bn(a,b,c){var e=b==="width"?bh:bi,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function _(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(q,"`").replace(r,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,p,q=[],r=[],s=d._data(this,u);typeof s==="function"&&(s=s.events);if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(o,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,p=f.handleObj.origHandler.apply(f.elem,arguments);if(p===!1||a.isPropagationStopped()){c=f.level,p===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,b,c){c[0].type=a;return d.event.handle.apply(b,c)}function w(){return!0}function v(){return!1}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");e.type="text/javascript",d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a,c){if(a==null){if(e)return e;e=a={}}c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.then(c.cancel,b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments,c=b.length,e=c<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),f=e.promise(),g;c>1?(g=Array(c),d.each(b,function(a,b){d.when(b).then(function(b){g[a]=arguments.length>1?E.call(arguments,0):b,--c||e.resolveWith(f,g)},e.reject)})):e!==a&&e.resolve(a);return f},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return a.jQuery=a.$=d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option"));if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:b.getElementsByTagName("input")[0].value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},g.disabled=!0,d.support.optDisabled=!h.disabled,d.support.scriptEval=function(){if(d.support._scriptEval===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();e.type="text/javascript";try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(d.support._scriptEval=!0,delete a[f]):d.support._scriptEval=!1,b.removeChild(e),b=e=f=null}return d.support._scriptEval};try{delete b.test}catch(i){d.support.deleteExpando=!1}b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function j(){d.support.noCloneEvent=!1,b.detachEvent("onclick",j)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var k=c.createDocumentFragment();k.appendChild(b.firstChild),d.support.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var l=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=l("submit"),d.support.changeBubbles=l("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!d.isEmptyObject(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={}),typeof c==="object"&&(f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c)),i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,i=g?b[d.expando]:d.expando;if(!h[i])return;if(c){var j=e?h[i][f]:h[i];if(j){delete j[c];if(!d.isEmptyObject(j))return}}if(e){delete h[i][f];if(!d.isEmptyObject(h[i]))return}var k=h[i][f];d.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},h[i][f]=k):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var g=/[\n\t\r]/g,h=/\s+/,i=/\r/g,j=/^(?:href|src|style)$/,k=/^(?:button|input)$/i,l=/^(?:button|input|object|select|textarea)$/i,m=/^a(?:rea)?$/i,n=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(h);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",i=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(i+=" "+b[j]);f.className=d.trim(i)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(h);for(var e=0,f=this.length;e<f;e++){var i=this[e];if(i.nodeType===1&&i.className)if(a){var j=(" "+i.className+" ").replace(g," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");i.className=d.trim(j)}else i.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,i=d(this),j=b,k=a.split(h);while(f=k[g++])j=e?j:!i.hasClass(f),i[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(g," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,j=c.type==="select-one";if(f<0)return null;for(var k=j?f:0,l=j?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(j)return a;g.push(a)}}return g}if(n.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(i,"")}return b}var o=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){o&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&n.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=j.test(c);if(c==="selected"&&!d.support.optSelected){var n=a.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&k.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:l.test(a.nodeName)||m.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var o=/\.(.*)$/,p=/^(?:textarea|input|select)$/i,q=/\./g,r=/ /g,s=/[^\w\s.|`]/g,t=function(a){return a.replace(s,"\\$&")},u="events";d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a);if(f===!1)f=v;else if(!f)return;var h,i;f.handler&&(h=f,f=h.handler),f.guid||(f.guid=d.guid++);var j=d._data(c);if(!j)return;var k=j[u],l=j.handle;typeof k==="function"?(l=k.handle,k=k.events):k||(c.nodeType||(j[u]=j=function(){}),j.events=k={}),l||(j.handle=l=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(l.elem,arguments):b}),l.elem=c,e=e.split(" ");var m,n=0,o;while(m=e[n++]){i=h?d.extend({},h):{handler:f,data:g},m.indexOf(".")>-1?(o=m.split("."),m=o.shift(),i.namespace=o.slice(0).sort().join(".")):(o=[],i.namespace=""),i.type=m,i.guid||(i.guid=f.guid);var p=k[m],q=d.event.special[m]||{};if(!p){p=k[m]=[];if(!q.setup||q.setup.call(c,g,o,l)===!1)c.addEventListener?c.addEventListener(m,l,!1):c.attachEvent&&c.attachEvent("on"+m,l)}q.add&&(q.add.call(c,i),i.handler.guid||(i.handler.guid=f.guid)),p.push(i),d.event.global[m]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),w=s&&s[u];if(!s||!w)return;typeof w==="function"&&(s=w,w=w.events),c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in w)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),t).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=w[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete w[h]}if(d.isEmptyObject(w)){var x=s.handle;x&&(x.elem=null),delete s.events,delete s.handle,typeof s==="function"?d.removeData(a,u,!0):d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=e.nodeType?d._data(e,"handle"):(d._data(e,u)||{}).handle;h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(o,""),n=d.nodeName(l,"a")&&m==="click",p=d.event.special[m]||{};if((!p._default||p._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,u),typeof i==="function"&&(i=i.events),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(c){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="submit"||e==="image")&&d(c).closest("form").length){a.liveFired=b;return C("submit",this,arguments)}}),d.event.add(this,"keypress.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="text"||e==="password")&&d(c).closest("form").length&&a.keyCode===13){a.liveFired=b;return C("submit",this,arguments)}});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(p.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f){a.type="change",a.liveFired=b;return d.event.trigger(a,arguments[1],c)}}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return p.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return p.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var p in a)n[c](p,e,a[p],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=o.exec(h),k="",j&&(k=j[0],h=h.replace(o,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function s(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var j=d[g];if(j){var k=!1;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){f||(j.sizcache=c,j.sizset=g);if(typeof b!=="string"){if(j===b){k=!0;break}}else if(i.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function r(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0;[0,0].sort(function(){h=!1;return 0});var i=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var l,m,o,p,q,r,s,u,v=!0,w=i.isXML(d),x=[],y=b;do{a.exec(""),l=a.exec(y);if(l){y=l[3],x.push(l[1]);if(l[2]){p=l[3];break}}}while(l);if(x.length>1&&k.exec(b))if(x.length===2&&j.relative[x[0]])m=t(x[0]+x[1],d);else{m=j.relative[x[0]]?[d]:i(x.shift(),d);while(x.length)b=x.shift(),j.relative[b]&&(b+=x.shift()),m=t(b,m)}else{!g&&x.length>1&&d.nodeType===9&&!w&&j.match.ID.test(x[0])&&!j.match.ID.test(x[x.length-1])&&(q=i.find(x.shift(),d,w),d=q.expr?i.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:n(g)}:i.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),m=q.expr?i.filter(q.expr,q.set):q.set,x.length>0?o=n(m):v=!1;while(x.length)r=x.pop(),s=r,j.relative[r]?s=x.pop():r="",s==null&&(s=d),j.relative[r](o,s,w)}else o=x=[]}o||(o=m),o||i.error(r||b);if(f.call(o)==="[object Array]")if(v)if(d&&d.nodeType===1)for(u=0;o[u]!=null;u++)o[u]&&(o[u]===!0||o[u].nodeType===1&&i.contains(d,o[u]))&&e.push(m[u]);else for(u=0;o[u]!=null;u++)o[u]&&o[u].nodeType===1&&e.push(m[u]);else e.push.apply(e,o);else n(o,e);p&&(i(p,h,e,g),i.uniqueSort(e));return e};i.uniqueSort=function(a){if(p){g=h,a.sort(p);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},i.matches=function(a,b){return i(a,null,null,b)},i.matchesSelector=function(a,b){return i(b,null,null,[a]).length>0},i.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=j.order.length;e<f;e++){var g,h=j.order[e];if(g=j.leftMatch[h].exec(a)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,""),d=j.find[h](g,b,c);if(d!=null){a=a.replace(j.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},i.filter=function(a,c,d,e){var f,g,h=a,k=[],l=c,m=c&&c[0]&&i.isXML(c[0]);while(a&&c.length){for(var n in j.filter)if((f=j.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=j.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;l===k&&(k=[]);if(j.preFilter[n]){f=j.preFilter[n](f,l,d,k,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=l[s])!=null;s++)if(p){o=q(p,f,s,l);var t=e^!!o;d&&o!=null?t?g=!0:l[s]=!1:t&&(k.push(p),g=!0)}if(o!==b){d||(l=k),a=a.replace(j.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)i.error(a);else break;h=a}return l},i.error=function(a){throw"Syntax error, unrecognized expression: "+a};var j=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&i.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!/\W/.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&i.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||i.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&i.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(/\\/g,"");!f&&j.attrMap[g]&&(a[1]=j.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(/\\/g,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=i(b[3],null,null,c);else{var g=i.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(j.match.POS.test(b[0])||j.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=j.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||i.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,k=g.length;h<k;h++)if(g[h]===a)return!1;return!0}i.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=j.attrHandle[c]?j.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=j.setFilters[e];if(f)return f(a,c,b,d)}}},k=j.match.POS,l=function(a,b){return"\\"+(b-0+1)};for(var m in j.match)j.match[m]=new RegExp(j.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source),j.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[m].source.replace(/\\(\d+)/g,l));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(o){n=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var p,q;c.documentElement.compareDocumentPosition?p=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(p=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return q(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return q(e[k],f[k]);return k===c?q(a,f[k],-1):q(e[k],b,1)},q=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),i.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(j.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},j.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(j.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(j.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=i,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){i=function(b,e,f,g){e=e||c;if(!g&&!i.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return n(e.getElementsByTagName(b),f);if(h[2]&&j.find.CLASS&&e.getElementsByClassName)return n(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return n([e.body],f);if(h&&h[3]){var k=e.getElementById(h[3]);if(!k||!k.parentNode)return n([],f);if(k.id===h[3])return n([k],f)}try{return n(e.querySelectorAll(b),f)}catch(l){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e.getAttribute("id"),o=m||d,p=e.parentNode,q=/^\s*[+~]/.test(b);m?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),q&&p&&(e=e.parentNode);try{if(!q||p)return n(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(r){}finally{m||e.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)i[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(i.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!i.isXML(a))try{if(d||!j.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return i(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;j.order.splice(1,0,"CLASS"),j.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?i.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?i.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains=function(){return!1},i.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=j.match.PSEUDO.exec(a))e+=c[0],a=a.replace(j.match.PSEUDO,"");a=j.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)i(a,f[g],d);return i.filter(e,d)};d.find=i,d.expr=i.selectors,d.expr[":"]=d.expr.filters,d.unique=i.uniqueSort,d.text=i.getText,d.isXMLDoc=i.isXML,d.contains=i.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!0:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,_)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if(!d.support.noCloneEvent&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");for(h=0;f[h];++h)$(f[h],g[h]);$(a,e)}if(b){Z(a,e);if(c&&"getElementsByTagName"in a){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");if(f.length)for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var ba=/alpha\([^)]*\)/i,bb=/opacity=([^)]*)/,bc=/-([a-z])/ig,bd=/([A-Z])/g,be=/^-?\d+(?:px)?$/i,bf=/^-?\d/,bg={position:"absolute",visibility:"hidden",display:"block"},bh=["Left","Right"],bi=["Top","Bottom"],bj,bk,bl,bm=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bj(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bj)return bj(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bc,bm)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bn(a,b,e):d.swap(a,bg,function(){f=bn(a,b,e)});if(f<=0){f=bj(a,b,b),f==="0px"&&bl&&(f=bl(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!be.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=ba.test(f)?f.replace(ba,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bk=function(a,c,e){var f,g,h;e=e.replace(bd,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bl=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!be.test(d)&&bf.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bj=bk||bl,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bo=/%20/g,bp=/\[\]$/,bq=/\r?\n/g,br=/#.*$/,bs=/^(.*?):\s*(.*?)\r?$/mg,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:GET|HEAD)$/,bv=/^\/\//,bw=/\?/,bx=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,by=/^(?:select|textarea)/i,bz=/\s+/,bA=/([?&])_=[^&]*/,bB=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,bC=d.fn.load,bD={},bE={};d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&bC)return bC.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";b&&(d.isFunction(b)?(c=b,b=null):typeof b==="object"&&(b=d.param(b,d.ajaxSettings.traditional),g="POST"));var h=this;d.ajax({url:a,type:g,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText,a.isResolved()&&(a.done(function(a){e=a}),h.html(f?d("<div>").append(e.replace(bx,"")).find(f):e)),c&&h.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||by.test(this.nodeName)||bt.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bq,"\r\n")}}):{name:b.name,value:c.replace(bq,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,b){d[b]=function(a,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=null);return d.ajax({type:b,url:a,data:c,success:e,dataType:f})}}),d.extend({getScript:function(a,b){return d.get(a,null,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a){d.extend(!0,d.ajaxSettings,a),a.context&&(d.ajaxSettings.context=a.context)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bF(bD),ajaxTransport:bF(bE),ajax:function(a,e){function w(a,c,e,l){if(t!==2){t=2,p&&clearTimeout(p),o=b,m=l||"",v.readyState=a?4:0;var n,q,r,s=e?bI(f,v,e):b,u,w;if(a>=200&&a<300||a===304){if(f.ifModified){if(u=v.getResponseHeader("Last-Modified"))d.lastModified[f.url]=u;if(w=v.getResponseHeader("Etag"))d.etag[f.url]=w}if(a===304)c="notmodified",n=!0;else try{q=bJ(f,s),c="success",n=!0}catch(x){c="parsererror",r=x}}else r=c,a&&(c="error",a<0&&(a=0));v.status=a,v.statusText=c,n?i.resolveWith(g,[q,c,v]):i.rejectWith(g,[v,c,r]),v.statusCode(k),k=b,f.global&&h.trigger("ajax"+(n?"Success":"Error"),[v,f,n?q:r]),j.resolveWith(g,[v,c]),f.global&&(h.trigger("ajaxComplete",[v,f]),--d.active||d.event.trigger("ajaxStop"))}}typeof e!=="object"&&(e=a,a=b),e=e||{};var f=d.extend(!0,{},d.ajaxSettings,e),g=(f.context=("context"in e?e:d.ajaxSettings).context)||f,h=g===f?d.event:d(g),i=d.Deferred(),j=d._Deferred(),k=f.statusCode||{},l={},m,n,o,p,q=c.location,r=q.protocol||"http:",s,t=0,u,v={readyState:0,setRequestHeader:function(a,b){t===0&&(l[a.toLowerCase()]=b);return this},getAllResponseHeaders:function(){return t===2?m:null},getResponseHeader:function(a){var b;if(t===2){if(!n){n={};while(b=bs.exec(m))n[b[1].toLowerCase()]=b[2]}b=n[a.toLowerCase()]}return b||null},abort:function(a){a=a||"abort",o&&o.abort(a),w(0,a);return this}};i.promise(v),v.success=v.done,v.error=v.fail,v.complete=j.done,v.statusCode=function(a){if(a){var b;if(t<2)for(b in a)k[b]=[k[b],a[b]];else b=a[v.status],v.then(b,b)}return this},f.url=(""+(a||f.url)).replace(br,"").replace(bv,r+"//"),f.dataTypes=d.trim(f.dataType||"*").toLowerCase().split(bz),f.crossDomain||(s=bB.exec(f.url.toLowerCase()),f.crossDomain=s&&(s[1]!=r||s[2]!=q.hostname||(s[3]||(s[1]==="http:"?80:443))!=(q.port||(r==="http:"?80:443)))),f.data&&f.processData&&typeof f.data!=="string"&&(f.data=d.param(f.data,f.traditional)),bG(bD,f,e,v),f.type=f.type.toUpperCase(),f.hasContent=!bu.test(f.type),f.global&&d.active++===0&&d.event.trigger("ajaxStart");if(!f.hasContent){f.data&&(f.url+=(bw.test(f.url)?"&":"?")+f.data);if(f.cache===!1){var x=d.now(),y=f.url.replace(bA,"$1_="+x);f.url=y+(y===f.url?(bw.test(f.url)?"&":"?")+"_="+x:"")}}if(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)l["content-type"]=f.contentType;f.ifModified&&(d.lastModified[f.url]&&(l["if-modified-since"]=d.lastModified[f.url]),d.etag[f.url]&&(l["if-none-match"]=d.etag[f.url])),l.accept=f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", */*; q=0.01":""):f.accepts["*"];for(u in f.headers)l[u.toLowerCase()]=f.headers[u];if(!f.beforeSend||f.beforeSend.call(g,v,f)!==!1&&t!==2){for(u in {success:1,error:1,complete:1})v[u](f[u]);o=bG(bE,f,e,v);if(o){t=v.readyState=1,f.global&&h.trigger("ajaxSend",[v,f]),f.async&&f.timeout>0&&(p=setTimeout(function(){v.abort("timeout")},f.timeout));try{o.send(l,w)}catch(z){status<2?w(-1,z):d.error(z)}}else w(-1,"No Transport")}else w(0,"abort"),v=!1;return v},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery)d.each(a,function(){f(this.name,this.value)});else for(var g in a)bH(g,a[g],c,f);return e.join("&").replace(bo,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bK=d.now(),bL=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bK++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){e=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bL.test(b.url)||e&&bL.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";b.jsonp!==!1&&(i=i.replace(bL,k),b.url===i&&(e&&(j=j.replace(bL,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},b.complete=[function(){a[g]=h;if(h)f&&d.isFunction(h)&&a[g](f[0]);else try{delete a[g]}catch(b){}},b.complete],b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bM=d.now(),bN={},bO,bP;d.ajaxSettings.xhr=a.ActiveXObject?function(){if(a.location.protocol!=="file:")try{return new a.XMLHttpRequest}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}:function(){return new a.XMLHttpRequest};try{bP=d.ajaxSettings.xhr()}catch(bQ){}d.support.ajax=!!bP,d.support.cors=bP&&"withCredentials"in bP,bP=b,d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var c;return{send:function(e,f){bO||(bO=1,d(a).bind("unload",function(){d.each(bN,function(a,b){b.onreadystatechange&&b.onreadystatechange(1)})}));var g=b.xhr(),h;b.username?g.open(b.type,b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async),(!b.crossDomain||b.hasContent)&&!e["x-requested-with"]&&(e["x-requested-with"]="XMLHttpRequest");try{d.each(e,function(a,b){g.setRequestHeader(a,b)})}catch(i){}g.send(b.hasContent&&b.data||null),c=function(a,e){if(c&&(e||g.readyState===4)){c=0,h&&(g.onreadystatechange=d.noop,delete bN[h]);if(e)g.readyState!==4&&g.abort();else{var i=g.status,j,k=g.getAllResponseHeaders(),l={},m=g.responseXML;m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}i=i===0?!b.crossDomain||j?k?304:0:302:i==1223?204:i,f(i,j,l,k)}}},b.async&&g.readyState!==4?(h=bM++,bN[h]=g,g.onreadystatechange=c):c()},abort:function(){c&&c(0,1)}}}});var bR={},bS=/^(?:toggle|show|hide)$/,bT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bU,bV=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(bW("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",bX(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(bW("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(bW("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=bX(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(bS.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=bT.exec(e),j=f.cur()||0;if(i){var k=parseFloat(i[2]),l=i[3]||"px";l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:bW("show",1),slideUp:bW("hide",1),slideToggle:bW("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(d.css(this.elem,this.prop));return a||0},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||"px",this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!bU&&(bU=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(bU),bU=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var bY=/^t(?:able|d|h)$/i,bZ=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=b$(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!bY.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=bZ.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!bZ.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=b$(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=b$(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}})})(window);
/**
 * Copyright (c) 2010 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.4
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
(function($) {
  $.fn.adGallery = function(options) {
    var defaults = { loader_image: 'loader.gif',
                     start_at_index: 0,
                     description_wrapper: false,
                     thumb_opacity: 0.7,
                     animate_first_image: false,
                     animation_speed: 400,
                     width: false,
                     height: false,
                     display_next_and_prev: true,
                     display_back_and_forward: true,
                     scroll_jump: 0, // If 0, it jumps the width of the container
                     slideshow: {
                       enable: true,
                       autostart: false,
                       speed: 5000,
                       start_label: 'Start',
                       stop_label: 'Stop',
                       stop_on_scroll: true,
                       countdown_prefix: '(',
                       countdown_sufix: ')',
                       onStart: false,
                       onStop: false
                     },
                     effect: 'slide-hori', // or 'slide-vert', 'fade', or 'resize', 'none'
                     enable_keyboard_move: true,
                     cycle: true,
                     callbacks: {
                       init: false,
                       afterImageVisible: false,
                       beforeImageVisible: false
                     }
    };
    var settings = $.extend(false, defaults, options);
    if(options && options.slideshow) {
      settings.slideshow = $.extend(false, defaults.slideshow, options.slideshow);
    };
    if(!settings.slideshow.enable) {
      settings.slideshow.autostart = false;
    };
    var galleries = [];
    $(this).each(function() {
      var gallery = new AdGallery(this, settings);
      galleries[galleries.length] = gallery;
    });
    // Sorry, breaking the jQuery chain because the gallery instances
    // are returned so you can fiddle with them
    return galleries;
  };

  function VerticalSlideAnimation(img_container, direction, desc) {
    var current_top = parseInt(img_container.css('top'), 10);
    if(direction == 'left') {
      var old_image_top = '-'+ this.image_wrapper_height +'px';
      img_container.css('top', this.image_wrapper_height +'px');
    } else {
      var old_image_top = this.image_wrapper_height +'px';
      img_container.css('top', '-'+ this.image_wrapper_height +'px');
    };
    if(desc) {
      desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
      desc.animate({bottom: 0}, this.settings.animation_speed * 2);
    };
    if(this.current_description) {
      this.current_description.animate({bottom: '-'+ this.current_description[0].offsetHeight +'px'}, this.settings.animation_speed * 2);
    };
    return {old_image: {top: old_image_top},
            new_image: {top: current_top}};
  };

  function HorizontalSlideAnimation(img_container, direction, desc) {
    var current_left = parseInt(img_container.css('left'), 10);
    if(direction == 'left') {
      var old_image_left = '-'+ this.image_wrapper_width +'px';
      img_container.css('left',this.image_wrapper_width +'px');
    } else {
      var old_image_left = this.image_wrapper_width +'px';
      img_container.css('left','-'+ this.image_wrapper_width +'px');
    };
    if(desc) {
      desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
      desc.animate({bottom: 0}, this.settings.animation_speed * 2);
    };
    if(this.current_description) {
      this.current_description.animate({bottom: '-'+ this.current_description[0].offsetHeight +'px'}, this.settings.animation_speed * 2);
    };
    return {old_image: {left: old_image_left},
            new_image: {left: current_left}};
  };

  function ResizeAnimation(img_container, direction, desc) {
    var image_width = img_container.width();
    var image_height = img_container.height();
    var current_left = parseInt(img_container.css('left'), 10);
    var current_top = parseInt(img_container.css('top'), 10);
    img_container.css({width: 0, height: 0, top: this.image_wrapper_height / 2, left: this.image_wrapper_width / 2});
    return {old_image: {width: 0,
                        height: 0,
                        top: this.image_wrapper_height / 2,
                        left: this.image_wrapper_width / 2},
            new_image: {width: image_width,
                        height: image_height,
                        top: current_top,
                        left: current_left}};
  };

  function FadeAnimation(img_container, direction, desc) {
    img_container.css('opacity', 0);
    return {old_image: {opacity: 0},
            new_image: {opacity: 1}};
  };

  // Sort of a hack, will clean this up... eventually
  function NoneAnimation(img_container, direction, desc) {
    img_container.css('opacity', 0);
    return {old_image: {opacity: 0},
            new_image: {opacity: 1},
            speed: 0};
  };

  function AdGallery(wrapper, settings) {
    this.init(wrapper, settings);
  };
  AdGallery.prototype = {
    // Elements
    wrapper: false,
    image_wrapper: false,
    gallery_info: false,
    nav: false,
    loader: false,
    preloads: false,
    thumbs_wrapper: false,
    scroll_back: false,
    scroll_forward: false,
    next_link: false,
    prev_link: false,

    slideshow: false,
    image_wrapper_width: 0,
    image_wrapper_height: 0,
    current_index: 0,
    current_image: false,
    current_description: false,
    nav_display_width: 0,
    settings: false,
    images: false,
    in_transition: false,
    animations: false,
    init: function(wrapper, settings) {
      var context = this;
      this.wrapper = $(wrapper);
      this.settings = settings;
      this.setupElements();
      this.setupAnimations();
      if(this.settings.width) {
        this.image_wrapper_width = this.settings.width;
        this.image_wrapper.width(this.settings.width);
        this.wrapper.width(this.settings.width);
      } else {
        this.image_wrapper_width = this.image_wrapper.width();
      };
      if(this.settings.height) {
        this.image_wrapper_height = this.settings.height;
        this.image_wrapper.height(this.settings.height);
      } else {
        this.image_wrapper_height = this.image_wrapper.height();
      };
      this.nav_display_width = this.nav.width();
      this.current_index = 0;
      this.current_image = false;
      this.current_description = false;
      this.in_transition = false;
      this.findImages();
      if(this.settings.display_next_and_prev) {
        this.initNextAndPrev();
      };
      // The slideshow needs a callback to trigger the next image to be shown
      // but we don't want to give it access to the whole gallery instance
      var nextimage_callback = function(callback) {
        return context.nextImage(callback);
      };
      this.slideshow = new AdGallerySlideshow(nextimage_callback, this.settings.slideshow);
      this.controls.append(this.slideshow.create());
      if(this.settings.slideshow.enable) {
        this.slideshow.enable();
      } else {
        this.slideshow.disable();
      };
      if(this.settings.display_back_and_forward) {
        this.initBackAndForward();
      };
      if(this.settings.enable_keyboard_move) {
        this.initKeyEvents();
      };
      var start_at = parseInt(this.settings.start_at_index, 10);
      if(window.location.hash && window.location.hash.indexOf('#ad-image') === 0) {
        start_at = window.location.hash.replace(/[^0-9]+/g, '');
        // Check if it's a number
        if((start_at * 1) != start_at) {
          start_at = this.settings.start_at_index;
        };
      };

      this.loading(true);
      this.showImage(start_at,
        function() {
          // We don't want to start the slideshow before the image has been
          // displayed
          if(context.settings.slideshow.autostart) {
            context.preloadImage(start_at + 1);
            context.slideshow.start();
          };
        }
      );
      this.fireCallback(this.settings.callbacks.init);
    },
    setupAnimations: function() {
      this.animations = {
        'slide-vert': VerticalSlideAnimation,
        'slide-hori': HorizontalSlideAnimation,
        'resize': ResizeAnimation,
        'fade': FadeAnimation,
        'none': NoneAnimation
      };
    },
    setupElements: function() {
      this.controls = this.wrapper.find('.ad-controls');
      this.gallery_info = $('<p class="ad-info"></p>');
      this.controls.append(this.gallery_info);
      this.image_wrapper = this.wrapper.find('.ad-image-wrapper');
      this.image_wrapper.empty();
      this.nav = this.wrapper.find('.ad-nav');
      this.thumbs_wrapper = this.nav.find('.ad-thumbs');
      this.preloads = $('<div class="ad-preloads"></div>');
      this.loader = $('<img class="ad-loader" src="'+ this.settings.loader_image +'">');
      this.image_wrapper.append(this.loader);
      this.loader.hide();
      $(document.body).append(this.preloads);
    },
    loading: function(bool) {
      if(bool) {
        this.loader.show();
      } else {
        this.loader.hide();
      };
    },
    addAnimation: function(name, fn) {
      if($.isFunction(fn)) {
        this.animations[name] = fn;
      };
    },
    findImages: function() {
      var context = this;
      this.images = [];
      var thumb_wrapper_width = 0;
      var thumbs_loaded = 0;
      var thumbs = this.thumbs_wrapper.find('a');
      var thumb_count = thumbs.length;
      if(this.settings.thumb_opacity < 1) {
        thumbs.find('img').css('opacity', this.settings.thumb_opacity);
      };
      thumbs.each(
        function(i) {
          var link = $(this);
          var image_src = link.attr('href');
          var thumb = link.find('img');
          // Check if the thumb has already loaded
          if(!context.isImageLoaded(thumb[0])) {
            thumb.load(
              function() {
                thumb_wrapper_width += this.parentNode.parentNode.offsetWidth;
                thumbs_loaded++;
              }
            );
          } else{
            thumb_wrapper_width += thumb[0].parentNode.parentNode.offsetWidth;
            thumbs_loaded++;
          };
          link.addClass('ad-thumb'+ i);
          link.click(
            function() {
              context.showImage(i);
              context.slideshow.stop();
              return false;
            }
          ).hover(
            function() {
              if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
                $(this).find('img').fadeTo(300, 1);
              };
              context.preloadImage(i);
            },
            function() {
              if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
                $(this).find('img').fadeTo(300, context.settings.thumb_opacity);
              };
            }
          );
          var link = false;
          if(thumb.data('ad-link')) {
            link = thumb.data('ad-link');
          } else if(thumb.attr('longdesc') && thumb.attr('longdesc').length) {
            link = thumb.attr('longdesc');
          };
          var desc = false;
          if(thumb.data('ad-desc')) {
            desc = thumb.data('ad-desc');
          } else if(thumb.attr('alt') && thumb.attr('alt').length) {
            desc = thumb.attr('alt');
          };
          var title = false;
          if(thumb.data('ad-title')) {
            title = thumb.data('ad-title');
          } else if(thumb.attr('title') && thumb.attr('title').length) {
            title = thumb.attr('title');
          };
          context.images[i] = { thumb: thumb.attr('src'), image: image_src, error: false,
                                preloaded: false, desc: desc, title: title, size: false,
                                link: link };
        }
      );
      // Wait until all thumbs are loaded, and then set the width of the ul
      var inter = setInterval(
        function() {
          if(thumb_count == thumbs_loaded) {
            thumb_wrapper_width -= 100;
            var list = context.nav.find('.ad-thumb-list');
            list.css('width', thumb_wrapper_width +'px');
            var i = 1;
            var last_height = list.height();
            while(i < 201) {
              list.css('width', (thumb_wrapper_width + i) +'px');
              if(last_height != list.height()) {
                break;
              }
              last_height = list.height();
              i++;
            }
            clearInterval(inter);
          };
        },
        100
      );
    },
    initKeyEvents: function() {
      var context = this;
      $(document).keydown(
        function(e) {
          if(e.keyCode == 39) {
            // right arrow
            context.nextImage();
            context.slideshow.stop();
          } else if(e.keyCode == 37) {
            // left arrow
            context.prevImage();
            context.slideshow.stop();
          };
        }
      );
    },
    initNextAndPrev: function() {
      this.next_link = $('<div class="ad-next"><div class="ad-next-image"></div></div>');
      this.prev_link = $('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
      this.image_wrapper.append(this.next_link);
      this.image_wrapper.append(this.prev_link);
      var context = this;
      this.prev_link.add(this.next_link).mouseover(
        function(e) {
          // IE 6 hides the wrapper div, so we have to set it's width
          $(this).css('height', context.image_wrapper_height);
          $(this).find('div').show();
        }
      ).mouseout(
        function(e) {
          $(this).find('div').hide();
        }
      ).click(
        function() {
          if($(this).is('.ad-next')) {
            context.nextImage();
            context.slideshow.stop();
          } else {
            context.prevImage();
            context.slideshow.stop();
          };
        }
      ).find('div').css('opacity', 0.7);
    },
    initBackAndForward: function() {
      var context = this;
      this.scroll_forward = $('<div class="ad-forward"></div>');
      this.scroll_back = $('<div class="ad-back"></div>');
      this.nav.append(this.scroll_forward);
      this.nav.prepend(this.scroll_back);
      var has_scrolled = 0;
      var thumbs_scroll_interval = false;
      $(this.scroll_back).add(this.scroll_forward).click(
        function() {
          // We don't want to jump the whole width, since an image
          // might be cut at the edge
          var width = context.nav_display_width - 50;
          if(context.settings.scroll_jump > 0) {
            var width = context.settings.scroll_jump;
          };
          if($(this).is('.ad-forward')) {
            var left = context.thumbs_wrapper.scrollLeft() + width;
          } else {
            var left = context.thumbs_wrapper.scrollLeft() - width;
          };
          if(context.settings.slideshow.stop_on_scroll) {
            context.slideshow.stop();
          };
          context.thumbs_wrapper.animate({scrollLeft: left +'px'});
          return false;
        }
      ).css('opacity', 0.6).hover(
        function() {
          var direction = 'left';
          if($(this).is('.ad-forward')) {
            direction = 'right';
          };
          thumbs_scroll_interval = setInterval(
            function() {
              has_scrolled++;
              // Don't want to stop the slideshow just because we scrolled a pixel or two
              if(has_scrolled > 30 && context.settings.slideshow.stop_on_scroll) {
                context.slideshow.stop();
              };
              var left = context.thumbs_wrapper.scrollLeft() + 1;
              if(direction == 'left') {
                left = context.thumbs_wrapper.scrollLeft() - 1;
              };
              context.thumbs_wrapper.scrollLeft(left);
            },
            10
          );
          $(this).css('opacity', 1);
        },
        function() {
          has_scrolled = 0;
          clearInterval(thumbs_scroll_interval);
          $(this).css('opacity', 0.6);
        }
      );
    },
    _afterShow: function() {
      this.gallery_info.html((this.current_index + 1) +' / '+ this.images.length);
      if(!this.settings.cycle) {
        // Needed for IE
        this.prev_link.show().css('height', this.image_wrapper_height);
        this.next_link.show().css('height', this.image_wrapper_height);
        if(this.current_index == (this.images.length - 1)) {
          this.next_link.hide();
        };
        if(this.current_index == 0) {
          this.prev_link.hide();
        };
      };
      this.fireCallback(this.settings.callbacks.afterImageVisible);
    },
    /**
     * Checks if the image is small enough to fit inside the container
     * If it's not, shrink it proportionally
     */
    _getContainedImageSize: function(image_width, image_height) {
      if(image_height > this.image_wrapper_height) {
        var ratio = image_width / image_height;
        image_height = this.image_wrapper_height;
        image_width = this.image_wrapper_height * ratio;
      };
      if(image_width > this.image_wrapper_width) {
  	    var ratio = image_height / image_width;
  	    image_width = this.image_wrapper_width;
  	    image_height = this.image_wrapper_width * ratio;
  	  };
      return {width: image_width, height: image_height};
    },
    /**
     * If the image dimensions are smaller than the wrapper, we position
     * it in the middle anyway
     */
    _centerImage: function(img_container, image_width, image_height) {
      img_container.css('top', '0px');
      if(image_height < this.image_wrapper_height) {
        var dif = this.image_wrapper_height - image_height;
        img_container.css('top', (dif / 2) +'px');
      };
      img_container.css('left', '0px');
      if(image_width < this.image_wrapper_width) {
        var dif = this.image_wrapper_width - image_width;
        img_container.css('left', (dif / 2) +'px');
      };
    },
    _getDescription: function(image) {
      var desc = false;
      if(image.desc.length || image.title.length) {
        var title = '';
        if(image.title.length) {
          title = '<strong class="ad-description-title">'+ image.title +'</strong>';
        };
        var desc = '';
        if(image.desc.length) {
          desc = '<span>'+ image.desc +'</span>';
        };
        desc = $('<p class="ad-image-description">'+ title + desc +'</p>');
      };
      return desc;
    },
    /**
     * @param function callback Gets fired when the image has loaded, is displaying
     *                          and it's animation has finished
     */
    showImage: function(index, callback) {
      if(this.images[index] && !this.in_transition) {
        var context = this;
        var image = this.images[index];
        this.in_transition = true;
        if(!image.preloaded) {
          this.loading(true);
          this.preloadImage(index, function() {
            context.loading(false);
            context._showWhenLoaded(index, callback);
          });
        } else {
          this._showWhenLoaded(index, callback);
        };
      };
    },
    /**
     * @param function callback Gets fired when the image has loaded, is displaying
     *                          and it's animation has finished
     */
    _showWhenLoaded: function(index, callback) {
      if(this.images[index]) {
        var context = this;
        var image = this.images[index];
        var img_container = $(document.createElement('div')).addClass('ad-image');
        var img = $(new Image()).attr('src', image.image);
        if(image.link) {
          var link = $('<a href="'+ image.link +'" target="_blank"></a>');
          link.append(img);
          img_container.append(link);
        } else {
          img_container.append(img);
        }
        this.image_wrapper.prepend(img_container);
        var size = this._getContainedImageSize(image.size.width, image.size.height);
        img.attr('width', size.width);
        img.attr('height', size.height);
        img_container.css({width: size.width +'px', height: size.height +'px'});
        this._centerImage(img_container, size.width, size.height);
        var desc = this._getDescription(image, img_container);
        if(desc) {
          if(!this.settings.description_wrapper) {
            img_container.append(desc);
            var width = size.width - parseInt(desc.css('padding-left'), 10) - parseInt(desc.css('padding-right'), 10);
            desc.css('width', width +'px');
          } else {
            this.settings.description_wrapper.append(desc);
          }
        };
        this.highLightThumb(this.nav.find('.ad-thumb'+ index));

        var direction = 'right';
        if(this.current_index < index) {
          direction = 'left';
        };
        this.fireCallback(this.settings.callbacks.beforeImageVisible);
        if(this.current_image || this.settings.animate_first_image) {
          var animation_speed = this.settings.animation_speed;
          var easing = 'swing';
          var animation = this.animations[this.settings.effect].call(this, img_container, direction, desc);
          if(typeof animation.speed != 'undefined') {
            animation_speed = animation.speed;
          };
          if(typeof animation.easing != 'undefined') {
            easing = animation.easing;
          };
          if(this.current_image) {
            var old_image = this.current_image;
            var old_description = this.current_description;
            old_image.animate(animation.old_image, animation_speed, easing,
              function() {
                old_image.remove();
                if(old_description) old_description.remove();
              }
            );
          };
          img_container.animate(animation.new_image, animation_speed, easing,
            function() {
              context.current_index = index;
              context.current_image = img_container;
              context.current_description = desc;
              context.in_transition = false;
              context._afterShow();
              context.fireCallback(callback);
            }
          );
        } else {
          this.current_index = index;
          this.current_image = img_container;
          context.current_description = desc;
          this.in_transition = false;
          context._afterShow();
          this.fireCallback(callback);
        };
      };
    },
    nextIndex: function() {
      if(this.current_index == (this.images.length - 1)) {
        if(!this.settings.cycle) {
          return false;
        };
        var next = 0;
      } else {
        var next = this.current_index + 1;
      };
      return next;
    },
    nextImage: function(callback) {
      var next = this.nextIndex();
      if(next === false) return false;
      this.preloadImage(next + 1);
      this.showImage(next, callback);
      return true;
    },
    prevIndex: function() {
      if(this.current_index == 0) {
        if(!this.settings.cycle) {
          return false;
        };
        var prev = this.images.length - 1;
      } else {
        var prev = this.current_index - 1;
      };
      return prev;
    },
    prevImage: function(callback) {
      var prev = this.prevIndex();
      if(prev === false) return false;
      this.preloadImage(prev - 1);
      this.showImage(prev, callback);
      return true;
    },
    preloadAll: function() {
      var context = this;
      var i = 0;
      function preloadNext() {
        if(i < context.images.length) {
          i++;
          context.preloadImage(i, preloadNext);
        };
      };
      context.preloadImage(i, preloadNext);
    },
    preloadImage: function(index, callback) {
      if(this.images[index]) {
        var image = this.images[index];
        if(!this.images[index].preloaded) {
          var img = $(new Image());
          img.attr('src', image.image);
          if(!this.isImageLoaded(img[0])) {
            this.preloads.append(img);
            var context = this;
            img.load(
              function() {
                image.preloaded = true;
                image.size = { width: this.width, height: this.height };
                context.fireCallback(callback);
              }
            ).error(
              function() {
                image.error = true;
                image.preloaded = false;
                image.size = false;
              }
            );
          } else {
            image.preloaded = true;
            image.size = { width: img[0].width, height: img[0].height };
            this.fireCallback(callback);
          };
        } else {
          this.fireCallback(callback);
        };
      };
    },
    isImageLoaded: function(img) {
      if(typeof img.complete != 'undefined' && !img.complete) {
        return false;
      };
      if(typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0) {
        return false;
      };
      return true;
    },
    highLightThumb: function(thumb) {
      this.thumbs_wrapper.find('.ad-active').removeClass('ad-active');
      thumb.addClass('ad-active');
      if(this.settings.thumb_opacity < 1) {
        this.thumbs_wrapper.find('a:not(.ad-active) img').fadeTo(300, this.settings.thumb_opacity);
        thumb.find('img').fadeTo(300, 1);
      };
      var left = thumb[0].parentNode.offsetLeft;
      left -= (this.nav_display_width / 2) - (thumb[0].offsetWidth / 2);
      this.thumbs_wrapper.animate({scrollLeft: left +'px'});
    },
    fireCallback: function(fn) {
      if($.isFunction(fn)) {
        fn.call(this);
      };
    }
  };

  function AdGallerySlideshow(nextimage_callback, settings) {
    this.init(nextimage_callback, settings);
  };
  AdGallerySlideshow.prototype = {
    start_link: false,
    stop_link: false,
    countdown: false,
    controls: false,

    settings: false,
    nextimage_callback: false,
    enabled: false,
    running: false,
    countdown_interval: false,
    init: function(nextimage_callback, settings) {
      var context = this;
      this.nextimage_callback = nextimage_callback;
      this.settings = settings;
    },
    create: function() {
      this.start_link = $('<span class="ad-slideshow-start">'+ this.settings.start_label +'</span>');
      this.stop_link = $('<span class="ad-slideshow-stop">'+ this.settings.stop_label +'</span>');
      this.countdown = $('<span class="ad-slideshow-countdown"></span>');
      this.controls = $('<div class="ad-slideshow-controls"></div>');
      this.controls.append(this.start_link).append(this.stop_link).append(this.countdown);
      this.countdown.hide();

      var context = this;
      this.start_link.click(
        function() {
          context.start();
        }
      );
      this.stop_link.click(
        function() {
          context.stop();
        }
      );
      $(document).keydown(
        function(e) {
          if(e.keyCode == 83) {
            // 's'
            if(context.running) {
              context.stop();
            } else {
              context.start();
            };
          };
        }
      );
      return this.controls;
    },
    disable: function() {
      this.enabled = false;
      this.stop();
      this.controls.hide();
    },
    enable: function() {
      this.enabled = true;
      this.controls.show();
    },
    toggle: function() {
      if(this.enabled) {
        this.disable();
      } else {
        this.enable();
      };
    },
    start: function() {
      if(this.running || !this.enabled) return false;
      var context = this;
      this.running = true;
      this.controls.addClass('ad-slideshow-running');
      this._next();
      this.fireCallback(this.settings.onStart);
      return true;
    },
    stop: function() {
      if(!this.running) return false;
      this.running = false;
      this.countdown.hide();
      this.controls.removeClass('ad-slideshow-running');
      clearInterval(this.countdown_interval);
      this.fireCallback(this.settings.onStop);
      return true;
    },
    _next: function() {
      var context = this;
      var pre = this.settings.countdown_prefix;
      var su = this.settings.countdown_sufix;
      clearInterval(context.countdown_interval);
      this.countdown.show().html(pre + (this.settings.speed / 1000) + su);
      var slide_timer = 0;
      this.countdown_interval = setInterval(
        function() {
          slide_timer += 1000;
          if(slide_timer >= context.settings.speed) {
            var whenNextIsShown = function() {
              // A check so the user hasn't stoped the slideshow during the
              // animation
              if(context.running) {
                context._next();
              };
              slide_timer = 0;
            };
            if(!context.nextimage_callback(whenNextIsShown)) {
              context.stop();
            };
            slide_timer = 0;
          };
          var sec = parseInt(context.countdown.text().replace(/[^0-9]/g, ''), 10);
          sec--;
          if(sec > 0) {
            context.countdown.html(pre + sec + su);
          };
        },
        1000
      );
    },
    fireCallback: function(fn) {
      if($.isFunction(fn)) {
        fn.call(this);
      };
    }
  };
})(jQuery);/**
 * Copyright (c) 2010 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.4
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(8($){$.3n.3o=8(b){5 c={2s:\'Z.3p\',1W:0,1X:q,11:0.7,2t:q,1b:3q,v:q,x:q,2u:B,2v:B,1Y:0,t:{1c:B,1Z:q,1d:3r,2w:\'3s\',2x:\'3t\',20:B,2y:\'(\',2z:\')\',2A:q,2B:q},2C:\'21-2D\',2E:B,1z:B,1A:{1e:q,2F:q,2G:q}};5 d=$.2H(q,c,b);4(b&&b.t){d.t=$.2H(q,c.t,b.t)};4(!d.t.1c){d.t.1Z=q};5 e=[];$(3).2I(8(){5 a=1B 22(3,d);e[e.J]=a});w e};8 2J(a,b,c){5 d=12(a.u(\'Q\'),10);4(b==\'C\'){5 e=\'-\'+3.D+\'z\';a.u(\'Q\',3.D+\'z\')}y{5 e=3.D+\'z\';a.u(\'Q\',\'-\'+3.D+\'z\')};4(c){c.u(\'1f\',\'-\'+c[0].1C+\'z\');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:\'-\'+3.R[0].1C+\'z\'},3.r.1b*2)};w{1g:{Q:e},1h:{Q:d}}};8 2K(a,b,c){5 d=12(a.u(\'C\'),10);4(b==\'C\'){5 e=\'-\'+3.K+\'z\';a.u(\'C\',3.K+\'z\')}y{5 e=3.K+\'z\';a.u(\'C\',\'-\'+3.K+\'z\')};4(c){c.u(\'1f\',\'-\'+c[0].1C+\'z\');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:\'-\'+3.R[0].1C+\'z\'},3.r.1b*2)};w{1g:{C:e},1h:{C:d}}};8 2L(a,b,c){5 d=a.v();5 e=a.x();5 f=12(a.u(\'C\'),10);5 g=12(a.u(\'Q\'),10);a.u({v:0,x:0,Q:3.D/2,C:3.K/2});w{1g:{v:0,x:0,Q:3.D/2,C:3.K/2},1h:{v:d,x:e,Q:g,C:f}}};8 2M(a,b,c){a.u(\'S\',0);w{1g:{S:0},1h:{S:1}}};8 2N(a,b,c){a.u(\'S\',0);w{1g:{S:0},1h:{S:1},1d:0}};8 22(a,b){3.1e(a,b)};22.2O={17:q,T:q,1D:q,V:q,Z:q,1r:q,N:q,1E:q,1F:q,1i:q,1j:q,t:q,K:0,D:0,O:0,18:q,R:q,1G:0,r:q,G:q,1k:q,1H:q,1e:8(b,c){5 d=3;3.17=$(b);3.r=c;3.2P();3.2Q();4(3.r.v){3.K=3.r.v;3.T.v(3.r.v);3.17.v(3.r.v)}y{3.K=3.T.v()};4(3.r.x){3.D=3.r.x;3.T.x(3.r.x)}y{3.D=3.T.x()};3.1G=3.V.v();3.O=0;3.18=q;3.R=q;3.1k=q;3.2R();4(3.r.2u){3.2S()};5 e=8(a){w d.1I(a)};3.t=1B 23(e,3.r.t);3.L.F(3.t.2T());4(3.r.t.1c){3.t.1c()}y{3.t.24()};4(3.r.2v){3.2U()};4(3.r.2E){3.2V()};5 f=12(3.r.1W,10);4(25.26.27&&25.26.27.3u(\'#s-W\')===0){f=25.26.27.2W(/[^0-9]+/g,\'\');4((f*1)!=f){f=3.r.1W}};3.1J(B);3.1s(f,8(){4(d.r.t.1Z){d.14(f+1);d.t.1t()}});3.P(3.r.1A.1e)},2Q:8(){3.1H={\'21-3v\':2J,\'21-2D\':2K,\'3w\':2L,\'3x\':2M,\'3y\':2N}},2P:8(){3.L=3.17.E(\'.s-L\');3.1D=$(\'<p H="s-3z"></p>\');3.L.F(3.1D);3.T=3.17.E(\'.s-W-17\');3.T.3A();3.V=3.17.E(\'.s-V\');3.N=3.V.E(\'.s-3B\');3.1r=$(\'<A H="s-1r"></A>\');3.Z=$(\'<19 H="s-Z" 1K="\'+3.r.2s+\'">\');3.T.F(3.Z);3.Z.15();$(1L.3C).F(3.1r)},1J:8(a){4(a){3.Z.1l()}y{3.Z.15()}},3D:8(a,b){4($.28(b)){3.1H[a]=b}},2R:8(){5 f=3;3.G=[];5 g=0;5 h=0;5 j=3.N.E(\'a\');5 k=j.J;4(3.r.11<1){j.E(\'19\').u(\'S\',3.r.11)};j.2I(8(i){5 a=$(3);5 b=a.I(\'2X\');5 c=a.E(\'19\');4(!f.29(c[0])){c.2Y(8(){g+=3.1u.1u.2a;h++})}y{g+=c[0].1u.1u.2a;h++};a.1M(\'s-1N\'+i);a.1v(8(){f.1s(i);f.t.M();w q}).2Z(8(){4(!$(3).1w(\'.s-1m\')&&f.r.11<1){$(3).E(\'19\').1O(1P,1)};f.14(i)},8(){4(!$(3).1w(\'.s-1m\')&&f.r.11<1){$(3).E(\'19\').1O(1P,f.r.11)}});5 a=q;4(c.1n(\'s-1x\')){a=c.1n(\'s-1x\')}y 4(c.I(\'2b\')&&c.I(\'2b\').J){a=c.I(\'2b\')};5 d=q;4(c.1n(\'s-1o\')){d=c.1n(\'s-1o\')}y 4(c.I(\'2c\')&&c.I(\'2c\').J){d=c.I(\'2c\')};5 e=q;4(c.1n(\'s-U\')){e=c.1n(\'s-U\')}y 4(c.I(\'U\')&&c.I(\'U\').J){e=c.I(\'U\')};f.G[i]={1N:c.I(\'1K\'),W:b,2d:q,1p:q,1o:d,U:e,1q:q,1x:a}});5 l=2e(8(){4(k==h){f.V.E(\'.s-1N-3E\').u(\'v\',g+\'z\');1Q(l)}},3F)},2V:8(){5 a=3;$(1L).31(8(e){4(e.2f==39){a.1I();a.t.M()}y 4(e.2f==37){a.2g();a.t.M()}})},2S:8(){3.1i=$(\'<A H="s-2h"><A H="s-2h-W"></A></A>\');3.1j=$(\'<A H="s-32"><A H="s-32-W"></A></A>\');3.T.F(3.1i);3.T.F(3.1j);5 a=3;3.1j.33(3.1i).3G(8(e){$(3).u(\'x\',a.D);$(3).E(\'A\').1l()}).3H(8(e){$(3).E(\'A\').15()}).1v(8(){4($(3).1w(\'.s-2h\')){a.1I();a.t.M()}y{a.2g();a.t.M()}}).E(\'A\').u(\'S\',0.7)},2U:8(){5 c=3;3.1F=$(\'<A H="s-2i"></A>\');3.1E=$(\'<A H="s-3I"></A>\');3.V.F(3.1F);3.V.34(3.1E);5 d=0;5 e=q;$(3.1E).33(3.1F).1v(8(){5 a=c.1G-3J;4(c.r.1Y>0){5 a=c.r.1Y};4($(3).1w(\'.s-2i\')){5 b=c.N.1a()+a}y{5 b=c.N.1a()-a};4(c.r.t.20){c.t.M()};c.N.13({1a:b+\'z\'});w q}).u(\'S\',0.6).2Z(8(){5 b=\'C\';4($(3).1w(\'.s-2i\')){b=\'2j\'};e=2e(8(){d++;4(d>30&&c.r.t.20){c.t.M()};5 a=c.N.1a()+1;4(b==\'C\'){a=c.N.1a()-1};c.N.1a(a)},10);$(3).u(\'S\',1)},8(){d=0;1Q(e);$(3).u(\'S\',0.6)})},2k:8(){3.1D.2l((3.O+1)+\' / \'+3.G.J);4(!3.r.1z){3.1j.1l().u(\'x\',3.D);3.1i.1l().u(\'x\',3.D);4(3.O==(3.G.J-1)){3.1i.15()};4(3.O==0){3.1j.15()}};3.P(3.r.1A.2F)},35:8(a,b){4(b>3.D){5 c=a/b;b=3.D;a=3.D*c};4(a>3.K){5 c=b/a;a=3.K;b=3.K*c};w{v:a,x:b}},36:8(a,b,c){a.u(\'Q\',\'38\');4(c<3.D){5 d=3.D-c;a.u(\'Q\',(d/2)+\'z\')};a.u(\'C\',\'38\');4(b<3.K){5 d=3.K-b;a.u(\'C\',(d/2)+\'z\')}},3a:8(a){5 b=q;4(a.1o.J||a.U.J){5 c=\'\';4(a.U.J){c=\'<3b H="s-3c-U">\'+a.U+\'</3b>\'};5 b=\'\';4(a.1o.J){b=\'<16>\'+a.1o+\'</16>\'};b=$(\'<p H="s-W-3c">\'+c+b+\'</p>\')};w b},1s:8(a,b){4(3.G[a]&&!3.1k){5 c=3;5 d=3.G[a];3.1k=B;4(!d.1p){3.1J(B);3.14(a,8(){c.1J(q);c.2m(a,b)})}y{3.2m(a,b)}}},2m:8(a,b){4(3.G[a]){5 c=3;5 d=3.G[a];5 e=$(1L.3K(\'A\')).1M(\'s-W\');5 f=$(1B 3d()).I(\'1K\',d.W);4(d.1x){5 g=$(\'<a 2X="\'+d.1x+\'" 3L="3M"></a>\');g.F(f);e.F(g)}y{e.F(f)}3.T.34(e);5 h=3.35(d.1q.v,d.1q.x);f.I(\'v\',h.v);f.I(\'x\',h.x);e.u({v:h.v+\'z\',x:h.x+\'z\'});3.36(e,h.v,h.x);5 i=3.3a(d,e);4(i){4(!3.r.1X){e.F(i);5 j=h.v-12(i.u(\'3e-C\'),10)-12(i.u(\'3e-2j\'),10);i.u(\'v\',j+\'z\')}y{3.r.1X.F(i)}};3.3f(3.V.E(\'.s-1N\'+a));5 k=\'2j\';4(3.O<a){k=\'C\'};3.P(3.r.1A.2G);4(3.18||3.r.2t){5 l=3.r.1b;5 m=\'3N\';5 n=3.1H[3.r.2C].2n(3,e,k,i);4(1R n.1d!=\'1S\'){l=n.1d};4(1R n.3g!=\'1S\'){m=n.3g};4(3.18){5 o=3.18;5 p=3.R;o.13(n.1g,l,m,8(){o.3h();4(p)p.3h()})};e.13(n.1h,l,m,8(){c.O=a;c.18=e;c.R=i;c.1k=q;c.2k();c.P(b)})}y{3.O=a;3.18=e;c.R=i;3.1k=q;c.2k();3.P(b)}}},3i:8(){4(3.O==(3.G.J-1)){4(!3.r.1z){w q};5 a=0}y{5 a=3.O+1};w a},1I:8(a){5 b=3.3i();4(b===q)w q;3.14(b+1);3.1s(b,a);w B},3j:8(){4(3.O==0){4(!3.r.1z){w q};5 a=3.G.J-1}y{5 a=3.O-1};w a},2g:8(a){5 b=3.3j();4(b===q)w q;3.14(b-1);3.1s(b,a);w B},3O:8(){5 a=3;5 i=0;8 2o(){4(i<a.G.J){i++;a.14(i,2o)}};a.14(i,2o)},14:8(a,b){4(3.G[a]){5 c=3.G[a];4(!3.G[a].1p){5 d=$(1B 3d());d.I(\'1K\',c.W);4(!3.29(d[0])){3.1r.F(d);5 e=3;d.2Y(8(){c.1p=B;c.1q={v:3.v,x:3.x};e.P(b)}).2d(8(){c.2d=B;c.1p=q;c.1q=q})}y{c.1p=B;c.1q={v:d[0].v,x:d[0].x};3.P(b)}}y{3.P(b)}}},29:8(a){4(1R a.3k!=\'1S\'&&!a.3k){w q};4(1R a.3l!=\'1S\'&&a.3l==0){w q};w B},3f:8(a){3.N.E(\'.s-1m\').3m(\'s-1m\');a.1M(\'s-1m\');4(3.r.11<1){3.N.E(\'a:3P(.s-1m) 19\').1O(1P,3.r.11);a.E(\'19\').1O(1P,1)};5 b=a[0].1u.3Q;b-=(3.1G/2)-(a[0].2a/2);3.N.13({1a:b+\'z\'})},P:8(a){4($.28(a)){a.2n(3)}}};8 23(a,b){3.1e(a,b)};23.2O={1T:q,1U:q,X:q,L:q,r:q,2p:q,1y:q,Y:q,1V:q,1e:8(a,b){5 c=3;3.2p=a;3.r=b},2T:8(){3.1T=$(\'<16 H="s-t-1t">\'+3.r.2w+\'</16>\');3.1U=$(\'<16 H="s-t-M">\'+3.r.2x+\'</16>\');3.X=$(\'<16 H="s-t-X"></16>\');3.L=$(\'<A H="s-t-L"></A>\');3.L.F(3.1T).F(3.1U).F(3.X);3.X.15();5 a=3;3.1T.1v(8(){a.1t()});3.1U.1v(8(){a.M()});$(1L).31(8(e){4(e.2f==3R){4(a.Y){a.M()}y{a.1t()}}});w 3.L},24:8(){3.1y=q;3.M();3.L.15()},1c:8(){3.1y=B;3.L.1l()},3S:8(){4(3.1y){3.24()}y{3.1c()}},1t:8(){4(3.Y||!3.1y)w q;5 a=3;3.Y=B;3.L.1M(\'s-t-Y\');3.2q();3.P(3.r.2A);w B},M:8(){4(!3.Y)w q;3.Y=q;3.X.15();3.L.3m(\'s-t-Y\');1Q(3.1V);3.P(3.r.2B);w B},2q:8(){5 c=3;5 d=3.r.2y;5 e=3.r.2z;1Q(c.1V);3.X.1l().2l(d+(3.r.1d/2r)+e);5 f=0;3.1V=2e(8(){f+=2r;4(f>=c.r.1d){5 a=8(){4(c.Y){c.2q()};f=0};4(!c.2p(a)){c.M()};f=0};5 b=12(c.X.3T().2W(/[^0-9]/g,\'\'),10);b--;4(b>0){c.X.2l(d+b+e)}},2r)},P:8(a){4($.28(a)){a.2n(3)}}}})(3U);',62,243,'|||this|if|var|||function||||||||||||||||||false|settings|ad|slideshow|css|width|return|height|else|px|div|true|left|image_wrapper_height|find|append|images|class|attr|length|image_wrapper_width|controls|stop|thumbs_wrapper|current_index|fireCallback|top|current_description|opacity|image_wrapper|title|nav|image|countdown|running|loader||thumb_opacity|parseInt|animate|preloadImage|hide|span|wrapper|current_image|img|scrollLeft|animation_speed|enable|speed|init|bottom|old_image|new_image|next_link|prev_link|in_transition|show|active|data|desc|preloaded|size|preloads|showImage|start|parentNode|click|is|link|enabled|cycle|callbacks|new|offsetHeight|gallery_info|scroll_back|scroll_forward|nav_display_width|animations|nextImage|loading|src|document|addClass|thumb|fadeTo|300|clearInterval|typeof|undefined|start_link|stop_link|countdown_interval|start_at_index|description_wrapper|scroll_jump|autostart|stop_on_scroll|slide|AdGallery|AdGallerySlideshow|disable|window|location|hash|isFunction|isImageLoaded|offsetWidth|longdesc|alt|error|setInterval|keyCode|prevImage|next|forward|right|_afterShow|html|_showWhenLoaded|call|preloadNext|nextimage_callback|_next|1000|loader_image|animate_first_image|display_next_and_prev|display_back_and_forward|start_label|stop_label|countdown_prefix|countdown_sufix|onStart|onStop|effect|hori|enable_keyboard_move|afterImageVisible|beforeImageVisible|extend|each|VerticalSlideAnimation|HorizontalSlideAnimation|ResizeAnimation|FadeAnimation|NoneAnimation|prototype|setupElements|setupAnimations|findImages|initNextAndPrev|create|initBackAndForward|initKeyEvents|replace|href|load|hover||keydown|prev|add|prepend|_getContainedImageSize|_centerImage||0px||_getDescription|strong|description|Image|padding|highLightThumb|easing|remove|nextIndex|prevIndex|complete|naturalWidth|removeClass|fn|adGallery|gif|400|5000|Start|Stop|indexOf|vert|resize|fade|none|info|empty|thumbs|body|addAnimation|list|100|mouseover|mouseout|back|50|createElement|target|_blank|swing|preloadAll|not|offsetLeft|83|toggle|text|jQuery'.split('|'),0,{}))/**
 * jQuery Galleriffic plugin
 *
 * Copyright (c) 2008 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Much thanks to primary contributer Ponticlaro (http://www.ponticlaro.com)
 */
;(function($) {
	// Globally keep track of all images by their unique hash.  Each item is an image data object.
	var allImages = {};
	var imageCounter = 0;

	// Galleriffic static class
	$.galleriffic = {
		version: '2.0.1',

		// Strips invalid characters and any leading # characters
		normalizeHash: function(hash) {
			return hash.replace(/^.*#/, '').replace(/\?.*$/, '');
		},

		getImage: function(hash) {
			if (!hash)
				return undefined;

			hash = $.galleriffic.normalizeHash(hash);
			return allImages[hash];
		},

		// Global function that looks up an image by its hash and displays the image.
		// Returns false when an image is not found for the specified hash.
		// @param {String} hash This is the unique hash value assigned to an image.
		gotoImage: function(hash) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			gallery.gotoImage(imageData);
			
			return true;
		},

		// Removes an image from its respective gallery by its hash.
		// Returns false when an image is not found for the specified hash or the
		// specified owner gallery does match the located images gallery.
		// @param {String} hash This is the unique hash value assigned to an image.
		// @param {Object} ownerGallery (Optional) When supplied, the located images
		// gallery is verified to be the same as the specified owning gallery before
		// performing the remove operation.
		removeImageByHash: function(hash, ownerGallery) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			if (ownerGallery && ownerGallery != gallery)
				return false;

			return gallery.removeImageByIndex(imageData.index);
		}
	};

	var defaults = {
		delay:                     3000,
		numThumbs:                 20,
		preloadAhead:              40, // Set to -1 to preload all images
		enableTopPager:            false,
		enableBottomPager:         true,
		maxPagesToShow:            7,
		imageContainerSel:         '',
		captionContainerSel:       '',
		controlsContainerSel:      '',
		loadingContainerSel:       '',
		renderSSControls:          true,
		renderNavControls:         true,
		playLinkText:              'Play',
		pauseLinkText:             'Pause',
		prevLinkText:              'Previous',
		nextLinkText:              'Next',
		nextPageLinkText:          'Next &rsaquo;',
		prevPageLinkText:          '&lsaquo; Prev',
		enableHistory:             false,
		enableKeyboardNavigation:  true,
		autoStart:                 false,
		syncTransitions:           false,
		defaultTransitionDuration: 1000,
		onSlideChange:             undefined, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
		onTransitionOut:           undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
		onTransitionIn:            undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
		onPageTransitionOut:       undefined, // accepts a delegate like such: function(callback) { ... }
		onPageTransitionIn:        undefined, // accepts a delegate like such: function() { ... }
		onImageAdded:              undefined, // accepts a delegate like such: function(imageData, $li) { ... }
		onImageRemoved:            undefined  // accepts a delegate like such: function(imageData, $li) { ... }
	};

	// Primary Galleriffic initialization function that should be called on the thumbnail container.
	$.fn.galleriffic = function(settings) {
		//  Extend Gallery Object
		$.extend(this, {
			// Returns the version of the script
			version: $.galleriffic.version,

			// Current state of the slideshow
			isSlideshowRunning: false,
			slideshowTimeout: undefined,

			// This function is attached to the click event of generated hyperlinks within the gallery
			clickHandler: function(e, link) {
				this.pause();

				if (!this.enableHistory) {
					// The href attribute holds the unique hash for an image
					var hash = $.galleriffic.normalizeHash($(link).attr('href'));
					$.galleriffic.gotoImage(hash);
					e.preventDefault();
				}
			},

			// Appends an image to the end of the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			appendImage: function(listItem) {
				this.addImage(listItem, false, false);
				return this;
			},

			// Inserts an image into the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			insertImage: function(listItem, position) {
				this.addImage(listItem, false, true, position);
				return this;
			},

			// Adds an image to the gallery and optionally inserts/appends it to the DOM (thumbExists)
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Boolean} thumbExists Specifies whether the thumbnail already exists in the DOM or if it needs to be added.
			// @param {Boolean} insert Specifies whether the the image is appended to the end or inserted into the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			addImage: function(listItem, thumbExists, insert, position) {
				var $li = ( typeof listItem === "string" ) ? $(listItem) : listItem;				
				var $aThumb = $li.find('a.thumb');
				var slideUrl = $aThumb.attr('href');
				var title = $aThumb.attr('title');
				var $caption = $li.find('.caption').remove();
				var hash = $aThumb.attr('name');

				// Increment the image counter
				imageCounter++;

				// Autogenerate a hash value if none is present or if it is a duplicate
				if (!hash || allImages[''+hash]) {
					hash = imageCounter;
				}

				// Set position to end when not specified
				if (!insert)
					position = this.data.length;
				
				var imageData = {
					title:title,
					slideUrl:slideUrl,
					caption:$caption,
					hash:hash,
					gallery:this,
					index:position
				};

				// Add the imageData to this gallery's array of images
				if (insert) {
					this.data.splice(position, 0, imageData);

					// Reset index value on all imageData objects
					this.updateIndices(position);
				}
				else {
					this.data.push(imageData);
				}

				var gallery = this;

				// Add the element to the DOM
				if (!thumbExists) {
					// Update thumbs passing in addition post transition out handler
					this.updateThumbs(function() {
						var $thumbsUl = gallery.find('ul.thumbs');
						if (insert)
							$thumbsUl.children(':eq('+position+')').before($li);
						else
							$thumbsUl.append($li);
						
						if (gallery.onImageAdded)
							gallery.onImageAdded(imageData, $li);
					});
				}

				// Register the image globally
				allImages[''+hash] = imageData;

				// Setup attributes and click handler
				$aThumb.attr('rel', 'history')
					.attr('href', '#'+hash)
					.removeAttr('name')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});

				return this;
			},

			// Removes an image from the gallery based on its index.
			// Returns false when the index is out of range.
			removeImageByIndex: function(index) {
				if (index < 0 || index >= this.data.length)
					return false;
				
				var imageData = this.data[index];
				if (!imageData)
					return false;
				
				this.removeImage(imageData);
				
				return true;
			},

			// Convenience method that simply calls the global removeImageByHash method.
			removeImageByHash: function(hash) {
				return $.galleriffic.removeImageByHash(hash, this);
			},

			// Removes an image from the gallery.
			removeImage: function(imageData) {
				var index = imageData.index;
				
				// Remove the image from the gallery data array
				this.data.splice(index, 1);
				
				// Remove the global registration
				delete allImages[''+imageData.hash];
				
				// Remove the image's list item from the DOM
				this.updateThumbs(function() {
					var $li = gallery.find('ul.thumbs')
						.children(':eq('+index+')')
						.remove();

					if (gallery.onImageRemoved)
						gallery.onImageRemoved(imageData, $li);
				});

				// Update each image objects index value
				this.updateIndices(index);

				return this;
			},

			// Updates the index values of the each of the images in the gallery after the specified index
			updateIndices: function(startIndex) {
				for (i = startIndex; i < this.data.length; i++) {
					this.data[i].index = i;
				}
				
				return this;
			},

			// Scraped the thumbnail container for thumbs and adds each to the gallery
			initializeThumbs: function() {
				this.data = [];
				var gallery = this;

				this.find('ul.thumbs > li').each(function(i) {
					gallery.addImage($(this), true, false);
				});

				return this;
			},

			isPreloadComplete: false,

			// Initalizes the image preloader
			preloadInit: function() {
				if (this.preloadAhead == 0) return this;
				
				this.preloadStartIndex = this.currentImage.index;
				var nextIndex = this.getNextIndex(this.preloadStartIndex);
				return this.preloadRecursive(this.preloadStartIndex, nextIndex);
			},

			// Changes the location in the gallery the preloader should work
			// @param {Integer} index The index of the image where the preloader should restart at.
			preloadRelocate: function(index) {
				// By changing this startIndex, the current preload script will restart
				this.preloadStartIndex = index;
				return this;
			},

			// Recursive function that performs the image preloading
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadRecursive: function(startIndex, currentIndex) {
				// Check if startIndex has been relocated
				if (startIndex != this.preloadStartIndex) {
					var nextIndex = this.getNextIndex(this.preloadStartIndex);
					return this.preloadRecursive(this.preloadStartIndex, nextIndex);
				}

				var gallery = this;

				// Now check for preloadAhead count
				var preloadCount = currentIndex - startIndex;
				if (preloadCount < 0)
					preloadCount = this.data.length-1-startIndex+currentIndex;
				if (this.preloadAhead >= 0 && preloadCount > this.preloadAhead) {
					// Do this in order to keep checking for relocated start index
					setTimeout(function() { gallery.preloadRecursive(startIndex, currentIndex); }, 500);
					return this;
				}

				var imageData = this.data[currentIndex];
				if (!imageData)
					return this;

				// If already loaded, continue
				if (imageData.image)
					return this.preloadNext(startIndex, currentIndex); 
				
				// Preload the image
				var image = new Image();
				
				image.onload = function() {
					imageData.image = this;
					gallery.preloadNext(startIndex, currentIndex);
				};

				image.alt = imageData.title;
				image.src = imageData.slideUrl;

				return this;
			},
			
			// Called by preloadRecursive in order to preload the next image after the previous has loaded.
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadNext: function(startIndex, currentIndex) {
				var nextIndex = this.getNextIndex(currentIndex);
				if (nextIndex == startIndex) {
					this.isPreloadComplete = true;
				} else {
					// Use setTimeout to free up thread
					var gallery = this;
					setTimeout(function() { gallery.preloadRecursive(startIndex, nextIndex); }, 100);
				}

				return this;
			},

			// Safe way to get the next image index relative to the current image.
			// If the current image is the last, returns 0
			getNextIndex: function(index) {
				var nextIndex = index+1;
				if (nextIndex >= this.data.length)
					nextIndex = 0;
				return nextIndex;
			},

			// Safe way to get the previous image index relative to the current image.
			// If the current image is the first, return the index of the last image in the gallery.
			getPrevIndex: function(index) {
				var prevIndex = index-1;
				if (prevIndex < 0)
					prevIndex = this.data.length-1;
				return prevIndex;
			},

			// Pauses the slideshow
			pause: function() {
				this.isSlideshowRunning = false;
				if (this.slideshowTimeout) {
					clearTimeout(this.slideshowTimeout);
					this.slideshowTimeout = undefined;
				}

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('play')
						.attr('title', this.playLinkText)
						.attr('href', '#play')
						.html(this.playLinkText);
				}
				
				return this;
			},

			// Plays the slideshow
			play: function() {
				this.isSlideshowRunning = true;

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('pause')
						.attr('title', this.pauseLinkText)
						.attr('href', '#pause')
						.html(this.pauseLinkText);
				}

				if (!this.slideshowTimeout) {
					var gallery = this;
					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Toggles the state of the slideshow (playing/paused)
			toggleSlideshow: function() {
				if (this.isSlideshowRunning)
					this.pause();
				else
					this.play();

				return this;
			},

			// Advances the slideshow to the next image and delegates navigation to the
			// history plugin when history is enabled
			// enableHistory is true
			ssAdvance: function() {
				if (this.isSlideshowRunning)
					this.next(true);

				return this;
			},

			// Advances the gallery to the next image.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.  
			next: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getNextIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the previous image in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previous: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getPrevIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the next page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			nextPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				var lastPage = this.getNumPages() - 1;
				if (page < lastPage) {
					var startIndex = page * this.numThumbs;
					var nextPage = startIndex + this.numThumbs;
					this.gotoIndex(nextPage, dontPause, bypassHistory);
				}

				return this;
			},

			// Navigates to the previous page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previousPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				if (page > 0) {
					var startIndex = page * this.numThumbs;
					var prevPage = startIndex - this.numThumbs;				
					this.gotoIndex(prevPage, dontPause, bypassHistory);
				}
				
				return this;
			},

			// Navigates to the image at the specified index in the gallery
			// @param {Integer} index The index of the image in the gallery to display.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			gotoIndex: function(index, dontPause, bypassHistory) {
				if (!dontPause)
					this.pause();
				
				if (index < 0) index = 0;
				else if (index >= this.data.length) index = this.data.length-1;
				
				var imageData = this.data[index];
				
				if (!bypassHistory && this.enableHistory)
					$.historyLoad(String(imageData.hash));  // At the moment, historyLoad only accepts string arguments
				else
					this.gotoImage(imageData);

				return this;
			},

			// This function is garaunteed to be called anytime a gallery slide changes.
			// @param {Object} imageData An object holding the image metadata of the image to navigate to.
			gotoImage: function(imageData) {
				var index = imageData.index;

				if (this.onSlideChange)
					this.onSlideChange(this.currentImage.index, index);
				
				this.currentImage = imageData;
				this.preloadRelocate(index);
				
				this.refresh();
				
				return this;
			},

			// Returns the default transition duration value.  The value is halved when not
			// performing a synchronized transition.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			getDefaultTransitionDuration: function(isSync) {
				if (isSync)
					return this.defaultTransitionDuration;
				return this.defaultTransitionDuration / 2;
			},

			// Rebuilds the slideshow image and controls and performs transitions
			refresh: function() {
				var imageData = this.currentImage;
				if (!imageData)
					return this;

				var index = imageData.index;

				// Update Controls
				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.nav-controls a.prev').attr('href', '#'+this.data[this.getPrevIndex(index)].hash).end()
						.find('div.nav-controls a.next').attr('href', '#'+this.data[this.getNextIndex(index)].hash);
				}

				var previousSlide = this.$imageContainer.find('span.current').addClass('previous').removeClass('current');
				var previousCaption = 0;

				if (this.$captionContainer) {
					previousCaption = this.$captionContainer.find('span.current').addClass('previous').removeClass('current');
				}

				// Perform transitions simultaneously if syncTransitions is true and the next image is already preloaded
				var isSync = this.syncTransitions && imageData.image;

				// Flag we are transitioning
				var isTransitioning = true;
				var gallery = this;

				var transitionOutCallback = function() {
					// Flag that the transition has completed
					isTransitioning = false;

					// Remove the old slide
					previousSlide.remove();

					// Remove old caption
					if (previousCaption)
						previousCaption.remove();

					if (!isSync) {
						if (imageData.image && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						} else {
							// Show loading container
							if (gallery.$loadingContainer) {
								gallery.$loadingContainer.show();
							}
						}
					}
				};

				if (previousSlide.length == 0) {
					// For the first slide, the previous slide will be empty, so we will call the callback immediately
					transitionOutCallback();
				} else {
					if (this.onTransitionOut) {
						this.onTransitionOut(previousSlide, previousCaption, isSync, transitionOutCallback);
					} else {
						previousSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0, transitionOutCallback);
						if (previousCaption)
							previousCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0);
					}
				}

				// Go ahead and begin transitioning in of next image
				if (isSync)
					this.buildImage(imageData, isSync);

				if (!imageData.image) {
					var image = new Image();
					
					// Wire up mainImage onload event
					image.onload = function() {
						imageData.image = this;

						// Only build image if the out transition has completed and we are still on the same image hash
						if (!isTransitioning && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						}
					};

					// set alt and src
					image.alt = imageData.title;
					image.src = imageData.slideUrl;
				}

				// This causes the preloader (if still running) to relocate out from the currentIndex
				this.relocatePreload = true;

				return this.syncThumbs();
			},

			// Called by the refresh method after the previous image has been transitioned out or at the same time
			// as the out transition when performing a synchronous transition.
			// @param {Object} imageData An object holding the image metadata of the image to build.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			buildImage: function(imageData, isSync) {
				var gallery = this;
				var nextIndex = this.getNextIndex(imageData.index);

				// Construct new hidden span for the image
				var newSlide = this.$imageContainer
					.append('<span class="image-wrapper current"><a class="advance-link" rel="history" href="#'+this.data[nextIndex].hash+'" title="'+imageData.title+'">&nbsp;</a></span>')
					.find('span.current').css('opacity', '0');
				
				newSlide.find('a')
					.append(imageData.image)
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
				
				var newCaption = 0;
				if (this.$captionContainer) {
					// Construct new hidden caption for the image
					newCaption = this.$captionContainer
						.append('<span class="image-caption current"></span>')
						.find('span.current').css('opacity', '0')
						.append(imageData.caption);
				}

				// Hide the loading conatiner
				if (this.$loadingContainer) {
					this.$loadingContainer.hide();
				}

				// Transition in the new image
				if (this.onTransitionIn) {
					this.onTransitionIn(newSlide, newCaption, isSync);
				} else {
					newSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
					if (newCaption)
						newCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
				}
				
				if (this.isSlideshowRunning) {
					if (this.slideshowTimeout)
						clearTimeout(this.slideshowTimeout);

					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Returns the current page index that should be shown for the currentImage
			getCurrentPage: function() {
				return Math.floor(this.currentImage.index / this.numThumbs);
			},

			// Applies the selected class to the current image's corresponding thumbnail.
			// Also checks if the current page has changed and updates the displayed page of thumbnails if necessary.
			syncThumbs: function() {
				var page = this.getCurrentPage();
				if (page != this.displayedPage)
					this.updateThumbs();

				// Remove existing selected class and add selected class to new thumb
				var $thumbs = this.find('ul.thumbs').children();
				$thumbs.filter('.selected').removeClass('selected');
				$thumbs.eq(this.currentImage.index).addClass('selected');

				return this;
			},

			// Performs transitions on the thumbnails container and updates the set of
			// thumbnails that are to be displayed and the navigation controls.
			// @param {Delegate} postTransitionOutHandler An optional delegate that is called after
			// the thumbnails container has transitioned out and before the thumbnails are rebuilt.
			updateThumbs: function(postTransitionOutHandler) {
				var gallery = this;
				var transitionOutCallback = function() {
					// Call the Post-transition Out Handler
					if (postTransitionOutHandler)
						postTransitionOutHandler();
					
					gallery.rebuildThumbs();

					// Transition In the thumbsContainer
					if (gallery.onPageTransitionIn)
						gallery.onPageTransitionIn();
					else
						gallery.show();
				};

				// Transition Out the thumbsContainer
				if (this.onPageTransitionOut) {
					this.onPageTransitionOut(transitionOutCallback);
				} else {
					this.hide();
					transitionOutCallback();
				}

				return this;
			},

			// Updates the set of thumbnails that are to be displayed and the navigation controls.
			rebuildThumbs: function() {
				var needsPagination = this.data.length > this.numThumbs;

				// Rebuild top pager
				if (this.enableTopPager) {
					var $topPager = this.find('div.top');
					if ($topPager.length == 0)
						$topPager = this.prepend('<div class="top pagination"></div>').find('div.top');
					else
						$topPager.empty();

					if (needsPagination)
						this.buildPager($topPager);
				}

				// Rebuild bottom pager
				if (this.enableBottomPager) {
					var $bottomPager = this.find('div.bottom');
					if ($bottomPager.length == 0)
						$bottomPager = this.append('<div class="bottom pagination"></div>').find('div.bottom');
					else
						$bottomPager.empty();

					if (needsPagination)
						this.buildPager($bottomPager);
				}

				var page = this.getCurrentPage();
				var startIndex = page*this.numThumbs;
				var stopIndex = startIndex+this.numThumbs-1;
				if (stopIndex >= this.data.length)
					stopIndex = this.data.length-1;

				// Show/Hide thumbs
				var $thumbsUl = this.find('ul.thumbs');
				$thumbsUl.find('li').each(function(i) {
					var $li = $(this);
					if (i >= startIndex && i <= stopIndex) {
						$li.show();
					} else {
						$li.hide();
					}
				});

				this.displayedPage = page;

				// Remove the noscript class from the thumbs container ul
				$thumbsUl.removeClass('noscript');
				
				return this;
			},

			// Returns the total number of pages required to display all the thumbnails.
			getNumPages: function() {
				return Math.ceil(this.data.length/this.numThumbs);
			},

			// Rebuilds the pager control in the specified matched element.
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			buildPager: function(pager) {
				var gallery = this;
				var numPages = this.getNumPages();
				var page = this.getCurrentPage();
				var startIndex = page * this.numThumbs;
				var pagesRemaining = this.maxPagesToShow - 1;
				
				var pageNum = page - Math.floor((this.maxPagesToShow - 1) / 2) + 1;
				if (pageNum > 0) {
					var remainingPageCount = numPages - pageNum;
					if (remainingPageCount < pagesRemaining) {
						pageNum = pageNum - (pagesRemaining - remainingPageCount);
					}
				}

				if (pageNum < 0) {
					pageNum = 0;
				}

				// Prev Page Link
				if (page > 0) {
					var prevPage = startIndex - this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[prevPage].hash+'" title="'+this.prevPageLinkText+'">'+this.prevPageLinkText+'</a>');
				}

				// Create First Page link if needed
				if (pageNum > 0) {
					this.buildPageLink(pager, 0, numPages);
					if (pageNum > 1)
						pager.append('<span class="ellipsis">&hellip;</span>');
					
					pagesRemaining--;
				}

				// Page Index Links
				while (pagesRemaining > 0) {
					this.buildPageLink(pager, pageNum, numPages);
					pagesRemaining--;
					pageNum++;
				}

				// Create Last Page link if needed
				if (pageNum < numPages) {
					var lastPageNum = numPages - 1;
					if (pageNum < lastPageNum)
						pager.append('<span class="ellipsis">&hellip;</span>');

					this.buildPageLink(pager, lastPageNum, numPages);
				}

				// Next Page Link
				var nextPage = startIndex + this.numThumbs;
				if (nextPage < this.data.length) {
					pager.append('<a rel="history" href="#'+this.data[nextPage].hash+'" title="'+this.nextPageLinkText+'">'+this.nextPageLinkText+'</a>');
				}

				pager.find('a').click(function(e) {
					gallery.clickHandler(e, this);
				});

				return this;
			},

			// Builds a single page link within a pager.  This function is called by buildPager
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			// @param {Integer} pageNum The page number of the page link to build.
			// @param {Integer} numPages The total number of pages required to display all thumbnails.
			buildPageLink: function(pager, pageNum, numPages) {
				var pageLabel = pageNum + 1;
				var currentPage = this.getCurrentPage();
				if (pageNum == currentPage)
					pager.append('<span class="current">'+pageLabel+'</span>');
				else if (pageNum < numPages) {
					var imageIndex = pageNum*this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[imageIndex].hash+'" title="'+pageLabel+'">'+pageLabel+'</a>');
				}
				
				return this;
			}
		});

		// Now initialize the gallery
		$.extend(this, defaults, settings);
		
		// Verify the history plugin is available
		if (this.enableHistory && !$.historyInit)
			this.enableHistory = false;
		
		// Select containers
		if (this.imageContainerSel) this.$imageContainer = $(this.imageContainerSel);
		if (this.captionContainerSel) this.$captionContainer = $(this.captionContainerSel);
		if (this.loadingContainerSel) this.$loadingContainer = $(this.loadingContainerSel);

		// Initialize the thumbails
		this.initializeThumbs();
		
		if (this.maxPagesToShow < 3)
			this.maxPagesToShow = 3;

		this.displayedPage = -1;
		this.currentImage = this.data[0];
		var gallery = this;

		// Hide the loadingContainer
		if (this.$loadingContainer)
			this.$loadingContainer.hide();

		// Setup controls
		if (this.controlsContainerSel) {
			this.$controlsContainer = $(this.controlsContainerSel).empty();
			
			if (this.renderSSControls) {
				if (this.autoStart) {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#pause" class="pause" title="'+this.pauseLinkText+'">'+this.pauseLinkText+'</a></div>');
				} else {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#play" class="play" title="'+this.playLinkText+'">'+this.playLinkText+'</a></div>');
				}

				this.$controlsContainer.find('div.ss-controls a')
					.click(function(e) {
						gallery.toggleSlideshow();
						e.preventDefault();
						return false;
					});
			}
		
			if (this.renderNavControls) {
				this.$controlsContainer
					.append('<div class="nav-controls"><a class="prev" rel="history" title="'+this.prevLinkText+'">'+this.prevLinkText+'</a><a class="next" rel="history" title="'+this.nextLinkText+'">'+this.nextLinkText+'</a></div>')
					.find('div.nav-controls a')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
			}
		}

		var initFirstImage = !this.enableHistory || !location.hash;
		if (this.enableHistory && location.hash) {
			var hash = $.galleriffic.normalizeHash(location.hash);
			var imageData = allImages[hash];
			if (!imageData)
				initFirstImage = true;
		}

		// Setup gallery to show the first image
		if (initFirstImage)
			this.gotoIndex(0, false, true);

		// Setup Keyboard Navigation
		if (this.enableKeyboardNavigation) {
			$(document).keydown(function(e) {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
				switch(key) {
					case 32: // space
						gallery.next();
						e.preventDefault();
						break;
					case 33: // Page Up
						gallery.previousPage();
						e.preventDefault();
						break;
					case 34: // Page Down
						gallery.nextPage();
						e.preventDefault();
						break;
					case 35: // End
						gallery.gotoIndex(gallery.data.length-1);
						e.preventDefault();
						break;
					case 36: // Home
						gallery.gotoIndex(0);
						e.preventDefault();
						break;
					case 37: // left arrow
						gallery.previous();
						e.preventDefault();
						break;
					case 39: // right arrow
						gallery.next();
						e.preventDefault();
						break;
				}
			});
		}

		// Auto start the slideshow
		if (this.autoStart)
			this.play();

		// Kickoff Image Preloader after 1 second
		setTimeout(function() { gallery.preloadInit(); }, 1000);

		return this;
	};
})(jQuery);
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
/**
 * jQuery lightBox plugin
 * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
 * and adapted to me for use like a plugin from jQuery.
 * @name jquery-lightbox-0.5.js
 * @author Leandro Vieira Pinho - http://leandrovieira.com
 * @version 0.5
 * @date April 11, 2008
 * @category jQuery plugin
 * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
 * @license CCAttribution-ShareAlike 2.5 Brazil - http://creativecommons.org/licenses/by-sa/2.5/br/deed.en_US
 * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.2N.3g=6(4){4=23.2H({2B:\'#34\',2g:0.8,1d:F,1M:\'18/5-33-Y.16\',1v:\'18/5-1u-2Q.16\',1E:\'18/5-1u-2L.16\',1W:\'18/5-1u-2I.16\',19:\'18/5-2F.16\',1f:10,2A:3d,2s:\'1j\',2o:\'32\',2j:\'c\',2f:\'p\',2d:\'n\',h:[],9:0},4);f I=N;6 20(){1X(N,I);u F}6 1X(1e,I){$(\'1U, 1S, 1R\').l({\'1Q\':\'2E\'});1O();4.h.B=0;4.9=0;7(I.B==1){4.h.1J(v 1m(1e.17(\'J\'),1e.17(\'2v\')))}j{36(f i=0;i<I.B;i++){4.h.1J(v 1m(I[i].17(\'J\'),I[i].17(\'2v\')))}}2n(4.h[4.9][0]!=1e.17(\'J\')){4.9++}D()}6 1O(){$(\'m\').31(\'<e g="q-13"></e><e g="q-5"><e g="5-s-b-w"><e g="5-s-b"><1w g="5-b"><e 2V="" g="5-k"><a J="#" g="5-k-V"></a><a J="#" g="5-k-X"></a></e><e g="5-Y"><a J="#" g="5-Y-29"><1w W="\'+4.1M+\'"></a></e></e></e><e g="5-s-b-T-w"><e g="5-s-b-T"><e g="5-b-A"><1i g="5-b-A-1t"></1i><1i g="5-b-A-1g"></1i></e><e g="5-1s"><a J="#" g="5-1s-22"><1w W="\'+4.1W+\'"></a></e></e></e></e>\');f z=1D();$(\'#q-13\').l({2K:4.2B,2J:4.2g,S:z[0],P:z[1]}).1V();f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]}).E();$(\'#q-13,#q-5\').C(6(){1a()});$(\'#5-Y-29,#5-1s-22\').C(6(){1a();u F});$(G).2G(6(){f z=1D();$(\'#q-13\').l({S:z[0],P:z[1]});f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]})})}6 D(){$(\'#5-Y\').E();7(4.1d){$(\'#5-b,#5-s-b-T-w,#5-b-A-1g\').1b()}j{$(\'#5-b,#5-k,#5-k-V,#5-k-X,#5-s-b-T-w,#5-b-A-1g\').1b()}f Q=v 1j();Q.1P=6(){$(\'#5-b\').2D(\'W\',4.h[4.9][0]);1N(Q.S,Q.P);Q.1P=6(){}};Q.W=4.h[4.9][0]};6 1N(1o,1r){f 1L=$(\'#5-s-b-w\').S();f 1K=$(\'#5-s-b-w\').P();f 1n=(1o+(4.1f*2));f 1y=(1r+(4.1f*2));f 1I=1L-1n;f 2z=1K-1y;$(\'#5-s-b-w\').3f({S:1n,P:1y},4.2A,6(){2y()});7((1I==0)&&(2z==0)){7($.3e.3c){1H(3b)}j{1H(3a)}}$(\'#5-s-b-T-w\').l({S:1o});$(\'#5-k-V,#5-k-X\').l({P:1r+(4.1f*2)})};6 2y(){$(\'#5-Y\').1b();$(\'#5-b\').1V(6(){2u();2t()});2r()};6 2u(){$(\'#5-s-b-T-w\').38(\'35\');$(\'#5-b-A-1t\').1b();7(4.h[4.9][1]){$(\'#5-b-A-1t\').2p(4.h[4.9][1]).E()}7(4.h.B>1){$(\'#5-b-A-1g\').2p(4.2s+\' \'+(4.9+1)+\' \'+4.2o+\' \'+4.h.B).E()}}6 2t(){$(\'#5-k\').E();$(\'#5-k-V,#5-k-X\').l({\'K\':\'1C M(\'+4.19+\') L-O\'});7(4.9!=0){7(4.1d){$(\'#5-k-V\').l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9-1;D();u F})}j{$(\'#5-k-V\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9-1;D();u F})}}7(4.9!=(4.h.B-1)){7(4.1d){$(\'#5-k-X\').l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9+1;D();u F})}j{$(\'#5-k-X\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9+1;D();u F})}}2k()}6 2k(){$(d).30(6(12){2i(12)})}6 1G(){$(d).11()}6 2i(12){7(12==2h){U=2Z.2e;1x=27}j{U=12.2e;1x=12.2Y}14=2X.2W(U).2U();7((14==4.2j)||(14==\'x\')||(U==1x)){1a()}7((14==4.2f)||(U==37)){7(4.9!=0){4.9=4.9-1;D();1G()}}7((14==4.2d)||(U==39)){7(4.9!=(4.h.B-1)){4.9=4.9+1;D();1G()}}}6 2r(){7((4.h.B-1)>4.9){2c=v 1j();2c.W=4.h[4.9+1][0]}7(4.9>0){2b=v 1j();2b.W=4.h[4.9-1][0]}}6 1a(){$(\'#q-5\').2a();$(\'#q-13\').2T(6(){$(\'#q-13\').2a()});$(\'1U, 1S, 1R\').l({\'1Q\':\'2S\'})}6 1D(){f o,r;7(G.1h&&G.28){o=G.26+G.2R;r=G.1h+G.28}j 7(d.m.25>d.m.24){o=d.m.2P;r=d.m.25}j{o=d.m.2O;r=d.m.24}f y,H;7(Z.1h){7(d.t.1l){y=d.t.1l}j{y=Z.26}H=Z.1h}j 7(d.t&&d.t.1A){y=d.t.1l;H=d.t.1A}j 7(d.m){y=d.m.1l;H=d.m.1A}7(r<H){1z=H}j{1z=r}7(o<y){1B=o}j{1B=y}21=v 1m(1B,1z,y,H);u 21};6 1p(){f o,r;7(Z.1Z){r=Z.1Z;o=Z.2M}j 7(d.t&&d.t.1F){r=d.t.1F;o=d.t.1Y}j 7(d.m){r=d.m.1F;o=d.m.1Y}2q=v 1m(o,r);u 2q};6 1H(2C){f 2x=v 2w();1q=2h;3h{f 1q=v 2w()}2n(1q-2x<2C)};u N.11(\'C\').C(20)}})(23);',62,204,'||||settings|lightbox|function|if||activeImage||image||document|div|var|id|imageArray||else|nav|css|body||xScroll||jquery|yScroll|container|documentElement|return|new|box||windowWidth|arrPageSizes|details|length|click|_set_image_to_view|show|false|window|windowHeight|jQueryMatchedObj|href|background|no|url|this|repeat|height|objImagePreloader|arrPageScroll|width|data|keycode|btnPrev|src|btnNext|loading|self||unbind|objEvent|overlay|key||gif|getAttribute|images|imageBlank|_finish|hide|left|fixedNavigation|objClicked|containerBorderSize|currentNumber|innerHeight|span|Image|bind|clientWidth|Array|intWidth|intImageWidth|___getPageScroll|curDate|intImageHeight|secNav|caption|btn|imageBtnPrev|img|escapeKey|intHeight|pageHeight|clientHeight|pageWidth|transparent|___getPageSize|imageBtnNext|scrollTop|_disable_keyboard_navigation|___pause|intDiffW|push|intCurrentHeight|intCurrentWidth|imageLoading|_resize_container_image_box|_set_interface|onload|visibility|select|object|top|embed|fadeIn|imageBtnClose|_start|scrollLeft|pageYOffset|_initialize|arrayPageSize|btnClose|jQuery|offsetHeight|scrollHeight|innerWidth||scrollMaxY|link|remove|objPrev|objNext|keyToNext|keyCode|keyToPrev|overlayOpacity|null|_keyboard_action|keyToClose|_enable_keyboard_navigation|right|hover|while|txtOf|html|arrayPageScroll|_preload_neighbor_images|txtImage|_set_navigation|_show_image_data|title|Date|date|_show_image|intDiffH|containerResizeSpeed|overlayBgColor|ms|attr|hidden|blank|resize|extend|close|opacity|backgroundColor|next|pageXOffset|fn|offsetWidth|scrollWidth|prev|scrollMaxX|visible|fadeOut|toLowerCase|style|fromCharCode|String|DOM_VK_ESCAPE|event|keydown|append|of|ico|000|fast|for||slideDown||100|250|msie|400|browser|animate|lightBox|do'.split('|'),0,{}))/*
 * jQuery Nivo Slider v2.5.1
 * http://nivo.dev7studios.com
 *
 * Copyright 2011, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * March 2010
 */

(function($){var NivoSlider=function(element,options){var settings=$.extend({},$.fn.nivoSlider.defaults,options);var vars={currentSlide:0,currentImage:'',totalSlides:0,randAnim:'',running:false,paused:false,stop:false};var slider=$(element);slider.data('nivo:vars',vars);slider.css('position','relative');slider.addClass('nivoSlider');var kids=slider.children();kids.each(function(){var child=$(this);var link='';if(!child.is('img')){if(child.is('a')){child.addClass('nivo-imageLink');link=child;}
child=child.find('img:first');}
var childWidth=child.width();if(childWidth==0)childWidth=child.attr('width');var childHeight=child.height();if(childHeight==0)childHeight=child.attr('height');if(childWidth>slider.width()){slider.width(childWidth);}
if(childHeight>slider.height()){slider.height(childHeight);}
if(link!=''){link.css('display','none');}
child.css('display','none');vars.totalSlides++;});if(settings.startSlide>0){if(settings.startSlide>=vars.totalSlides)settings.startSlide=vars.totalSlides-1;vars.currentSlide=settings.startSlide;}
if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');slider.append($('<div class="nivo-caption"><p></p></div>').css({display:'none',opacity:settings.captionOpacity}));var processCaption=function(settings){var nivoCaption=$('.nivo-caption',slider);if(vars.currentImage.attr('title')!=''){var title=vars.currentImage.attr('title');if(title.substr(0,1)=='#')title=$(title).html();if(nivoCaption.css('display')=='block'){nivoCaption.find('p').fadeOut(settings.animSpeed,function(){$(this).html(title);$(this).fadeIn(settings.animSpeed);});}else{nivoCaption.find('p').html(title);}
nivoCaption.fadeIn(settings.animSpeed);}else{nivoCaption.fadeOut(settings.animSpeed);}}
processCaption(settings);var timer=0;if(!settings.manualAdvance&&kids.length>1){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
if(settings.directionNav){slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+settings.prevText+'</a><a class="nivo-nextNav">'+settings.nextText+'</a></div>');if(settings.directionNavHide){$('.nivo-directionNav',slider).hide();slider.hover(function(){$('.nivo-directionNav',slider).show();},function(){$('.nivo-directionNav',slider).hide();});}
$('a.nivo-prevNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');});$('a.nivo-nextNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');});}
if(settings.controlNav){var nivoControl=$('<div class="nivo-controlNav"></div>');slider.append(nivoControl);for(var i=0;i<kids.length;i++){if(settings.controlNavThumbs){var child=kids.eq(i);if(!child.is('img')){child=child.find('img:first');}
if(settings.controlNavThumbsFromRel){nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('rel')+'" alt="" /></a>');}else{nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('src').replace(settings.controlNavThumbsSearch,settings.controlNavThumbsReplace)+'" alt="" /></a>');}}else{nivoControl.append('<a class="nivo-control" rel="'+i+'">'+(i+1)+'</a>');}}
$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');$('.nivo-controlNav a',slider).live('click',function(){if(vars.running)return false;if($(this).hasClass('active'))return false;clearInterval(timer);timer='';slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');vars.currentSlide=$(this).attr('rel')-1;nivoRun(slider,kids,settings,'control');});}
if(settings.keyboardNav){$(window).keypress(function(event){if(event.keyCode=='37'){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');}
if(event.keyCode=='39'){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');}});}
if(settings.pauseOnHover){slider.hover(function(){vars.paused=true;clearInterval(timer);timer='';},function(){vars.paused=false;if(timer==''&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}});}
slider.bind('nivo:animFinished',function(){vars.running=false;$(kids).each(function(){if($(this).is('a')){$(this).css('display','none');}});if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
if(timer==''&&!vars.paused&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
settings.afterChange.call(this);});var createSlices=function(slider,settings,vars){for(var i=0;i<settings.slices;i++){var sliceWidth=Math.round(slider.width()/settings.slices);if(i==settings.slices-1){slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:(slider.width()-(sliceWidth*i))+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}else{slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:sliceWidth+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}}}
var createBoxes=function(slider,settings,vars){var boxWidth=Math.round(slider.width()/settings.boxCols);var boxHeight=Math.round(slider.height()/settings.boxRows);for(var rows=0;rows<settings.boxRows;rows++){for(var cols=0;cols<settings.boxCols;cols++){if(cols==settings.boxCols-1){slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:(slider.width()-(boxWidth*cols))+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}else{slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:boxWidth+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}}}}
var nivoRun=function(slider,kids,settings,nudge){var vars=slider.data('nivo:vars');if(vars&&(vars.currentSlide==vars.totalSlides-1)){settings.lastSlide.call(this);}
if((!vars||vars.stop)&&!nudge)return false;settings.beforeChange.call(this);if(!nudge){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}else{if(nudge=='prev'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}
if(nudge=='next'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}}
vars.currentSlide++;if(vars.currentSlide==vars.totalSlides){vars.currentSlide=0;settings.slideshowEnd.call(this);}
if(vars.currentSlide<0)vars.currentSlide=(vars.totalSlides-1);if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if(settings.controlNav){$('.nivo-controlNav a',slider).removeClass('active');$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');}
processCaption(settings);$('.nivo-slice',slider).remove();$('.nivo-box',slider).remove();if(settings.effect=='random'){var anims=new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade','boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');vars.randAnim=anims[Math.floor(Math.random()*(anims.length+1))];if(vars.randAnim==undefined)vars.randAnim='fade';}
if(settings.effect.indexOf(',')!=-1){var anims=settings.effect.split(',');vars.randAnim=anims[Math.floor(Math.random()*(anims.length))];if(vars.randAnim==undefined)vars.randAnim='fade';}
vars.running=true;if(settings.effect=='sliceDown'||settings.effect=='sliceDownRight'||vars.randAnim=='sliceDownRight'||settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'top':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUp'||settings.effect=='sliceUpRight'||vars.randAnim=='sliceUpRight'||settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'bottom':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUpDown'||settings.effect=='sliceUpDownRight'||vars.randAnim=='sliceUpDown'||settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var v=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);if(i==0){slice.css('top','0px');i++;}else{slice.css('bottom','0px');i=0;}
if(v==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;v++;});}
else if(settings.effect=='fold'||vars.randAnim=='fold'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;$('.nivo-slice',slider).each(function(){var slice=$(this);var origWidth=slice.width();slice.css({top:'0px',height:'100%',width:'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='fade'||vars.randAnim=='fade'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':slider.width()+'px'});firstSlice.animate({opacity:'1.0'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInRight'||vars.randAnim=='slideInRight'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInLeft'||vars.randAnim=='slideInLeft'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1','left':'','right':'0px'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){firstSlice.css({'left':'0px','right':''});slider.trigger('nivo:animFinished');});}
else if(settings.effect=='boxRandom'||vars.randAnim=='boxRandom'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var boxes=shuffle($('.nivo-box',slider));boxes.each(function(){var box=$(this);if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=20;i++;});}
else if(settings.effect=='boxRain'||vars.randAnim=='boxRain'||settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var rowIndex=0;var colIndex=0;var box2Darr=new Array();box2Darr[rowIndex]=new Array();var boxes=$('.nivo-box',slider);if(settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){boxes=$('.nivo-box',slider)._reverse();}
boxes.each(function(){box2Darr[rowIndex][colIndex]=$(this);colIndex++;if(colIndex==settings.boxCols){rowIndex++;colIndex=0;box2Darr[rowIndex]=new Array();}});for(var cols=0;cols<(settings.boxCols*2);cols++){var prevCol=cols;for(var rows=0;rows<settings.boxRows;rows++){if(prevCol>=0&&prevCol<settings.boxCols){(function(row,col,time,i,totalBoxes){var box=$(box2Darr[row][col]);var w=box.width();var h=box.height();if(settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){box.width(0).height(0);}
if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3,'',function(){slider.trigger('nivo:animFinished');});},(100+time));}else{setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3);},(100+time));}})(rows,prevCol,timeBuff,i,totalBoxes);i++;}
prevCol--;}
timeBuff+=100;}}}
var shuffle=function(arr){for(var j,x,i=arr.length;i;j=parseInt(Math.random()*i),x=arr[--i],arr[i]=arr[j],arr[j]=x);return arr;}
var trace=function(msg){if(this.console&&typeof console.log!="undefined")
console.log(msg);}
this.stop=function(){if(!$(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=true;trace('Stop Slider');}}
this.start=function(){if($(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=false;trace('Start Slider');}}
settings.afterLoad.call(this);return this;};$.fn.nivoSlider=function(options){return this.each(function(key,value){var element=$(this);if(element.data('nivoslider'))return element.data('nivoslider');var nivoslider=new NivoSlider(this,options);element.data('nivoslider',nivoslider);});};$.fn.nivoSlider.defaults={effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:'.jpg',controlNavThumbsReplace:'_thumb.jpg',keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,prevText:'Prev',nextText:'Next',beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};$.fn._reverse=[].reverse;})(jQuery);// JavaScript Document
function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav>li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).fadeIn('fast');
		$(this) .addClass( 'on');
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		$(this) .removeClass( 'on');
		});
}
$(document).ready(function(){					
	mainmenu();
});

/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(a,b){function b$(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function bX(a){if(!bR[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bR[a]=c}return bR[a]}function bW(a,b){var c={};d.each(bV.concat.apply([],bV.slice(0,b)),function(){c[this]=a});return c}function bJ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f=a.converters,g,h=e.length,i,j=e[0],k,l,m,n,o;for(g=1;g<h;g++){k=j,j=e[g];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=f[l]||f["* "+j];if(!m){o=b;for(n in f){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=f[i[1]+" "+j];if(o){n=f[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&d.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function bI(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bH(a,b,c,e){d.isArray(b)&&b.length?d.each(b,function(b,f){c||bp.test(a)?e(a,f):bH(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)}):c||b==null||typeof b!=="object"?e(a,b):d.isArray(b)||d.isEmptyObject(b)?e(a,""):d.each(b,function(b,d){bH(a+"["+b+"]",d,c,e)})}function bG(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bD,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(g[l]?l=b:(c.dataTypes.unshift(l),l=bG(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bG(a,c,d,e,"*",g));return l}function bF(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bz),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bn(a,b,c){var e=b==="width"?bh:bi,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function _(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(q,"`").replace(r,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,p,q=[],r=[],s=d._data(this,u);typeof s==="function"&&(s=s.events);if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(o,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,p=f.handleObj.origHandler.apply(f.elem,arguments);if(p===!1||a.isPropagationStopped()){c=f.level,p===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,b,c){c[0].type=a;return d.event.handle.apply(b,c)}function w(){return!0}function v(){return!1}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");e.type="text/javascript",d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a,c){if(a==null){if(e)return e;e=a={}}c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.then(c.cancel,b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments,c=b.length,e=c<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),f=e.promise(),g;c>1?(g=Array(c),d.each(b,function(a,b){d.when(b).then(function(b){g[a]=arguments.length>1?E.call(arguments,0):b,--c||e.resolveWith(f,g)},e.reject)})):e!==a&&e.resolve(a);return f},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return a.jQuery=a.$=d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option"));if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:b.getElementsByTagName("input")[0].value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},g.disabled=!0,d.support.optDisabled=!h.disabled,d.support.scriptEval=function(){if(d.support._scriptEval===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();e.type="text/javascript";try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(d.support._scriptEval=!0,delete a[f]):d.support._scriptEval=!1,b.removeChild(e),b=e=f=null}return d.support._scriptEval};try{delete b.test}catch(i){d.support.deleteExpando=!1}b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function j(){d.support.noCloneEvent=!1,b.detachEvent("onclick",j)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var k=c.createDocumentFragment();k.appendChild(b.firstChild),d.support.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var l=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=l("submit"),d.support.changeBubbles=l("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!d.isEmptyObject(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={}),typeof c==="object"&&(f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c)),i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,i=g?b[d.expando]:d.expando;if(!h[i])return;if(c){var j=e?h[i][f]:h[i];if(j){delete j[c];if(!d.isEmptyObject(j))return}}if(e){delete h[i][f];if(!d.isEmptyObject(h[i]))return}var k=h[i][f];d.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},h[i][f]=k):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var g=/[\n\t\r]/g,h=/\s+/,i=/\r/g,j=/^(?:href|src|style)$/,k=/^(?:button|input)$/i,l=/^(?:button|input|object|select|textarea)$/i,m=/^a(?:rea)?$/i,n=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(h);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",i=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(i+=" "+b[j]);f.className=d.trim(i)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(h);for(var e=0,f=this.length;e<f;e++){var i=this[e];if(i.nodeType===1&&i.className)if(a){var j=(" "+i.className+" ").replace(g," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");i.className=d.trim(j)}else i.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,i=d(this),j=b,k=a.split(h);while(f=k[g++])j=e?j:!i.hasClass(f),i[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(g," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,j=c.type==="select-one";if(f<0)return null;for(var k=j?f:0,l=j?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(j)return a;g.push(a)}}return g}if(n.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(i,"")}return b}var o=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){o&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&n.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=j.test(c);if(c==="selected"&&!d.support.optSelected){var n=a.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&k.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:l.test(a.nodeName)||m.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var o=/\.(.*)$/,p=/^(?:textarea|input|select)$/i,q=/\./g,r=/ /g,s=/[^\w\s.|`]/g,t=function(a){return a.replace(s,"\\$&")},u="events";d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a);if(f===!1)f=v;else if(!f)return;var h,i;f.handler&&(h=f,f=h.handler),f.guid||(f.guid=d.guid++);var j=d._data(c);if(!j)return;var k=j[u],l=j.handle;typeof k==="function"?(l=k.handle,k=k.events):k||(c.nodeType||(j[u]=j=function(){}),j.events=k={}),l||(j.handle=l=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(l.elem,arguments):b}),l.elem=c,e=e.split(" ");var m,n=0,o;while(m=e[n++]){i=h?d.extend({},h):{handler:f,data:g},m.indexOf(".")>-1?(o=m.split("."),m=o.shift(),i.namespace=o.slice(0).sort().join(".")):(o=[],i.namespace=""),i.type=m,i.guid||(i.guid=f.guid);var p=k[m],q=d.event.special[m]||{};if(!p){p=k[m]=[];if(!q.setup||q.setup.call(c,g,o,l)===!1)c.addEventListener?c.addEventListener(m,l,!1):c.attachEvent&&c.attachEvent("on"+m,l)}q.add&&(q.add.call(c,i),i.handler.guid||(i.handler.guid=f.guid)),p.push(i),d.event.global[m]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),w=s&&s[u];if(!s||!w)return;typeof w==="function"&&(s=w,w=w.events),c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in w)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),t).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=w[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete w[h]}if(d.isEmptyObject(w)){var x=s.handle;x&&(x.elem=null),delete s.events,delete s.handle,typeof s==="function"?d.removeData(a,u,!0):d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=e.nodeType?d._data(e,"handle"):(d._data(e,u)||{}).handle;h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(o,""),n=d.nodeName(l,"a")&&m==="click",p=d.event.special[m]||{};if((!p._default||p._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,u),typeof i==="function"&&(i=i.events),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(c){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="submit"||e==="image")&&d(c).closest("form").length){a.liveFired=b;return C("submit",this,arguments)}}),d.event.add(this,"keypress.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="text"||e==="password")&&d(c).closest("form").length&&a.keyCode===13){a.liveFired=b;return C("submit",this,arguments)}});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(p.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f){a.type="change",a.liveFired=b;return d.event.trigger(a,arguments[1],c)}}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return p.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return p.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var p in a)n[c](p,e,a[p],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=o.exec(h),k="",j&&(k=j[0],h=h.replace(o,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function s(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var j=d[g];if(j){var k=!1;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){f||(j.sizcache=c,j.sizset=g);if(typeof b!=="string"){if(j===b){k=!0;break}}else if(i.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function r(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0;[0,0].sort(function(){h=!1;return 0});var i=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var l,m,o,p,q,r,s,u,v=!0,w=i.isXML(d),x=[],y=b;do{a.exec(""),l=a.exec(y);if(l){y=l[3],x.push(l[1]);if(l[2]){p=l[3];break}}}while(l);if(x.length>1&&k.exec(b))if(x.length===2&&j.relative[x[0]])m=t(x[0]+x[1],d);else{m=j.relative[x[0]]?[d]:i(x.shift(),d);while(x.length)b=x.shift(),j.relative[b]&&(b+=x.shift()),m=t(b,m)}else{!g&&x.length>1&&d.nodeType===9&&!w&&j.match.ID.test(x[0])&&!j.match.ID.test(x[x.length-1])&&(q=i.find(x.shift(),d,w),d=q.expr?i.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:n(g)}:i.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),m=q.expr?i.filter(q.expr,q.set):q.set,x.length>0?o=n(m):v=!1;while(x.length)r=x.pop(),s=r,j.relative[r]?s=x.pop():r="",s==null&&(s=d),j.relative[r](o,s,w)}else o=x=[]}o||(o=m),o||i.error(r||b);if(f.call(o)==="[object Array]")if(v)if(d&&d.nodeType===1)for(u=0;o[u]!=null;u++)o[u]&&(o[u]===!0||o[u].nodeType===1&&i.contains(d,o[u]))&&e.push(m[u]);else for(u=0;o[u]!=null;u++)o[u]&&o[u].nodeType===1&&e.push(m[u]);else e.push.apply(e,o);else n(o,e);p&&(i(p,h,e,g),i.uniqueSort(e));return e};i.uniqueSort=function(a){if(p){g=h,a.sort(p);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},i.matches=function(a,b){return i(a,null,null,b)},i.matchesSelector=function(a,b){return i(b,null,null,[a]).length>0},i.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=j.order.length;e<f;e++){var g,h=j.order[e];if(g=j.leftMatch[h].exec(a)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,""),d=j.find[h](g,b,c);if(d!=null){a=a.replace(j.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},i.filter=function(a,c,d,e){var f,g,h=a,k=[],l=c,m=c&&c[0]&&i.isXML(c[0]);while(a&&c.length){for(var n in j.filter)if((f=j.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=j.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;l===k&&(k=[]);if(j.preFilter[n]){f=j.preFilter[n](f,l,d,k,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=l[s])!=null;s++)if(p){o=q(p,f,s,l);var t=e^!!o;d&&o!=null?t?g=!0:l[s]=!1:t&&(k.push(p),g=!0)}if(o!==b){d||(l=k),a=a.replace(j.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)i.error(a);else break;h=a}return l},i.error=function(a){throw"Syntax error, unrecognized expression: "+a};var j=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&i.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!/\W/.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&i.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||i.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&i.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(/\\/g,"");!f&&j.attrMap[g]&&(a[1]=j.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(/\\/g,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=i(b[3],null,null,c);else{var g=i.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(j.match.POS.test(b[0])||j.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=j.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||i.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,k=g.length;h<k;h++)if(g[h]===a)return!1;return!0}i.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=j.attrHandle[c]?j.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=j.setFilters[e];if(f)return f(a,c,b,d)}}},k=j.match.POS,l=function(a,b){return"\\"+(b-0+1)};for(var m in j.match)j.match[m]=new RegExp(j.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source),j.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[m].source.replace(/\\(\d+)/g,l));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(o){n=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var p,q;c.documentElement.compareDocumentPosition?p=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(p=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return q(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return q(e[k],f[k]);return k===c?q(a,f[k],-1):q(e[k],b,1)},q=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),i.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(j.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},j.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(j.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(j.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=i,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){i=function(b,e,f,g){e=e||c;if(!g&&!i.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return n(e.getElementsByTagName(b),f);if(h[2]&&j.find.CLASS&&e.getElementsByClassName)return n(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return n([e.body],f);if(h&&h[3]){var k=e.getElementById(h[3]);if(!k||!k.parentNode)return n([],f);if(k.id===h[3])return n([k],f)}try{return n(e.querySelectorAll(b),f)}catch(l){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e.getAttribute("id"),o=m||d,p=e.parentNode,q=/^\s*[+~]/.test(b);m?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),q&&p&&(e=e.parentNode);try{if(!q||p)return n(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(r){}finally{m||e.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)i[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(i.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!i.isXML(a))try{if(d||!j.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return i(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;j.order.splice(1,0,"CLASS"),j.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?i.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?i.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains=function(){return!1},i.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=j.match.PSEUDO.exec(a))e+=c[0],a=a.replace(j.match.PSEUDO,"");a=j.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)i(a,f[g],d);return i.filter(e,d)};d.find=i,d.expr=i.selectors,d.expr[":"]=d.expr.filters,d.unique=i.uniqueSort,d.text=i.getText,d.isXMLDoc=i.isXML,d.contains=i.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!0:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,_)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if(!d.support.noCloneEvent&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");for(h=0;f[h];++h)$(f[h],g[h]);$(a,e)}if(b){Z(a,e);if(c&&"getElementsByTagName"in a){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");if(f.length)for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var ba=/alpha\([^)]*\)/i,bb=/opacity=([^)]*)/,bc=/-([a-z])/ig,bd=/([A-Z])/g,be=/^-?\d+(?:px)?$/i,bf=/^-?\d/,bg={position:"absolute",visibility:"hidden",display:"block"},bh=["Left","Right"],bi=["Top","Bottom"],bj,bk,bl,bm=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bj(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bj)return bj(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bc,bm)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bn(a,b,e):d.swap(a,bg,function(){f=bn(a,b,e)});if(f<=0){f=bj(a,b,b),f==="0px"&&bl&&(f=bl(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!be.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=ba.test(f)?f.replace(ba,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bk=function(a,c,e){var f,g,h;e=e.replace(bd,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bl=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!be.test(d)&&bf.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bj=bk||bl,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bo=/%20/g,bp=/\[\]$/,bq=/\r?\n/g,br=/#.*$/,bs=/^(.*?):\s*(.*?)\r?$/mg,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:GET|HEAD)$/,bv=/^\/\//,bw=/\?/,bx=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,by=/^(?:select|textarea)/i,bz=/\s+/,bA=/([?&])_=[^&]*/,bB=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,bC=d.fn.load,bD={},bE={};d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&bC)return bC.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";b&&(d.isFunction(b)?(c=b,b=null):typeof b==="object"&&(b=d.param(b,d.ajaxSettings.traditional),g="POST"));var h=this;d.ajax({url:a,type:g,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText,a.isResolved()&&(a.done(function(a){e=a}),h.html(f?d("<div>").append(e.replace(bx,"")).find(f):e)),c&&h.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||by.test(this.nodeName)||bt.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bq,"\r\n")}}):{name:b.name,value:c.replace(bq,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,b){d[b]=function(a,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=null);return d.ajax({type:b,url:a,data:c,success:e,dataType:f})}}),d.extend({getScript:function(a,b){return d.get(a,null,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a){d.extend(!0,d.ajaxSettings,a),a.context&&(d.ajaxSettings.context=a.context)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bF(bD),ajaxTransport:bF(bE),ajax:function(a,e){function w(a,c,e,l){if(t!==2){t=2,p&&clearTimeout(p),o=b,m=l||"",v.readyState=a?4:0;var n,q,r,s=e?bI(f,v,e):b,u,w;if(a>=200&&a<300||a===304){if(f.ifModified){if(u=v.getResponseHeader("Last-Modified"))d.lastModified[f.url]=u;if(w=v.getResponseHeader("Etag"))d.etag[f.url]=w}if(a===304)c="notmodified",n=!0;else try{q=bJ(f,s),c="success",n=!0}catch(x){c="parsererror",r=x}}else r=c,a&&(c="error",a<0&&(a=0));v.status=a,v.statusText=c,n?i.resolveWith(g,[q,c,v]):i.rejectWith(g,[v,c,r]),v.statusCode(k),k=b,f.global&&h.trigger("ajax"+(n?"Success":"Error"),[v,f,n?q:r]),j.resolveWith(g,[v,c]),f.global&&(h.trigger("ajaxComplete",[v,f]),--d.active||d.event.trigger("ajaxStop"))}}typeof e!=="object"&&(e=a,a=b),e=e||{};var f=d.extend(!0,{},d.ajaxSettings,e),g=(f.context=("context"in e?e:d.ajaxSettings).context)||f,h=g===f?d.event:d(g),i=d.Deferred(),j=d._Deferred(),k=f.statusCode||{},l={},m,n,o,p,q=c.location,r=q.protocol||"http:",s,t=0,u,v={readyState:0,setRequestHeader:function(a,b){t===0&&(l[a.toLowerCase()]=b);return this},getAllResponseHeaders:function(){return t===2?m:null},getResponseHeader:function(a){var b;if(t===2){if(!n){n={};while(b=bs.exec(m))n[b[1].toLowerCase()]=b[2]}b=n[a.toLowerCase()]}return b||null},abort:function(a){a=a||"abort",o&&o.abort(a),w(0,a);return this}};i.promise(v),v.success=v.done,v.error=v.fail,v.complete=j.done,v.statusCode=function(a){if(a){var b;if(t<2)for(b in a)k[b]=[k[b],a[b]];else b=a[v.status],v.then(b,b)}return this},f.url=(""+(a||f.url)).replace(br,"").replace(bv,r+"//"),f.dataTypes=d.trim(f.dataType||"*").toLowerCase().split(bz),f.crossDomain||(s=bB.exec(f.url.toLowerCase()),f.crossDomain=s&&(s[1]!=r||s[2]!=q.hostname||(s[3]||(s[1]==="http:"?80:443))!=(q.port||(r==="http:"?80:443)))),f.data&&f.processData&&typeof f.data!=="string"&&(f.data=d.param(f.data,f.traditional)),bG(bD,f,e,v),f.type=f.type.toUpperCase(),f.hasContent=!bu.test(f.type),f.global&&d.active++===0&&d.event.trigger("ajaxStart");if(!f.hasContent){f.data&&(f.url+=(bw.test(f.url)?"&":"?")+f.data);if(f.cache===!1){var x=d.now(),y=f.url.replace(bA,"$1_="+x);f.url=y+(y===f.url?(bw.test(f.url)?"&":"?")+"_="+x:"")}}if(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)l["content-type"]=f.contentType;f.ifModified&&(d.lastModified[f.url]&&(l["if-modified-since"]=d.lastModified[f.url]),d.etag[f.url]&&(l["if-none-match"]=d.etag[f.url])),l.accept=f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", */*; q=0.01":""):f.accepts["*"];for(u in f.headers)l[u.toLowerCase()]=f.headers[u];if(!f.beforeSend||f.beforeSend.call(g,v,f)!==!1&&t!==2){for(u in {success:1,error:1,complete:1})v[u](f[u]);o=bG(bE,f,e,v);if(o){t=v.readyState=1,f.global&&h.trigger("ajaxSend",[v,f]),f.async&&f.timeout>0&&(p=setTimeout(function(){v.abort("timeout")},f.timeout));try{o.send(l,w)}catch(z){status<2?w(-1,z):d.error(z)}}else w(-1,"No Transport")}else w(0,"abort"),v=!1;return v},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery)d.each(a,function(){f(this.name,this.value)});else for(var g in a)bH(g,a[g],c,f);return e.join("&").replace(bo,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bK=d.now(),bL=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bK++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){e=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bL.test(b.url)||e&&bL.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";b.jsonp!==!1&&(i=i.replace(bL,k),b.url===i&&(e&&(j=j.replace(bL,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},b.complete=[function(){a[g]=h;if(h)f&&d.isFunction(h)&&a[g](f[0]);else try{delete a[g]}catch(b){}},b.complete],b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bM=d.now(),bN={},bO,bP;d.ajaxSettings.xhr=a.ActiveXObject?function(){if(a.location.protocol!=="file:")try{return new a.XMLHttpRequest}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}:function(){return new a.XMLHttpRequest};try{bP=d.ajaxSettings.xhr()}catch(bQ){}d.support.ajax=!!bP,d.support.cors=bP&&"withCredentials"in bP,bP=b,d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var c;return{send:function(e,f){bO||(bO=1,d(a).bind("unload",function(){d.each(bN,function(a,b){b.onreadystatechange&&b.onreadystatechange(1)})}));var g=b.xhr(),h;b.username?g.open(b.type,b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async),(!b.crossDomain||b.hasContent)&&!e["x-requested-with"]&&(e["x-requested-with"]="XMLHttpRequest");try{d.each(e,function(a,b){g.setRequestHeader(a,b)})}catch(i){}g.send(b.hasContent&&b.data||null),c=function(a,e){if(c&&(e||g.readyState===4)){c=0,h&&(g.onreadystatechange=d.noop,delete bN[h]);if(e)g.readyState!==4&&g.abort();else{var i=g.status,j,k=g.getAllResponseHeaders(),l={},m=g.responseXML;m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}i=i===0?!b.crossDomain||j?k?304:0:302:i==1223?204:i,f(i,j,l,k)}}},b.async&&g.readyState!==4?(h=bM++,bN[h]=g,g.onreadystatechange=c):c()},abort:function(){c&&c(0,1)}}}});var bR={},bS=/^(?:toggle|show|hide)$/,bT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bU,bV=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(bW("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",bX(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(bW("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(bW("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=bX(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(bS.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=bT.exec(e),j=f.cur()||0;if(i){var k=parseFloat(i[2]),l=i[3]||"px";l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:bW("show",1),slideUp:bW("hide",1),slideToggle:bW("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(d.css(this.elem,this.prop));return a||0},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||"px",this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!bU&&(bU=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(bU),bU=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var bY=/^t(?:able|d|h)$/i,bZ=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=b$(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!bY.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=bZ.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!bZ.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=b$(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=b$(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}})})(window);
/**
 * Copyright (c) 2010 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.4
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(8($){$.3n.3o=8(b){5 c={2s:\'Z.3p\',1W:0,1X:q,11:0.7,2t:q,1b:3q,v:q,x:q,2u:B,2v:B,1Y:0,t:{1c:B,1Z:q,1d:3r,2w:\'3s\',2x:\'3t\',20:B,2y:\'(\',2z:\')\',2A:q,2B:q},2C:\'21-2D\',2E:B,1z:B,1A:{1e:q,2F:q,2G:q}};5 d=$.2H(q,c,b);4(b&&b.t){d.t=$.2H(q,c.t,b.t)};4(!d.t.1c){d.t.1Z=q};5 e=[];$(3).2I(8(){5 a=1B 22(3,d);e[e.J]=a});w e};8 2J(a,b,c){5 d=12(a.u(\'Q\'),10);4(b==\'C\'){5 e=\'-\'+3.D+\'z\';a.u(\'Q\',3.D+\'z\')}y{5 e=3.D+\'z\';a.u(\'Q\',\'-\'+3.D+\'z\')};4(c){c.u(\'1f\',\'-\'+c[0].1C+\'z\');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:\'-\'+3.R[0].1C+\'z\'},3.r.1b*2)};w{1g:{Q:e},1h:{Q:d}}};8 2K(a,b,c){5 d=12(a.u(\'C\'),10);4(b==\'C\'){5 e=\'-\'+3.K+\'z\';a.u(\'C\',3.K+\'z\')}y{5 e=3.K+\'z\';a.u(\'C\',\'-\'+3.K+\'z\')};4(c){c.u(\'1f\',\'-\'+c[0].1C+\'z\');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:\'-\'+3.R[0].1C+\'z\'},3.r.1b*2)};w{1g:{C:e},1h:{C:d}}};8 2L(a,b,c){5 d=a.v();5 e=a.x();5 f=12(a.u(\'C\'),10);5 g=12(a.u(\'Q\'),10);a.u({v:0,x:0,Q:3.D/2,C:3.K/2});w{1g:{v:0,x:0,Q:3.D/2,C:3.K/2},1h:{v:d,x:e,Q:g,C:f}}};8 2M(a,b,c){a.u(\'S\',0);w{1g:{S:0},1h:{S:1}}};8 2N(a,b,c){a.u(\'S\',0);w{1g:{S:0},1h:{S:1},1d:0}};8 22(a,b){3.1e(a,b)};22.2O={17:q,T:q,1D:q,V:q,Z:q,1r:q,N:q,1E:q,1F:q,1i:q,1j:q,t:q,K:0,D:0,O:0,18:q,R:q,1G:0,r:q,G:q,1k:q,1H:q,1e:8(b,c){5 d=3;3.17=$(b);3.r=c;3.2P();3.2Q();4(3.r.v){3.K=3.r.v;3.T.v(3.r.v);3.17.v(3.r.v)}y{3.K=3.T.v()};4(3.r.x){3.D=3.r.x;3.T.x(3.r.x)}y{3.D=3.T.x()};3.1G=3.V.v();3.O=0;3.18=q;3.R=q;3.1k=q;3.2R();4(3.r.2u){3.2S()};5 e=8(a){w d.1I(a)};3.t=1B 23(e,3.r.t);3.L.F(3.t.2T());4(3.r.t.1c){3.t.1c()}y{3.t.24()};4(3.r.2v){3.2U()};4(3.r.2E){3.2V()};5 f=12(3.r.1W,10);4(25.26.27&&25.26.27.3u(\'#s-W\')===0){f=25.26.27.2W(/[^0-9]+/g,\'\');4((f*1)!=f){f=3.r.1W}};3.1J(B);3.1s(f,8(){4(d.r.t.1Z){d.14(f+1);d.t.1t()}});3.P(3.r.1A.1e)},2Q:8(){3.1H={\'21-3v\':2J,\'21-2D\':2K,\'3w\':2L,\'3x\':2M,\'3y\':2N}},2P:8(){3.L=3.17.E(\'.s-L\');3.1D=$(\'<p H="s-3z"></p>\');3.L.F(3.1D);3.T=3.17.E(\'.s-W-17\');3.T.3A();3.V=3.17.E(\'.s-V\');3.N=3.V.E(\'.s-3B\');3.1r=$(\'<A H="s-1r"></A>\');3.Z=$(\'<19 H="s-Z" 1K="\'+3.r.2s+\'">\');3.T.F(3.Z);3.Z.15();$(1L.3C).F(3.1r)},1J:8(a){4(a){3.Z.1l()}y{3.Z.15()}},3D:8(a,b){4($.28(b)){3.1H[a]=b}},2R:8(){5 f=3;3.G=[];5 g=0;5 h=0;5 j=3.N.E(\'a\');5 k=j.J;4(3.r.11<1){j.E(\'19\').u(\'S\',3.r.11)};j.2I(8(i){5 a=$(3);5 b=a.I(\'2X\');5 c=a.E(\'19\');4(!f.29(c[0])){c.2Y(8(){g+=3.1u.1u.2a;h++})}y{g+=c[0].1u.1u.2a;h++};a.1M(\'s-1N\'+i);a.1v(8(){f.1s(i);f.t.M();w q}).2Z(8(){4(!$(3).1w(\'.s-1m\')&&f.r.11<1){$(3).E(\'19\').1O(1P,1)};f.14(i)},8(){4(!$(3).1w(\'.s-1m\')&&f.r.11<1){$(3).E(\'19\').1O(1P,f.r.11)}});5 a=q;4(c.1n(\'s-1x\')){a=c.1n(\'s-1x\')}y 4(c.I(\'2b\')&&c.I(\'2b\').J){a=c.I(\'2b\')};5 d=q;4(c.1n(\'s-1o\')){d=c.1n(\'s-1o\')}y 4(c.I(\'2c\')&&c.I(\'2c\').J){d=c.I(\'2c\')};5 e=q;4(c.1n(\'s-U\')){e=c.1n(\'s-U\')}y 4(c.I(\'U\')&&c.I(\'U\').J){e=c.I(\'U\')};f.G[i]={1N:c.I(\'1K\'),W:b,2d:q,1p:q,1o:d,U:e,1q:q,1x:a}});5 l=2e(8(){4(k==h){f.V.E(\'.s-1N-3E\').u(\'v\',g+\'z\');1Q(l)}},3F)},2V:8(){5 a=3;$(1L).31(8(e){4(e.2f==39){a.1I();a.t.M()}y 4(e.2f==37){a.2g();a.t.M()}})},2S:8(){3.1i=$(\'<A H="s-2h"><A H="s-2h-W"></A></A>\');3.1j=$(\'<A H="s-32"><A H="s-32-W"></A></A>\');3.T.F(3.1i);3.T.F(3.1j);5 a=3;3.1j.33(3.1i).3G(8(e){$(3).u(\'x\',a.D);$(3).E(\'A\').1l()}).3H(8(e){$(3).E(\'A\').15()}).1v(8(){4($(3).1w(\'.s-2h\')){a.1I();a.t.M()}y{a.2g();a.t.M()}}).E(\'A\').u(\'S\',0.7)},2U:8(){5 c=3;3.1F=$(\'<A H="s-2i"></A>\');3.1E=$(\'<A H="s-3I"></A>\');3.V.F(3.1F);3.V.34(3.1E);5 d=0;5 e=q;$(3.1E).33(3.1F).1v(8(){5 a=c.1G-3J;4(c.r.1Y>0){5 a=c.r.1Y};4($(3).1w(\'.s-2i\')){5 b=c.N.1a()+a}y{5 b=c.N.1a()-a};4(c.r.t.20){c.t.M()};c.N.13({1a:b+\'z\'});w q}).u(\'S\',0.6).2Z(8(){5 b=\'C\';4($(3).1w(\'.s-2i\')){b=\'2j\'};e=2e(8(){d++;4(d>30&&c.r.t.20){c.t.M()};5 a=c.N.1a()+1;4(b==\'C\'){a=c.N.1a()-1};c.N.1a(a)},10);$(3).u(\'S\',1)},8(){d=0;1Q(e);$(3).u(\'S\',0.6)})},2k:8(){3.1D.2l((3.O+1)+\' / \'+3.G.J);4(!3.r.1z){3.1j.1l().u(\'x\',3.D);3.1i.1l().u(\'x\',3.D);4(3.O==(3.G.J-1)){3.1i.15()};4(3.O==0){3.1j.15()}};3.P(3.r.1A.2F)},35:8(a,b){4(b>3.D){5 c=a/b;b=3.D;a=3.D*c};4(a>3.K){5 c=b/a;a=3.K;b=3.K*c};w{v:a,x:b}},36:8(a,b,c){a.u(\'Q\',\'38\');4(c<3.D){5 d=3.D-c;a.u(\'Q\',(d/2)+\'z\')};a.u(\'C\',\'38\');4(b<3.K){5 d=3.K-b;a.u(\'C\',(d/2)+\'z\')}},3a:8(a){5 b=q;4(a.1o.J||a.U.J){5 c=\'\';4(a.U.J){c=\'<3b H="s-3c-U">\'+a.U+\'</3b>\'};5 b=\'\';4(a.1o.J){b=\'<16>\'+a.1o+\'</16>\'};b=$(\'<p H="s-W-3c">\'+c+b+\'</p>\')};w b},1s:8(a,b){4(3.G[a]&&!3.1k){5 c=3;5 d=3.G[a];3.1k=B;4(!d.1p){3.1J(B);3.14(a,8(){c.1J(q);c.2m(a,b)})}y{3.2m(a,b)}}},2m:8(a,b){4(3.G[a]){5 c=3;5 d=3.G[a];5 e=$(1L.3K(\'A\')).1M(\'s-W\');5 f=$(1B 3d()).I(\'1K\',d.W);4(d.1x){5 g=$(\'<a 2X="\'+d.1x+\'" 3L="3M"></a>\');g.F(f);e.F(g)}y{e.F(f)}3.T.34(e);5 h=3.35(d.1q.v,d.1q.x);f.I(\'v\',h.v);f.I(\'x\',h.x);e.u({v:h.v+\'z\',x:h.x+\'z\'});3.36(e,h.v,h.x);5 i=3.3a(d,e);4(i){4(!3.r.1X){e.F(i);5 j=h.v-12(i.u(\'3e-C\'),10)-12(i.u(\'3e-2j\'),10);i.u(\'v\',j+\'z\')}y{3.r.1X.F(i)}};3.3f(3.V.E(\'.s-1N\'+a));5 k=\'2j\';4(3.O<a){k=\'C\'};3.P(3.r.1A.2G);4(3.18||3.r.2t){5 l=3.r.1b;5 m=\'3N\';5 n=3.1H[3.r.2C].2n(3,e,k,i);4(1R n.1d!=\'1S\'){l=n.1d};4(1R n.3g!=\'1S\'){m=n.3g};4(3.18){5 o=3.18;5 p=3.R;o.13(n.1g,l,m,8(){o.3h();4(p)p.3h()})};e.13(n.1h,l,m,8(){c.O=a;c.18=e;c.R=i;c.1k=q;c.2k();c.P(b)})}y{3.O=a;3.18=e;c.R=i;3.1k=q;c.2k();3.P(b)}}},3i:8(){4(3.O==(3.G.J-1)){4(!3.r.1z){w q};5 a=0}y{5 a=3.O+1};w a},1I:8(a){5 b=3.3i();4(b===q)w q;3.14(b+1);3.1s(b,a);w B},3j:8(){4(3.O==0){4(!3.r.1z){w q};5 a=3.G.J-1}y{5 a=3.O-1};w a},2g:8(a){5 b=3.3j();4(b===q)w q;3.14(b-1);3.1s(b,a);w B},3O:8(){5 a=3;5 i=0;8 2o(){4(i<a.G.J){i++;a.14(i,2o)}};a.14(i,2o)},14:8(a,b){4(3.G[a]){5 c=3.G[a];4(!3.G[a].1p){5 d=$(1B 3d());d.I(\'1K\',c.W);4(!3.29(d[0])){3.1r.F(d);5 e=3;d.2Y(8(){c.1p=B;c.1q={v:3.v,x:3.x};e.P(b)}).2d(8(){c.2d=B;c.1p=q;c.1q=q})}y{c.1p=B;c.1q={v:d[0].v,x:d[0].x};3.P(b)}}y{3.P(b)}}},29:8(a){4(1R a.3k!=\'1S\'&&!a.3k){w q};4(1R a.3l!=\'1S\'&&a.3l==0){w q};w B},3f:8(a){3.N.E(\'.s-1m\').3m(\'s-1m\');a.1M(\'s-1m\');4(3.r.11<1){3.N.E(\'a:3P(.s-1m) 19\').1O(1P,3.r.11);a.E(\'19\').1O(1P,1)};5 b=a[0].1u.3Q;b-=(3.1G/2)-(a[0].2a/2);3.N.13({1a:b+\'z\'})},P:8(a){4($.28(a)){a.2n(3)}}};8 23(a,b){3.1e(a,b)};23.2O={1T:q,1U:q,X:q,L:q,r:q,2p:q,1y:q,Y:q,1V:q,1e:8(a,b){5 c=3;3.2p=a;3.r=b},2T:8(){3.1T=$(\'<16 H="s-t-1t">\'+3.r.2w+\'</16>\');3.1U=$(\'<16 H="s-t-M">\'+3.r.2x+\'</16>\');3.X=$(\'<16 H="s-t-X"></16>\');3.L=$(\'<A H="s-t-L"></A>\');3.L.F(3.1T).F(3.1U).F(3.X);3.X.15();5 a=3;3.1T.1v(8(){a.1t()});3.1U.1v(8(){a.M()});$(1L).31(8(e){4(e.2f==3R){4(a.Y){a.M()}y{a.1t()}}});w 3.L},24:8(){3.1y=q;3.M();3.L.15()},1c:8(){3.1y=B;3.L.1l()},3S:8(){4(3.1y){3.24()}y{3.1c()}},1t:8(){4(3.Y||!3.1y)w q;5 a=3;3.Y=B;3.L.1M(\'s-t-Y\');3.2q();3.P(3.r.2A);w B},M:8(){4(!3.Y)w q;3.Y=q;3.X.15();3.L.3m(\'s-t-Y\');1Q(3.1V);3.P(3.r.2B);w B},2q:8(){5 c=3;5 d=3.r.2y;5 e=3.r.2z;1Q(c.1V);3.X.1l().2l(d+(3.r.1d/2r)+e);5 f=0;3.1V=2e(8(){f+=2r;4(f>=c.r.1d){5 a=8(){4(c.Y){c.2q()};f=0};4(!c.2p(a)){c.M()};f=0};5 b=12(c.X.3T().2W(/[^0-9]/g,\'\'),10);b--;4(b>0){c.X.2l(d+b+e)}},2r)},P:8(a){4($.28(a)){a.2n(3)}}}})(3U);',62,243,'|||this|if|var|||function||||||||||||||||||false|settings|ad|slideshow|css|width|return|height|else|px|div|true|left|image_wrapper_height|find|append|images|class|attr|length|image_wrapper_width|controls|stop|thumbs_wrapper|current_index|fireCallback|top|current_description|opacity|image_wrapper|title|nav|image|countdown|running|loader||thumb_opacity|parseInt|animate|preloadImage|hide|span|wrapper|current_image|img|scrollLeft|animation_speed|enable|speed|init|bottom|old_image|new_image|next_link|prev_link|in_transition|show|active|data|desc|preloaded|size|preloads|showImage|start|parentNode|click|is|link|enabled|cycle|callbacks|new|offsetHeight|gallery_info|scroll_back|scroll_forward|nav_display_width|animations|nextImage|loading|src|document|addClass|thumb|fadeTo|300|clearInterval|typeof|undefined|start_link|stop_link|countdown_interval|start_at_index|description_wrapper|scroll_jump|autostart|stop_on_scroll|slide|AdGallery|AdGallerySlideshow|disable|window|location|hash|isFunction|isImageLoaded|offsetWidth|longdesc|alt|error|setInterval|keyCode|prevImage|next|forward|right|_afterShow|html|_showWhenLoaded|call|preloadNext|nextimage_callback|_next|1000|loader_image|animate_first_image|display_next_and_prev|display_back_and_forward|start_label|stop_label|countdown_prefix|countdown_sufix|onStart|onStop|effect|hori|enable_keyboard_move|afterImageVisible|beforeImageVisible|extend|each|VerticalSlideAnimation|HorizontalSlideAnimation|ResizeAnimation|FadeAnimation|NoneAnimation|prototype|setupElements|setupAnimations|findImages|initNextAndPrev|create|initBackAndForward|initKeyEvents|replace|href|load|hover||keydown|prev|add|prepend|_getContainedImageSize|_centerImage||0px||_getDescription|strong|description|Image|padding|highLightThumb|easing|remove|nextIndex|prevIndex|complete|naturalWidth|removeClass|fn|adGallery|gif|400|5000|Start|Stop|indexOf|vert|resize|fade|none|info|empty|thumbs|body|addAnimation|list|100|mouseover|mouseout|back|50|createElement|target|_blank|swing|preloadAll|not|offsetLeft|83|toggle|text|jQuery'.split('|'),0,{}))/**
 * jQuery Galleriffic plugin
 *
 * Copyright (c) 2008 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Much thanks to primary contributer Ponticlaro (http://www.ponticlaro.com)
 */
;(function($) {
	// Globally keep track of all images by their unique hash.  Each item is an image data object.
	var allImages = {};
	var imageCounter = 0;

	// Galleriffic static class
	$.galleriffic = {
		version: '2.0.1',

		// Strips invalid characters and any leading # characters
		normalizeHash: function(hash) {
			return hash.replace(/^.*#/, '').replace(/\?.*$/, '');
		},

		getImage: function(hash) {
			if (!hash)
				return undefined;

			hash = $.galleriffic.normalizeHash(hash);
			return allImages[hash];
		},

		// Global function that looks up an image by its hash and displays the image.
		// Returns false when an image is not found for the specified hash.
		// @param {String} hash This is the unique hash value assigned to an image.
		gotoImage: function(hash) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			gallery.gotoImage(imageData);
			
			return true;
		},

		// Removes an image from its respective gallery by its hash.
		// Returns false when an image is not found for the specified hash or the
		// specified owner gallery does match the located images gallery.
		// @param {String} hash This is the unique hash value assigned to an image.
		// @param {Object} ownerGallery (Optional) When supplied, the located images
		// gallery is verified to be the same as the specified owning gallery before
		// performing the remove operation.
		removeImageByHash: function(hash, ownerGallery) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			if (ownerGallery && ownerGallery != gallery)
				return false;

			return gallery.removeImageByIndex(imageData.index);
		}
	};

	var defaults = {
		delay:                     3000,
		numThumbs:                 20,
		preloadAhead:              40, // Set to -1 to preload all images
		enableTopPager:            false,
		enableBottomPager:         true,
		maxPagesToShow:            7,
		imageContainerSel:         '',
		captionContainerSel:       '',
		controlsContainerSel:      '',
		loadingContainerSel:       '',
		renderSSControls:          true,
		renderNavControls:         true,
		playLinkText:              'Play',
		pauseLinkText:             'Pause',
		prevLinkText:              'Previous',
		nextLinkText:              'Next',
		nextPageLinkText:          'Next &rsaquo;',
		prevPageLinkText:          '&lsaquo; Prev',
		enableHistory:             false,
		enableKeyboardNavigation:  true,
		autoStart:                 false,
		syncTransitions:           false,
		defaultTransitionDuration: 1000,
		onSlideChange:             undefined, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
		onTransitionOut:           undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
		onTransitionIn:            undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
		onPageTransitionOut:       undefined, // accepts a delegate like such: function(callback) { ... }
		onPageTransitionIn:        undefined, // accepts a delegate like such: function() { ... }
		onImageAdded:              undefined, // accepts a delegate like such: function(imageData, $li) { ... }
		onImageRemoved:            undefined  // accepts a delegate like such: function(imageData, $li) { ... }
	};

	// Primary Galleriffic initialization function that should be called on the thumbnail container.
	$.fn.galleriffic = function(settings) {
		//  Extend Gallery Object
		$.extend(this, {
			// Returns the version of the script
			version: $.galleriffic.version,

			// Current state of the slideshow
			isSlideshowRunning: false,
			slideshowTimeout: undefined,

			// This function is attached to the click event of generated hyperlinks within the gallery
			clickHandler: function(e, link) {
				this.pause();

				if (!this.enableHistory) {
					// The href attribute holds the unique hash for an image
					var hash = $.galleriffic.normalizeHash($(link).attr('href'));
					$.galleriffic.gotoImage(hash);
					e.preventDefault();
				}
			},

			// Appends an image to the end of the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			appendImage: function(listItem) {
				this.addImage(listItem, false, false);
				return this;
			},

			// Inserts an image into the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			insertImage: function(listItem, position) {
				this.addImage(listItem, false, true, position);
				return this;
			},

			// Adds an image to the gallery and optionally inserts/appends it to the DOM (thumbExists)
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Boolean} thumbExists Specifies whether the thumbnail already exists in the DOM or if it needs to be added.
			// @param {Boolean} insert Specifies whether the the image is appended to the end or inserted into the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			addImage: function(listItem, thumbExists, insert, position) {
				var $li = ( typeof listItem === "string" ) ? $(listItem) : listItem;				
				var $aThumb = $li.find('a.thumb');
				var slideUrl = $aThumb.attr('href');
				var title = $aThumb.attr('title');
				var $caption = $li.find('.caption').remove();
				var hash = $aThumb.attr('name');

				// Increment the image counter
				imageCounter++;

				// Autogenerate a hash value if none is present or if it is a duplicate
				if (!hash || allImages[''+hash]) {
					hash = imageCounter;
				}

				// Set position to end when not specified
				if (!insert)
					position = this.data.length;
				
				var imageData = {
					title:title,
					slideUrl:slideUrl,
					caption:$caption,
					hash:hash,
					gallery:this,
					index:position
				};

				// Add the imageData to this gallery's array of images
				if (insert) {
					this.data.splice(position, 0, imageData);

					// Reset index value on all imageData objects
					this.updateIndices(position);
				}
				else {
					this.data.push(imageData);
				}

				var gallery = this;

				// Add the element to the DOM
				if (!thumbExists) {
					// Update thumbs passing in addition post transition out handler
					this.updateThumbs(function() {
						var $thumbsUl = gallery.find('ul.thumbs');
						if (insert)
							$thumbsUl.children(':eq('+position+')').before($li);
						else
							$thumbsUl.append($li);
						
						if (gallery.onImageAdded)
							gallery.onImageAdded(imageData, $li);
					});
				}

				// Register the image globally
				allImages[''+hash] = imageData;

				// Setup attributes and click handler
				$aThumb.attr('rel', 'history')
					.attr('href', '#'+hash)
					.removeAttr('name')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});

				return this;
			},

			// Removes an image from the gallery based on its index.
			// Returns false when the index is out of range.
			removeImageByIndex: function(index) {
				if (index < 0 || index >= this.data.length)
					return false;
				
				var imageData = this.data[index];
				if (!imageData)
					return false;
				
				this.removeImage(imageData);
				
				return true;
			},

			// Convenience method that simply calls the global removeImageByHash method.
			removeImageByHash: function(hash) {
				return $.galleriffic.removeImageByHash(hash, this);
			},

			// Removes an image from the gallery.
			removeImage: function(imageData) {
				var index = imageData.index;
				
				// Remove the image from the gallery data array
				this.data.splice(index, 1);
				
				// Remove the global registration
				delete allImages[''+imageData.hash];
				
				// Remove the image's list item from the DOM
				this.updateThumbs(function() {
					var $li = gallery.find('ul.thumbs')
						.children(':eq('+index+')')
						.remove();

					if (gallery.onImageRemoved)
						gallery.onImageRemoved(imageData, $li);
				});

				// Update each image objects index value
				this.updateIndices(index);

				return this;
			},

			// Updates the index values of the each of the images in the gallery after the specified index
			updateIndices: function(startIndex) {
				for (i = startIndex; i < this.data.length; i++) {
					this.data[i].index = i;
				}
				
				return this;
			},

			// Scraped the thumbnail container for thumbs and adds each to the gallery
			initializeThumbs: function() {
				this.data = [];
				var gallery = this;

				this.find('ul.thumbs > li').each(function(i) {
					gallery.addImage($(this), true, false);
				});

				return this;
			},

			isPreloadComplete: false,

			// Initalizes the image preloader
			preloadInit: function() {
				if (this.preloadAhead == 0) return this;
				
				this.preloadStartIndex = this.currentImage.index;
				var nextIndex = this.getNextIndex(this.preloadStartIndex);
				return this.preloadRecursive(this.preloadStartIndex, nextIndex);
			},

			// Changes the location in the gallery the preloader should work
			// @param {Integer} index The index of the image where the preloader should restart at.
			preloadRelocate: function(index) {
				// By changing this startIndex, the current preload script will restart
				this.preloadStartIndex = index;
				return this;
			},

			// Recursive function that performs the image preloading
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadRecursive: function(startIndex, currentIndex) {
				// Check if startIndex has been relocated
				if (startIndex != this.preloadStartIndex) {
					var nextIndex = this.getNextIndex(this.preloadStartIndex);
					return this.preloadRecursive(this.preloadStartIndex, nextIndex);
				}

				var gallery = this;

				// Now check for preloadAhead count
				var preloadCount = currentIndex - startIndex;
				if (preloadCount < 0)
					preloadCount = this.data.length-1-startIndex+currentIndex;
				if (this.preloadAhead >= 0 && preloadCount > this.preloadAhead) {
					// Do this in order to keep checking for relocated start index
					setTimeout(function() { gallery.preloadRecursive(startIndex, currentIndex); }, 500);
					return this;
				}

				var imageData = this.data[currentIndex];
				if (!imageData)
					return this;

				// If already loaded, continue
				if (imageData.image)
					return this.preloadNext(startIndex, currentIndex); 
				
				// Preload the image
				var image = new Image();
				
				image.onload = function() {
					imageData.image = this;
					gallery.preloadNext(startIndex, currentIndex);
				};

				image.alt = imageData.title;
				image.src = imageData.slideUrl;

				return this;
			},
			
			// Called by preloadRecursive in order to preload the next image after the previous has loaded.
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadNext: function(startIndex, currentIndex) {
				var nextIndex = this.getNextIndex(currentIndex);
				if (nextIndex == startIndex) {
					this.isPreloadComplete = true;
				} else {
					// Use setTimeout to free up thread
					var gallery = this;
					setTimeout(function() { gallery.preloadRecursive(startIndex, nextIndex); }, 100);
				}

				return this;
			},

			// Safe way to get the next image index relative to the current image.
			// If the current image is the last, returns 0
			getNextIndex: function(index) {
				var nextIndex = index+1;
				if (nextIndex >= this.data.length)
					nextIndex = 0;
				return nextIndex;
			},

			// Safe way to get the previous image index relative to the current image.
			// If the current image is the first, return the index of the last image in the gallery.
			getPrevIndex: function(index) {
				var prevIndex = index-1;
				if (prevIndex < 0)
					prevIndex = this.data.length-1;
				return prevIndex;
			},

			// Pauses the slideshow
			pause: function() {
				this.isSlideshowRunning = false;
				if (this.slideshowTimeout) {
					clearTimeout(this.slideshowTimeout);
					this.slideshowTimeout = undefined;
				}

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('play')
						.attr('title', this.playLinkText)
						.attr('href', '#play')
						.html(this.playLinkText);
				}
				
				return this;
			},

			// Plays the slideshow
			play: function() {
				this.isSlideshowRunning = true;

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('pause')
						.attr('title', this.pauseLinkText)
						.attr('href', '#pause')
						.html(this.pauseLinkText);
				}

				if (!this.slideshowTimeout) {
					var gallery = this;
					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Toggles the state of the slideshow (playing/paused)
			toggleSlideshow: function() {
				if (this.isSlideshowRunning)
					this.pause();
				else
					this.play();

				return this;
			},

			// Advances the slideshow to the next image and delegates navigation to the
			// history plugin when history is enabled
			// enableHistory is true
			ssAdvance: function() {
				if (this.isSlideshowRunning)
					this.next(true);

				return this;
			},

			// Advances the gallery to the next image.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.  
			next: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getNextIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the previous image in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previous: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getPrevIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the next page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			nextPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				var lastPage = this.getNumPages() - 1;
				if (page < lastPage) {
					var startIndex = page * this.numThumbs;
					var nextPage = startIndex + this.numThumbs;
					this.gotoIndex(nextPage, dontPause, bypassHistory);
				}

				return this;
			},

			// Navigates to the previous page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previousPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				if (page > 0) {
					var startIndex = page * this.numThumbs;
					var prevPage = startIndex - this.numThumbs;				
					this.gotoIndex(prevPage, dontPause, bypassHistory);
				}
				
				return this;
			},

			// Navigates to the image at the specified index in the gallery
			// @param {Integer} index The index of the image in the gallery to display.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			gotoIndex: function(index, dontPause, bypassHistory) {
				if (!dontPause)
					this.pause();
				
				if (index < 0) index = 0;
				else if (index >= this.data.length) index = this.data.length-1;
				
				var imageData = this.data[index];
				
				if (!bypassHistory && this.enableHistory)
					$.historyLoad(String(imageData.hash));  // At the moment, historyLoad only accepts string arguments
				else
					this.gotoImage(imageData);

				return this;
			},

			// This function is garaunteed to be called anytime a gallery slide changes.
			// @param {Object} imageData An object holding the image metadata of the image to navigate to.
			gotoImage: function(imageData) {
				var index = imageData.index;

				if (this.onSlideChange)
					this.onSlideChange(this.currentImage.index, index);
				
				this.currentImage = imageData;
				this.preloadRelocate(index);
				
				this.refresh();
				
				return this;
			},

			// Returns the default transition duration value.  The value is halved when not
			// performing a synchronized transition.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			getDefaultTransitionDuration: function(isSync) {
				if (isSync)
					return this.defaultTransitionDuration;
				return this.defaultTransitionDuration / 2;
			},

			// Rebuilds the slideshow image and controls and performs transitions
			refresh: function() {
				var imageData = this.currentImage;
				if (!imageData)
					return this;

				var index = imageData.index;

				// Update Controls
				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.nav-controls a.prev').attr('href', '#'+this.data[this.getPrevIndex(index)].hash).end()
						.find('div.nav-controls a.next').attr('href', '#'+this.data[this.getNextIndex(index)].hash);
				}

				var previousSlide = this.$imageContainer.find('span.current').addClass('previous').removeClass('current');
				var previousCaption = 0;

				if (this.$captionContainer) {
					previousCaption = this.$captionContainer.find('span.current').addClass('previous').removeClass('current');
				}

				// Perform transitions simultaneously if syncTransitions is true and the next image is already preloaded
				var isSync = this.syncTransitions && imageData.image;

				// Flag we are transitioning
				var isTransitioning = true;
				var gallery = this;

				var transitionOutCallback = function() {
					// Flag that the transition has completed
					isTransitioning = false;

					// Remove the old slide
					previousSlide.remove();

					// Remove old caption
					if (previousCaption)
						previousCaption.remove();

					if (!isSync) {
						if (imageData.image && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						} else {
							// Show loading container
							if (gallery.$loadingContainer) {
								gallery.$loadingContainer.show();
							}
						}
					}
				};

				if (previousSlide.length == 0) {
					// For the first slide, the previous slide will be empty, so we will call the callback immediately
					transitionOutCallback();
				} else {
					if (this.onTransitionOut) {
						this.onTransitionOut(previousSlide, previousCaption, isSync, transitionOutCallback);
					} else {
						previousSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0, transitionOutCallback);
						if (previousCaption)
							previousCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0);
					}
				}

				// Go ahead and begin transitioning in of next image
				if (isSync)
					this.buildImage(imageData, isSync);

				if (!imageData.image) {
					var image = new Image();
					
					// Wire up mainImage onload event
					image.onload = function() {
						imageData.image = this;

						// Only build image if the out transition has completed and we are still on the same image hash
						if (!isTransitioning && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						}
					};

					// set alt and src
					image.alt = imageData.title;
					image.src = imageData.slideUrl;
				}

				// This causes the preloader (if still running) to relocate out from the currentIndex
				this.relocatePreload = true;

				return this.syncThumbs();
			},

			// Called by the refresh method after the previous image has been transitioned out or at the same time
			// as the out transition when performing a synchronous transition.
			// @param {Object} imageData An object holding the image metadata of the image to build.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			buildImage: function(imageData, isSync) {
				var gallery = this;
				var nextIndex = this.getNextIndex(imageData.index);

				// Construct new hidden span for the image
				var newSlide = this.$imageContainer
					.append('<span class="image-wrapper current"><a class="advance-link" rel="history" href="#'+this.data[nextIndex].hash+'" title="'+imageData.title+'">&nbsp;</a></span>')
					.find('span.current').css('opacity', '0');
				
				newSlide.find('a')
					.append(imageData.image)
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
				
				var newCaption = 0;
				if (this.$captionContainer) {
					// Construct new hidden caption for the image
					newCaption = this.$captionContainer
						.append('<span class="image-caption current"></span>')
						.find('span.current').css('opacity', '0')
						.append(imageData.caption);
				}

				// Hide the loading conatiner
				if (this.$loadingContainer) {
					this.$loadingContainer.hide();
				}

				// Transition in the new image
				if (this.onTransitionIn) {
					this.onTransitionIn(newSlide, newCaption, isSync);
				} else {
					newSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
					if (newCaption)
						newCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
				}
				
				if (this.isSlideshowRunning) {
					if (this.slideshowTimeout)
						clearTimeout(this.slideshowTimeout);

					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Returns the current page index that should be shown for the currentImage
			getCurrentPage: function() {
				return Math.floor(this.currentImage.index / this.numThumbs);
			},

			// Applies the selected class to the current image's corresponding thumbnail.
			// Also checks if the current page has changed and updates the displayed page of thumbnails if necessary.
			syncThumbs: function() {
				var page = this.getCurrentPage();
				if (page != this.displayedPage)
					this.updateThumbs();

				// Remove existing selected class and add selected class to new thumb
				var $thumbs = this.find('ul.thumbs').children();
				$thumbs.filter('.selected').removeClass('selected');
				$thumbs.eq(this.currentImage.index).addClass('selected');

				return this;
			},

			// Performs transitions on the thumbnails container and updates the set of
			// thumbnails that are to be displayed and the navigation controls.
			// @param {Delegate} postTransitionOutHandler An optional delegate that is called after
			// the thumbnails container has transitioned out and before the thumbnails are rebuilt.
			updateThumbs: function(postTransitionOutHandler) {
				var gallery = this;
				var transitionOutCallback = function() {
					// Call the Post-transition Out Handler
					if (postTransitionOutHandler)
						postTransitionOutHandler();
					
					gallery.rebuildThumbs();

					// Transition In the thumbsContainer
					if (gallery.onPageTransitionIn)
						gallery.onPageTransitionIn();
					else
						gallery.show();
				};

				// Transition Out the thumbsContainer
				if (this.onPageTransitionOut) {
					this.onPageTransitionOut(transitionOutCallback);
				} else {
					this.hide();
					transitionOutCallback();
				}

				return this;
			},

			// Updates the set of thumbnails that are to be displayed and the navigation controls.
			rebuildThumbs: function() {
				var needsPagination = this.data.length > this.numThumbs;

				// Rebuild top pager
				if (this.enableTopPager) {
					var $topPager = this.find('div.top');
					if ($topPager.length == 0)
						$topPager = this.prepend('<div class="top pagination"></div>').find('div.top');
					else
						$topPager.empty();

					if (needsPagination)
						this.buildPager($topPager);
				}

				// Rebuild bottom pager
				if (this.enableBottomPager) {
					var $bottomPager = this.find('div.bottom');
					if ($bottomPager.length == 0)
						$bottomPager = this.append('<div class="bottom pagination"></div>').find('div.bottom');
					else
						$bottomPager.empty();

					if (needsPagination)
						this.buildPager($bottomPager);
				}

				var page = this.getCurrentPage();
				var startIndex = page*this.numThumbs;
				var stopIndex = startIndex+this.numThumbs-1;
				if (stopIndex >= this.data.length)
					stopIndex = this.data.length-1;

				// Show/Hide thumbs
				var $thumbsUl = this.find('ul.thumbs');
				$thumbsUl.find('li').each(function(i) {
					var $li = $(this);
					if (i >= startIndex && i <= stopIndex) {
						$li.show();
					} else {
						$li.hide();
					}
				});

				this.displayedPage = page;

				// Remove the noscript class from the thumbs container ul
				$thumbsUl.removeClass('noscript');
				
				return this;
			},

			// Returns the total number of pages required to display all the thumbnails.
			getNumPages: function() {
				return Math.ceil(this.data.length/this.numThumbs);
			},

			// Rebuilds the pager control in the specified matched element.
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			buildPager: function(pager) {
				var gallery = this;
				var numPages = this.getNumPages();
				var page = this.getCurrentPage();
				var startIndex = page * this.numThumbs;
				var pagesRemaining = this.maxPagesToShow - 1;
				
				var pageNum = page - Math.floor((this.maxPagesToShow - 1) / 2) + 1;
				if (pageNum > 0) {
					var remainingPageCount = numPages - pageNum;
					if (remainingPageCount < pagesRemaining) {
						pageNum = pageNum - (pagesRemaining - remainingPageCount);
					}
				}

				if (pageNum < 0) {
					pageNum = 0;
				}

				// Prev Page Link
				if (page > 0) {
					var prevPage = startIndex - this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[prevPage].hash+'" title="'+this.prevPageLinkText+'">'+this.prevPageLinkText+'</a>');
				}

				// Create First Page link if needed
				if (pageNum > 0) {
					this.buildPageLink(pager, 0, numPages);
					if (pageNum > 1)
						pager.append('<span class="ellipsis">&hellip;</span>');
					
					pagesRemaining--;
				}

				// Page Index Links
				while (pagesRemaining > 0) {
					this.buildPageLink(pager, pageNum, numPages);
					pagesRemaining--;
					pageNum++;
				}

				// Create Last Page link if needed
				if (pageNum < numPages) {
					var lastPageNum = numPages - 1;
					if (pageNum < lastPageNum)
						pager.append('<span class="ellipsis">&hellip;</span>');

					this.buildPageLink(pager, lastPageNum, numPages);
				}

				// Next Page Link
				var nextPage = startIndex + this.numThumbs;
				if (nextPage < this.data.length) {
					pager.append('<a rel="history" href="#'+this.data[nextPage].hash+'" title="'+this.nextPageLinkText+'">'+this.nextPageLinkText+'</a>');
				}

				pager.find('a').click(function(e) {
					gallery.clickHandler(e, this);
				});

				return this;
			},

			// Builds a single page link within a pager.  This function is called by buildPager
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			// @param {Integer} pageNum The page number of the page link to build.
			// @param {Integer} numPages The total number of pages required to display all thumbnails.
			buildPageLink: function(pager, pageNum, numPages) {
				var pageLabel = pageNum + 1;
				var currentPage = this.getCurrentPage();
				if (pageNum == currentPage)
					pager.append('<span class="current">'+pageLabel+'</span>');
				else if (pageNum < numPages) {
					var imageIndex = pageNum*this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[imageIndex].hash+'" title="'+pageLabel+'">'+pageLabel+'</a>');
				}
				
				return this;
			}
		});

		// Now initialize the gallery
		$.extend(this, defaults, settings);
		
		// Verify the history plugin is available
		if (this.enableHistory && !$.historyInit)
			this.enableHistory = false;
		
		// Select containers
		if (this.imageContainerSel) this.$imageContainer = $(this.imageContainerSel);
		if (this.captionContainerSel) this.$captionContainer = $(this.captionContainerSel);
		if (this.loadingContainerSel) this.$loadingContainer = $(this.loadingContainerSel);

		// Initialize the thumbails
		this.initializeThumbs();
		
		if (this.maxPagesToShow < 3)
			this.maxPagesToShow = 3;

		this.displayedPage = -1;
		this.currentImage = this.data[0];
		var gallery = this;

		// Hide the loadingContainer
		if (this.$loadingContainer)
			this.$loadingContainer.hide();

		// Setup controls
		if (this.controlsContainerSel) {
			this.$controlsContainer = $(this.controlsContainerSel).empty();
			
			if (this.renderSSControls) {
				if (this.autoStart) {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#pause" class="pause" title="'+this.pauseLinkText+'">'+this.pauseLinkText+'</a></div>');
				} else {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#play" class="play" title="'+this.playLinkText+'">'+this.playLinkText+'</a></div>');
				}

				this.$controlsContainer.find('div.ss-controls a')
					.click(function(e) {
						gallery.toggleSlideshow();
						e.preventDefault();
						return false;
					});
			}
		
			if (this.renderNavControls) {
				this.$controlsContainer
					.append('<div class="nav-controls"><a class="prev" rel="history" title="'+this.prevLinkText+'">'+this.prevLinkText+'</a><a class="next" rel="history" title="'+this.nextLinkText+'">'+this.nextLinkText+'</a></div>')
					.find('div.nav-controls a')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
			}
		}

		var initFirstImage = !this.enableHistory || !location.hash;
		if (this.enableHistory && location.hash) {
			var hash = $.galleriffic.normalizeHash(location.hash);
			var imageData = allImages[hash];
			if (!imageData)
				initFirstImage = true;
		}

		// Setup gallery to show the first image
		if (initFirstImage)
			this.gotoIndex(0, false, true);

		// Setup Keyboard Navigation
		if (this.enableKeyboardNavigation) {
			$(document).keydown(function(e) {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
				switch(key) {
					case 32: // space
						gallery.next();
						e.preventDefault();
						break;
					case 33: // Page Up
						gallery.previousPage();
						e.preventDefault();
						break;
					case 34: // Page Down
						gallery.nextPage();
						e.preventDefault();
						break;
					case 35: // End
						gallery.gotoIndex(gallery.data.length-1);
						e.preventDefault();
						break;
					case 36: // Home
						gallery.gotoIndex(0);
						e.preventDefault();
						break;
					case 37: // left arrow
						gallery.previous();
						e.preventDefault();
						break;
					case 39: // right arrow
						gallery.next();
						e.preventDefault();
						break;
				}
			});
		}

		// Auto start the slideshow
		if (this.autoStart)
			this.play();

		// Kickoff Image Preloader after 1 second
		setTimeout(function() { gallery.preloadInit(); }, 1000);

		return this;
	};
})(jQuery);
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
/**
 * jQuery lightBox plugin
 * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
 * and adapted to me for use like a plugin from jQuery.
 * @name jquery-lightbox-0.5.js
 * @author Leandro Vieira Pinho - http://leandrovieira.com
 * @version 0.5
 * @date April 11, 2008
 * @category jQuery plugin
 * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
 * @license CCAttribution-ShareAlike 2.5 Brazil - http://creativecommons.org/licenses/by-sa/2.5/br/deed.en_US
 * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.2N.3g=6(4){4=23.2H({2B:\'#34\',2g:0.8,1d:F,1M:\'18/5-33-Y.16\',1v:\'18/5-1u-2Q.16\',1E:\'18/5-1u-2L.16\',1W:\'18/5-1u-2I.16\',19:\'18/5-2F.16\',1f:10,2A:3d,2s:\'1j\',2o:\'32\',2j:\'c\',2f:\'p\',2d:\'n\',h:[],9:0},4);f I=N;6 20(){1X(N,I);u F}6 1X(1e,I){$(\'1U, 1S, 1R\').l({\'1Q\':\'2E\'});1O();4.h.B=0;4.9=0;7(I.B==1){4.h.1J(v 1m(1e.17(\'J\'),1e.17(\'2v\')))}j{36(f i=0;i<I.B;i++){4.h.1J(v 1m(I[i].17(\'J\'),I[i].17(\'2v\')))}}2n(4.h[4.9][0]!=1e.17(\'J\')){4.9++}D()}6 1O(){$(\'m\').31(\'<e g="q-13"></e><e g="q-5"><e g="5-s-b-w"><e g="5-s-b"><1w g="5-b"><e 2V="" g="5-k"><a J="#" g="5-k-V"></a><a J="#" g="5-k-X"></a></e><e g="5-Y"><a J="#" g="5-Y-29"><1w W="\'+4.1M+\'"></a></e></e></e><e g="5-s-b-T-w"><e g="5-s-b-T"><e g="5-b-A"><1i g="5-b-A-1t"></1i><1i g="5-b-A-1g"></1i></e><e g="5-1s"><a J="#" g="5-1s-22"><1w W="\'+4.1W+\'"></a></e></e></e></e>\');f z=1D();$(\'#q-13\').l({2K:4.2B,2J:4.2g,S:z[0],P:z[1]}).1V();f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]}).E();$(\'#q-13,#q-5\').C(6(){1a()});$(\'#5-Y-29,#5-1s-22\').C(6(){1a();u F});$(G).2G(6(){f z=1D();$(\'#q-13\').l({S:z[0],P:z[1]});f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]})})}6 D(){$(\'#5-Y\').E();7(4.1d){$(\'#5-b,#5-s-b-T-w,#5-b-A-1g\').1b()}j{$(\'#5-b,#5-k,#5-k-V,#5-k-X,#5-s-b-T-w,#5-b-A-1g\').1b()}f Q=v 1j();Q.1P=6(){$(\'#5-b\').2D(\'W\',4.h[4.9][0]);1N(Q.S,Q.P);Q.1P=6(){}};Q.W=4.h[4.9][0]};6 1N(1o,1r){f 1L=$(\'#5-s-b-w\').S();f 1K=$(\'#5-s-b-w\').P();f 1n=(1o+(4.1f*2));f 1y=(1r+(4.1f*2));f 1I=1L-1n;f 2z=1K-1y;$(\'#5-s-b-w\').3f({S:1n,P:1y},4.2A,6(){2y()});7((1I==0)&&(2z==0)){7($.3e.3c){1H(3b)}j{1H(3a)}}$(\'#5-s-b-T-w\').l({S:1o});$(\'#5-k-V,#5-k-X\').l({P:1r+(4.1f*2)})};6 2y(){$(\'#5-Y\').1b();$(\'#5-b\').1V(6(){2u();2t()});2r()};6 2u(){$(\'#5-s-b-T-w\').38(\'35\');$(\'#5-b-A-1t\').1b();7(4.h[4.9][1]){$(\'#5-b-A-1t\').2p(4.h[4.9][1]).E()}7(4.h.B>1){$(\'#5-b-A-1g\').2p(4.2s+\' \'+(4.9+1)+\' \'+4.2o+\' \'+4.h.B).E()}}6 2t(){$(\'#5-k\').E();$(\'#5-k-V,#5-k-X\').l({\'K\':\'1C M(\'+4.19+\') L-O\'});7(4.9!=0){7(4.1d){$(\'#5-k-V\').l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9-1;D();u F})}j{$(\'#5-k-V\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9-1;D();u F})}}7(4.9!=(4.h.B-1)){7(4.1d){$(\'#5-k-X\').l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9+1;D();u F})}j{$(\'#5-k-X\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9+1;D();u F})}}2k()}6 2k(){$(d).30(6(12){2i(12)})}6 1G(){$(d).11()}6 2i(12){7(12==2h){U=2Z.2e;1x=27}j{U=12.2e;1x=12.2Y}14=2X.2W(U).2U();7((14==4.2j)||(14==\'x\')||(U==1x)){1a()}7((14==4.2f)||(U==37)){7(4.9!=0){4.9=4.9-1;D();1G()}}7((14==4.2d)||(U==39)){7(4.9!=(4.h.B-1)){4.9=4.9+1;D();1G()}}}6 2r(){7((4.h.B-1)>4.9){2c=v 1j();2c.W=4.h[4.9+1][0]}7(4.9>0){2b=v 1j();2b.W=4.h[4.9-1][0]}}6 1a(){$(\'#q-5\').2a();$(\'#q-13\').2T(6(){$(\'#q-13\').2a()});$(\'1U, 1S, 1R\').l({\'1Q\':\'2S\'})}6 1D(){f o,r;7(G.1h&&G.28){o=G.26+G.2R;r=G.1h+G.28}j 7(d.m.25>d.m.24){o=d.m.2P;r=d.m.25}j{o=d.m.2O;r=d.m.24}f y,H;7(Z.1h){7(d.t.1l){y=d.t.1l}j{y=Z.26}H=Z.1h}j 7(d.t&&d.t.1A){y=d.t.1l;H=d.t.1A}j 7(d.m){y=d.m.1l;H=d.m.1A}7(r<H){1z=H}j{1z=r}7(o<y){1B=o}j{1B=y}21=v 1m(1B,1z,y,H);u 21};6 1p(){f o,r;7(Z.1Z){r=Z.1Z;o=Z.2M}j 7(d.t&&d.t.1F){r=d.t.1F;o=d.t.1Y}j 7(d.m){r=d.m.1F;o=d.m.1Y}2q=v 1m(o,r);u 2q};6 1H(2C){f 2x=v 2w();1q=2h;3h{f 1q=v 2w()}2n(1q-2x<2C)};u N.11(\'C\').C(20)}})(23);',62,204,'||||settings|lightbox|function|if||activeImage||image||document|div|var|id|imageArray||else|nav|css|body||xScroll||jquery|yScroll|container|documentElement|return|new|box||windowWidth|arrPageSizes|details|length|click|_set_image_to_view|show|false|window|windowHeight|jQueryMatchedObj|href|background|no|url|this|repeat|height|objImagePreloader|arrPageScroll|width|data|keycode|btnPrev|src|btnNext|loading|self||unbind|objEvent|overlay|key||gif|getAttribute|images|imageBlank|_finish|hide|left|fixedNavigation|objClicked|containerBorderSize|currentNumber|innerHeight|span|Image|bind|clientWidth|Array|intWidth|intImageWidth|___getPageScroll|curDate|intImageHeight|secNav|caption|btn|imageBtnPrev|img|escapeKey|intHeight|pageHeight|clientHeight|pageWidth|transparent|___getPageSize|imageBtnNext|scrollTop|_disable_keyboard_navigation|___pause|intDiffW|push|intCurrentHeight|intCurrentWidth|imageLoading|_resize_container_image_box|_set_interface|onload|visibility|select|object|top|embed|fadeIn|imageBtnClose|_start|scrollLeft|pageYOffset|_initialize|arrayPageSize|btnClose|jQuery|offsetHeight|scrollHeight|innerWidth||scrollMaxY|link|remove|objPrev|objNext|keyToNext|keyCode|keyToPrev|overlayOpacity|null|_keyboard_action|keyToClose|_enable_keyboard_navigation|right|hover|while|txtOf|html|arrayPageScroll|_preload_neighbor_images|txtImage|_set_navigation|_show_image_data|title|Date|date|_show_image|intDiffH|containerResizeSpeed|overlayBgColor|ms|attr|hidden|blank|resize|extend|close|opacity|backgroundColor|next|pageXOffset|fn|offsetWidth|scrollWidth|prev|scrollMaxX|visible|fadeOut|toLowerCase|style|fromCharCode|String|DOM_VK_ESCAPE|event|keydown|append|of|ico|000|fast|for||slideDown||100|250|msie|400|browser|animate|lightBox|do'.split('|'),0,{}))/*
 * jQuery Nivo Slider v2.5.1
 * http://nivo.dev7studios.com
 *
 * Copyright 2011, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * March 2010
 */

(function($){var NivoSlider=function(element,options){var settings=$.extend({},$.fn.nivoSlider.defaults,options);var vars={currentSlide:0,currentImage:'',totalSlides:0,randAnim:'',running:false,paused:false,stop:false};var slider=$(element);slider.data('nivo:vars',vars);slider.css('position','relative');slider.addClass('nivoSlider');var kids=slider.children();kids.each(function(){var child=$(this);var link='';if(!child.is('img')){if(child.is('a')){child.addClass('nivo-imageLink');link=child;}
child=child.find('img:first');}
var childWidth=child.width();if(childWidth==0)childWidth=child.attr('width');var childHeight=child.height();if(childHeight==0)childHeight=child.attr('height');if(childWidth>slider.width()){slider.width(childWidth);}
if(childHeight>slider.height()){slider.height(childHeight);}
if(link!=''){link.css('display','none');}
child.css('display','none');vars.totalSlides++;});if(settings.startSlide>0){if(settings.startSlide>=vars.totalSlides)settings.startSlide=vars.totalSlides-1;vars.currentSlide=settings.startSlide;}
if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');slider.append($('<div class="nivo-caption"><p></p></div>').css({display:'none',opacity:settings.captionOpacity}));var processCaption=function(settings){var nivoCaption=$('.nivo-caption',slider);if(vars.currentImage.attr('title')!=''){var title=vars.currentImage.attr('title');if(title.substr(0,1)=='#')title=$(title).html();if(nivoCaption.css('display')=='block'){nivoCaption.find('p').fadeOut(settings.animSpeed,function(){$(this).html(title);$(this).fadeIn(settings.animSpeed);});}else{nivoCaption.find('p').html(title);}
nivoCaption.fadeIn(settings.animSpeed);}else{nivoCaption.fadeOut(settings.animSpeed);}}
processCaption(settings);var timer=0;if(!settings.manualAdvance&&kids.length>1){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
if(settings.directionNav){slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+settings.prevText+'</a><a class="nivo-nextNav">'+settings.nextText+'</a></div>');if(settings.directionNavHide){$('.nivo-directionNav',slider).hide();slider.hover(function(){$('.nivo-directionNav',slider).show();},function(){$('.nivo-directionNav',slider).hide();});}
$('a.nivo-prevNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');});$('a.nivo-nextNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');});}
if(settings.controlNav){var nivoControl=$('<div class="nivo-controlNav"></div>');slider.append(nivoControl);for(var i=0;i<kids.length;i++){if(settings.controlNavThumbs){var child=kids.eq(i);if(!child.is('img')){child=child.find('img:first');}
if(settings.controlNavThumbsFromRel){nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('rel')+'" alt="" /></a>');}else{nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('src').replace(settings.controlNavThumbsSearch,settings.controlNavThumbsReplace)+'" alt="" /></a>');}}else{nivoControl.append('<a class="nivo-control" rel="'+i+'">'+(i+1)+'</a>');}}
$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');$('.nivo-controlNav a',slider).live('click',function(){if(vars.running)return false;if($(this).hasClass('active'))return false;clearInterval(timer);timer='';slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');vars.currentSlide=$(this).attr('rel')-1;nivoRun(slider,kids,settings,'control');});}
if(settings.keyboardNav){$(window).keypress(function(event){if(event.keyCode=='37'){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');}
if(event.keyCode=='39'){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');}});}
if(settings.pauseOnHover){slider.hover(function(){vars.paused=true;clearInterval(timer);timer='';},function(){vars.paused=false;if(timer==''&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}});}
slider.bind('nivo:animFinished',function(){vars.running=false;$(kids).each(function(){if($(this).is('a')){$(this).css('display','none');}});if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
if(timer==''&&!vars.paused&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
settings.afterChange.call(this);});var createSlices=function(slider,settings,vars){for(var i=0;i<settings.slices;i++){var sliceWidth=Math.round(slider.width()/settings.slices);if(i==settings.slices-1){slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:(slider.width()-(sliceWidth*i))+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}else{slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:sliceWidth+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}}}
var createBoxes=function(slider,settings,vars){var boxWidth=Math.round(slider.width()/settings.boxCols);var boxHeight=Math.round(slider.height()/settings.boxRows);for(var rows=0;rows<settings.boxRows;rows++){for(var cols=0;cols<settings.boxCols;cols++){if(cols==settings.boxCols-1){slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:(slider.width()-(boxWidth*cols))+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}else{slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:boxWidth+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}}}}
var nivoRun=function(slider,kids,settings,nudge){var vars=slider.data('nivo:vars');if(vars&&(vars.currentSlide==vars.totalSlides-1)){settings.lastSlide.call(this);}
if((!vars||vars.stop)&&!nudge)return false;settings.beforeChange.call(this);if(!nudge){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}else{if(nudge=='prev'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}
if(nudge=='next'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}}
vars.currentSlide++;if(vars.currentSlide==vars.totalSlides){vars.currentSlide=0;settings.slideshowEnd.call(this);}
if(vars.currentSlide<0)vars.currentSlide=(vars.totalSlides-1);if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if(settings.controlNav){$('.nivo-controlNav a',slider).removeClass('active');$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');}
processCaption(settings);$('.nivo-slice',slider).remove();$('.nivo-box',slider).remove();if(settings.effect=='random'){var anims=new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade','boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');vars.randAnim=anims[Math.floor(Math.random()*(anims.length+1))];if(vars.randAnim==undefined)vars.randAnim='fade';}
if(settings.effect.indexOf(',')!=-1){var anims=settings.effect.split(',');vars.randAnim=anims[Math.floor(Math.random()*(anims.length))];if(vars.randAnim==undefined)vars.randAnim='fade';}
vars.running=true;if(settings.effect=='sliceDown'||settings.effect=='sliceDownRight'||vars.randAnim=='sliceDownRight'||settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'top':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUp'||settings.effect=='sliceUpRight'||vars.randAnim=='sliceUpRight'||settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'bottom':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUpDown'||settings.effect=='sliceUpDownRight'||vars.randAnim=='sliceUpDown'||settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var v=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);if(i==0){slice.css('top','0px');i++;}else{slice.css('bottom','0px');i=0;}
if(v==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;v++;});}
else if(settings.effect=='fold'||vars.randAnim=='fold'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;$('.nivo-slice',slider).each(function(){var slice=$(this);var origWidth=slice.width();slice.css({top:'0px',height:'100%',width:'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='fade'||vars.randAnim=='fade'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':slider.width()+'px'});firstSlice.animate({opacity:'1.0'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInRight'||vars.randAnim=='slideInRight'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInLeft'||vars.randAnim=='slideInLeft'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1','left':'','right':'0px'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){firstSlice.css({'left':'0px','right':''});slider.trigger('nivo:animFinished');});}
else if(settings.effect=='boxRandom'||vars.randAnim=='boxRandom'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var boxes=shuffle($('.nivo-box',slider));boxes.each(function(){var box=$(this);if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=20;i++;});}
else if(settings.effect=='boxRain'||vars.randAnim=='boxRain'||settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var rowIndex=0;var colIndex=0;var box2Darr=new Array();box2Darr[rowIndex]=new Array();var boxes=$('.nivo-box',slider);if(settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){boxes=$('.nivo-box',slider)._reverse();}
boxes.each(function(){box2Darr[rowIndex][colIndex]=$(this);colIndex++;if(colIndex==settings.boxCols){rowIndex++;colIndex=0;box2Darr[rowIndex]=new Array();}});for(var cols=0;cols<(settings.boxCols*2);cols++){var prevCol=cols;for(var rows=0;rows<settings.boxRows;rows++){if(prevCol>=0&&prevCol<settings.boxCols){(function(row,col,time,i,totalBoxes){var box=$(box2Darr[row][col]);var w=box.width();var h=box.height();if(settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){box.width(0).height(0);}
if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3,'',function(){slider.trigger('nivo:animFinished');});},(100+time));}else{setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3);},(100+time));}})(rows,prevCol,timeBuff,i,totalBoxes);i++;}
prevCol--;}
timeBuff+=100;}}}
var shuffle=function(arr){for(var j,x,i=arr.length;i;j=parseInt(Math.random()*i),x=arr[--i],arr[i]=arr[j],arr[j]=x);return arr;}
var trace=function(msg){if(this.console&&typeof console.log!="undefined")
console.log(msg);}
this.stop=function(){if(!$(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=true;trace('Stop Slider');}}
this.start=function(){if($(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=false;trace('Start Slider');}}
settings.afterLoad.call(this);return this;};$.fn.nivoSlider=function(options){return this.each(function(key,value){var element=$(this);if(element.data('nivoslider'))return element.data('nivoslider');var nivoslider=new NivoSlider(this,options);element.data('nivoslider',nivoslider);});};$.fn.nivoSlider.defaults={effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:'.jpg',controlNavThumbsReplace:'_thumb.jpg',keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,prevText:'Prev',nextText:'Next',beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};$.fn._reverse=[].reverse;})(jQuery);// JavaScript Document
function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav>li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).fadeIn('fast');
		$(this) .addClass( 'on');
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		$(this) .removeClass( 'on');
		});
}
$(document).ready(function(){					
	mainmenu();
});

/*!
 * jQuery JavaScript Library v1.5
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Mon Jan 31 08:31:29 2011 -0500
 */
(function(a,b){function b$(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function bX(a){if(!bR[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bR[a]=c}return bR[a]}function bW(a,b){var c={};d.each(bV.concat.apply([],bV.slice(0,b)),function(){c[this]=a});return c}function bJ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f=a.converters,g,h=e.length,i,j=e[0],k,l,m,n,o;for(g=1;g<h;g++){k=j,j=e[g];if(j==="*")j=k;else if(k!=="*"&&k!==j){l=k+" "+j,m=f[l]||f["* "+j];if(!m){o=b;for(n in f){i=n.split(" ");if(i[0]===k||i[0]==="*"){o=f[i[1]+" "+j];if(o){n=f[n],n===!0?m=o:o===!0&&(m=n);break}}}}!m&&!o&&d.error("No conversion from "+l.replace(" "," to ")),m!==!0&&(c=m?m(c):o(n(c)))}}return c}function bI(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bH(a,b,c,e){d.isArray(b)&&b.length?d.each(b,function(b,f){c||bp.test(a)?e(a,f):bH(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)}):c||b==null||typeof b!=="object"?e(a,b):d.isArray(b)||d.isEmptyObject(b)?e(a,""):d.each(b,function(b,d){bH(a+"["+b+"]",d,c,e)})}function bG(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bD,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(g[l]?l=b:(c.dataTypes.unshift(l),l=bG(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bG(a,c,d,e,"*",g));return l}function bF(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bz),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bn(a,b,c){var e=b==="width"?bh:bi,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function _(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(q,"`").replace(r,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,p,q=[],r=[],s=d._data(this,u);typeof s==="function"&&(s=s.events);if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(o,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,p=f.handleObj.origHandler.apply(f.elem,arguments);if(p===!1||a.isPropagationStopped()){c=f.level,p===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,b,c){c[0].type=a;return d.event.handle.apply(b,c)}function w(){return!0}function v(){return!1}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");e.type="text/javascript",d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a,c){if(a==null){if(e)return e;e=a={}}c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.then(c.cancel,b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments,c=b.length,e=c<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),f=e.promise(),g;c>1?(g=Array(c),d.each(b,function(a,b){d.when(b).then(function(b){g[a]=arguments.length>1?E.call(arguments,0):b,--c||e.resolveWith(f,g)},e.reject)})):e!==a&&e.resolve(a);return f},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return a.jQuery=a.$=d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option"));if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:b.getElementsByTagName("input")[0].value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,_scriptEval:null,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},g.disabled=!0,d.support.optDisabled=!h.disabled,d.support.scriptEval=function(){if(d.support._scriptEval===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();e.type="text/javascript";try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(d.support._scriptEval=!0,delete a[f]):d.support._scriptEval=!1,b.removeChild(e),b=e=f=null}return d.support._scriptEval};try{delete b.test}catch(i){d.support.deleteExpando=!1}b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function j(){d.support.noCloneEvent=!1,b.detachEvent("onclick",j)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var k=c.createDocumentFragment();k.appendChild(b.firstChild),d.support.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var l=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=l("submit"),d.support.changeBubbles=l("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!d.isEmptyObject(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={}),typeof c==="object"&&(f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c)),i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,g=b.nodeType,h=g?d.cache:b,i=g?b[d.expando]:d.expando;if(!h[i])return;if(c){var j=e?h[i][f]:h[i];if(j){delete j[c];if(!d.isEmptyObject(j))return}}if(e){delete h[i][f];if(!d.isEmptyObject(h[i]))return}var k=h[i][f];d.support.deleteExpando||h!=a?delete h[i]:h[i]=null,k?(h[i]={},h[i][f]=k):g&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var g=/[\n\t\r]/g,h=/\s+/,i=/\r/g,j=/^(?:href|src|style)$/,k=/^(?:button|input)$/i,l=/^(?:button|input|object|select|textarea)$/i,m=/^a(?:rea)?$/i,n=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(h);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",i=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(i+=" "+b[j]);f.className=d.trim(i)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(h);for(var e=0,f=this.length;e<f;e++){var i=this[e];if(i.nodeType===1&&i.className)if(a){var j=(" "+i.className+" ").replace(g," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");i.className=d.trim(j)}else i.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,i=d(this),j=b,k=a.split(h);while(f=k[g++])j=e?j:!i.hasClass(f),i[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(g," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,j=c.type==="select-one";if(f<0)return null;for(var k=j?f:0,l=j?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(j)return a;g.push(a)}}return g}if(n.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(i,"")}return b}var o=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){o&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&n.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=j.test(c);if(c==="selected"&&!d.support.optSelected){var n=a.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&k.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:l.test(a.nodeName)||m.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var o=/\.(.*)$/,p=/^(?:textarea|input|select)$/i,q=/\./g,r=/ /g,s=/[^\w\s.|`]/g,t=function(a){return a.replace(s,"\\$&")},u="events";d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a);if(f===!1)f=v;else if(!f)return;var h,i;f.handler&&(h=f,f=h.handler),f.guid||(f.guid=d.guid++);var j=d._data(c);if(!j)return;var k=j[u],l=j.handle;typeof k==="function"?(l=k.handle,k=k.events):k||(c.nodeType||(j[u]=j=function(){}),j.events=k={}),l||(j.handle=l=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(l.elem,arguments):b}),l.elem=c,e=e.split(" ");var m,n=0,o;while(m=e[n++]){i=h?d.extend({},h):{handler:f,data:g},m.indexOf(".")>-1?(o=m.split("."),m=o.shift(),i.namespace=o.slice(0).sort().join(".")):(o=[],i.namespace=""),i.type=m,i.guid||(i.guid=f.guid);var p=k[m],q=d.event.special[m]||{};if(!p){p=k[m]=[];if(!q.setup||q.setup.call(c,g,o,l)===!1)c.addEventListener?c.addEventListener(m,l,!1):c.attachEvent&&c.attachEvent("on"+m,l)}q.add&&(q.add.call(c,i),i.handler.guid||(i.handler.guid=f.guid)),p.push(i),d.event.global[m]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),w=s&&s[u];if(!s||!w)return;typeof w==="function"&&(s=w,w=w.events),c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in w)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),t).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=w[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete w[h]}if(d.isEmptyObject(w)){var x=s.handle;x&&(x.elem=null),delete s.events,delete s.handle,typeof s==="function"?d.removeData(a,u,!0):d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=e.nodeType?d._data(e,"handle"):(d._data(e,u)||{}).handle;h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(o,""),n=d.nodeName(l,"a")&&m==="click",p=d.event.special[m]||{};if((!p._default||p._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,u),typeof i==="function"&&(i=i.events),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(c){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,c){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="submit"||e==="image")&&d(c).closest("form").length){a.liveFired=b;return C("submit",this,arguments)}}),d.event.add(this,"keypress.specialSubmit",function(a){var c=a.target,e=c.type;if((e==="text"||e==="password")&&d(c).closest("form").length&&a.keyCode===13){a.liveFired=b;return C("submit",this,arguments)}});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(p.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f){a.type="change",a.liveFired=b;return d.event.trigger(a,arguments[1],c)}}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;if(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")return B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")return B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return p.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return p.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var p in a)n[c](p,e,a[p],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=o.exec(h),k="",j&&(k=j[0],h=h.replace(o,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function s(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var j=d[g];if(j){var k=!1;j=j[a];while(j){if(j.sizcache===c){k=d[j.sizset];break}if(j.nodeType===1){f||(j.sizcache=c,j.sizset=g);if(typeof b!=="string"){if(j===b){k=!0;break}}else if(i.filter(b,[j]).length>0){k=j;break}}j=j[a]}d[g]=k}}}function r(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0;[0,0].sort(function(){h=!1;return 0});var i=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var l,m,o,p,q,r,s,u,v=!0,w=i.isXML(d),x=[],y=b;do{a.exec(""),l=a.exec(y);if(l){y=l[3],x.push(l[1]);if(l[2]){p=l[3];break}}}while(l);if(x.length>1&&k.exec(b))if(x.length===2&&j.relative[x[0]])m=t(x[0]+x[1],d);else{m=j.relative[x[0]]?[d]:i(x.shift(),d);while(x.length)b=x.shift(),j.relative[b]&&(b+=x.shift()),m=t(b,m)}else{!g&&x.length>1&&d.nodeType===9&&!w&&j.match.ID.test(x[0])&&!j.match.ID.test(x[x.length-1])&&(q=i.find(x.shift(),d,w),d=q.expr?i.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:n(g)}:i.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),m=q.expr?i.filter(q.expr,q.set):q.set,x.length>0?o=n(m):v=!1;while(x.length)r=x.pop(),s=r,j.relative[r]?s=x.pop():r="",s==null&&(s=d),j.relative[r](o,s,w)}else o=x=[]}o||(o=m),o||i.error(r||b);if(f.call(o)==="[object Array]")if(v)if(d&&d.nodeType===1)for(u=0;o[u]!=null;u++)o[u]&&(o[u]===!0||o[u].nodeType===1&&i.contains(d,o[u]))&&e.push(m[u]);else for(u=0;o[u]!=null;u++)o[u]&&o[u].nodeType===1&&e.push(m[u]);else e.push.apply(e,o);else n(o,e);p&&(i(p,h,e,g),i.uniqueSort(e));return e};i.uniqueSort=function(a){if(p){g=h,a.sort(p);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},i.matches=function(a,b){return i(a,null,null,b)},i.matchesSelector=function(a,b){return i(b,null,null,[a]).length>0},i.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=j.order.length;e<f;e++){var g,h=j.order[e];if(g=j.leftMatch[h].exec(a)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(/\\/g,""),d=j.find[h](g,b,c);if(d!=null){a=a.replace(j.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},i.filter=function(a,c,d,e){var f,g,h=a,k=[],l=c,m=c&&c[0]&&i.isXML(c[0]);while(a&&c.length){for(var n in j.filter)if((f=j.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=j.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;l===k&&(k=[]);if(j.preFilter[n]){f=j.preFilter[n](f,l,d,k,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=l[s])!=null;s++)if(p){o=q(p,f,s,l);var t=e^!!o;d&&o!=null?t?g=!0:l[s]=!1:t&&(k.push(p),g=!0)}if(o!==b){d||(l=k),a=a.replace(j.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)i.error(a);else break;h=a}return l},i.error=function(a){throw"Syntax error, unrecognized expression: "+a};var j=i.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!/\W/.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&i.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!/\W/.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&i.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=s;typeof b==="string"&&!/\W/.test(b)&&(b=b.toLowerCase(),d=b,g=r),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){return a[1].toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||i.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&i.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(/\\/g,"");!f&&j.attrMap[g]&&(a[1]=j.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(/\\/g,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=i(b[3],null,null,c);else{var g=i.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(j.match.POS.test(b[0])||j.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!i(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=j.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||i.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,k=g.length;h<k;h++)if(g[h]===a)return!1;return!0}i.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=j.attrHandle[c]?j.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=j.setFilters[e];if(f)return f(a,c,b,d)}}},k=j.match.POS,l=function(a,b){return"\\"+(b-0+1)};for(var m in j.match)j.match[m]=new RegExp(j.match[m].source+/(?![^\[]*\])(?![^\(]*\))/.source),j.leftMatch[m]=new RegExp(/(^(?:.|\r|\n)*?)/.source+j.match[m].source.replace(/\\(\d+)/g,l));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(o){n=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var p,q;c.documentElement.compareDocumentPosition?p=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(p=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return q(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return q(e[k],f[k]);return k===c?q(a,f[k],-1):q(e[k],b,1)},q=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),i.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=i.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(j.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},j.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(j.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(j.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=i,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){i=function(b,e,f,g){e=e||c;if(!g&&!i.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return n(e.getElementsByTagName(b),f);if(h[2]&&j.find.CLASS&&e.getElementsByClassName)return n(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return n([e.body],f);if(h&&h[3]){var k=e.getElementById(h[3]);if(!k||!k.parentNode)return n([],f);if(k.id===h[3])return n([k],f)}try{return n(e.querySelectorAll(b),f)}catch(l){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e.getAttribute("id"),o=m||d,p=e.parentNode,q=/^\s*[+~]/.test(b);m?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),q&&p&&(e=e.parentNode);try{if(!q||p)return n(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(r){}finally{m||e.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)i[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(i.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!i.isXML(a))try{if(d||!j.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return i(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;j.order.splice(1,0,"CLASS"),j.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?i.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?i.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains=function(){return!1},i.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var t=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=j.match.PSEUDO.exec(a))e+=c[0],a=a.replace(j.match.PSEUDO,"");a=j.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)i(a,f[g],d);return i.filter(e,d)};d.find=i,d.expr=i.selectors,d.expr[":"]=d.expr.filters,d.unique=i.uniqueSort,d.text=i.getText,d.isXMLDoc=i.isXML,d.contains=i.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!0:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,_)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if(!d.support.noCloneEvent&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");for(h=0;f[h];++h)$(f[h],g[h]);$(a,e)}if(b){Z(a,e);if(c&&"getElementsByTagName"in a){f=a.getElementsByTagName("*"),g=e.getElementsByTagName("*");if(f.length)for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var ba=/alpha\([^)]*\)/i,bb=/opacity=([^)]*)/,bc=/-([a-z])/ig,bd=/([A-Z])/g,be=/^-?\d+(?:px)?$/i,bf=/^-?\d/,bg={position:"absolute",visibility:"hidden",display:"block"},bh=["Left","Right"],bi=["Top","Bottom"],bj,bk,bl,bm=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bj(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bj)return bj(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bc,bm)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bn(a,b,e):d.swap(a,bg,function(){f=bn(a,b,e)});if(f<=0){f=bj(a,b,b),f==="0px"&&bl&&(f=bl(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!be.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=ba.test(f)?f.replace(ba,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bk=function(a,c,e){var f,g,h;e=e.replace(bd,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bl=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!be.test(d)&&bf.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bj=bk||bl,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bo=/%20/g,bp=/\[\]$/,bq=/\r?\n/g,br=/#.*$/,bs=/^(.*?):\s*(.*?)\r?$/mg,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bu=/^(?:GET|HEAD)$/,bv=/^\/\//,bw=/\?/,bx=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,by=/^(?:select|textarea)/i,bz=/\s+/,bA=/([?&])_=[^&]*/,bB=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/,bC=d.fn.load,bD={},bE={};d.fn.extend({load:function(a,b,c){if(typeof a!=="string"&&bC)return bC.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";b&&(d.isFunction(b)?(c=b,b=null):typeof b==="object"&&(b=d.param(b,d.ajaxSettings.traditional),g="POST"));var h=this;d.ajax({url:a,type:g,dataType:"html",data:b,complete:function(a,b,e){e=a.responseText,a.isResolved()&&(a.done(function(a){e=a}),h.html(f?d("<div>").append(e.replace(bx,"")).find(f):e)),c&&h.each(c,[e,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||by.test(this.nodeName)||bt.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(bq,"\r\n")}}):{name:b.name,value:c.replace(bq,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,b){d[b]=function(a,c,e,f){d.isFunction(c)&&(f=f||e,e=c,c=null);return d.ajax({type:b,url:a,data:c,success:e,dataType:f})}}),d.extend({getScript:function(a,b){return d.get(a,null,b,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a){d.extend(!0,d.ajaxSettings,a),a.context&&(d.ajaxSettings.context=a.context)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bF(bD),ajaxTransport:bF(bE),ajax:function(a,e){function w(a,c,e,l){if(t!==2){t=2,p&&clearTimeout(p),o=b,m=l||"",v.readyState=a?4:0;var n,q,r,s=e?bI(f,v,e):b,u,w;if(a>=200&&a<300||a===304){if(f.ifModified){if(u=v.getResponseHeader("Last-Modified"))d.lastModified[f.url]=u;if(w=v.getResponseHeader("Etag"))d.etag[f.url]=w}if(a===304)c="notmodified",n=!0;else try{q=bJ(f,s),c="success",n=!0}catch(x){c="parsererror",r=x}}else r=c,a&&(c="error",a<0&&(a=0));v.status=a,v.statusText=c,n?i.resolveWith(g,[q,c,v]):i.rejectWith(g,[v,c,r]),v.statusCode(k),k=b,f.global&&h.trigger("ajax"+(n?"Success":"Error"),[v,f,n?q:r]),j.resolveWith(g,[v,c]),f.global&&(h.trigger("ajaxComplete",[v,f]),--d.active||d.event.trigger("ajaxStop"))}}typeof e!=="object"&&(e=a,a=b),e=e||{};var f=d.extend(!0,{},d.ajaxSettings,e),g=(f.context=("context"in e?e:d.ajaxSettings).context)||f,h=g===f?d.event:d(g),i=d.Deferred(),j=d._Deferred(),k=f.statusCode||{},l={},m,n,o,p,q=c.location,r=q.protocol||"http:",s,t=0,u,v={readyState:0,setRequestHeader:function(a,b){t===0&&(l[a.toLowerCase()]=b);return this},getAllResponseHeaders:function(){return t===2?m:null},getResponseHeader:function(a){var b;if(t===2){if(!n){n={};while(b=bs.exec(m))n[b[1].toLowerCase()]=b[2]}b=n[a.toLowerCase()]}return b||null},abort:function(a){a=a||"abort",o&&o.abort(a),w(0,a);return this}};i.promise(v),v.success=v.done,v.error=v.fail,v.complete=j.done,v.statusCode=function(a){if(a){var b;if(t<2)for(b in a)k[b]=[k[b],a[b]];else b=a[v.status],v.then(b,b)}return this},f.url=(""+(a||f.url)).replace(br,"").replace(bv,r+"//"),f.dataTypes=d.trim(f.dataType||"*").toLowerCase().split(bz),f.crossDomain||(s=bB.exec(f.url.toLowerCase()),f.crossDomain=s&&(s[1]!=r||s[2]!=q.hostname||(s[3]||(s[1]==="http:"?80:443))!=(q.port||(r==="http:"?80:443)))),f.data&&f.processData&&typeof f.data!=="string"&&(f.data=d.param(f.data,f.traditional)),bG(bD,f,e,v),f.type=f.type.toUpperCase(),f.hasContent=!bu.test(f.type),f.global&&d.active++===0&&d.event.trigger("ajaxStart");if(!f.hasContent){f.data&&(f.url+=(bw.test(f.url)?"&":"?")+f.data);if(f.cache===!1){var x=d.now(),y=f.url.replace(bA,"$1_="+x);f.url=y+(y===f.url?(bw.test(f.url)?"&":"?")+"_="+x:"")}}if(f.data&&f.hasContent&&f.contentType!==!1||e.contentType)l["content-type"]=f.contentType;f.ifModified&&(d.lastModified[f.url]&&(l["if-modified-since"]=d.lastModified[f.url]),d.etag[f.url]&&(l["if-none-match"]=d.etag[f.url])),l.accept=f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+(f.dataTypes[0]!=="*"?", */*; q=0.01":""):f.accepts["*"];for(u in f.headers)l[u.toLowerCase()]=f.headers[u];if(!f.beforeSend||f.beforeSend.call(g,v,f)!==!1&&t!==2){for(u in {success:1,error:1,complete:1})v[u](f[u]);o=bG(bE,f,e,v);if(o){t=v.readyState=1,f.global&&h.trigger("ajaxSend",[v,f]),f.async&&f.timeout>0&&(p=setTimeout(function(){v.abort("timeout")},f.timeout));try{o.send(l,w)}catch(z){status<2?w(-1,z):d.error(z)}}else w(-1,"No Transport")}else w(0,"abort"),v=!1;return v},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery)d.each(a,function(){f(this.name,this.value)});else for(var g in a)bH(g,a[g],c,f);return e.join("&").replace(bo,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bK=d.now(),bL=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bK++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){e=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bL.test(b.url)||e&&bL.test(b.data))){var f,g=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";b.jsonp!==!1&&(i=i.replace(bL,k),b.url===i&&(e&&(j=j.replace(bL,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},b.complete=[function(){a[g]=h;if(h)f&&d.isFunction(h)&&a[g](f[0]);else try{delete a[g]}catch(b){}},b.complete],b.converters["script json"]=function(){f||d.error(g+" was not called");return f[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript"},contents:{script:/javascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bM=d.now(),bN={},bO,bP;d.ajaxSettings.xhr=a.ActiveXObject?function(){if(a.location.protocol!=="file:")try{return new a.XMLHttpRequest}catch(b){}try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}:function(){return new a.XMLHttpRequest};try{bP=d.ajaxSettings.xhr()}catch(bQ){}d.support.ajax=!!bP,d.support.cors=bP&&"withCredentials"in bP,bP=b,d.support.ajax&&d.ajaxTransport(function(b){if(!b.crossDomain||d.support.cors){var c;return{send:function(e,f){bO||(bO=1,d(a).bind("unload",function(){d.each(bN,function(a,b){b.onreadystatechange&&b.onreadystatechange(1)})}));var g=b.xhr(),h;b.username?g.open(b.type,b.url,b.async,b.username,b.password):g.open(b.type,b.url,b.async),(!b.crossDomain||b.hasContent)&&!e["x-requested-with"]&&(e["x-requested-with"]="XMLHttpRequest");try{d.each(e,function(a,b){g.setRequestHeader(a,b)})}catch(i){}g.send(b.hasContent&&b.data||null),c=function(a,e){if(c&&(e||g.readyState===4)){c=0,h&&(g.onreadystatechange=d.noop,delete bN[h]);if(e)g.readyState!==4&&g.abort();else{var i=g.status,j,k=g.getAllResponseHeaders(),l={},m=g.responseXML;m&&m.documentElement&&(l.xml=m),l.text=g.responseText;try{j=g.statusText}catch(n){j=""}i=i===0?!b.crossDomain||j?k?304:0:302:i==1223?204:i,f(i,j,l,k)}}},b.async&&g.readyState!==4?(h=bM++,bN[h]=g,g.onreadystatechange=c):c()},abort:function(){c&&c(0,1)}}}});var bR={},bS=/^(?:toggle|show|hide)$/,bT=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,bU,bV=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(bW("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",bX(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(bW("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(bW("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=bX(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(bS.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=bT.exec(e),j=f.cur()||0;if(i){var k=parseFloat(i[2]),l=i[3]||"px";l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:bW("show",1),slideUp:bW("hide",1),slideToggle:bW("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a=parseFloat(d.css(this.elem,this.prop));return a||0},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||"px",this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!bU&&(bU=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(bU),bU=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var bY=/^t(?:able|d|h)$/i,bZ=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=b$(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!bY.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=bZ.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!bZ.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=b$(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=b$(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}})})(window);
/**
 * Copyright (c) 2010 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.4
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(8($){$.3n.3o=8(b){5 c={2s:\'Z.3p\',1W:0,1X:q,11:0.7,2t:q,1b:3q,v:q,x:q,2u:B,2v:B,1Y:0,t:{1c:B,1Z:q,1d:3r,2w:\'3s\',2x:\'3t\',20:B,2y:\'(\',2z:\')\',2A:q,2B:q},2C:\'21-2D\',2E:B,1z:B,1A:{1e:q,2F:q,2G:q}};5 d=$.2H(q,c,b);4(b&&b.t){d.t=$.2H(q,c.t,b.t)};4(!d.t.1c){d.t.1Z=q};5 e=[];$(3).2I(8(){5 a=1B 22(3,d);e[e.J]=a});w e};8 2J(a,b,c){5 d=12(a.u(\'Q\'),10);4(b==\'C\'){5 e=\'-\'+3.D+\'z\';a.u(\'Q\',3.D+\'z\')}y{5 e=3.D+\'z\';a.u(\'Q\',\'-\'+3.D+\'z\')};4(c){c.u(\'1f\',\'-\'+c[0].1C+\'z\');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:\'-\'+3.R[0].1C+\'z\'},3.r.1b*2)};w{1g:{Q:e},1h:{Q:d}}};8 2K(a,b,c){5 d=12(a.u(\'C\'),10);4(b==\'C\'){5 e=\'-\'+3.K+\'z\';a.u(\'C\',3.K+\'z\')}y{5 e=3.K+\'z\';a.u(\'C\',\'-\'+3.K+\'z\')};4(c){c.u(\'1f\',\'-\'+c[0].1C+\'z\');c.13({1f:0},3.r.1b*2)};4(3.R){3.R.13({1f:\'-\'+3.R[0].1C+\'z\'},3.r.1b*2)};w{1g:{C:e},1h:{C:d}}};8 2L(a,b,c){5 d=a.v();5 e=a.x();5 f=12(a.u(\'C\'),10);5 g=12(a.u(\'Q\'),10);a.u({v:0,x:0,Q:3.D/2,C:3.K/2});w{1g:{v:0,x:0,Q:3.D/2,C:3.K/2},1h:{v:d,x:e,Q:g,C:f}}};8 2M(a,b,c){a.u(\'S\',0);w{1g:{S:0},1h:{S:1}}};8 2N(a,b,c){a.u(\'S\',0);w{1g:{S:0},1h:{S:1},1d:0}};8 22(a,b){3.1e(a,b)};22.2O={17:q,T:q,1D:q,V:q,Z:q,1r:q,N:q,1E:q,1F:q,1i:q,1j:q,t:q,K:0,D:0,O:0,18:q,R:q,1G:0,r:q,G:q,1k:q,1H:q,1e:8(b,c){5 d=3;3.17=$(b);3.r=c;3.2P();3.2Q();4(3.r.v){3.K=3.r.v;3.T.v(3.r.v);3.17.v(3.r.v)}y{3.K=3.T.v()};4(3.r.x){3.D=3.r.x;3.T.x(3.r.x)}y{3.D=3.T.x()};3.1G=3.V.v();3.O=0;3.18=q;3.R=q;3.1k=q;3.2R();4(3.r.2u){3.2S()};5 e=8(a){w d.1I(a)};3.t=1B 23(e,3.r.t);3.L.F(3.t.2T());4(3.r.t.1c){3.t.1c()}y{3.t.24()};4(3.r.2v){3.2U()};4(3.r.2E){3.2V()};5 f=12(3.r.1W,10);4(25.26.27&&25.26.27.3u(\'#s-W\')===0){f=25.26.27.2W(/[^0-9]+/g,\'\');4((f*1)!=f){f=3.r.1W}};3.1J(B);3.1s(f,8(){4(d.r.t.1Z){d.14(f+1);d.t.1t()}});3.P(3.r.1A.1e)},2Q:8(){3.1H={\'21-3v\':2J,\'21-2D\':2K,\'3w\':2L,\'3x\':2M,\'3y\':2N}},2P:8(){3.L=3.17.E(\'.s-L\');3.1D=$(\'<p H="s-3z"></p>\');3.L.F(3.1D);3.T=3.17.E(\'.s-W-17\');3.T.3A();3.V=3.17.E(\'.s-V\');3.N=3.V.E(\'.s-3B\');3.1r=$(\'<A H="s-1r"></A>\');3.Z=$(\'<19 H="s-Z" 1K="\'+3.r.2s+\'">\');3.T.F(3.Z);3.Z.15();$(1L.3C).F(3.1r)},1J:8(a){4(a){3.Z.1l()}y{3.Z.15()}},3D:8(a,b){4($.28(b)){3.1H[a]=b}},2R:8(){5 f=3;3.G=[];5 g=0;5 h=0;5 j=3.N.E(\'a\');5 k=j.J;4(3.r.11<1){j.E(\'19\').u(\'S\',3.r.11)};j.2I(8(i){5 a=$(3);5 b=a.I(\'2X\');5 c=a.E(\'19\');4(!f.29(c[0])){c.2Y(8(){g+=3.1u.1u.2a;h++})}y{g+=c[0].1u.1u.2a;h++};a.1M(\'s-1N\'+i);a.1v(8(){f.1s(i);f.t.M();w q}).2Z(8(){4(!$(3).1w(\'.s-1m\')&&f.r.11<1){$(3).E(\'19\').1O(1P,1)};f.14(i)},8(){4(!$(3).1w(\'.s-1m\')&&f.r.11<1){$(3).E(\'19\').1O(1P,f.r.11)}});5 a=q;4(c.1n(\'s-1x\')){a=c.1n(\'s-1x\')}y 4(c.I(\'2b\')&&c.I(\'2b\').J){a=c.I(\'2b\')};5 d=q;4(c.1n(\'s-1o\')){d=c.1n(\'s-1o\')}y 4(c.I(\'2c\')&&c.I(\'2c\').J){d=c.I(\'2c\')};5 e=q;4(c.1n(\'s-U\')){e=c.1n(\'s-U\')}y 4(c.I(\'U\')&&c.I(\'U\').J){e=c.I(\'U\')};f.G[i]={1N:c.I(\'1K\'),W:b,2d:q,1p:q,1o:d,U:e,1q:q,1x:a}});5 l=2e(8(){4(k==h){f.V.E(\'.s-1N-3E\').u(\'v\',g+\'z\');1Q(l)}},3F)},2V:8(){5 a=3;$(1L).31(8(e){4(e.2f==39){a.1I();a.t.M()}y 4(e.2f==37){a.2g();a.t.M()}})},2S:8(){3.1i=$(\'<A H="s-2h"><A H="s-2h-W"></A></A>\');3.1j=$(\'<A H="s-32"><A H="s-32-W"></A></A>\');3.T.F(3.1i);3.T.F(3.1j);5 a=3;3.1j.33(3.1i).3G(8(e){$(3).u(\'x\',a.D);$(3).E(\'A\').1l()}).3H(8(e){$(3).E(\'A\').15()}).1v(8(){4($(3).1w(\'.s-2h\')){a.1I();a.t.M()}y{a.2g();a.t.M()}}).E(\'A\').u(\'S\',0.7)},2U:8(){5 c=3;3.1F=$(\'<A H="s-2i"></A>\');3.1E=$(\'<A H="s-3I"></A>\');3.V.F(3.1F);3.V.34(3.1E);5 d=0;5 e=q;$(3.1E).33(3.1F).1v(8(){5 a=c.1G-3J;4(c.r.1Y>0){5 a=c.r.1Y};4($(3).1w(\'.s-2i\')){5 b=c.N.1a()+a}y{5 b=c.N.1a()-a};4(c.r.t.20){c.t.M()};c.N.13({1a:b+\'z\'});w q}).u(\'S\',0.6).2Z(8(){5 b=\'C\';4($(3).1w(\'.s-2i\')){b=\'2j\'};e=2e(8(){d++;4(d>30&&c.r.t.20){c.t.M()};5 a=c.N.1a()+1;4(b==\'C\'){a=c.N.1a()-1};c.N.1a(a)},10);$(3).u(\'S\',1)},8(){d=0;1Q(e);$(3).u(\'S\',0.6)})},2k:8(){3.1D.2l((3.O+1)+\' / \'+3.G.J);4(!3.r.1z){3.1j.1l().u(\'x\',3.D);3.1i.1l().u(\'x\',3.D);4(3.O==(3.G.J-1)){3.1i.15()};4(3.O==0){3.1j.15()}};3.P(3.r.1A.2F)},35:8(a,b){4(b>3.D){5 c=a/b;b=3.D;a=3.D*c};4(a>3.K){5 c=b/a;a=3.K;b=3.K*c};w{v:a,x:b}},36:8(a,b,c){a.u(\'Q\',\'38\');4(c<3.D){5 d=3.D-c;a.u(\'Q\',(d/2)+\'z\')};a.u(\'C\',\'38\');4(b<3.K){5 d=3.K-b;a.u(\'C\',(d/2)+\'z\')}},3a:8(a){5 b=q;4(a.1o.J||a.U.J){5 c=\'\';4(a.U.J){c=\'<3b H="s-3c-U">\'+a.U+\'</3b>\'};5 b=\'\';4(a.1o.J){b=\'<16>\'+a.1o+\'</16>\'};b=$(\'<p H="s-W-3c">\'+c+b+\'</p>\')};w b},1s:8(a,b){4(3.G[a]&&!3.1k){5 c=3;5 d=3.G[a];3.1k=B;4(!d.1p){3.1J(B);3.14(a,8(){c.1J(q);c.2m(a,b)})}y{3.2m(a,b)}}},2m:8(a,b){4(3.G[a]){5 c=3;5 d=3.G[a];5 e=$(1L.3K(\'A\')).1M(\'s-W\');5 f=$(1B 3d()).I(\'1K\',d.W);4(d.1x){5 g=$(\'<a 2X="\'+d.1x+\'" 3L="3M"></a>\');g.F(f);e.F(g)}y{e.F(f)}3.T.34(e);5 h=3.35(d.1q.v,d.1q.x);f.I(\'v\',h.v);f.I(\'x\',h.x);e.u({v:h.v+\'z\',x:h.x+\'z\'});3.36(e,h.v,h.x);5 i=3.3a(d,e);4(i){4(!3.r.1X){e.F(i);5 j=h.v-12(i.u(\'3e-C\'),10)-12(i.u(\'3e-2j\'),10);i.u(\'v\',j+\'z\')}y{3.r.1X.F(i)}};3.3f(3.V.E(\'.s-1N\'+a));5 k=\'2j\';4(3.O<a){k=\'C\'};3.P(3.r.1A.2G);4(3.18||3.r.2t){5 l=3.r.1b;5 m=\'3N\';5 n=3.1H[3.r.2C].2n(3,e,k,i);4(1R n.1d!=\'1S\'){l=n.1d};4(1R n.3g!=\'1S\'){m=n.3g};4(3.18){5 o=3.18;5 p=3.R;o.13(n.1g,l,m,8(){o.3h();4(p)p.3h()})};e.13(n.1h,l,m,8(){c.O=a;c.18=e;c.R=i;c.1k=q;c.2k();c.P(b)})}y{3.O=a;3.18=e;c.R=i;3.1k=q;c.2k();3.P(b)}}},3i:8(){4(3.O==(3.G.J-1)){4(!3.r.1z){w q};5 a=0}y{5 a=3.O+1};w a},1I:8(a){5 b=3.3i();4(b===q)w q;3.14(b+1);3.1s(b,a);w B},3j:8(){4(3.O==0){4(!3.r.1z){w q};5 a=3.G.J-1}y{5 a=3.O-1};w a},2g:8(a){5 b=3.3j();4(b===q)w q;3.14(b-1);3.1s(b,a);w B},3O:8(){5 a=3;5 i=0;8 2o(){4(i<a.G.J){i++;a.14(i,2o)}};a.14(i,2o)},14:8(a,b){4(3.G[a]){5 c=3.G[a];4(!3.G[a].1p){5 d=$(1B 3d());d.I(\'1K\',c.W);4(!3.29(d[0])){3.1r.F(d);5 e=3;d.2Y(8(){c.1p=B;c.1q={v:3.v,x:3.x};e.P(b)}).2d(8(){c.2d=B;c.1p=q;c.1q=q})}y{c.1p=B;c.1q={v:d[0].v,x:d[0].x};3.P(b)}}y{3.P(b)}}},29:8(a){4(1R a.3k!=\'1S\'&&!a.3k){w q};4(1R a.3l!=\'1S\'&&a.3l==0){w q};w B},3f:8(a){3.N.E(\'.s-1m\').3m(\'s-1m\');a.1M(\'s-1m\');4(3.r.11<1){3.N.E(\'a:3P(.s-1m) 19\').1O(1P,3.r.11);a.E(\'19\').1O(1P,1)};5 b=a[0].1u.3Q;b-=(3.1G/2)-(a[0].2a/2);3.N.13({1a:b+\'z\'})},P:8(a){4($.28(a)){a.2n(3)}}};8 23(a,b){3.1e(a,b)};23.2O={1T:q,1U:q,X:q,L:q,r:q,2p:q,1y:q,Y:q,1V:q,1e:8(a,b){5 c=3;3.2p=a;3.r=b},2T:8(){3.1T=$(\'<16 H="s-t-1t">\'+3.r.2w+\'</16>\');3.1U=$(\'<16 H="s-t-M">\'+3.r.2x+\'</16>\');3.X=$(\'<16 H="s-t-X"></16>\');3.L=$(\'<A H="s-t-L"></A>\');3.L.F(3.1T).F(3.1U).F(3.X);3.X.15();5 a=3;3.1T.1v(8(){a.1t()});3.1U.1v(8(){a.M()});$(1L).31(8(e){4(e.2f==3R){4(a.Y){a.M()}y{a.1t()}}});w 3.L},24:8(){3.1y=q;3.M();3.L.15()},1c:8(){3.1y=B;3.L.1l()},3S:8(){4(3.1y){3.24()}y{3.1c()}},1t:8(){4(3.Y||!3.1y)w q;5 a=3;3.Y=B;3.L.1M(\'s-t-Y\');3.2q();3.P(3.r.2A);w B},M:8(){4(!3.Y)w q;3.Y=q;3.X.15();3.L.3m(\'s-t-Y\');1Q(3.1V);3.P(3.r.2B);w B},2q:8(){5 c=3;5 d=3.r.2y;5 e=3.r.2z;1Q(c.1V);3.X.1l().2l(d+(3.r.1d/2r)+e);5 f=0;3.1V=2e(8(){f+=2r;4(f>=c.r.1d){5 a=8(){4(c.Y){c.2q()};f=0};4(!c.2p(a)){c.M()};f=0};5 b=12(c.X.3T().2W(/[^0-9]/g,\'\'),10);b--;4(b>0){c.X.2l(d+b+e)}},2r)},P:8(a){4($.28(a)){a.2n(3)}}}})(3U);',62,243,'|||this|if|var|||function||||||||||||||||||false|settings|ad|slideshow|css|width|return|height|else|px|div|true|left|image_wrapper_height|find|append|images|class|attr|length|image_wrapper_width|controls|stop|thumbs_wrapper|current_index|fireCallback|top|current_description|opacity|image_wrapper|title|nav|image|countdown|running|loader||thumb_opacity|parseInt|animate|preloadImage|hide|span|wrapper|current_image|img|scrollLeft|animation_speed|enable|speed|init|bottom|old_image|new_image|next_link|prev_link|in_transition|show|active|data|desc|preloaded|size|preloads|showImage|start|parentNode|click|is|link|enabled|cycle|callbacks|new|offsetHeight|gallery_info|scroll_back|scroll_forward|nav_display_width|animations|nextImage|loading|src|document|addClass|thumb|fadeTo|300|clearInterval|typeof|undefined|start_link|stop_link|countdown_interval|start_at_index|description_wrapper|scroll_jump|autostart|stop_on_scroll|slide|AdGallery|AdGallerySlideshow|disable|window|location|hash|isFunction|isImageLoaded|offsetWidth|longdesc|alt|error|setInterval|keyCode|prevImage|next|forward|right|_afterShow|html|_showWhenLoaded|call|preloadNext|nextimage_callback|_next|1000|loader_image|animate_first_image|display_next_and_prev|display_back_and_forward|start_label|stop_label|countdown_prefix|countdown_sufix|onStart|onStop|effect|hori|enable_keyboard_move|afterImageVisible|beforeImageVisible|extend|each|VerticalSlideAnimation|HorizontalSlideAnimation|ResizeAnimation|FadeAnimation|NoneAnimation|prototype|setupElements|setupAnimations|findImages|initNextAndPrev|create|initBackAndForward|initKeyEvents|replace|href|load|hover||keydown|prev|add|prepend|_getContainedImageSize|_centerImage||0px||_getDescription|strong|description|Image|padding|highLightThumb|easing|remove|nextIndex|prevIndex|complete|naturalWidth|removeClass|fn|adGallery|gif|400|5000|Start|Stop|indexOf|vert|resize|fade|none|info|empty|thumbs|body|addAnimation|list|100|mouseover|mouseout|back|50|createElement|target|_blank|swing|preloadAll|not|offsetLeft|83|toggle|text|jQuery'.split('|'),0,{}))/**
 * jQuery Galleriffic plugin
 *
 * Copyright (c) 2008 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Much thanks to primary contributer Ponticlaro (http://www.ponticlaro.com)
 */
;(function($) {
	// Globally keep track of all images by their unique hash.  Each item is an image data object.
	var allImages = {};
	var imageCounter = 0;

	// Galleriffic static class
	$.galleriffic = {
		version: '2.0.1',

		// Strips invalid characters and any leading # characters
		normalizeHash: function(hash) {
			return hash.replace(/^.*#/, '').replace(/\?.*$/, '');
		},

		getImage: function(hash) {
			if (!hash)
				return undefined;

			hash = $.galleriffic.normalizeHash(hash);
			return allImages[hash];
		},

		// Global function that looks up an image by its hash and displays the image.
		// Returns false when an image is not found for the specified hash.
		// @param {String} hash This is the unique hash value assigned to an image.
		gotoImage: function(hash) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			gallery.gotoImage(imageData);
			
			return true;
		},

		// Removes an image from its respective gallery by its hash.
		// Returns false when an image is not found for the specified hash or the
		// specified owner gallery does match the located images gallery.
		// @param {String} hash This is the unique hash value assigned to an image.
		// @param {Object} ownerGallery (Optional) When supplied, the located images
		// gallery is verified to be the same as the specified owning gallery before
		// performing the remove operation.
		removeImageByHash: function(hash, ownerGallery) {
			var imageData = $.galleriffic.getImage(hash);
			if (!imageData)
				return false;

			var gallery = imageData.gallery;
			if (ownerGallery && ownerGallery != gallery)
				return false;

			return gallery.removeImageByIndex(imageData.index);
		}
	};

	var defaults = {
		delay:                     3000,
		numThumbs:                 20,
		preloadAhead:              40, // Set to -1 to preload all images
		enableTopPager:            false,
		enableBottomPager:         true,
		maxPagesToShow:            7,
		imageContainerSel:         '',
		captionContainerSel:       '',
		controlsContainerSel:      '',
		loadingContainerSel:       '',
		renderSSControls:          true,
		renderNavControls:         true,
		playLinkText:              'Play',
		pauseLinkText:             'Pause',
		prevLinkText:              'Previous',
		nextLinkText:              'Next',
		nextPageLinkText:          'Next &rsaquo;',
		prevPageLinkText:          '&lsaquo; Prev',
		enableHistory:             false,
		enableKeyboardNavigation:  true,
		autoStart:                 false,
		syncTransitions:           false,
		defaultTransitionDuration: 1000,
		onSlideChange:             undefined, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
		onTransitionOut:           undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
		onTransitionIn:            undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
		onPageTransitionOut:       undefined, // accepts a delegate like such: function(callback) { ... }
		onPageTransitionIn:        undefined, // accepts a delegate like such: function() { ... }
		onImageAdded:              undefined, // accepts a delegate like such: function(imageData, $li) { ... }
		onImageRemoved:            undefined  // accepts a delegate like such: function(imageData, $li) { ... }
	};

	// Primary Galleriffic initialization function that should be called on the thumbnail container.
	$.fn.galleriffic = function(settings) {
		//  Extend Gallery Object
		$.extend(this, {
			// Returns the version of the script
			version: $.galleriffic.version,

			// Current state of the slideshow
			isSlideshowRunning: false,
			slideshowTimeout: undefined,

			// This function is attached to the click event of generated hyperlinks within the gallery
			clickHandler: function(e, link) {
				this.pause();

				if (!this.enableHistory) {
					// The href attribute holds the unique hash for an image
					var hash = $.galleriffic.normalizeHash($(link).attr('href'));
					$.galleriffic.gotoImage(hash);
					e.preventDefault();
				}
			},

			// Appends an image to the end of the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			appendImage: function(listItem) {
				this.addImage(listItem, false, false);
				return this;
			},

			// Inserts an image into the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			insertImage: function(listItem, position) {
				this.addImage(listItem, false, true, position);
				return this;
			},

			// Adds an image to the gallery and optionally inserts/appends it to the DOM (thumbExists)
			// @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
			// @param {Boolean} thumbExists Specifies whether the thumbnail already exists in the DOM or if it needs to be added.
			// @param {Boolean} insert Specifies whether the the image is appended to the end or inserted into the gallery.
			// @param {Integer} position The index within the gallery where the item shouold be added.
			addImage: function(listItem, thumbExists, insert, position) {
				var $li = ( typeof listItem === "string" ) ? $(listItem) : listItem;				
				var $aThumb = $li.find('a.thumb');
				var slideUrl = $aThumb.attr('href');
				var title = $aThumb.attr('title');
				var $caption = $li.find('.caption').remove();
				var hash = $aThumb.attr('name');

				// Increment the image counter
				imageCounter++;

				// Autogenerate a hash value if none is present or if it is a duplicate
				if (!hash || allImages[''+hash]) {
					hash = imageCounter;
				}

				// Set position to end when not specified
				if (!insert)
					position = this.data.length;
				
				var imageData = {
					title:title,
					slideUrl:slideUrl,
					caption:$caption,
					hash:hash,
					gallery:this,
					index:position
				};

				// Add the imageData to this gallery's array of images
				if (insert) {
					this.data.splice(position, 0, imageData);

					// Reset index value on all imageData objects
					this.updateIndices(position);
				}
				else {
					this.data.push(imageData);
				}

				var gallery = this;

				// Add the element to the DOM
				if (!thumbExists) {
					// Update thumbs passing in addition post transition out handler
					this.updateThumbs(function() {
						var $thumbsUl = gallery.find('ul.thumbs');
						if (insert)
							$thumbsUl.children(':eq('+position+')').before($li);
						else
							$thumbsUl.append($li);
						
						if (gallery.onImageAdded)
							gallery.onImageAdded(imageData, $li);
					});
				}

				// Register the image globally
				allImages[''+hash] = imageData;

				// Setup attributes and click handler
				$aThumb.attr('rel', 'history')
					.attr('href', '#'+hash)
					.removeAttr('name')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});

				return this;
			},

			// Removes an image from the gallery based on its index.
			// Returns false when the index is out of range.
			removeImageByIndex: function(index) {
				if (index < 0 || index >= this.data.length)
					return false;
				
				var imageData = this.data[index];
				if (!imageData)
					return false;
				
				this.removeImage(imageData);
				
				return true;
			},

			// Convenience method that simply calls the global removeImageByHash method.
			removeImageByHash: function(hash) {
				return $.galleriffic.removeImageByHash(hash, this);
			},

			// Removes an image from the gallery.
			removeImage: function(imageData) {
				var index = imageData.index;
				
				// Remove the image from the gallery data array
				this.data.splice(index, 1);
				
				// Remove the global registration
				delete allImages[''+imageData.hash];
				
				// Remove the image's list item from the DOM
				this.updateThumbs(function() {
					var $li = gallery.find('ul.thumbs')
						.children(':eq('+index+')')
						.remove();

					if (gallery.onImageRemoved)
						gallery.onImageRemoved(imageData, $li);
				});

				// Update each image objects index value
				this.updateIndices(index);

				return this;
			},

			// Updates the index values of the each of the images in the gallery after the specified index
			updateIndices: function(startIndex) {
				for (i = startIndex; i < this.data.length; i++) {
					this.data[i].index = i;
				}
				
				return this;
			},

			// Scraped the thumbnail container for thumbs and adds each to the gallery
			initializeThumbs: function() {
				this.data = [];
				var gallery = this;

				this.find('ul.thumbs > li').each(function(i) {
					gallery.addImage($(this), true, false);
				});

				return this;
			},

			isPreloadComplete: false,

			// Initalizes the image preloader
			preloadInit: function() {
				if (this.preloadAhead == 0) return this;
				
				this.preloadStartIndex = this.currentImage.index;
				var nextIndex = this.getNextIndex(this.preloadStartIndex);
				return this.preloadRecursive(this.preloadStartIndex, nextIndex);
			},

			// Changes the location in the gallery the preloader should work
			// @param {Integer} index The index of the image where the preloader should restart at.
			preloadRelocate: function(index) {
				// By changing this startIndex, the current preload script will restart
				this.preloadStartIndex = index;
				return this;
			},

			// Recursive function that performs the image preloading
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadRecursive: function(startIndex, currentIndex) {
				// Check if startIndex has been relocated
				if (startIndex != this.preloadStartIndex) {
					var nextIndex = this.getNextIndex(this.preloadStartIndex);
					return this.preloadRecursive(this.preloadStartIndex, nextIndex);
				}

				var gallery = this;

				// Now check for preloadAhead count
				var preloadCount = currentIndex - startIndex;
				if (preloadCount < 0)
					preloadCount = this.data.length-1-startIndex+currentIndex;
				if (this.preloadAhead >= 0 && preloadCount > this.preloadAhead) {
					// Do this in order to keep checking for relocated start index
					setTimeout(function() { gallery.preloadRecursive(startIndex, currentIndex); }, 500);
					return this;
				}

				var imageData = this.data[currentIndex];
				if (!imageData)
					return this;

				// If already loaded, continue
				if (imageData.image)
					return this.preloadNext(startIndex, currentIndex); 
				
				// Preload the image
				var image = new Image();
				
				image.onload = function() {
					imageData.image = this;
					gallery.preloadNext(startIndex, currentIndex);
				};

				image.alt = imageData.title;
				image.src = imageData.slideUrl;

				return this;
			},
			
			// Called by preloadRecursive in order to preload the next image after the previous has loaded.
			// @param {Integer} startIndex The index of the first image the current preloader started on.
			// @param {Integer} currentIndex The index of the current image to preload.
			preloadNext: function(startIndex, currentIndex) {
				var nextIndex = this.getNextIndex(currentIndex);
				if (nextIndex == startIndex) {
					this.isPreloadComplete = true;
				} else {
					// Use setTimeout to free up thread
					var gallery = this;
					setTimeout(function() { gallery.preloadRecursive(startIndex, nextIndex); }, 100);
				}

				return this;
			},

			// Safe way to get the next image index relative to the current image.
			// If the current image is the last, returns 0
			getNextIndex: function(index) {
				var nextIndex = index+1;
				if (nextIndex >= this.data.length)
					nextIndex = 0;
				return nextIndex;
			},

			// Safe way to get the previous image index relative to the current image.
			// If the current image is the first, return the index of the last image in the gallery.
			getPrevIndex: function(index) {
				var prevIndex = index-1;
				if (prevIndex < 0)
					prevIndex = this.data.length-1;
				return prevIndex;
			},

			// Pauses the slideshow
			pause: function() {
				this.isSlideshowRunning = false;
				if (this.slideshowTimeout) {
					clearTimeout(this.slideshowTimeout);
					this.slideshowTimeout = undefined;
				}

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('play')
						.attr('title', this.playLinkText)
						.attr('href', '#play')
						.html(this.playLinkText);
				}
				
				return this;
			},

			// Plays the slideshow
			play: function() {
				this.isSlideshowRunning = true;

				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.ss-controls a').removeClass().addClass('pause')
						.attr('title', this.pauseLinkText)
						.attr('href', '#pause')
						.html(this.pauseLinkText);
				}

				if (!this.slideshowTimeout) {
					var gallery = this;
					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Toggles the state of the slideshow (playing/paused)
			toggleSlideshow: function() {
				if (this.isSlideshowRunning)
					this.pause();
				else
					this.play();

				return this;
			},

			// Advances the slideshow to the next image and delegates navigation to the
			// history plugin when history is enabled
			// enableHistory is true
			ssAdvance: function() {
				if (this.isSlideshowRunning)
					this.next(true);

				return this;
			},

			// Advances the gallery to the next image.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.  
			next: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getNextIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the previous image in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previous: function(dontPause, bypassHistory) {
				this.gotoIndex(this.getPrevIndex(this.currentImage.index), dontPause, bypassHistory);
				return this;
			},

			// Navigates to the next page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			nextPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				var lastPage = this.getNumPages() - 1;
				if (page < lastPage) {
					var startIndex = page * this.numThumbs;
					var nextPage = startIndex + this.numThumbs;
					this.gotoIndex(nextPage, dontPause, bypassHistory);
				}

				return this;
			},

			// Navigates to the previous page in the gallery.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			previousPage: function(dontPause, bypassHistory) {
				var page = this.getCurrentPage();
				if (page > 0) {
					var startIndex = page * this.numThumbs;
					var prevPage = startIndex - this.numThumbs;				
					this.gotoIndex(prevPage, dontPause, bypassHistory);
				}
				
				return this;
			},

			// Navigates to the image at the specified index in the gallery
			// @param {Integer} index The index of the image in the gallery to display.
			// @param {Boolean} dontPause Specifies whether to pause the slideshow.
			// @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
			gotoIndex: function(index, dontPause, bypassHistory) {
				if (!dontPause)
					this.pause();
				
				if (index < 0) index = 0;
				else if (index >= this.data.length) index = this.data.length-1;
				
				var imageData = this.data[index];
				
				if (!bypassHistory && this.enableHistory)
					$.historyLoad(String(imageData.hash));  // At the moment, historyLoad only accepts string arguments
				else
					this.gotoImage(imageData);

				return this;
			},

			// This function is garaunteed to be called anytime a gallery slide changes.
			// @param {Object} imageData An object holding the image metadata of the image to navigate to.
			gotoImage: function(imageData) {
				var index = imageData.index;

				if (this.onSlideChange)
					this.onSlideChange(this.currentImage.index, index);
				
				this.currentImage = imageData;
				this.preloadRelocate(index);
				
				this.refresh();
				
				return this;
			},

			// Returns the default transition duration value.  The value is halved when not
			// performing a synchronized transition.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			getDefaultTransitionDuration: function(isSync) {
				if (isSync)
					return this.defaultTransitionDuration;
				return this.defaultTransitionDuration / 2;
			},

			// Rebuilds the slideshow image and controls and performs transitions
			refresh: function() {
				var imageData = this.currentImage;
				if (!imageData)
					return this;

				var index = imageData.index;

				// Update Controls
				if (this.$controlsContainer) {
					this.$controlsContainer
						.find('div.nav-controls a.prev').attr('href', '#'+this.data[this.getPrevIndex(index)].hash).end()
						.find('div.nav-controls a.next').attr('href', '#'+this.data[this.getNextIndex(index)].hash);
				}

				var previousSlide = this.$imageContainer.find('span.current').addClass('previous').removeClass('current');
				var previousCaption = 0;

				if (this.$captionContainer) {
					previousCaption = this.$captionContainer.find('span.current').addClass('previous').removeClass('current');
				}

				// Perform transitions simultaneously if syncTransitions is true and the next image is already preloaded
				var isSync = this.syncTransitions && imageData.image;

				// Flag we are transitioning
				var isTransitioning = true;
				var gallery = this;

				var transitionOutCallback = function() {
					// Flag that the transition has completed
					isTransitioning = false;

					// Remove the old slide
					previousSlide.remove();

					// Remove old caption
					if (previousCaption)
						previousCaption.remove();

					if (!isSync) {
						if (imageData.image && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						} else {
							// Show loading container
							if (gallery.$loadingContainer) {
								gallery.$loadingContainer.show();
							}
						}
					}
				};

				if (previousSlide.length == 0) {
					// For the first slide, the previous slide will be empty, so we will call the callback immediately
					transitionOutCallback();
				} else {
					if (this.onTransitionOut) {
						this.onTransitionOut(previousSlide, previousCaption, isSync, transitionOutCallback);
					} else {
						previousSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0, transitionOutCallback);
						if (previousCaption)
							previousCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0);
					}
				}

				// Go ahead and begin transitioning in of next image
				if (isSync)
					this.buildImage(imageData, isSync);

				if (!imageData.image) {
					var image = new Image();
					
					// Wire up mainImage onload event
					image.onload = function() {
						imageData.image = this;

						// Only build image if the out transition has completed and we are still on the same image hash
						if (!isTransitioning && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
							gallery.buildImage(imageData, isSync);
						}
					};

					// set alt and src
					image.alt = imageData.title;
					image.src = imageData.slideUrl;
				}

				// This causes the preloader (if still running) to relocate out from the currentIndex
				this.relocatePreload = true;

				return this.syncThumbs();
			},

			// Called by the refresh method after the previous image has been transitioned out or at the same time
			// as the out transition when performing a synchronous transition.
			// @param {Object} imageData An object holding the image metadata of the image to build.
			// @param {Boolean} isSync Specifies whether the transitions are synchronized.
			buildImage: function(imageData, isSync) {
				var gallery = this;
				var nextIndex = this.getNextIndex(imageData.index);

				// Construct new hidden span for the image
				var newSlide = this.$imageContainer
					.append('<span class="image-wrapper current"><a class="advance-link" rel="history" href="#'+this.data[nextIndex].hash+'" title="'+imageData.title+'">&nbsp;</a></span>')
					.find('span.current').css('opacity', '0');
				
				newSlide.find('a')
					.append(imageData.image)
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
				
				var newCaption = 0;
				if (this.$captionContainer) {
					// Construct new hidden caption for the image
					newCaption = this.$captionContainer
						.append('<span class="image-caption current"></span>')
						.find('span.current').css('opacity', '0')
						.append(imageData.caption);
				}

				// Hide the loading conatiner
				if (this.$loadingContainer) {
					this.$loadingContainer.hide();
				}

				// Transition in the new image
				if (this.onTransitionIn) {
					this.onTransitionIn(newSlide, newCaption, isSync);
				} else {
					newSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
					if (newCaption)
						newCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
				}
				
				if (this.isSlideshowRunning) {
					if (this.slideshowTimeout)
						clearTimeout(this.slideshowTimeout);

					this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
				}

				return this;
			},

			// Returns the current page index that should be shown for the currentImage
			getCurrentPage: function() {
				return Math.floor(this.currentImage.index / this.numThumbs);
			},

			// Applies the selected class to the current image's corresponding thumbnail.
			// Also checks if the current page has changed and updates the displayed page of thumbnails if necessary.
			syncThumbs: function() {
				var page = this.getCurrentPage();
				if (page != this.displayedPage)
					this.updateThumbs();

				// Remove existing selected class and add selected class to new thumb
				var $thumbs = this.find('ul.thumbs').children();
				$thumbs.filter('.selected').removeClass('selected');
				$thumbs.eq(this.currentImage.index).addClass('selected');

				return this;
			},

			// Performs transitions on the thumbnails container and updates the set of
			// thumbnails that are to be displayed and the navigation controls.
			// @param {Delegate} postTransitionOutHandler An optional delegate that is called after
			// the thumbnails container has transitioned out and before the thumbnails are rebuilt.
			updateThumbs: function(postTransitionOutHandler) {
				var gallery = this;
				var transitionOutCallback = function() {
					// Call the Post-transition Out Handler
					if (postTransitionOutHandler)
						postTransitionOutHandler();
					
					gallery.rebuildThumbs();

					// Transition In the thumbsContainer
					if (gallery.onPageTransitionIn)
						gallery.onPageTransitionIn();
					else
						gallery.show();
				};

				// Transition Out the thumbsContainer
				if (this.onPageTransitionOut) {
					this.onPageTransitionOut(transitionOutCallback);
				} else {
					this.hide();
					transitionOutCallback();
				}

				return this;
			},

			// Updates the set of thumbnails that are to be displayed and the navigation controls.
			rebuildThumbs: function() {
				var needsPagination = this.data.length > this.numThumbs;

				// Rebuild top pager
				if (this.enableTopPager) {
					var $topPager = this.find('div.top');
					if ($topPager.length == 0)
						$topPager = this.prepend('<div class="top pagination"></div>').find('div.top');
					else
						$topPager.empty();

					if (needsPagination)
						this.buildPager($topPager);
				}

				// Rebuild bottom pager
				if (this.enableBottomPager) {
					var $bottomPager = this.find('div.bottom');
					if ($bottomPager.length == 0)
						$bottomPager = this.append('<div class="bottom pagination"></div>').find('div.bottom');
					else
						$bottomPager.empty();

					if (needsPagination)
						this.buildPager($bottomPager);
				}

				var page = this.getCurrentPage();
				var startIndex = page*this.numThumbs;
				var stopIndex = startIndex+this.numThumbs-1;
				if (stopIndex >= this.data.length)
					stopIndex = this.data.length-1;

				// Show/Hide thumbs
				var $thumbsUl = this.find('ul.thumbs');
				$thumbsUl.find('li').each(function(i) {
					var $li = $(this);
					if (i >= startIndex && i <= stopIndex) {
						$li.show();
					} else {
						$li.hide();
					}
				});

				this.displayedPage = page;

				// Remove the noscript class from the thumbs container ul
				$thumbsUl.removeClass('noscript');
				
				return this;
			},

			// Returns the total number of pages required to display all the thumbnails.
			getNumPages: function() {
				return Math.ceil(this.data.length/this.numThumbs);
			},

			// Rebuilds the pager control in the specified matched element.
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			buildPager: function(pager) {
				var gallery = this;
				var numPages = this.getNumPages();
				var page = this.getCurrentPage();
				var startIndex = page * this.numThumbs;
				var pagesRemaining = this.maxPagesToShow - 1;
				
				var pageNum = page - Math.floor((this.maxPagesToShow - 1) / 2) + 1;
				if (pageNum > 0) {
					var remainingPageCount = numPages - pageNum;
					if (remainingPageCount < pagesRemaining) {
						pageNum = pageNum - (pagesRemaining - remainingPageCount);
					}
				}

				if (pageNum < 0) {
					pageNum = 0;
				}

				// Prev Page Link
				if (page > 0) {
					var prevPage = startIndex - this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[prevPage].hash+'" title="'+this.prevPageLinkText+'">'+this.prevPageLinkText+'</a>');
				}

				// Create First Page link if needed
				if (pageNum > 0) {
					this.buildPageLink(pager, 0, numPages);
					if (pageNum > 1)
						pager.append('<span class="ellipsis">&hellip;</span>');
					
					pagesRemaining--;
				}

				// Page Index Links
				while (pagesRemaining > 0) {
					this.buildPageLink(pager, pageNum, numPages);
					pagesRemaining--;
					pageNum++;
				}

				// Create Last Page link if needed
				if (pageNum < numPages) {
					var lastPageNum = numPages - 1;
					if (pageNum < lastPageNum)
						pager.append('<span class="ellipsis">&hellip;</span>');

					this.buildPageLink(pager, lastPageNum, numPages);
				}

				// Next Page Link
				var nextPage = startIndex + this.numThumbs;
				if (nextPage < this.data.length) {
					pager.append('<a rel="history" href="#'+this.data[nextPage].hash+'" title="'+this.nextPageLinkText+'">'+this.nextPageLinkText+'</a>');
				}

				pager.find('a').click(function(e) {
					gallery.clickHandler(e, this);
				});

				return this;
			},

			// Builds a single page link within a pager.  This function is called by buildPager
			// @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
			// @param {Integer} pageNum The page number of the page link to build.
			// @param {Integer} numPages The total number of pages required to display all thumbnails.
			buildPageLink: function(pager, pageNum, numPages) {
				var pageLabel = pageNum + 1;
				var currentPage = this.getCurrentPage();
				if (pageNum == currentPage)
					pager.append('<span class="current">'+pageLabel+'</span>');
				else if (pageNum < numPages) {
					var imageIndex = pageNum*this.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[imageIndex].hash+'" title="'+pageLabel+'">'+pageLabel+'</a>');
				}
				
				return this;
			}
		});

		// Now initialize the gallery
		$.extend(this, defaults, settings);
		
		// Verify the history plugin is available
		if (this.enableHistory && !$.historyInit)
			this.enableHistory = false;
		
		// Select containers
		if (this.imageContainerSel) this.$imageContainer = $(this.imageContainerSel);
		if (this.captionContainerSel) this.$captionContainer = $(this.captionContainerSel);
		if (this.loadingContainerSel) this.$loadingContainer = $(this.loadingContainerSel);

		// Initialize the thumbails
		this.initializeThumbs();
		
		if (this.maxPagesToShow < 3)
			this.maxPagesToShow = 3;

		this.displayedPage = -1;
		this.currentImage = this.data[0];
		var gallery = this;

		// Hide the loadingContainer
		if (this.$loadingContainer)
			this.$loadingContainer.hide();

		// Setup controls
		if (this.controlsContainerSel) {
			this.$controlsContainer = $(this.controlsContainerSel).empty();
			
			if (this.renderSSControls) {
				if (this.autoStart) {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#pause" class="pause" title="'+this.pauseLinkText+'">'+this.pauseLinkText+'</a></div>');
				} else {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#play" class="play" title="'+this.playLinkText+'">'+this.playLinkText+'</a></div>');
				}

				this.$controlsContainer.find('div.ss-controls a')
					.click(function(e) {
						gallery.toggleSlideshow();
						e.preventDefault();
						return false;
					});
			}
		
			if (this.renderNavControls) {
				this.$controlsContainer
					.append('<div class="nav-controls"><a class="prev" rel="history" title="'+this.prevLinkText+'">'+this.prevLinkText+'</a><a class="next" rel="history" title="'+this.nextLinkText+'">'+this.nextLinkText+'</a></div>')
					.find('div.nav-controls a')
					.click(function(e) {
						gallery.clickHandler(e, this);
					});
			}
		}

		var initFirstImage = !this.enableHistory || !location.hash;
		if (this.enableHistory && location.hash) {
			var hash = $.galleriffic.normalizeHash(location.hash);
			var imageData = allImages[hash];
			if (!imageData)
				initFirstImage = true;
		}

		// Setup gallery to show the first image
		if (initFirstImage)
			this.gotoIndex(0, false, true);

		// Setup Keyboard Navigation
		if (this.enableKeyboardNavigation) {
			$(document).keydown(function(e) {
				var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
				switch(key) {
					case 32: // space
						gallery.next();
						e.preventDefault();
						break;
					case 33: // Page Up
						gallery.previousPage();
						e.preventDefault();
						break;
					case 34: // Page Down
						gallery.nextPage();
						e.preventDefault();
						break;
					case 35: // End
						gallery.gotoIndex(gallery.data.length-1);
						e.preventDefault();
						break;
					case 36: // Home
						gallery.gotoIndex(0);
						e.preventDefault();
						break;
					case 37: // left arrow
						gallery.previous();
						e.preventDefault();
						break;
					case 39: // right arrow
						gallery.next();
						e.preventDefault();
						break;
				}
			});
		}

		// Auto start the slideshow
		if (this.autoStart)
			this.play();

		// Kickoff Image Preloader after 1 second
		setTimeout(function() { gallery.preloadInit(); }, 1000);

		return this;
	};
})(jQuery);
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(jQuery);
/**
 * jQuery lightBox plugin
 * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)
 * and adapted to me for use like a plugin from jQuery.
 * @name jquery-lightbox-0.5.js
 * @author Leandro Vieira Pinho - http://leandrovieira.com
 * @version 0.5
 * @date April 11, 2008
 * @category jQuery plugin
 * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)
 * @license CCAttribution-ShareAlike 2.5 Brazil - http://creativecommons.org/licenses/by-sa/2.5/br/deed.en_US
 * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.2N.3g=6(4){4=23.2H({2B:\'#34\',2g:0.8,1d:F,1M:\'18/5-33-Y.16\',1v:\'18/5-1u-2Q.16\',1E:\'18/5-1u-2L.16\',1W:\'18/5-1u-2I.16\',19:\'18/5-2F.16\',1f:10,2A:3d,2s:\'1j\',2o:\'32\',2j:\'c\',2f:\'p\',2d:\'n\',h:[],9:0},4);f I=N;6 20(){1X(N,I);u F}6 1X(1e,I){$(\'1U, 1S, 1R\').l({\'1Q\':\'2E\'});1O();4.h.B=0;4.9=0;7(I.B==1){4.h.1J(v 1m(1e.17(\'J\'),1e.17(\'2v\')))}j{36(f i=0;i<I.B;i++){4.h.1J(v 1m(I[i].17(\'J\'),I[i].17(\'2v\')))}}2n(4.h[4.9][0]!=1e.17(\'J\')){4.9++}D()}6 1O(){$(\'m\').31(\'<e g="q-13"></e><e g="q-5"><e g="5-s-b-w"><e g="5-s-b"><1w g="5-b"><e 2V="" g="5-k"><a J="#" g="5-k-V"></a><a J="#" g="5-k-X"></a></e><e g="5-Y"><a J="#" g="5-Y-29"><1w W="\'+4.1M+\'"></a></e></e></e><e g="5-s-b-T-w"><e g="5-s-b-T"><e g="5-b-A"><1i g="5-b-A-1t"></1i><1i g="5-b-A-1g"></1i></e><e g="5-1s"><a J="#" g="5-1s-22"><1w W="\'+4.1W+\'"></a></e></e></e></e>\');f z=1D();$(\'#q-13\').l({2K:4.2B,2J:4.2g,S:z[0],P:z[1]}).1V();f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]}).E();$(\'#q-13,#q-5\').C(6(){1a()});$(\'#5-Y-29,#5-1s-22\').C(6(){1a();u F});$(G).2G(6(){f z=1D();$(\'#q-13\').l({S:z[0],P:z[1]});f R=1p();$(\'#q-5\').l({1T:R[1]+(z[3]/10),1c:R[0]})})}6 D(){$(\'#5-Y\').E();7(4.1d){$(\'#5-b,#5-s-b-T-w,#5-b-A-1g\').1b()}j{$(\'#5-b,#5-k,#5-k-V,#5-k-X,#5-s-b-T-w,#5-b-A-1g\').1b()}f Q=v 1j();Q.1P=6(){$(\'#5-b\').2D(\'W\',4.h[4.9][0]);1N(Q.S,Q.P);Q.1P=6(){}};Q.W=4.h[4.9][0]};6 1N(1o,1r){f 1L=$(\'#5-s-b-w\').S();f 1K=$(\'#5-s-b-w\').P();f 1n=(1o+(4.1f*2));f 1y=(1r+(4.1f*2));f 1I=1L-1n;f 2z=1K-1y;$(\'#5-s-b-w\').3f({S:1n,P:1y},4.2A,6(){2y()});7((1I==0)&&(2z==0)){7($.3e.3c){1H(3b)}j{1H(3a)}}$(\'#5-s-b-T-w\').l({S:1o});$(\'#5-k-V,#5-k-X\').l({P:1r+(4.1f*2)})};6 2y(){$(\'#5-Y\').1b();$(\'#5-b\').1V(6(){2u();2t()});2r()};6 2u(){$(\'#5-s-b-T-w\').38(\'35\');$(\'#5-b-A-1t\').1b();7(4.h[4.9][1]){$(\'#5-b-A-1t\').2p(4.h[4.9][1]).E()}7(4.h.B>1){$(\'#5-b-A-1g\').2p(4.2s+\' \'+(4.9+1)+\' \'+4.2o+\' \'+4.h.B).E()}}6 2t(){$(\'#5-k\').E();$(\'#5-k-V,#5-k-X\').l({\'K\':\'1C M(\'+4.19+\') L-O\'});7(4.9!=0){7(4.1d){$(\'#5-k-V\').l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9-1;D();u F})}j{$(\'#5-k-V\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1v+\') 1c 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9-1;D();u F})}}7(4.9!=(4.h.B-1)){7(4.1d){$(\'#5-k-X\').l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'}).11().1k(\'C\',6(){4.9=4.9+1;D();u F})}j{$(\'#5-k-X\').11().2m(6(){$(N).l({\'K\':\'M(\'+4.1E+\') 2l 15% L-O\'})},6(){$(N).l({\'K\':\'1C M(\'+4.19+\') L-O\'})}).E().1k(\'C\',6(){4.9=4.9+1;D();u F})}}2k()}6 2k(){$(d).30(6(12){2i(12)})}6 1G(){$(d).11()}6 2i(12){7(12==2h){U=2Z.2e;1x=27}j{U=12.2e;1x=12.2Y}14=2X.2W(U).2U();7((14==4.2j)||(14==\'x\')||(U==1x)){1a()}7((14==4.2f)||(U==37)){7(4.9!=0){4.9=4.9-1;D();1G()}}7((14==4.2d)||(U==39)){7(4.9!=(4.h.B-1)){4.9=4.9+1;D();1G()}}}6 2r(){7((4.h.B-1)>4.9){2c=v 1j();2c.W=4.h[4.9+1][0]}7(4.9>0){2b=v 1j();2b.W=4.h[4.9-1][0]}}6 1a(){$(\'#q-5\').2a();$(\'#q-13\').2T(6(){$(\'#q-13\').2a()});$(\'1U, 1S, 1R\').l({\'1Q\':\'2S\'})}6 1D(){f o,r;7(G.1h&&G.28){o=G.26+G.2R;r=G.1h+G.28}j 7(d.m.25>d.m.24){o=d.m.2P;r=d.m.25}j{o=d.m.2O;r=d.m.24}f y,H;7(Z.1h){7(d.t.1l){y=d.t.1l}j{y=Z.26}H=Z.1h}j 7(d.t&&d.t.1A){y=d.t.1l;H=d.t.1A}j 7(d.m){y=d.m.1l;H=d.m.1A}7(r<H){1z=H}j{1z=r}7(o<y){1B=o}j{1B=y}21=v 1m(1B,1z,y,H);u 21};6 1p(){f o,r;7(Z.1Z){r=Z.1Z;o=Z.2M}j 7(d.t&&d.t.1F){r=d.t.1F;o=d.t.1Y}j 7(d.m){r=d.m.1F;o=d.m.1Y}2q=v 1m(o,r);u 2q};6 1H(2C){f 2x=v 2w();1q=2h;3h{f 1q=v 2w()}2n(1q-2x<2C)};u N.11(\'C\').C(20)}})(23);',62,204,'||||settings|lightbox|function|if||activeImage||image||document|div|var|id|imageArray||else|nav|css|body||xScroll||jquery|yScroll|container|documentElement|return|new|box||windowWidth|arrPageSizes|details|length|click|_set_image_to_view|show|false|window|windowHeight|jQueryMatchedObj|href|background|no|url|this|repeat|height|objImagePreloader|arrPageScroll|width|data|keycode|btnPrev|src|btnNext|loading|self||unbind|objEvent|overlay|key||gif|getAttribute|images|imageBlank|_finish|hide|left|fixedNavigation|objClicked|containerBorderSize|currentNumber|innerHeight|span|Image|bind|clientWidth|Array|intWidth|intImageWidth|___getPageScroll|curDate|intImageHeight|secNav|caption|btn|imageBtnPrev|img|escapeKey|intHeight|pageHeight|clientHeight|pageWidth|transparent|___getPageSize|imageBtnNext|scrollTop|_disable_keyboard_navigation|___pause|intDiffW|push|intCurrentHeight|intCurrentWidth|imageLoading|_resize_container_image_box|_set_interface|onload|visibility|select|object|top|embed|fadeIn|imageBtnClose|_start|scrollLeft|pageYOffset|_initialize|arrayPageSize|btnClose|jQuery|offsetHeight|scrollHeight|innerWidth||scrollMaxY|link|remove|objPrev|objNext|keyToNext|keyCode|keyToPrev|overlayOpacity|null|_keyboard_action|keyToClose|_enable_keyboard_navigation|right|hover|while|txtOf|html|arrayPageScroll|_preload_neighbor_images|txtImage|_set_navigation|_show_image_data|title|Date|date|_show_image|intDiffH|containerResizeSpeed|overlayBgColor|ms|attr|hidden|blank|resize|extend|close|opacity|backgroundColor|next|pageXOffset|fn|offsetWidth|scrollWidth|prev|scrollMaxX|visible|fadeOut|toLowerCase|style|fromCharCode|String|DOM_VK_ESCAPE|event|keydown|append|of|ico|000|fast|for||slideDown||100|250|msie|400|browser|animate|lightBox|do'.split('|'),0,{}))/*
 * jQuery Nivo Slider v2.5.1
 * http://nivo.dev7studios.com
 *
 * Copyright 2011, Gilbert Pellegrom
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * March 2010
 */

(function($){var NivoSlider=function(element,options){var settings=$.extend({},$.fn.nivoSlider.defaults,options);var vars={currentSlide:0,currentImage:'',totalSlides:0,randAnim:'',running:false,paused:false,stop:false};var slider=$(element);slider.data('nivo:vars',vars);slider.css('position','relative');slider.addClass('nivoSlider');var kids=slider.children();kids.each(function(){var child=$(this);var link='';if(!child.is('img')){if(child.is('a')){child.addClass('nivo-imageLink');link=child;}
child=child.find('img:first');}
var childWidth=child.width();if(childWidth==0)childWidth=child.attr('width');var childHeight=child.height();if(childHeight==0)childHeight=child.attr('height');if(childWidth>slider.width()){slider.width(childWidth);}
if(childHeight>slider.height()){slider.height(childHeight);}
if(link!=''){link.css('display','none');}
child.css('display','none');vars.totalSlides++;});if(settings.startSlide>0){if(settings.startSlide>=vars.totalSlides)settings.startSlide=vars.totalSlides-1;vars.currentSlide=settings.startSlide;}
if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');slider.append($('<div class="nivo-caption"><p></p></div>').css({display:'none',opacity:settings.captionOpacity}));var processCaption=function(settings){var nivoCaption=$('.nivo-caption',slider);if(vars.currentImage.attr('title')!=''){var title=vars.currentImage.attr('title');if(title.substr(0,1)=='#')title=$(title).html();if(nivoCaption.css('display')=='block'){nivoCaption.find('p').fadeOut(settings.animSpeed,function(){$(this).html(title);$(this).fadeIn(settings.animSpeed);});}else{nivoCaption.find('p').html(title);}
nivoCaption.fadeIn(settings.animSpeed);}else{nivoCaption.fadeOut(settings.animSpeed);}}
processCaption(settings);var timer=0;if(!settings.manualAdvance&&kids.length>1){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
if(settings.directionNav){slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+settings.prevText+'</a><a class="nivo-nextNav">'+settings.nextText+'</a></div>');if(settings.directionNavHide){$('.nivo-directionNav',slider).hide();slider.hover(function(){$('.nivo-directionNav',slider).show();},function(){$('.nivo-directionNav',slider).hide();});}
$('a.nivo-prevNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');});$('a.nivo-nextNav',slider).live('click',function(){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');});}
if(settings.controlNav){var nivoControl=$('<div class="nivo-controlNav"></div>');slider.append(nivoControl);for(var i=0;i<kids.length;i++){if(settings.controlNavThumbs){var child=kids.eq(i);if(!child.is('img')){child=child.find('img:first');}
if(settings.controlNavThumbsFromRel){nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('rel')+'" alt="" /></a>');}else{nivoControl.append('<a class="nivo-control" rel="'+i+'"><img src="'+child.attr('src').replace(settings.controlNavThumbsSearch,settings.controlNavThumbsReplace)+'" alt="" /></a>');}}else{nivoControl.append('<a class="nivo-control" rel="'+i+'">'+(i+1)+'</a>');}}
$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');$('.nivo-controlNav a',slider).live('click',function(){if(vars.running)return false;if($(this).hasClass('active'))return false;clearInterval(timer);timer='';slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');vars.currentSlide=$(this).attr('rel')-1;nivoRun(slider,kids,settings,'control');});}
if(settings.keyboardNav){$(window).keypress(function(event){if(event.keyCode=='37'){if(vars.running)return false;clearInterval(timer);timer='';vars.currentSlide-=2;nivoRun(slider,kids,settings,'prev');}
if(event.keyCode=='39'){if(vars.running)return false;clearInterval(timer);timer='';nivoRun(slider,kids,settings,'next');}});}
if(settings.pauseOnHover){slider.hover(function(){vars.paused=true;clearInterval(timer);timer='';},function(){vars.paused=false;if(timer==''&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}});}
slider.bind('nivo:animFinished',function(){vars.running=false;$(kids).each(function(){if($(this).is('a')){$(this).css('display','none');}});if($(kids[vars.currentSlide]).is('a')){$(kids[vars.currentSlide]).css('display','block');}
if(timer==''&&!vars.paused&&!settings.manualAdvance){timer=setInterval(function(){nivoRun(slider,kids,settings,false);},settings.pauseTime);}
settings.afterChange.call(this);});var createSlices=function(slider,settings,vars){for(var i=0;i<settings.slices;i++){var sliceWidth=Math.round(slider.width()/settings.slices);if(i==settings.slices-1){slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:(slider.width()-(sliceWidth*i))+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}else{slider.append($('<div class="nivo-slice"></div>').css({left:(sliceWidth*i)+'px',width:sliceWidth+'px',height:'0px',opacity:'0',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((sliceWidth+(i*sliceWidth))-sliceWidth)+'px 0%'}));}}}
var createBoxes=function(slider,settings,vars){var boxWidth=Math.round(slider.width()/settings.boxCols);var boxHeight=Math.round(slider.height()/settings.boxRows);for(var rows=0;rows<settings.boxRows;rows++){for(var cols=0;cols<settings.boxCols;cols++){if(cols==settings.boxCols-1){slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:(slider.width()-(boxWidth*cols))+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}else{slider.append($('<div class="nivo-box"></div>').css({opacity:0,left:(boxWidth*cols)+'px',top:(boxHeight*rows)+'px',width:boxWidth+'px',height:boxHeight+'px',background:'url("'+vars.currentImage.attr('src')+'") no-repeat -'+((boxWidth+(cols*boxWidth))-boxWidth)+'px -'+((boxHeight+(rows*boxHeight))-boxHeight)+'px'}));}}}}
var nivoRun=function(slider,kids,settings,nudge){var vars=slider.data('nivo:vars');if(vars&&(vars.currentSlide==vars.totalSlides-1)){settings.lastSlide.call(this);}
if((!vars||vars.stop)&&!nudge)return false;settings.beforeChange.call(this);if(!nudge){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}else{if(nudge=='prev'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}
if(nudge=='next'){slider.css('background','url("'+vars.currentImage.attr('src')+'") no-repeat');}}
vars.currentSlide++;if(vars.currentSlide==vars.totalSlides){vars.currentSlide=0;settings.slideshowEnd.call(this);}
if(vars.currentSlide<0)vars.currentSlide=(vars.totalSlides-1);if($(kids[vars.currentSlide]).is('img')){vars.currentImage=$(kids[vars.currentSlide]);}else{vars.currentImage=$(kids[vars.currentSlide]).find('img:first');}
if(settings.controlNav){$('.nivo-controlNav a',slider).removeClass('active');$('.nivo-controlNav a:eq('+vars.currentSlide+')',slider).addClass('active');}
processCaption(settings);$('.nivo-slice',slider).remove();$('.nivo-box',slider).remove();if(settings.effect=='random'){var anims=new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade','boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');vars.randAnim=anims[Math.floor(Math.random()*(anims.length+1))];if(vars.randAnim==undefined)vars.randAnim='fade';}
if(settings.effect.indexOf(',')!=-1){var anims=settings.effect.split(',');vars.randAnim=anims[Math.floor(Math.random()*(anims.length))];if(vars.randAnim==undefined)vars.randAnim='fade';}
vars.running=true;if(settings.effect=='sliceDown'||settings.effect=='sliceDownRight'||vars.randAnim=='sliceDownRight'||settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceDownLeft'||vars.randAnim=='sliceDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'top':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUp'||settings.effect=='sliceUpRight'||vars.randAnim=='sliceUpRight'||settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpLeft'||vars.randAnim=='sliceUpLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);slice.css({'bottom':'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='sliceUpDown'||settings.effect=='sliceUpDownRight'||vars.randAnim=='sliceUpDown'||settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;var v=0;var slices=$('.nivo-slice',slider);if(settings.effect=='sliceUpDownLeft'||vars.randAnim=='sliceUpDownLeft')slices=$('.nivo-slice',slider)._reverse();slices.each(function(){var slice=$(this);if(i==0){slice.css('top','0px');i++;}else{slice.css('bottom','0px');i=0;}
if(v==settings.slices-1){setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({height:'100%',opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;v++;});}
else if(settings.effect=='fold'||vars.randAnim=='fold'){createSlices(slider,settings,vars);var timeBuff=0;var i=0;$('.nivo-slice',slider).each(function(){var slice=$(this);var origWidth=slice.width();slice.css({top:'0px',height:'100%',width:'0px'});if(i==settings.slices-1){setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){slice.animate({width:origWidth,opacity:'1.0'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=50;i++;});}
else if(settings.effect=='fade'||vars.randAnim=='fade'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':slider.width()+'px'});firstSlice.animate({opacity:'1.0'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInRight'||vars.randAnim=='slideInRight'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){slider.trigger('nivo:animFinished');});}
else if(settings.effect=='slideInLeft'||vars.randAnim=='slideInLeft'){createSlices(slider,settings,vars);var firstSlice=$('.nivo-slice:first',slider);firstSlice.css({'height':'100%','width':'0px','opacity':'1','left':'','right':'0px'});firstSlice.animate({width:slider.width()+'px'},(settings.animSpeed*2),'',function(){firstSlice.css({'left':'0px','right':''});slider.trigger('nivo:animFinished');});}
else if(settings.effect=='boxRandom'||vars.randAnim=='boxRandom'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var boxes=shuffle($('.nivo-box',slider));boxes.each(function(){var box=$(this);if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed,'',function(){slider.trigger('nivo:animFinished');});},(100+timeBuff));}else{setTimeout(function(){box.animate({opacity:'1'},settings.animSpeed);},(100+timeBuff));}
timeBuff+=20;i++;});}
else if(settings.effect=='boxRain'||vars.randAnim=='boxRain'||settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){createBoxes(slider,settings,vars);var totalBoxes=settings.boxCols*settings.boxRows;var i=0;var timeBuff=0;var rowIndex=0;var colIndex=0;var box2Darr=new Array();box2Darr[rowIndex]=new Array();var boxes=$('.nivo-box',slider);if(settings.effect=='boxRainReverse'||vars.randAnim=='boxRainReverse'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){boxes=$('.nivo-box',slider)._reverse();}
boxes.each(function(){box2Darr[rowIndex][colIndex]=$(this);colIndex++;if(colIndex==settings.boxCols){rowIndex++;colIndex=0;box2Darr[rowIndex]=new Array();}});for(var cols=0;cols<(settings.boxCols*2);cols++){var prevCol=cols;for(var rows=0;rows<settings.boxRows;rows++){if(prevCol>=0&&prevCol<settings.boxCols){(function(row,col,time,i,totalBoxes){var box=$(box2Darr[row][col]);var w=box.width();var h=box.height();if(settings.effect=='boxRainGrow'||vars.randAnim=='boxRainGrow'||settings.effect=='boxRainGrowReverse'||vars.randAnim=='boxRainGrowReverse'){box.width(0).height(0);}
if(i==totalBoxes-1){setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3,'',function(){slider.trigger('nivo:animFinished');});},(100+time));}else{setTimeout(function(){box.animate({opacity:'1',width:w,height:h},settings.animSpeed/1.3);},(100+time));}})(rows,prevCol,timeBuff,i,totalBoxes);i++;}
prevCol--;}
timeBuff+=100;}}}
var shuffle=function(arr){for(var j,x,i=arr.length;i;j=parseInt(Math.random()*i),x=arr[--i],arr[i]=arr[j],arr[j]=x);return arr;}
var trace=function(msg){if(this.console&&typeof console.log!="undefined")
console.log(msg);}
this.stop=function(){if(!$(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=true;trace('Stop Slider');}}
this.start=function(){if($(element).data('nivo:vars').stop){$(element).data('nivo:vars').stop=false;trace('Start Slider');}}
settings.afterLoad.call(this);return this;};$.fn.nivoSlider=function(options){return this.each(function(key,value){var element=$(this);if(element.data('nivoslider'))return element.data('nivoslider');var nivoslider=new NivoSlider(this,options);element.data('nivoslider',nivoslider);});};$.fn.nivoSlider.defaults={effect:'random',slices:15,boxCols:8,boxRows:4,animSpeed:500,pauseTime:3000,startSlide:0,directionNav:true,directionNavHide:true,controlNav:true,controlNavThumbs:false,controlNavThumbsFromRel:false,controlNavThumbsSearch:'.jpg',controlNavThumbsReplace:'_thumb.jpg',keyboardNav:true,pauseOnHover:true,manualAdvance:false,captionOpacity:0.8,prevText:'Prev',nextText:'Next',beforeChange:function(){},afterChange:function(){},slideshowEnd:function(){},lastSlide:function(){},afterLoad:function(){}};$.fn._reverse=[].reverse;})(jQuery);// JavaScript Document
function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix
$(" #nav>li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).fadeIn('fast');
		$(this) .addClass( 'on');
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		$(this) .removeClass( 'on');
		});
}
$(document).ready(function(){					
	mainmenu();
});

