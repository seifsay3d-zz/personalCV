if (self.CavalryLogger) { CavalryLogger.start_js(["t4m8b"]); }

__d('MenuFileInputItem',['Event','SubscriptionsHandler'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){'use strict';this.$MenuFileInputItem5=function(event){if(event.getTarget()===this.$MenuFileInputItem3.getInput()){if(!this.$MenuFileInputItem1)this.$MenuFileInputItem3.getInput().focus();this.$MenuFileInputItem1=true;}else this.$MenuFileInputItem1=false;}.bind(this);this.$MenuFileInputItem6=function(event){if(event.getTarget()===this.$MenuFileInputItem3.getInput())this.$MenuFileInputItem1=false;}.bind(this);this.$MenuFileInputItem1=false;this.$MenuFileInputItem2=i;this.$MenuFileInputItem3=j;this.$MenuFileInputItem4=new (c('SubscriptionsHandler'))();this.$MenuFileInputItem4.addSubscriptions(c('Event').listen(document.documentElement,'focusin',this.$MenuFileInputItem5),c('Event').listen(this.$MenuFileInputItem2.getRoot(),'focusout',this.$MenuFileInputItem6));}h.prototype.getForm=function(){'use strict';return this.$MenuFileInputItem2;};h.prototype.destroy=function(){'use strict';this.$MenuFileInputItem4.release();};f.exports=h;}),null);