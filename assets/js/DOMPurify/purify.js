/*! @license DOMPurify 2.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.0/LICENSE */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).DOMPurify=t()}(this,(function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,u=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return r(e,o(t))});var y,b=_(Array.prototype.forEach),v=_(Array.prototype.pop),T=_(Array.prototype.push),N=_(String.prototype.toLowerCase),A=_(String.prototype.match),E=_(String.prototype.replace),w=_(String.prototype.indexOf),x=_(String.prototype.trim),S=_(RegExp.prototype.test),k=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(y,t)});function _(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function O(e,t,n){n=n||N,l&&l(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(c(t)||(t[r]=a),o=a)}e[o]=!0}return e}function D(e){var t,n=p(null);for(t in e)h(i,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return _(n.get);if("function"==typeof n.value)return _(n.value)}e=u(e)}return function(e){return console.warn("fallback value for",e),null}}var M=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),C=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),L=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),U=m(["#text"]),z=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),j=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),P=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=f(/<%[\w\W]*|[\w\W]*%>/gm),q=f(/\${[\w\W]*}/gm),Y=f(/^data-[\-\w.\u00B7-\uFFFF]/),$=f(/^aria-[\-\w]+$/),K=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=f(/^(?:\w+script|data):/i),X=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=f(/^html$/i),J=function(){return"undefined"==typeof window?null:window},Q=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};var ee=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J(),r=function(e){return t(e)};if(r.version="2.4.0",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,u=n.Node,s=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,y=n.trustedTypes,_=s.prototype,ee=R(_,"cloneNode"),te=R(_,"nextSibling"),ne=R(_,"childNodes"),re=R(_,"parentNode");if("function"==typeof c){var oe=i.createElement("template");oe.content&&oe.content.ownerDocument&&(i=oe.content.ownerDocument)}var ae=Q(y,a),ie=ae?ae.createHTML(""):"",le=i,ce=le.implementation,ue=le.createNodeIterator,se=le.createDocumentFragment,me=le.getElementsByTagName,fe=a.importNode,pe={};try{pe=D(i).documentMode?i.documentMode:{}}catch(e){}var de={};r.isSupported="function"==typeof re&&ce&&void 0!==ce.createHTMLDocument&&9!==pe;var he,ge,ye=G,be=W,ve=q,Te=Y,Ne=$,Ae=V,Ee=X,we=K,xe=null,Se=O({},[].concat(o(M),o(C),o(L),o(F),o(U))),ke=null,_e=O({},[].concat(o(z),o(j),o(B),o(P))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Re=null,Me=!0,Ce=!0,Le=!1,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,je=!1,Be=!1,Pe=!0,Ge=!1,We="user-content-",qe=!0,Ye=!1,$e={},Ke=null,Ve=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,Ze=O({},["audio","video","img","source","image","track"]),Je=null,Qe=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),et="http://www.w3.org/1998/Math/MathML",tt="http://www.w3.org/2000/svg",nt="http://www.w3.org/1999/xhtml",rt=nt,ot=!1,at=["application/xhtml+xml","text/html"],it="text/html",lt=null,ct=i.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},st=function(t){lt&&lt===t||(t&&"object"===e(t)||(t={}),t=D(t),he=he=-1===at.indexOf(t.PARSER_MEDIA_TYPE)?it:t.PARSER_MEDIA_TYPE,ge="application/xhtml+xml"===he?function(e){return e}:N,xe="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS,ge):Se,ke="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR,ge):_e,Je="ADD_URI_SAFE_ATTR"in t?O(D(Qe),t.ADD_URI_SAFE_ATTR,ge):Qe,Xe="ADD_DATA_URI_TAGS"in t?O(D(Ze),t.ADD_DATA_URI_TAGS,ge):Ze,Ke="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS,ge):Ve,De="FORBID_TAGS"in t?O({},t.FORBID_TAGS,ge):{},Re="FORBID_ATTR"in t?O({},t.FORBID_ATTR,ge):{},$e="USE_PROFILES"in t&&t.USE_PROFILES,Me=!1!==t.ALLOW_ARIA_ATTR,Ce=!1!==t.ALLOW_DATA_ATTR,Le=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Ie=t.SAFE_FOR_TEMPLATES||!1,Fe=t.WHOLE_DOCUMENT||!1,ze=t.RETURN_DOM||!1,je=t.RETURN_DOM_FRAGMENT||!1,Be=t.RETURN_TRUSTED_TYPE||!1,Ue=t.FORCE_BODY||!1,Pe=!1!==t.SANITIZE_DOM,Ge=t.SANITIZE_NAMED_PROPS||!1,qe=!1!==t.KEEP_CONTENT,Ye=t.IN_PLACE||!1,we=t.ALLOWED_URI_REGEXP||we,rt=t.NAMESPACE||nt,t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ut(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ie&&(Ce=!1),je&&(ze=!0),$e&&(xe=O({},o(U)),ke=[],!0===$e.html&&(O(xe,M),O(ke,z)),!0===$e.svg&&(O(xe,C),O(ke,j),O(ke,P)),!0===$e.svgFilters&&(O(xe,L),O(ke,j),O(ke,P)),!0===$e.mathMl&&(O(xe,F),O(ke,B),O(ke,P))),t.ADD_TAGS&&(xe===Se&&(xe=D(xe)),O(xe,t.ADD_TAGS,ge)),t.ADD_ATTR&&(ke===_e&&(ke=D(ke)),O(ke,t.ADD_ATTR,ge)),t.ADD_URI_SAFE_ATTR&&O(Je,t.ADD_URI_SAFE_ATTR,ge),t.FORBID_CONTENTS&&(Ke===Ve&&(Ke=D(Ke)),O(Ke,t.FORBID_CONTENTS,ge)),qe&&(xe["#text"]=!0),Fe&&O(xe,["html","head","body"]),xe.table&&(O(xe,["tbody"]),delete De.tbody),m&&m(t),lt=t)},mt=O({},["mi","mo","mn","ms","mtext"]),ft=O({},["foreignobject","desc","title","annotation-xml"]),pt=O({},["title","style","font","a","script"]),dt=O({},C);O(dt,L),O(dt,I);var ht=O({},F);O(ht,H);var gt=function(e){var t=re(e);t&&t.tagName||(t={namespaceURI:nt,tagName:"template"});var n=N(e.tagName),r=N(t.tagName);return e.namespaceURI===tt?t.namespaceURI===nt?"svg"===n:t.namespaceURI===et?"svg"===n&&("annotation-xml"===r||mt[r]):Boolean(dt[n]):e.namespaceURI===et?t.namespaceURI===nt?"math"===n:t.namespaceURI===tt?"math"===n&&ft[r]:Boolean(ht[n]):e.namespaceURI===nt&&(!(t.namespaceURI===tt&&!ft[r])&&(!(t.namespaceURI===et&&!mt[r])&&(!ht[n]&&(pt[n]||!dt[n]))))},yt=function(e){T(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ie}catch(t){e.remove()}}},bt=function(e,t){try{T(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){T(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(ze||je)try{yt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},vt=function(e){var t,n;if(Ue)e="<remove></remove>"+e;else{var r=A(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===he&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ae?ae.createHTML(e):e;if(rt===nt)try{t=(new g).parseFromString(o,he)}catch(e){}if(!t||!t.documentElement){t=ce.createDocument(rt,"template",null);try{t.documentElement.innerHTML=ot?"":o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),rt===nt?me.call(t,Fe?"html":"body")[0]:Fe?t.documentElement:a},Tt=function(e){return ue.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},Nt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},At=function(t){return"object"===e(u)?t instanceof u:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Et=function(e,t,n){de[e]&&b(de[e],(function(e){e.call(r,t,n,lt)}))},wt=function(e){var t;if(Et("beforeSanitizeElements",e,null),Nt(e))return yt(e),!0;if(S(/[\u0080-\uFFFF]/,e.nodeName))return yt(e),!0;var n=ge(e.nodeName);if(Et("uponSanitizeElement",e,{tagName:n,allowedTags:xe}),e.hasChildNodes()&&!At(e.firstElementChild)&&(!At(e.content)||!At(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return yt(e),!0;if("select"===n&&S(/<template/i,e.innerHTML))return yt(e),!0;if(!xe[n]||De[n]){if(!De[n]&&St(n)){if(Oe.tagNameCheck instanceof RegExp&&S(Oe.tagNameCheck,n))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))return!1}if(qe&&!Ke[n]){var o=re(e)||e.parentNode,a=ne(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(ee(a[i],!0),te(e))}return yt(e),!0}return e instanceof s&&!gt(e)?(yt(e),!0):"noscript"!==n&&"noembed"!==n||!S(/<\/no(script|embed)/i,e.innerHTML)?(Ie&&3===e.nodeType&&(t=e.textContent,t=E(t,ye," "),t=E(t,be," "),t=E(t,ve," "),e.textContent!==t&&(T(r.removed,{element:e.cloneNode()}),e.textContent=t)),Et("afterSanitizeElements",e,null),!1):(yt(e),!0)},xt=function(e,t,n){if(Pe&&("id"===t||"name"===t)&&(n in i||n in ct))return!1;if(Ce&&!Re[t]&&S(Te,t));else if(Me&&S(Ne,t));else if(!ke[t]||Re[t]){if(!(St(e)&&(Oe.tagNameCheck instanceof RegExp&&S(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&S(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&S(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(Je[t]);else if(S(we,E(n,Ee,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!Xe[e]){if(Le&&!S(Ae,E(n,Ee,"")));else if(n)return!1}else;return!0},St=function(e){return e.indexOf("-")>0},kt=function(t){var n,o,a,i;Et("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var u=n=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?n.value:x(n.value),a=ge(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Et("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(bt(s,t),c.keepAttr))if(S(/\/>/i,o))bt(s,t);else{Ie&&(o=E(o,ye," "),o=E(o,be," "),o=E(o,ve," "));var f=ge(t.nodeName);if(xt(f,a,o)){if(!Ge||"id"!==a&&"name"!==a||(bt(s,t),o=We+o),ae&&"object"===e(y)&&"function"==typeof y.getAttributeType)if(m);else switch(y.getAttributeType(f,a)){case"TrustedHTML":o=ae.createHTML(o);break;case"TrustedScriptURL":o=ae.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),v(r.removed)}catch(e){}}}}Et("afterSanitizeAttributes",t,null)}},_t=function e(t){var n,r=Tt(t);for(Et("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Et("uponSanitizeShadowNode",n,null),wt(n)||(n.content instanceof l&&e(n.content),kt(n));Et("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(t){var o,i,c,s,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ot=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!At(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(At(t))return n.toStaticHTML(t.outerHTML)}return t}if(He||st(f),r.removed=[],"string"==typeof t&&(Ye=!1),Ye){if(t.nodeName){var p=ge(t.nodeName);if(!xe[p]||De[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof u)1===(i=(o=vt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!ze&&!Ie&&!Fe&&-1===t.indexOf("<"))return ae&&Be?ae.createHTML(t):t;if(!(o=vt(t)))return ze?null:Be?ie:""}o&&Ue&&yt(o.firstChild);for(var d=Tt(Ye?t:o);c=d.nextNode();)3===c.nodeType&&c===s||wt(c)||(c.content instanceof l&&_t(c.content),kt(c),s=c);if(s=null,Ye)return t;if(ze){if(je)for(m=se.call(o.ownerDocument);o.firstChild;)m.appendChild(o.firstChild);else m=o;return ke.shadowroot&&(m=fe.call(a,m,!0)),m}var h=Fe?o.outerHTML:o.innerHTML;return Fe&&xe["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&S(Z,o.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+h),Ie&&(h=E(h,ye," "),h=E(h,be," "),h=E(h,ve," ")),ae&&Be?ae.createHTML(h):h},r.setConfig=function(e){st(e),He=!0},r.clearConfig=function(){lt=null,He=!1},r.isValidAttribute=function(e,t,n){lt||st({});var r=ge(e),o=ge(t);return xt(r,o,n)},r.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],T(de[e],t))},r.removeHook=function(e){if(de[e])return v(de[e])},r.removeHooks=function(e){de[e]&&(de[e]=[])},r.removeAllHooks=function(){de={}},r}();return ee}));