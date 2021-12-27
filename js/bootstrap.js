if("undefined"===typeof jQuery)throw Error("Bootstrap's JavaScript requires jQuery");+function(b){b=b.fn.jquery.split(" ")[0].split(".");if(2>b[0]&&9>b[1]||1==b[0]&&9==b[1]&&1>b[2]||3<b[0])throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");}(jQuery);
+function(b){function d(){var b=document.createElement("bootstrap"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},a;for(a in c)if(void 0!==b.style[a])return{end:c[a]};return!1}b.fn.emulateTransitionEnd=function(e){var c=!1,a=this;b(this).one("bsTransitionEnd",function(){c=!0});setTimeout(function(){c||b(a).trigger(b.support.transition.end)},e);return this};b(function(){b.support.transition=d();b.support.transition&&
(b.event.special.bsTransitionEnd={bindType:b.support.transition.end,delegateType:b.support.transition.end,handle:function(e){if(b(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}})})}(jQuery);
+function(b){var d=function(c){b(c).on("click",'[data-dismiss="alert"]',this.close)};d.VERSION="3.3.7";d.TRANSITION_DURATION=150;d.prototype.close=function(c){function a(){h.detach().trigger("closed.bs.alert").remove()}var f=b(this),g=f.attr("data-target");g||(g=(g=f.attr("href"))&&g.replace(/.*(?=#[^\s]*$)/,""));var h=b("#"===g?[]:g);c&&c.preventDefault();h.length||(h=f.closest(".alert"));h.trigger(c=b.Event("close.bs.alert"));c.isDefaultPrevented()||(h.removeClass("in"),b.support.transition&&h.hasClass("fade")?
h.one("bsTransitionEnd",a).emulateTransitionEnd(d.TRANSITION_DURATION):a())};var e=b.fn.alert;b.fn.alert=function(c){return this.each(function(){var a=b(this),f=a.data("bs.alert");f||a.data("bs.alert",f=new d(this));"string"==typeof c&&f[c].call(a)})};b.fn.alert.Constructor=d;b.fn.alert.noConflict=function(){b.fn.alert=e;return this};b(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d.prototype.close)}(jQuery);
+function(b){function d(a){return this.each(function(){var f=b(this),g=f.data("bs.button"),c="object"==typeof a&&a;g||f.data("bs.button",g=new e(this,c));"toggle"==a?g.toggle():a&&g.setState(a)})}var e=function(a,f){this.$element=b(a);this.options=b.extend({},e.DEFAULTS,f);this.isLoading=!1};e.VERSION="3.3.7";e.DEFAULTS={loadingText:"loading..."};e.prototype.setState=function(a){var f=this.$element,g=f.is("input")?"val":"html",c=f.data();a+="Text";null==c.resetText&&f.data("resetText",f[g]());setTimeout(b.proxy(function(){f[g](null==
c[a]?this.options[a]:c[a]);"loadingText"==a?(this.isLoading=!0,f.addClass("disabled").attr("disabled","disabled").prop("disabled",!0)):this.isLoading&&(this.isLoading=!1,f.removeClass("disabled").removeAttr("disabled").prop("disabled",!1))},this),0)};e.prototype.toggle=function(){var a=!0,f=this.$element.closest('[data-toggle="buttons"]');if(f.length){var b=this.$element.find("input");"radio"==b.prop("type")?(b.prop("checked")&&(a=!1),f.find(".active").removeClass("active"),this.$element.addClass("active")):
"checkbox"==b.prop("type")&&(b.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active"));b.prop("checked",this.$element.hasClass("active"));a&&b.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var c=b.fn.button;b.fn.button=d;b.fn.button.Constructor=e;b.fn.button.noConflict=function(){b.fn.button=c;return this};b(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(a){var f=
b(a.target).closest(".btn");d.call(f,"toggle");b(a.target).is('input[type="radio"], input[type="checkbox"]')||(a.preventDefault(),f.is("input,button")?f.trigger("focus"):f.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){b(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))})}(jQuery);
+function(b){function d(f){return this.each(function(){var a=b(this),c=a.data("bs.carousel"),d=b.extend({},e.DEFAULTS,a.data(),"object"==typeof f&&f),l="string"==typeof f?f:d.slide;c||a.data("bs.carousel",c=new e(this,d));if("number"==typeof f)c.to(f);else if(l)c[l]();else d.interval&&c.pause().cycle()})}var e=function(f,a){this.$element=b(f);this.$indicators=this.$element.find(".carousel-indicators");this.options=a;this.$items=this.$active=this.interval=this.sliding=this.paused=null;this.options.keyboard&&
this.$element.on("keydown.bs.carousel",b.proxy(this.keydown,this));"hover"!=this.options.pause||"ontouchstart"in document.documentElement||this.$element.on("mouseenter.bs.carousel",b.proxy(this.pause,this)).on("mouseleave.bs.carousel",b.proxy(this.cycle,this))};e.VERSION="3.3.7";e.TRANSITION_DURATION=600;e.DEFAULTS={interval:5E3,pause:"hover",wrap:!0,keyboard:!0};e.prototype.keydown=function(f){if(!/input|textarea/i.test(f.target.tagName)){switch(f.which){case 37:this.prev();break;case 39:this.next();
break;default:return}f.preventDefault()}};e.prototype.cycle=function(f){f||(this.paused=!1);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this};e.prototype.getItemIndex=function(f){this.$items=f.parent().children(".item");return this.$items.index(f||this.$active)};e.prototype.getItemForDirection=function(f,a){var b=this.getItemIndex(a);return("prev"==f&&0===b||"next"==f&&b==this.$items.length-
1)&&!this.options.wrap?a:this.$items.eq((b+("prev"==f?-1:1))%this.$items.length)};e.prototype.to=function(f){var a=this,b=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(f>this.$items.length-1||0>f))return this.sliding?this.$element.one("slid.bs.carousel",function(){a.to(f)}):b==f?this.pause().cycle():this.slide(f>b?"next":"prev",this.$items.eq(f))};e.prototype.pause=function(f){f||(this.paused=!0);this.$element.find(".next, .prev").length&&b.support.transition&&(this.$element.trigger(b.support.transition.end),
this.cycle(!0));this.interval=clearInterval(this.interval);return this};e.prototype.next=function(){if(!this.sliding)return this.slide("next")};e.prototype.prev=function(){if(!this.sliding)return this.slide("prev")};e.prototype.slide=function(f,a){var c=this.$element.find(".item.active"),d=a||this.getItemForDirection(f,c),l=this.interval,k="next"==f?"left":"right",m=this;if(d.hasClass("active"))return this.sliding=!1;var q=d[0],p=b.Event("slide.bs.carousel",{relatedTarget:q,direction:k});this.$element.trigger(p);
if(!p.isDefaultPrevented()){this.sliding=!0;l&&this.pause();this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),(p=b(this.$indicators.children()[this.getItemIndex(d)]))&&p.addClass("active"));var r=b.Event("slid.bs.carousel",{relatedTarget:q,direction:k});b.support.transition&&this.$element.hasClass("slide")?(d.addClass(f),d[0].offsetWidth,c.addClass(k),d.addClass(k),c.one("bsTransitionEnd",function(){d.removeClass([f,k].join(" ")).addClass("active");c.removeClass(["active",
k].join(" "));m.sliding=!1;setTimeout(function(){m.$element.trigger(r)},0)}).emulateTransitionEnd(e.TRANSITION_DURATION)):(c.removeClass("active"),d.addClass("active"),this.sliding=!1,this.$element.trigger(r));l&&this.cycle();return this}};var c=b.fn.carousel;b.fn.carousel=d;b.fn.carousel.Constructor=e;b.fn.carousel.noConflict=function(){b.fn.carousel=c;return this};var a=function(a){var c,h=b(this),e=b(h.attr("data-target")||(c=h.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""));if(e.hasClass("carousel")){c=
b.extend({},e.data(),h.data());if(h=h.attr("data-slide-to"))c.interval=!1;d.call(e,c);h&&e.data("bs.carousel").to(h);a.preventDefault()}};b(document).on("click.bs.carousel.data-api","[data-slide]",a).on("click.bs.carousel.data-api","[data-slide-to]",a);b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var a=b(this);d.call(a,a.data())})})}(jQuery);
+function(b){function d(a){var c;a=a.attr("data-target")||(c=a.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return b(a)}function e(a){return this.each(function(){var g=b(this),h=g.data("bs.collapse"),d=b.extend({},c.DEFAULTS,g.data(),"object"==typeof a&&a);!h&&d.toggle&&/show|hide/.test(a)&&(d.toggle=!1);h||g.data("bs.collapse",h=new c(this,d));if("string"==typeof a)h[a]()})}var c=function(a,g){this.$element=b(a);this.options=b.extend({},c.DEFAULTS,g);this.$trigger=b('[data-toggle="collapse"][href="#'+
a.id+'"],[data-toggle="collapse"][data-target="#'+a.id+'"]');this.transitioning=null;this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger);this.options.toggle&&this.toggle()};c.VERSION="3.3.7";c.TRANSITION_DURATION=350;c.DEFAULTS={toggle:!0};c.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"};c.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,g=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");
if(g&&g.length&&(a=g.data("bs.collapse"))&&a.transitioning)return;var h=b.Event("show.bs.collapse");this.$element.trigger(h);if(!h.isDefaultPrevented()){g&&g.length&&(e.call(g,"hide"),a||g.data("bs.collapse",null));var d=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[d](0).attr("aria-expanded",!0);this.$trigger.removeClass("collapsed").attr("aria-expanded",!0);this.transitioning=1;a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[d]("");this.transitioning=
0;this.$element.trigger("shown.bs.collapse")};if(!b.support.transition)return a.call(this);g=b.camelCase(["scroll",d].join("-"));this.$element.one("bsTransitionEnd",b.proxy(a,this)).emulateTransitionEnd(c.TRANSITION_DURATION)[d](this.$element[0][g])}}};c.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=b.Event("hide.bs.collapse");this.$element.trigger(a);if(!a.isDefaultPrevented()){a=this.dimension();this.$element[a](this.$element[a]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",
!1);this.$trigger.addClass("collapsed").attr("aria-expanded",!1);this.transitioning=1;var g=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!b.support.transition)return g.call(this);this.$element[a](0).one("bsTransitionEnd",b.proxy(g,this)).emulateTransitionEnd(c.TRANSITION_DURATION)}}};c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};c.prototype.getParent=function(){return b(this.options.parent).find('[data-toggle="collapse"][data-parent="'+
this.options.parent+'"]').each(b.proxy(function(a,c){var h=b(c);this.addAriaAndCollapsedClass(d(h),h)},this)).end()};c.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c);b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var a=b.fn.collapse;b.fn.collapse=e;b.fn.collapse.Constructor=c;b.fn.collapse.noConflict=function(){b.fn.collapse=a;return this};b(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(a){var c=b(this);c.attr("data-target")||
a.preventDefault();a=d(c);c=a.data("bs.collapse")?"toggle":c.data();e.call(a,c)})}(jQuery);
+function(b){function d(a){var c=a.attr("data-target");c||(c=(c=a.attr("href"))&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));return(c=c&&b(c))&&c.length?c:a.parent()}function e(a){a&&3===a.which||(b(".dropdown-backdrop").remove(),b('[data-toggle="dropdown"]').each(function(){var c=b(this),h=d(c),e={relatedTarget:this};!h.hasClass("open")||a&&"click"==a.type&&/input|textarea/i.test(a.target.tagName)&&b.contains(h[0],a.target)||(h.trigger(a=b.Event("hide.bs.dropdown",e)),a.isDefaultPrevented()||
(c.attr("aria-expanded","false"),h.removeClass("open").trigger(b.Event("hidden.bs.dropdown",e))))}))}var c=function(a){b(a).on("click.bs.dropdown",this.toggle)};c.VERSION="3.3.7";c.prototype.toggle=function(a){var c=b(this);if(!c.is(".disabled, :disabled")){var h=d(c);a=h.hasClass("open");e();if(!a){if("ontouchstart"in document.documentElement&&!h.closest(".navbar-nav").length)b(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(b(this)).on("click",e);var n={relatedTarget:this};
h.trigger(a=b.Event("show.bs.dropdown",n));if(a.isDefaultPrevented())return;c.trigger("focus").attr("aria-expanded","true");h.toggleClass("open").trigger(b.Event("shown.bs.dropdown",n))}return!1}};c.prototype.keydown=function(a){if(/(38|40|27|32)/.test(a.which)&&!/input|textarea/i.test(a.target.tagName)){var c=b(this);a.preventDefault();a.stopPropagation();if(!c.is(".disabled, :disabled")){var h=d(c),e=h.hasClass("open");if(!e&&27!=a.which||e&&27==a.which)return 27==a.which&&h.find('[data-toggle="dropdown"]').trigger("focus"),
c.trigger("click");c=h.find(".dropdown-menu li:not(.disabled):visible a");c.length&&(h=c.index(a.target),38==a.which&&0<h&&h--,40==a.which&&h<c.length-1&&h++,~h||(h=0),c.eq(h).trigger("focus"))}}};var a=b.fn.dropdown;b.fn.dropdown=function(a){return this.each(function(){var g=b(this),h=g.data("bs.dropdown");h||g.data("bs.dropdown",h=new c(this));"string"==typeof a&&h[a].call(g)})};b.fn.dropdown.Constructor=c;b.fn.dropdown.noConflict=function(){b.fn.dropdown=a;return this};b(document).on("click.bs.dropdown.data-api",
e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',c.prototype.toggle).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',c.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",c.prototype.keydown)}(jQuery);
+function(b){function d(a,c){return this.each(function(){var g=b(this),h=g.data("bs.modal"),d=b.extend({},e.DEFAULTS,g.data(),"object"==typeof a&&a);h||g.data("bs.modal",h=new e(this,d));if("string"==typeof a)h[a](c);else d.show&&h.show(c)})}var e=function(a,c){this.options=c;this.$body=b(document.body);this.$element=b(a);this.$dialog=this.$element.find(".modal-dialog");this.originalBodyPad=this.isShown=this.$backdrop=null;this.scrollbarWidth=0;this.ignoreBackdropClick=!1;this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,
b.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};e.VERSION="3.3.7";e.TRANSITION_DURATION=300;e.BACKDROP_TRANSITION_DURATION=150;e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0};e.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)};e.prototype.show=function(a){var c=this,g=b.Event("show.bs.modal",{relatedTarget:a});this.$element.trigger(g);this.isShown||g.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),
this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',b.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){c.$element.one("mouseup.dismiss.bs.modal",function(a){b(a.target).is(c.$element)&&(c.ignoreBackdropClick=!0)})}),this.backdrop(function(){var g=b.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(c.$body);c.$element.show().scrollTop(0);c.adjustDialog();g&&c.$element[0].offsetWidth;
c.$element.addClass("in");c.enforceFocus();var d=b.Event("shown.bs.modal",{relatedTarget:a});g?c.$dialog.one("bsTransitionEnd",function(){c.$element.trigger("focus").trigger(d)}).emulateTransitionEnd(e.TRANSITION_DURATION):c.$element.trigger("focus").trigger(d)}))};e.prototype.hide=function(a){a&&a.preventDefault();a=b.Event("hide.bs.modal");this.$element.trigger(a);this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),b(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
this.$dialog.off("mousedown.dismiss.bs.modal"),b.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",b.proxy(this.hideModal,this)).emulateTransitionEnd(e.TRANSITION_DURATION):this.hideModal())};e.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))};e.prototype.escape=function(){if(this.isShown&&
this.options.keyboard)this.$element.on("keydown.dismiss.bs.modal",b.proxy(function(a){27==a.which&&this.hide()},this));else this.isShown||this.$element.off("keydown.dismiss.bs.modal")};e.prototype.resize=function(){if(this.isShown)b(window).on("resize.bs.modal",b.proxy(this.handleUpdate,this));else b(window).off("resize.bs.modal")};e.prototype.hideModal=function(){var a=this;this.$element.hide();this.backdrop(function(){a.$body.removeClass("modal-open");a.resetAdjustments();a.resetScrollbar();a.$element.trigger("hidden.bs.modal")})};
e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};e.prototype.backdrop=function(a){var c=this,g=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var h=b.support.transition&&g;this.$backdrop=b(document.createElement("div")).addClass("modal-backdrop "+g).appendTo(this.$body);this.$element.on("click.dismiss.bs.modal",b.proxy(function(a){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:a.target===a.currentTarget&&("static"==
this.options.backdrop?this.$element[0].focus():this.hide())},this));h&&this.$backdrop[0].offsetWidth;this.$backdrop.addClass("in");a&&(h?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):a())}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),g=function(){c.removeBackdrop();a&&a()},b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION):g()):a&&a()};
e.prototype.handleUpdate=function(){this.adjustDialog()};e.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})};e.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};e.prototype.checkScrollbar=function(){var a=window.innerWidth;a||(a=document.documentElement.getBoundingClientRect(),
a=a.right-Math.abs(a.left));this.bodyIsOverflowing=document.body.clientWidth<a;this.scrollbarWidth=this.measureScrollbar()};e.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)};e.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};e.prototype.measureScrollbar=function(){var a=document.createElement("div");
a.className="modal-scrollbar-measure";this.$body.append(a);var c=a.offsetWidth-a.clientWidth;this.$body[0].removeChild(a);return c};var c=b.fn.modal;b.fn.modal=d;b.fn.modal.Constructor=e;b.fn.modal.noConflict=function(){b.fn.modal=c;return this};b(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(a){var c=b(this),g=c.attr("href"),h=b(c.attr("data-target")||g&&g.replace(/.*(?=#[^\s]+$)/,"")),g=h.data("bs.modal")?"toggle":b.extend({remote:!/#/.test(g)&&g},h.data(),c.data());c.is("a")&&
a.preventDefault();h.one("show.bs.modal",function(a){if(!a.isDefaultPrevented())h.one("hidden.bs.modal",function(){c.is(":visible")&&c.trigger("focus")})});d.call(h,g,this)})}(jQuery);
+function(b){var d=function(c,a){this.inState=this.$element=this.hoverState=this.timeout=this.enabled=this.options=this.type=null;this.init("tooltip",c,a)};d.VERSION="3.3.7";d.TRANSITION_DURATION=150;d.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}};d.prototype.init=function(c,a,
f){this.enabled=!0;this.type=c;this.$element=b(a);this.options=this.getOptions(f);this.$viewport=this.options.viewport&&b(b.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport);this.inState={click:!1,hover:!1,focus:!1};if(this.$element[0]instanceof document.constructor&&!this.options.selector)throw Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");c=this.options.trigger.split(" ");
for(a=c.length;a--;)if(f=c[a],"click"==f)this.$element.on("click."+this.type,this.options.selector,b.proxy(this.toggle,this));else if("manual"!=f){var g="hover"==f?"mouseleave":"focusout";this.$element.on(("hover"==f?"mouseenter":"focusin")+"."+this.type,this.options.selector,b.proxy(this.enter,this));this.$element.on(g+"."+this.type,this.options.selector,b.proxy(this.leave,this))}this.options.selector?this._options=b.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};d.prototype.getDefaults=
function(){return d.DEFAULTS};d.prototype.getOptions=function(c){c=b.extend({},this.getDefaults(),this.$element.data(),c);c.delay&&"number"==typeof c.delay&&(c.delay={show:c.delay,hide:c.delay});return c};d.prototype.getDelegateOptions=function(){var c={},a=this.getDefaults();this._options&&b.each(this._options,function(b,g){a[b]!=g&&(c[b]=g)});return c};d.prototype.enter=function(c){var a=c instanceof this.constructor?c:b(c.currentTarget).data("bs."+this.type);a||(a=new this.constructor(c.currentTarget,
this.getDelegateOptions()),b(c.currentTarget).data("bs."+this.type,a));c instanceof b.Event&&(a.inState["focusin"==c.type?"focus":"hover"]=!0);if(a.tip().hasClass("in")||"in"==a.hoverState)a.hoverState="in";else{clearTimeout(a.timeout);a.hoverState="in";if(!a.options.delay||!a.options.delay.show)return a.show();a.timeout=setTimeout(function(){"in"==a.hoverState&&a.show()},a.options.delay.show)}};d.prototype.isInStateTrue=function(){for(var c in this.inState)if(this.inState[c])return!0;return!1};d.prototype.leave=
function(c){var a=c instanceof this.constructor?c:b(c.currentTarget).data("bs."+this.type);a||(a=new this.constructor(c.currentTarget,this.getDelegateOptions()),b(c.currentTarget).data("bs."+this.type,a));c instanceof b.Event&&(a.inState["focusout"==c.type?"focus":"hover"]=!1);if(!a.isInStateTrue()){clearTimeout(a.timeout);a.hoverState="out";if(!a.options.delay||!a.options.delay.hide)return a.hide();a.timeout=setTimeout(function(){"out"==a.hoverState&&a.hide()},a.options.delay.hide)}};d.prototype.show=
function(){var c=b.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(c);var a=b.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(!c.isDefaultPrevented()&&a){var f=this,c=this.tip(),a=this.getUID(this.type);this.setContent();c.attr("id",a);this.$element.attr("aria-describedby",a);this.options.animation&&c.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,
g=/\s?auto?\s?/i,h=g.test(a);h&&(a=a.replace(g,"")||"top");c.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this);this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);this.$element.trigger("inserted.bs."+this.type);var g=this.getPosition(),e=c[0].offsetWidth,l=c[0].offsetHeight;if(h){var h=a,k=this.getPosition(this.$viewport),a="bottom"==a&&g.bottom+l>k.bottom?"top":"top"==a&&g.top-l<k.top?"bottom":"right"==a&&g.right+e>k.width?"left":
"left"==a&&g.left-e<k.left?"right":a;c.removeClass(h).addClass(a)}g=this.getCalculatedOffset(a,g,e,l);this.applyPlacement(g,a);a=function(){var a=f.hoverState;f.$element.trigger("shown.bs."+f.type);f.hoverState=null;"out"==a&&f.leave(f)};b.support.transition&&this.$tip.hasClass("fade")?c.one("bsTransitionEnd",a).emulateTransitionEnd(d.TRANSITION_DURATION):a()}}};d.prototype.applyPlacement=function(c,a){var f=this.tip(),g=f[0].offsetWidth,h=f[0].offsetHeight,d=parseInt(f.css("margin-top"),10),e=parseInt(f.css("margin-left"),
10);isNaN(d)&&(d=0);isNaN(e)&&(e=0);c.top+=d;c.left+=e;b.offset.setOffset(f[0],b.extend({using:function(a){f.css({top:Math.round(a.top),left:Math.round(a.left)})}},c),0);f.addClass("in");var e=f[0].offsetWidth,k=f[0].offsetHeight;"top"==a&&k!=h&&(c.top=c.top+h-k);var m=this.getViewportAdjustedDelta(a,c,e,k);m.left?c.left+=m.left:c.top+=m.top;g=(d=/top|bottom/.test(a))?2*m.left-g+e:2*m.top-h+k;h=d?"offsetWidth":"offsetHeight";f.offset(c);this.replaceArrow(g,f[0][h],d)};d.prototype.replaceArrow=function(c,
a,b){this.arrow().css(b?"left":"top",50*(1-c/a)+"%").css(b?"top":"left","")};d.prototype.setContent=function(){var c=this.tip(),a=this.getTitle();c.find(".tooltip-inner")[this.options.html?"html":"text"](a);c.removeClass("fade in top bottom left right")};d.prototype.hide=function(c){function a(){"in"!=f.hoverState&&g.detach();f.$element&&f.$element.removeAttr("aria-describedby").trigger("hidden.bs."+f.type);c&&c()}var f=this,g=b(this.$tip),h=b.Event("hide.bs."+this.type);this.$element.trigger(h);
if(!h.isDefaultPrevented())return g.removeClass("in"),b.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",a).emulateTransitionEnd(d.TRANSITION_DURATION):a(),this.hoverState=null,this};d.prototype.fixTitle=function(){var c=this.$element;(c.attr("title")||"string"!=typeof c.attr("data-original-title"))&&c.attr("data-original-title",c.attr("title")||"").attr("title","")};d.prototype.hasContent=function(){return this.getTitle()};d.prototype.getPosition=function(c){c=c||this.$element;var a=
c[0],f="BODY"==a.tagName,g=a.getBoundingClientRect();null==g.width&&(g=b.extend({},g,{width:g.right-g.left,height:g.bottom-g.top}));a=window.SVGElement&&a instanceof window.SVGElement;a=f?{top:0,left:0}:a?null:c.offset();c={scroll:f?document.documentElement.scrollTop||document.body.scrollTop:c.scrollTop()};f=f?{width:b(window).width(),height:b(window).height()}:null;return b.extend({},g,c,f,a)};d.prototype.getCalculatedOffset=function(c,a,b,g){return"bottom"==c?{top:a.top+a.height,left:a.left+a.width/
2-b/2}:"top"==c?{top:a.top-g,left:a.left+a.width/2-b/2}:"left"==c?{top:a.top+a.height/2-g/2,left:a.left-b}:{top:a.top+a.height/2-g/2,left:a.left+a.width}};d.prototype.getViewportAdjustedDelta=function(c,a,b,g){var h={top:0,left:0};if(!this.$viewport)return h;var d=this.options.viewport&&this.options.viewport.padding||0,e=this.getPosition(this.$viewport);/right|left/.test(c)?(b=a.top-d-e.scroll,a=a.top+d-e.scroll+g,b<e.top?h.top=e.top-b:a>e.top+e.height&&(h.top=e.top+e.height-a)):(g=a.left-d,a=a.left+
d+b,g<e.left?h.left=e.left-g:a>e.right&&(h.left=e.left+e.width-a));return h};d.prototype.getTitle=function(){var b=this.$element,a=this.options;return b.attr("data-original-title")||("function"==typeof a.title?a.title.call(b[0]):a.title)};d.prototype.getUID=function(b){do b+=~~(1E6*Math.random());while(document.getElementById(b));return b};d.prototype.tip=function(){if(!this.$tip&&(this.$tip=b(this.options.template),1!=this.$tip.length))throw Error(this.type+" `template` option must consist of exactly 1 top-level element!");
return this.$tip};d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};d.prototype.enable=function(){this.enabled=!0};d.prototype.disable=function(){this.enabled=!1};d.prototype.toggleEnabled=function(){this.enabled=!this.enabled};d.prototype.toggle=function(c){var a=this;c&&(a=b(c.currentTarget).data("bs."+this.type),a||(a=new this.constructor(c.currentTarget,this.getDelegateOptions()),b(c.currentTarget).data("bs."+this.type,a)));c?(a.inState.click=!a.inState.click,
a.isInStateTrue()?a.enter(a):a.leave(a)):a.tip().hasClass("in")?a.leave(a):a.enter(a)};d.prototype.destroy=function(){var b=this;clearTimeout(this.timeout);this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type);b.$tip&&b.$tip.detach();b.$tip=null;b.$arrow=null;b.$viewport=null;b.$element=null})};var e=b.fn.tooltip;b.fn.tooltip=function(c){return this.each(function(){var a=b(this),f=a.data("bs.tooltip"),g="object"==typeof c&&c;if(f||!/destroy|hide/.test(c))if(f||a.data("bs.tooltip",
f=new d(this,g)),"string"==typeof c)f[c]()})};b.fn.tooltip.Constructor=d;b.fn.tooltip.noConflict=function(){b.fn.tooltip=e;return this}}(jQuery);
+function(b){var d=function(b,a){this.init("popover",b,a)};if(!b.fn.tooltip)throw Error("Popover requires tooltip.js");d.VERSION="3.3.7";d.DEFAULTS=b.extend({},b.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});d.prototype=b.extend({},b.fn.tooltip.Constructor.prototype);d.prototype.constructor=d;d.prototype.getDefaults=function(){return d.DEFAULTS};
d.prototype.setContent=function(){var b=this.tip(),a=this.getTitle(),f=this.getContent();b.find(".popover-title")[this.options.html?"html":"text"](a);b.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof f?"html":"append":"text"](f);b.removeClass("fade top bottom left right in");b.find(".popover-title").html()||b.find(".popover-title").hide()};d.prototype.hasContent=function(){return this.getTitle()||this.getContent()};d.prototype.getContent=function(){var b=this.$element,
a=this.options;return b.attr("data-content")||("function"==typeof a.content?a.content.call(b[0]):a.content)};d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var e=b.fn.popover;b.fn.popover=function(c){return this.each(function(){var a=b(this),f=a.data("bs.popover"),g="object"==typeof c&&c;if(f||!/destroy|hide/.test(c))if(f||a.data("bs.popover",f=new d(this,g)),"string"==typeof c)f[c]()})};b.fn.popover.Constructor=d;b.fn.popover.noConflict=function(){b.fn.popover=
e;return this}}(jQuery);
+function(b){function d(a,c){this.$body=b(document.body);this.$scrollElement=b(a).is(document.body)?b(window):b(a);this.options=b.extend({},d.DEFAULTS,c);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",b.proxy(this.process,this));this.refresh();this.process()}function e(a){return this.each(function(){var c=b(this),g=c.data("bs.scrollspy"),h="object"==typeof a&&a;g||c.data("bs.scrollspy",
g=new d(this,h));if("string"==typeof a)g[a]()})}d.VERSION="3.3.7";d.DEFAULTS={offset:10};d.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};d.prototype.refresh=function(){var a=this,c="offset",g=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();b.isWindow(this.$scrollElement[0])||(c="position",g=this.$scrollElement.scrollTop());this.$body.find(this.selector).map(function(){var a=
b(this),a=a.data("target")||a.attr("href"),d=/^#./.test(a)&&b(a);return d&&d.length&&d.is(":visible")&&[[d[c]().top+g,a]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){a.offsets.push(this[0]);a.targets.push(this[1])})};d.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.getScrollHeight(),c=this.options.offset+b-this.$scrollElement.height(),d=this.offsets,e=this.targets,l=this.activeTarget,k;this.scrollHeight!=b&&this.refresh();if(a>=c)return l!=
(k=e[e.length-1])&&this.activate(k);if(l&&a<d[0])return this.activeTarget=null,this.clear();for(k=d.length;k--;)l!=e[k]&&a>=d[k]&&(void 0===d[k+1]||a<d[k+1])&&this.activate(e[k])};d.prototype.activate=function(a){this.activeTarget=a;this.clear();a=b(this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]').parents("li").addClass("active");a.parent(".dropdown-menu").length&&(a=a.closest("li.dropdown").addClass("active"));a.trigger("activate.bs.scrollspy")};d.prototype.clear=function(){b(this.selector).parentsUntil(this.options.target,
".active").removeClass("active")};var c=b.fn.scrollspy;b.fn.scrollspy=e;b.fn.scrollspy.Constructor=d;b.fn.scrollspy.noConflict=function(){b.fn.scrollspy=c;return this};b(window).on("load.bs.scrollspy.data-api",function(){b('[data-spy="scroll"]').each(function(){var a=b(this);e.call(a,a.data())})})}(jQuery);
+function(b){function d(a){return this.each(function(){var c=b(this),d=c.data("bs.tab");d||c.data("bs.tab",d=new e(this));if("string"==typeof a)d[a]()})}var e=function(a){this.element=b(a)};e.VERSION="3.3.7";e.TRANSITION_DURATION=150;e.prototype.show=function(){var a=this.element,c=a.closest("ul:not(.dropdown-menu)"),d=a.data("target");d||(d=(d=a.attr("href"))&&d.replace(/.*(?=#[^\s]*$)/,""));if(!a.parent("li").hasClass("active")){var e=c.find(".active:last a"),l=b.Event("hide.bs.tab",{relatedTarget:a[0]}),
k=b.Event("show.bs.tab",{relatedTarget:e[0]});e.trigger(l);a.trigger(k);k.isDefaultPrevented()||l.isDefaultPrevented()||(d=b(d),this.activate(a.closest("li"),c),this.activate(d,d.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:a[0]});a.trigger({type:"shown.bs.tab",relatedTarget:e[0]})}))}};e.prototype.activate=function(a,c,d){function n(){l.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1);a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",
!0);k?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade");a.parent(".dropdown-menu").length&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0);d&&d()}var l=c.find("> .active"),k=d&&b.support.transition&&(l.length&&l.hasClass("fade")||!!c.find("> .fade").length);l.length&&k?l.one("bsTransitionEnd",n).emulateTransitionEnd(e.TRANSITION_DURATION):n();l.removeClass("in")};var c=b.fn.tab;b.fn.tab=d;b.fn.tab.Constructor=e;b.fn.tab.noConflict=function(){b.fn.tab=
c;return this};var a=function(a){a.preventDefault();d.call(b(this),"show")};b(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',a).on("click.bs.tab.data-api",'[data-toggle="pill"]',a)}(jQuery);
+function(b){function d(a){return this.each(function(){var c=b(this),d=c.data("bs.affix"),h="object"==typeof a&&a;d||c.data("bs.affix",d=new e(this,h));if("string"==typeof a)d[a]()})}var e=function(a,c){this.options=b.extend({},e.DEFAULTS,c);this.$target=b(this.options.target).on("scroll.bs.affix.data-api",b.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",b.proxy(this.checkPositionWithEventLoop,this));this.$element=b(a);this.pinnedOffset=this.unpin=this.affixed=null;this.checkPosition()};
e.VERSION="3.3.7";e.RESET="affix affix-top affix-bottom";e.DEFAULTS={offset:0,target:window};e.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),l=this.$element.offset(),k=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=l.top?!1:"bottom":e+k<=a-d?!1:"bottom";var m=null==this.affixed,l=m?e:l.top;return null!=c&&e<=c?"top":null!=d&&l+(m?k:b)>=a-d?"bottom":!1};e.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;
this.$element.removeClass(e.RESET).addClass("affix");var a=this.$target.scrollTop();return this.pinnedOffset=this.$element.offset().top-a};e.prototype.checkPositionWithEventLoop=function(){setTimeout(b.proxy(this.checkPosition,this),1)};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),c=this.options.offset,d=c.top,h=c.bottom,n=Math.max(b(document).height(),b(document.body).height());"object"!=typeof c&&(h=d=c);"function"==typeof d&&(d=c.top(this.$element));
"function"==typeof h&&(h=c.bottom(this.$element));c=this.getState(n,a,d,h);if(this.affixed!=c){null!=this.unpin&&this.$element.css("top","");var d="affix"+(c?"-"+c:""),l=b.Event(d+".bs.affix");this.$element.trigger(l);if(l.isDefaultPrevented())return;this.affixed=c;this.unpin="bottom"==c?this.getPinnedOffset():null;this.$element.removeClass(e.RESET).addClass(d).trigger(d.replace("affix","affixed")+".bs.affix")}"bottom"==c&&this.$element.offset({top:n-a-h})}};var c=b.fn.affix;b.fn.affix=d;b.fn.affix.Constructor=
e;b.fn.affix.noConflict=function(){b.fn.affix=c;return this};b(window).on("load",function(){b('[data-spy="affix"]').each(function(){var a=b(this),c=a.data();c.offset=c.offset||{};null!=c.offsetBottom&&(c.offset.bottom=c.offsetBottom);null!=c.offsetTop&&(c.offset.top=c.offsetTop);d.call(a,c)})})}(jQuery);
