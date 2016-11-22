if (self.CavalryLogger) { CavalryLogger.start_js(["3YEvS"]); }

__d("ArtilleryCategory",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={UNKNOWN:0,SERVER:1,SERVER_WAIT:2,NETWORK:3,CLIENT:4,CLIENT_WAIT:6,RESOURCE_WAIT:7,NETWORK_WAIT:8,SERVICEWORKER:9,SERVICEWORKER_WAIT:10};}),null);
__d("ArtillerySequenceType",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={SEQUENCE_UNKNOWN:0,SEQUENCE_SERVER:1,SEQUENCE_CLIENT:2};}),null);
__d('Button.react',['cx','AbstractButton.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props.use||'default',n=this.props.size||'medium',o="_42fu"+(m==='special'?' '+"_42gz":'')+(m==='confirm'?' '+"_42g-":'')+(n==='large'?' '+"_42gy":'')+(this.props.suppressed?' '+"_42gx":'')+(m!=='default'?' '+"selected":'');return (c('React').createElement(c('AbstractButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,o)})));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={use:k.oneOf(['special','confirm','default']),size:k.oneOf(['medium','large']),suppressed:k.bool};f.exports=l;}),null);
__d('UFIReactionsStandalone.react',['React','UFICentralUpdates','UFIConstants','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFIReactionsLinkImpl.react','UFIReactionStore'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.componentWillMount=function(){this.$UFIReactionsStandalone1=new (c('UFIDispatcher'))();this.$UFIReactionsStandalone2={UFIReactionStore:new (c('UFIReactionStore'))(this.$UFIReactionsStandalone1)};c('UFICentralUpdates').handleUpdate(c('UFIConstants').UFIPayloadSourceType.INITIAL_SERVER,this.props.payload);};j.prototype.componentWillUnmount=function(){this.$UFIReactionsStandalone2={};this.$UFIReactionsStandalone1=null;};j.prototype.render=function(){return (c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIReactionsStandalone1,stores:this.$UFIReactionsStandalone2},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.props.contextArgs,render:function k(l,m){return (c('React').createElement(c('UFIReactionsLinkImpl.react'),{contextArgs:l,nuxConfig:l.reactionsNuxConfig,reaction:m.viewerreaction,supportedReactions:m.supportedreactions}));}})));};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('Duration.react',['React','ServerTime','setTimeout','clearTimeout'],(function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();var j=500,k=1000,l=60,m=60;h=babelHelpers.inherits(n,c('React').Component);i=h&&h.prototype;function n(o){i.constructor.call(this,o);this.state={duration:0};}n.prototype.componentWillMount=function(){this.$Duration2();};n.prototype.componentWillUnmount=function(){c('clearTimeout')(this.$Duration1);};n.prototype.$Duration2=function(){var o=void 0;if(this.props.isBroadcaster){o=Date.now();}else o=c('ServerTime').getMillis();this.setState({duration:Math.max(o-this.props.startTime,0)});this.$Duration1=c('setTimeout')(function(){return this.$Duration2();}.bind(this),j);};n.prototype.render=function(){var o=Math.floor(this.state.duration/k),p=o%l,q=Math.floor(o/l),r=q%m,s=Math.floor(q/m),t='';if(s>0)t=s+':';var u=r+':';if(u.length<3&&t.length>0)u='0'+u;var v=''+p;if(v.length<2)v='0'+v;return (c('React').createElement('span',null,t,u,v));};n.defaultProps={isBroadcaster:false};f.exports=n;}),null);
__d('VideoWatchAndScrollOverlay',['csx','cx','CSS','Bootloader','DOM','EventListener','React','ReactDOM','EmbeddedVideoScrubber.react','EmbeddedVideoPlaybackTimer.react','SubscriptionsHandler','UFICentralUpdates','UFIFeedbackTargets','UFIReactionTypes','UFIUserActions','VideoPlayerReason','destroyOnUnload','throttle','requestAnimationFrame','emptyFunction','getActiveElement','setImmediate'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m,n){'use strict';this.$VideoWatchAndScrollOverlay1=l;this.$VideoWatchAndScrollOverlay2=k;this.$VideoWatchAndScrollOverlay3=new (c('SubscriptionsHandler'))();this.$VideoWatchAndScrollOverlay4=n;this.$VideoWatchAndScrollOverlay5=m.likeButton;this.$VideoWatchAndScrollOverlay6=m.unlikeButton;this.$VideoWatchAndScrollOverlay7=m.ftEntID;this.$VideoWatchAndScrollOverlay8=m.feedbackSource;this.$VideoWatchAndScrollOverlay9=m.isLiveStream;this.$VideoWatchAndScrollOverlay10=0;this.$VideoWatchAndScrollOverlay11=0;this.$VideoWatchAndScrollOverlay12=0;if(this.$VideoWatchAndScrollOverlay7){this.$VideoWatchAndScrollOverlay13();this.$VideoWatchAndScrollOverlay3.addSubscriptions(c('UFICentralUpdates').subscribe('feedback-updated',function(q,r){if(this.$VideoWatchAndScrollOverlay7 in r.updates)this.$VideoWatchAndScrollOverlay13();}.bind(this)));c('EventListener').listen(this.$VideoWatchAndScrollOverlay5,'click',this.$VideoWatchAndScrollOverlay14.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay6,'click',this.$VideoWatchAndScrollOverlay14.bind(this));}this.$VideoWatchAndScrollOverlay15=c('DOM').find(this.$VideoWatchAndScrollOverlay1,"._n2-");this.$VideoWatchAndScrollOverlay16=c('DOM').find(this.$VideoWatchAndScrollOverlay1,"._4per");this.$VideoWatchAndScrollOverlay17=c('DOM').scry(this.$VideoWatchAndScrollOverlay1,"._35vp")[0];this.$VideoWatchAndScrollOverlay18=c('DOM').find(this.$VideoWatchAndScrollOverlay1,"._11jc");this.$VideoWatchAndScrollOverlay19=c('DOM').find(this.$VideoWatchAndScrollOverlay1,"._5sv5");this.$VideoWatchAndScrollOverlay20=c('DOM').find(this.$VideoWatchAndScrollOverlay1,"._n2_");this.$VideoWatchAndScrollOverlay2.addListener('stateChange',this.$VideoWatchAndScrollOverlay21.bind(this));this.$VideoWatchAndScrollOverlay2.addListener('beginPlayback',this.$VideoWatchAndScrollOverlay22.bind(this));this.$VideoWatchAndScrollOverlay2.addListener('pausePlayback',this.$VideoWatchAndScrollOverlay23.bind(this));this.$VideoWatchAndScrollOverlay2.addListener('finishPlayback',this.$VideoWatchAndScrollOverlay24.bind(this));this.$VideoWatchAndScrollOverlay2.addListener('unmuteVideo',this.$VideoWatchAndScrollOverlay25.bind(this));this.$VideoWatchAndScrollOverlay2.addListener('muteVideo',this.$VideoWatchAndScrollOverlay26.bind(this));this.$VideoWatchAndScrollOverlay2.addListener('exitWatchAndScroll',this.$VideoWatchAndScrollOverlay25.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay15,'click',this.$VideoWatchAndScrollOverlay27.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay16,'click',this.$VideoWatchAndScrollOverlay28.bind(this));if(this.$VideoWatchAndScrollOverlay17)c('EventListener').listen(this.$VideoWatchAndScrollOverlay17,'click',this.$VideoWatchAndScrollOverlay29.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay20,'click',this.$VideoWatchAndScrollOverlay30.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay2.getRootNode(),'mousemove',c('throttle')(this.$VideoWatchAndScrollOverlay31.bind(this),200));c('EventListener').listen(this.$VideoWatchAndScrollOverlay2.getRootNode(),'mouseenter',function(){this.$VideoWatchAndScrollOverlay32=true;}.bind(this));var o=["_5190","_5199"];c('EventListener').listen(this.$VideoWatchAndScrollOverlay2.getRootNode(),'mouseleave',function(q){var r=false;if(q.toElement)o.forEach(function(s){if(c('CSS').hasClass(q.toElement,s))r=true;});if(r)return;if(this.$VideoWatchAndScrollOverlay2.isState('playing')){this.$VideoWatchAndScrollOverlay32=false;this.$VideoWatchAndScrollOverlay33();}}.bind(this));this.$VideoWatchAndScrollOverlay34();if(!this.$VideoWatchAndScrollOverlay9){this.$VideoWatchAndScrollOverlay2.addListener('updateStatus',function(q){this.$VideoWatchAndScrollOverlay11=q.position;this.$VideoWatchAndScrollOverlay35();}.bind(this));this.$VideoWatchAndScrollOverlay2.addListener('updateBuffer',function(q){this.$VideoWatchAndScrollOverlay10=q.duration+q.offset;this.$VideoWatchAndScrollOverlay35();}.bind(this));this.$VideoWatchAndScrollOverlay36=this.$VideoWatchAndScrollOverlay37.bind(this);this.$VideoWatchAndScrollOverlay38=this.$VideoWatchAndScrollOverlay39.bind(this);}function p(q,r,s){c('setImmediate')(function(){var t=c('getActiveElement')(),u=c('DOM').contains(q,t);if(u){r();}else s();});}c('EventListener').listen(this.$VideoWatchAndScrollOverlay1,'focusin',function(){return p(this.$VideoWatchAndScrollOverlay1,function(){this.$VideoWatchAndScrollOverlay40();this.$VideoWatchAndScrollOverlay41();}.bind(this),c('emptyFunction'));}.bind(this));c('EventListener').listen(this.$VideoWatchAndScrollOverlay1,'focusout',function(){return p(this.$VideoWatchAndScrollOverlay1,c('emptyFunction'),function(){this.$VideoWatchAndScrollOverlay42();}.bind(this));}.bind(this));c('destroyOnUnload')(function(){if(this.$VideoWatchAndScrollOverlay3){this.$VideoWatchAndScrollOverlay3.release();this.$VideoWatchAndScrollOverlay3=null;}c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay18);c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay19);}.bind(this));}j.prototype.$VideoWatchAndScrollOverlay34=function(){'use strict';var k=!(this.$VideoWatchAndScrollOverlay2.isState('loading')||this.$VideoWatchAndScrollOverlay2.isState('fallback'));if(!k)return;this.$VideoWatchAndScrollOverlay12=this.$VideoWatchAndScrollOverlay2.getPlaybackDuration();this.$VideoWatchAndScrollOverlay43=this.$VideoWatchAndScrollOverlay2.getVolume();};j.prototype.$VideoWatchAndScrollOverlay35=function(){'use strict';if(this.$VideoWatchAndScrollOverlay44)return;this.$VideoWatchAndScrollOverlay44=c('requestAnimationFrame')(function(){this.$VideoWatchAndScrollOverlay44=null;this.$VideoWatchAndScrollOverlay45();}.bind(this));};j.prototype.$VideoWatchAndScrollOverlay45=function(){'use strict';if(!this.$VideoWatchAndScrollOverlay12)this.$VideoWatchAndScrollOverlay34();if(this.$VideoWatchAndScrollOverlay9){c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay18);c('ReactDOM').unmountComponentAtNode(this.$VideoWatchAndScrollOverlay19);return;}c('ReactDOM').render(c('React').createElement(c('EmbeddedVideoScrubber.react'),{className:"_1681",bufferedPosition:this.$VideoWatchAndScrollOverlay10,hasScrubberPreview:false,isFullscreen:false,onScrubBegin:this.$VideoWatchAndScrollOverlay36,onPointOfInterestSelect:function l(){},onScrubEnd:this.$VideoWatchAndScrollOverlay38,playbackDuration:this.$VideoWatchAndScrollOverlay12,playbackPosition:this.$VideoWatchAndScrollOverlay11,pointsOfInterest:[],previewThumbnailInformation:{},scrubberPreviewSprites:{},tabIndex:'-1'}),this.$VideoWatchAndScrollOverlay18);var k=this.$VideoWatchAndScrollOverlay11-this.$VideoWatchAndScrollOverlay12;c('ReactDOM').render(c('React').createElement(c('EmbeddedVideoPlaybackTimer.react'),{className:"_25e2 _1682",playbackPosTimestamp:this.$VideoWatchAndScrollOverlay11,remainingTimestamp:k}),this.$VideoWatchAndScrollOverlay19);};j.prototype.$VideoWatchAndScrollOverlay37=function(){'use strict';this.$VideoWatchAndScrollOverlay2.pause(c('VideoPlayerReason').SEEK);};j.prototype.$VideoWatchAndScrollOverlay39=function(k){'use strict';this.$VideoWatchAndScrollOverlay2.seek(k);this.$VideoWatchAndScrollOverlay11=k;this.$VideoWatchAndScrollOverlay2.play(c('VideoPlayerReason').SEEK);};j.prototype.$VideoWatchAndScrollOverlay13=function(){'use strict';if(!this.$VideoWatchAndScrollOverlay5||!this.$VideoWatchAndScrollOverlay6)return;this.$VideoWatchAndScrollOverlay46=c('UFIFeedbackTargets').getFeedbackTarget(this.$VideoWatchAndScrollOverlay7,function(k){c('CSS').hide(this.$VideoWatchAndScrollOverlay5);c('CSS').hide(this.$VideoWatchAndScrollOverlay6);if(k.viewercanlike)if(k.hasviewerliked){c('CSS').show(this.$VideoWatchAndScrollOverlay6);}else c('CSS').show(this.$VideoWatchAndScrollOverlay5);}.bind(this));};j.prototype.$VideoWatchAndScrollOverlay14=function(event){'use strict';this.$VideoWatchAndScrollOverlay46=c('UFIFeedbackTargets').getFeedbackTarget(this.$VideoWatchAndScrollOverlay7,function(k){c('UFIUserActions').changeReaction(this.$VideoWatchAndScrollOverlay7,k.hasviewerliked?c('UFIReactionTypes').NONE:c('UFIReactionTypes').LIKE,{source:this.$VideoWatchAndScrollOverlay8,target:event.target});}.bind(this));if(c('CSS').shown(this.$VideoWatchAndScrollOverlay5)){this.$VideoWatchAndScrollOverlay5.focus();}else this.$VideoWatchAndScrollOverlay6.focus();};j.prototype.$VideoWatchAndScrollOverlay21=function(){'use strict';if(this.$VideoWatchAndScrollOverlay2.isState('ready')||this.$VideoWatchAndScrollOverlay2.isState('playing')||this.$VideoWatchAndScrollOverlay2.isState('paused'))if(this.$VideoWatchAndScrollOverlay2.isMuted()||this.$VideoWatchAndScrollOverlay2.getVolume()===0){this.$VideoWatchAndScrollOverlay26();}else this.$VideoWatchAndScrollOverlay25();};j.prototype.$VideoWatchAndScrollOverlay22=function(){'use strict';this.$VideoWatchAndScrollOverlay47();c('CSS').addClass(this.$VideoWatchAndScrollOverlay15,"_n2w");this.$VideoWatchAndScrollOverlay31();};j.prototype.$VideoWatchAndScrollOverlay24=function(){'use strict';this.$VideoWatchAndScrollOverlay47();c('CSS').addClass(this.$VideoWatchAndScrollOverlay15,"_n2x");this.$VideoWatchAndScrollOverlay33();};j.prototype.$VideoWatchAndScrollOverlay23=function(){'use strict';this.$VideoWatchAndScrollOverlay47();c('CSS').addClass(this.$VideoWatchAndScrollOverlay15,"_n2y");this.$VideoWatchAndScrollOverlay31();};j.prototype.$VideoWatchAndScrollOverlay47=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay15,"_n2w");c('CSS').removeClass(this.$VideoWatchAndScrollOverlay15,"_n2y");c('CSS').removeClass(this.$VideoWatchAndScrollOverlay15,"_n2x");};j.prototype.$VideoWatchAndScrollOverlay27=function(){'use strict';if(this.$VideoWatchAndScrollOverlay2.isState('playing')){this.$VideoWatchAndScrollOverlay2.pause(c('VideoPlayerReason').USER);}else this.$VideoWatchAndScrollOverlay2.play(c('VideoPlayerReason').USER);};j.prototype.$VideoWatchAndScrollOverlay26=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay16,"_4pep");c('CSS').addClass(this.$VideoWatchAndScrollOverlay16,"_4peq");};j.prototype.$VideoWatchAndScrollOverlay25=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay16,"_4peq");c('CSS').addClass(this.$VideoWatchAndScrollOverlay16,"_4pep");};j.prototype.$VideoWatchAndScrollOverlay30=function(){'use strict';this.$VideoWatchAndScrollOverlay2.emit('WatchAndScroll/close');};j.prototype.$VideoWatchAndScrollOverlay28=function(){'use strict';if(this.$VideoWatchAndScrollOverlay2.isMuted()||this.$VideoWatchAndScrollOverlay2.getVolume===0){this.$VideoWatchAndScrollOverlay2.unmute();}else this.$VideoWatchAndScrollOverlay2.mute();};j.prototype.$VideoWatchAndScrollOverlay29=function(){'use strict';c('Bootloader').loadModules(["VideoWatchAndScrollController","VideoChannelController"],function(k,l){k.onEnterChannel();l.openFromVideoPlayer(this.$VideoWatchAndScrollOverlay2,this.$VideoWatchAndScrollOverlay2.getVideoChannelID(),this.$VideoWatchAndScrollOverlay4,k.getStoryFetcherData());}.bind(this),'VideoWatchAndScrollOverlay');};j.prototype.$VideoWatchAndScrollOverlay31=function(){'use strict';if(this.$VideoWatchAndScrollOverlay32){this.$VideoWatchAndScrollOverlay41();this.$VideoWatchAndScrollOverlay42();}};j.prototype.$VideoWatchAndScrollOverlay42=function(){'use strict';this.$VideoWatchAndScrollOverlay40();this.$VideoWatchAndScrollOverlay48=setTimeout(function(){if(this.$VideoWatchAndScrollOverlay2.isState('playing'))this.$VideoWatchAndScrollOverlay33();}.bind(this),3000);};j.prototype.$VideoWatchAndScrollOverlay40=function(){'use strict';clearTimeout(this.$VideoWatchAndScrollOverlay48);};j.prototype.$VideoWatchAndScrollOverlay41=function(){'use strict';if(this.$VideoWatchAndScrollOverlay2.isState('finished'))return;c('CSS').addClass(this.$VideoWatchAndScrollOverlay1,"_1he7");this.$VideoWatchAndScrollOverlay2.emit('WatchAndScroll/overlayShown');};j.prototype.$VideoWatchAndScrollOverlay33=function(){'use strict';c('CSS').removeClass(this.$VideoWatchAndScrollOverlay1,"_1he7");this.$VideoWatchAndScrollOverlay2.emit('WatchAndScroll/overlayHidden');};f.exports=j;}),null);
__d('LeafletPath',['Set','areEqual','partitionObjectByKey'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=function(){var j=new (c('Set'))(['color','dashArray','fill','fillColor','fillOpacity','lineCap','lineJoin','opacity','stroke','weight']);return function(k){return c('partitionObjectByKey')(k,j);};}(),i={mutateOptions:function j(k,l,m){var n=h(l||{}),o=n[0],p=n[1],q=h(m||{}),r=q[0],s=q[1];if(!c('areEqual')(p,s))return false;if(!c('areEqual')(o,r))k.setStyle(o);return true;}};f.exports=i;}),null);