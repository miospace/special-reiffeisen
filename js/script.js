!function e(t,i,n){function r(s,o){if(!i[s]){if(!t[s]){var c="function"==typeof require&&require;if(!o&&c)return c(s,!0);if(a)return a(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var h=i[s]={exports:{}};t[s][0].call(h.exports,function(e){var i=t[s][1][e];return r(i?i:e)},h,h.exports,e,t,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,i){var n=e("./hash"),r=e("./intro"),a=e("./question"),s=e("./result");$(".specraif__list").each(function(e,t){function i(e,t){var i=e+Math.random()*(t+1-e);return i=Math.floor(i)}var n=$(this).find(".specraif__label");$(n.eq(i(0,n.length-1))).prependTo($(this))});var o=n();o?s(o):(r.show(),a.init(),$(window).bind("hashchange",function(){n()&&(a.hideItem(),r.hide(),s(n()))}))},{"./hash":2,"./intro":3,"./question":4,"./result":5}],2:[function(e,t,i){t.exports=function(){var e=/result-[0-5]/i.test(location.hash);return!!e&&location.hash.match(/\d/i)[0]}},{}],3:[function(e,t,i){var n=$("[data-btn=start]"),r=$(".specraif__prev"),a=$(".specraif"),s="specraif--prev";t.exports={show:function(){r.show(),a.addClass(s),n.on("click",function(e){e.preventDefault(),$("."+s).removeClass(s),r.hide()})},hide:function(){$("."+s).removeClass(s),r.hide()}}},{}],4:[function(e,t,i){var n,r=$(".specraif__item"),a=$(".specraif__data"),s=$(".specraif__label"),o="specraif__label--clicked",c='[data-status="correct"]',f=$("input[type=radio]"),h=$("[data-btn=next]"),u=768,d=0,l=0;t.exports={init:function(){var e=this;this.showItem(d),s.on("click",function(e){var t=$(this);t.hasClass(o)||(t.addClass(o),t.siblings().off().find(f).prop("disabled",!0),t.find(c).length&&l++,n="[data-id="+t.find("input").attr("id")+"]",$(n).show(),h.show(),$(window).width()>u?a.eq(d).hide():$(n).insertAfter(t))}),$(h).on("click",function(t){return t.preventDefault(),h.hide(),$(n).hide(),e.hideItem(d),d++,r.eq(d).length?void e.showItem(d):(location.hash="result-"+l,l)})},showItem:function(e){r.eq(e).show(),a.eq(e).show()},hideItem:function(e){e?(r.eq(e).hide(),a.eq(e).hide()):(r.hide(),a.hide())},value:this.reslut}},{}],5:[function(e,t,i){var n=$(".specraif__result"),r=$(".specraif__bat"),a=$(".specraif__title-value"),s=$(".specraif__title-text"),o=[null,"specraif__bat-inner--1","specraif__bat-inner--2","specraif__bat-inner--3","specraif__bat-inner--4","specraif__bat-inner--5"];t.exports=function(e){n.show(),r.show(),$(a).html(e),$(".specraif__bat-inner").addClass(o[e]),$(s).html(function(){return 0===e||5==e?"правильных ответов":1==e?"правильный ответ":e>=2&&e<=4?"правильных ответа":void 0})}},{}]},{},[1]);