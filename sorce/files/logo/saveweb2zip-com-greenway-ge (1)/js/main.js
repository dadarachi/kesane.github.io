/* Minification failed. Returning unminified contents.
(2421,28-36): run-time error JS1100: Expected ',': function
(2421,38-39): run-time error JS1195: Expected expression: )
(2421,40-41): run-time error JS1004: Expected ';': {
(2459,23-24): run-time error JS1004: Expected ';': $
(2511,6-7): run-time error JS1195: Expected expression: ,
(2512,43-44): run-time error JS1195: Expected expression: )
(2512,45-46): run-time error JS1004: Expected ';': {
(2546,23-24): run-time error JS1004: Expected ';': $
(2598,6-7): run-time error JS1195: Expected expression: ,
(2599,29-30): run-time error JS1195: Expected expression: )
(2599,31-32): run-time error JS1004: Expected ';': {
(2604,6-7): run-time error JS1195: Expected expression: ,
(2605,38-39): run-time error JS1004: Expected ';': {
(2609,6-7): run-time error JS1195: Expected expression: ,
(2610,31-32): run-time error JS1195: Expected expression: )
(2610,33-34): run-time error JS1004: Expected ';': {
(2613,6-7): run-time error JS1195: Expected expression: ,
(2614,29-30): run-time error JS1195: Expected expression: )
(2614,31-32): run-time error JS1004: Expected ';': {
(2634,6-7): run-time error JS1195: Expected expression: ,
(2635,56-57): run-time error JS1004: Expected ';': {
(2651,6-7): run-time error JS1195: Expected expression: ,
(2652,54-55): run-time error JS1004: Expected ';': {
(2687,6-7): run-time error JS1195: Expected expression: ,
(2689,33-34): run-time error JS1010: Expected identifier: (
(2749,10-11): run-time error JS1195: Expected expression: ,
(2750,45-46): run-time error JS1004: Expected ';': {
(2835,10-11): run-time error JS1195: Expected expression: ,
(2836,48-49): run-time error JS1004: Expected ';': {
(2849,10-11): run-time error JS1195: Expected expression: ,
(2850,46-47): run-time error JS1004: Expected ';': {
(2864,10-11): run-time error JS1195: Expected expression: ,
(2865,48-49): run-time error JS1004: Expected ';': {
(2929,10-11): run-time error JS1195: Expected expression: ,
(2930,47-48): run-time error JS1004: Expected ';': {
(2969,10-11): run-time error JS1195: Expected expression: ,
(2686,9-25): run-time error JS1018: 'return' statement outside of function: return parentdiv
(2650,9-20): run-time error JS1018: 'return' statement outside of function: return html
(2616,13-25): run-time error JS1018: 'return' statement outside of function: return false
(2596,13-19): run-time error JS1018: 'return' statement outside of function: return
(2509,13-19): run-time error JS1018: 'return' statement outside of function: return
 */
/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a,b){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),null!=a.scrollContainer&&(this.config.scrollContainer=document.querySelector(a.scrollContainer)),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(b){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);;
/*! Select2 4.0.6-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c.__cache={};var e=0;return c.GetUniqueElementId=function(a){var b=a.getAttribute("data-select2-id");return null==b&&(a.id?(b=a.id,a.setAttribute("data-select2-id",b)):(a.setAttribute("data-select2-id",++e),b=e.toString())),b},c.StoreData=function(a,b,d){var e=c.GetUniqueElementId(a);c.__cache[e]||(c.__cache[e]={}),c.__cache[e][b]=d},c.GetData=function(b,d){var e=c.GetUniqueElementId(b);return d?c.__cache[e]&&null!=c.__cache[e][d]?c.__cache[e][d]:a(b).data(d):c.__cache[e]},c.RemoveData=function(a){var b=c.GetUniqueElementId(a);null!=c.__cache[b]&&delete c.__cache[b]},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var c=this;this.data.current(function(d){var e=a.map(d,function(a){return a.id.toString()});c.$results.find(".select2-results__option[aria-selected]").each(function(){var c=a(this),d=b.GetData(this,"data"),f=""+d.id;null!=d.element&&d.element.selected||null==d.element&&a.inArray(f,e)>-1?c.attr("aria-selected","true"):c.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(c){var d=document.createElement("li");d.className="select2-results__option";var e={role:"treeitem","aria-selected":"false"};c.disabled&&(delete e["aria-selected"],e["aria-disabled"]="true"),null==c.id&&delete e["aria-selected"],null!=c._resultId&&(d.id=c._resultId),c.title&&(d.title=c.title),c.children&&(e.role="group",e["aria-label"]=c.text,delete e["aria-selected"]);for(var f in e){var g=e[f];d.setAttribute(f,g)}if(c.children){var h=a(d),i=document.createElement("strong");i.className="select2-results__group";a(i);this.template(c,i);for(var j=[],k=0;k<c.children.length;k++){var l=c.children[k],m=this.option(l);j.push(m)}var n=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});n.append(j),h.append(i),h.append(n)}else this.template(c,d);return b.StoreData(d,"data",c),d},c.prototype.bind=function(c,d){var e=this,f=c.id+"-results";this.$results.attr("id",f),c.on("results:all",function(a){e.clear(),e.append(a.data),c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("results:append",function(a){e.append(a.data),c.isOpen()&&e.setClasses()}),c.on("query",function(a){e.hideMessages(),e.showLoading(a)}),c.on("select",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("unselect",function(){c.isOpen()&&(e.setClasses(),e.highlightFirstItem())}),c.on("open",function(){e.$results.attr("aria-expanded","true"),e.$results.attr("aria-hidden","false"),e.setClasses(),e.ensureHighlightVisible()}),c.on("close",function(){e.$results.attr("aria-expanded","false"),e.$results.attr("aria-hidden","true"),e.$results.removeAttr("aria-activedescendant")}),c.on("results:toggle",function(){var a=e.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),c.on("results:select",function(){var a=e.getHighlightedResults();if(0!==a.length){var c=b.GetData(a[0],"data");"true"==a.attr("aria-selected")?e.trigger("close",{}):e.trigger("select",{data:c})}}),c.on("results:previous",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var d=c-1;0===a.length&&(d=0);var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top,h=f.offset().top,i=e.$results.scrollTop()+(h-g);0===d?e.$results.scrollTop(0):h-g<0&&e.$results.scrollTop(i)}}),c.on("results:next",function(){var a=e.getHighlightedResults(),b=e.$results.find("[aria-selected]"),c=b.index(a),d=c+1;if(!(d>=b.length)){var f=b.eq(d);f.trigger("mouseenter");var g=e.$results.offset().top+e.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=e.$results.scrollTop()+h-g;0===d?e.$results.scrollTop(0):h>g&&e.$results.scrollTop(i)}}),c.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),c.on("results:message",function(a){e.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=e.$results.scrollTop(),c=e.$results.get(0).scrollHeight-b+a.deltaY,d=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=e.$results.height();d?(e.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(e.$results.scrollTop(e.$results.get(0).scrollHeight-e.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(c){var d=a(this),f=b.GetData(this,"data");if("true"===d.attr("aria-selected"))return void(e.options.get("multiple")?e.trigger("unselect",{originalEvent:c,data:f}):e.trigger("close",{}));e.trigger("select",{originalEvent:c,data:f})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(c){var d=b.GetData(this,"data");e.getHighlightedResults().removeClass("select2-results__option--highlighted"),e.trigger("results:focus",{data:d,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var c=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=b.GetData(this.$element[0],"old-tabindex")?this._tabindex=b.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),c.attr("title",this.$element.attr("title")),c.attr("tabindex",this._tabindex),this.$selection=c,c},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(c){a(document.body).on("mousedown.select2."+c.id,function(c){var d=a(c.target),e=d.closest(".select2");a(".select2.select2-container--open").each(function(){a(this),this!=e[0]&&b.GetData(this,"element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()})},e.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.attr("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,e){var f=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){f.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!f.options.get("disabled")){var d=a(this),e=d.parent(),g=c.GetData(e[0],"data");f.trigger("unselect",{originalEvent:b,data:g})}})},d.prototype.clear=function(){var a=this.$selection.find(".select2-selection__rendered");a.empty(),a.removeAttr("title")},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.attr("title",e.title||e.text),c.StoreData(f[0],"data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(a,b,c){function d(){}return d.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},d.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var d=this.$selection.find(".select2-selection__clear");if(0!==d.length){b.stopPropagation();var e=c.GetData(d[0],"data"),f=this.$element.val();this.$element.val(this.placeholder.id);var g={data:e};if(this.trigger("clear",g),g.prevented)return void this.$element.val(f);for(var h=0;h<e.length;h++)if(g={data:e[h]},this.trigger("unselect",g),g.prevented)return void this.$element.val(f);this.$element.trigger("change"),this.trigger("toggle",{})}}},d.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},d.prototype.update=function(b,d){if(b.call(this,d),!(this.$selection.find(".select2-selection__placeholder").length>0||0===d.length)){var e=a('<span class="select2-selection__clear">&times;</span>');c.StoreData(e[0],"data",d),this.$selection.find(".select2-selection__rendered").prepend(e)}},d}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,d,e){var f=this;a.call(this,d,e),d.on("open",function(){f.$search.trigger("focus")}),d.on("close",function(){f.$search.val(""),f.$search.removeAttr("aria-activedescendant"),f.$search.trigger("focus")}),d.on("enable",function(){f.$search.prop("disabled",!1),f._transferTabIndex()}),d.on("disable",function(){f.$search.prop("disabled",!0)}),d.on("focus",function(a){f.$search.trigger("focus")}),d.on("results:focus",function(a){f.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){f.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){f._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),f.trigger("keypress",a),f._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===f.$search.val()){var d=f.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var e=b.GetData(d[0],"data");f.searchRemoveChoice(e),a.preventDefault()}}});var g=document.documentMode,h=g&&g<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(h)return void f.$selection.off("input.search input.searchcheck");f.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(h&&"input"===a.type)return void f.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&f.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],g=["opening","closing","selecting","unselecting","clearing"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){b.RemoveData(this)})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var d;a.children?(d=document.createElement("optgroup"),d.label=a.text):(d=document.createElement("option"),void 0!==d.textContent?d.textContent=a.text:d.innerText=a.text),void 0!==a.id&&(d.value=a.id),a.disabled&&(d.disabled=!0),a.selected&&(d.selected=!0),a.title&&(d.title=a.title);var e=c(d),f=this._normalizeItem(a);return f.element=d,b.StoreData(d,"data",f),e},d.prototype.item=function(a){var d={};if(null!=(d=b.GetData(a[0],"data")))return d;if(a.is("option"))d={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){d={text:a.prop("label"),children:[],title:a.prop("title")};for(var e=a.children("option"),f=[],g=0;g<e.length;g++){var h=c(e[g]),i=this.item(h);f.push(i)}d.children=f}return d=this._normalizeItem(d),d.element=a[0],b.StoreData(a[0],"data",d),d},d.prototype._normalizeItem=function(a){a!==Object(a)&&(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){"status"in d&&(0===d.status||"0"===d.status)||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val(""),e.$search.blur()}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){b.StoreData(this,"select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(c){var d=b.GetData(this,"select2-scroll-position");a(this).scrollTop(d.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",["../utils"],function(a){function b(){}return b.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},b.prototype._handleSelectOnClose=function(b,c){if(c&&null!=c.originalSelect2Event){var d=c.originalSelect2Event;if("select"===d._type||"unselect"===d._type)return}var e=this.getHighlightedResults();if(!(e.length<1)){var f=a.GetData(e[0],"data");null!=f.element&&f.element.selected||null==f.element&&f.selected||this.trigger("select",{data:f})}},b}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(!0,this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),d.GetData(a[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),d.StoreData(a[0],"data",d.GetData(a[0],"select2Tags")),d.StoreData(a[0],"tags",!0)),d.GetData(a[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",d.GetData(a[0],"ajaxUrl")),d.StoreData(a[0],"ajax-Url",d.GetData(a[0],"ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,d.GetData(a[0])):d.GetData(a[0]);var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,d){null!=c.GetData(a[0],"select2")&&c.GetData(a[0],"select2").destroy(),this.$element=a,this.id=this._generateId(a),d=d||{},this.options=new b(d,a),e.__super__.constructor.call(this);var f=a.attr("tabindex")||0;c.StoreData(a[0],"old-tabindex",f),a.attr("tabindex","-1");var g=this.options.get("dataAdapter");this.dataAdapter=new g(a,this.options);var h=this.render();this._placeContainer(h);var i=this.options.get("selectionAdapter");this.selection=new i(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,h);var j=this.options.get("dropdownAdapter");this.dropdown=new j(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,h);var k=this.options.get("resultsAdapter");this.results=new k(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){l.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),c.StoreData(a[0],"select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",c.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),c.RemoveData(this.$element[0]),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),c.StoreData(b[0],"element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(a,b,c,d,e){if(null==a.fn.select2){var f=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,g=Array.prototype.slice.call(arguments,1);return this.each(function(){var a=e.GetData(this,"select2");null==a&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=a[b].apply(a,g)}),a.inArray(b,f)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});;
!function (t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.swal = e() : t.swal = e() }(this, function () { return function (t) { function e(o) { if (n[o]) return n[o].exports; var r = n[o] = { i: o, l: !1, exports: {} }; return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports } var n = {}; return e.m = t, e.c = n, e.d = function (t, n, o) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o }) }, e.n = function (t) { var n = t && t.__esModule ? function () { return t.default } : function () { return t }; return e.d(n, "a", n), n }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 8) }([function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = "swal-button"; e.CLASS_NAMES = { MODAL: "swal-modal", OVERLAY: "swal-overlay", SHOW_MODAL: "swal-overlay--show-modal", MODAL_TITLE: "swal-title", MODAL_TEXT: "swal-text", ICON: "swal-icon", ICON_CUSTOM: "swal-icon--custom", CONTENT: "swal-content", FOOTER: "swal-footer", BUTTON_CONTAINER: "swal-button-container", BUTTON: o, CONFIRM_BUTTON: o + "--confirm", CANCEL_BUTTON: o + "--cancel", DANGER_BUTTON: o + "--danger", BUTTON_LOADING: o + "--loading", BUTTON_LOADER: o + "__loader" }, e.default = e.CLASS_NAMES }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.getNode = function (t) { var e = "." + t; return document.querySelector(e) }, e.stringToNode = function (t) { var e = document.createElement("div"); return e.innerHTML = t.trim(), e.firstChild }, e.insertAfter = function (t, e) { var n = e.nextSibling; e.parentNode.insertBefore(t, n) }, e.removeNode = function (t) { t.parentElement.removeChild(t) }, e.throwErr = function (t) { throw t = t.replace(/ +(?= )/g, ""), "SweetAlert: " + (t = t.trim()) }, e.isPlainObject = function (t) { if ("[object Object]" !== Object.prototype.toString.call(t)) return !1; var e = Object.getPrototypeOf(t); return null === e || e === Object.prototype }, e.ordinalSuffixOf = function (t) { var e = t % 10, n = t % 100; return 1 === e && 11 !== n ? t + "st" : 2 === e && 12 !== n ? t + "nd" : 3 === e && 13 !== n ? t + "rd" : t + "th" } }, function (t, e, n) { "use strict"; function o(t) { for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]) } Object.defineProperty(e, "__esModule", { value: !0 }), o(n(25)); var r = n(26); e.overlayMarkup = r.default, o(n(27)), o(n(28)), o(n(29)); var i = n(0), a = i.default.MODAL_TITLE, s = i.default.MODAL_TEXT, c = i.default.ICON, l = i.default.FOOTER; e.iconMarkup = '\n  <div class="' + c + '"></div>', e.titleMarkup = '\n  <div class="' + a + '"></div>\n', e.textMarkup = '\n  <div class="' + s + '"></div>', e.footerMarkup = '\n  <div class="' + l + '"></div>\n' }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1); e.CONFIRM_KEY = "confirm", e.CANCEL_KEY = "cancel"; var r = { visible: !0, text: null, value: null, className: "", closeModal: !0 }, i = Object.assign({}, r, { visible: !1, text: "Cancel", value: null }), a = Object.assign({}, r, { text: "OK", value: !0 }); e.defaultButtonList = { cancel: i, confirm: a }; var s = function (t) { switch (t) { case e.CONFIRM_KEY: return a; case e.CANCEL_KEY: return i; default: var n = t.charAt(0).toUpperCase() + t.slice(1); return Object.assign({}, r, { text: n, value: t }) } }, c = function (t, e) { var n = s(t); return !0 === e ? Object.assign({}, n, { visible: !0 }) : "string" == typeof e ? Object.assign({}, n, { visible: !0, text: e }) : o.isPlainObject(e) ? Object.assign({ visible: !0 }, n, e) : Object.assign({}, n, { visible: !1 }) }, l = function (t) { for (var e = {}, n = 0, o = Object.keys(t); n < o.length; n++) { var r = o[n], a = t[r], s = c(r, a); e[r] = s } return e.cancel || (e.cancel = i), e }, u = function (t) { var n = {}; switch (t.length) { case 1: n[e.CANCEL_KEY] = Object.assign({}, i, { visible: !1 }); break; case 2: n[e.CANCEL_KEY] = c(e.CANCEL_KEY, t[0]), n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t[1]); break; default: o.throwErr("Invalid number of 'buttons' in array (" + t.length + ").\n      If you want more than 2 buttons, you need to use an object!") }return n }; e.getButtonListOpts = function (t) { var n = e.defaultButtonList; return "string" == typeof t ? n[e.CONFIRM_KEY] = c(e.CONFIRM_KEY, t) : Array.isArray(t) ? n = u(t) : o.isPlainObject(t) ? n = l(t) : !0 === t ? n = u([!0, !0]) : !1 === t ? n = u([!1, !1]) : void 0 === t && (n = e.defaultButtonList), n } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1), r = n(2), i = n(0), a = i.default.MODAL, s = i.default.OVERLAY, c = n(30), l = n(31), u = n(32), f = n(33); e.injectElIntoModal = function (t) { var e = o.getNode(a), n = o.stringToNode(t); return e.appendChild(n), n }; var d = function (t) { t.className = a, t.textContent = "" }, p = function (t, e) { d(t); var n = e.className; n && t.classList.add(n) }; e.initModalContent = function (t) { var e = o.getNode(a); p(e, t), c.default(t.icon), l.initTitle(t.title), l.initText(t.text), f.default(t.content), u.default(t.buttons, t.dangerMode) }; var m = function () { var t = o.getNode(s), e = o.stringToNode(r.modalMarkup); t.appendChild(e) }; e.default = m }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(3), r = { isOpen: !1, promise: null, actions: {}, timer: null }, i = Object.assign({}, r); e.resetState = function () { i = Object.assign({}, r) }, e.setActionValue = function (t) { if ("string" == typeof t) return a(o.CONFIRM_KEY, t); for (var e in t) a(e, t[e]) }; var a = function (t, e) { i.actions[t] || (i.actions[t] = {}), Object.assign(i.actions[t], { value: e }) }; e.setActionOptionsFor = function (t, e) { var n = (void 0 === e ? {} : e).closeModal, o = void 0 === n || n; Object.assign(i.actions[t], { closeModal: o }) }, e.default = i }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1), r = n(3), i = n(0), a = i.default.OVERLAY, s = i.default.SHOW_MODAL, c = i.default.BUTTON, l = i.default.BUTTON_LOADING, u = n(5); e.openModal = function () { o.getNode(a).classList.add(s), u.default.isOpen = !0 }; var f = function () { o.getNode(a).classList.remove(s), u.default.isOpen = !1 }; e.onAction = function (t) { void 0 === t && (t = r.CANCEL_KEY); var e = u.default.actions[t], n = e.value; if (!1 === e.closeModal) { var i = c + "--" + t; o.getNode(i).classList.add(l) } else f(); u.default.promise.resolve(n) }, e.getState = function () { var t = Object.assign({}, u.default); return delete t.promise, delete t.timer, t }, e.stopLoading = function () { for (var t = document.querySelectorAll("." + c), e = 0; e < t.length; e++) { t[e].classList.remove(l) } } }, function (t, e) { var n; n = function () { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (n = window) } t.exports = n }, function (t, e, n) { (function (e) { t.exports = e.sweetAlert = n(9) }).call(e, n(7)) }, function (t, e, n) { (function (e) { t.exports = e.swal = n(10) }).call(e, n(7)) }, function (t, e, n) { "undefined" != typeof window && n(11), n(16); var o = n(23).default; t.exports = o }, function (t, e, n) { var o = n(12); "string" == typeof o && (o = [[t.i, o, ""]]); var r = { insertAt: "top" }; r.transform = void 0; n(14)(o, r); o.locals && (t.exports = o.locals) }, function (t, e, n) { e = t.exports = n(13)(void 0), e.push([t.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]) }, function (t, e) { function n(t, e) { var n = t[1] || "", r = t[3]; if (!r) return n; if (e && "function" == typeof btoa) { var i = o(r); return [n].concat(r.sources.map(function (t) { return "/*# sourceURL=" + r.sourceRoot + t + " */" })).concat([i]).join("\n") } return [n].join("\n") } function o(t) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */" } t.exports = function (t) { var e = []; return e.toString = function () { return this.map(function (e) { var o = n(e, t); return e[2] ? "@media " + e[2] + "{" + o + "}" : o }).join("") }, e.i = function (t, n) { "string" == typeof t && (t = [[null, t, ""]]); for (var o = {}, r = 0; r < this.length; r++) { var i = this[r][0]; "number" == typeof i && (o[i] = !0) } for (r = 0; r < t.length; r++) { var a = t[r]; "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a)) } }, e } }, function (t, e, n) { function o(t, e) { for (var n = 0; n < t.length; n++) { var o = t[n], r = m[o.id]; if (r) { r.refs++; for (var i = 0; i < r.parts.length; i++)r.parts[i](o.parts[i]); for (; i < o.parts.length; i++)r.parts.push(u(o.parts[i], e)) } else { for (var a = [], i = 0; i < o.parts.length; i++)a.push(u(o.parts[i], e)); m[o.id] = { id: o.id, refs: 1, parts: a } } } } function r(t, e) { for (var n = [], o = {}, r = 0; r < t.length; r++) { var i = t[r], a = e.base ? i[0] + e.base : i[0], s = i[1], c = i[2], l = i[3], u = { css: s, media: c, sourceMap: l }; o[a] ? o[a].parts.push(u) : n.push(o[a] = { id: a, parts: [u] }) } return n } function i(t, e) { var n = v(t.insertInto); if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."); var o = w[w.length - 1]; if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), w.push(e); else { if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'."); n.appendChild(e) } } function a(t) { if (null === t.parentNode) return !1; t.parentNode.removeChild(t); var e = w.indexOf(t); e >= 0 && w.splice(e, 1) } function s(t) { var e = document.createElement("style"); return t.attrs.type = "text/css", l(e, t.attrs), i(t, e), e } function c(t) { var e = document.createElement("link"); return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", l(e, t.attrs), i(t, e), e } function l(t, e) { Object.keys(e).forEach(function (n) { t.setAttribute(n, e[n]) }) } function u(t, e) { var n, o, r, i; if (e.transform && t.css) { if (!(i = e.transform(t.css))) return function () { }; t.css = i } if (e.singleton) { var l = h++; n = g || (g = s(e)), o = f.bind(null, n, l, !1), r = f.bind(null, n, l, !0) } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = c(e), o = p.bind(null, n, e), r = function () { a(n), n.href && URL.revokeObjectURL(n.href) }) : (n = s(e), o = d.bind(null, n), r = function () { a(n) }); return o(t), function (e) { if (e) { if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return; o(t = e) } else r() } } function f(t, e, n, o) { var r = n ? "" : o.css; if (t.styleSheet) t.styleSheet.cssText = x(e, r); else { var i = document.createTextNode(r), a = t.childNodes; a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i) } } function d(t, e) { var n = e.css, o = e.media; if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n; else { for (; t.firstChild;)t.removeChild(t.firstChild); t.appendChild(document.createTextNode(n)) } } function p(t, e, n) { var o = n.css, r = n.sourceMap, i = void 0 === e.convertToAbsoluteUrls && r; (e.convertToAbsoluteUrls || i) && (o = y(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"); var a = new Blob([o], { type: "text/css" }), s = t.href; t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s) } var m = {}, b = function (t) { var e; return function () { return void 0 === e && (e = t.apply(this, arguments)), e } }(function () { return window && document && document.all && !window.atob }), v = function (t) { var e = {}; return function (n) { return void 0 === e[n] && (e[n] = t.call(this, n)), e[n] } }(function (t) { return document.querySelector(t) }), g = null, h = 0, w = [], y = n(15); t.exports = function (t, e) { if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment"); e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = b()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom"); var n = r(t, e); return o(n, e), function (t) { for (var i = [], a = 0; a < n.length; a++) { var s = n[a], c = m[s.id]; c.refs--, i.push(c) } if (t) { o(r(t, e), e) } for (var a = 0; a < i.length; a++) { var c = i[a]; if (0 === c.refs) { for (var l = 0; l < c.parts.length; l++)c.parts[l](); delete m[c.id] } } } }; var x = function () { var t = []; return function (e, n) { return t[e] = n, t.filter(Boolean).join("\n") } }() }, function (t, e) { t.exports = function (t) { var e = "undefined" != typeof window && window.location; if (!e) throw new Error("fixUrls requires window.location"); if (!t || "string" != typeof t) return t; var n = e.protocol + "//" + e.host, o = n + e.pathname.replace(/\/[^\/]*$/, "/"); return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) { var r = e.trim().replace(/^"(.*)"$/, function (t, e) { return e }).replace(/^'(.*)'$/, function (t, e) { return e }); if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r)) return t; var i; return i = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : o + r.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")" }) } }, function (t, e, n) { var o = n(17); "undefined" == typeof window || window.Promise || (window.Promise = o), n(21), String.prototype.includes || (String.prototype.includes = function (t, e) { "use strict"; return "number" != typeof e && (e = 0), !(e + t.length > this.length) && -1 !== this.indexOf(t, e) }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function (t, e) { if (null == this) throw new TypeError('"this" is null or not defined'); var n = Object(this), o = n.length >>> 0; if (0 === o) return !1; for (var r = 0 | e, i = Math.max(r >= 0 ? r : o - Math.abs(r), 0); i < o;) { if (function (t, e) { return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e) }(n[i], t)) return !0; i++ } return !1 } }), "undefined" != typeof window && function (t) { t.forEach(function (t) { t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function () { this.parentNode.removeChild(this) } }) }) }([Element.prototype, CharacterData.prototype, DocumentType.prototype]) }, function (t, e, n) { (function (e) { !function (n) { function o() { } function r(t, e) { return function () { t.apply(e, arguments) } } function i(t) { if ("object" != typeof this) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof t) throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(t, this) } function a(t, e) { for (; 3 === t._state;)t = t._value; if (0 === t._state) return void t._deferreds.push(e); t._handled = !0, i._immediateFn(function () { var n = 1 === t._state ? e.onFulfilled : e.onRejected; if (null === n) return void (1 === t._state ? s : c)(e.promise, t._value); var o; try { o = n(t._value) } catch (t) { return void c(e.promise, t) } s(e.promise, o) }) } function s(t, e) { try { if (e === t) throw new TypeError("A promise cannot be resolved with itself."); if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if (e instanceof i) return t._state = 3, t._value = e, void l(t); if ("function" == typeof n) return void f(r(n, e), t) } t._state = 1, t._value = e, l(t) } catch (e) { c(t, e) } } function c(t, e) { t._state = 2, t._value = e, l(t) } function l(t) { 2 === t._state && 0 === t._deferreds.length && i._immediateFn(function () { t._handled || i._unhandledRejectionFn(t._value) }); for (var e = 0, n = t._deferreds.length; e < n; e++)a(t, t._deferreds[e]); t._deferreds = null } function u(t, e, n) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n } function f(t, e) { var n = !1; try { t(function (t) { n || (n = !0, s(e, t)) }, function (t) { n || (n = !0, c(e, t)) }) } catch (t) { if (n) return; n = !0, c(e, t) } } var d = setTimeout; i.prototype.catch = function (t) { return this.then(null, t) }, i.prototype.then = function (t, e) { var n = new this.constructor(o); return a(this, new u(t, e, n)), n }, i.all = function (t) { var e = Array.prototype.slice.call(t); return new i(function (t, n) { function o(i, a) { try { if (a && ("object" == typeof a || "function" == typeof a)) { var s = a.then; if ("function" == typeof s) return void s.call(a, function (t) { o(i, t) }, n) } e[i] = a, 0 == --r && t(e) } catch (t) { n(t) } } if (0 === e.length) return t([]); for (var r = e.length, i = 0; i < e.length; i++)o(i, e[i]) }) }, i.resolve = function (t) { return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) { e(t) }) }, i.reject = function (t) { return new i(function (e, n) { n(t) }) }, i.race = function (t) { return new i(function (e, n) { for (var o = 0, r = t.length; o < r; o++)t[o].then(e, n) }) }, i._immediateFn = "function" == typeof e && function (t) { e(t) } || function (t) { d(t, 0) }, i._unhandledRejectionFn = function (t) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t) }, i._setImmediateFn = function (t) { i._immediateFn = t }, i._setUnhandledRejectionFn = function (t) { i._unhandledRejectionFn = t }, void 0 !== t && t.exports ? t.exports = i : n.Promise || (n.Promise = i) }(this) }).call(e, n(18).setImmediate) }, function (t, e, n) { function o(t, e) { this._id = t, this._clearFn = e } var r = Function.prototype.apply; e.setTimeout = function () { return new o(r.call(setTimeout, window, arguments), clearTimeout) }, e.setInterval = function () { return new o(r.call(setInterval, window, arguments), clearInterval) }, e.clearTimeout = e.clearInterval = function (t) { t && t.close() }, o.prototype.unref = o.prototype.ref = function () { }, o.prototype.close = function () { this._clearFn.call(window, this._id) }, e.enroll = function (t, e) { clearTimeout(t._idleTimeoutId), t._idleTimeout = e }, e.unenroll = function (t) { clearTimeout(t._idleTimeoutId), t._idleTimeout = -1 }, e._unrefActive = e.active = function (t) { clearTimeout(t._idleTimeoutId); var e = t._idleTimeout; e >= 0 && (t._idleTimeoutId = setTimeout(function () { t._onTimeout && t._onTimeout() }, e)) }, n(19), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate }, function (t, e, n) { (function (t, e) { !function (t, n) { "use strict"; function o(t) { "function" != typeof t && (t = new Function("" + t)); for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++)e[n] = arguments[n + 1]; var o = { callback: t, args: e }; return l[c] = o, s(c), c++ } function r(t) { delete l[t] } function i(t) { var e = t.callback, o = t.args; switch (o.length) { case 0: e(); break; case 1: e(o[0]); break; case 2: e(o[0], o[1]); break; case 3: e(o[0], o[1], o[2]); break; default: e.apply(n, o) } } function a(t) { if (u) setTimeout(a, 0, t); else { var e = l[t]; if (e) { u = !0; try { i(e) } finally { r(t), u = !1 } } } } if (!t.setImmediate) { var s, c = 1, l = {}, u = !1, f = t.document, d = Object.getPrototypeOf && Object.getPrototypeOf(t); d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () { s = function (t) { e.nextTick(function () { a(t) }) } }() : function () { if (t.postMessage && !t.importScripts) { var e = !0, n = t.onmessage; return t.onmessage = function () { e = !1 }, t.postMessage("", "*"), t.onmessage = n, e } }() ? function () { var e = "setImmediate$" + Math.random() + "$", n = function (n) { n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && a(+n.data.slice(e.length)) }; t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), s = function (n) { t.postMessage(e + n, "*") } }() : t.MessageChannel ? function () { var t = new MessageChannel; t.port1.onmessage = function (t) { a(t.data) }, s = function (e) { t.port2.postMessage(e) } }() : f && "onreadystatechange" in f.createElement("script") ? function () { var t = f.documentElement; s = function (e) { var n = f.createElement("script"); n.onreadystatechange = function () { a(e), n.onreadystatechange = null, t.removeChild(n), n = null }, t.appendChild(n) } }() : function () { s = function (t) { setTimeout(a, 0, t) } }(), d.setImmediate = o, d.clearImmediate = r } }("undefined" == typeof self ? void 0 === t ? this : t : self) }).call(e, n(7), n(20)) }, function (t, e) { function n() { throw new Error("setTimeout has not been defined") } function o() { throw new Error("clearTimeout has not been defined") } function r(t) { if (u === setTimeout) return setTimeout(t, 0); if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0); try { return u(t, 0) } catch (e) { try { return u.call(null, t, 0) } catch (e) { return u.call(this, t, 0) } } } function i(t) { if (f === clearTimeout) return clearTimeout(t); if ((f === o || !f) && clearTimeout) return f = clearTimeout, clearTimeout(t); try { return f(t) } catch (e) { try { return f.call(null, t) } catch (e) { return f.call(this, t) } } } function a() { b && p && (b = !1, p.length ? m = p.concat(m) : v = -1, m.length && s()) } function s() { if (!b) { var t = r(a); b = !0; for (var e = m.length; e;) { for (p = m, m = []; ++v < e;)p && p[v].run(); v = -1, e = m.length } p = null, b = !1, i(t) } } function c(t, e) { this.fun = t, this.array = e } function l() { } var u, f, d = t.exports = {}; !function () { try { u = "function" == typeof setTimeout ? setTimeout : n } catch (t) { u = n } try { f = "function" == typeof clearTimeout ? clearTimeout : o } catch (t) { f = o } }(); var p, m = [], b = !1, v = -1; d.nextTick = function (t) { var e = new Array(arguments.length - 1); if (arguments.length > 1) for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n]; m.push(new c(t, e)), 1 !== m.length || b || r(s) }, c.prototype.run = function () { this.fun.apply(null, this.array) }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = l, d.addListener = l, d.once = l, d.off = l, d.removeListener = l, d.removeAllListeners = l, d.emit = l, d.prependListener = l, d.prependOnceListener = l, d.listeners = function (t) { return [] }, d.binding = function (t) { throw new Error("process.binding is not supported") }, d.cwd = function () { return "/" }, d.chdir = function (t) { throw new Error("process.chdir is not supported") }, d.umask = function () { return 0 } }, function (t, e, n) { "use strict"; n(22).polyfill() }, function (t, e, n) { "use strict"; function o(t, e) { if (void 0 === t || null === t) throw new TypeError("Cannot convert first argument to object"); for (var n = Object(t), o = 1; o < arguments.length; o++) { var r = arguments[o]; if (void 0 !== r && null !== r) for (var i = Object.keys(Object(r)), a = 0, s = i.length; a < s; a++) { var c = i[a], l = Object.getOwnPropertyDescriptor(r, c); void 0 !== l && l.enumerable && (n[c] = r[c]) } } return n } function r() { Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: o }) } t.exports = { assign: o, polyfill: r } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(24), r = n(6), i = n(5), a = n(36), s = function () { for (var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e]; if ("undefined" != typeof window) { var n = a.getOpts.apply(void 0, t); return new Promise(function (t, e) { i.default.promise = { resolve: t, reject: e }, o.default(n), setTimeout(function () { r.openModal() }) }) } }; s.close = r.onAction, s.getState = r.getState, s.setActionValue = i.setActionValue, s.stopLoading = r.stopLoading, s.setDefaults = a.setDefaults, e.default = s }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1), r = n(0), i = r.default.MODAL, a = n(4), s = n(34), c = n(35), l = n(1); e.init = function (t) { o.getNode(i) || (document.body || l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s.default(), a.default()), a.initModalContent(t), c.default(t) }, e.default = e.init }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(0), r = o.default.MODAL; e.modalMarkup = '\n  <div class="' + r + '" role="dialog" aria-modal="true"></div>', e.default = e.modalMarkup }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(0), r = o.default.OVERLAY, i = '<div \n    class="' + r + '"\n    tabIndex="-1">\n  </div>'; e.default = i }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(0), r = o.default.ICON; e.errorIconMarkup = function () { var t = r + "--error", e = t + "__line"; return '\n    <div class="' + t + '__x-mark">\n      <span class="' + e + " " + e + '--left"></span>\n      <span class="' + e + " " + e + '--right"></span>\n    </div>\n  ' }, e.warningIconMarkup = function () { var t = r + "--warning"; return '\n    <span class="' + t + '__body">\n      <span class="' + t + '__dot"></span>\n    </span>\n  ' }, e.successIconMarkup = function () { var t = r + "--success"; return '\n    <span class="' + t + "__line " + t + '__line--long"></span>\n    <span class="' + t + "__line " + t + '__line--tip"></span>\n\n    <div class="' + t + '__ring"></div>\n    <div class="' + t + '__hide-corners"></div>\n  ' } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(0), r = o.default.CONTENT; e.contentMarkup = '\n  <div class="' + r + '">\n\n  </div>\n' }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(0), r = o.default.BUTTON_CONTAINER, i = o.default.BUTTON, a = o.default.BUTTON_LOADER; e.buttonMarkup = '\n  <div class="' + r + '">\n\n    <button\n      class="' + i + '"\n    ></button>\n\n    <div class="' + a + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n' }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(4), r = n(2), i = n(0), a = i.default.ICON, s = i.default.ICON_CUSTOM, c = ["error", "warning", "success", "info"], l = { error: r.errorIconMarkup(), warning: r.warningIconMarkup(), success: r.successIconMarkup() }, u = function (t, e) { var n = a + "--" + t; e.classList.add(n); var o = l[t]; o && (e.innerHTML = o) }, f = function (t, e) { e.classList.add(s); var n = document.createElement("img"); n.src = t, e.appendChild(n) }, d = function (t) { if (t) { var e = o.injectElIntoModal(r.iconMarkup); c.includes(t) ? u(t, e) : f(t, e) } }; e.default = d }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(2), r = n(4), i = function (t) { navigator.userAgent.includes("AppleWebKit") && (t.style.display = "none", t.offsetHeight, t.style.display = "") }; e.initTitle = function (t) { if (t) { var e = r.injectElIntoModal(o.titleMarkup); e.textContent = t, i(e) } }, e.initText = function (t) { if (t) { var e = document.createDocumentFragment(); t.split("\n").forEach(function (t, n, o) { e.appendChild(document.createTextNode(t)), n < o.length - 1 && e.appendChild(document.createElement("br")) }); var n = r.injectElIntoModal(o.textMarkup); n.appendChild(e), i(n) } } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1), r = n(4), i = n(0), a = i.default.BUTTON, s = i.default.DANGER_BUTTON, c = n(3), l = n(2), u = n(6), f = n(5), d = function (t, e, n) { var r = e.text, i = e.value, d = e.className, p = e.closeModal, m = o.stringToNode(l.buttonMarkup), b = m.querySelector("." + a), v = a + "--" + t; if (b.classList.add(v), d) { (Array.isArray(d) ? d : d.split(" ")).filter(function (t) { return t.length > 0 }).forEach(function (t) { b.classList.add(t) }) } n && t === c.CONFIRM_KEY && b.classList.add(s), b.textContent = r; var g = {}; return g[t] = i, f.setActionValue(g), f.setActionOptionsFor(t, { closeModal: p }), b.addEventListener("click", function () { return u.onAction(t) }), m }, p = function (t, e) { var n = r.injectElIntoModal(l.footerMarkup); for (var o in t) { var i = t[o], a = d(o, i, e); i.visible && n.appendChild(a) } 0 === n.children.length && n.remove() }; e.default = p }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(3), r = n(4), i = n(2), a = n(5), s = n(6), c = n(0), l = c.default.CONTENT, u = function (t) { t.addEventListener("input", function (t) { var e = t.target, n = e.value; a.setActionValue(n) }), t.addEventListener("keyup", function (t) { if ("Enter" === t.key) return s.onAction(o.CONFIRM_KEY) }), setTimeout(function () { t.focus(), a.setActionValue("") }, 0) }, f = function (t, e, n) { var o = document.createElement(e), r = l + "__" + e; o.classList.add(r); for (var i in n) { var a = n[i]; o[i] = a } "input" === e && u(o), t.appendChild(o) }, d = function (t) { if (t) { var e = r.injectElIntoModal(i.contentMarkup), n = t.element, o = t.attributes; "string" == typeof n ? f(e, n, o) : e.appendChild(n) } }; e.default = d }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1), r = n(2), i = function () { var t = o.stringToNode(r.overlayMarkup); document.body.appendChild(t) }; e.default = i }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(5), r = n(6), i = n(1), a = n(3), s = n(0), c = s.default.MODAL, l = s.default.BUTTON, u = s.default.OVERLAY, f = function (t) { t.preventDefault(), v() }, d = function (t) { t.preventDefault(), g() }, p = function (t) { if (o.default.isOpen) switch (t.key) { case "Escape": return r.onAction(a.CANCEL_KEY) } }, m = function (t) { if (o.default.isOpen) switch (t.key) { case "Tab": return f(t) } }, b = function (t) { if (o.default.isOpen) return "Tab" === t.key && t.shiftKey ? d(t) : void 0 }, v = function () { var t = i.getNode(l); t && (t.tabIndex = 0, t.focus()) }, g = function () { var t = i.getNode(c), e = t.querySelectorAll("." + l), n = e.length - 1, o = e[n]; o && o.focus() }, h = function (t) { t[t.length - 1].addEventListener("keydown", m) }, w = function (t) { t[0].addEventListener("keydown", b) }, y = function () { var t = i.getNode(c), e = t.querySelectorAll("." + l); e.length && (h(e), w(e)) }, x = function (t) { if (i.getNode(u) === t.target) return r.onAction(a.CANCEL_KEY) }, _ = function (t) { var e = i.getNode(u); e.removeEventListener("click", x), t && e.addEventListener("click", x) }, k = function (t) { o.default.timer && clearTimeout(o.default.timer), t && (o.default.timer = window.setTimeout(function () { return r.onAction(a.CANCEL_KEY) }, t)) }, O = function (t) { t.closeOnEsc ? document.addEventListener("keyup", p) : document.removeEventListener("keyup", p), t.dangerMode ? v() : g(), y(), _(t.closeOnClickOutside), k(t.timer) }; e.default = O }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1), r = n(3), i = n(37), a = n(38), s = { title: null, text: null, icon: null, buttons: r.defaultButtonList, content: null, className: null, closeOnClickOutside: !0, closeOnEsc: !0, dangerMode: !1, timer: null }, c = Object.assign({}, s); e.setDefaults = function (t) { c = Object.assign({}, s, t) }; var l = function (t) { var e = t && t.button, n = t && t.buttons; return void 0 !== e && void 0 !== n && o.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e ? { confirm: e } : n }, u = function (t) { return o.ordinalSuffixOf(t + 1) }, f = function (t, e) { o.throwErr(u(e) + " argument ('" + t + "') is invalid") }, d = function (t, e) { var n = t + 1, r = e[n]; o.isPlainObject(r) || void 0 === r || o.throwErr("Expected " + u(n) + " argument ('" + r + "') to be a plain object") }, p = function (t, e) { var n = t + 1, r = e[n]; void 0 !== r && o.throwErr("Unexpected " + u(n) + " argument (" + r + ")") }, m = function (t, e, n, r) { var i = typeof e, a = "string" === i, s = e instanceof Element; if (a) { if (0 === n) return { text: e }; if (1 === n) return { text: e, title: r[0] }; if (2 === n) return d(n, r), { icon: e }; f(e, n) } else { if (s && 0 === n) return d(n, r), { content: e }; if (o.isPlainObject(e)) return p(n, r), e; f(e, n) } }; e.getOpts = function () { for (var t = [], e = 0; e < arguments.length; e++)t[e] = arguments[e]; var n = {}; t.forEach(function (e, o) { var r = m(0, e, o, t); Object.assign(n, r) }); var o = l(n); n.buttons = r.getButtonListOpts(o), delete n.button, n.content = i.getContentOpts(n.content); var u = Object.assign({}, s, c, n); return Object.keys(u).forEach(function (t) { a.DEPRECATED_OPTS[t] && a.logDeprecation(t) }), u } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }); var o = n(1), r = { element: "input", attributes: { placeholder: "" } }; e.getContentOpts = function (t) { var e = {}; return o.isPlainObject(t) ? Object.assign(e, t) : t instanceof Element ? { element: t } : "input" === t ? r : null } }, function (t, e, n) { "use strict"; Object.defineProperty(e, "__esModule", { value: !0 }), e.logDeprecation = function (t) { var n = e.DEPRECATED_OPTS[t], o = n.onlyRename, r = n.replacement, i = n.subOption, a = n.link, s = o ? "renamed" : "deprecated", c = 'SweetAlert warning: "' + t + '" option has been ' + s + "."; if (r) { c += " Please use" + (i ? ' "' + i + '" in ' : " ") + '"' + r + '" instead.' } var l = "https://sweetalert.js.org"; c += a ? " More details: " + l + a : " More details: " + l + "/guides/#upgrading-from-1x", console.warn(c) }, e.DEPRECATED_OPTS = { type: { replacement: "icon", link: "/docs/#icon" }, imageUrl: { replacement: "icon", link: "/docs/#icon" }, customClass: { replacement: "className", onlyRename: !0, link: "/docs/#classname" }, imageSize: {}, showCancelButton: { replacement: "buttons", link: "/docs/#buttons" }, showConfirmButton: { replacement: "button", link: "/docs/#button" }, confirmButtonText: { replacement: "button", link: "/docs/#button" }, confirmButtonColor: {}, cancelButtonText: { replacement: "buttons", link: "/docs/#buttons" }, closeOnConfirm: { replacement: "button", subOption: "closeModal", link: "/docs/#button" }, closeOnCancel: { replacement: "buttons", subOption: "closeModal", link: "/docs/#buttons" }, showLoaderOnConfirm: { replacement: "buttons" }, animation: {}, inputType: { replacement: "content", link: "/docs/#content" }, inputValue: { replacement: "content", link: "/docs/#content" }, inputPlaceholder: { replacement: "content", link: "/docs/#content" }, html: { replacement: "content", link: "/docs/#content" }, allowEscapeKey: { replacement: "closeOnEsc", onlyRename: !0, link: "/docs/#closeonesc" }, allowClickOutside: { replacement: "closeOnClickOutside", onlyRename: !0, link: "/docs/#closeonclickoutside" } } }]) });;
var lang = "ka"
var tobooking = false;
var ie = false;
var utmSource = "";
var utmCampaign = "";

//$(document).ready(function () {
$(window).on("load", function () {
    lang = $("html").attr("data-lang");

    if (lang == undefined || lang == "") {
        lang = "ka";
    }

    common.detectbrowser();
    common.getUtmSource();
    common.getUtmCampaign();


    if (CN === "home") {
        inspection.init();
    }
    if (CN === "cabinet") {
        cabinet.init();
    }
    if (CN === "contact") {
        contact.init();
    }
    if (CN === "faq") {
        faq.init();
    }
    if (CN === "news") {
        news.init();
    }
    if (CN === "news-inner") {
        news_inner.init();
    }
    if (CN === "servicecenters") {
        servicecenters.init();
    }
    if (CN === "booking") {
        booking.init();
    }

    $("body").on("click", ".logoff-btn", common.logoff);
    $("body").on("click", ".activebooking", function () {
        tobooking = true;
    });

    $("body").on('submit', 'form:not(.no-ajax)', function (e) {
        e.preventDefault();
    });

    $("body").on("focus", "input", function (event) {
        var parentform = $(this).closest("form");
        $(parentform).off().on('keyup', parentform, function (e) {
            if (e.which == 13) {
                {
                    parentform.find("button").click();
                }
            }
        })
    })


    common.initselect2();

    $("body").on("select2:open", function (e) {
        common.openselect2(e);
    });

    $("body").on("select2:close", function (e) {
        common.closeselect2(e);
    });

    $("body").on("click", ".menu.burger .burger-btn", function () {
        $(this).closest(".menu.burger").toggleClass("active");
        $("body").toggleClass("burger");
        $(".language.burger").fadeToggle();
    })

    $("body").on("click", ".language.burger", function () {
        $(this).toggleClass("active");
    })

    $("body").on("click", ".personal-info-down-arrow", function () {
        $(this).toggleClass("active");
        var scrollable_content = $(this).closest(".personal-info").find(".person-info-scroll");
        var scrollable_name = $(this).closest(".personal-info").find(".mobile-name-hidden");
        scrollable_content.slideToggle();
        scrollable_name.slideToggle();
    });

    $("body").on("click", ".hide-first-form", function () {
        $(".mobile-form-content").hide();
        $(".right-bar").show();
        $(".fix-on-mobile").removeClass("fix-on-mobile");
    });

    $(document).on("click", function (e) {
        var container = $(".language.burger");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass("active")
        }

        var alertcontainer = $(".swal-modal");
        if (!alertcontainer.is(e.target) && alertcontainer.has(e.target).length === 0) {
            if ($(".swal-overlay").length > 0) {
                //swal.close();
                //$(".swal-overlay").remove();
            }
        }

        var search_content = $(".search-content");
        if (!search_content.is(e.target) && search_content.has(e.target).length === 0) {
            search_content.closest(".filter-wrapper").removeClass("active")
            $(".title-content").find(".title").fadeIn();
        }

        var mobile_categoryes = $(".mobile-categoryes");
        if (!mobile_categoryes.is(e.target) && mobile_categoryes.has(e.target).length === 0) {
            mobile_categoryes.removeClass("active")
        }

    });

    $(document).on({
        'touchmove': function (e) {
            var container = $(".language.burger");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.removeClass("active")
            }
        }
    });

    $(document).on("input", "#RegistrationNumber", function () {

        var obj = $(this);
        var v = $(this).val();
        var b = v.replace(/[^a-z0-9]*/ig, '');

        var numberMatch = /^[A-Za-z]{2}[0-9]{3}[A-Za-z]{2}$/;
        var oldNumberMatch = /^[A-Za-z]{3}[0-9]{3}$/;
        var trailerNumberMatch = /^[A-Za-z]{2}[0-9]{3}$/;

        if (v !== b || (!numberMatch.test(v) && !oldNumberMatch.test(v) && !trailerNumberMatch.test(v))) {
            $(this).val(b);
            obj.addClass("input-validation-error");
            obj.next(".field-validation-valid").addClass("field-validation-error").removeClass(".field-validation-valid");
            obj.next(".field-validation-error").html("<span id='RegistrationNumber-error'>მანქანის ნომერი არ არის ვალიდური</span>");

        } else {
            obj.removeClass("input-validation-error");
        }
    });

    window.fbAsyncInit = function () {
        FB.init({
            appId: '383131505453910',
            cookie: true,  // enable cookies to allow the server to access
            // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
        });
    };

    // Load the SDK asynchronously
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2&appId=383131505453910&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $("body").on("change", "#CarCategory", common.check_car_category);


    common.screenresize();
    common.detectwidth();

});

var common = {
    getUtmSource: function () {
        var searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('utm_source')) {
            var source = searchParams.get('utm_source');
            if (source != undefined) {
                utmSource = source;
            }
        }
    },
    getUtmCampaign: function () {
        var searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has('utm_campaign')) {
            var source = searchParams.get('utm_campaign');
            if (source != undefined) {
                utmCampaign = source;
            }
        }
    },
    detectbrowser: function () {
        edgee = navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Edge') > -1) || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Trident') > -1);
        if (edgee == true) {
            $(".cars-flag").hide();
        }

        using_ms_browser = navigator.appName == 'Microsoft Internet Explorer' || (navigator.appName == "Netscape" && navigator.appVersion.indexOf('Trident') > -1);
        if (using_ms_browser == true) {
            $(".cars-flag").hide();
            ie = true;
            $("html").attr("data-browser", "ie")
        }

    },
    logoff: function () {
        common.enableloader();
        common.senddata("", "/Account/LogOffajax", common.logoff_callback, "get");
    },
    logoff_callback: function (response) {
        if (response.returnhome != undefined && response.returnhome) {
            //location.reload()
            window.location.href = window.location.origin;
        }
    },
    initscroll: function () {
        $(".scrollable-box").niceScroll({
            cursorcolor: "#e6b03d",
            cursorwidth: "5px",
            cursorborderradius: 0,
            cursorborder: 'none'
        });
    },
    disablescroll: function () {
        $(".scrollable-box").getNiceScroll().remove();
    },
    enableloader: function () {
        $(".loader-container").fadeIn();
    },
    disableloader: function () {
        $(".loader-container").fadeOut();
    },
    senddata: function (data, url, callback, type) {
        $.ajax({
            type: (type === null || type === undefined) ? "post" : type,
            url: url,
            processData: false,
            data: data,
            contentType: false,
            dataType: "json",
            beforeSend: function (request) {
                request.setRequestHeader("Accept-Language", lang);
            },
            success: function (resposne) {
                if (callback !== null && callback !== undefined) {
                    callback(resposne)
                }
            },
            error: function (request, status, error) {
                common.disableloader();
                swal({
                    title: "დაფიქსირდა შეცდომა",
                    icon: "error",
                    buttons: false,
                }).then(function (willDelete) {
                    setTimeout(function () {
                        $(".swal-overlay").removeClass("inspection-alert defoult-error-popup");
                    }, 300);
                });
                $(".swal-overlay").addClass("inspection-alert defoult-error-popup full-width");
                console.log(request)
            }
        });
    },

    formsubmit: function (form, callbackfunction) {
        common.enableloader();

        var url = form.attr("data-url");
        var type = form.attr("data-type");
        var formData = form.serializeArray();
        var formDataObject = new FormData();
        $.each(formData, function (index, value) {
            var data_name = formData[index].name;
            var data_value = formData[index].value;
            if (data_value !== "") {
                formDataObject.append(data_name, data_value);
            }
        });
        common.senddata(formDataObject, url, callbackfunction, type);
    },

    alertmessage: function (response, fullwidthalert) {
        if (fullwidthalert == undefined) {
            fullwidthalert = false;
        }
        if (response.errors !== undefined && response.errors.length !== 0) {
            $(".privacy.validate-input").removeClass("error");
            response.errors.forEach(function (element) {
                if (element.Key == "Privacy") {
                    $(".privacy.validate-input").addClass("error");
                } else {
                    $("#" + element.Key).removeClass("valid").addClass("input-validation-error");
                    var parent = $("#" + element.Key).closest(".validate-input");
                    var errortext = "";
                    if (element.Value != undefined && element.Value != "")
                        errortext = '<span id="' + element.Key + '-error" class="">' + element.Value + '</span>';
                    parent.find(".field-validation-valid").addClass("field-validation-error").removeClass("field-validation-valid").html(errortext);
                }
            });

        } else
            if (response.title !== undefined && response.title !== "") {
                var timer = 3000;
                if (response.autoclose !== undefined && !response.autoclose) {
                    timer = null;
                }
                swal({
                    title: response.title,
                    icon: response.result ? "success" : "error",
                    buttons: false,
                    timer: timer,
                }).then(function (willDelete) {
                    if (response.cabinet != undefined && response.cabinet) {
                        var lang = $("html").attr("data-lang");
                        if (lang === undefined || lang === "") {
                            lang = "ka";
                        }

                        window.location.href = window.location.origin + "/" + lang + "/cabinet"
                    } else if (response.returnhome != undefined && response.returnhome) {
                        location.reload();
                    }

                    setTimeout(function () {
                        $(".swal-overlay").removeClass("inspection-alert");
                        if (fullwidthalert) {
                            $(".swal-overlay").removeClass("full-widtd");
                        }
                    }, 300);
                });

                $(".swal-overlay").addClass("inspection-alert");
                if (fullwidthalert) {
                    $(".swal-overlay").addClass("full-width");
                }
            }
            else {
                if (response.cabinet != undefined && response.cabinet) {
                    var lang = $("html").attr("data-lang");
                    if (lang === undefined || lang === "") {
                        lang = "ka";
                    }
                    window.location.href = window.location.origin + "/" + lang + "/cabinet"
                }
            }
        common.disableloader();

    },


    displayuser: function () {
        common.senddata("", "/account/GetLoginPartial", inspection.callback.add_user_form, "get");
    },
    stringtohtml: function (html) {
        var t = document.createElement('template');
        t.innerHTML = html;
        return t.content.cloneNode(true);
    },

    screenresize: function () {
        $(window).resize(function () {
            common.detectwidth();
            if (CN === "contact") {
                contact.resizemap();
            }
            inspection.isfirstpage();
        });
    },
    detectwidth: function () {
        var width = $(window).width();
        if (width > 992) {
            common.initscroll();
            news.showsubscribebtn();
        } else {
            common.disablescroll();
        }
    },
    replaceurl: function (url) {
        var newurl = '/' + lang + "/" + url;
        window.history.pushState("", "", newurl);

    },
    displaycustompage: function (page) {
        if (page == "bookingresultfail") {
            common.senddata("", "/Booking/GetBookingResult", common.displaybookingresult)
            return;
        }

        if (page == "bookingresultsuccess") {
            var data = new FormData();
            data.append("success", true);
            data.append("UBId", UBId);

            common.senddata(data, "/Booking/GetBookingResult", common.displaybookingresult)
            return;
        }
        var url = "/" + lang + "/Account/";
        switch (page) {
            case "login":
                url = url + "GetLogin";
                this.senddata("", url, inspection.callback.get_login);
                break;
            case "register":
                url = url + "GetRegister";
                this.senddata("", url, inspection.callback.get_register);
                break;
            case "password-recovery":
                url = url + "GetForgotPassword";
                this.senddata("", url, inspection.callback.get_recovery_form);
                break;
            default:
                return;
        }
        $(".mobile-form-content").hide();
        $(".right-bar").show();
    },
    isemail: function (email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    },
    displaybookingresult: function (response) {
        var html = $("<div>");
        html.attr("class", "booking-result-alert-form");
        var close = $("<span>");
        close.attr("class", "alert-close");

        html.append(close)
        var content = $(response.html);
        html.append(content)

        swal({
            className: "inspection-result-alert",
            content: html[0],
            buttons: false,
        }).then(function (willDelete) {
            common.replaceurl("");
        });
    },

    closeselect2: function (e) {
        if (e.target.id !== "" && $("#" + e.target.id)) {
            $("#" + e.target.id).click();
            $("#select2-" + e.target.id + "-results").getNiceScroll().remove()
        }
    },
    openselect2: function (e) {
        if (e.target.id !== "" && $("#" + e.target.id)) {
            $("#select2-" + e.target.id + "-results").niceScroll({
                cursorcolor: "#e6b03d",
                cursorwidth: "5px",
                cursorborderradius: 0,
                cursorborder: 'none'
            });
        }
        if ($(".select2-dropdown--above").length > 0) {
            $('.select2-dropdown').show();
        }
        else {
            $('.select2-dropdown').hide();
            setTimeout(function () {
                $('.select2-dropdown').slideDown(100, function () {
                    $('input.select2-search__field').focus();
                });
            }, 25);
        }
        var searchplaceholder = lang == "ka" ? "ძიება" : "search";

        $('input.select2-search__field').attr('placeholder', searchplaceholder);
    },
    initselect2: function () {
        $(".select-2").each(function (value, key) {
            var placeholder = $(this).attr("data-placeholder")
            $(this).select2({
                placeholder: placeholder,
                minimumResultsForSearch: -1,
                dropdownParent: $(this).closest('.form-container')
            });
        })

        $(".select-2-search").each(function (value, key) {
            var placeholder = $(this).attr("data-placeholder")
            var notfoundtext = lang === "ka" ? "მონაცემი ვერ მოიძებნა" : "result not found";
            $(this).select2({
                placeholder: placeholder,
                dropdownParent: $('.form-container'),
                language: {
                    noResults: function (params) {
                        return notfoundtext;
                    }
                }
            });
        })
    },
    getDayOfWeek: function (date) {
        var dayOfWeek = new Date(date).getDay();
        if (lang == "en") {
            return isNaN(dayOfWeek) ? null : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
        } else {
            return isNaN(dayOfWeek) ? null : ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"][dayOfWeek];
        }
    },

    getMonthName: function (date) {
        var newdate = new Date(date);
        if (lang == "en") {
            var monthNames = ['January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'];
        }
        else {
            var monthNames = ["იანვარი", "თებერვალი", "მარტი",
                "აპრილი", "მაისი", "ივნისი",
                "ივლისი", "აგვისტო", "სექტემბერი",
                "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
        }

        return monthNames[newdate.getMonth()];
    },

    alertlottarypopup: function (response) {
        var html = $("<div>");
        html.addClass("winner-alert-container");
        var close = $("<span>");
        close.addClass("alert-close");
        var content = $(response.awardhtml);
        html.append(close)
        html.append(content)
        swal({
            className: "inspection-result-alert",
            content: html[0],
            buttons: false,
        }).then(function (willDelete) {
            $(".swal-overlay").addClass("inspection-alert");
            $(".inspection-result-alert").removeClass("winner-popup");
            var lang = $("html").attr("data-lang");
            if (lang === undefined || lang === "") {
                lang = "ka";
            }

            if (response.result && response.booking != undefined && response.booking) {

                window.location.href = window.location.origin + "/" + lang + "/Booking"
            } else {
                window.location.href = window.location.origin + "/" + lang + "/cabinet"
            }
        });
        $(".inspection-result-alert").addClass("winner-popup");
        if (!response.winner) {
            $(".inspection-result-alert").addClass("lose-popup");
        }
        $(".swal-overlay").removeClass("inspection-alert");
        common.disableloader();
    },

    check_car_category: function () {

        var Type = $(this).find(":selected").attr("value");
        if (Type == "Truck") {
            $(".car-weight-conatiner").slideDown(300);
        }
        else {
            $(".car-weight-conatiner").slideUp();
            var defval = $("#CarWeight").find("option")[0].value;
            $("#CarWeight").val(defval).trigger('change');
        }
        $('.scrollable-box').addClass('hideScrollbar');

        $(".scrollable-box").getNiceScroll().remove();
        setTimeout(function () {
            if ($(window).width() > 992) {
                $(".scrollable-box").niceScroll({
                    cursorcolor: "#e6b03d",
                    cursorwidth: "5px",
                    cursorborderradius: 0,
                    cursorborder: 'none',
                });
            }


            setTimeout(function () {
                $('.scrollable-box').removeClass('hideScrollbar');
            }, 10)
        }, 300)
    },
}

var inspection = {

    init: function () {
        this.variables();
        this.cacheDom();
        this.bindEvents();
        this.render();
        $(".loader-container").fadeOut();
        if (fakepage != undefined && fakepage !== "") {
            common.displaycustompage(fakepage);
        }
    },
    variables: function () {
    },
    cacheDom: function () {
        this.$calculate_price_Container = $(".calculate-price");
        this.$autorization_form = $(".autorization");
        this.$submit_car_info_btn = $(".submit_car_info");
        this.$car_category_dropdown = $("#CarCategory");
        this.$weigth_container = $(".car-weight-conatiner");
        this.$weigth_select = $("#CarWeight");
    },
    bindEvents: function () {
        $("body").on("click", ".fb-login-btn", this.fb_login);
        //$("body").on("click", ".logoff-btn", this.fb_logoff);
        //$("body").on("change", "#CarCategory", this.check_car_category);
        $("body").on("click", ".submit_car_info", this.submit_car_info);

        $("body").on("click", ".submit_reminder_info", this.submit_reminder_info);
        $("body").on("click", ".submit-fb-secend-step", this.submit_fb_secend_step_info);
        $("body").on("click", ".submit_sms_code", this.submit_sms_code_info);
        $("body").on("click", ".resend_sms_code", this.resend_sms_code_info);
        $("body").on("click", ".submit_email-register", this.submit_email_register_info);
        $("body").on("click", ".submit_email-auth", this.submit_email_login_info);
        $("body").on("click", ".get_login_form", this.get_login_form);
        $("body").on("click", ".get_register_form", this.get_register_form);
        $("body").on("click", ".alert-close", this.alert_close);
        $("body").on("click", ".get-pass-recovery-form", this.get_password_recovery_form);
        $("body").on("click", ".psswd-recovery-btn", this.submit_password_recovery_info);
        $("body").on("click", ".psswd-reset-btn", this.submit_password_reset_info);
        $("body").on("click", ".resend-recovery-sms-code", this.resend_recovery_sms_code_info);
        $("body").on("change", "#Privacy", this.RemovePrivacyError);
    },
    render: function () {
        inspection.isfirstpage();
    },

    //detect if is first page
    isfirstpage: function () {
        if ($(window).width() < 992 && $("html").data("page") == "home" && $(".mobile-form-content:visible").length) {
            $("body").addClass("fix-on-mobile");
        } else {
            $("body").removeClass("fix-on-mobile");
        }
    },

    //functions
    //fb 
    //login
    fb_login: function () {
        FB.login(function (response) {
            if (response.status === 'connected') {
                var token = $("#Token").val()
                var Reminder = $('.Reminder').prop('checked');
                var data = new FormData();
                if (token !== undefined)
                    data.append("Token", token)

                if (Reminder !== undefined && Reminder)
                    data.append("Reminder", Reminder)

                data.append("accessToken", response.authResponse.accessToken)
                common.senddata(data, "/Account/FacebookAuth", inspection.callback.get_user);
            } else {
                // The person is not logged into this app or we are unable to tell. 
            }
        }, { scope: 'public_profile,email' });
    },

    submit_car_info: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.car_info)
    },

    submit_reminder_info: function () {
        swal.close();
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.reminder_result);
    },
    submit_fb_secend_step_info: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.fb_secend_step)
    },
    submit_sms_code_info: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        if (utmSource !== undefined)
            form.append('<input type="hidden" name="UtmSource" value="' + utmSource + '"/>');

        if (utmCampaign !== undefined)
            form.append('<input type="hidden" name="UtmCampaign" value="' + utmCampaign + '"/>');

        common.formsubmit(form, inspection.callback.submit_sms_code);
    },
    resend_sms_code_info: function () {
        var form = $("#resend-code-form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.resend_sms_code)
    },

    get_login_form: function () {
        var form = $(this).closest("form");
        var token = $("#Token").val()
        var Reminder = $('.Reminder').prop('checked');
        if (token !== undefined)
            form.append('<input type="hidden" name="Token"  id="Token" value="' + token + '" />');

        if (Reminder !== undefined && Reminder)
            form.append('<input type="hidden" name="Reminder"  id="Reminder" value="true" checked/>');

        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.get_login)
    },
    get_register_form: function () {
        var form = $(this).closest("form");
        var token = $("#Token").val()
        var Reminder = $('.Reminder').prop('checked');

        if (token !== undefined)
            form.append('<input type="hidden" name="Token"  id="Token" value="' + token + '" />');

        if (Reminder !== undefined && Reminder)
            form.append('<input type="hidden" name="Reminder"  id="Reminder" value="true" checked/>');

        if (form.length > 0 && !form.valid()) {
            return;
        }

        common.formsubmit(form, inspection.callback.get_register)
    },
    //registration by email 
    submit_email_register_info: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        var privacy = $("#Privacy");
        if (!privacy.is(':checked')) {
            $(".privacy.validate-input").addClass("error");
            return;
        }
        common.formsubmit(form, inspection.callback.email_register)
    },
    RemovePrivacyError: function () {
        var privacy = $("#Privacy");

        if (privacy.is(':checked')) {
            $(".privacy.validate-input").removeClass("error");
            return;
        }
    },

    submit_email_login_info: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }

        common.formsubmit(form, inspection.callback.email_login)
    },

    get_password_recovery_form: function () {
        var form = $("#pass-recovery-form");

        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.get_recovery_form)
    },

    submit_password_recovery_info: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.password_recovery)
    },

    submit_password_reset_info: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.password_reset)
    },

    resend_recovery_sms_code_info: function () {
        var form = $("#resend-recovery-sms-code-form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, inspection.callback.resend_sms_code)
    },

    alert_close: function () {
        swal.close()
    },
    //call back
    callback: {
        car_info: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    var html = $("<div>");
                    html.attr("class", "inspection-result-alert-form");
                    var close = $("<span>");
                    close.attr("class", "alert-close");
                    var content = $(response.html);
                    html.append(close)
                    html.append(content)
                    var timer = 3000;
                    if (response.autoclose !== undefined && !response.autoclose) {
                        timer = null;
                    }
                    swal({
                        className: "inspection-result-alert",
                        content: html[0],
                        buttons: false,
                        timer: timer,
                    }).then(function (willDelete) {
                        common.replaceurl("");
                    });
                    common.replaceurl("inspection-date");
                    common.disableloader();

                }
            } else {
                if (response.miaerror != undefined && response.miaerror) {
                    var html = $("<div>");
                    html.attr("class", "stoped-service");
                    var bold = $('<b>');
                    bold.append("შეზღუდულია")
                    html.append("ტექდათვალიერების თარიღისა და ფასის გაგების სერვისი დროებით ")
                    html.append(bold)
                    swal({
                        content: html[0],
                        text: " ",
                        icon: "error",
                        buttons: false,
                        dangerMode: true,
                    })
                } else {
                    //response.errors = undefined;
                    common.alertmessage(response)
                }

            }
            common.disableloader();

        },
        inspection_result: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    var html = $("<div>");
                    html.addClass("password-recovery-alert-form");
                    var close = $("span");
                    close.addClass("alert-close");
                    var content = $(response.html);
                    html.append(close)
                    html.append(content)
                    var timer = 3000;
                    if (response.autoclose !== undefined && !response.autoclose) {
                        timer = null;

                    }
                    swal({
                        className: "password-recovery-alert",
                        content: html[0],
                        buttons: false,
                        timer: timer,
                    });
                    $(".swal-overlay").addClass("inspection-alert");
                    $("#SMSCode").focus();
                    common.disableloader();
                }
            }
            else {
                common.alertmessage(response)
            }
        },
        reminder_result: function (response) {
            if (response.html != undefined) {
                inspection.$calculate_price_Container.html(response.html);

                common.disablescroll();
                $(".scrollable-box").addClass("overflow-hidden");
                setTimeout(function () {
                    common.initscroll();
                    $(".scrollable-box").removeClass("overflow-hidden");
                }, 500)


                var width = $(window).width();
                if (width < 992) {
                    $(".content.scrollable-box").addClass("mobile-register");
                }

                if (response.register != undefined && response.register) {
                    common.replaceurl("register");
                }

                common.disableloader();
            }
            else {
                if (response.result) {
                    if (tobooking != undefined && tobooking) {
                        window.location.href = window.location.origin + "/" + lang + "/Booking"
                    } else {
                        window.location.href = window.location.origin + "/" + lang + "/cabinet"
                    }

                } else {
                    common.alertmessage(response)
                }
            }
        },
        fb_secend_step: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    //inspection.$calculate_price_Container.html(response.html);
                    //common.disableloader();

                    var html = $("<div>");
                    html.addClass("password-recovery-alert-form");
                    var close = $("<span>");
                    close.addClass("alert-close");
                    var content = $(response.html);
                    html.append(close)
                    html.append(content)
                    var timer = 3000;
                    if (response.autoclose !== undefined && !response.autoclose) {
                        timer = null;

                    }
                    swal({
                        className: "password-recovery-alert",
                        content: html[0],
                        buttons: false,
                        timer: timer,
                    });
                    $(".swal-overlay").addClass("inspection-alert");
                    $("#SMSCode").focus();
                    common.disableloader();
                }
            }
            else {
                if (response.miaerror != undefined && response.miaerror) {
                    var html = $("<div>");
                    html.attr("class", "stoped-service");
                    html.append("ვერ მოხდა დაკავშირება, სცადეთ მოგვიანებით")
                    swal({
                        content: html[0],
                        text: " ",
                        icon: "error",
                        buttons: false,
                        dangerMode: true,
                    }).then(function (willDelete) {
                        setTimeout(function () {
                            $(".swal-overlay").removeClass("inspection-alert");
                        }, 300);
                    });
                    $(".swal-overlay").addClass("inspection-alert");

                    common.disableloader();
                } else {
                    common.alertmessage(response)
                }
            }
        },
        submit_sms_code: function (response) {
            //if (response.result) {
            //    var url = "register?userid=" + response.userId
            //    common.replaceurl(url)
            //}

            if (response.startedLottery != undefined && response.startedLottery && response.winner != undefined && response.awardhtml != undefined) {
                common.alertlottarypopup(response);
            } else {
                if (response.result && response.cabinet != undefined && response.cabinet) {

                    if (tobooking != undefined && tobooking) {
                        window.location.href = window.location.origin + "/" + lang + "/Booking"; //?userid=" + response.userId
                    } else {
                        window.location.href = window.location.origin + "/" + lang + "/cabinet?userid=" + response.userId;
                    }
                } else {
                    common.alertmessage(response)
                }
            }
        },
        resend_sms_code: function (response) {
            //common.alertmessage(response);
            if (response.result) {
            } else {
            }
            common.disableloader();
        },
        email_register: function (response) {
            if (response.result) {

                if (response.html != undefined) {
                    //inspection.$calculate_price_Container.html(response.html);
                    //common.disableloader();

                    var html = $("<div>");
                    html.addClass("password-recovery-alert-form");
                    var close = $("<span>");
                    close.addClass("alert-close");
                    var content = $(response.html);
                    html.append(close)
                    html.append(content)
                    var timer = 3000;
                    if (response.autoclose !== undefined && !response.autoclose) {
                        timer = null;

                    }
                    swal({
                        className: "password-recovery-alert",
                        content: html[0],
                        buttons: false,
                        timer: timer,
                    });
                    $(".swal-overlay").addClass("inspection-alert");
                    $("#SMSCode").focus();
                    common.disableloader();
                }

                if (response.cabinet !== undefined && response.cabinet) {
                    var lang = $("html").attr("data-lang");
                    if (lang === undefined || lang === "") {
                        lang = "ka";
                    }
                    window.location.href = window.location.origin + "/" + lang + "/cabinet"
                }
            }
            else {

                if (response.miaerror != undefined && response.miaerror) {

                    var html = $("<div>");
                    html.attr("class", "stoped-service");
                    html.append("ვერ მოხდა დაკავშირება, სცადეთ მოგვიანებით")
                    swal({
                        content: html[0],
                        text: " ",
                        icon: "error",
                        buttons: false,
                        dangerMode: true,
                    }).then(function (willDelete) {
                        setTimeout(function () {
                            $(".swal-overlay").removeClass("inspection-alert");
                        }, 300);
                    });
                    $(".swal-overlay").addClass("inspection-alert");

                    common.disableloader();
                } else {

                    var html = $('<div>');
                    html.attr("class", "stoped-service");
                    html.append("ამ ნომერზე მომხმარებელი უკვე არსებობს")
                    html.append('<button style="width:70%; margin:auto; margin-top:10px;" type="button" onclick="location.href = \'https://test.greenway.ge/ka/password-recovery\'" class="submit-btn green">პაროლის აღდგენა</button>');
                    swal({
                        content: html[0],
                        text: " ",
                        icon: "error",
                        buttons: false,
                        dangerMode: true,
                    }).then(function (willDelete) {
                        setTimeout(function () {
                            $(".swal-overlay").removeClass("inspection-alert");
                        }, 300);
                    });
                    $(".swal-overlay").addClass("inspection-alert");

                    common.disableloader();
                    //common.alertmessage(response)
                }


            }
        },
        email_login: function (response) {
            if (response.result) {
                $("#PhoneNumberOrPasswordIncorrectSpan").hide();
                if (response.booking != undefined && response.booking) {
                    var lang = $("html").attr("data-lang");
                    if (lang === undefined || lang === "") {
                        lang = "ka";
                    }

                    window.location.href = window.location.origin + "/" + lang + "/Booking"
                    return;
                }

                if (response.html != undefined) {
                    //inspection.$calculate_price_Container.html(response.html);
                    //common.disableloader();

                    var html = $("<div>");
                    html.addClass("password-recovery-alert-form");
                    var close = $("<span>");
                    close.addClass("alert-close");
                    var content = $(response.html);
                    html.append(close)
                    html.append(content)
                    var timer = 3000;
                    if (response.autoclose !== undefined && !response.autoclose) {
                        timer = null;

                    }
                    swal({
                        className: "password-recovery-alert",
                        content: html[0],
                        buttons: false,
                        timer: timer,
                    });
                    $(".swal-overlay").addClass("inspection-alert");
                    $("#SMSCode").focus();
                    common.disableloader();
                }
                else
                    if (response.title != undefined) {
                        common.alertmessage(response)
                    } else
                        if (response.returnhome) {
                            location.reload()
                        }
                if (response.cabinet !== undefined && response.cabinet) {
                    var lang = $("html").attr("data-lang");
                    if (lang === undefined || lang === "") {
                        lang = "ka";
                    }
                    window.location.href = window.location.origin + "/" + lang + "/cabinet"
                }
            }
            else {
                $("#PhoneNumberOrPasswordIncorrectSpan").show();
                common.alertmessage(response)
            }
        },
        get_login: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    inspection.$calculate_price_Container.html(response.html);
                    common.detectwidth();
                    common.disableloader();
                    common.replaceurl("login");

                }
            }
        },
        get_register: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    inspection.$calculate_price_Container.html(response.html);
                    common.detectwidth();
                    common.disableloader();
                    common.replaceurl("register");
                    common.initselect2();

                    if ($(window).width() > 992) {
                        common.disablescroll();
                        $(".scrollable-box").addClass("overflow-hidden");
                        setTimeout(function () {
                            common.initscroll();
                            $(".scrollable-box").removeClass("overflow-hidden");
                        }, 500)
                    }
                }
            }
        },
        get_user: function (response) {
            if (response.result) {
                if (response.booking != undefined && response.booking) {
                    window.location.href = window.location.origin + "/" + lang + "/Booking"
                    return;
                }
                if (response.cabinet != undefined && response.cabinet) {
                    window.location.href = window.location.origin + "/" + lang + "/cabinet"
                    return;
                }
                if (response.fbsecondstep != undefined && response.fbsecondstep) {
                    common.replaceurl("facebook-register-second-step");
                }
                if (response.html != undefined) {
                    common.detectwidth();
                    inspection.$calculate_price_Container.html(response.html);
                    common.initselect2();
                }

            } else {
                common.alertmessage(response)
            }
        },
        add_user_form: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    common.detectwidth();
                    inspection.$autorization_form.html(response.html);
                    common.disableloader();

                }
            }
        },
        password_recovery: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    common.detectwidth();
                    inspection.$calculate_price_Container.html(response.html);
                    common.disableloader();
                }
            }
            else {
                common.alertmessage(response)
            }
        },
        get_recovery_form: function (response) {
            if (response.result) {
                if (response.html != undefined) {
                    common.detectwidth();
                    inspection.$calculate_price_Container.html(response.html);
                    common.disableloader();
                    common.replaceurl("password-recovery");
                }
            }
            else {
                common.alertmessage(response)
            }
        },
        password_reset: function (response) {

            common.alertmessage(response)
        },
    },
}
var cabinet = {
    init: function () {
        var profileimg = "";

        this.cackDom();
        this.bindEvents();
        if ($(window).width() < 993) {
            var obj = $(".personal-info-down-arrow");
            obj.toggleClass("active");
            var scrollable_content = obj.closest(".personal-info").find(".person-info-scroll");
            var scrollable_name = obj.closest(".personal-info").find(".mobile-name-hidden");
            scrollable_content.hide();
            scrollable_name.show();
        }

        $(document).on("click", function (e) {
            var container = $(".content-container");
            //var bg_container = $(".edit-profile-image-container");
            //var pass_bg_container = $(".edit-password-container");
            //var add_car_bg_container = $(".add-car-popup");

            var on_click_disable = $(".on-click-disable");


            if (!container.is(e.target) && container.has(e.target).length === 0 && on_click_disable.is(e.target)) {
                cabinet.closeimguploadwindow();
            }
        });
    },
    cackDom: function () {
        this.$image_contaienr = $(".crop-image-contaienr");
        this.$save_profile_img_btn = $(".save-profile-img");
        this.$edit_profile_image_container = $(".edit-profile-image-container");
        this.$edit_password_container = $(".edit-password-container");
    },
    bindEvents: function () {
        $("#profile-image-upload").on("change", this.changenewphoto);
        $(".save-profile-img").on("click", this.savecroppedimage);
        $(".edite-user-name").on("click", this.editname);
        $(".save-user-name").on("click", this.savename);
        $(".close-btn").on("click", this.closeimguploadwindow);
        $(".cancel-btn").on("click", this.closeimguploadwindow);
        $(".edit-img-btn").on("click", this.openimguploadwindow);
        $(".reset-password").on("click", this.openpasswordeditwindow);
        $(".replace-password-btn").on("click", this.submitreplacepasswordform);
        $(".replace-password-btn").on("click", this.submitreplacepasswordform);
        $(".active-reminder-btn").on("click", this.activereminder);
        $("body").on("click", ".add-car-popup-btn", this.ShowCarPopup);
        $("body").on("click", ".add-car-btn", this.AddCar);

        $("body").on("click", ".remove-car-popup-btn", this.ShowRemoveCarPopup);
        $("body").on("click", ".remove-car-btn", this.RemoveCar);

        $("body").on("click", ".edit-car-popup-btn", this.ShowEditCarPopup);
        $("body").on("click", ".edit-car-btn", this.EditCar);
    },

    //functions
    openimguploadwindow: function () {
        if (ie) {
            cabinet.$edit_profile_image_container.css("display", "flex").hide().fadeIn();
        } else {
            cabinet.$edit_profile_image_container.css("display", "grid").hide().fadeIn();
        }
    },
    closeimguploadwindow: function () {
        $(".on-click-disable").fadeOut();
        cabinet.$image_contaienr.html("");
        cabinet.$image_contaienr.hide();
        $(".upload-btn").show();
        $("#profile-image-upload").val("");
        $(".on-click-disable").find("form")[0].reset();
    },
    initcroppie: function () {
        var size = 250;
        if ($(window).width() < 651) {
            size = 200;
        }
        profileimg = $("#profile-image").croppie({
            enableExif: true,
            showZoomer: false,
            viewport: {
                width: size,
                height: size,
            },
            boundary: {
                width: size,
                height: size,
            }
        });
        cabinet.$save_profile_img_btn.css("display", "flex").hide().fadeIn();
    },
    changenewphoto: function () {
        if ($(this)[0].files && $(this)[0].files[0]) {
            var imgsrc = URL.createObjectURL($(this)[0].files[0])
            var newImg = '<img id="profile-image" src="' + imgsrc + '" />';
            cabinet.$image_contaienr.html(newImg)
            cabinet.$image_contaienr.show();
            $(".upload-btn").hide();
            cabinet.initcroppie();
        }
    },
    savecroppedimage: function () {
        profileimg.croppie('result', {
            type: 'base64',
            size: 'viewport'
        }).then(function (result) {
            var data = new FormData();
            data.append("ProfileImage", result);
            common.senddata(data, "/ka/cabinet/uploadprofileimage", cabinet.callback.saveprofile);
        });
        $(this).fadeOut();
    },
    //edit password
    openpasswordeditwindow: function () {
        if (ie) {
            cabinet.$edit_password_container.css("display", "flex").hide().fadeIn();

        } else {
            cabinet.$edit_password_container.css("display", "grid").hide().fadeIn();
        }
        $("#Password").focus();
    },
    submitreplacepasswordform: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, cabinet.callback.editpassword)
    },
    editname: function () {

    },
    savename: function () {
        var name = $("#user-name").val();
        if (name !== undefined && name !== "") {
            var data = new FormData();
            data.append("name", name);
            common.senddata(data, "/ka/cabinet/UpdateName", cabinet.callback.editusername);
        }
    },
    activereminder: function () {
        var url = $(this).attr("data-url");
        if (url != undefined && url != "") {
            common.senddata("", url, cabinet.callback.activatereminder)
        } else {
            console.log("url is undefined");
        }
    },
    //cars
    ShowCarPopup: function () {
        if (ie) {
            $(".add-car-popup").css("display", "flex").hide().fadeIn();

        } else {
            $(".add-car-popup").css("display", "grid").hide().fadeIn();
        }
    },
    AddCar: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, cabinet.callback.add_car);
    },
    ShowRemoveCarPopup: function () {
        var number = $(this).data("carnumber");
        var id = $(this).data("carid");
        $(".remove-car-popup .car-number-text").html(number);
        $(".remove-car-popup .current-car-id").val(id);

        if (ie) {
            $(".remove-car-popup").css("display", "flex").hide().fadeIn();

        } else {
            $(".remove-car-popup").css("display", "grid").hide().fadeIn();
        }
    },
    RemoveCar: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, cabinet.callback.remove_car);
    },

    ShowEditCarPopup: function () {
        var data = new FormData();
        var id = $(this).data("carid");
        data.append("id", id);
        if (id != undefined) {
            common.senddata(data, "/Cabinet/GetEditCarPartial", cabinet.callback.show_edit_popup);
        }
    },
    EditCar: function () {
        var form = $(this).closest("form");
        if (form.length > 0 && !form.valid()) {
            return;
        }
        common.formsubmit(form, cabinet.callback.edit_car);
    },
    callback: {
        saveprofile: function (response) {
            if (response.result) {
                if (response.image != undefined && response.image !== "") {
                    cabinet.closeimguploadwindow();
                    $("#profile-image-original").attr("src", response.image);
                    $(".autorization").find(".user-image").find("img").attr("src", response.image);
                    $(".no-image").removeClass("no-image");
                }
            }
        },
        editpassword: function (response) {
            if (response.result) {
                cabinet.$edit_password_container.find("form").hide();
                cabinet.$edit_password_container.find(".password-replace-result").show();
                setTimeout(function () {
                    cabinet.closeimguploadwindow();
                    cabinet.$edit_password_container.find(".password-replace-result").hide();
                    cabinet.$edit_password_container.find("form").show();
                }, 3000);
            }
            else {
                if (response.returnhome) {
                    document.location.href = "/";
                }
            }
        },
        editusername: function (response) {
            if (response.result) {
                console.log("success name")
            } else {
                console.log(response);
            }
        },
        activatereminder: function (response) {
            if (response.result) {
                $(".booking-disabled-text").removeClass("hidden");
                $(".active-reminder-text").removeClass("hidden");
                $(".active-reminder-btn").addClass("hidden");
                $(".no-active-reminder").addClass("hidden");
            } else {
                swal({
                    title: response.title,
                    icon: response.result ? "success" : "error",
                    buttons: false,
                })

                $(".swal-overlay").addClass("inspection-alert active-reminder-alert");

            }
        },
        add_car: function (response) {
            if (response.result) {
                $(".add-car-success-message").fadeIn();
                $(".add-car-popup").find("form")[0].reset();
                setTimeout(function () {
                    location.reload();
                }, 1500)
            } else {
                if (response.miaerror != undefined && response.miaerror) {
                    var html = $("<div>");
                    html.attr("class", "stoped-service");
                    var bold = $('<b>');
                    bold.append("შეზღუდულია")
                    html.append("ტექდათვალიერების თარიღისა და ფასის გაგების სერვისი დროებით ")
                    html.append(bold)
                    swal({
                        content: html[0],
                        text: " ",
                        icon: "error",
                        buttons: false,
                        dangerMode: true,
                    })
                } else {
                    common.alertmessage(response, true)
                }
            }
        },
        remove_car: function (response) {
            if (response.result) {
                $(".remove-car-success-message").fadeIn();
                $(".remove-car-popup").find("form")[0].reset();
                setTimeout(function () {
                    location.reload();
                }, 1500)
            } else {
                common.alertmessage(response, true)
            }
        },
        show_edit_popup: function (response) {
            if (response.result) {
                $(".edit-car-container").html(response.html);
                common.initselect2();
                if (ie) {
                    $(".edit-car-popup").css("display", "flex").hide().fadeIn();

                } else {
                    $(".edit-car-popup").css("display", "grid").hide().fadeIn();
                }
            } else {
                common.alertmessage(response, true)
            }
        },
        edit_car: function (response) {
            if (response.result) {
                $(".edit-car-success-message").fadeIn();
                $(".edit-car-popup").find("form")[0].reset();
                setTimeout(function () {
                    location.reload();
                }, 1500)
            } else {
                if (response.miaerror != undefined && response.miaerror) {
                    var html = $("<div>");
                    html.attr("class", "stoped-service");
                    var bold = $('<b>');
                    bold.append("შეზღუდულია")
                    html.append("ტექდათვალიერების თარიღისა და ფასის გაგების სერვისი დროებით ")
                    html.append(bold)
                    swal({
                        content: html[0],
                        text: " ",
                        icon: "error",
                        buttons: false,
                        dangerMode: true,
                    })
                } else {
                    common.alertmessage(response, true)
                }
            }
        },
    }
}

var smallMarker = false;
var defoultZoom = 15;
var markersize = 150;
var contact = {
    init: function () {
        if ($(window).width() > 992) {
            smallMarker = false;
            markersize = 150;
        } else {
            smallMarker = true;
            markersize = 80;
        }
        this.definePopupClass();
        this.displaymap();
        this.bindEvents();
    },
    bindEvents: function () {
        $("body").on("click", ".display-work-hours", this.show_hide_work_hours);
    },
    resizemap: function () {
        if ($(window).width() > 992) {
            if (smallMarker) {
                smallMarker = false;
                this.displaymap()
            }

        } else {
            if (!smallMarker) {
                smallMarker = true;
                this.displaymap()
            }
        }
    },

    displaymap: function () {
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: defoultZoom,
            center: new google.maps.LatLng(lat, lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: 'greedy',
            disableDefaultUI: true,
        });


        var image = {
            url: window.location.origin + '/Content/img/contact-map-icon.svg',
            size: new google.maps.Size(markersize, markersize),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(markersize / 2 + 10, markersize / 2 + 10),
            scaledSize: new google.maps.Size(markersize, markersize)
        };

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lng),
            map: map,
            draggable: false,
            title: 'მისამართი',
            icon: image,
        });


        if (!ie) {


            var popubObject = document.createElement('div');
            popubObject.id = "popup-content";
            popubObject.innerHTML = locationtitle;
            var popup = new Popup(
                new google.maps.LatLng(lat, lng),
                popubObject);
            popup.setMap(map);
        }


        map.addListener('zoom_changed', function () {
            if (defoultZoom > map.getZoom()) {
                if (markersize > 40) {
                    markersize = markersize - 10;

                }

            }
            else {
                if (markersize < 80) {
                    markersize = markersize + 10;
                }

            }
            if (map.getZoom() >= 15) {
                popup.setMap(map);
            } else {
                popup.setMap(null);
            }

            marker.setIcon(
                new google.maps.MarkerImage(
                    marker.getIcon().url, //marker's same icon graphic
                    new google.maps.Size(markersize, markersize),//size
                    new google.maps.Point(0, 0),//origin
                    new google.maps.Point(markersize / 2 + 10, markersize / 2 + 10), //anchor
                    new google.maps.Size(markersize, markersize) //changes the scale
                )
            );
        });
    },

    definePopupClass: function () {

        Popup = function (position, content) {
            this.position = position;
            this.anchor = document.createElement('div');
            this.anchor.classList.add('popup-container');
            this.anchor.appendChild(content);

            // Optionally stop clicks, etc., from bubbling up to the map.
            this.stopEventPropagation();
        };
        // NOTE: google.maps.OverlayView is only defined once the Maps API has
        // loaded. That is why Popup is defined inside initMap().
        Popup.prototype = Object.create(google.maps.OverlayView.prototype);

        /** Called when the popup is added to the map. */
        Popup.prototype.onAdd = function () {
            this.getPanes().floatPane.appendChild(this.anchor);
        };

        /** Called when the popup is removed from the map. */
        Popup.prototype.onRemove = function () {
            if (this.anchor.parentElement) {
                this.anchor.parentElement.removeChild(this.anchor);
            }
        };

        /** Called when the popup needs to draw itself. */
        Popup.prototype.draw = function () {
            var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
            // Hide the popup when it is far out of view.
            var display =
                Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
                    'block' :
                    'none';

            if (display === 'block') {
                this.anchor.style.left = divPosition.x + 'px';
                this.anchor.style.top = divPosition.y + 'px';
            }
            if (this.anchor.style.display !== display) {
                this.anchor.style.display = display;
            }
        };

        /** Stops clicks/drags from bubbling up to the map. */
        Popup.prototype.stopEventPropagation = function () {
            var anchor = this.anchor;
            anchor.style.cursor = 'auto';

            ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart',
                'pointerdown']
                .forEach(function (event) {
                    anchor.addEventListener(event, function (e) {
                        e.stopPropagation();
                    });
                });
        };
    },
    show_hide_work_hours: function () {
        $(".info-container").toggleClass("show-work-hours");
        common.disablescroll();
        common.initscroll();
    },
}
var faq = {
    init: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        $("body").on("click", ".question-btn", this.tooglefaq);
        $("body").on("click", ".search-btn", this.tooglefaqsearch);
        $("body").on("keyup", "#search-intput", this.search);
        $("body").on("change", ".categoryes-dd", this.filter);
        $("body").on("click", ".selected-item", this.displaymobilecategoryes);
        $("body").on("click", ".c-mobile-item", this.changemobilecategory);
    },
    tooglefaq: function () {
        var faq = $(this).closest(".faq-item")
        faq.toggleClass("active");
        faq.find(".answer-container").slideToggle("fast");

        if ($(window).width() > 992) {
            common.disablescroll();
            $(".scrollable-box").addClass("overflow-hidden");
            setTimeout(function () {
                common.initscroll();
                $(".scrollable-box").removeClass("overflow-hidden");
            }, 500)
        } else {
            common.disablescroll();
        }

    },
    tooglefaqsearch: function () {
        $(this).closest(".filter-wrapper").toggleClass("active");
        $(".title-content").find(".title").fadeOut();
        $("#search-intput").focus();
    },
    search: function () {
        var input, filter, list, items, answer_text, question_text;
        input = $("#search-intput");
        filter = input.val().toUpperCase();
        list = $(".faq-container");
        items = list.find(".faq-item");

        $.each(items, function (key, value) {
            var current = $(value);
            question_text = current.find(".question-text").text();
            answer_text = current.find(".answer-container").text();
            current.find(".answer-container").unmark();
            current.find(".question-text").unmark();
            if (question_text.toUpperCase().indexOf(filter) > -1 || answer_text.toUpperCase().indexOf(filter) > -1) {
                if (question_text.toUpperCase().indexOf(filter) > -1 && input.val().length > 0) {
                    current.find(".question-text").mark(input.val(), {
                        "className": "yelow-txt"
                    });
                }

                if (answer_text.toUpperCase().indexOf(filter) > -1 && input.val().length > 0) {
                    current.find(".answer-container").mark(input.val(), {
                        "className": "yelow-txt"
                    });
                }

                current.removeClass("hidden");
            } else {
                current.addClass("hidden");
            }
        });
    },
    filter: function () {
        var faq_container = $(".faq-container");
        var selected = $(this).find(":selected");
        var selected_value = selected.attr("value");
        var selector = ".faq-item-" + selected_value;
        if (selected_value === "") {
            faq_container.find(".faq-item").show();
        } else {
            faq_container.find(".faq-item").hide();
            faq_container.find(selector).show();
        }

    },
    displaymobilecategoryes: function () {
        $(this).closest(".mobile-categoryes").toggleClass("active");
    },
    changemobilecategory: function () {
        $(this).closest(".mobile-categoryes").toggleClass("active");
        $(".mobile-dd-list").find(".selected").removeClass("selected");
        $(this).addClass("selected");
        $(".selected-item .txt").text($(this).text());
        var faq_container = $(".faq-container");
        var selected_value = $(this).attr("data-value");
        var selector = ".faq-item-" + selected_value;
        if (selected_value === "") {
            faq_container.find(".faq-item").show();
        } else {
            faq_container.find(".faq-item").hide();
            faq_container.find(selector).show();
        }
    }
}

var news = {
    init: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        $("body").on("click", "#news-subscribe-input", this.showsubscribebtn);
        $("body").on("focusout", "#news-subscribe-input", this.hidesubscribebtn);
        $("body").on("focus", "#news-subscribe-input", this.replaceplaceholder);
        $("body").on("click", ".subscribe-btn", this.subscribenews);
        $("body").on("keyup", "#news-subscribe-input", function (e) {
            if (e.which == 13) {
                {
                    news.subscribenews()
                }
            }
        });
    },

    showsubscribebtn: function () {
        var subscribe_btn = $(this).closest(".subscribe-content").find(".subscribe-btn");
        if (!subscribe_btn.is(':visible')) {
            subscribe_btn.css("display", "flex").hide().fadeIn();
        }
    },
    hidesubscribebtn: function () {
        if ($(window).width() <= 992) {
            $(this).closest(".subscribe-content").find(".subscribe-btn").fadeOut();
        }
        if (!$(this).val()) {
            if (lang == "en") {
                $(this).attr("placeholder", "Subscribe");
            } else {
                $(this).attr("placeholder", "გამოიწერეთ ჩვენი სიახლეები");
            }

            $(".subscribe-content").removeClass("error");
        }
    },
    subscribenews: function () {
        var email = $("#news-subscribe-input").val();
        var parent = $(".subscribe-content");
        var url = parent.attr("data-url");
        if (common.isemail(email)) {
            var formdata = new FormData()
            formdata.append("Email", email);
            parent.removeClass("error");
            common.senddata(formdata, url, news.callback.subscribenews);
        } else {
            parent.addClass("error");
        }
    },
    replaceplaceholder: function () {
        if (!$(this).val()) {
            if (lang == "en") {
                $(this).attr("placeholder", "Refer your Email");
            } else {
                $(this).attr("placeholder", "მიუთითეთ ელ.ფოსტა");
            }
        }
    },
    callback: {
        subscribenews: function (response) {
            var parent = $(".subscribe-content");
            if (response.result) {
                parent.addClass("success");
            }
            else {
                parent.addClass("error");
            }

            parent.find("#news-subscribe-input").val("");
            parent.find("#news-subscribe-input").attr("placeholder", response.message)
            setTimeout(function () {
                parent.removeClass("error");
                parent.removeClass("success");

                parent.find("#news-subscribe-input").attr("placeholder", "გამოიწერეთ ჩვენი სიახლეები")
            }, 3000)
        }
    }
}

var news_inner = {
    init: function () {
        this.render();
        this.bindEvents();
    },
    bindEvents: function () {
        $("body").on("click", ".fb-share-btn", this.sharepost);
    },

    render: function () {
        $('.news-sllider').flickity({
            // options
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            autoPlay: 2000,
            fullscreen: true
        });
    },

    sharepost: function () {
        var shareurl = window.location.href;
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + escape(shareurl) + '&t=' + document.title, '',
            'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    },

}
var map = "";
//var markers = [];

var servicecenters = {
    init: function () {
        markersize = 40,
            allMarkers = [];
        infowindow = new google.maps.InfoWindow({
            content: "",
            pixelOffset: new google.maps.Size(0, 120)
        });

        this.bindEvents();
        this.displaymap();
        $(".scrollable-box").scroll(function () {
            $(".search-intput").blur();
            $("#search-intput").blur();
        });
        $(window).scroll(function () {
            $("#search-intput").blur();
        });
    },
    bindEvents: function () {
        $("body").on("click", ".search-btn", this.tooglesearch);
        $("body").on("click", ".s-center-item", this.activateCenters);

    },

    displaymap: function () {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: 'greedy',
            disableDefaultUI: true,
        });

        var image = {
            url: window.location.origin + '/Content/img/service-centers-location.svg',
            size: new google.maps.Size(markersize, markersize),
            origin: new google.maps.Point(0, 0),
            scaledSize: new google.maps.Size(markersize, markersize)
        };

        jQuery.each(locations, function (i, val) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(val.lat, val.lng),
                map: map,
                draggable: false,
                icon: image,
            });


            marker.data_index = i,
                google.maps.event.addListener(marker, 'click', (function (marker, val) {
                    return function () {
                        console.log(val)
                        var mapurl = "https://maps.google.com/?q=" + val.lat + "," + val.lng;
                        var icon_content = "<a target='_blanck' class='gotomap' href='" + mapurl + "'><svg role='img'><use xlink:href='#icon-gotomap' /></svg> <span class='popup-message'>გვიპოვე გუგლმეფზე</span></a>"
                        infowindow.setContent(val.address + icon_content);
                        infowindow.open(map, marker);

                        var item = $(".s-center-item[data-index='" + marker.data_index + "']");
                        $(".s-center-item.active").removeClass("active");
                        item.addClass("active");
                        //$('.scrollable-box').animate({
                        //    scrollTop: $(item).offset().top
                        //}, 2000);

                    }
                })(marker, val));
            allMarkers.push(marker);
        });

        google.maps.event.addListener(infowindow, 'domready', function () {
            var iwOuter = $('.gm-style-iw');
            iwOuter.parent().addClass("marker-infobox")
        });

        var input = document.getElementById('searchbox');
        var restrictOptions = {
            componentRestrictions: { country: 'ge' }
        };
        var searchBox = new google.maps.places.Autocomplete(input, restrictOptions);
        searchBox.addListener('place_changed', function () {
            var place = searchBox.getPlace();
            if (place.length == 0) {
                return;
            }
            if (!place.geometry) {
                console.log("No details available for input: '" + place.name + "'");
                return;
            }
            var bounds = new google.maps.LatLngBounds();

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
            map.fitBounds(bounds);
        })

        var searchboxmobileinput = document.getElementById('');

        var searchboxmobileinput = document.getElementById('search-intput');

        var searchBoxmobile = new google.maps.places.Autocomplete(searchboxmobileinput, restrictOptions);
        searchBoxmobile.addListener('place_changed', function () {
            var place = searchBoxmobile.getPlace();
            if (place.length == 0) {
                return;
            }
            if (!place.geometry) {
                console.log("No details available for input: '" + place.name + "'");
                return;
            }
            var bounds = new google.maps.LatLngBounds();

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
            map.fitBounds(bounds);
        });

    },

    tooglesearch: function () {
        $(this).closest(".filter-wrapper").toggleClass("active");
        $(".title-content").find(".title").fadeOut();
        $("#search-intput").focus();
    },

    activateCenters: function () {
        $(".s-center-item.active").removeClass("active");

        var index = $(this).attr("data-index");
        var lat = $(this).attr("data-lat");
        var lng = $(this).attr("data-lng");

        var mapurl = "https://maps.google.com/?q=" + lat + "," + lng;
        var icon_content = "<a target='_blanck' class='gotomap' href='" + mapurl + "'><svg role='img'><use xlink:href='#icon-gotomap' /></svg> <span class='popup-message'>გვიპოვე გუგლმეფზე</span></a>"

        infowindow.setContent($(this).find(".left-wrapper").text() + icon_content);
        infowindow.open(map, allMarkers[index]);

        map.setZoom(12);
        map.panTo(allMarkers[index].position);
        if ($(window).width() <= 992) {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
        }
        $(this).addClass("active");
    },
}

var bookingstep = 1;
var bookingRegistrationNumber = "";
var bookingOwnerPhoneNumber = "";
var bookingcategoryId;
var isOwner = false;
var AddInTheCabinet = false
var identificationNo = "";
var fullname = "";
var otpId = "";
var verified = "";

var booking = {
    init: function () {
        common.replaceurl("booking");
        markersize = 40,
            allMarkers = [];
        infowindow = new google.maps.InfoWindow({
            content: "",
            pixelOffset: new google.maps.Size(0, 120)
        });

        this.bindEvents();
        this.displaymap();
    },
    bindEvents: function () {
        $("body").on("change", "#region", this.getregion);
        $("body").on("change", "#cities", this.getcenters);
        $("body").on("click", ".go-back", this.goback);
        $("body").on("click", ".get-booking-second-step", this.getsecondstep);
        $("body").on("click", ".get-booking-third-step", this.getThirdstep);
        $("body").on("click", ".date-item", this.activedateitem);
        $("body").on("click", ".selector-day", this.switchinspectionday);
        $("body").on("click", ".selected-item .toggle-arrow", this.removeselectedcenter);
        $("body").on("click", ".submit-third-step", this.submitthirdstep);
        $("body").on("click", ".temp-reservation-btn", this.submitthirdstep_temp);

        $("body").on("change", "#centers-dd", this.opencenterinfo);
        $("body").on("click", ".get-next-slots", this.getnextslots);
        $("body").on("click", ".carousel-controls .prev-arrow", function () { $('.carousel').slick('slickPrev') });
        $("body").on("change", "#RegistrationNumber", function () {
            bookingRegistrationNumber = $("#RegistrationNumber").val();
        });
        $("body").on("change", "#IdentificationNumber", function () {
            identificationNo = $("#IdentificationNumber").val();
        });
        $("body").on("change", "#FullName", function () {
            fullname = $("#FullName").val();
        });
        $("body").on("change", "#CategoryDropDown", function () {
            category = $(this).find(":selected").attr("value");
        });
        $("body").on("change", "#isOwner", function () {
            ownership = $(this).find(":selected").attr("value");

            if (ownership == "YES") {
                isOwner = true;
                $("#bookingOwnerPhoneNumberDiv").hide();
                $("#BookingOwnerPhoneNumber").val("");
            }
            else {
                isOwner = false;
                $("#bookingOwnerPhoneNumberDiv").show();
                bookingOwnerPhoneNumber = $("#bookingOwnerPhoneNumberDiv").val();
            }
        });

        $("body").on("change", "#BookingOwnerPhoneNumber", function () {
            bookingOwnerPhoneNumber = $("#BookingOwnerPhoneNumber").val();
        });

        $("body").on("change", "#AddInTheCabinet", function () {

            AddInTheCabinet = $("#AddInTheCabinet").is(":checked");
        });
    },

    displaymap: function () {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 7,
            center: new google.maps.LatLng(42, 42),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            gestureHandling: 'greedy',
            disableDefaultUI: true,
        });

        google.maps.event.addListener(infowindow, 'domready', function () {
            var iwOuter = $('.gm-style-iw');
            iwOuter.parent().addClass("marker-infobox")

        });

        var image = {
            url: window.location.origin + '/Content/img/service-centers-location.svg',
            size: new google.maps.Size(markersize, markersize),
            origin: new google.maps.Point(0, 0),
            //anchor: new google.maps.Point(markersize / 2 + 10, markersize / 2 + 10),
            scaledSize: new google.maps.Size(markersize, markersize)
        };
    },
    getregion: function () {
        var regionId = $(this).find(":selected").attr("value");
        var url = $(this).closest(".region-box").attr("data-url");

        if (bookingRegistrationNumber == undefined || bookingRegistrationNumber == "") {
            $("#RegistrationNumber").closest(".validate-box").addClass("error");
            console.log("RegistrationNumber needs to be defined!")
            return;
        } else {
            $("#RegistrationNumber").closest(".validate-box").removeClass("error");
        }

        if (regionId == undefined || regionId == "") {
            console.log("region needs to be defined!")
            return;
        }

        var data = new FormData();
        data.append("RegionId", regionId)
        data.append("RegistrationNumber", bookingRegistrationNumber)
        data.append("Category", category)
        common.enableloader();
        common.senddata(data, url, booking.callback.displaycities);
    },
    getcenters: function () {

        if (bookingRegistrationNumber == undefined || bookingRegistrationNumber == "") {
            $("#RegistrationNumber").closest(".validate-box").addClass("error");
            return;
        } else {
            $("#RegistrationNumber").closest(".validate-box").removeClass("error");
        }

        var regionId = $(this).find(":selected").attr("value");
        var url = $(this).closest(".cities-box").attr("data-url");
        if (regionId == undefined || regionId == "") {
            return;
        }
        var data = new FormData();
        data.append("CityId", regionId)
        data.append("categoryId", bookingcategoryId)

        common.enableloader();
        common.senddata(data, url, booking.callback.displaycenters);
    },
    removeselectedcenter: function () {
        $(this).closest(".selected-item").remove();
        var defval = $("#cities").find("option")[0].value;
        $("#cities").val(defval).trigger('change');
        booking.removemarker();
    },
    goback: function () {
        common.enableloader();
        if (bookingstep == 2) {
            $("#page-content").find(".first-step").show();
            $("#page-content").find(".second-step").remove();
            $(".body-content").attr("id", "first-step");
            bookingstep = 1;
            common.replaceurl("booking");
        } else if (bookingstep == 3) {
            $("#page-content").find(".second-step").show();
            $("#page-content").find(".third-step").remove();
            $(".body-content").attr("id", "second-step");
            common.replaceurl("booking/second-step");
            bookingstep = 2;
        } else {
            window.location.href = window.location.origin + "/" + lang + "/cabinet"
        }
        common.disableloader();
    },
    getsecondstep: function () {
        if (!$(this).hasClass("active")) {
            return;
        }

        var value = $("#Privacy").is(":checked");
        if (value == true) {
            $(".get-booking-second-step").addClass("active");
        }
        else {
            $(".get-booking-second-step").removeClass("active");
        }

        if ($("#Privacy").is(":checked") == false) {
            alert("პირობებზე თანხმობა აუცილებელია");
            return;
        }

        var url = $(this).attr("data-url");
        var regionId = $("#cities").find(":selected").attr("value");
        var centerId = "";

        if ($(".center-item").length > 0) {
            centerId = $(".center-item").attr("data-id");
        } else {
            centerId = $("#centers-dd").find(":selected").attr("value");
        }


        if (regionId == undefined || regionId == "" || centerId == "" || centerId == undefined) {
            if (regionId == undefined || regionId == "") {
                $("#cities").parent().addClass("error");
            }

            return;
        }
        var phone = $("#BookingPhoneNumber").val();
        var data = new FormData();
        data.append("regionId", regionId)
        data.append("centerId", centerId)

        data.append("identificationNumber", identificationNo);
        data.append("fullname", fullname);
        data.append("otpId", otpId);
        if (phone != 'undefined') {
            data.append("phone", phone);
        }

        common.enableloader();
        $("#cities").parent().removeClass("error");
        common.senddata(data, url, booking.callback.displaysecondstep);
    },
    getThirdstep: function () {
        var url = $(this).attr("data-url");
        var centerId = "";

        var date = $('#selected-date').val();
        var phone = $('#phone').val();
        if (date == undefined || date == "") {
            var today = $(".vcal-date--active.vcal-date--today").attr("data-calendar-date")
            var newdate = new Date(today);
            date = newdate.toISOString();
        }
        if ($(".center-item").length > 0) {
            centerId = $(".center-item").attr("data-id");
        } else {
            centerId = $("#centers-dd").find(":selected").attr("value");
        }

        if (centerId == "" || centerId == undefined || date == "" || date == undefined) {
            return;
        }

        var data = new FormData();
        data.append("centersId", centerId)
        data.append("categoryId", bookingcategoryId)
        data.append("date", date);
        if (phone != 'undefined') {
            data.append("phone", phone);
        }
        common.enableloader();
        common.senddata(data, url, booking.callback.displayThirstep);
    },
    activedateitem: function () {
        $(".date-item.active").removeClass("active");
        $(this).addClass("active");
        $(".submit-third-step").addClass("active");
        $(".temp-reservation-btn").addClass("active");
    },
    switchinspectionday: function () {
        if (!$(this).hasClass("active")) {
            $(".selector-day.active").removeClass("active");
            $(this).addClass("active");
            var id = $(this).attr("data-index");
            $(".grid-items").hide();

            if (ie) {
                $(".day-" + id).show();
            } else {
                $(".day-" + id).css("display", "grid");
            }

            common.disablescroll();
            common.initscroll();

        }
    },
    submitthirdstep: async function () {
        if ($(this).hasClass("active")) {
            var url = $(this).attr("data-url");
            var activeitem = $(".date-item.active");
            if (activeitem.length) {
                var date = activeitem.attr("data-date");
                var centerId;

                if ($(".center-item").length > 0) {
                    centerId = $(".center-item").attr("data-id");
                } else {
                    centerId = $("#centers-dd").find(":selected").attr("value");
                }

                var phone = $('#phone').val();

                var data = new FormData();
                data.append("centerId", centerId);
                data.append("categoryId", bookingcategoryId)
                data.append("time", date);
                data.append("registrationNo", bookingRegistrationNumber);
                data.append("IsOwner", isOwner);
                data.append("AddInTheCabinet", AddInTheCabinet);
                data.append("AddInTheCabinet", AddInTheCabinet);
                data.append("AddInTheCabinet", AddInTheCabinet);
                data.append("BookingOwnerPhoneNumber", bookingOwnerPhoneNumber);
                data.append("otpId", otpId);

                console.log(identificationNo + " - " + fullname);

                data.append("identificationNumber", identificationNo);
                data.append("fullname", fullname);
                if (phone != 'undefined') {
                    data.append("phone", phone);
                }

                var alreadyBooked = false;

                await $.ajax({
                    async: true,
                    type: "GET",
                    url: '/Booking/AlreadyBookedCheck?RegistrationNumber=' + bookingRegistrationNumber,
                    success: function (data) { alreadyBooked = data.result; },
                    error: function (err) {
                        alert(err.responseText);
                    }

                });
                if (alreadyBooked) {
                    var html = $("<div class='payment-alert'>");

                    html.append('<strong>არჩეულ მანქანაზე ჯავშანი უკვე არსებობს, გაგრძელების შემთხვევაში გაუქმდება</strong>')

                    data.append("CancelOldBookings", true);

                    swal({
                        title: "",
                        content: html[0],
                        type: "warning",
                        buttons: ["კაბინეტში დაბრუნება", "გაგრძელება"],
                        showCancelButton: true,
                        confirmButtonColor: "#e6b03d",
                        closeOnConfirm: false,
                        closeOnCancel: false,
                        customClass: "Custom_Confirm"
                    }).then(function (isConfirm) {
                        if (isConfirm) {
                            common.enableloader();
                            common.senddata(data, url, booking.callback.reservationresult);
                        }
                        else {
                            window.location.href = window.location.origin + "/" + lang + "/cabinet";
                            setTimeout(function () {
                                $(".swal-overlay").removeClass("inspection-alert");
                            }, 300);
                        }
                        common.replaceurl("");
                    });

                    $(".swal-overlay").addClass("inspection-alert");
                }
                else {
                    common.enableloader();
                    common.senddata(data, url, booking.callback.reservationresult);

                }
            }
        } else {
            return;
        }
    },
    submitthirdstep_temp: async function () {
        if ($(this).hasClass("active")) {
            var url = $(this).attr("data-url");
            var activeitem = $(".date-item.active");
            if (activeitem.length) {
                var date = activeitem.attr("data-date");
                var centerId;
                if ($(".center-item").length > 0) {
                    centerId = $(".center-item").attr("data-id");
                } else {
                    centerId = $("#centers-dd").find(":selected").attr("value");
                }
                var phone = $('#phone').val();
                var data = new FormData();
                data.append("centerId", centerId);
                data.append("categoryId", bookingcategoryId)
                data.append("time", date);
                data.append("isDelayed", true);
                data.append("registrationNo", bookingRegistrationNumber);
                data.append("IsOwner", isOwner);
                data.append("AddInTheCabinet", AddInTheCabinet);
                data.append("BookingOwnerPhoneNumber", bookingOwnerPhoneNumber);
                data.append("otpId", otpId);

                console.log(identificationNo + " - " + fullname);

                data.append("identificationNumber", identificationNo);
                data.append("fullname", fullname);
                if (phone != 'undefined') {
                    data.append("phone", phone);
                }
                var alreadyBooked = false;


                await $.ajax({
                    async: true,
                    type: "GET",
                    url: '/Booking/AlreadyBookedCheck?RegistrationNumber=' + bookingRegistrationNumber,
                    success: function (data) { alreadyBooked = data.result; },
                    error: function (err) {
                        alert(err.responseText);
                    }

                });

                if (alreadyBooked) {
                    var html = $("<div class='payment-alert'>");

                    html.append('<strong>არჩეულ მანქანაზე ჯავშანი უკვე არსებობს, გაგრძელების შემთხვევაში გაუქმდება</strong>')

                    data.append("CancelOldBookings", true);

                    swal({
                        title: "",
                        content: html[0],
                        type: "warning",
                        buttons: ["კაბინეტში დაბრუნება", "გაგრძელება"],
                        showCancelButton: true,
                        confirmButtonColor: "#e6b03d",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    }).then(function (isConfirm) {
                        if (isConfirm) {
                            common.enableloader();
                            common.senddata(data, url, booking.callback.reservationresult);
                        }
                        else {
                            window.location.href = window.location.origin + "/" + lang + "/cabinet";
                            setTimeout(function () {
                                $(".swal-overlay").removeClass("inspection-alert");
                            }, 300);
                        }
                        common.replaceurl("");
                    });

                    $(".swal-overlay").addClass("inspection-alert");
                }
                else {
                    common.enableloader();
                    common.senddata(data, url, booking.callback.reservationresult);
                }

            }
        } else {
            return;
        }
    },
    removemarker: function () {
        for (var i = 0; i < allMarkers.length; i++) {
            allMarkers[i].setMap(null);
        }
        allMarkers = [];
    },
    openinfowindow: function (index) {
        new google.maps.event.trigger(allMarkers[index], 'click');
        map.setZoom(12);
        map.panTo(allMarkers[index].position);
    },
    opencenterinfo: function () {
        var index = $(this).prop('selectedIndex');
        booking.openinfowindow(index);
    },
    getnextslots: function () {
        if ($(this).hasClass("loading")) {
            return false;
        }
        var lastEl = $(".date-picker-slider").find("li.selector-day").last();
        if (lastEl != undefined && lastEl.hasClass("slick-active")) {

            var lastDate = lastEl.attr("data-lastdate");
            var url = $(this).attr("data-url");
            var centersId = $(this).attr("data-centersId");

            var formdata = new FormData();
            formdata.append("NextDate", lastDate);
            formdata.append("centersId", centersId);
            formdata.append("categoryId", bookingcategoryId);
            $(this).addClass("loading");
            common.senddata(formdata, url, booking.callback.displaynextslots);
        } else {
            $('.carousel').slick('slickNext');
        }
    },
    createslotssliderHtml: function (data, data_index) {
        var padDate = function (x) {
            return x < 10 ? '0' + x : x;
        }

        var myFormat = function (date) {
            return padDate(date.getMonth() + 1) + '/' + padDate(date.getDate()) + '/' + padDate(date.getFullYear()) + ' ' + padDate(date.getHours()) + ':' + padDate(date.getMinutes()) + ':' + padDate(date.getSeconds())
        }

        var parsedCurrentDate = new Date(new Date(data.start.match(/\d+/).map(Number)[0]));
        //var myDate = new Date(parsedCurrentDate);
        var myDate = myFormat(parsedCurrentDate);

        var html = '<li data-lastdate="' + myDate.toLocaleString() + '" data-index="' + data_index + '" class="carousel-cell item selector-day">' +
            common.getDayOfWeek(parsedCurrentDate) + ', ' + parsedCurrentDate.getDate() + ' ' + common.getMonthName(parsedCurrentDate) + '</li>';
        return html;
    },
    createslotsdateHtml: function (data, data_index) {
        var parentdiv = $("<div>");
        parentdiv.addClass("grid-items hidden-boxes day-" + data_index);

        var padDate = function (x) {
            return x < 10 ? '0' + x : x;
        }

        var myFormat = function (date) {
            return padDate(date.getMonth() + 1) + '/' + padDate(date.getDate()) + '/' + padDate(date.getFullYear()) + ' ' + padDate(date.getHours()) + ':' + padDate(date.getMinutes()) + ':' + padDate(date.getSeconds())
        }

        $.each(data, function (key, value) {
            var parsedCurrentDate = new Date(new Date(value.start.match(/\d+/).map(Number)[0]));
            //var myDate = new Date(parsedCurrentDate);
            var myDate = myFormat(parsedCurrentDate);

            var stringhtml = '<div data-date="' + myDate + '" class="form-control date-item">' +
                '<div class="selected-item date">' +
                '<span class="icon-text">' +
                '<svg role="img"><use xlink:href="#icon-time" /></svg>' +

                parsedCurrentDate.getHours() + ':' + padDate(parsedCurrentDate.getMinutes()) + ' ' + common.getDayOfWeek(parsedCurrentDate) + ', ' +
                parsedCurrentDate.getDate() + ' ' + common.getMonthName(parsedCurrentDate) +

                '</span>' +
                '<span class="toggle-arrow">' +
                ' <svg role="img"><use xlink:href="#icon-slots-checked" /></svg>' +
                ' </span>' +
                '</div>' +
                ' </div>';
            var html = $(stringhtml)
            parentdiv.append(html);
        });
        return parentdiv;
    },
    callback: {
        displaycities: function (response) {
            if (response.result && response.cities != undefined && response.cities != "") {
                bookingcategoryId = response.categoryId;

                if (response.cities.length > 1) {
                    if (lang == "en") {
                        var placeholder = "Choose the city";
                    }
                    else {
                        var placeholder = "აირჩიე ქალაქი";
                    }

                    if (response.RegionId == 1) {

                        if (lang == "en") {
                            placeholder = "Choose the district";
                        } else {
                            placeholder = "აირჩიე უბანი";
                        }

                    }

                    var select = $("<select>");
                    select.addClass("select-2 hidden-dd");
                    select.attr("data-placeholder", placeholder);
                    select.attr("id", "cities");

                    option = $('<option>');
                    select.append(option);

                    jQuery.each(response.cities, function (i, val) {
                        option = $('<option>');
                        option.val(val.id);
                        option.text(val.name);
                        select.append(option);
                    })

                    $(".cities-box").html(select);
                    $(".centers-address").html("");
                    var value = $("#Privacy").is(":checked");

                    if (value == true) {
                        $(".get-booking-second-step").addClass("active");
                    }
                    else {
                        $(".get-booking-second-step").removeClass("active");
                    }

                    var placeholder = $("#cities").attr("data-placeholder")
                    $("#cities").select2({
                        placeholder: placeholder,
                        minimumResultsForSearch: -1,
                        dropdownParent: $('.form-container')
                    });
                    booking.removemarker();
                }
                common.disableloader();
            } else {
                common.alertmessage(response);
            }
        },
        displaycenters: function (response) {
            if (response.result && response.centers != undefined && response.centers != "") {
                booking.removemarker()
                var image = {
                    url: window.location.origin + '/Content/img/service-centers-location.svg',
                    size: new google.maps.Size(markersize, markersize),
                    origin: new google.maps.Point(0, 0),
                    //anchor: new google.maps.Point(markersize / 2 + 10, markersize / 2 + 10),
                    scaledSize: new google.maps.Size(markersize, markersize)
                };

                jQuery.each(response.centers, function (i, val) {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(val.latitude, val.longitude),
                        map: map,
                        draggable: false,
                        icon: image,
                    });
                    marker.data_index = val.id,
                        google.maps.event.addListener(marker, 'click', (function (marker, val) {
                            return function () {
                                infowindow.setContent(val.address);
                                infowindow.open(map, marker);
                                $("#centers-dd").val(marker.data_index).select2({
                                    placeholder: placeholder,
                                    minimumResultsForSearch: -1,
                                    dropdownParent: $('.form-container')
                                });
                            }
                        })(marker, val));
                    allMarkers.push(marker);
                })
                if (response.centers.length > 1) {
                    var select = $("<select>");
                    select.addClass("select-2 hidden-dd");
                    select.attr("id", "centers-dd");
                    jQuery.each(response.centers, function (i, val) {
                        option = $('<option>');
                        option.val(val.id);
                        option.text(val.address);
                        select.append(option);
                    })
                    $(".centers-address").html(select);

                    var placeholder = $(".centers-dd").attr("data-placeholder")
                    $("#centers-dd").select2({
                        placeholder: placeholder,
                        minimumResultsForSearch: -1,
                        dropdownParent: $('.form-container')
                    });
                }
                else if (response.centers.length == 1) {
                    var singleaddress = $(".selected-item.hidden").clone();

                    singleaddress.find(".text-box").html(response.centers[0].address);
                    singleaddress.attr("data-id", response.centers[0].id);
                    singleaddress.removeClass("hidden");
                    singleaddress.addClass("center-item")
                    $(".centers-address").html(singleaddress);

                }
                booking.openinfowindow(0);

                if ($("#BookingIsVerified").val() === "false") {
                    $(".get-booking-second-step").removeClass("active");

                    $("#BookingVerificationSpan").show();
                }
                else {
                    var value = $("#Privacy").is(":checked");

                    if (value == true) {
                        $(".get-booking-second-step").addClass("active");
                    }
                    else {
                        $(".get-booking-second-step").removeClass("active");
                    }

                    $("#BookingVerificationSpan").hide();
                }

                common.disableloader();
            } else {
                common.alertmessage(response);
            }
        },
        displaysecondstep: function (response) {
            if (response.result && response.html != undefined) {
                $("#page-content").find(".first-step").hide();
                $("#page-content").append(response.html)
                $(".body-content").attr("id", "second-step");
                bookingstep = 2;
                common.replaceurl("booking/second-step");
            }
            else {
                common.alertmessage(response)
            }

            common.disableloader();
        },
        displayThirstep: function (response) {
            if (response.result && response.html != undefined) {
                $("#page-content").find(".second-step").hide();
                $("#page-content").append(response.html)
                common.initscroll();
                $(".body-content").attr("id", "third-step");
                bookingstep = 3;
                common.replaceurl("booking/third-step");

            } else {
                common.alertmessage(response)
            }

            common.disableloader();
        },
        reservationresult: function (response) {
            if (response.result) {

                if (response.isDelayed) {
                    var timer = 8000;
                    var html = $("<div class='payment-alert'>")
                    if (lang == "en") {
                        html.append("You booked the visit successfully. You can pay for the service on the spot or online.")
                    } else {
                        html.append("თქვენ წარმატებით დაჯავშნეთ ვიზიტი. თანხის გადახდას შეძლებთ მოგვიანებით ადგილზე ან საიტის საშუალებით.")
                    }
                    common.replaceurl("booking/later-booking");
                    swal({
                        title: "",
                        icon: "success",
                        buttons: false,
                        timer: timer,
                        content: html[0]
                    }).then(function (willDelete) {
                        window.location.href = window.location.origin + "/" + lang + "/cabinet"

                        setTimeout(function () {
                            $(".swal-overlay").removeClass("inspection-alert");
                        }, 300);
                        common.replaceurl("");
                    });
                    $(".swal-overlay").addClass("inspection-alert");
                }
                else if (response.url != undefined && response.url != "") {
                    var timer = 7000;
                    var html = $("<div class='payment-alert'>")

                    if (lang == "en") {
                        html.append("In order to complete the booking, you have to make a payment. Take into consideration, that you have 3 minutes to complete payment.")
                    } else {
                        html.append("დაჯავშნის პროცესის დასასრულებლად აუცილებელია მომსახურების ღირებულების გადახდა.<br/> გაითვალისწინეთ, რომ გადახდის განსახორციელებლად გაქვთ 3 წუთი.")
                    }
                    swal({
                        title: "",
                        icon: "success",
                        buttons: false,
                        timer: timer,
                        content: html[0]
                    }).then(function (willDelete) {
                        window.location.href = response.url;

                        setTimeout(function () {
                            $(".swal-overlay").removeClass("inspection-alert");
                        }, 300);
                    });
                    $(".swal-overlay").addClass("inspection-alert");

                } else {

                    response.errors = undefined;
                    common.alertmessage(response)
                }


            }
            else {
                response.errors = undefined;
                common.alertmessage(response)
            }
        },
        displaynextslots: function (response) {
            if (response.result) {
                if (response.data != undefined && response.data.length > 0) {

                    var lastEl = $(".date-picker-slider").find("li.selector-day").last();
                    if (lastEl != undefined && lastEl.hasClass("slick-active")) {
                        var data_index = lastEl.attr("data-index");
                        $.each(response.data, function (key, value) {
                            var displayIndex = 2;
                            if ($(window).width() <= 1360) {
                                displayIndex = 1
                            }

                            if ($(window).width() <= 370) {
                                displayIndex = 0
                            }

                            if (key > displayIndex) {
                                return false;
                            }

                            data_index++;
                            var currentItem = this.Slots;
                            var html = booking.createslotssliderHtml(currentItem[0], data_index);

                            $('.carousel').slick('slickAdd', html);
                            $(".get-next-slots").removeClass("loading");
                            $(".get-next-slots").removeClass("slick-disabled");
                            var datehtml = booking.createslotsdateHtml(currentItem, data_index);
                            $(".form-container.date .form-box").append(datehtml);
                            //$(datehtml).insertBefore($(".form-container .button-container"));
                        });
                        $('.carousel').slick('slickNext');
                    }
                }
            } else {
                $(".get-next-slots").addClass("slick-disabled");
                common.alertmessage(response);
            }
        },
    }
}
;
