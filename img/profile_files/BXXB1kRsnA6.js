if (self.CavalryLogger) { CavalryLogger.start_js(["rPKcr"]); }

__d("PUWApplications",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={WEB_SIMPLE:"web_simple",WEB_FLASH:"web_flash",WEB_HTML5:"web_html5",WEB_COMPOSER:"web_composer",WEB_ARCHIVE:"web_archive",WEB_MESSENGER:"web_messenger",WEB_OMNIPICKER:"web_omnipicker",WEB_MUSE_OMNIPICKER:"web_muse_omnipicker",WEB_SAY_THANKS:"web_say_thanks",WEB_GOODWILL_CAMPAIGN_OMNIPICKER:"web_goodwill_campaign_omnipicker",WEB_PRODUCT_PHOTO_OMNIPICKER:"web_product_photo_omnipicker",WEB_PAGES_MESSENGER:"web_pages_messenger",WEB_M_ZERO:"web_m_zero",WEB_M_BASIC:"web_m_basic",WEB_M_TOUCH:"web_m_touch",WEB_REACT_COMPOSER:"web_react_composer",MOBILE_FB4IOS:"mobile_fb4ios",MOBILE_FB4IOS_SNAP:"mobile_fb4ios_snap",MOBILE_FB4A:"mobile_fb4a",MOBILE_PMA_ANDROID:"mobile_pma_android",MOBILE_PMA_IOS:"mobile_pma_ios",THIRD_PARTY:"third_party"};}),null);
__d('EgoAdsObjectSet',['csx','DataAttributeUtils','DOM'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=void 0;function j(l){'use strict';i=l;this._allEgoUnits=[];this._egoUnits=[];}j.prototype.init=function(l){'use strict';this._allEgoUnits=l;this._egoUnits=[];this._allEgoUnits.forEach(function(m){var n=k(m);if(!n||!n.holdout)this._egoUnits.push(m);},this);};j.prototype.getCount=function(){'use strict';return this._egoUnits.length;};j.prototype.forEach=function(l,m){'use strict';this._egoUnits.forEach(l,m);};j.prototype.getUnit=function(l){'use strict';return this._egoUnits[l];};j.prototype.getHoldoutAdIDsForSpace=function(l,m){'use strict';if(!l||!m)return [];var n=[];for(var o=0;l>0&&o<this._allEgoUnits.length;o++){var p=this._allEgoUnits[o],q=m(p),r=k(p);if(l>=q&&r&&r.holdout)n.push(r.adid);l-=q;}return n;};j.prototype.getHoldoutAdIDsForNumAds=function(l){'use strict';l=Math.min(l,this._allEgoUnits.length);var m=[];for(var n=0;n<l;n++){var o=this._allEgoUnits[n],p=k(o);if(p&&p.holdout)m.push(p.adid);}return m;};function k(l){var m=c('DOM').scry(l,i||"div._4u8")[0],n=m&&c('DataAttributeUtils').getDataAttribute(m,'data-ad');return n&&JSON.parse(n)||undefined;}f.exports=j;}),null);
__d('rayInterceptsBox',['invariant'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k,l){var m=Object.keys(k);l.forEach(function(n){!(m.indexOf(n)!==-1)?h(0):void 0;!(typeof k[n]==='number')?h(0):void 0;});}var j={check:function k(l,m){i(l,['minX','maxX','minY','maxY']);i(m,['x','y','dx','dy']);!(l.maxX>l.minX&&l.maxY>l.minY)?h(0):void 0;if(m.dx===0&&m.dy===0)return false;if(m.x>=l.minX&&m.x<=l.maxX&&m.y>=l.minY&&m.y<=l.maxY)return true;var n=(l.minX-m.x)/m.dx,o=(l.maxX-m.x)/m.dx,p=(l.minY-m.y)/m.dy,q=(l.maxY-m.y)/m.dy,r=Math.max(Math.min(n,o),Math.min(p,q)),s=Math.min(Math.max(n,o),Math.max(p,q));if(r<0)return false;if(r>s)return false;return true;}};f.exports=j;}),null);
__d('AdsMouseStateStore',['invariant','$','Arbiter','Event','EventEmitter','Run','SubscriptionsHandler','Vector','ge','keyMirrorRecursive','rayInterceptsBox','throttle'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=30,l=500,m='pagelet_ego_pane',n=c('keyMirrorRecursive')({STATIONARY:'',INTENT:'',HOVER:'',NO_INTENT:''});function o(event){try{return {x:event.clientX||event.x,y:event.clientY||event.y};}catch(q){var r=Math.random()*1000;return {x:r,y:r};}}i=babelHelpers.inherits(p,c('EventEmitter'));j=i&&i.prototype;function p(){var q=arguments.length<=0||arguments[0]===undefined?m:arguments[0],r=arguments.length<=1||arguments[1]===undefined?l:arguments[1];j.constructor.call(this);this.destroy=function(){if(this.$AdsMouseStateStore8)this.$AdsMouseStateStore8.release();this.removeAllListeners();}.bind(this);this.onPageTransition=function(event){this.$AdsMouseStateStore10();}.bind(this);this.onMouseMove=function(event){this.calculateState(o(event));}.bind(this);this.$AdsMouseStateStore7=q;this.$AdsMouseStateStore10();this.$AdsMouseStateStore8=new (c('SubscriptionsHandler'))().addSubscriptions(c('Event').listen(document,'mousemove',c('throttle')(this.onMouseMove,r)),c('Arbiter').subscribe('page_transition',this.onPageTransition));c('Run').onLeave(this.destroy);}p.prototype.$AdsMouseStateStore10=function(){this.$AdsMouseStateStore1=n.STATIONARY;this.$AdsMouseStateStore2=this.$AdsMouseStateStore3=0;this.$AdsMouseStateStore4=Date.now();this.$AdsMouseStateStore5=this.$AdsMouseStateStore7;this.$AdsMouseStateStore6=Infinity;};p.prototype.getState=function(){return this.$AdsMouseStateStore1;};p.prototype.updateRhcID=function(q){!c('$')(q)?h(0):void 0;this.$AdsMouseStateStore5=q;};p.prototype.getRhcID=function(){return this.$AdsMouseStateStore5;};p.prototype.__updateMousePos=function(q){this.$AdsMouseStateStore2=q.x;this.$AdsMouseStateStore3=q.y;};p.prototype.isRhcPresent=function(){if(!c('ge')(this.$AdsMouseStateStore5))return false;var q=this.getRhcDimensions();return q.y>0&&q.x>0;};p.prototype.getRhc=function(){return c('$')(this.$AdsMouseStateStore5);};p.prototype.getRhcPosition=function(){return c('Vector').getElementPosition(this.getRhc());};p.prototype.getRhcScreenPos=function(){var q=c('Vector').getScrollPosition(),r=this.getRhcPosition();return {x:r.x-q.x,y:r.y-q.y};};p.prototype.getRhcDimensions=function(){return c('Vector').getElementDimensions(this.getRhc());};p.prototype.getPointToRectSquareDist=function(){return this.$AdsMouseStateStore6;};p.prototype.isPointWithinDist=function(q){var r=this.getPointToRectSquareDist();return r<=q*q;};p.prototype.getRhcBoundingBox=function(){var q=this.getRhcDimensions(),r=this.getRhcScreenPos();return {minX:r.x,maxX:r.x+q.x,minY:r.y,maxY:r.y+q.y};};p.prototype.$AdsMouseStateStore11=function(q){var r=this.getRhcBoundingBox(),s={x:(r.minX+r.maxX)/2,y:(r.minY+r.maxY)/2},t=Math.abs(r.minX-r.maxX),u=Math.abs(r.minY-r.maxY),v=Math.max(Math.abs(q.x-s.x)-t/2,0),w=Math.max(Math.abs(q.y-s.y)-u/2,0);this.$AdsMouseStateStore6=v*v+w*w;};p.prototype.isPosContainedInRhc=function(q){var r=this.getRhcBoundingBox();return (q.x>=r.minX&&q.x<=r.maxX&&q.y>=r.minY&&q.y<=r.maxY);};p.prototype.hasMovedMinDistance=function(q){var r=q.x-this.$AdsMouseStateStore2,s=q.y-this.$AdsMouseStateStore3;return r*r+s*s>=k*k;};p.prototype.tooSoon=function(){return Date.now()-this.$AdsMouseStateStore4<l;};p.prototype.$AdsMouseStateStore12=function(){this.$AdsMouseStateStore4=Date.now();};p.prototype.calculateState=function(q){if(this.tooSoon())return;this.$AdsMouseStateStore12();if(!this.isRhcPresent())return;if(this.isPosContainedInRhc(q)){this.transitionToState(n.HOVER);this.$AdsMouseStateStore6=0;this.__updateMousePos(q);this.scheduleCheckup();return;}else if(!this.hasMovedMinDistance(q)){this.transitionToState(n.STATIONARY);return;}this.$AdsMouseStateStore11(q);var r=this.isMovingTowardsRhc(q)?n.INTENT:n.NO_INTENT;this.transitionToState(r);this.__updateMousePos(q);this.scheduleCheckup();};p.prototype.isMovingTowardsRhc=function(q){var r={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};if(this.isPosContainedInRhc(r))return true;var s=this.getRhcBoundingBox(),t={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3,dx:q.x-this.$AdsMouseStateStore2,dy:q.y-this.$AdsMouseStateStore3};return c('rayInterceptsBox').check(s,t);};p.prototype.scheduleCheckup=function(){var q={x:this.$AdsMouseStateStore2,y:this.$AdsMouseStateStore3};setTimeout(function(){this.calculateState(q);}.bind(this),l*1.5);};p.prototype.transitionToState=function(q){if(q===this.$AdsMouseStateStore1)return;this.$AdsMouseStateStore1=q;this.emit('change');};p.get=function(){if(!p.$AdsMouseStateStore13)p.$AdsMouseStateStore13=new p();return p.$AdsMouseStateStore13;};p.STATES=n;p.MIN_MOVE_DISTANCE=k;p.THROTTLE_TIME=l;f.exports=p;}),null);
__d('DOMClone',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={shallowClone:function j(k){return i(k,false);},deepClone:function j(k){return i(k,true);}};function i(j,k){var l=j.cloneNode(k);if(typeof l.__FB_TOKEN!=='undefined')delete l.__FB_TOKEN;return l;}f.exports=h;}),null);
__d('FileInput',['cx','ArbiterMixin','DOM','DOMClone','Event','Focus','Keys','UserAgent_DEPRECATED','mixin'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('UserAgent_DEPRECATED').ie();i=babelHelpers.inherits(l,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function l(m,n,o){'use strict';j.constructor.call(this);this.container=m;this.control=n;var p=c('DOM').scry(this.container,'a')[0];p&&p.removeAttribute('href');var q=c('DOM').create('div',{className:"_3jk"},o);c('DOM').appendContent(this.control,q);this._boundHandleChange=this._handleChange.bind(this);if(k)this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this);this._setInputElement(o);}l.prototype.getValue=function(){'use strict';return this.input.value;};l.prototype.getInput=function(){'use strict';return this.input;};l.prototype.getContainer=function(){'use strict';return this.container;};l.prototype.getControl=function(){'use strict';return this.control;};l.prototype.clear=function(){'use strict';this.input.value='';if(this.input.value!==''){var m=c('DOMClone').deepClone(this.input);c('DOM').replace(this.input,m);this._setInputElement(m);}};l.prototype.destroy=function(){'use strict';this._focus.remove();this._focus=null;this._listener.remove();this._listener=null;if(k){this._IEKeyDownListener.remove();this._IEKeyDownListener=null;}this.container=null;this.control=null;this.input=null;};l.prototype._setInputElement=function(m){'use strict';this.input=m;this._focus&&this._focus.remove();this._focus=c('Focus').relocate(m,this.control);this._listener&&this._listener.remove();this._listener=c('Event').listen(m,'change',this._boundHandleChange);if(k){this._IEKeyDownListener&&this._IEKeyDownListener.remove();this._IEKeyDownListener=c('Event').listen(m,'keydown',this._boundHandleIEKeyDown);}};l.prototype._handleChange=function(event){'use strict';this.inform('change',event);if(this.input){var m=this.input.form;if(m&&k<9)c('Event').fire(m,'change',event);}};l.prototype._handleIEKeyDown=function(event){'use strict';if(event.keyCode===c('Keys').RETURN){event.preventDefault();var m=document.createEvent('MouseEvents');m.initEvent('click',true,true);this.input.dispatchEvent(m);}};f.exports=l;}),null);
__d('PhotosUploadWaterfallMixin',['PhotosUploadWaterfall','emptyFunction'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('emptyFunction'),i={getUploaderApp:h,getWaterfallID:h,getAdditionalData:function j(){return {};},logWaterfallStep:function j(k,l,m){c('PhotosUploadWaterfall').sendSignal(babelHelpers['extends']({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:k,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),l),m);},logWaterfallStepUsingBanzai:function j(k,l,m){c('PhotosUploadWaterfall').sendBanzai(babelHelpers['extends']({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:k,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),l),m);}};f.exports=i;}),null);
__d('PhotoSourceTypes',['keyMirror'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null});}),null);
__d('BaseSelectionContainer',[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=0;function i(){'use strict';this.$BaseSelectionContainer1=(h++).toString();}i.prototype.getSelectionContainerID=function(){'use strict';return this.$BaseSelectionContainer1;};i.prototype.getSource=function(){'use strict';throw new Error('This must be implemented by the child class');};i.prototype.getName=function(){'use strict';return null;};i.prototype.getSize=function(){'use strict';return null;};i.prototype.hasPlaceholderUI=function(){'use strict';throw new Error('This must be implemented by the child class');};f.exports=i;}),null);
__d('SelectionSource',['PhotoSourceTypes'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={FILE:'file',FLASH:'flash',VAULT:'vault',SUGGESTIONS:'suggestions',POSTED_PHOTOS:'posted_photos',PAGES_POSTED_PHOTOS:'pages_posted_photos',toPhotoSourceType:function i(j){switch(j){case h.FILE:case h.FLASH:return c('PhotoSourceTypes').COMPUTER;case h.VAULT:return c('PhotoSourceTypes').SYNCED_PHOTOS;case h.SUGGESTIONS:return c('PhotoSourceTypes').SUGGESTIONS;case h.POSTED_PHOTOS:return c('PhotoSourceTypes').POSTED_PHOTOS;case h.PAGES_POSTED_PHOTOS:return c('PhotoSourceTypes').PAGES_POSTED_PHOTOS;default:throw new Error('No mapping for SelectionSource: '+j);}}};f.exports=h;}),null);
__d('FileSelectionContainer',['BaseSelectionContainer','SelectionSource'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('BaseSelectionContainer'));i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this);this.$FileSelectionContainer1=k;}j.prototype.getFile=function(){'use strict';return this.$FileSelectionContainer1;};j.prototype.getSource=function(){'use strict';return c('SelectionSource').FILE;};j.prototype.getName=function(){'use strict';return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name;};j.prototype.getSize=function(){'use strict';return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size;};j.prototype.hasPlaceholderUI=function(){'use strict';return false;};f.exports=j;}),null);
__d('PhotosUploadWaterfallXMixin',['invariant','AsyncSignal','Banzai','Map','PhotosUploadWaterfallXConfig','Set','randomInt'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=new (c('Map'))();function j(l,m){var n={};l.client_time=Math.round(Date.now()/1000);if(c('PhotosUploadWaterfallXConfig').retryBanzai){n.retry=true;l.nonce=c('randomInt')(4294967296);}c('Banzai').post(c('PhotosUploadWaterfallXConfig').banzaiRoute,l,n);if(m)setTimeout(m,0);}function k(l,m){if(c('PhotosUploadWaterfallXConfig').useBanzai){j(l,m);}else{var n=new (c('AsyncSignal'))(c('PhotosUploadWaterfallXConfig').loggingEndpoint,{data:JSON.stringify(l)}).setHandler(m);if(c('PhotosUploadWaterfallXConfig').timeout)n.setTimeout(10*1000);n.send();}}f.exports={logStep:function l(m,n,o){var p=this.getWaterfallID&&this.getWaterfallID(),q=this.getWaterfallAppName&&this.getWaterfallAppName();if(!p||!q)return;k(babelHelpers['extends']({step:m,qn:p,uploader:q,ref:this.getWaterfallSource&&this.getWaterfallSource()},n),o);},logPUWStep:function l(m,n,o,p,q,r,s){if(r&&r.logOncePerSession){if(!i.has(n))i.set(n,new (c('Set'))());if(i.get(n).has(m))return;i.get(n).add(m);}k(Object.assign({step:m,qn:n,uploader:o,ref:p},q),s);}};}),null);
__d('HTML5FilePicker',['cx','ArbiterMixin','BrowserSupport','CSS','DOM','FilePickerEvent','FileSelectionContainer','Parent','PhotosUploadID','PhotosUploadWaterfall','PhotosUploadWaterfallMixin','PhotosUploadWaterfallXMixin','PUWApplications','PUWSteps','URI','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){this._config=babelHelpers['extends']({accept:undefined,multiple:undefined},k);this._button=j;this._beginInformed=false;if(!c('BrowserSupport').hasFileAPI()){this.logStep(c('PUWSteps').CLIENT_PROCESS_UNAVAILABLE,{error:'no_file_api'});if(this._config.hasOwnProperty('fallbackFunction')){this._config.fallbackFunction.call(this);return;}return;}this._subscriptions=[];var l=this._config.input||c('DOM').create('input',{type:'file',className:"_n"});if(this._config.hasOwnProperty('accept'))l.accept=this._config.accept;if(this._config.hasOwnProperty('multiple'))l.multiple=this._config.multiple;if(this._config.hasOwnProperty('title'))l.title=this._config.title;var m=c('DOM').create('label',{className:'accessible_elem','for':c('getOrCreateDOMID')(l)},l.title),n=c('DOM').create('div',{className:"_3jk"},[m,l]);c('CSS').addClass(this._button,"_m");c('DOM').appendContent(this._button,n);this._button.setAttribute('rel','ignore');this._bindInput(l);var o=c('Parent').byClass(this._button,'addPhotosDisabled');if(o){c('CSS').removeClass(o,'addPhotosDisabled');c('CSS').addClass(o,'addPhotosEnabled');}}Object.assign(i.prototype,c('ArbiterMixin'),c('PhotosUploadWaterfallMixin'),c('PhotosUploadWaterfallXMixin'),{getUploaderApp:function j(){return c('PhotosUploadWaterfall').APP_HTML5;},getWaterfallID:function j(){return this._config.qn;},getWaterfallAppName:function j(){return c('PUWApplications').WEB_HTML5;},getWaterfallSource:function j(){return this._config.ref;},getSwfID:function j(){return null;},_constructFileList:function j(){var k=Array.from(this._input.files);k.forEach(function(l){l.uploadID=c('PhotosUploadID').getNewID();});return k;},_constructFileSelectionContainerList:function j(){var k=Array.from(this._input.files);return k.map(function(l){return new (c('FileSelectionContainer'))(l);});},cleanup:function j(){if(this._input){this._input.onclick=null;this._input.onchange=null;}},_bindInput:function j(k){this.cleanup();k.onclick=function(){this.logWaterfallStep(c('PhotosUploadWaterfall').SELECT_START);if(!this._beginInformed){this._beginInformed=true;this.inform(c('FilePickerEvent').BEGIN||'FilePickerEvent/BEGIN');}this.inform(c('FilePickerEvent').SELECT_START);}.bind(this);k.onchange=function(){this.inform(c('FilePickerEvent').SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()});this._bindInput(this._input.cloneNode(false));}.bind(this);if(this._input)c('DOM').replace(this._input,k);this._input=k;}});f.exports=i;}),null);