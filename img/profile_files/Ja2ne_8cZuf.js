if (self.CavalryLogger) { CavalryLogger.start_js(["OE4WK"]); }

__d('legacy:EditSubscriptions',['SubscriptionLevels','EditSubscriptions'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.SubscriptionLevels=c('SubscriptionLevels');b.EditSubscriptions=c('EditSubscriptions');}),3);
__d('DynamicFriendListEducation',['Event','Arbiter','AsyncRequest','Dialog','PageTransitionsRegistrar','arrayContains','createArrayFromMixed','removeFromArray'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j,k,l,m;function n(){j&&j.hide();k&&k.hide();}function o(r){c('removeFromArray')(i,r);n();l({accept_tag_education:true});}function p(){n();l({nux_cancel:true});}var q={init:function r(s,t){h=s;i=c('createArrayFromMixed')(t).map(String);c('PageTransitionsRegistrar').registerHandler(function(){n();h=false;l=undefined;i=[];});},showDialog:function r(s,t,u){if(h&&c('arrayContains')(i,s)){n();c('Arbiter').inform('DynamicFriendListEducation/dialogOpen',{uid:t,flid:s});l=u;j=new (c('Dialog'))().setAsync(new (c('AsyncRequest'))('/ajax/friends/lists/smart_list_education.php').setMethod('GET').setData({flid:s,uid:t}).setReadOnly(true)).setHandler(o.bind(this,s)).setCloseHandler(function(){c('Arbiter').inform('DynamicFriendListEducation/dialogClosed',{uid:t,flid:s});}).setCancelHandler(function(){c('Arbiter').inform('DynamicFriendListEducation/dialogCancel',{uid:t,flid:s});}).show();}else u();},showContextualDialog:function r(s,t,u,v){if(h&&c('arrayContains')(i,s)){n();m=u;l=v;new (c('AsyncRequest'))('/ajax/friends/lists/smart_list_contextual_education.php').setMethod('GET').setData({flid:s,uid:t}).setReadOnly(true).send();}else v();},setContextualDialog:function r(s,t,u,v){k=s;k.setContext(m);k.show();c('Event').listen(t,'click',o.bind(this,v));c('Event').listen(u,'click',p);}};f.exports=q;}),null);
__d('FriendStatus',['Arbiter','AsyncRequest','SubscribeButton','arrayContains','createArrayFromMixed','forEachObject'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m,n){this.id=l;this.update(m,n);}Object.assign(h.prototype,{update:function l(m,n){m&&(this.status=m);if(n){this.lists=c('createArrayFromMixed')(n).map(String);this._informListChange();}},isComplete:function l(){return !!this.lists;},addToList:function l(m){if(this.lists&&!c('arrayContains')(this.lists,m))this.lists.push(m);this._informListChange();},removeFromList:function l(m){if(this.lists){var n=this.lists.indexOf(m);n!==-1&&this.lists.splice(n,1);}this._informListChange();},updateList:function l(m,n){n?this.addToList(m):this.removeFromList(m);},_informListChange:function l(){c('Arbiter').inform('FriendListMembershipChange',{uid:this.id,lists:this.lists});}});Object.assign(h,{ARE_FRIENDS:1,INCOMING_REQUEST:2,OUTGOING_REQUEST:3,CAN_REQUEST:4});var i={},j={};function k(l,m,n){if(!i[n.uid]){i[n.uid]=new h(n.uid,l);}else i[n.uid].update(l);c('Arbiter').inform('FriendRequest/change',{uid:n.uid,status:l});}c('Arbiter').subscribe(['FriendRequest/cancel','FriendRequest/unfriend'],function(l,m){m.profile_id=m.uid;m.connected=false;c('Arbiter').inform(c('SubscribeButton').UNSUBSCRIBED,m);});c('Arbiter').subscribe(['FriendRequest/cancel','FriendRequest/unfriend','FriendRequest/sendFail'],k.bind(null,h.CAN_REQUEST));c('Arbiter').subscribe(['FriendRequest/confirmFail'],k.bind(null,h.INCOMING_REQUEST));c('Arbiter').subscribe(['FriendRequest/cancelFail','FriendRequest/sent','FriendRequest/sending'],k.bind(null,h.OUTGOING_REQUEST));c('Arbiter').subscribe(['FriendRequest/confirm','FriendRequest/confirming'],k.bind(null,h.ARE_FRIENDS));Object.assign(h,{CLOSE_FRIENDS:null,ACQUAINTANCES:null,getFriend:function l(m,n){if(i[m]&&i[m].isComplete()){n(i[m]);}else if(j[m]){j[m].push(n);}else{j[m]=[n];new (c('AsyncRequest'))().setURI("/ajax/friends/status.php").setData({friend:m}).setHandler(function(o){var p=o.getPayload();setTimeout(h.initFriend.bind(h,m,p.status,p.lists),0);}).send();}},initFriend:function l(m,n,o){var p=i[m]||new h(m);p.update(p.status||n,p.lists||o);i[m]=p;j[m]&&j[m].forEach(function(q){q(p);});j[m]=null;},setSpecialLists:function l(m){var n=h.CLOSE_FRIENDS===null;h.CLOSE_FRIENDS=m.close+'';h.ACQUAINTANCES=m.acq+'';if(n)c('forEachObject')(i,function(o,p){o._informListChange();});}});f.exports=h;}),null);
__d('FriendEditLists',['Arbiter','AsyncRequest','CSS','DOMQuery','DynamicFriendListEducation','EditSubscriptions','FriendStatus','MenuDeprecated','Parent','ScrollableArea','URI','$','arrayContains','ge'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=5,i={},j='/ajax/profile/removefriendconfirm.php',k='/ajax/friends/requests/cancel.php',l='/ajax/choose/',m='/profile.php',n,o,p,q,r={profile_browser:43,fbx_top_bar:1,hovercard:5};function s(da,ea,fa){var ga=i[da.id],ha=function ia(ja){var ka={action:fa?'add_list':'del_list',to_friend:ga.id,friendlists:[ea],source:n};if(ja)Object.assign(ka,ja);ga.updateList(ea,fa);var la;if(fa&&ea==c('FriendStatus').CLOSE_FRIENDS){la=v(da,c('FriendStatus').ACQUAINTANCES);if(c('MenuDeprecated').isItemChecked(la)){c('MenuDeprecated').toggleItem(la);s(da,c('FriendStatus').ACQUAINTANCES,false);}}else if(fa&&ea==c('FriendStatus').ACQUAINTANCES){la=v(da,c('FriendStatus').CLOSE_FRIENDS);if(c('MenuDeprecated').isItemChecked(la)){c('MenuDeprecated').toggleItem(la);s(da,c('FriendStatus').CLOSE_FRIENDS,false);}}var ma={flid:ea,uid:ga.id},na=fa?'FriendListHovercard/add':'FriendListHovercard/remove';c('Arbiter').inform(na,ma);new (c('AsyncRequest'))().setURI('/ajax/add_friend/action.php').setData(ka).send();};if(fa){c('DynamicFriendListEducation').showDialog(ea,ga.id,ha);}else ha();}function t(da){var ea=c('DOMQuery').scry(da,'input')[0];return ea&&ea.value;}function u(da,ea,fa){if(c('CSS').hasClass(fa,'async_saving'))return;var ga={uid:ea.id};new (c('AsyncRequest'))().setURI(k).setMethod('POST').setData({friend:ea.id,cancel_ref:p,floc:q}).setHandler(function(){return c('Arbiter').inform('FriendRequest/cancel',ga);}).setErrorHandler(function(){return c('Arbiter').inform('FriendRequest/cancelFail',ga);}).setStatusElement(fa).send();}function v(da,ea){var fa=c('MenuDeprecated').getItems(da);for(var ga=0;ga<fa.length;ga++)if(t(fa[ga])==ea)return fa[ga];return null;}function w(da,ea){var fa=c('MenuDeprecated').getItems(da);fa.forEach(function(ga){var ha=t(ga),ia=c('arrayContains')(ea.lists,ha);if(c('MenuDeprecated').isItemChecked(ga)!==ia)c('MenuDeprecated').toggleItem(ga);});}function x(da){var ea=c('MenuDeprecated').getItems(da),fa=!c('CSS').hasClass(da,'followButtonFlyout')&&!c('CSS').hasClass(da,'likeButtonFlyout'),ga=[],ha=[],ia=0,ja=0;ea.forEach(function(oa){if(c('CSS').hasClass(oa,'neverHide')){c('CSS').removeClass(oa,'underShowMore');ia++;}else if(c('MenuDeprecated').isItemChecked(oa)){ga.push(oa);}else if(c('CSS').hasClass(oa,'neverShow')||c('CSS').hasClass(oa,'FriendListCreateTrigger')||!fa&&c('CSS').hasClass(oa,'friendOptionsOnly')){c('CSS').addClass(oa,'underShowMore');ja++;}else ha.push(oa);});var ka=h-ia,la=ga.concat(ha),ma=ja;la.forEach(function(oa){if(c('CSS').hasClass(oa,'ShowMoreItem')){ka--;return;}if(ka){c('CSS').removeClass(oa,'underShowMore');ka--;}else{c('CSS').addClass(oa,'underShowMore');ma=true;}});c('CSS').conditionClass(da,'hasMoreFriendListItems',ma);var na=c('DOMQuery').scry(da,'.FriendListMenuShowMore');na.forEach(function(oa){c('CSS').removeClass(oa,'FriendListMenuShowMore');});}function y(da,ea){c('CSS').conditionClass(da,'FriendListMemorializedUser',ea);}function z(da,ea){c('CSS').conditionClass(da,'FriendListCannotSuggestFriends',!ea);}function aa(da,ea){var fa=c('DOMQuery').scry(da,'.FriendListUnfriend')[0],ga=c('DOMQuery').scry(da,'.FriendListCancel')[0],ha=c('DOMQuery').scry(da,'.FriendListSuggestFriends')[0],ia=c('DOMQuery').scry(da,'.FriendListFriendship')[0];if(ga)c('CSS').conditionShow(ga,ea.status==c('FriendStatus').OUTGOING_REQUEST);if(fa){c('CSS').conditionShow(fa,ea.id!==undefined&&ea.status===c('FriendStatus').ARE_FRIENDS);var ja=c('DOMQuery').find(fa,'a');ja.setAttribute('ajaxify',new (c('URI'))(j).addQueryData({uid:ea.id,unref:o,floc:q}).toString());}else c('CSS').conditionClass(da,'NoFriendListActionSeparator',!ga||ea.status!=c('FriendStatus').OUTGOING_REQUEST);if(ha)c('DOMQuery').find(ha,'a').setAttribute('href',new (c('URI'))(l).addQueryData({type:'suggest_friends',newcomer:ea.id,ref:'profile_others_dropdown'}).toString());if(ia){c('CSS').conditionShow(ia,ea.status==c('FriendStatus').ARE_FRIENDS);c('DOMQuery').find(ia,'a').setAttribute('href',new (c('URI'))(m).addQueryData({and:ea.id}).toString());}}function ba(da,ea,fa){var ga=c('DOMQuery').scry(da,'div.FriendListSubscriptionsMenu');if(ga.length!==0)c('EditSubscriptions').init(da,ea,fa);}c('Arbiter').subscribe('FriendRequest/change',function(da,ea){for(var fa in i){var ga=c('ge')(fa),ha=i[fa];if(ga&&ha&&ha.id==ea.uid){w(ga,ha);aa(ga,ha);x(ga);}}});c('MenuDeprecated').subscribe('select',function(da,ea){if(c('CSS').hasClass(ea.item,'ShowMoreItem')&&c('CSS').hasClass(ea.menu,'FriendListMenu')){c('CSS').addClass(ea.menu,'FriendListMenuShowMore');c('ScrollableArea').poke(ea.item);}});var ca={init:function da(ea,fa,ga,ha,ia,ja,ka,la){ea=c('$')(ea);n=ga;o=ja;p=ka;q=la;var ma=r[ga]||45;if(!i[ea.id])c('MenuDeprecated').subscribe('select',function(na,oa){if(c('DOMQuery').contains(ea,oa.item))if(c('Parent').byClass(oa.item,'FriendListItem')){c('MenuDeprecated').toggleItem(oa.item);var pa=t(oa.item);s(ea,pa,c('MenuDeprecated').isItemChecked(oa.item));}else if(c('Parent').byClass(oa.item,'FriendListCancel')){u(ea,i[ea.id],oa.item);}else if(c('Parent').byClass(oa.item,'FriendListUnfriend'))c('Arbiter').inform('FriendEditLists/unfriend');});c('CSS').addClass(ea,'async_saving');c('FriendStatus').getFriend(fa,function(na){y(ea,ha);z(ea,ia);w(ea,na);aa(ea,na);i[ea.id]=na;x(ea);ba(ea,fa,ma);c('CSS').removeClass(ea,'async_saving');}.bind(this));}};f.exports=b.FriendEditLists||ca;}),null);
__d('FriendListFlyoutController',['csx','cx','Arbiter','AsyncRequest','Button','ContextualLayer','CSS','DataStore','DOM','DOMQuery','Event','FriendEditLists','FriendStatus','getActiveElement','ifRequired','Keys','Layer','LayerHideOnEscape','LayerTabIsolation','MenuDeprecated','Parent','ScrollableArea','Style','TabbableElements','UserAgent_DEPRECATED','emptyFunction'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k,l,m=null,n=null,o,p,q,r,s,t,u=1500,v,w=false,x=['uiButtonConfirm','uiButtonSpecial',"_42gz","_42g-","_4jy2","_51tl","_4jy1"],y={init:function cb(db,eb){y.init=c('emptyFunction');j=db;j.subscribe('mouseenter',ha);j.subscribe('mouseleave',function(){if(!w)xa();});j.subscribe('hide',ja);j.enableBehavior(c('LayerTabIsolation'));j.enableBehavior(c('LayerHideOnEscape'));v=eb;if(m)c('DOM').setContent(j.getContent(),[m,n]);var fb=function hb(ib){var jb=c('Parent').byClass(ib.getTarget(),'enableFriendListFlyout');if(jb){w=true;if(o!==jb){l&&za();wa(jb);}}else if(w)za();},gb=function hb(ib){var jb=c('Parent').byClass(ib.getTarget(),'enableFriendListFlyout');if(jb)if(o===jb){clearTimeout(r);}else{l&&za();wa(jb);}};c('Event').listen(document.documentElement,{click:fb,mouseover:gb,keydown:function hb(event){var ib=event.getTarget();if(event.getModifiers().any)return;if(!l||c('DOMQuery').isNodeOfType(ib,['input','textarea']))return;var jb=c('Event').getKeyCode(event),kb;switch(jb){case c('Keys').UP:case c('Keys').DOWN:var lb=ga();kb=ea(lb);ca(lb[kb+(jb===c('Keys').UP?-1:1)]);return false;case c('Keys').SPACE:var mb=da(ib);if(mb){z(mb);event.prevent();}break;default:var nb=String.fromCharCode(jb).toLowerCase(),ob=ga();kb=ea(ob);var pb=kb,qb=ob.length;while((pb=++pb%qb)!==kb){var rb=c('MenuDeprecated').getItemLabel(ob[pb]);if(rb&&rb.charAt(0).toLowerCase()===nb){ca(ob[pb]);return false;}}}}});c('Arbiter').subscribe('FriendEditLists/unfriend',za);c('Arbiter').subscribe('FriendRequest/cancel',za);c('Arbiter').subscribe('DynamicFriendListEducation/dialogOpen',function(){t=true;});c('Arbiter').subscribe('DynamicFriendListEducation/dialogClosed',function(){t=false;xa();});},initContent:function cb(db){c('DOM').appendContent(document.body,db);ka(db);setTimeout(function(){if(!m){m=db;j&&c('DOM').setContent(j.getContent(),[m,n]);c('CSS').show(m);c('Event').listen(m,'click',ab);l&&ta(o);}else{c('DOM').remove(db);db=null;}},0);},initNux:function cb(db){if(n)return;n=db;j&&c('DOM').setContent(j.getContent(),[m,n]);},show:function cb(db){ua(db);},hide:function cb(db){db===false?za():xa();},setActiveNode:function cb(db){l&&za();o=db;p=c('Event').listen(db,'mouseleave',function(){o=null;p&&p.remove();});},setCloseListener:function cb(db,eb){c('DataStore').set(db,'flfcloselistener',eb);if(o!=db)c('DataStore').set(db,'flfcloselistenertimeout',setTimeout(bb.bind(null,db),u));},setCloseListenerTimeout:function cb(db){u=db;}};function z(cb){c('UserAgent_DEPRECATED').firefox()&&ba(cb).blur();c('MenuDeprecated').inform('select',{menu:aa(cb),item:cb});}function aa(cb){if(c('CSS').hasClass(cb,'uiMenuContainer'))return cb;return c('Parent').byClass(cb,'uiMenu');}function ba(cb){return c('DOMQuery').find(cb,'a.itemAnchor');}function ca(cb){if(cb&&fa(cb)){c('MenuDeprecated')._removeSelected(j.getContent());c('CSS').addClass(cb,'selected');ba(cb).focus();}}function da(cb){return c('Parent').byClass(cb,'uiMenuItem');}function ea(cb){var db=c('getActiveElement')();if(db){var eb=da(db);return cb.indexOf(eb);}return -1;}function fa(cb){return !c('CSS').hasClass(cb,'disabled')&&c('Style').get(cb,'display')!=='none'&&c('Style').get(c('Parent').byClass(cb,'uiMenu'),'display')!=='none';}function ga(){return c('MenuDeprecated').getItems(j.getContent()).filter(fa);}function ha(){clearTimeout(r);}function ia(cb){for(var db=0;db<x.length;db++)if(c('CSS').hasClass(cb,x[db]))return false;return true;}function ja(){if(o){if(ia(o)){c('CSS').removeClass(o,"_52nd");if(c('CSS').hasClass(o,'uiButton')||c('CSS').matchesSelector(o,"._42fu"))c('CSS').removeClass(o,'selected');}if(c('DataStore').get(o,'flfcloselistener')){var cb=o;c('DataStore').set(o,'flfcloselistenertimeout',setTimeout(bb.bind(null,cb),u));}}l=false;sa();o=null;}function ka(cb){var db=c('DOMQuery').scry(cb,'[tabindex="0"]');db.forEach(function(eb){eb.tabIndex='-1';});db[0]&&(db[0].tabIndex='0');}function la(cb){if(c('DOMQuery').isNodeOfType(cb,'label')&&c('CSS').hasClass(cb,'uiButton'))cb=c('Button').getInputElement(cb);return cb;}function ma(cb){return c('DataStore').get(la(cb),'profileid');}function na(cb){return c('DataStore').get(la(cb),'memorialized')==='true';}function oa(cb){return c('DataStore').get(la(cb),'cansuggestfriends')==='true';}function pa(cb){return c('DataStore').get(la(cb),'unref');}function qa(cb){return c('DataStore').get(la(cb),'cancelref');}function ra(cb){return c('DataStore').get(la(cb),'floc');}function sa(){p&&p.remove();p=null;s&&c('Layer').unsubscribe(s);s=null;r&&clearTimeout(r);r=null;}function ta(cb){var db=ma(cb),eb=na(cb),fb=oa(cb),gb=c('DataStore').get(cb,'flloc'),hb=pa(cb),ib=qa(cb),jb=ra(cb);c('FriendEditLists').init(m,db,gb,eb,fb,hb,ib,jb);c('CSS').conditionClass(m,'followButtonFlyout',c('CSS').hasClass(cb,'profileFollowButton'));c('CSS').conditionClass(m,'friendButtonFlyout',c('CSS').hasClass(cb,'FriendRequestFriends')||c('CSS').hasClass(cb,'FriendRequestIncoming')||c('CSS').hasClass(cb,'FriendRequestOutgoing'));c('CSS').conditionClass(m,'likeButtonFlyout',c('CSS').hasClass(cb,'profileLikeButton'));var kb=c('DOMQuery').scry(m,'div.uiScrollableArea')[0];kb&&c('ScrollableArea').poke(kb);var lb=c('TabbableElements').find(m)[0];lb&&lb.focus();}function ua(cb){if(!j||l)return;j.setContext(cb);j.setCausalElement(cb);cb.setAttribute('aria-expanded','true');if(ia(cb)){c('CSS').addClass(cb,"_52nd");if(c('CSS').hasClass(cb,'uiButton')||c('CSS').matchesSelector(cb,"._42fu"))c('CSS').addClass(cb,'selected');}j.show();o=cb;l=true;var db=null;if(m){db='show';ta(cb);}else{db='init_show';new (c('AsyncRequest'))().setURI('/ajax/friends/lists/flyout_content.php').setStatusElement(j.getContent()).send();}sa();p=c('Event').listen(cb,'mouseleave',xa);s=c('Layer').subscribe('show',va);if(c('DataStore').get(cb,'flfcloselistener'))clearTimeout(c('DataStore').remove(cb,'flfcloselistenertimeout'));var eb=ma(cb);c('FriendStatus').getFriend(eb,function(fb){if(fb.status==c('FriendStatus').ARE_FRIENDS)new (c('AsyncRequest'))().setURI('/ajax/friends/lists/flyout_log.php').setData({target_id:ma(cb),unref:pa(cb),action:db}).send();if(!n)return;if(fb.status==c('FriendStatus').OUTGOING_REQUEST){c('CSS').show(n);c('AsyncRequest').bootstrap('/ajax/friends/lists/nux_flyout.php',null,true);}else c('CSS').hide(n);});if(!k||cb.id!==k.id){c('Arbiter').inform('listeditor/close_editor');c('Arbiter').inform('friend-list/close_editor');}k=cb;}function va(cb,db){if(!(db instanceof c('ContextualLayer'))||!c('DOMQuery').contains(o,db.getContext()))xa();}function wa(cb){o=cb;q=setTimeout(ua.bind(null,cb),v);p=c('Event').listen(cb,'mouseleave',function(){clearTimeout(q);o=null;p&&p.remove();});}function xa(){r=setTimeout(za,150);}function ya(){var cb=c('ifRequired')('Dialog',function(eb){return eb;});if(cb){var db=cb.getCurrent();return db&&c('DOMQuery').scry(db,'.friendListDialogTourCarousel')[0];}}function za(){if(t||ya())return;w=false;if(j){j.hide();var cb=j.getCausalElement();cb&&cb.setAttribute('aria-expanded','false');}}function ab(event){var cb=c('Parent').byTag(event.getTarget(),'a');if(cb&&c('CSS').hasClass(cb,'FriendListActionItem'))xa();}function bb(cb){var db=c('DataStore').remove(cb,'flfcloselistener');db&&db();}f.exports=b.FriendListFlyoutController||y;}),null);
__d('AddFriendButton',['Event','Arbiter','AsyncRequest','AsyncResponse','collectDataAttributes','CSS','DOMQuery','FriendListFlyoutController','FriendStatus','ge','goURI','Style','SubscribeButton','getVendorPrefixedName','URI','XPubcontentChainedSuggestionsController'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ERROR_ALREADY_ADDED:1431005,init:function i(j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var y=j.id,z=null,aa=c('DOMQuery').scry(j,'.addButton')[0],ba=c('DOMQuery').scry(j,'.addFriendText')[0],ca=c('DOMQuery').scry(j,'.outgoingButton')[0],da=c('DOMQuery').scry(j,'.incomingButton')[0],ea=c('DOMQuery').scry(j,'.friendButton')[0],fa=c('DOMQuery').scry(j.parentNode,'.suggestFriendsButton')[0];function ga(na,oa,pa){var qa=new (c('URI'))(aa.getAttribute('ajaxify')),ra=c('collectDataAttributes')(j,['ft','gt']);new (c('AsyncRequest'))().setURI(o).setData({to_friend:k,action:na,how_found:m,ref_param:n,link_data:ra,outgoing_id:ca.id,xids:qa.getQueryData().xids,logging_location:p,no_flyout_on_click:q,ego_log_data:r,http_referer:t,floc:v,frefs:w}).setErrorHandler(oa).setServerDialogCancelHandler(pa).setRelativeTo(ca).send();if(u&&na==='add_friend'){var sa=c('XPubcontentChainedSuggestionsController').getURIBuilder().setInt('friendid',k).getURI();new (c('AsyncRequest'))().setURI(sa).send();}c('Arbiter').inform(c('SubscribeButton').SUBSCRIBED,{profile_id:k.toString(),connected:true,chaining:false});}function ha(na,oa){if(ba){c('CSS').hide(ba);}else if(aa){if(x)c('CSS').hide(x);c('CSS').hide(aa);}ca&&c('CSS').hide(ca);da&&c('CSS').hide(da);ea&&c('CSS').hide(ea);if(na){c('CSS').show(na);if(x&&'Requestable'===oa)c('CSS').show(x);}if('Outgoing'==oa&&z!=oa&&s){var pa=c('getVendorPrefixedName')('transition'),qa=c('Style').get(na,pa),ra={backgroundColor:'transparent',borderColor:c('Style').get(na,'borderLeftColor')};ra[pa]='2s';var sa=c('Event').listen(na,c('getVendorPrefixedName')('transitionend'),function(){c('Style').apply(na,{transition_prop:qa});sa.remove();});c('Style').apply(na,ra);}if('Requestable'==oa&&z!=oa)fa&&c('CSS').hide(fa);z&&c('CSS').removeClass(j,'fStatus'+z);z=oa;c('CSS').addClass(j,'fStatus'+oa);}function ia(na){if(c('CSS').hasClass(na,'enableFriendListFlyout')){c('FriendListFlyoutController').show(na);}else c('FriendListFlyoutController').hide();}var ja=c('Arbiter').subscribe('FriendRequest/change',function(na,oa){ma();if(oa.uid!=k)return;switch(oa.status){case c('FriendStatus').ARE_FRIENDS:return ha(ea,'Friends');case c('FriendStatus').INCOMING_REQUEST:return ha(da,'Incoming');case c('FriendStatus').OUTGOING_REQUEST:return ha(ca,'Outgoing');case c('FriendStatus').CAN_REQUEST:return ha(ba?ba:aa,'Requestable');}}),ka=c('Arbiter').subscribe('FriendRequest/unfriend',function(na,oa){ma();if(oa.uid===k&&oa.shouldHideButton===true)c('CSS').hide(aa);}),la;if(l)la=c('Arbiter').subscribe('FriendRequest/confirm',function(na,oa){ma();oa.uid==k&&c('goURI')(l);});aa&&c('Event').listen(aa,'click',function(){c('Arbiter').inform('FriendRequest/sending',{uid:k});if(q){c('FriendListFlyoutController').setActiveNode(ca);}else ia(ca);ga("add_friend",function(na){var oa=na.error==h.ERROR_ALREADY_ADDED?'FriendRequest/sent':'FriendRequest/sendFail';c('Arbiter').inform(oa,{uid:k});c('FriendListFlyoutController').hide();c('AsyncResponse').defaultErrorHandler(na);},function(na){c('Arbiter').inform('FriendRequest/sendFail',{uid:k});c('FriendListFlyoutController').hide();});});function ma(){if(c('ge')(y))return;ja&&ja.unsubscribe();la&&la.unsubscribe();ka&&ka.unsubscribe();ja=null;la=null;ka=null;}}};f.exports=h;}),null);
__d('legacy:DynamicFriendListEducation',['DynamicFriendListEducation'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.DynamicFriendListEducation=c('DynamicFriendListEducation');}),3);
__d('FriendButtonIcon',['Arbiter','FriendStatus','Button','arrayContains'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={register:function h(i,j,k){c('Arbiter').subscribe('FriendListMembershipChange',function(l,m){if(m.uid==k){var n=c('arrayContains')(m.lists,c('FriendStatus').CLOSE_FRIENDS),o=c('arrayContains')(m.lists,c('FriendStatus').ACQUAINTANCES);if(n&&!o){c('Button').setIcon(i,j.close);}else if(o&&!n){c('Button').setIcon(i,j.acquaintance);}else c('Button').setIcon(i,j.friend);}});}};}),null);
__d('FriendListMenu',['Event','Arbiter','AsyncRequest','CSS','DOM','HTML','Focus','Input','Keys','MenuDeprecated','Parent'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j){c('MenuDeprecated').register(j,false);var k=c('DOM').find(j,'.FriendListCreateTrigger'),l=c('DOM').find(j,'.CreateListInputItem'),m=c('DOM').find(l,'.createListInput');c('MenuDeprecated').subscribe('select',function(n,o){if(o.item==k){c('CSS').addClass(j,'FriendListMenuCreate');c('Focus').set(m);}});c('Event').listen(m,'blur',function(n){if(c('Input').isEmpty(m))c('CSS').removeClass(j,'FriendListMenuCreate');});c('Event').listen(m,'keydown',function(n){if(c('Event').getKeyCode(n)==c('Keys').RETURN&&/[^\s]/.test(m.value))new (c('AsyncRequest'))().setURI('/ajax/friends/lists/create.php').setData({name:m.value,id:j.id}).setHandler(function(){c('Input').reset(m);c('CSS').removeClass(j,'FriendListMenuCreate');}).send();});c('Arbiter').subscribe('friend-list/new',function(n,o){var p=c('HTML')(o.new_li).getRootNode();c('DOM').insertBefore(k,p);if(o.id===j.id){c('MenuDeprecated').focusItem(p);c('MenuDeprecated').inform('select',{menu:c('Parent').byClass(p,'uiMenu'),item:p});}else c('MenuDeprecated').toggleItem(p);});c('Arbiter').subscribe('friend-list/close_editor',function(){var n=c('Parent').byClass(j,'FlyoutFriendMenu');c('CSS').removeClass(n,'addToListsOpen');c('CSS').addClass(n,'addToListsClosed');});},addToAnotherList:function i(j,k){c('Event').listen(j,'click',function(event){var l=c('Parent').byClass(j,'FlyoutFriendMenu');c('CSS').removeClass(l,'addToListsClosed');c('CSS').addClass(l,'addToListsOpen');});},goBack:function i(j,k){c('Event').listen(j,'click',function(event){var l=c('Parent').byClass(j,'FlyoutFriendMenu');c('CSS').removeClass(l,'addToListsOpen');c('CSS').addClass(l,'addToListsClosed');});}};f.exports=h;}),null);
__d('RestrictedFriendListEducation',['Arbiter','AsyncRequest'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i;function j(l,m){if(m.flid==h)if(l=='FriendListHovercard/add'){if(i)return;i=true;new (c('AsyncRequest'))().setURI('/ajax/friends/lists/restricted_edu.php').setData({target:m.uid,flid:m.flid}).send();}else if(l=='RestrictedListNUX/okay')new (c('AsyncRequest'))().setURI('/ajax/friends/lists/nux_log.php').setData(m).send();return true;}var k={init:function l(m){h=m;c('Arbiter').subscribe(['FriendListHovercard/add','RestrictedListNUX/okay'],j);}};f.exports=k;}),null);
__d("XEgoHideLoggingController",["XController"],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ego\/feed\/logging\/xout\/",{ego_id:{type:"Int",required:true},qid:{type:"Int",required:true},mf_story_key:{type:"Int",required:true},service_id:{type:"String",required:true}});}),null);
__d('PymkXout',['Event','DOM','CSS','Arbiter','XEgoHideLoggingController','AsyncSignal'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function i(j,k,l){c('Event').listen(k,'click',function(event){this._logForItem(j);if(l==='pymk_jewel'||l==='pymk_jewel_first_page'){c('CSS').hide(j);}else c('DOM').remove(j);c('Arbiter').inform('pymk-x-out',{location:l});var m=event.getTarget().getAttribute('data-pymk-id');if(m)c('Arbiter').inform('x-out-ego-suggestions',{id:m});}.bind(this));},_logForItem:function i(j){var k=JSON.parse(j.getAttribute('data-ft'));if(!k)return;if(!k.ego_id)return;var l=c('XEgoHideLoggingController').getURIBuilder().setInt('ego_id',k.ego_id).setInt('qid',k.qid).setInt('mf_story_key',k.mf_story_key).setString('service_id','PYMK').getURI();new (c('AsyncSignal'))(l,{}).send();}};f.exports=h;}),null);