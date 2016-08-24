//
// Copyright Kamil Pękala http://github.com/kamilkp
// Angular Virtual Scroll Repeat v1.0.0-rc12 2015/08/03
//
!function(a,b){"use strict";function c(){if("pageYOffset"in a)return{scrollTop:pageYOffset,scrollLeft:pageXOffset};var b,c,d=document,e=d.documentElement,f=d.body;return b=e.scrollLeft||f.scrollLeft||0,c=e.scrollTop||f.scrollTop||0,{scrollTop:c,scrollLeft:b}}function d(b,c){return b===a?"clientWidth"===c?a.innerWidth:a.innerHeight:b[c]}function e(b,d){return b===a?c()[d]:b[d]}function f(b,d,e){var f=b.getBoundingClientRect()[e?"left":"top"],g=d===a?0:d.getBoundingClientRect()[e?"left":"top"],h=f-g+(d===a?c():d)[e?"scrollLeft":"scrollTop"];return h}var g=document.documentElement,h=g.matches?"matches":g.matchesSelector?"matchesSelector":g.webkitMatches?"webkitMatches":g.webkitMatchesSelector?"webkitMatchesSelector":g.msMatches?"msMatches":g.msMatchesSelector?"msMatchesSelector":g.mozMatches?"mozMatches":g.mozMatchesSelector?"mozMatchesSelector":null,i=b.element.prototype.closest||function(a){for(var c=this[0].parentNode;c!==document.documentElement&&null!=c&&!c[h](a);)c=c.parentNode;return c&&c[h](a)?b.element(c):b.element()},j=b.module("vs-repeat",[]).directive("vsRepeat",["$compile","$parse",function(c,g){return{restrict:"A",scope:!0,compile:function(h,j){var k,l,m,n,o,p,q=b.isDefined(j.vsRepeatContainer)?b.element(h[0].querySelector(j.vsRepeatContainer)):h,r=q.children().eq(0),s=r[0].outerHTML,t="$vs_collection",u=!1,v={vsRepeat:"elementSize",vsOffsetBefore:"offsetBefore",vsOffsetAfter:"offsetAfter",vsScrolledToEndOffset:"scrolledToEndOffset",vsExcess:"excess"};if(r.attr("ng-repeat"))p="ng-repeat",k=r.attr("ng-repeat");else if(r.attr("data-ng-repeat"))p="data-ng-repeat",k=r.attr("data-ng-repeat");else if(r.attr("ng-repeat-start"))u=!0,p="ng-repeat-start",k=r.attr("ng-repeat-start");else{if(!r.attr("data-ng-repeat-start"))throw new Error("angular-vs-repeat: no ng-repeat directive on a child element");u=!0,p="data-ng-repeat-start",k=r.attr("data-ng-repeat-start")}if(l=/^\s*(\S+)\s+in\s+([\S\s]+?)(track\s+by\s+\S+)?$/.exec(k),m=l[1],n=l[2],o=l[3],u)for(var w=0,x=q.children().eq(0);null==x.attr("ng-repeat-end")&&null==x.attr("data-ng-repeat-end");)w++,x=q.children().eq(w),s+=x[0].outerHTML;return q.empty(),{pre:function(h,j,k){function l(){if(!F||F.length<1)h[t]=[],B=0,h.sizesCumulative=[0];else if(B=F.length,K){h.sizes=F.map(function(a){var c=h.$new(!1);b.extend(c,a),c[m]=a;var d=k.vsSize||k.vsSizeProperty?c.$eval(k.vsSize||k.vsSizeProperty):h.elementSize;return c.$destroy(),d});var a=0;h.sizesCumulative=h.sizes.map(function(b){var c=a;return a+=b,c}),h.sizesCumulative.push(a)}else q();x()}function q(){J&&h.$$postDigest(function(){if(C[0].offsetHeight||C[0].offsetWidth){for(var a=C.children(),b=0,c=!1,d=!1;b<a.length;){if(null!=a[b].attributes[p]||d){if(c||(h.elementSize=0),c=!0,a[b][O]&&(h.elementSize+=a[b][O]),!u)break;if(null!=a[b].attributes["ng-repeat-end"]||null!=a[b].attributes["data-ng-repeat-end"])break;d=!0}b++}c&&(x(),J=!1,h.$root&&!h.$root.$$phase&&h.$apply())}else var e=h.$watch(function(){(C[0].offsetHeight||C[0].offsetWidth)&&(e(),q())})})}function r(){var a="tr"===E?"":"min-",b=G?a+"width":a+"height";return b}function w(){"undefined"!=typeof k.vsAutoresize&&(J=!0,q(),h.$root&&!h.$root.$$phase&&h.$apply()),A()&&h.$apply()}function x(){Q=void 0,R=void 0,S=B,T=0,y(K?h.sizesCumulative[B]:h.elementSize*B),A(),h.$emit("vsRepeatReinitialized",h.startIndex,h.endIndex)}function y(a){h.totalSize=h.offsetBefore+a+h.offsetAfter}function z(){var a=d(L[0],N);a!==U&&(x(),h.$root&&!h.$root.$$phase&&h.$apply()),U=a}function A(){var a=e(L[0],P),b=d(L[0],N),c=C[0]===L[0]?0:f(C[0],L[0],G),i=h.startIndex,j=h.endIndex;if(K){for(i=0;h.sizesCumulative[i]<a-h.offsetBefore-c;)i++;for(i>0&&i--,i=Math.max(Math.floor(i-h.excess/2),0),j=i;h.sizesCumulative[j]<a-h.offsetBefore-c+b;)j++;j=Math.min(Math.ceil(j+h.excess/2),B)}else i=Math.max(Math.floor((a-h.offsetBefore-c)/h.elementSize)-h.excess/2,0),j=Math.min(i+Math.ceil(b/h.elementSize)+h.excess,B);S=Math.min(i,S),T=Math.max(j,T),h.startIndex=M.latch?S:i,h.endIndex=M.latch?T:j;var l=!1;if(null==Q?l=!0:null==R&&(l=!0),l||(M.hunked?Math.abs(h.startIndex-Q)>=h.excess/2||0===h.startIndex&&0!==Q?l=!0:(Math.abs(h.endIndex-R)>=h.excess/2||h.endIndex===B&&R!==B)&&(l=!0):l=h.startIndex!==Q||h.endIndex!==R),l){if(h[t]=F.slice(h.startIndex,h.endIndex),h.$emit("vsRepeatInnerCollectionUpdated",h.startIndex,h.endIndex,Q,R),k.vsScrolledToEnd){var m=F.length-(h.scrolledToEndOffset||0);(h.endIndex>=m&&m>R||F.length&&h.endIndex===F.length)&&h.$eval(k.vsScrolledToEnd)}Q=h.startIndex,R=h.endIndex;var n=K?"(sizesCumulative[$index + startIndex] + offsetBefore)":"(($index + startIndex) * elementSize + offsetBefore)",o=g(n),p=o(h,{$index:0}),q=o(h,{$index:h[t].length}),s=h.totalSize;H.css(r(),p+"px"),I.css(r(),s-q+"px")}return l}var B,C=b.isDefined(k.vsRepeatContainer)?b.element(j[0].querySelector(k.vsRepeatContainer)):j,D=b.element(s),E=D[0].tagName.toLowerCase(),F=[],G="undefined"!=typeof k.vsHorizontal,H=b.element("<"+E+' class="vs-repeat-before-content"></'+E+">"),I=b.element("<"+E+' class="vs-repeat-after-content"></'+E+">"),J=!k.vsRepeat,K=!!k.vsSize||!!k.vsSizeProperty,L=k.vsScrollParent?"window"===k.vsScrollParent?b.element(a):i.call(C,k.vsScrollParent):C,M="vsOptions"in k?h.$eval(k.vsOptions):{},N=G?"clientWidth":"clientHeight",O=G?"offsetWidth":"offsetHeight",P=G?"scrollLeft":"scrollTop";if(h.totalSize=0,!("vsSize"in k)&&"vsSizeProperty"in k&&console.warn("vs-size-property attribute is deprecated. Please use vs-size attribute which also accepts angular expressions."),0===L.length)throw"Specified scroll parent selector did not match any element";h.$scrollParent=L,K&&(h.sizesCumulative=[]),h.elementSize=+k.vsRepeat||d(L[0],N)||50,h.offsetBefore=0,h.offsetAfter=0,h.excess=2,G?(H.css("height","100%"),I.css("height","100%")):(H.css("width","100%"),I.css("width","100%")),Object.keys(v).forEach(function(a){k[a]&&k.$observe(a,function(b){h[v[a]]=+b,x()})}),h.$watchCollection(n,function(a){F=a||[],l()}),D.eq(0).attr(p,m+" in "+t+(o?" "+o:"")),D.addClass("vs-repeat-repeated-element"),C.append(H),C.append(D),c(D)(h),C.append(I),h.startIndex=0,h.endIndex=0,L.on("scroll",function(){A()&&h.$digest()}),b.element(a).on("resize",w),h.$on("$destroy",function(){b.element(a).off("resize",w)}),h.$on("vsRepeatTrigger",l),h.$on("vsRepeatResize",function(){J=!0,q()});var Q,R,S,T;h.$on("vsRenderAll",function(){M.latch&&setTimeout(function(){var a=B;T=Math.max(a,T),h.endIndex=M.latch?T:a,h[t]=F.slice(h.startIndex,h.endIndex),R=h.endIndex,h.$$postDigest(function(){H.css(r(),0),I.css(r(),0)}),h.$apply(function(){h.$emit("vsRenderAllDone")})})});var U;h.$watch(function(){"function"==typeof a.requestAnimationFrame?a.requestAnimationFrame(z):z()})}}}}}]);"undefined"!=typeof module&&module.exports&&(module.exports=j.name)}(window,window.angular);