(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const io="149",Pi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qu=0,Lo=1,Yu=2,ro=1,ju=2,Ar=3,Zn=0,Xt=1,gn=2,qn=0,$i=1,Ro=2,Do=3,Io=4,Zu=5,qi=100,$u=101,Ku=102,Fo=103,Oo=104,Ju=200,Qu=201,eh=202,th=203,fc=204,dc=205,nh=206,ih=207,rh=208,sh=209,ah=210,oh=0,lh=1,ch=2,Ia=3,uh=4,hh=5,fh=6,dh=7,pc=0,ph=1,mh=2,On=0,gh=1,_h=2,xh=3,mc=4,vh=5,gc=300,ir=301,rr=302,Fa=303,Oa=304,Cs=306,Na=1e3,Gt=1001,za=1002,ut=1003,No=1004,Gs=1005,ht=1006,yh=1007,sr=1008,bi=1009,Mh=1010,bh=1011,_c=1012,Sh=1013,pi=1014,un=1015,Fn=1016,wh=1017,Th=1018,Ki=1020,Eh=1021,cn=1023,Ah=1024,Ch=1025,_i=1026,ar=1027,Ph=1028,Lh=1029,Rh=1030,Dh=1031,Ih=1033,Vs=33776,Hs=33777,Ws=33778,Xs=33779,zo=35840,Uo=35841,Bo=35842,ko=35843,Fh=36196,Go=37492,Vo=37496,Ho=37808,Wo=37809,Xo=37810,qo=37811,Yo=37812,jo=37813,Zo=37814,$o=37815,Ko=37816,Jo=37817,Qo=37818,el=37819,tl=37820,nl=37821,qs=36492,Oh=36283,il=36284,rl=36285,sl=36286,$n=3e3,Ge=3001,Nh=3200,zh=3201,xc=0,Uh=1,dn="srgb",Fr="srgb-linear",Ys=7680,Bh=519,al=35044,ol="300 es",Ua=1035;class Ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],js=Math.PI/180,ll=180/Math.PI;function Vr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[o&255]+mt[o>>8&255]+mt[o>>16&255]+mt[o>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function gt(o,e,t){return Math.max(e,Math.min(t,o))}function kh(o,e){return(o%e+e)%e}function Zs(o,e,t){return(1-t)*o+t*e}function cl(o){return(o&o-1)===0&&o!==0}function Ba(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function qr(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ot(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,a,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],x=i[6],S=i[1],v=i[4],M=i[7],y=i[2],T=i[5],A=i[8];return r[0]=a*d+s*S+l*y,r[3]=a*p+s*v+l*T,r[6]=a*x+s*M+l*A,r[1]=c*d+u*S+h*y,r[4]=c*p+u*v+h*T,r[7]=c*x+u*M+h*A,r[2]=f*d+m*S+g*y,r[5]=f*p+m*v+g*T,r[8]=f*x+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*s*c-n*r*u+n*s*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*a-s*c,f=s*l-u*r,m=c*r-a*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*s)+a+e,-i*c,i*l,-i*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply($s.makeScale(e,t)),this}rotate(e){return this.premultiply($s.makeRotation(-e)),this}translate(e,t){return this.premultiply($s.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new Ht;function vc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Or(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function xi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ps(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Ks={[dn]:{[Fr]:xi},[Fr]:{[dn]:ps}},bt={legacyMode:!0,get workingColorSpace(){return Fr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(Ks[e]&&Ks[e][t]!==void 0){const n=Ks[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},an={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Js(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function jr(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=kh(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Js(a,r,e+1/3),this.g=Js(a,r,e),this.b=Js(a,r,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,bt.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,bt.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,bt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=dn){const n=yc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return bt.fromWorkingColorSpace(jr(this,tt),e),gt(tt.r*255,0,255)<<16^gt(tt.g*255,0,255)<<8^gt(tt.b*255,0,255)<<0}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(jr(this,tt),t);const n=tt.r,i=tt.g,r=tt.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+a)/2;if(s===a)l=0,c=0;else{const h=a-s;switch(c=u<=.5?h/(a+s):h/(2-a-s),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(jr(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=dn){return bt.fromWorkingColorSpace(jr(this,tt),e),e!==dn?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Yr);const n=Zs(an.h,Yr.h,t),i=Zs(an.s,Yr.s,t),r=Zs(an.l,Yr.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=yc;let Ri;class Mc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Or("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Or("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class bc{constructor(e=null){this.isSource=!0,this.uuid=Vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Qs(i[a].image)):r.push(Qs(i[a]))}else r=Qs(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qs(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Mc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gh=0;class wt extends Ai{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Gt,i=Gt,r=ht,a=sr,s=cn,l=bi,c=wt.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Vr(),this.name="",this.source=new bc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=gc;wt.DEFAULT_ANISOTROPY=1;class He{constructor(e=0,t=0,n=0,i=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,M=(m+1)/2,y=(x+1)/2,T=(u+f)/4,A=(h+d)/4,_=(g+p)/4;return v>M&&v>y?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=T/n,r=A/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=T/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=A/r,i=_/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-d)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Si extends Ai{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sc extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vh extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-s;const x=l*f+c*m+u*g+h*d,S=x>=0?1:-1,v=1-x*x;if(v>Number.EPSILON){const y=Math.sqrt(v),T=Math.atan2(y,x*S);p=Math.sin(p*T)/y,s=Math.sin(s*T)/y}const M=s*S;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,h=h*p+d*M,p===1-s){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=s*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-s*m,e[t+2]=c*g+u*m+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*s+i*c-r*l,this._y=i*u+a*l+r*s-n*c,this._z=r*u+a*c+n*l-i*s,this._w=a*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,s=e.z,l=e.w,c=l*t+a*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-s*i;return this.x=c*l+f*-r+u*-s-h*-a,this.y=u*l+f*-a+h*-r-c*-s,this.z=h*l+f*-s+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*a-n*l,this.z=n*s-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new O,ul=new wi;class Hr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,a,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)ri.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ri)}else n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox),ta.applyMatrix4(e.matrixWorld),this.union(ta);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),Zr.subVectors(this.max,_r),Di.subVectors(e.a,_r),Ii.subVectors(e.b,_r),Fi.subVectors(e.c,_r),Un.subVectors(Ii,Di),Bn.subVectors(Fi,Ii),si.subVectors(Di,Fi);let t=[0,-Un.z,Un.y,0,-Bn.z,Bn.y,0,-si.z,si.y,Un.z,0,-Un.x,Bn.z,0,-Bn.x,si.z,0,-si.x,-Un.y,Un.x,0,-Bn.y,Bn.x,0,-si.y,si.x,0];return!na(t,Di,Ii,Fi,Zr)||(t=[1,0,0,0,1,0,0,0,1],!na(t,Di,Ii,Fi,Zr))?!1:($r.crossVectors(Un,Bn),t=[$r.x,$r.y,$r.z],na(t,Di,Ii,Fi,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new O,new O,new O,new O,new O,new O,new O,new O],ri=new O,ta=new Hr,Di=new O,Ii=new O,Fi=new O,Un=new O,Bn=new O,si=new O,_r=new O,Zr=new O,$r=new O,ai=new O;function na(o,e,t,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){ai.fromArray(o,r);const s=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=e.dot(ai),c=t.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Hh=new Hr,xr=new O,ia=new O;class so{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(ia)),this.expandByPoint(xr.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new O,ra=new O,Kr=new O,kn=new O,sa=new O,Jr=new O,aa=new O;class Wh{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ra.copy(e).add(t).multiplyScalar(.5),Kr.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(ra);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Kr),s=kn.dot(this.direction),l=-kn.dot(Kr),c=kn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*l-s,f=a*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Kr).multiplyScalar(f).add(ra),m}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,l=n+a;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,r){sa.subVectors(t,e),Jr.subVectors(n,e),aa.crossVectors(sa,Jr);let a=this.direction.dot(aa),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=s*this.direction.dot(Jr.crossVectors(kn,Jr));if(l<0)return null;const c=s*this.direction.dot(sa.cross(kn));if(c<0||l+c>a)return null;const u=-s*kn.dot(aa);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,a,s,l,c,u,h,f,m,g,d,p){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=i,x[1]=r,x[5]=a,x[9]=s,x[13]=l,x[2]=c,x[6]=u,x[10]=h,x[14]=f,x[3]=m,x[7]=g,x[11]=d,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,g=s*u,d=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-s*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*s,t[4]=g*s-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-s,t[2]=m*s-g,t[6]=d+f*s,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*s,t[4]=-a*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=a*u,t[9]=d-f*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,g=s*u,d=s*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=a*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xh,e,qh)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Gn.crossVectors(n,Nt),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Gn.crossVectors(n,Nt)),Gn.normalize(),Qr.crossVectors(Nt,Gn),i[0]=Gn.x,i[4]=Qr.x,i[8]=Nt.x,i[1]=Gn.y,i[5]=Qr.y,i[9]=Nt.y,i[2]=Gn.z,i[6]=Qr.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],x=n[14],S=n[3],v=n[7],M=n[11],y=n[15],T=i[0],A=i[4],_=i[8],b=i[12],L=i[1],I=i[5],k=i[9],D=i[13],R=i[2],U=i[6],j=i[10],Y=i[14],V=i[3],K=i[7],J=i[11],ue=i[15];return r[0]=a*T+s*L+l*R+c*V,r[4]=a*A+s*I+l*U+c*K,r[8]=a*_+s*k+l*j+c*J,r[12]=a*b+s*D+l*Y+c*ue,r[1]=u*T+h*L+f*R+m*V,r[5]=u*A+h*I+f*U+m*K,r[9]=u*_+h*k+f*j+m*J,r[13]=u*b+h*D+f*Y+m*ue,r[2]=g*T+d*L+p*R+x*V,r[6]=g*A+d*I+p*U+x*K,r[10]=g*_+d*k+p*j+x*J,r[14]=g*b+d*D+p*Y+x*ue,r[3]=S*T+v*L+M*R+y*V,r[7]=S*A+v*I+M*U+y*K,r[11]=S*_+v*k+M*j+y*J,r[15]=S*b+v*D+M*Y+y*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],x=e[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+t*l*m-t*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+t*c*h-t*s*m-r*a*h+n*a*m+r*s*u-n*c*u)+x*(-i*s*u-t*l*h+t*s*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],x=e[15],S=h*p*c-d*f*c+d*l*m-s*p*m-h*l*x+s*f*x,v=g*f*c-u*p*c-g*l*m+a*p*m+u*l*x-a*f*x,M=u*d*c-g*h*c+g*s*m-a*d*m-u*s*x+a*h*x,y=g*h*l-u*d*l-g*s*f+a*d*f+u*s*p-a*h*p,T=t*S+n*v+i*M+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=S*A,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*x-n*f*x)*A,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*x+n*l*x)*A,e[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*A,e[4]=v*A,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*x+t*f*x)*A,e[6]=(g*l*r-a*p*r-g*i*c+t*p*c+a*i*x-t*l*x)*A,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*m+t*l*m)*A,e[8]=M*A,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*x-t*h*x)*A,e[10]=(a*d*r-g*s*r+g*n*c-t*d*c-a*n*x+t*s*x)*A,e[11]=(u*s*r-a*h*r-u*n*c+t*h*c+a*n*m-t*s*m)*A,e[12]=y*A,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*A,e[14]=(g*s*i-a*d*i-g*n*l+t*d*l+a*n*p-t*s*p)*A,e[15]=(a*h*i-u*s*i+u*n*l-t*h*l-a*n*f+t*s*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,s=e.y,l=e.z,c=r*a,u=r*s;return this.set(c*a+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*a,0,c*l-i*s,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,s=t._z,l=t._w,c=r+r,u=a+a,h=s+s,f=r*c,m=r*u,g=r*h,d=a*u,p=a*h,x=s*h,S=l*c,v=l*u,M=l*h,y=n.x,T=n.y,A=n.z;return i[0]=(1-(d+x))*y,i[1]=(m+M)*y,i[2]=(g-v)*y,i[3]=0,i[4]=(m-M)*T,i[5]=(1-(f+x))*T,i[6]=(p+S)*T,i[7]=0,i[8]=(g+v)*A,i[9]=(p-S)*A,i[10]=(1-(f+d))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Oi.set(i[0],i[1],i[2]).length();const a=Oi.set(i[4],i[5],i[6]).length(),s=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/r,u=1/a,h=1/s;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=s,this}makePerspective(e,t,n,i,r,a){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,a){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,f=(n+i)*c,m=(a+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new O,on=new et,Xh=new O(0,0,0),qh=new O(1,1,1),Gn=new O,Qr=new O,Nt=new O,hl=new et,fl=new wi;class Ps{constructor(e=0,t=0,n=0,i=Ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ps.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yh=0;const dl=new O,Ni=new wi,En=new et,es=new O,vr=new O,jh=new O,Zh=new wi,pl=new O(1,0,0),ml=new O(0,1,0),gl=new O(0,0,1),$h={type:"added"},_l={type:"removed"};class At extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new O,t=new Ps,n=new wi,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new Ht}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?es.copy(e):es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(vr,es,this.up):En.lookAt(es,vr,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(En),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($h)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_l)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,e,jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,Zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new O,An=new O,oa=new O,Cn=new O,zi=new O,Ui=new O,xl=new O,la=new O,ca=new O,ua=new O;class Dn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ln.subVectors(i,t),An.subVectors(n,t),oa.subVectors(e,t);const a=ln.dot(ln),s=ln.dot(An),l=ln.dot(oa),c=An.dot(An),u=An.dot(oa),h=a*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,g=(a*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,i,r,a,s,l){return this.getBarycoord(e,t,n,i,Cn),l.set(0,0),l.addScaledVector(r,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(s,Cn.z),l}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),An.subVectors(e,t),ln.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),An.subVectors(this.a,this.b),ln.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Dn.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,s;zi.subVectors(i,n),Ui.subVectors(r,n),la.subVectors(e,n);const l=zi.dot(la),c=Ui.dot(la);if(l<=0&&c<=0)return t.copy(n);ca.subVectors(e,i);const u=zi.dot(ca),h=Ui.dot(ca);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(zi,a);ua.subVectors(e,r);const m=zi.dot(ua),g=Ui.dot(ua);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Ui,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return xl.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(xl,s);const x=1/(p+d+f);return a=d*x,s=f*x,t.copy(n).addScaledVector(zi,a).addScaledVector(Ui,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Kh=0;class Wr extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=$i,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fc,this.blendDst=dc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const l=r[s];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tc extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new O,ts=new be;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Je.fromBufferAttribute(this,t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ec extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ac extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jh=0;const Kt=new et,ha=new At,Bi=new O,zt=new Hr,yr=new Hr,lt=new O;class Mn extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vc(e)?Ac:Ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const s=t[r];yr.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(zt.min,yr.min),zt.expandByPoint(lt),lt.addVectors(zt.max,yr.max),zt.expandByPoint(lt)):(zt.expandByPoint(yr.min),zt.expandByPoint(yr.max))}zt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)lt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(lt));if(t)for(let r=0,a=t.length;r<a;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)lt.fromBufferAttribute(s,c),l&&(Bi.fromBufferAttribute(e,c),lt.add(Bi)),i=Math.max(i,n.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<s;L++)c[L]=new O,u[L]=new O;const h=new O,f=new O,m=new O,g=new be,d=new be,p=new be,x=new O,S=new O;function v(L,I,k){h.fromArray(i,L*3),f.fromArray(i,I*3),m.fromArray(i,k*3),g.fromArray(a,L*2),d.fromArray(a,I*2),p.fromArray(a,k*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(D),S.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(D),c[L].add(x),c[I].add(x),c[k].add(x),u[L].add(S),u[I].add(S),u[k].add(S))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let L=0,I=M.length;L<I;++L){const k=M[L],D=k.start,R=k.count;for(let U=D,j=D+R;U<j;U+=3)v(n[U+0],n[U+1],n[U+2])}const y=new O,T=new O,A=new O,_=new O;function b(L){A.fromArray(r,L*3),_.copy(A);const I=c[L];y.copy(I),y.sub(A.multiplyScalar(A.dot(I))).normalize(),T.crossVectors(_,I);const D=T.dot(u[L])<0?-1:1;l[L*4]=y.x,l[L*4+1]=y.y,l[L*4+2]=y.z,l[L*4+3]=D}for(let L=0,I=M.length;L<I;++L){const k=M[L],D=k.start,R=k.count;for(let U=D,j=D+R;U<j;U+=3)b(n[U+0]),b(n[U+1]),b(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,a=new O,s=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let x=0;x<u;x++)f[g++]=c[m++]}return new hn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new et,ki=new Wh,fa=new so,Mr=new O,br=new O,Sr=new O,da=new O,ns=new O,is=new be,rs=new be,ss=new be,pa=new O,as=new O;class Wt extends At{constructor(e=new Mn,t=new Tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const s=this.morphTargetInfluences;if(r&&s){ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=s[l],h=r[l];u!==0&&(da.fromBufferAttribute(h,e),a?ns.addScaledVector(da,u):ns.addScaledVector(da.sub(t),u))}t.add(ns)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),e.ray.intersectsSphere(fa)===!1)||(vl.copy(r).invert(),ki.copy(e.ray).applyMatrix4(vl),n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],x=Math.max(d.start,f.start),S=Math.min(s.count,Math.min(d.start+d.count,f.start+f.count));for(let v=x,M=S;v<M;v+=3){const y=s.getX(v),T=s.getX(v+1),A=s.getX(v+2);a=os(this,p,e,ki,c,u,y,T,A),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(s.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const x=s.getX(d),S=s.getX(d+1),v=s.getX(d+2);a=os(this,i,e,ki,c,u,x,S,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],x=Math.max(d.start,f.start),S=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let v=x,M=S;v<M;v+=3){const y=v,T=v+1,A=v+2;a=os(this,p,e,ki,c,u,y,T,A),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const x=d,S=d+1,v=d+2;a=os(this,i,e,ki,c,u,x,S,v),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function Qh(o,e,t,n,i,r,a,s){let l;if(e.side===Xt?l=n.intersectTriangle(a,r,i,!0,s):l=n.intersectTriangle(i,r,a,e.side===Zn,s),l===null)return null;as.copy(s),as.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(as);return c<t.near||c>t.far?null:{distance:c,point:as.clone(),object:o}}function os(o,e,t,n,i,r,a,s,l){o.getVertexPosition(a,Mr),o.getVertexPosition(s,br),o.getVertexPosition(l,Sr);const c=Qh(o,e,t,n,Mr,br,Sr,pa);if(c){i&&(is.fromBufferAttribute(i,a),rs.fromBufferAttribute(i,s),ss.fromBufferAttribute(i,l),c.uv=Dn.getUV(pa,Mr,br,Sr,is,rs,ss,new be)),r&&(is.fromBufferAttribute(r,a),rs.fromBufferAttribute(r,s),ss.fromBufferAttribute(r,l),c.uv2=Dn.getUV(pa,Mr,br,Sr,is,rs,ss,new be));const u={a,b:s,c:l,normal:new O,materialIndex:0};Dn.getNormal(Mr,br,Sr,u.normal),c.face=u}return c}class en extends Mn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(h,2));function g(d,p,x,S,v,M,y,T,A,_,b){const L=M/A,I=y/_,k=M/2,D=y/2,R=T/2,U=A+1,j=_+1;let Y=0,V=0;const K=new O;for(let J=0;J<j;J++){const ue=J*I-D;for(let G=0;G<U;G++){const $=G*L-k;K[d]=$*S,K[p]=ue*v,K[x]=R,c.push(K.x,K.y,K.z),K[d]=0,K[p]=0,K[x]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push(G/A),h.push(1-J/_),Y+=1}}for(let J=0;J<_;J++)for(let ue=0;ue<A;ue++){const G=f+ue+U*J,$=f+ue+U*(J+1),te=f+(ue+1)+U*(J+1),ne=f+(ue+1)+U*J;l.push(G,$,ne),l.push($,te,ne),V+=6}s.addGroup(m,V,b),m+=V,f+=Y}}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(o){const e={};for(let t=0;t<o.length;t++){const n=or(o[t]);for(const i in n)e[i]=n[i]}return e}function ef(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Cc(o){return o.getRenderTarget()===null&&o.outputEncoding===Ge?dn:Fr}const tf={clone:or,merge:St};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends Pc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ll*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ll*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Vi=1;class sf extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new kt(Gi,Vi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new kt(Gi,Vi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new kt(Gi,Vi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new kt(Gi,Vi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new kt(Gi,Vi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(Gi,Vi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Lc extends wt{constructor(e,t,n,i,r,a,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,i,r,a,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class af extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Lc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new en(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:qn});r.uniforms.tEquirect.value=t;const a=new Wt(i,r),s=t.minFilter;return t.minFilter===sr&&(t.minFilter=ht),new sf(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ma=new O,of=new O,lf=new Ht;class ui{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ma.subVectors(n,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ma),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lf.getNormalMatrix(e),i=this.coplanarPoint(ma).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new so,ls=new O;class ao{constructor(e=new ui,t=new ui,n=new ui,i=new ui,r=new ui,a=new ui){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],x=n[13],S=n[14],v=n[15];return t[0].setComponents(s-i,h-l,d-f,v-p).normalize(),t[1].setComponents(s+i,h+l,d+f,v+p).normalize(),t[2].setComponents(s+r,h+c,d+m,v+x).normalize(),t[3].setComponents(s-r,h-c,d-m,v-x).normalize(),t[4].setComponents(s-a,h-u,d-g,v-S).normalize(),t[5].setComponents(s+a,h+u,d+g,v+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSprite(e){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ls.x=i.normal.x>0?e.max.x:e.min.x,ls.y=i.normal.y>0?e.max.y:e.min.y,ls.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rc(){let o=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function cf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,f):(t?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:s,update:l}}class oo extends Mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,f=t/l,m=[],g=[],d=[],p=[];for(let x=0;x<u;x++){const S=x*f-a;for(let v=0;v<c;v++){const M=v*h-r;g.push(M,-S,0),d.push(0,0,1),p.push(v/s),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let S=0;S<s;S++){const v=S+c*x,M=S+c*(x+1),y=S+1+c*(x+1),T=S+1+c*x;m.push(v,M,T),m.push(M,y,T)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(p,2))}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}var uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf="vec3 transformed = vec3( position );",_f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Pf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ad=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Md=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Od=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,tp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,np=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ip=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,rp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ap=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Pp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:uf,alphamap_pars_fragment:hf,alphatest_fragment:ff,alphatest_pars_fragment:df,aomap_fragment:pf,aomap_pars_fragment:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:xf,iridescence_fragment:vf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:wf,color_fragment:Tf,color_pars_fragment:Ef,color_pars_vertex:Af,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:Lf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:Df,displacementmap_vertex:If,emissivemap_fragment:Ff,emissivemap_pars_fragment:Of,encodings_fragment:Nf,encodings_pars_fragment:zf,envmap_fragment:Uf,envmap_common_pars_fragment:Bf,envmap_pars_fragment:kf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:Qf,envmap_vertex:Vf,fog_vertex:Hf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_fragment:jf,lightmap_pars_fragment:Zf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Kf,lights_pars_begin:Jf,lights_toon_fragment:ed,lights_toon_pars_fragment:td,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:rd,lights_physical_pars_fragment:sd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:ud,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:fd,map_fragment:dd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:xd,morphcolor_vertex:vd,morphnormal_vertex:yd,morphtarget_pars_vertex:Md,morphtarget_vertex:bd,normal_fragment_begin:Sd,normal_fragment_maps:wd,normal_pars_fragment:Td,normal_pars_vertex:Ed,normal_vertex:Ad,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Dd,output_fragment:Id,packing:Fd,premultiplied_alpha_fragment:Od,project_vertex:Nd,dithering_fragment:zd,dithering_pars_fragment:Ud,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:jd,specularmap_fragment:Zd,specularmap_pars_fragment:$d,tonemapping_fragment:Kd,tonemapping_pars_fragment:Jd,transmission_fragment:Qd,transmission_pars_fragment:ep,uv_pars_fragment:tp,uv_pars_vertex:np,uv_vertex:ip,uv2_pars_fragment:rp,uv2_pars_vertex:sp,uv2_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:up,backgroundCube_frag:hp,cube_vert:fp,cube_frag:dp,depth_vert:pp,depth_frag:mp,distanceRGBA_vert:gp,distanceRGBA_frag:_p,equirect_vert:xp,equirect_frag:vp,linedashed_vert:yp,linedashed_frag:Mp,meshbasic_vert:bp,meshbasic_frag:Sp,meshlambert_vert:wp,meshlambert_frag:Tp,meshmatcap_vert:Ep,meshmatcap_frag:Ap,meshnormal_vert:Cp,meshnormal_frag:Pp,meshphong_vert:Lp,meshphong_frag:Rp,meshphysical_vert:Dp,meshphysical_frag:Ip,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Np,points_frag:zp,shadow_vert:Up,shadow_frag:Bp,sprite_vert:kp,sprite_frag:Gp},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ht},uv2Transform:{value:new Ht},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ht}}},pn={basic:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:St([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:St([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:St([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:St([re.points,re.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:St([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:St([re.common,re.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:St([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:St([re.sprite,re.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:St([re.common,re.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:St([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};pn.physical={uniforms:St([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const cs={r:0,b:0,g:0};function Vp(o,e,t,n,i,r,a){const s=new Fe(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(p,x){let S=!1,v=x.isScene===!0?x.background:null;v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v));const M=o.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(v=null),v===null?d(s,l):v&&v.isColor&&(d(v,1),S=!0),(o.autoClear||S)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Cs)?(u===void 0&&(u=new Wt(new en(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:or(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=v.encoding!==Ge,(h!==v||f!==v.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Wt(new oo(2,2),new Ti({name:"BackgroundMaterial",uniforms:or(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=v.encoding!==Ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,x){p.getRGB(cs,Cc(o)),n.buffers.color.setClear(cs.r,cs.g,cs.b,x,a)}return{getClearColor:function(){return s},setClearColor:function(p,x=1){s.set(p),l=x,d(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(s,l)},render:g}}function Hp(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(R,U,j,Y,V){let K=!1;if(a){const J=d(Y,j,U);c!==J&&(c=J,m(c.object)),K=x(R,Y,j,V),K&&S(R,Y,j,V)}else{const J=U.wireframe===!0;(c.geometry!==Y.id||c.program!==j.id||c.wireframe!==J)&&(c.geometry=Y.id,c.program=j.id,c.wireframe=J,K=!0)}V!==null&&t.update(V,34963),(K||u)&&(u=!1,_(R,U,j,Y),V!==null&&o.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,U,j){const Y=j.wireframe===!0;let V=s[R.id];V===void 0&&(V={},s[R.id]=V);let K=V[U.id];K===void 0&&(K={},V[U.id]=K);let J=K[Y];return J===void 0&&(J=p(f()),K[Y]=J),J}function p(R){const U=[],j=[],Y=[];for(let V=0;V<i;V++)U[V]=0,j[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:j,attributeDivisors:Y,object:R,attributes:{},index:null}}function x(R,U,j,Y){const V=c.attributes,K=U.attributes;let J=0;const ue=j.getAttributes();for(const G in ue)if(ue[G].location>=0){const te=V[G];let ne=K[G];if(ne===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;J++}return c.attributesNum!==J||c.index!==Y}function S(R,U,j,Y){const V={},K=U.attributes;let J=0;const ue=j.getAttributes();for(const G in ue)if(ue[G].location>=0){let te=K[G];te===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(te=R.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),V[G]=ne,J++}c.attributes=V,c.attributesNum=J,c.index=Y}function v(){const R=c.newAttributes;for(let U=0,j=R.length;U<j;U++)R[U]=0}function M(R){y(R,0)}function y(R,U){const j=c.newAttributes,Y=c.enabledAttributes,V=c.attributeDivisors;j[R]=1,Y[R]===0&&(o.enableVertexAttribArray(R),Y[R]=1),V[R]!==U&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),V[R]=U)}function T(){const R=c.newAttributes,U=c.enabledAttributes;for(let j=0,Y=U.length;j<Y;j++)U[j]!==R[j]&&(o.disableVertexAttribArray(j),U[j]=0)}function A(R,U,j,Y,V,K){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(R,U,j,V,K):o.vertexAttribPointer(R,U,j,Y,V,K)}function _(R,U,j,Y){if(n.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=Y.attributes,K=j.getAttributes(),J=U.defaultAttributeValues;for(const ue in K){const G=K[ue];if(G.location>=0){let $=V[ue];if($===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&($=R.instanceColor)),$!==void 0){const te=$.normalized,ne=$.itemSize,H=t.get($);if(H===void 0)continue;const ye=H.buffer,me=H.type,de=H.bytesPerElement;if($.isInterleavedBufferAttribute){const le=$.data,ze=le.stride,Se=$.offset;if(le.isInstancedInterleavedBuffer){for(let xe=0;xe<G.locationSize;xe++)y(G.location+xe,le.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<G.locationSize;xe++)M(G.location+xe);o.bindBuffer(34962,ye);for(let xe=0;xe<G.locationSize;xe++)A(G.location+xe,ne/G.locationSize,me,te,ze*de,(Se+ne/G.locationSize*xe)*de)}else{if($.isInstancedBufferAttribute){for(let le=0;le<G.locationSize;le++)y(G.location+le,$.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<G.locationSize;le++)M(G.location+le);o.bindBuffer(34962,ye);for(let le=0;le<G.locationSize;le++)A(G.location+le,ne/G.locationSize,me,te,ne*de,ne/G.locationSize*le*de)}}else if(J!==void 0){const te=J[ue];if(te!==void 0)switch(te.length){case 2:o.vertexAttrib2fv(G.location,te);break;case 3:o.vertexAttrib3fv(G.location,te);break;case 4:o.vertexAttrib4fv(G.location,te);break;default:o.vertexAttrib1fv(G.location,te)}}}}T()}function b(){k();for(const R in s){const U=s[R];for(const j in U){const Y=U[j];for(const V in Y)g(Y[V].object),delete Y[V];delete U[j]}delete s[R]}}function L(R){if(s[R.id]===void 0)return;const U=s[R.id];for(const j in U){const Y=U[j];for(const V in Y)g(Y[V].object),delete Y[V];delete U[j]}delete s[R.id]}function I(R){for(const U in s){const j=s[U];if(j[R.id]===void 0)continue;const Y=j[R.id];for(const V in Y)g(Y[V].object),delete Y[V];delete j[R.id]}}function k(){D(),u=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:M,disableUnusedAttributes:T}}function Wp(o,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function s(c,u){o.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=l}function Xp(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),x=o.getParameter(36348),S=o.getParameter(36349),v=f>0,M=a||e.has("OES_texture_float"),y=v&&M,T=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:T}}function qp(o){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ui,s=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||i;return i=f,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,x=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:n,v=S*4;let M=x.clippingState||null;l.value=M,M=u(g,f,v,m);for(let y=0;y!==v;++y)M[y]=t[y];x.clippingState=M,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const x=m+d*4,S=f.matrixWorldInverse;s.getNormalMatrix(S),(p===null||p.length<x)&&(p=new Float32Array(x));for(let v=0,M=m;v!==d;++v,M+=4)a.copy(h[v]).applyMatrix4(S,s),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Yp(o){let e=new WeakMap;function t(a,s){return s===Fa?a.mapping=ir:s===Oa&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Fa||s===Oa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new af(l.height/2);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class jp extends Pc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,yl=[.125,.215,.35,.446,.526,.582],di=20,ga=new jp,Ml=new Fe;let _a=null;const hi=(1+Math.sqrt(5))/2,Wi=1/hi,bl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,hi,Wi),new O(0,hi,-Wi),new O(Wi,0,hi),new O(-Wi,0,hi),new O(hi,Wi,0),new O(-hi,Wi,0)];class ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_a=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a),e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:Fn,format:cn,encoding:$n,depthBuffer:!1},i=Sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zp(r)),this._blurMaterial=$p(r,e,t)}return i}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,ga)}_sceneToCubeUV(e,t,n,i){const s=new kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ml),u.toneMapping=On,u.autoClear=!1;const m=new Tc({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new Wt(new en,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Ml),d=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(s.up.set(0,l[x],0),s.lookAt(c[x],0,0)):S===1?(s.up.set(0,0,l[x]),s.lookAt(0,c[x],0)):(s.up.set(0,l[x],0),s.lookAt(0,0,c[x]));const v=this._cubeSize;us(i,S*v,x>2?v:0,v,v),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ir||e.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;us(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=bl[(i-1)%bl.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Wt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):di;p>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const x=[];let S=0;for(let A=0;A<di;++A){const _=A/d,b=Math.exp(-_*_/2);x.push(b),A===0?S+=b:A<p&&(S+=2*b)}for(let A=0;A<x.length;A++)x[A]=x[A]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=x,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[i],y=3*M*(i>v-Yi?i-v+Yi:0),T=4*(this._cubeSize-M);us(t,y,T,3*M,2*M),l.setRenderTarget(t),l.render(h,ga)}}function Zp(o){const e=[],t=[],n=[];let i=o;const r=o-Yi+1+yl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);t.push(s);let l=1/s;a>o-Yi?l=yl[a-o+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,x=1,S=new Float32Array(d*g*m),v=new Float32Array(p*g*m),M=new Float32Array(x*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,_=T>2?0:-1,b=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];S.set(b,d*g*T),v.set(f,p*g*T);const L=[T,T,T,T,T,T];M.set(L,x*g*T)}const y=new Mn;y.setAttribute("position",new hn(S,d)),y.setAttribute("uv",new hn(v,p)),y.setAttribute("faceIndex",new hn(M,x)),e.push(y),i>Yi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sl(o,e,t){const n=new Si(o,e,t);return n.texture.mapping=Cs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function $p(o,e,t){const n=new Float32Array(di),i=new O(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function wl(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Tl(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kp(o){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Fa||l===Oa,u=l===ir||l===rr;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new ka(o)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new ka(o));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Jp(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qp(o,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,x=d.length;p<x;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let v=0,M=S.length;v<M;v+=3){const y=S[v+0],T=S[v+1],A=S[v+2];f.push(y,T,T,A,A,y)}}else{const S=g.array;d=g.version;for(let v=0,M=S.length/3-1;v<M;v+=3){const y=v+0,T=v+1,A=v+2;f.push(y,T,T,A,A,y)}}const p=new(vc(f)?Ac:Ec)(f,1);p.version=d;const x=r.get(h);x&&e.remove(x),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function em(o,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,g),t.update(m,r,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function tm(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(t.calls++,a){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nm(o,e){return o[0]-e[0]}function im(o,e){return Math.abs(e[1])-Math.abs(o[1])}function rm(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new He,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let x=r.get(u);if(x===void 0||x.count!==p){let j=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var g=j;x!==void 0&&x.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let L=0;M===!0&&(L=1),y===!0&&(L=2),T===!0&&(L=3);let I=u.attributes.position.count*L,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const D=new Float32Array(I*k*4*p),R=new Sc(D,I,k,p);R.type=un,R.needsUpdate=!0;const U=L*4;for(let Y=0;Y<p;Y++){const V=A[Y],K=_[Y],J=b[Y],ue=I*k*4*Y;for(let G=0;G<V.count;G++){const $=G*U;M===!0&&(a.fromBufferAttribute(V,G),D[ue+$+0]=a.x,D[ue+$+1]=a.y,D[ue+$+2]=a.z,D[ue+$+3]=0),y===!0&&(a.fromBufferAttribute(K,G),D[ue+$+4]=a.x,D[ue+$+5]=a.y,D[ue+$+6]=a.z,D[ue+$+7]=0),T===!0&&(a.fromBufferAttribute(J,G),D[ue+$+8]=a.x,D[ue+$+9]=a.y,D[ue+$+10]=a.z,D[ue+$+11]=J.itemSize===4?a.w:1)}}x={count:p,texture:R,size:new be(I,k)},r.set(u,x),u.addEventListener("dispose",j)}let S=0;for(let M=0;M<m.length;M++)S+=m[M];const v=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(o,"morphTargetBaseInfluence",v),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const T=p[y];T[0]=y,T[1]=m[y]}p.sort(im);for(let y=0;y<8;y++)y<d&&p[y][1]?(s[y][0]=p[y][0],s[y][1]=p[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(nm);const x=u.morphAttributes.position,S=u.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=s[y],A=T[0],_=T[1];A!==Number.MAX_SAFE_INTEGER&&_?(x&&u.getAttribute("morphTarget"+y)!==x[A]&&u.setAttribute("morphTarget"+y,x[A]),S&&u.getAttribute("morphNormal"+y)!==S[A]&&u.setAttribute("morphNormal"+y,S[A]),i[y]=_,v+=_):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),S&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(o,"morphTargetBaseInfluence",M),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function sm(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Dc=new wt,Ic=new Sc,Fc=new Vh,Oc=new Lc,El=[],Al=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Ll=new Float32Array(4);function mr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=El[i];if(r===void 0&&(r=new Float32Array(i),El[i]=r),e!==0){n.toArray(r,0);for(let a=1,s=0;a!==e;++a)s+=t,o[a].toArray(r,s)}return r}function it(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function rt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Ls(o,e){let t=Al[e];t===void 0&&(t=new Int32Array(e),Al[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function am(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function om(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;o.uniform2fv(this.addr,e),rt(t,e)}}function lm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;o.uniform3fv(this.addr,e),rt(t,e)}}function cm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;o.uniform4fv(this.addr,e),rt(t,e)}}function um(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Ll.set(n),o.uniformMatrix2fv(this.addr,!1,Ll),rt(t,n)}}function hm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Pl.set(n),o.uniformMatrix3fv(this.addr,!1,Pl),rt(t,n)}}function fm(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(it(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(it(t,n))return;Cl.set(n),o.uniformMatrix4fv(this.addr,!1,Cl),rt(t,n)}}function dm(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function pm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;o.uniform2iv(this.addr,e),rt(t,e)}}function mm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;o.uniform3iv(this.addr,e),rt(t,e)}}function gm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;o.uniform4iv(this.addr,e),rt(t,e)}}function _m(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function xm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;o.uniform2uiv(this.addr,e),rt(t,e)}}function vm(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;o.uniform3uiv(this.addr,e),rt(t,e)}}function ym(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;o.uniform4uiv(this.addr,e),rt(t,e)}}function Mm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Dc,i)}function bm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fc,i)}function Sm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Oc,i)}function wm(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ic,i)}function Tm(o){switch(o){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return um;case 35675:return hm;case 35676:return fm;case 5124:case 35670:return dm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return wm}}function Em(o,e){o.uniform1fv(this.addr,e)}function Am(o,e){const t=mr(e,this.size,2);o.uniform2fv(this.addr,t)}function Cm(o,e){const t=mr(e,this.size,3);o.uniform3fv(this.addr,t)}function Pm(o,e){const t=mr(e,this.size,4);o.uniform4fv(this.addr,t)}function Lm(o,e){const t=mr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Rm(o,e){const t=mr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Dm(o,e){const t=mr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Im(o,e){o.uniform1iv(this.addr,e)}function Fm(o,e){o.uniform2iv(this.addr,e)}function Om(o,e){o.uniform3iv(this.addr,e)}function Nm(o,e){o.uniform4iv(this.addr,e)}function zm(o,e){o.uniform1uiv(this.addr,e)}function Um(o,e){o.uniform2uiv(this.addr,e)}function Bm(o,e){o.uniform3uiv(this.addr,e)}function km(o,e){o.uniform4uiv(this.addr,e)}function Gm(o,e,t){const n=this.cache,i=e.length,r=Ls(t,i);it(n,r)||(o.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Dc,r[a])}function Vm(o,e,t){const n=this.cache,i=e.length,r=Ls(t,i);it(n,r)||(o.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Fc,r[a])}function Hm(o,e,t){const n=this.cache,i=e.length,r=Ls(t,i);it(n,r)||(o.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Oc,r[a])}function Wm(o,e,t){const n=this.cache,i=e.length,r=Ls(t,i);it(n,r)||(o.uniform1iv(this.addr,r),rt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ic,r[a])}function Xm(o){switch(o){case 5126:return Em;case 35664:return Am;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Rm;case 35676:return Dm;case 5124:case 35670:return Im;case 35667:case 35671:return Fm;case 35668:case 35672:return Om;case 35669:case 35673:return Nm;case 5125:return zm;case 36294:return Um;case 36295:return Bm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Gm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Wm}}class qm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Tm(t.type)}}class Ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Xm(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Rl(o,e){o.seq.push(e),o.map[e.id]=e}function Zm(o,e,t){const n=o.name,i=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===i){Rl(t,c===void 0?new qm(s,o,e):new Ym(s,o,e));break}else{let h=t.map[s];h===void 0&&(h=new jm(s),Rl(t,h)),t=h}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Zm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Dl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let $m=0;function Km(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return n.join(`
`)}function Jm(o){switch(o){case $n:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Il(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Km(o.getShaderSource(e),a)}else return i}function Qm(o,e){const t=Jm(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function eg(o,e){let t;switch(e){case gh:t="Linear";break;case _h:t="Reinhard";break;case xh:t="OptimizedCineon";break;case mc:t="ACESFilmic";break;case vh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function tg(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cr).join(`
`)}function ng(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ig(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[a]={type:r.type,location:o.getAttribLocation(e,a),locationSize:s}}return t}function Cr(o){return o!==""}function Fl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ol(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(o){return o.replace(rg,sg)}function sg(o,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ga(t)}const ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(o){return o.replace(ag,og)}function og(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zl(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lg(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ro?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ju?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function cg(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case Cs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ug(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function hg(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case ph:e="ENVMAP_BLENDING_MIX";break;case mh:e="ENVMAP_BLENDING_ADD";break}return e}function fg(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function dg(o,e,t,n){const i=o.getContext(),r=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=lg(t),c=cg(t),u=ug(t),h=hg(t),f=fg(t),m=t.isWebGL2?"":tg(t),g=ng(r),d=i.createProgram();let p,x,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Cr).join(`
`),p.length>0&&(p+=`
`),x=[m,g].filter(Cr).join(`
`),x.length>0&&(x+=`
`)):(p=[zl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),x=[m,zl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?we.tonemapping_pars_fragment:"",t.toneMapping!==On?eg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,Qm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Ga(a),a=Fl(a,t),a=Ol(a,t),s=Ga(s),s=Fl(s,t),s=Ol(s,t),a=Nl(a),s=Nl(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const v=S+p+a,M=S+x+s,y=Dl(i,35633,v),T=Dl(i,35632,M);if(i.attachShader(d,y),i.attachShader(d,T),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const b=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(y).trim(),I=i.getShaderInfoLog(T).trim();let k=!0,D=!0;if(i.getProgramParameter(d,35714)===!1){k=!1;const R=Il(i,y,"vertex"),U=Il(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+b+`
`+R+`
`+U)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||I==="")&&(D=!1);D&&(this.diagnostics={runnable:k,programLog:b,vertexShader:{log:L,prefix:p},fragmentShader:{log:I,prefix:x}})}i.deleteShader(y),i.deleteShader(T);let A;this.getUniforms=function(){return A===void 0&&(A=new ms(i,d)),A};let _;return this.getAttributes=function(){return _===void 0&&(_=ig(i,d)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=$m++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=T,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gg(e),t.set(e,n)),n}}class gg{constructor(e){this.id=pg++,this.code=e,this.usedTimes=0}}function _g(o,e,t,n,i,r,a){const s=new wc,l=new mg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_,b,L,I,k){const D=I.fog,R=k.geometry,U=_.isMeshStandardMaterial?I.environment:null,j=(_.isMeshStandardMaterial?t:e).get(_.envMap||U),Y=j&&j.mapping===Cs?j.image.height:null,V=g[_.type];_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,J=K!==void 0?K.length:0;let ue=0;R.morphAttributes.position!==void 0&&(ue=1),R.morphAttributes.normal!==void 0&&(ue=2),R.morphAttributes.color!==void 0&&(ue=3);let G,$,te,ne;if(V){const ze=pn[V];G=ze.vertexShader,$=ze.fragmentShader}else G=_.vertexShader,$=_.fragmentShader,l.update(_),te=l.getVertexShaderID(_),ne=l.getFragmentShaderID(_);const H=o.getRenderTarget(),ye=_.alphaTest>0,me=_.clearcoat>0,de=_.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:_.type,vertexShader:G,fragmentShader:$,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:f,outputEncoding:H===null?o.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:$n,map:!!_.map,matcap:!!_.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Y,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Uh,tangentSpaceNormalMap:_.normalMapType===xc,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Ge,clearcoat:me,clearcoatMap:me&&!!_.clearcoatMap,clearcoatRoughnessMap:me&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:me&&!!_.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!_.iridescenceMap,iridescenceThicknessMap:de&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===$i,alphaMap:!!_.alphaMap,alphaTest:ye,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!R.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(_.map||_.bumpMap||_.normalMap||_.specularMap||_.alphaMap||_.emissiveMap||_.roughnessMap||_.metalnessMap||_.clearcoatNormalMap||_.iridescenceMap||_.iridescenceThicknessMap||_.transmission>0||_.transmissionMap||_.thicknessMap||_.specularIntensityMap||_.specularColorMap||_.sheen>0||_.sheenColorMap||_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!D,useFog:_.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:h,skinning:k.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:_.toneMapped?o.toneMapping:On,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Xt,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function p(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(x(b,_),S(b,_),b.push(o.outputEncoding)),b.push(_.customProgramCacheKey),b.join()}function x(_,b){_.push(b.precision),_.push(b.outputEncoding),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.combine),_.push(b.vertexUvs),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function S(_,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.map&&s.enable(4),b.matcap&&s.enable(5),b.envMap&&s.enable(6),b.lightMap&&s.enable(7),b.aoMap&&s.enable(8),b.emissiveMap&&s.enable(9),b.bumpMap&&s.enable(10),b.normalMap&&s.enable(11),b.objectSpaceNormalMap&&s.enable(12),b.tangentSpaceNormalMap&&s.enable(13),b.clearcoat&&s.enable(14),b.clearcoatMap&&s.enable(15),b.clearcoatRoughnessMap&&s.enable(16),b.clearcoatNormalMap&&s.enable(17),b.iridescence&&s.enable(18),b.iridescenceMap&&s.enable(19),b.iridescenceThicknessMap&&s.enable(20),b.displacementMap&&s.enable(21),b.specularMap&&s.enable(22),b.roughnessMap&&s.enable(23),b.metalnessMap&&s.enable(24),b.gradientMap&&s.enable(25),b.alphaMap&&s.enable(26),b.alphaTest&&s.enable(27),b.vertexColors&&s.enable(28),b.vertexAlphas&&s.enable(29),b.vertexUvs&&s.enable(30),b.vertexTangents&&s.enable(31),b.uvsVertexOnly&&s.enable(32),_.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.physicallyCorrectLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.specularIntensityMap&&s.enable(15),b.specularColorMap&&s.enable(16),b.transmission&&s.enable(17),b.transmissionMap&&s.enable(18),b.thicknessMap&&s.enable(19),b.sheen&&s.enable(20),b.sheenColorMap&&s.enable(21),b.sheenRoughnessMap&&s.enable(22),b.decodeVideoTexture&&s.enable(23),b.opaque&&s.enable(24),_.push(s.mask)}function v(_){const b=g[_.type];let L;if(b){const I=pn[b];L=tf.clone(I.uniforms)}else L=_.uniforms;return L}function M(_,b){let L;for(let I=0,k=c.length;I<k;I++){const D=c[I];if(D.cacheKey===b){L=D,++L.usedTimes;break}}return L===void 0&&(L=new dg(o,b,_,r),c.push(L)),L}function y(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),_.destroy()}}function T(_){l.remove(_)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:A}}function xg(){let o=new WeakMap;function e(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function t(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function vg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ul(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Bl(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let x=o[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=m,x.groupOrder=g,x.renderOrder=h.renderOrder,x.z=d,x.group=p),e++,x}function s(h,f,m,g,d,p){const x=a(h,f,m,g,d,p);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function l(h,f,m,g,d,p){const x=a(h,f,m,g,d,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function c(h,f){t.length>1&&t.sort(h||vg),n.length>1&&n.sort(f||Ul),i.length>1&&i.sort(f||Ul)}function u(){for(let h=e,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function yg(){let o=new WeakMap;function e(n,i){const r=o.get(n);let a;return r===void 0?(a=new Bl,o.set(n,[a])):i>=r.length?(a=new Bl,r.push(a)):a=r[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function Mg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Fe};break;case"SpotLight":t={position:new O,direction:new O,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new O,halfWidth:new O,halfHeight:new O};break}return o[e.id]=t,t}}}function bg(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Sg=0;function wg(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Tg(o,e){const t=new Mg,n=bg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,a=new et,s=new et;function l(u,h){let f=0,m=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,p=0,x=0,S=0,v=0,M=0,y=0,T=0,A=0,_=0;u.sort(wg);const b=h!==!0?Math.PI:1;for(let I=0,k=u.length;I<k;I++){const D=u[I],R=D.color,U=D.intensity,j=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=R.r*U*b,m+=R.g*U*b,g+=R.b*U*b;else if(D.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],U);else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const K=D.shadow,J=n.get(D);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[d]=J,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=D.shadow.matrix,M++}i.directional[d]=V,d++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(R).multiplyScalar(U*b),V.distance=j,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[x]=V;const K=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,K.updateMatrices(D),D.castShadow&&_++),i.spotLightMatrix[x]=K.matrix,D.castShadow){const J=n.get(D);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=Y,T++}x++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(R).multiplyScalar(U),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=V,S++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*b),V.distance=D.distance,V.decay=D.decay,D.castShadow){const K=D.shadow,J=n.get(D);J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=D.shadow.matrix,y++}i.point[p]=V,p++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(U*b),V.groundColor.copy(D.groundColor).multiplyScalar(U*b),i.hemi[v]=V,v++}}S>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==x||L.rectAreaLength!==S||L.hemiLength!==v||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==T||L.numSpotMaps!==A)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+A-_,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=_,L.directionalLength=d,L.pointLength=p,L.spotLength=x,L.rectAreaLength=S,L.hemiLength=v,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=T,L.numSpotMaps=A,i.version=Sg++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const x=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const M=u[S];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),f++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),g++}else if(M.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),s.identity(),a.copy(M.matrixWorld),a.premultiply(x),s.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),d++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(x),p++}}}return{setup:l,setupView:c,state:i}}function kl(o,e){const t=new Tg(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function Eg(o,e){let t=new WeakMap;function n(r,a=0){const s=t.get(r);let l;return s===void 0?(l=new kl(o,e),t.set(r,[l])):a>=s.length?(l=new kl(o,e),s.push(l)):l=s[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ag extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cg extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rg(o,e,t){let n=new ao;const i=new be,r=new be,a=new He,s=new Ag({depthPacking:zh}),l=new Cg,c={},u=t.maxTextureSize,h={[Zn]:Xt,[Xt]:Zn,[gn]:gn},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Pg,fragmentShader:Lg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mn;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Wt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro,this.render=function(M,y,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const A=o.getRenderTarget(),_=o.getActiveCubeFace(),b=o.getActiveMipmapLevel(),L=o.state;L.setBlending(qn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let I=0,k=M.length;I<k;I++){const D=M[I],R=D.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const U=R.getFrameExtents();if(i.multiply(U),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,R.mapSize.y=r.y)),R.map===null){const Y=this.type!==Ar?{minFilter:ut,magFilter:ut}:{};R.map=new Si(i.x,i.y,Y),R.map.texture.name=D.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const j=R.getViewportCount();for(let Y=0;Y<j;Y++){const V=R.getViewport(Y);a.set(r.x*V.x,r.y*V.y,r.x*V.z,r.y*V.w),L.viewport(a),R.updateMatrices(D,Y),n=R.getFrustum(),v(y,T,R.camera,D,this.type)}R.isPointLightShadow!==!0&&this.type===Ar&&x(R,T),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(A,_,b)};function x(M,y){const T=e.update(d);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Si(i.x,i.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(y,null,T,f,d,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(y,null,T,m,d,null)}function S(M,y,T,A,_,b){let L=null;const I=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)L=I;else if(L=T.isPointLight===!0?l:s,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const k=L.uuid,D=y.uuid;let R=c[k];R===void 0&&(R={},c[k]=R);let U=R[D];U===void 0&&(U=L.clone(),R[D]=U),L=U}return L.visible=y.visible,L.wireframe=y.wireframe,b===Ar?L.side=y.shadowSide!==null?y.shadowSide:y.side:L.side=y.shadowSide!==null?y.shadowSide:h[y.side],L.alphaMap=y.alphaMap,L.alphaTest=y.alphaTest,L.map=y.map,L.clipShadows=y.clipShadows,L.clippingPlanes=y.clippingPlanes,L.clipIntersection=y.clipIntersection,L.displacementMap=y.displacementMap,L.displacementScale=y.displacementScale,L.displacementBias=y.displacementBias,L.wireframeLinewidth=y.wireframeLinewidth,L.linewidth=y.linewidth,T.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(T.matrixWorld),L.nearDistance=A,L.farDistance=_),L}function v(M,y,T,A,_){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===Ar)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const I=e.update(M),k=M.material;if(Array.isArray(k)){const D=I.groups;for(let R=0,U=D.length;R<U;R++){const j=D[R],Y=k[j.materialIndex];if(Y&&Y.visible){const V=S(M,Y,A,T.near,T.far,_);o.renderBufferDirect(T,null,I,V,M,j)}}}else if(k.visible){const D=S(M,k,A,T.near,T.far,_);o.renderBufferDirect(T,null,I,D,M,null)}}const L=M.children;for(let I=0,k=L.length;I<k;I++)v(L[I],y,T,A,_)}}function Dg(o,e,t){const n=t.isWebGL2;function i(){let F=!1;const X=new He;let Q=null;const ce=new He(0,0,0,0);return{setMask:function(ge){Q!==ge&&!F&&(o.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){F=ge},setClear:function(ge,Ne,at,pt,ei){ei===!0&&(ge*=pt,Ne*=pt,at*=pt),X.set(ge,Ne,at,pt),ce.equals(X)===!1&&(o.clearColor(ge,Ne,at,pt),ce.copy(X))},reset:function(){F=!1,Q=null,ce.set(-1,0,0,0)}}}function r(){let F=!1,X=null,Q=null,ce=null;return{setTest:function(ge){ge?ye(2929):me(2929)},setMask:function(ge){X!==ge&&!F&&(o.depthMask(ge),X=ge)},setFunc:function(ge){if(Q!==ge){switch(ge){case oh:o.depthFunc(512);break;case lh:o.depthFunc(519);break;case ch:o.depthFunc(513);break;case Ia:o.depthFunc(515);break;case uh:o.depthFunc(514);break;case hh:o.depthFunc(518);break;case fh:o.depthFunc(516);break;case dh:o.depthFunc(517);break;default:o.depthFunc(515)}Q=ge}},setLocked:function(ge){F=ge},setClear:function(ge){ce!==ge&&(o.clearDepth(ge),ce=ge)},reset:function(){F=!1,X=null,Q=null,ce=null}}}function a(){let F=!1,X=null,Q=null,ce=null,ge=null,Ne=null,at=null,pt=null,ei=null;return{setTest:function(Ve){F||(Ve?ye(2960):me(2960))},setMask:function(Ve){X!==Ve&&!F&&(o.stencilMask(Ve),X=Ve)},setFunc:function(Ve,bn,$t){(Q!==Ve||ce!==bn||ge!==$t)&&(o.stencilFunc(Ve,bn,$t),Q=Ve,ce=bn,ge=$t)},setOp:function(Ve,bn,$t){(Ne!==Ve||at!==bn||pt!==$t)&&(o.stencilOp(Ve,bn,$t),Ne=Ve,at=bn,pt=$t)},setLocked:function(Ve){F=Ve},setClear:function(Ve){ei!==Ve&&(o.clearStencil(Ve),ei=Ve)},reset:function(){F=!1,X=null,Q=null,ce=null,ge=null,Ne=null,at=null,pt=null,ei=null}}}const s=new i,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,x=!1,S=null,v=null,M=null,y=null,T=null,A=null,_=null,b=!1,L=null,I=null,k=null,D=null,R=null;const U=o.getParameter(35661);let j=!1,Y=0;const V=o.getParameter(7938);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=Y>=2);let K=null,J={};const ue=o.getParameter(3088),G=o.getParameter(2978),$=new He().fromArray(ue),te=new He().fromArray(G);function ne(F,X,Q){const ce=new Uint8Array(4),ge=o.createTexture();o.bindTexture(F,ge),o.texParameteri(F,10241,9728),o.texParameteri(F,10240,9728);for(let Ne=0;Ne<Q;Ne++)o.texImage2D(X+Ne,0,6408,1,1,0,6408,5121,ce);return ge}const H={};H[3553]=ne(3553,3553,1),H[34067]=ne(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(2929),l.setFunc(Ia),Ze(!1),yt(Lo),ye(2884),st(qn);function ye(F){f[F]!==!0&&(o.enable(F),f[F]=!0)}function me(F){f[F]!==!1&&(o.disable(F),f[F]=!1)}function de(F,X){return m[F]!==X?(o.bindFramebuffer(F,X),m[F]=X,n&&(F===36009&&(m[36160]=X),F===36160&&(m[36009]=X)),!0):!1}function le(F,X){let Q=d,ce=!1;if(F)if(Q=g.get(X),Q===void 0&&(Q=[],g.set(X,Q)),F.isWebGLMultipleRenderTargets){const ge=F.texture;if(Q.length!==ge.length||Q[0]!==36064){for(let Ne=0,at=ge.length;Ne<at;Ne++)Q[Ne]=36064+Ne;Q.length=ge.length,ce=!0}}else Q[0]!==36064&&(Q[0]=36064,ce=!0);else Q[0]!==1029&&(Q[0]=1029,ce=!0);ce&&(t.isWebGL2?o.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function ze(F){return p!==F?(o.useProgram(F),p=F,!0):!1}const Se={[qi]:32774,[$u]:32778,[Ku]:32779};if(n)Se[Fo]=32775,Se[Oo]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(Se[Fo]=F.MIN_EXT,Se[Oo]=F.MAX_EXT)}const xe={[Ju]:0,[Qu]:1,[eh]:768,[fc]:770,[ah]:776,[rh]:774,[nh]:772,[th]:769,[dc]:771,[sh]:775,[ih]:773};function st(F,X,Q,ce,ge,Ne,at,pt){if(F===qn){x===!0&&(me(3042),x=!1);return}if(x===!1&&(ye(3042),x=!0),F!==Zu){if(F!==S||pt!==b){if((v!==qi||T!==qi)&&(o.blendEquation(32774),v=qi,T=qi),pt)switch(F){case $i:o.blendFuncSeparate(1,771,1,771);break;case Ro:o.blendFunc(1,1);break;case Do:o.blendFuncSeparate(0,769,0,1);break;case Io:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $i:o.blendFuncSeparate(770,771,1,771);break;case Ro:o.blendFunc(770,1);break;case Do:o.blendFuncSeparate(0,769,0,1);break;case Io:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,y=null,A=null,_=null,S=F,b=pt}return}ge=ge||X,Ne=Ne||Q,at=at||ce,(X!==v||ge!==T)&&(o.blendEquationSeparate(Se[X],Se[ge]),v=X,T=ge),(Q!==M||ce!==y||Ne!==A||at!==_)&&(o.blendFuncSeparate(xe[Q],xe[ce],xe[Ne],xe[at]),M=Q,y=ce,A=Ne,_=at),S=F,b=!1}function dt(F,X){F.side===gn?me(2884):ye(2884);let Q=F.side===Xt;X&&(Q=!Q),Ze(Q),F.blending===$i&&F.transparent===!1?st(qn):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),s.setMask(F.colorWrite);const ce=F.stencilWrite;c.setTest(ce),ce&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ye(32926):me(32926)}function Ze(F){L!==F&&(F?o.frontFace(2304):o.frontFace(2305),L=F)}function yt(F){F!==qu?(ye(2884),F!==I&&(F===Lo?o.cullFace(1029):F===Yu?o.cullFace(1028):o.cullFace(1032))):me(2884),I=F}function Ye(F){F!==k&&(j&&o.lineWidth(F),k=F)}function Oe(F,X,Q){F?(ye(32823),(D!==X||R!==Q)&&(o.polygonOffset(X,Q),D=X,R=Q)):me(32823)}function Zt(F){F?ye(3089):me(3089)}function Tt(F){F===void 0&&(F=33984+U-1),K!==F&&(o.activeTexture(F),K=F)}function C(F,X,Q){Q===void 0&&(K===null?Q=33984+U-1:Q=K);let ce=J[Q];ce===void 0&&(ce={type:void 0,texture:void 0},J[Q]=ce),(ce.type!==F||ce.texture!==X)&&(K!==Q&&(o.activeTexture(Q),K=Q),o.bindTexture(F,X||H[F]),ce.type=F,ce.texture=X)}function w(){const F=J[K];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(F){$.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),$.copy(F))}function fe(F){te.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ae(F,X){let Q=h.get(X);Q===void 0&&(Q=new WeakMap,h.set(X,Q));let ce=Q.get(F);ce===void 0&&(ce=o.getUniformBlockIndex(X,F.name),Q.set(F,ce))}function Pe(F,X){const ce=h.get(X).get(F);u.get(X)!==ce&&(o.uniformBlockBinding(X,ce,F.__bindingPointIndex),u.set(X,ce))}function Ue(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},K=null,J={},m={},g=new WeakMap,d=[],p=null,x=!1,S=null,v=null,M=null,y=null,T=null,A=null,_=null,b=!1,L=null,I=null,k=null,D=null,R=null,$.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:ye,disable:me,bindFramebuffer:de,drawBuffers:le,useProgram:ze,setBlending:st,setMaterial:dt,setFlipSided:Ze,setCullFace:yt,setLineWidth:Ye,setPolygonOffset:Oe,setScissorTest:Zt,activeTexture:Tt,bindTexture:C,unbindTexture:w,compressedTexImage2D:W,compressedTexImage3D:ee,texImage2D:he,texImage3D:ae,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:N,texStorage3D:oe,texSubImage2D:ie,texSubImage3D:se,compressedTexSubImage2D:ve,compressedTexSubImage3D:P,scissor:pe,viewport:fe,reset:Ue}}function Ig(o,e,t,n,i,r,a){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,w){return x?new OffscreenCanvas(C,w):Or("canvas")}function v(C,w,W,ee){let ie=1;if((C.width>ee||C.height>ee)&&(ie=ee/Math.max(C.width,C.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const se=w?Ba:Math.floor,ve=se(ie*C.width),P=se(ie*C.height);d===void 0&&(d=S(ve,P));const N=W?S(ve,P):d;return N.width=ve,N.height=P,N.getContext("2d").drawImage(C,0,0,ve,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ve+"x"+P+")."),N}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function M(C){return cl(C.width)&&cl(C.height)}function y(C){return s?!1:C.wrapS!==Gt||C.wrapT!==Gt||C.minFilter!==ut&&C.minFilter!==ht}function T(C,w){return C.generateMipmaps&&w&&C.minFilter!==ut&&C.minFilter!==ht}function A(C){o.generateMipmap(C)}function _(C,w,W,ee,ie=!1){if(s===!1)return w;if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=w;return w===6403&&(W===5126&&(se=33326),W===5131&&(se=33325),W===5121&&(se=33321)),w===33319&&(W===5126&&(se=33328),W===5131&&(se=33327),W===5121&&(se=33323)),w===6408&&(W===5126&&(se=34836),W===5131&&(se=34842),W===5121&&(se=ee===Ge&&ie===!1?35907:32856),W===32819&&(se=32854),W===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(C,w,W){return T(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==ut&&C.minFilter!==ht?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function L(C){return C===ut||C===No||C===Gs?9728:9729}function I(C){const w=C.target;w.removeEventListener("dispose",I),D(w),w.isVideoTexture&&g.delete(w)}function k(C){const w=C.target;w.removeEventListener("dispose",k),U(w)}function D(C){const w=n.get(C);if(w.__webglInit===void 0)return;const W=C.source,ee=p.get(W);if(ee){const ie=ee[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(C),Object.keys(ee).length===0&&p.delete(W)}n.remove(C)}function R(C){const w=n.get(C);o.deleteTexture(w.__webglTexture);const W=C.source,ee=p.get(W);delete ee[w.__cacheKey],a.memory.textures--}function U(C){const w=C.texture,W=n.get(C),ee=n.get(w);if(ee.__webglTexture!==void 0&&(o.deleteTexture(ee.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(W.__webglFramebuffer[ie]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ie=0;ie<W.__webglColorRenderbuffer.length;ie++)W.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[ie]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,se=w.length;ie<se;ie++){const ve=n.get(w[ie]);ve.__webglTexture&&(o.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(w[ie])}n.remove(w),n.remove(C)}let j=0;function Y(){j=0}function V(){const C=j;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),j+=1,C}function K(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.encoding),w.join()}function J(C,w){const W=n.get(C);if(C.isVideoTexture&&Zt(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(W,C,w);return}}t.bindTexture(3553,W.__webglTexture,33984+w)}function ue(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){me(W,C,w);return}t.bindTexture(35866,W.__webglTexture,33984+w)}function G(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){me(W,C,w);return}t.bindTexture(32879,W.__webglTexture,33984+w)}function $(C,w){const W=n.get(C);if(C.version>0&&W.__version!==C.version){de(W,C,w);return}t.bindTexture(34067,W.__webglTexture,33984+w)}const te={[Na]:10497,[Gt]:33071,[za]:33648},ne={[ut]:9728,[No]:9984,[Gs]:9986,[ht]:9729,[yh]:9985,[sr]:9987};function H(C,w,W){if(W?(o.texParameteri(C,10242,te[w.wrapS]),o.texParameteri(C,10243,te[w.wrapT]),(C===32879||C===35866)&&o.texParameteri(C,32882,te[w.wrapR]),o.texParameteri(C,10240,ne[w.magFilter]),o.texParameteri(C,10241,ne[w.minFilter])):(o.texParameteri(C,10242,33071),o.texParameteri(C,10243,33071),(C===32879||C===35866)&&o.texParameteri(C,32882,33071),(w.wrapS!==Gt||w.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(C,10240,L(w.magFilter)),o.texParameteri(C,10241,L(w.minFilter)),w.minFilter!==ut&&w.minFilter!==ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===ut||w.minFilter!==Gs&&w.minFilter!==sr||w.type===un&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===Fn&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(o.texParameterf(C,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function ye(C,w){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",I));const ee=w.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const se=K(w);if(se!==C.__cacheKey){ie[se]===void 0&&(ie[se]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ie[se].usedTimes++;const ve=ie[C.__cacheKey];ve!==void 0&&(ie[C.__cacheKey].usedTimes--,ve.usedTimes===0&&R(w)),C.__cacheKey=se,C.__webglTexture=ie[se].texture}return W}function me(C,w,W){let ee=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=35866),w.isData3DTexture&&(ee=32879);const ie=ye(C,w),se=w.source;t.bindTexture(ee,C.__webglTexture,33984+W);const ve=n.get(se);if(se.version!==ve.__version||ie===!0){t.activeTexture(33984+W),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const P=y(w)&&M(w.image)===!1;let N=v(w.image,P,!1,u);N=Tt(w,N);const oe=M(N)||s,he=r.convert(w.format,w.encoding);let ae=r.convert(w.type),pe=_(w.internalFormat,he,ae,w.encoding,w.isVideoTexture);H(ee,w,oe);let fe;const Ae=w.mipmaps,Pe=s&&w.isVideoTexture!==!0,Ue=ve.__version===void 0||ie===!0,F=b(w,N,oe);if(w.isDepthTexture)pe=6402,s?w.type===un?pe=36012:w.type===pi?pe=33190:w.type===Ki?pe=35056:pe=33189:w.type===un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===_i&&pe===6402&&w.type!==_c&&w.type!==pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=pi,ae=r.convert(w.type)),w.format===ar&&pe===6402&&(pe=34041,w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ki,ae=r.convert(w.type))),Ue&&(Pe?t.texStorage2D(3553,1,pe,N.width,N.height):t.texImage2D(3553,0,pe,N.width,N.height,0,he,ae,null));else if(w.isDataTexture)if(Ae.length>0&&oe){Pe&&Ue&&t.texStorage2D(3553,F,pe,Ae[0].width,Ae[0].height);for(let X=0,Q=Ae.length;X<Q;X++)fe=Ae[X],Pe?t.texSubImage2D(3553,X,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,X,pe,fe.width,fe.height,0,he,ae,fe.data);w.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,F,pe,N.width,N.height),t.texSubImage2D(3553,0,0,0,N.width,N.height,he,ae,N.data)):t.texImage2D(3553,0,pe,N.width,N.height,0,he,ae,N.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Pe&&Ue&&t.texStorage3D(35866,F,pe,Ae[0].width,Ae[0].height,N.depth);for(let X=0,Q=Ae.length;X<Q;X++)fe=Ae[X],w.format!==cn?he!==null?Pe?t.compressedTexSubImage3D(35866,X,0,0,0,fe.width,fe.height,N.depth,he,fe.data,0,0):t.compressedTexImage3D(35866,X,pe,fe.width,fe.height,N.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(35866,X,0,0,0,fe.width,fe.height,N.depth,he,ae,fe.data):t.texImage3D(35866,X,pe,fe.width,fe.height,N.depth,0,he,ae,fe.data)}else{Pe&&Ue&&t.texStorage2D(3553,F,pe,Ae[0].width,Ae[0].height);for(let X=0,Q=Ae.length;X<Q;X++)fe=Ae[X],w.format!==cn?he!==null?Pe?t.compressedTexSubImage2D(3553,X,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(3553,X,pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(3553,X,0,0,fe.width,fe.height,he,ae,fe.data):t.texImage2D(3553,X,pe,fe.width,fe.height,0,he,ae,fe.data)}else if(w.isDataArrayTexture)Pe?(Ue&&t.texStorage3D(35866,F,pe,N.width,N.height,N.depth),t.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,he,ae,N.data)):t.texImage3D(35866,0,pe,N.width,N.height,N.depth,0,he,ae,N.data);else if(w.isData3DTexture)Pe?(Ue&&t.texStorage3D(32879,F,pe,N.width,N.height,N.depth),t.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,he,ae,N.data)):t.texImage3D(32879,0,pe,N.width,N.height,N.depth,0,he,ae,N.data);else if(w.isFramebufferTexture){if(Ue)if(Pe)t.texStorage2D(3553,F,pe,N.width,N.height);else{let X=N.width,Q=N.height;for(let ce=0;ce<F;ce++)t.texImage2D(3553,ce,pe,X,Q,0,he,ae,null),X>>=1,Q>>=1}}else if(Ae.length>0&&oe){Pe&&Ue&&t.texStorage2D(3553,F,pe,Ae[0].width,Ae[0].height);for(let X=0,Q=Ae.length;X<Q;X++)fe=Ae[X],Pe?t.texSubImage2D(3553,X,0,0,he,ae,fe):t.texImage2D(3553,X,pe,he,ae,fe);w.generateMipmaps=!1}else Pe?(Ue&&t.texStorage2D(3553,F,pe,N.width,N.height),t.texSubImage2D(3553,0,0,0,he,ae,N)):t.texImage2D(3553,0,pe,he,ae,N);T(w,oe)&&A(ee),ve.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function de(C,w,W){if(w.image.length!==6)return;const ee=ye(C,w),ie=w.source;t.bindTexture(34067,C.__webglTexture,33984+W);const se=n.get(ie);if(ie.version!==se.__version||ee===!0){t.activeTexture(33984+W),o.pixelStorei(37440,w.flipY),o.pixelStorei(37441,w.premultiplyAlpha),o.pixelStorei(3317,w.unpackAlignment),o.pixelStorei(37443,0);const ve=w.isCompressedTexture||w.image[0].isCompressedTexture,P=w.image[0]&&w.image[0].isDataTexture,N=[];for(let X=0;X<6;X++)!ve&&!P?N[X]=v(w.image[X],!1,!0,c):N[X]=P?w.image[X].image:w.image[X],N[X]=Tt(w,N[X]);const oe=N[0],he=M(oe)||s,ae=r.convert(w.format,w.encoding),pe=r.convert(w.type),fe=_(w.internalFormat,ae,pe,w.encoding),Ae=s&&w.isVideoTexture!==!0,Pe=se.__version===void 0||ee===!0;let Ue=b(w,oe,he);H(34067,w,he);let F;if(ve){Ae&&Pe&&t.texStorage2D(34067,Ue,fe,oe.width,oe.height);for(let X=0;X<6;X++){F=N[X].mipmaps;for(let Q=0;Q<F.length;Q++){const ce=F[Q];w.format!==cn?ae!==null?Ae?t.compressedTexSubImage2D(34069+X,Q,0,0,ce.width,ce.height,ae,ce.data):t.compressedTexImage2D(34069+X,Q,fe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?t.texSubImage2D(34069+X,Q,0,0,ce.width,ce.height,ae,pe,ce.data):t.texImage2D(34069+X,Q,fe,ce.width,ce.height,0,ae,pe,ce.data)}}}else{F=w.mipmaps,Ae&&Pe&&(F.length>0&&Ue++,t.texStorage2D(34067,Ue,fe,N[0].width,N[0].height));for(let X=0;X<6;X++)if(P){Ae?t.texSubImage2D(34069+X,0,0,0,N[X].width,N[X].height,ae,pe,N[X].data):t.texImage2D(34069+X,0,fe,N[X].width,N[X].height,0,ae,pe,N[X].data);for(let Q=0;Q<F.length;Q++){const ge=F[Q].image[X].image;Ae?t.texSubImage2D(34069+X,Q+1,0,0,ge.width,ge.height,ae,pe,ge.data):t.texImage2D(34069+X,Q+1,fe,ge.width,ge.height,0,ae,pe,ge.data)}}else{Ae?t.texSubImage2D(34069+X,0,0,0,ae,pe,N[X]):t.texImage2D(34069+X,0,fe,ae,pe,N[X]);for(let Q=0;Q<F.length;Q++){const ce=F[Q];Ae?t.texSubImage2D(34069+X,Q+1,0,0,ae,pe,ce.image[X]):t.texImage2D(34069+X,Q+1,fe,ae,pe,ce.image[X])}}}T(w,he)&&A(34067),se.__version=ie.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function le(C,w,W,ee,ie){const se=r.convert(W.format,W.encoding),ve=r.convert(W.type),P=_(W.internalFormat,se,ve,W.encoding);n.get(w).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,P,w.width,w.height,w.depth,0,se,ve,null):t.texImage2D(ie,0,P,w.width,w.height,0,se,ve,null)),t.bindFramebuffer(36160,C),Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(W).__webglTexture,0,Ye(w)):(ie===3553||ie>=34069&&ie<=34074)&&o.framebufferTexture2D(36160,ee,ie,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(C,w,W){if(o.bindRenderbuffer(36161,C),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(W||Oe(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===un?ee=36012:ie.type===pi&&(ee=33190));const se=Ye(w);Oe(w)?f.renderbufferStorageMultisampleEXT(36161,se,ee,w.width,w.height):o.renderbufferStorageMultisample(36161,se,ee,w.width,w.height)}else o.renderbufferStorage(36161,ee,w.width,w.height);o.framebufferRenderbuffer(36160,36096,36161,C)}else if(w.depthBuffer&&w.stencilBuffer){const ee=Ye(w);W&&Oe(w)===!1?o.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):Oe(w)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):o.renderbufferStorage(36161,34041,w.width,w.height),o.framebufferRenderbuffer(36160,33306,36161,C)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<ee.length;ie++){const se=ee[ie],ve=r.convert(se.format,se.encoding),P=r.convert(se.type),N=_(se.internalFormat,ve,P,se.encoding),oe=Ye(w);W&&Oe(w)===!1?o.renderbufferStorageMultisample(36161,oe,N,w.width,w.height):Oe(w)?f.renderbufferStorageMultisampleEXT(36161,oe,N,w.width,w.height):o.renderbufferStorage(36161,N,w.width,w.height)}}o.bindRenderbuffer(36161,null)}function Se(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const ee=n.get(w.depthTexture).__webglTexture,ie=Ye(w);if(w.depthTexture.format===_i)Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):o.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===ar)Oe(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):o.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function xe(C){const w=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Se(w.__webglFramebuffer,C)}else if(W){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=o.createRenderbuffer(),ze(w.__webglDepthbuffer[ee],C,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),ze(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function st(C,w,W){const ee=n.get(C);w!==void 0&&le(ee.__webglFramebuffer,C,C.texture,36064,3553),W!==void 0&&xe(C)}function dt(C){const w=C.texture,W=n.get(C),ee=n.get(w);C.addEventListener("dispose",k),C.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=w.version,a.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,ve=M(C)||s;if(ie){W.__webglFramebuffer=[];for(let P=0;P<6;P++)W.__webglFramebuffer[P]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),se)if(i.drawBuffers){const P=C.texture;for(let N=0,oe=P.length;N<oe;N++){const he=n.get(P[N]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&Oe(C)===!1){const P=se?w:[w];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let N=0;N<P.length;N++){const oe=P[N];W.__webglColorRenderbuffer[N]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[N]);const he=r.convert(oe.format,oe.encoding),ae=r.convert(oe.type),pe=_(oe.internalFormat,he,ae,oe.encoding,C.isXRRenderTarget===!0),fe=Ye(C);o.renderbufferStorageMultisample(36161,fe,pe,C.width,C.height),o.framebufferRenderbuffer(36160,36064+N,36161,W.__webglColorRenderbuffer[N])}o.bindRenderbuffer(36161,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),ze(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),H(34067,w,ve);for(let P=0;P<6;P++)le(W.__webglFramebuffer[P],C,w,36064,34069+P);T(w,ve)&&A(34067),t.unbindTexture()}else if(se){const P=C.texture;for(let N=0,oe=P.length;N<oe;N++){const he=P[N],ae=n.get(he);t.bindTexture(3553,ae.__webglTexture),H(3553,he,ve),le(W.__webglFramebuffer,C,he,36064+N,3553),T(he,ve)&&A(3553)}t.unbindTexture()}else{let P=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?P=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(P,ee.__webglTexture),H(P,w,ve),le(W.__webglFramebuffer,C,w,36064,P),T(w,ve)&&A(P),t.unbindTexture()}C.depthBuffer&&xe(C)}function Ze(C){const w=M(C)||s,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ee=0,ie=W.length;ee<ie;ee++){const se=W[ee];if(T(se,w)){const ve=C.isWebGLCubeRenderTarget?34067:3553,P=n.get(se).__webglTexture;t.bindTexture(ve,P),A(ve),t.unbindTexture()}}}function yt(C){if(s&&C.samples>0&&Oe(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,ee=C.height;let ie=16384;const se=[],ve=C.stencilBuffer?33306:36096,P=n.get(C),N=C.isWebGLMultipleRenderTargets===!0;if(N)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,null),t.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,null,0);t.bindFramebuffer(36008,P.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,P.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){se.push(36064+oe),C.depthBuffer&&se.push(ve);const he=P.__ignoreDepthValues!==void 0?P.__ignoreDepthValues:!1;if(he===!1&&(C.depthBuffer&&(ie|=256),C.stencilBuffer&&(ie|=1024)),N&&o.framebufferRenderbuffer(36008,36064,36161,P.__webglColorRenderbuffer[oe]),he===!0&&(o.invalidateFramebuffer(36008,[ve]),o.invalidateFramebuffer(36009,[ve])),N){const ae=n.get(w[oe]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ae,0)}o.blitFramebuffer(0,0,W,ee,0,0,W,ee,ie,9728),m&&o.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),N)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+oe,36161,P.__webglColorRenderbuffer[oe]);const he=n.get(w[oe]).__webglTexture;t.bindFramebuffer(36160,P.__webglFramebuffer),o.framebufferTexture2D(36009,36064+oe,3553,he,0)}t.bindFramebuffer(36009,P.__webglMultisampledFramebuffer)}}function Ye(C){return Math.min(h,C.samples)}function Oe(C){const w=n.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Zt(C){const w=a.render.frame;g.get(C)!==w&&(g.set(C,w),C.update())}function Tt(C,w){const W=C.encoding,ee=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Ua||W!==$n&&(W===Ge?s===!1?e.has("EXT_sRGB")===!0&&ee===cn?(C.format=Ua,C.minFilter=ht,C.generateMipmaps=!1):w=Mc.sRGBToLinear(w):(ee!==cn||ie!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),w}this.allocateTextureUnit=V,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=ue,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=st,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Oe}function Fg(o,e,t){const n=t.isWebGL2;function i(r,a=null){let s;if(r===bi)return 5121;if(r===wh)return 32819;if(r===Th)return 32820;if(r===Mh)return 5120;if(r===bh)return 5122;if(r===_c)return 5123;if(r===Sh)return 5124;if(r===pi)return 5125;if(r===un)return 5126;if(r===Fn)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Eh)return 6406;if(r===cn)return 6408;if(r===Ah)return 6409;if(r===Ch)return 6410;if(r===_i)return 6402;if(r===ar)return 34041;if(r===Ua)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Ph)return 6403;if(r===Lh)return 36244;if(r===Rh)return 33319;if(r===Dh)return 33320;if(r===Ih)return 36249;if(r===Vs||r===Hs||r===Ws||r===Xs)if(a===Ge)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zo||r===Uo||r===Bo||r===ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===zo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Go||r===Vo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Go)return a===Ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Vo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ho||r===Wo||r===Xo||r===qo||r===Yo||r===jo||r===Zo||r===$o||r===Ko||r===Jo||r===Qo||r===el||r===tl||r===nl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Ho)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$o)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ko)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qo)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===el)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===tl)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nl)return a===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===qs)return a===Ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Oh||r===il||r===rl||r===sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===qs)return s.COMPRESSED_RED_RGTC1_EXT;if(r===il)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ki?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Og extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ng={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n),x=this._getHandJoint(c,d);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zg extends wt{constructor(e,t,n,i,r,a,s,l,c,u){if(u=u!==void 0?u:_i,u!==_i&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_i&&(n=pi),n===void 0&&u===ar&&(n=Ki),super(null,i,r,a,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}class Ug extends Ai{constructor(e,t){super();const n=this;let i=null,r=1,a=null,s="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const d=t.getContextAttributes();let p=null,x=null;const S=[],v=[],M=new Set,y=new Map,T=new kt;T.layers.enable(1),T.viewport=new He;const A=new kt;A.layers.enable(2),A.viewport=new He;const _=[T,A],b=new Og;b.layers.enable(1),b.layers.enable(2);let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=S[G];return $===void 0&&($=new va,S[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=S[G];return $===void 0&&($=new va,S[G]=$),$.getGripSpace()},this.getHand=function(G){let $=S[G];return $===void 0&&($=new va,S[G]=$),$.getHandSpace()};function k(G){const $=v.indexOf(G.inputSource);if($===-1)return;const te=S[$];te!==void 0&&te.dispatchEvent({type:G.type,data:G.inputSource})}function D(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",R);for(let G=0;G<S.length;G++){const $=v[G];$!==null&&(v[G]=null,S[G].disconnect($))}L=null,I=null,e.setRenderTarget(p),m=null,f=null,h=null,i=null,x=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",D),i.addEventListener("inputsourceschange",R),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),x=new Si(m.framebufferWidth,m.framebufferHeight,{format:cn,type:bi,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let $=null,te=null,ne=null;d.depth&&(ne=d.stencil?35056:33190,$=d.stencil?ar:_i,te=d.stencil?Ki:pi);const H={colorFormat:32856,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(H),i.updateRenderState({layers:[f]}),x=new Si(f.textureWidth,f.textureHeight,{format:cn,type:bi,depthTexture:new zg(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const ye=e.properties.get(x);ye.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(s),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(G){for(let $=0;$<G.removed.length;$++){const te=G.removed[$],ne=v.indexOf(te);ne>=0&&(v[ne]=null,S[ne].disconnect(te))}for(let $=0;$<G.added.length;$++){const te=G.added[$];let ne=v.indexOf(te);if(ne===-1){for(let ye=0;ye<S.length;ye++)if(ye>=v.length){v.push(te),ne=ye;break}else if(v[ye]===null){v[ye]=te,ne=ye;break}if(ne===-1)break}const H=S[ne];H&&H.connect(te)}}const U=new O,j=new O;function Y(G,$,te){U.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(te.matrixWorld);const ne=U.distanceTo(j),H=$.projectionMatrix.elements,ye=te.projectionMatrix.elements,me=H[14]/(H[10]-1),de=H[14]/(H[10]+1),le=(H[9]+1)/H[5],ze=(H[9]-1)/H[5],Se=(H[8]-1)/H[0],xe=(ye[8]+1)/ye[0],st=me*Se,dt=me*xe,Ze=ne/(-Se+xe),yt=Ze*-Se;$.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(yt),G.translateZ(Ze),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Ye=me+Ze,Oe=de+Ze,Zt=st-yt,Tt=dt+(ne-yt),C=le*de/Oe*Ye,w=ze*de/Oe*Ye;G.projectionMatrix.makePerspective(Zt,Tt,C,w,Ye,Oe)}function V(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;b.near=A.near=T.near=G.near,b.far=A.far=T.far=G.far,(L!==b.near||I!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,I=b.far);const $=G.parent,te=b.cameras;V(b,$);for(let H=0;H<te.length;H++)V(te[H],$);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),G.matrix.copy(b.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const ne=G.children;for(let H=0,ye=ne.length;H<ye;H++)ne[H].updateMatrixWorld(!0);te.length===2?Y(b,T,A):b.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.getPlanes=function(){return M};let K=null;function J(G,$){if(u=$.getViewerPose(c||a),g=$,u!==null){const te=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let ne=!1;te.length!==b.cameras.length&&(b.cameras.length=0,ne=!0);for(let H=0;H<te.length;H++){const ye=te[H];let me=null;if(m!==null)me=m.getViewport(ye);else{const le=h.getViewSubImage(f,ye);me=le.viewport,H===0&&(e.setRenderTargetTextures(x,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(x))}let de=_[H];de===void 0&&(de=new kt,de.layers.enable(H),de.viewport=new He,_[H]=de),de.matrix.fromArray(ye.transform.matrix),de.projectionMatrix.fromArray(ye.projectionMatrix),de.viewport.set(me.x,me.y,me.width,me.height),H===0&&b.matrix.copy(de.matrix),ne===!0&&b.cameras.push(de)}}for(let te=0;te<S.length;te++){const ne=v[te],H=S[te];ne!==null&&H!==void 0&&H.update(ne,$,c||a)}if(K&&K(G,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let te=null;for(const ne of M)$.detectedPlanes.has(ne)||(te===null&&(te=[]),te.push(ne));if(te!==null)for(const ne of te)M.delete(ne),y.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of $.detectedPlanes)if(!M.has(ne))M.add(ne),y.set(ne,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const H=y.get(ne);ne.lastChangedTime>H&&(y.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const ue=new Rc;ue.setAnimationLoop(J),this.setAnimationLoop=function(G){K=G},this.dispose=function(){}}}function Bg(o,e){function t(d,p){p.color.getRGB(d.fogColor.value,Cc(o)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,x,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,v)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,x,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Xt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Xt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=e.get(p).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const M=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,x,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Xt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function kg(o,e,t,n){let i={},r={},a=[];const s=t.isWebGL2?o.getParameter(35375):0;function l(S,v){const M=v.program;n.uniformBlockBinding(S,M)}function c(S,v){let M=i[S.id];M===void 0&&(g(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(S,y);const T=e.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function u(S){const v=h();S.__bindingPointIndex=v;const M=o.createBuffer(),y=S.__size,T=S.usage;return o.bindBuffer(35345,M),o.bufferData(35345,y,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,v,M),M}function h(){for(let S=0;S<s;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const v=i[S.id],M=S.uniforms,y=S.__cache;o.bindBuffer(35345,v);for(let T=0,A=M.length;T<A;T++){const _=M[T];if(m(_,T,y)===!0){const b=_.__offset,L=Array.isArray(_.value)?_.value:[_.value];let I=0;for(let k=0;k<L.length;k++){const D=L[k],R=d(D);typeof D=="number"?(_.__data[0]=D,o.bufferSubData(35345,b+I,_.__data)):D.isMatrix3?(_.__data[0]=D.elements[0],_.__data[1]=D.elements[1],_.__data[2]=D.elements[2],_.__data[3]=D.elements[0],_.__data[4]=D.elements[3],_.__data[5]=D.elements[4],_.__data[6]=D.elements[5],_.__data[7]=D.elements[0],_.__data[8]=D.elements[6],_.__data[9]=D.elements[7],_.__data[10]=D.elements[8],_.__data[11]=D.elements[0]):(D.toArray(_.__data,I),I+=R.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,b,_.__data)}}o.bindBuffer(35345,null)}function m(S,v,M){const y=S.value;if(M[v]===void 0){if(typeof y=="number")M[v]=y;else{const T=Array.isArray(y)?y:[y],A=[];for(let _=0;_<T.length;_++)A.push(T[_].clone());M[v]=A}return!0}else if(typeof y=="number"){if(M[v]!==y)return M[v]=y,!0}else{const T=Array.isArray(M[v])?M[v]:[M[v]],A=Array.isArray(y)?y:[y];for(let _=0;_<T.length;_++){const b=T[_];if(b.equals(A[_])===!1)return b.copy(A[_]),!0}}return!1}function g(S){const v=S.uniforms;let M=0;const y=16;let T=0;for(let A=0,_=v.length;A<_;A++){const b=v[A],L={boundary:0,storage:0},I=Array.isArray(b.value)?b.value:[b.value];for(let k=0,D=I.length;k<D;k++){const R=I[k],U=d(R);L.boundary+=U.boundary,L.storage+=U.storage}if(b.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,A>0){T=M%y;const k=y-T;T!==0&&k-L.boundary<0&&(M+=y-T,b.__offset=M)}M+=L.storage}return T=M%y,T>0&&(M+=y-T),S.__size=M,S.__cache={},this}function d(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),o.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function x(){for(const S in i)o.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:x}}function Gg(){const o=Or("canvas");return o.style.display="block",o}function Nc(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:Gg(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=$n,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const d=this;let p=!1,x=0,S=0,v=null,M=-1,y=null;const T=new He,A=new He;let _=null,b=e.width,L=e.height,I=1,k=null,D=null;const R=new He(0,0,b,L),U=new He(0,0,b,L);let j=!1;const Y=new ao;let V=!1,K=!1,J=null;const ue=new et,G=new be,$=new O,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return v===null?I:1}let H=t;function ye(E,B){for(let q=0;q<E.length;q++){const z=E[q],Z=e.getContext(z,B);if(Z!==null)return Z}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${io}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Ae,!1),H===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),H=ye(B,E),H===null)throw ye(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let me,de,le,ze,Se,xe,st,dt,Ze,yt,Ye,Oe,Zt,Tt,C,w,W,ee,ie,se,ve,P,N,oe;function he(){me=new Jp(H),de=new Xp(H,me,o),me.init(de),P=new Fg(H,me,de),le=new Dg(H,me,de),ze=new tm,Se=new xg,xe=new Ig(H,me,le,Se,de,P,ze),st=new Yp(d),dt=new Kp(d),Ze=new cf(H,de),N=new Hp(H,me,Ze,de),yt=new Qp(H,Ze,ze,N),Ye=new sm(H,yt,Ze,ze),ie=new rm(H,de,xe),w=new qp(Se),Oe=new _g(d,st,dt,me,de,N,w),Zt=new Bg(d,Se),Tt=new yg,C=new Eg(me,de),ee=new Vp(d,st,dt,le,Ye,u,a),W=new Rg(d,Ye,de),oe=new kg(H,ze,de,le),se=new Wp(H,me,ze,de),ve=new em(H,me,ze,de),ze.programs=Oe.programs,d.capabilities=de,d.extensions=me,d.properties=Se,d.renderLists=Tt,d.shadowMap=W,d.state=le,d.info=ze}he();const ae=new Ug(d,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=me.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=me.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(E){E!==void 0&&(I=E,this.setSize(b,L,!1))},this.getSize=function(E){return E.set(b,L)},this.setSize=function(E,B,q){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,L=B,e.width=Math.floor(E*I),e.height=Math.floor(B*I),q!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(b*I,L*I).floor()},this.setDrawingBufferSize=function(E,B,q){b=E,L=B,I=q,e.width=Math.floor(E*q),e.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,B,q,z){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,B,q,z),le.viewport(T.copy(R).multiplyScalar(I).floor())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,B,q,z){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,B,q,z),le.scissor(A.copy(U).multiplyScalar(I).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){le.setScissorTest(j=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){D=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,B=!0,q=!0){let z=0;E&&(z|=16384),B&&(z|=256),q&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Ae,!1),Tt.dispose(),C.dispose(),Se.dispose(),st.dispose(),dt.dispose(),Ye.dispose(),N.dispose(),oe.dispose(),Oe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ce),ae.removeEventListener("sessionend",ge),J&&(J.dispose(),J=null),Ne.stop()};function pe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=ze.autoReset,B=W.enabled,q=W.autoUpdate,z=W.needsUpdate,Z=W.type;he(),ze.autoReset=E,W.enabled=B,W.autoUpdate=q,W.needsUpdate=z,W.type=Z}function Ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){const B=E.target;B.removeEventListener("dispose",Pe),Ue(B)}function Ue(E){F(E),Se.remove(E)}function F(E){const B=Se.get(E).programs;B!==void 0&&(B.forEach(function(q){Oe.releaseProgram(q)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,z,Z,_e){B===null&&(B=te);const Me=Z.isMesh&&Z.matrixWorld.determinant()<0,Te=Vu(E,B,q,z,Z);le.setMaterial(z,Me);let Ee=q.index,Ie=1;z.wireframe===!0&&(Ee=yt.getWireframeAttribute(q),Ie=2);const Le=q.drawRange,Re=q.attributes.position;let $e=Le.start*Ie,It=(Le.start+Le.count)*Ie;_e!==null&&($e=Math.max($e,_e.start*Ie),It=Math.min(It,(_e.start+_e.count)*Ie)),Ee!==null?($e=Math.max($e,0),It=Math.min(It,Ee.count)):Re!=null&&($e=Math.max($e,0),It=Math.min(It,Re.count));const Sn=It-$e;if(Sn<0||Sn===1/0)return;N.setup(Z,z,Te,q,Ee);let ti,Ke=se;if(Ee!==null&&(ti=Ze.get(Ee),Ke=ve,Ke.setIndex(ti)),Z.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*ne()),Ke.setMode(1)):Ke.setMode(4);else if(Z.isLine){let De=z.linewidth;De===void 0&&(De=1),le.setLineWidth(De*ne()),Z.isLineSegments?Ke.setMode(1):Z.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else Z.isPoints?Ke.setMode(0):Z.isSprite&&Ke.setMode(4);if(Z.isInstancedMesh)Ke.renderInstances($e,Sn,Z.count);else if(q.isInstancedBufferGeometry){const De=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zs=Math.min(q.instanceCount,De);Ke.renderInstances($e,Sn,zs)}else Ke.render($e,Sn)},this.compile=function(E,B){function q(z,Z,_e){z.transparent===!0&&z.side===gn&&z.forceSinglePass===!1?(z.side=Xt,z.needsUpdate=!0,$t(z,Z,_e),z.side=Zn,z.needsUpdate=!0,$t(z,Z,_e),z.side=gn):$t(z,Z,_e)}f=C.get(E),f.init(),g.push(f),E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(z){const Z=z.material;if(Z)if(Array.isArray(Z))for(let _e=0;_e<Z.length;_e++){const Me=Z[_e];q(Me,E,z)}else q(Z,E,z)}),g.pop(),f=null};let X=null;function Q(E){X&&X(E)}function ce(){Ne.stop()}function ge(){Ne.start()}const Ne=new Rc;Ne.setAnimationLoop(Q),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(E){X=E,ae.setAnimationLoop(E),E===null?Ne.stop():Ne.start()},ae.addEventListener("sessionstart",ce),ae.addEventListener("sessionend",ge),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,B,v),f=C.get(E,g.length),f.init(),g.push(f),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix(ue),K=this.localClippingEnabled,V=w.init(this.clippingPlanes,K),h=Tt.get(E,m.length),h.init(),m.push(h),at(E,B,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(k,D),V===!0&&w.beginShadows();const q=f.state.shadowsArray;if(W.render(q,E,B),V===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,E),f.setupLights(d.physicallyCorrectLights),B.isArrayCamera){const z=B.cameras;for(let Z=0,_e=z.length;Z<_e;Z++){const Me=z[Z];pt(h,E,Me,Me.viewport)}}else pt(h,E,B);v!==null&&(xe.updateMultisampleRenderTarget(v),xe.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(d,E,B),N.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function at(E,B,q,z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){z&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const Me=Ye.update(E),Te=E.material;Te.visible&&h.push(E,Me,Te,q,$.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ze.render.frame&&(E.skeleton.update(),E.skeleton.frame=ze.render.frame),!E.frustumCulled||Y.intersectsObject(E))){z&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const Me=Ye.update(E),Te=E.material;if(Array.isArray(Te)){const Ee=Me.groups;for(let Ie=0,Le=Ee.length;Ie<Le;Ie++){const Re=Ee[Ie],$e=Te[Re.materialIndex];$e&&$e.visible&&h.push(E,Me,$e,q,$.z,Re)}}else Te.visible&&h.push(E,Me,Te,q,$.z,null)}}const _e=E.children;for(let Me=0,Te=_e.length;Me<Te;Me++)at(_e[Me],B,q,z)}function pt(E,B,q,z){const Z=E.opaque,_e=E.transmissive,Me=E.transparent;f.setupLightsView(q),V===!0&&w.setGlobalState(d.clippingPlanes,q),_e.length>0&&ei(Z,B,q),z&&le.viewport(T.copy(z)),Z.length>0&&Ve(Z,B,q),_e.length>0&&Ve(_e,B,q),Me.length>0&&Ve(Me,B,q),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function ei(E,B,q){const z=de.isWebGL2;J===null&&(J=new Si(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?Fn:bi,minFilter:sr,samples:z&&r===!0?4:0})),d.getDrawingBufferSize(G),z?J.setSize(G.x,G.y):J.setSize(Ba(G.x),Ba(G.y));const Z=d.getRenderTarget();d.setRenderTarget(J),d.clear();const _e=d.toneMapping;d.toneMapping=On,Ve(E,B,q),d.toneMapping=_e,xe.updateMultisampleRenderTarget(J),xe.updateRenderTargetMipmap(J),d.setRenderTarget(Z)}function Ve(E,B,q){const z=B.isScene===!0?B.overrideMaterial:null;for(let Z=0,_e=E.length;Z<_e;Z++){const Me=E[Z],Te=Me.object,Ee=Me.geometry,Ie=z===null?Me.material:z,Le=Me.group;Te.layers.test(q.layers)&&bn(Te,B,q,Ee,Ie,Le)}}function bn(E,B,q,z,Z,_e){E.onBeforeRender(d,B,q,z,Z,_e),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(d,B,q,z,E,_e),Z.transparent===!0&&Z.side===gn&&Z.forceSinglePass===!1?(Z.side=Xt,Z.needsUpdate=!0,d.renderBufferDirect(q,B,z,Z,E,_e),Z.side=Zn,Z.needsUpdate=!0,d.renderBufferDirect(q,B,z,Z,E,_e),Z.side=gn):d.renderBufferDirect(q,B,z,Z,E,_e),E.onAfterRender(d,B,q,z,Z,_e)}function $t(E,B,q){B.isScene!==!0&&(B=te);const z=Se.get(E),Z=f.state.lights,_e=f.state.shadowsArray,Me=Z.state.version,Te=Oe.getParameters(E,Z.state,_e,B,q),Ee=Oe.getProgramCacheKey(Te);let Ie=z.programs;z.environment=E.isMeshStandardMaterial?B.environment:null,z.fog=B.fog,z.envMap=(E.isMeshStandardMaterial?dt:st).get(E.envMap||z.environment),Ie===void 0&&(E.addEventListener("dispose",Pe),Ie=new Map,z.programs=Ie);let Le=Ie.get(Ee);if(Le!==void 0){if(z.currentProgram===Le&&z.lightsStateVersion===Me)return Ao(E,Te),Le}else Te.uniforms=Oe.getUniforms(E),E.onBuild(q,Te,d),E.onBeforeCompile(Te,d),Le=Oe.acquireProgram(Te,Ee),Ie.set(Ee,Le),z.uniforms=Te.uniforms;const Re=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=w.uniform),Ao(E,Te),z.needsLights=Wu(E),z.lightsStateVersion=Me,z.needsLights&&(Re.ambientLightColor.value=Z.state.ambient,Re.lightProbe.value=Z.state.probe,Re.directionalLights.value=Z.state.directional,Re.directionalLightShadows.value=Z.state.directionalShadow,Re.spotLights.value=Z.state.spot,Re.spotLightShadows.value=Z.state.spotShadow,Re.rectAreaLights.value=Z.state.rectArea,Re.ltc_1.value=Z.state.rectAreaLTC1,Re.ltc_2.value=Z.state.rectAreaLTC2,Re.pointLights.value=Z.state.point,Re.pointLightShadows.value=Z.state.pointShadow,Re.hemisphereLights.value=Z.state.hemi,Re.directionalShadowMap.value=Z.state.directionalShadowMap,Re.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Re.spotShadowMap.value=Z.state.spotShadowMap,Re.spotLightMatrix.value=Z.state.spotLightMatrix,Re.spotLightMap.value=Z.state.spotLightMap,Re.pointShadowMap.value=Z.state.pointShadowMap,Re.pointShadowMatrix.value=Z.state.pointShadowMatrix);const $e=Le.getUniforms(),It=ms.seqWithValue($e.seq,Re);return z.currentProgram=Le,z.uniformsList=It,Le}function Ao(E,B){const q=Se.get(E);q.outputEncoding=B.outputEncoding,q.instancing=B.instancing,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Vu(E,B,q,z,Z){B.isScene!==!0&&(B=te),xe.resetTextureUnits();const _e=B.fog,Me=z.isMeshStandardMaterial?B.environment:null,Te=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:$n,Ee=(z.isMeshStandardMaterial?dt:st).get(z.envMap||Me),Ie=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Le=!!z.normalMap&&!!q.attributes.tangent,Re=!!q.morphAttributes.position,$e=!!q.morphAttributes.normal,It=!!q.morphAttributes.color,Sn=z.toneMapped?d.toneMapping:On,ti=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ke=ti!==void 0?ti.length:0,De=Se.get(z),zs=f.state.lights;if(V===!0&&(K===!0||E!==y)){const Ft=E===y&&z.id===M;w.setState(z,E,Ft)}let ot=!1;z.version===De.__version?(De.needsLights&&De.lightsStateVersion!==zs.state.version||De.outputEncoding!==Te||Z.isInstancedMesh&&De.instancing===!1||!Z.isInstancedMesh&&De.instancing===!0||Z.isSkinnedMesh&&De.skinning===!1||!Z.isSkinnedMesh&&De.skinning===!0||De.envMap!==Ee||z.fog===!0&&De.fog!==_e||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==w.numPlanes||De.numIntersection!==w.numIntersection)||De.vertexAlphas!==Ie||De.vertexTangents!==Le||De.morphTargets!==Re||De.morphNormals!==$e||De.morphColors!==It||De.toneMapping!==Sn||de.isWebGL2===!0&&De.morphTargetsCount!==Ke)&&(ot=!0):(ot=!0,De.__version=z.version);let ni=De.currentProgram;ot===!0&&(ni=$t(z,B,Z));let Co=!1,gr=!1,Us=!1;const Mt=ni.getUniforms(),ii=De.uniforms;if(le.useProgram(ni.program)&&(Co=!0,gr=!0,Us=!0),z.id!==M&&(M=z.id,gr=!0),Co||y!==E){if(Mt.setValue(H,"projectionMatrix",E.projectionMatrix),de.logarithmicDepthBuffer&&Mt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,gr=!0,Us=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Ft=Mt.map.cameraPosition;Ft!==void 0&&Ft.setValue(H,$.setFromMatrixPosition(E.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||Z.isSkinnedMesh)&&Mt.setValue(H,"viewMatrix",E.matrixWorldInverse)}if(Z.isSkinnedMesh){Mt.setOptional(H,Z,"bindMatrix"),Mt.setOptional(H,Z,"bindMatrixInverse");const Ft=Z.skeleton;Ft&&(de.floatVertexTextures?(Ft.boneTexture===null&&Ft.computeBoneTexture(),Mt.setValue(H,"boneTexture",Ft.boneTexture,xe),Mt.setValue(H,"boneTextureSize",Ft.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Bs=q.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0&&de.isWebGL2===!0)&&ie.update(Z,q,z,ni),(gr||De.receiveShadow!==Z.receiveShadow)&&(De.receiveShadow=Z.receiveShadow,Mt.setValue(H,"receiveShadow",Z.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ii.envMap.value=Ee,ii.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),gr&&(Mt.setValue(H,"toneMappingExposure",d.toneMappingExposure),De.needsLights&&Hu(ii,Us),_e&&z.fog===!0&&Zt.refreshFogUniforms(ii,_e),Zt.refreshMaterialUniforms(ii,z,I,L,J),ms.upload(H,De.uniformsList,ii,xe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ms.upload(H,De.uniformsList,ii,xe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(H,"center",Z.center),Mt.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Mt.setValue(H,"normalMatrix",Z.normalMatrix),Mt.setValue(H,"modelMatrix",Z.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ft=z.uniformsGroups;for(let ks=0,Xu=Ft.length;ks<Xu;ks++)if(de.isWebGL2){const Po=Ft[ks];oe.update(Po,ni),oe.bind(Po,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function Hu(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Wu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,B,q){Se.get(E.texture).__webglTexture=B,Se.get(E.depthTexture).__webglTexture=q;const z=Se.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=q===void 0,z.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const q=Se.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,q=0){v=E,x=B,S=q;let z=!0,Z=null,_e=!1,Me=!1;if(E){const Ee=Se.get(E);Ee.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),z=!1):Ee.__webglFramebuffer===void 0?xe.setupRenderTarget(E):Ee.__hasExternalTextures&&xe.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Me=!0);const Le=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Z=Le[B],_e=!0):de.isWebGL2&&E.samples>0&&xe.useMultisampledRTT(E)===!1?Z=Se.get(E).__webglMultisampledFramebuffer:Z=Le,T.copy(E.viewport),A.copy(E.scissor),_=E.scissorTest}else T.copy(R).multiplyScalar(I).floor(),A.copy(U).multiplyScalar(I).floor(),_=j;if(le.bindFramebuffer(36160,Z)&&de.drawBuffers&&z&&le.drawBuffers(E,Z),le.viewport(T),le.scissor(A),le.setScissorTest(_),_e){const Ee=Se.get(E.texture);H.framebufferTexture2D(36160,36064,34069+B,Ee.__webglTexture,q)}else if(Me){const Ee=Se.get(E.texture),Ie=B||0;H.framebufferTextureLayer(36160,36064,Ee.__webglTexture,q||0,Ie)}M=-1},this.readRenderTargetPixels=function(E,B,q,z,Z,_e,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){le.bindFramebuffer(36160,Te);try{const Ee=E.texture,Ie=Ee.format,Le=Ee.type;if(Ie!==cn&&P.convert(Ie)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Le===Fn&&(me.has("EXT_color_buffer_half_float")||de.isWebGL2&&me.has("EXT_color_buffer_float"));if(Le!==bi&&P.convert(Le)!==H.getParameter(35738)&&!(Le===un&&(de.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-z&&q>=0&&q<=E.height-Z&&H.readPixels(B,q,z,Z,P.convert(Ie),P.convert(Le),_e)}finally{const Ee=v!==null?Se.get(v).__webglFramebuffer:null;le.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(E,B,q=0){const z=Math.pow(2,-q),Z=Math.floor(B.image.width*z),_e=Math.floor(B.image.height*z);xe.setTexture2D(B,0),H.copyTexSubImage2D(3553,q,0,0,E.x,E.y,Z,_e),le.unbindTexture()},this.copyTextureToTexture=function(E,B,q,z=0){const Z=B.image.width,_e=B.image.height,Me=P.convert(q.format),Te=P.convert(q.type);xe.setTexture2D(q,0),H.pixelStorei(37440,q.flipY),H.pixelStorei(37441,q.premultiplyAlpha),H.pixelStorei(3317,q.unpackAlignment),B.isDataTexture?H.texSubImage2D(3553,z,E.x,E.y,Z,_e,Me,Te,B.image.data):B.isCompressedTexture?H.compressedTexSubImage2D(3553,z,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Me,B.mipmaps[0].data):H.texSubImage2D(3553,z,E.x,E.y,Me,Te,B.image),z===0&&q.generateMipmaps&&H.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,B,q,z,Z=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,Te=E.max.z-E.min.z+1,Ee=P.convert(z.format),Ie=P.convert(z.type);let Le;if(z.isData3DTexture)xe.setTexture3D(z,0),Le=32879;else if(z.isDataArrayTexture)xe.setTexture2DArray(z,0),Le=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,z.flipY),H.pixelStorei(37441,z.premultiplyAlpha),H.pixelStorei(3317,z.unpackAlignment);const Re=H.getParameter(3314),$e=H.getParameter(32878),It=H.getParameter(3316),Sn=H.getParameter(3315),ti=H.getParameter(32877),Ke=q.isCompressedTexture?q.mipmaps[0]:q.image;H.pixelStorei(3314,Ke.width),H.pixelStorei(32878,Ke.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),q.isDataTexture||q.isData3DTexture?H.texSubImage3D(Le,Z,B.x,B.y,B.z,_e,Me,Te,Ee,Ie,Ke.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Le,Z,B.x,B.y,B.z,_e,Me,Te,Ee,Ke.data)):H.texSubImage3D(Le,Z,B.x,B.y,B.z,_e,Me,Te,Ee,Ie,Ke),H.pixelStorei(3314,Re),H.pixelStorei(32878,$e),H.pixelStorei(3316,It),H.pixelStorei(3315,Sn),H.pixelStorei(32877,ti),Z===0&&z.generateMipmaps&&H.generateMipmap(Le),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?xe.setTextureCube(E,0):E.isData3DTexture?xe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?xe.setTexture2DArray(E,0):xe.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){x=0,S=0,v=null,le.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Vg extends Nc{}Vg.prototype.isWebGL1Renderer=!0;class Hg extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Wg extends wt{constructor(e=null,t=1,n=1,i,r,a,s,l,c=ut,u=ut,h,f){super(null,a,s,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn extends Mn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const d=[],p=n/2;let x=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(m,2));function S(){const M=new O,y=new O;let T=0;const A=(t-e)/n;for(let _=0;_<=r;_++){const b=[],L=_/r,I=L*(t-e)+e;for(let k=0;k<=i;k++){const D=k/i,R=D*l+s,U=Math.sin(R),j=Math.cos(R);y.x=I*U,y.y=-L*n+p,y.z=I*j,h.push(y.x,y.y,y.z),M.set(U,A,j).normalize(),f.push(M.x,M.y,M.z),m.push(D,1-L),b.push(g++)}d.push(b)}for(let _=0;_<i;_++)for(let b=0;b<r;b++){const L=d[b][_],I=d[b+1][_],k=d[b+1][_+1],D=d[b][_+1];u.push(L,I,D),u.push(I,k,D),T+=6}c.addGroup(x,T,0),x+=T}function v(M){const y=g,T=new be,A=new O;let _=0;const b=M===!0?e:t,L=M===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,p*L,0),f.push(0,L,0),m.push(.5,.5),g++;const I=g;for(let k=0;k<=i;k++){const R=k/i*l+s,U=Math.cos(R),j=Math.sin(R);A.x=b*j,A.y=p*L,A.z=b*U,h.push(A.x,A.y,A.z),f.push(0,L,0),T.x=U*.5+.5,T.y=j*.5*L+.5,m.push(T.x,T.y),g++}for(let k=0;k<i;k++){const D=y+k,R=I+k;M===!0?u.push(R,R+1,D):u.push(R+1,R,D),_+=3}c.addGroup(x,_,M===!0?1:2),x+=_}}static fromJSON(e){return new xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mi extends Mn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+s,Math.PI);let c=0;const u=[],h=new O,f=new O,m=[],g=[],d=[],p=[];for(let x=0;x<=n;x++){const S=[],v=x/n;let M=0;x==0&&a==0?M=.5/t:x==n&&l==Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const T=y/t;h.x=-e*Math.cos(i+T*r)*Math.sin(a+v*s),h.y=e*Math.cos(a+v*s),h.z=e*Math.sin(i+T*r)*Math.sin(a+v*s),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(T+M,1-v),S.push(c++)}u.push(S)}for(let x=0;x<n;x++)for(let S=0;S<t;S++){const v=u[x][S+1],M=u[x][S],y=u[x+1][S],T=u[x+1][S+1];(x!==0||a>0)&&m.push(v,M,T),(x!==n-1||l<Math.PI)&&m.push(M,y,T)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(p,2))}static fromJSON(e){return new mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zc extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rs extends zc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const vs={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Xg{constructor(e,t,n){const i=this;let r=!1,a=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const qg=new Xg;class Ds{constructor(e){this.manager=e!==void 0?e:qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Pn={};class Yg extends Error{constructor(e,t){super(e),this.response=t}}class jg extends Ds{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:n,onError:i});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pn[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let d=0;const p=new ReadableStream({start(x){S();function S(){h.read().then(({done:v,value:M})=>{if(v)x.close();else{d+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:m});for(let T=0,A=u.length;T<A;T++){const _=u[T];_.onProgress&&_.onProgress(y)}x.enqueue(M),S()}})}}});return new Response(p)}else throw new Yg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,s));case"json":return c.json();default:if(s===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(s),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{vs.add(e,c);const u=Pn[e];delete Pn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Pn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pn[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zg extends Ds{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vs.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const s=Or("img");function l(){u(),vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class $g extends Ds{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Wg,s=new jg(this.manager);return s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(r.withCredentials),s.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Gt,a.wrapT=c.wrapT!==void 0?c.wrapT:Gt,a.magFilter=c.magFilter!==void 0?c.magFilter:ht,a.minFilter=c.minFilter!==void 0?c.minFilter:ht,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=sr),c.mipmapCount===1&&(a.minFilter=ht),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c))},n,i),a}}class Vn extends Ds{constructor(e){super(e)}load(e,t,n,i){const r=new wt,a=new Zg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Uc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ya=new et,Gl=new O,Vl=new O;class Kg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gl),Vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vl),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Hl=new et,wr=new O,Ma=new O;class Jg extends Kg{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),Ma.copy(n.position),Ma.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ma),n.updateMatrixWorld(),i.makeTranslation(-wr.x,-wr.y,-wr.z),Hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl)}}class Qg extends Uc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class e_ extends Uc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const In=t_();function t_(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),s=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(s[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:s}}function n_(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=gt(o,-65504,65504),In.floatView[0]=o;const e=In.uint32View[0],t=e>>23&511;return In.baseTable[t]+((e&8388607)>>In.shiftTable[t])}function i_(o){const e=o>>10;return In.uint32View[0]=In.mantissaTable[In.offsetTable[e]+(o&1023)]+In.exponentTable[e],In.floatView[0]}var fs=Object.freeze({__proto__:null,fromHalfFloat:i_,toHalfFloat:n_});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);class r_ extends $g{constructor(e){super(e),this.type=Fn}parse(e){const s=function(v,M){switch(v){case 1:console.error("THREE.RGBELoader Read Error: "+(M||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(M||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(M||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(M||""))}return-1},h=`
`,f=function(v,M,y){M=M||1024;let A=v.pos,_=-1,b=0,L="",I=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));for(;0>(_=I.indexOf(h))&&b<M&&A<v.byteLength;)L+=I,b+=I.length,A+=128,I+=String.fromCharCode.apply(null,new Uint16Array(v.subarray(A,A+128)));return-1<_?(y!==!1&&(v.pos+=b+_+1),L+I.slice(0,_)):!1},m=function(v){const M=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*FORMAT=(\S+)\s*$/,_=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,b={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let L,I;if(v.pos>=v.byteLength||!(L=f(v)))return s(1,"no header found");if(!(I=L.match(M)))return s(3,"bad initial token");for(b.valid|=1,b.programtype=I[1],b.string+=L+`
`;L=f(v),L!==!1;){if(b.string+=L+`
`,L.charAt(0)==="#"){b.comments+=L+`
`;continue}if((I=L.match(y))&&(b.gamma=parseFloat(I[1])),(I=L.match(T))&&(b.exposure=parseFloat(I[1])),(I=L.match(A))&&(b.valid|=2,b.format=I[1]),(I=L.match(_))&&(b.valid|=4,b.height=parseInt(I[1],10),b.width=parseInt(I[2],10)),b.valid&2&&b.valid&4)break}return b.valid&2?b.valid&4?b:s(3,"missing image size specifier"):s(3,"missing format specifier")},g=function(v,M,y){const T=M;if(T<8||T>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);if(T!==(v[2]<<8|v[3]))return s(3,"wrong scanline width");const A=new Uint8Array(4*M*y);if(!A.length)return s(4,"unable to allocate buffer space");let _=0,b=0;const L=4*T,I=new Uint8Array(4),k=new Uint8Array(L);let D=y;for(;D>0&&b<v.byteLength;){if(b+4>v.byteLength)return s(1);if(I[0]=v[b++],I[1]=v[b++],I[2]=v[b++],I[3]=v[b++],I[0]!=2||I[1]!=2||(I[2]<<8|I[3])!=T)return s(3,"bad rgbe scanline format");let R=0,U;for(;R<L&&b<v.byteLength;){U=v[b++];const Y=U>128;if(Y&&(U-=128),U===0||R+U>L)return s(3,"bad scanline data");if(Y){const V=v[b++];for(let K=0;K<U;K++)k[R++]=V}else k.set(v.subarray(b,b+U),R),R+=U,b+=U}const j=T;for(let Y=0;Y<j;Y++){let V=0;A[_]=k[Y+V],V+=T,A[_+1]=k[Y+V],V+=T,A[_+2]=k[Y+V],V+=T,A[_+3]=k[Y+V],_+=4}D--}return A},d=function(v,M,y,T){const A=v[M+3],_=Math.pow(2,A-128)/255;y[T+0]=v[M+0]*_,y[T+1]=v[M+1]*_,y[T+2]=v[M+2]*_,y[T+3]=1},p=function(v,M,y,T){const A=v[M+3],_=Math.pow(2,A-128)/255;y[T+0]=fs.toHalfFloat(Math.min(v[M+0]*_,65504)),y[T+1]=fs.toHalfFloat(Math.min(v[M+1]*_,65504)),y[T+2]=fs.toHalfFloat(Math.min(v[M+2]*_,65504)),y[T+3]=fs.toHalfFloat(1)},x=new Uint8Array(e);x.pos=0;const S=m(x);if(S!==-1){const v=S.width,M=S.height,y=g(x.subarray(x.pos),v,M);if(y!==-1){let T,A,_;switch(this.type){case un:_=y.length/4;const b=new Float32Array(_*4);for(let I=0;I<_;I++)d(y,I*4,b,I*4);T=b,A=un;break;case Fn:_=y.length/4;const L=new Uint16Array(_*4);for(let I=0;I<_;I++)p(y,I*4,L,I*4);T=L,A=Fn;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:v,height:M,data:T,header:S.string,gamma:S.gamma,exposure:S.exposure,type:A}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,s){switch(a.type){case un:case Fn:a.encoding=$n,a.minFilter=ht,a.magFilter=ht,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,s)}return super.load(e,r,n,i)}}const Xl={type:"change"},ba={type:"start"},ql={type:"end"};class s_ extends Ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Tt),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Xl),n.update(),r=i.NONE},this.update=function(){const P=new O,N=new wi().setFromUnitVectors(e.up,new O(0,1,0)),oe=N.clone().invert(),he=new O,ae=new wi,pe=2*Math.PI;return function(){const Ae=n.object.position;P.copy(Ae).sub(n.target),P.applyQuaternion(N),s.setFromVector3(P),n.autoRotate&&r===i.NONE&&b(A()),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Pe=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Ue)&&(Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),Ue<-Math.PI?Ue+=pe:Ue>Math.PI&&(Ue-=pe),Pe<=Ue?s.theta=Math.max(Pe,Math.min(Ue,s.theta)):s.theta=s.theta>(Pe+Ue)/2?Math.max(Pe,s.theta):Math.min(Ue,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=c,s.radius=Math.max(n.minDistance,Math.min(n.maxDistance,s.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),P.setFromSpherical(s),P.applyQuaternion(oe),Ae.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||he.distanceToSquared(n.object.position)>a||8*(1-ae.dot(n.object.quaternion))>a?(n.dispatchEvent(Xl),he.copy(n.object.position),ae.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",W),n.domElement.removeEventListener("pointerdown",st),n.domElement.removeEventListener("pointercancel",yt),n.domElement.removeEventListener("wheel",Zt),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Tt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,s=new Wl,l=new Wl;let c=1;const u=new O;let h=!1;const f=new be,m=new be,g=new be,d=new be,p=new be,x=new be,S=new be,v=new be,M=new be,y=[],T={};function A(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function b(P){l.theta-=P}function L(P){l.phi-=P}const I=function(){const P=new O;return function(oe,he){P.setFromMatrixColumn(he,0),P.multiplyScalar(-oe),u.add(P)}}(),k=function(){const P=new O;return function(oe,he){n.screenSpacePanning===!0?P.setFromMatrixColumn(he,1):(P.setFromMatrixColumn(he,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(oe),u.add(P)}}(),D=function(){const P=new O;return function(oe,he){const ae=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;P.copy(pe).sub(n.target);let fe=P.length();fe*=Math.tan(n.object.fov/2*Math.PI/180),I(2*oe*fe/ae.clientHeight,n.object.matrix),k(2*he*fe/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(oe*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),k(he*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P){f.set(P.clientX,P.clientY)}function Y(P){S.set(P.clientX,P.clientY)}function V(P){d.set(P.clientX,P.clientY)}function K(P){m.set(P.clientX,P.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;b(2*Math.PI*g.x/N.clientHeight),L(2*Math.PI*g.y/N.clientHeight),f.copy(m),n.update()}function J(P){v.set(P.clientX,P.clientY),M.subVectors(v,S),M.y>0?R(_()):M.y<0&&U(_()),S.copy(v),n.update()}function ue(P){p.set(P.clientX,P.clientY),x.subVectors(p,d).multiplyScalar(n.panSpeed),D(x.x,x.y),d.copy(p),n.update()}function G(P){P.deltaY<0?U(_()):P.deltaY>0&&R(_()),n.update()}function $(P){let N=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),N=!0;break}N&&(P.preventDefault(),n.update())}function te(){if(y.length===1)f.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),N=.5*(y[0].pageY+y[1].pageY);f.set(P,N)}}function ne(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),N=.5*(y[0].pageY+y[1].pageY);d.set(P,N)}}function H(){const P=y[0].pageX-y[1].pageX,N=y[0].pageY-y[1].pageY,oe=Math.sqrt(P*P+N*N);S.set(0,oe)}function ye(){n.enableZoom&&H(),n.enablePan&&ne()}function me(){n.enableZoom&&H(),n.enableRotate&&te()}function de(P){if(y.length==1)m.set(P.pageX,P.pageY);else{const oe=ve(P),he=.5*(P.pageX+oe.x),ae=.5*(P.pageY+oe.y);m.set(he,ae)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const N=n.domElement;b(2*Math.PI*g.x/N.clientHeight),L(2*Math.PI*g.y/N.clientHeight),f.copy(m)}function le(P){if(y.length===1)p.set(P.pageX,P.pageY);else{const N=ve(P),oe=.5*(P.pageX+N.x),he=.5*(P.pageY+N.y);p.set(oe,he)}x.subVectors(p,d).multiplyScalar(n.panSpeed),D(x.x,x.y),d.copy(p)}function ze(P){const N=ve(P),oe=P.pageX-N.x,he=P.pageY-N.y,ae=Math.sqrt(oe*oe+he*he);v.set(0,ae),M.set(0,Math.pow(v.y/S.y,n.zoomSpeed)),R(M.y),S.copy(v)}function Se(P){n.enableZoom&&ze(P),n.enablePan&&le(P)}function xe(P){n.enableZoom&&ze(P),n.enableRotate&&de(P)}function st(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",dt),n.domElement.addEventListener("pointerup",Ze)),ee(P),P.pointerType==="touch"?C(P):Ye(P))}function dt(P){n.enabled!==!1&&(P.pointerType==="touch"?w(P):Oe(P))}function Ze(P){ie(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(ql),r=i.NONE}function yt(P){ie(P)}function Ye(P){let N;switch(P.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case Pi.DOLLY:if(n.enableZoom===!1)return;Y(P),r=i.DOLLY;break;case Pi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;V(P),r=i.PAN}else{if(n.enableRotate===!1)return;j(P),r=i.ROTATE}break;case Pi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;j(P),r=i.ROTATE}else{if(n.enablePan===!1)return;V(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ba)}function Oe(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;K(P);break;case i.DOLLY:if(n.enableZoom===!1)return;J(P);break;case i.PAN:if(n.enablePan===!1)return;ue(P);break}}function Zt(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(ba),G(P),n.dispatchEvent(ql))}function Tt(P){n.enabled===!1||n.enablePan===!1||$(P)}function C(P){switch(se(P),y.length){case 1:switch(n.touches.ONE){case Li.ROTATE:if(n.enableRotate===!1)return;te(),r=i.TOUCH_ROTATE;break;case Li.PAN:if(n.enablePan===!1)return;ne(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(),r=i.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ba)}function w(P){switch(se(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;de(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(P),n.update();break;default:r=i.NONE}}function W(P){n.enabled!==!1&&P.preventDefault()}function ee(P){y.push(P)}function ie(P){delete T[P.pointerId];for(let N=0;N<y.length;N++)if(y[N].pointerId==P.pointerId){y.splice(N,1);return}}function se(P){let N=T[P.pointerId];N===void 0&&(N=new be,T[P.pointerId]=N),N.set(P.pageX,P.pageY)}function ve(P){const N=P.pointerId===y[0].pointerId?y[1]:y[0];return T[N.pointerId]}n.domElement.addEventListener("contextmenu",W),n.domElement.addEventListener("pointerdown",st),n.domElement.addEventListener("pointercancel",yt),n.domElement.addEventListener("wheel",Zt,{passive:!1}),this.update()}}function Ut(o,e=!1){const t=o[0].index!==null,n=new Set(Object.keys(o[0].attributes)),i=new Set(Object.keys(o[0].morphAttributes)),r={},a={},s=o[0].morphTargetsRelative,l=new Mn;let c=0;for(let u=0;u<o.length;++u){const h=o[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in h.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(h.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(s!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in h.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(h.morphAttributes[m])}if(e){let m;if(t)m=h.index.count;else if(h.attributes.position!==void 0)m=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0;const h=[];for(let f=0;f<o.length;++f){const m=o[f].index;for(let g=0;g<m.count;++g)h.push(m.getX(g)+u);u+=o[f].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Yl(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const m=[];for(let d=0;d<a[u].length;++d)m.push(a[u][d][f]);const g=Yl(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Yl(o){let e,t,n,i=0;for(let s=0;s<o.length;++s){const l=o[s];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=l.array.constructor),e!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=l.itemSize),t!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;i+=l.array.length}const r=new e(i);let a=0;for(let s=0;s<o.length;++s)r.set(o[s].array,a),a+=o[s].array.length;return new hn(r,t,n)}function a_(o){let e=new mi(0,0,0),t=Math.floor(Math.pow(Math.random(),.45)*6);for(let i=0;i<t;i++){const r=new mi(1,11,11),a=new mi(1.4,11,11),s=new mi(.9,11,11);r.translate(-1.5,Math.random()*.3,0),a.translate(0,Math.random()*.3+.1,0),s.translate(1.6,Math.random()*.3,0);const l=Ut([r,a,s]);l.translate(Math.random()*20-10,Math.random()*10+11,Math.random()*20-10),l.rotateY(Math.random()*Math.PI*2),e=Ut([e,l])}return new Wt(e,new zc({envMap:o,envMapIntensity:.75,flatShading:!0}))}const o_=(o,e,t)=>{let n=new Wt(new xn(17,17,t*.2,50),new Rs({envMap:o,color:new Fe("#55AAFF").convertSRGBToLinear().multiplyScalar(3),ior:1.1,transmission:.7,transparent:!0,thickness:1,envMapIntensity:.2,roughness:.7,metalness:.025,roughnessMap:e,metalnessMap:e}));return n.receiveShadow=!0,n.position.set(0,t*.1,0),n},l_=(o,e,t)=>{const n=new Wt(new xn(17.1,17.1,t*.25,50,1,!0),new Rs({envMap:o,map:e,envMapIntensity:.2,side:gn}));return n.receiveShadow=!0,n.position.set(0,t*.125,0),n},c_=(o,e,t)=>{const n=new Wt(new xn(18,18,t*.1,50),new Rs({envMap:o,map:e,envMapIntensity:.1,side:gn}));return n.receiveShadow=!0,n.position.set(0,-t*.05,0),n},u_=(o,e)=>{const t=Math.random()*1+1.25,n=new xn(0,1.5,t,6);n.translate(e.x,o+t*.2+1,e.y);const i=new xn(0,1.15,t,6);i.translate(e.x,o+t*.7+1,e.y);const r=new xn(0,.8,t,6);return r.translate(e.x,o+t*1.2+1,e.y),Ut([n,i,r])},h_=(o,e)=>{const t=new xn(.3,.3,4);return t.translate(e.x,o,e.y),t},Sa=(o,e)=>{const t=Math.random()*.04,n=Math.random()*.04,i=new mi(Math.random()*.4+.1,5,5);return i.translate(e.x+t,o,e.y+n),i},f_=.5*(Math.sqrt(3)-1),Tr=(3-Math.sqrt(3))/6,jl=o=>Math.floor(o)|0,Zl=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function d_(o=Math.random){const e=p_(o),t=new Float64Array(e).map(i=>Zl[i%12*2]),n=new Float64Array(e).map(i=>Zl[i%12*2+1]);return function(r,a){let s=0,l=0,c=0;const u=(r+a)*f_,h=jl(r+u),f=jl(a+u),m=(h+f)*Tr,g=h-m,d=f-m,p=r-g,x=a-d;let S,v;p>x?(S=1,v=0):(S=0,v=1);const M=p-S+Tr,y=x-v+Tr,T=p-1+2*Tr,A=x-1+2*Tr,_=h&255,b=f&255;let L=.5-p*p-x*x;if(L>=0){const D=_+e[b],R=t[D],U=n[D];L*=L,s=L*L*(R*p+U*x)}let I=.5-M*M-y*y;if(I>=0){const D=_+S+e[b+v],R=t[D],U=n[D];I*=I,l=I*I*(R*M+U*y)}let k=.5-T*T-A*A;if(k>=0){const D=_+1+e[b+1],R=t[D],U=n[D];k*=k,c=k*k*(R*T+U*A)}return 70*(s+l+c)}}function p_(o){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(o()*(256-n)),r=t[n];t[n]=t[i],t[i]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const m_=(o,e)=>{let t=new xn(1,1,o,6,1,!1);return t.translate(e.x,o*.5,e.y),t},oi=(o,e,t)=>{let n=new Rs({envMap:o,envMapIntensity:.5,flatShading:!0,map:t}),i=new Wt(e,n);return i.castShadow=!0,i.receiveShadow=!0,i},g_=(o,e)=>{const t=d_();for(let n=-10;n<12;n++)for(let i=-10;i<12;i++){let r=__(n,i);if(r.length()>16)continue;let a=(t(n*.1,i*.1)+1)*.5;a=Math.pow(a,1.5),x_(a*o,r,o,e)}};function __(o,e){return new be((o+e%2*.5)*1.75,e*1.55)}function x_(o,e,t,n){let i=m_(o,e);const r=t*.8,a=t*.7,s=t*.5,l=t*.3,c=t*0;o>r?(n.stone=Ut([i,n.stone]),Math.random()>.8&&(n.stone=Ut([n.stone,Sa(o,e)]))):o>a?(n.dirt=Ut([i,n.dirt]),Math.random()>.8&&(n.stone=Ut([n.stone,Sa(o,e)]))):o>s?(n.grass=Ut([i,n.grass]),Math.random()>.8&&(n.bark=Ut([n.bark,h_(o,e)]),n.leaves=Ut([n.leaves,u_(o,e)]))):o>l?n.sand=Ut([i,n.sand]):o>c&&(n.clay=Ut([i,n.clay]),Math.random()>.9&&(n.stone=Ut([n.stone,Sa(o,e)])))}const v_=()=>new e_("#d45c1d",.4),y_=()=>{const o=new Qg(new Fe("#333333").convertSRGBToLinear(),.01,500,2);return o.position.set(10,15,200),o.castShadow=!0,o.shadow.mapSize.width=512,o.shadow.mapSize.height=512,o.shadow.camera.near=1,o.shadow.camera.far=500,o};function Ln(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Bc(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},lr={duration:.5,overwrite:!1,delay:0},co,xt,Qe,tn=1e8,ke=1/tn,Va=Math.PI*2,M_=Va/4,b_=0,kc=Math.sqrt,S_=Math.cos,w_=Math.sin,ct=function(e){return typeof e=="string"},qe=function(e){return typeof e=="function"},Nn=function(e){return typeof e=="number"},uo=function(e){return typeof e>"u"},yn=function(e){return typeof e=="object"},Ct=function(e){return e!==!1},ho=function(){return typeof window<"u"},ds=function(e){return qe(e)||ct(e)},Gc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vt=Array.isArray,Ha=/(?:-?\.?\d|\.)+/gi,Vc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ji=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hc=/[+-]=-?[.\d]+/,Wc=/[^,'"\[\]\s]+/gi,T_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,Qt,Wa,fo,jt={},ys={},Xc,qc=function(e){return(ys=Ei(e,jt))&&Dt},po=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ms=function(e,t){return!t&&console.warn(e)},Yc=function(e,t){return e&&(jt[e]=t)&&ys&&(ys[e]=t)||jt},Nr=function(){return 0},E_={suppressEvents:!0,isStart:!0,kill:!1},gs={suppressEvents:!0,kill:!1},A_={suppressEvents:!0},mo={},Yn=[],Xa={},jc,Bt={},Ta={},$l=30,_s=[],go="",_o=function(e){var t=e[0],n,i;if(yn(t)||qe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=_s.length;i--&&!_s[i].targetTest(t););n=_s[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new xu(e[i],n)))||e.splice(i,1);return e},vi=function(e){return e._gsap||_o(nn(e))[0]._gsap},Zc=function(e,t,n){return(n=e[t])&&qe(n)?e[t]():uo(n)&&e.getAttribute&&e.getAttribute(t)||n},Pt=function(e,t){return(e=e.split(",")).forEach(t)||e},je=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},Ji=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},C_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},bs=function(){var e=Yn.length,t=Yn.slice(0),n,i;for(Xa={},Yn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$c=function(e,t,n,i){Yn.length&&!xt&&bs(),e.render(t,n,i||xt&&t<0&&(e._initted||e._startAt)),Yn.length&&!xt&&bs()},Kc=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wc).length<2?t:ct(e)?e.trim():e},Jc=function(e){return e},sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},P_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ei=function(e,t){for(var n in t)e[n]=t[n];return e},Kl=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Ss=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Rr=function(e){var t=e.parent||We,n=e.keyframes?P_(vt(e.keyframes)):sn;if(Ct(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},L_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Qc=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],s;if(r)for(s=t[r];a&&a[r]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Is=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Kn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},yi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},R_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qa=function(e,t,n,i){return e._startAt&&(xt?e._startAt.revert(gs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},D_=function o(e){return!e||e._ts&&o(e.parent)},Jl=function(e){return e._repeat?cr(e._tTime,e=e.duration()+e._rDelay)*e:0},cr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ws=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fs=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||ke)||0))},Os=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fs(e),n._dirty||yi(n,e)),e},eu=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ws(e.rawTime(),t),(!t._dur||Xr(0,t.totalDuration(),n)-t._tTime>ke)&&t.render(n,!0)),yi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ke}},mn=function(e,t,n,i){return t.parent&&Kn(t),t._start=ft((Nn(n)?n:n||e!==We?Jt(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Qc(e,t,"_first","_last",e._sort?"_start":0),Ya(t)||(e._recent=t),i||eu(e,t),e._ts<0&&Os(e,e._tTime),e},tu=function(e,t){return(jt.ScrollTrigger||po("scrollTrigger",t))&&jt.ScrollTrigger.create(t,e)},nu=function(e,t,n,i,r){if(vo(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jc!==Vt.frame)return Yn.push(e),e._lazy=[r,i],1},I_=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Ya=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},F_=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&I_(e)&&!(!e._initted&&Ya(e))||(e._ts<0||e._dp._ts<0)&&!Ya(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=Xr(0,e._tDur,t),u=cr(l,s),e._yoyo&&u&1&&(a=1-a),u!==cr(e._tTime,s)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||xt||i||e._zTime===ke||!t&&e._zTime){if(!e._initted&&nu(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ke:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&qa(e,t,n,!0),e._onUpdate&&!n&&rn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&rn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Kn(e,1),!n&&!xt&&(rn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},O_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ur=function(e,t,n,i){var r=e._repeat,a=ft(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ft(a*(r+1)+e._rDelay*r):a,s>0&&!i&&Os(e,e._tTime=e._tDur*s),e.parent&&Fs(e),n||yi(e.parent,e),e},Ql=function(e){return e instanceof Et?yi(e):ur(e,e._dur)},N_={_start:0,endTime:Nr,totalDuration:Nr},Jt=function o(e,t,n){var i=e.labels,r=e._recent||N_,a=e.duration()>=tn?r.endTime(!1):e._dur,s,l,c;return ct(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(vt(n)?n[0]:n).totalDuration()),s>1?o(e,t.substr(0,s-1),n)+l:a+l)):t==null?a:+t},Dr=function(e,t,n){var i=Nn(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],s,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(s=a,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=Ct(l.vars.inherit)&&l.parent;a.immediateRender=Ct(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new nt(t[0],a,t[r+1])},Qn=function(e,t){return e||e===0?t(e):t},Xr=function(e,t,n){return n<e?e:n>t?t:n},_t=function(e,t){return!ct(e)||!(t=T_.exec(e))?"":t[1]},z_=function(e,t,n){return Qn(n,function(i){return Xr(e,t,i)})},ja=[].slice,iu=function(e,t){return e&&yn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yn(e[0]))&&!e.nodeType&&e!==Qt},U_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ct(i)&&!t||iu(i,1)?(r=n).push.apply(r,nn(i)):n.push(i)})||n},nn=function(e,t,n){return Qe&&!t&&Qe.selector?Qe.selector(e):ct(e)&&!n&&(Wa||!hr())?ja.call((t||fo).querySelectorAll(e),0):vt(e)?U_(e,n):iu(e)?ja.call(e,0):e?[e]:[]},Za=function(e){return e=nn(e)[0]||Ms("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return nn(t,n.querySelectorAll?n:n===e?Ms("Invalid scope")||fo.createElement("div"):e)}},ru=function(e){return e.sort(function(){return .5-Math.random()})},su=function(e){if(qe(e))return e;var t=yn(e)?e:{each:e},n=Mi(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return ct(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=a[d],x,S,v,M,y,T,A,_,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,tn])[1],!b){for(A=-tn;A<(A=g[b++].getBoundingClientRect().left)&&b<d;);b--}for(p=a[d]=[],x=l?Math.min(b,d)*u-.5:i%b,S=b===tn?0:l?d*h/b-.5:i/b|0,A=0,_=tn,T=0;T<d;T++)v=T%b-x,M=S-(T/b|0),p[T]=y=c?Math.abs(c==="y"?M:v):kc(v*v+M*M),y>A&&(A=y),y<_&&(_=y);i==="random"&&ru(p),p.max=A-_,p.min=_,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(b>d?d-1:c?c==="y"?d/b:b:Math.max(b,d/b))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=_t(t.amount||t.each)||0,n=n&&d<0?mu(n):n}return d=(p[f]-p.min)/p.max||0,ft(p.b+(n?n(d):d)*p.v)+p.u}},$a=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Nn(n)?0:_t(n))}},au=function(e,t){var n=vt(e),i,r;return!n&&yn(e)&&(i=n=e.radius||tn,e.values?(e=nn(e.values),(r=!Nn(e[0]))&&(i*=i)):e=$a(e.increment)),Qn(t,n?qe(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=tn,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||Nn(a)?u:u+_t(a)}:$a(e))},ou=function(e,t,n,i){return Qn(vt(e)?!t:n===!0?!!(n=0):!i,function(){return vt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},B_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},k_=function(e,t){return function(n){return e(parseFloat(n))+(t||_t(n))}},G_=function(e,t,n){return cu(e,t,0,1,n)},lu=function(e,t,n){return Qn(n,function(i){return e[~~t(i)]})},V_=function o(e,t,n){var i=t-e;return vt(e)?lu(e,o(0,e.length),t):Qn(n,function(r){return(i+(r-e)%i)%i+e})},H_=function o(e,t,n){var i=t-e,r=i*2;return vt(e)?lu(e,o(0,e.length-1),t):Qn(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},zr=function(e){for(var t=0,n="",i,r,a,s;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(s?Wc:Ha),n+=e.substr(t,i-t)+ou(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},cu=function(e,t,n,i,r){var a=t-e,s=i-n;return Qn(r,function(l){return n+((l-e)/a*s||0)})},W_=function o(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=ct(e),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(vt(e)&&!vt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(o(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=Ei(vt(e)?[]:{},e));if(!u){for(l in t)xo.call(s,e,l,"get",t[l]);r=function(g){return bo(g,s)||(a?e.p:e)}}}return Qn(n,r)},ec=function(e,t,n){var i=e.labels,r=tn,a,s,l;for(a in i)s=i[a]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=a,r=s);return l},rn=function(e,t,n){var i=e.vars,r=i[t],a=Qe,s=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Yn.length&&bs(),s&&(Qe=s),u=l?r.apply(c,l):r.call(c),Qe=a,u},Pr=function(e){return Kn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xt),e.progress()<1&&rn(e,"onInterrupt"),e},Zi,uu=[],hu=function(e){if(!ho()){uu.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=qe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Nr,render:bo,add:xo,kill:a0,modifier:s0,rawVars:0},a={targetTest:0,get:0,getSetter:Mo,aliases:{},register:0};if(hr(),e!==i){if(Bt[t])return;sn(i,sn(Ss(e,r),a)),Ei(i.prototype,Ei(r,Ss(e,a))),Bt[i.prop=t]=i,e.targetTest&&(_s.push(i),mo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yc(t,i),e.register&&e.register(Dt,i,Lt)},Be=255,Lr={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},Ea=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Be+.5|0},fu=function(e,t,n){var i=e?Nn(e)?[e>>16,e>>8&Be,e&Be]:0:Lr.black,r,a,s,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lr[e])i=Lr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+r+r+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Be,i&Be,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Be,e&Be]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Ha),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=Ea(l+1/3,r,a),i[1]=Ea(l,r,a),i[2]=Ea(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Vc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Ha)||Lr.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Be,a=i[1]/Be,s=i[2]/Be,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},du=function(e){var t=[],n=[],i=-1;return e.split(jn).forEach(function(r){var a=r.match(ji)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},tc=function(e,t,n){var i="",r=(e+i).match(jn),a=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=fu(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=du(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(jn,"1").split(ji),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(jn),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},jn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lr)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),X_=/hsl[a]?\(/,pu=function(e){var t=e.join(" "),n;if(jn.lastIndex=0,jn.test(t))return n=X_.test(t),e[1]=tc(e[1],n),e[0]=tc(e[0],n,du(e[1])),!0},Ur,Vt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,a=r,s=[],l,c,u,h,f,m,g=function d(p){var x=o()-i,S=p===!0,v,M,y,T;if(x>e&&(n+=x-t),i+=x,y=i-n,v=y-a,(v>0||S)&&(T=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,a+=v+(v>=r?4:r-v),M=1),S||(l=c(d)),M)for(m=0;m<s.length;m++)s[m](y,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Xc&&(!Wa&&ho()&&(Qt=Wa=window,fo=Qt.document||{},jt.gsap=Dt,(Qt.gsapVersions||(Qt.gsapVersions=[])).push(Dt.version),qc(ys||Qt.GreenSockGlobals||!Qt.gsap&&Qt||{}),u=Qt.requestAnimationFrame,uu.forEach(hu)),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Ur=1,g(2))},sleep:function(){(u?Qt.cancelAnimationFrame:clearTimeout)(l),Ur=0,c=Nr},lagSmoothing:function(p,x){e=p||1/0,t=Math.min(x||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,x,S){var v=x?function(M,y,T,A){p(M,y,T,A),h.remove(v)}:p;return h.remove(p),s[S?"unshift":"push"](v),hr(),v},remove:function(p,x){~(x=s.indexOf(p))&&s.splice(x,1)&&m>=x&&m--},_listeners:s},h}(),hr=function(){return!Ur&&Vt.wake()},Ce={},q_=/^[\d.\-M][\d.\-,\s]/,Y_=/["']/g,j_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,s,l,c;r<a;r++)l=n[r],s=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(Y_,"").trim():+c,i=l.substr(s+1).trim();return t},Z_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$_=function(e){var t=(e+"").split("("),n=Ce[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[j_(t[1])]:Z_(e).split(",").map(Kc)):Ce._CE&&q_.test(e)?Ce._CE("",e):n},mu=function(e){return function(t){return 1-e(1-t)}},gu=function o(e,t){for(var n=e._first,i;n;)n instanceof Et?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Mi=function(e,t){return e&&(qe(e)?e:Ce[e]||$_(e))||t},Ci=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Pt(e,function(s){Ce[s]=jt[s]=r,Ce[a=s.toLowerCase()]=n;for(var l in r)Ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[s+"."+l]=r[l]}),r},_u=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Aa=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/Va*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*w_((u-a)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:_u(s);return r=Va/r,l.config=function(c,u){return o(e,c,u)},l},Ca=function o(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:_u(n);return i.config=function(r){return o(e,r)},i};Pt("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ci(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Ci("Elastic",Aa("in"),Aa("out"),Aa());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?o*s*s:s<n?o*Math.pow(s-1.5/e,2)+.75:s<i?o*(s-=2.25/e)*s+.9375:o*Math.pow(s-2.625/e,2)+.984375};Ci("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ci("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ci("Circ",function(o){return-(kc(1-o*o)-1)});Ci("Sine",function(o){return o===1?1:-S_(o*M_)+1});Ci("Back",Ca("in"),Ca("out"),Ca());Ce.SteppedEase=Ce.steps=jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-ke;return function(s){return((i*Xr(0,a,s)|0)+r)*n}}};lr.ease=Ce["quad.out"];Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return go+=o+","+o+"Params,"});var xu=function(e,t){this.id=b_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Zc,this.set=t?t.getSetter:Mo},fr=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ur(this,+t.duration,1,1),this.data=t.data,Qe&&(this._ctx=Qe,Qe.data.push(this)),Ur||Vt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(hr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Os(this,n),!r._dp||r.parent||eu(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ke||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$c(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?cr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ws(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ke?0:this._rts,this.totalTime(Xr(-Math.abs(this._delay),this._tDur,i),!0),Fs(this),R_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ct(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ws(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=A_);var i=xt;return xt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ql(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ql(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Jt(this,n),Ct(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ct(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ke:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ke)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=qe(n)?n:Jc,s=function(){var c=i.then;i.then=null,qe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Pr(this)},o}();sn(fr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var Et=function(o){Bc(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ct(n.sortChildren),We&&mn(n.parent||We,Ln(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&tu(Ln(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return Dr(0,arguments,this),this},t.from=function(i,r,a){return Dr(1,arguments,this),this},t.fromTo=function(i,r,a,s){return Dr(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Rr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new nt(i,r,Jt(this,a),1),this},t.call=function(i,r,a){return mn(this,nt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,s,l,c,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new nt(i,a,Jt(this,l)),this},t.staggerFrom=function(i,r,a,s,l,c,u){return a.runBackwards=1,Rr(a).immediateRender=Ct(a.immediateRender),this.staggerTo(i,r,a,s,l,c,u)},t.staggerFromTo=function(i,r,a,s,l,c,u,h){return s.startAt=a,Rr(s).immediateRender=Ct(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,a){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,x,S,v,M,y,T,A;if(this!==We&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,M=this._start,v=this._ts,x=!v,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=ft(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),y=cr(this._tTime,p),!s&&this._tTime&&y!==d&&this._tTime-y*p-this._dur<=0&&(y=d),T&&d&1&&(f=c-f,A=1),d!==y&&!this._lock){var _=T&&y&1,b=_===(T&&d&1);if(d<y&&(_=!_),s=_?0:c,this._lock=1,this.render(s||(A?0:ft(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&rn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),s&&s!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,s=_?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;gu(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=O_(this,ft(s),ft(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&!d&&(rn(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!x){S=0,g&&(u+=this._zTime=-ke);break}}m=g}else{m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&S!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||xt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!x){S=0,g&&(u+=this._zTime=L?-ke:ke);break}}m=g}}if(S&&!r&&(this.pause(),S.render(f>=s?0:-ke)._zTime=f>=s?1:-1,this._ts))return this._start=M,Fs(this),this.render(i,r,a);this._onUpdate&&!r&&rn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Kn(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(rn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Nn(r)||(r=Jt(this,r,i)),!(i instanceof fr)){if(vt(i))return i.forEach(function(s){return a.add(s,r)}),this;if(ct(i))return this.addLabel(i,r);if(qe(i))i=nt.delayedCall(0,i);else return this}return this!==i?mn(this,i,r):this},t.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-tn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof nt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ct(i)?this.removeLabel(i):qe(i)?this.killTweensOf(i):(Is(this,i),i===this._recent&&(this._recent=this._last),yi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Vt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Jt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var s=nt.delayedCall(0,r||Nr,a);return s.data="isPause",this._hasPause=1,mn(this,s,Jt(this,i))},t.removePause=function(i){var r=this._first;for(i=Jt(this,i);r;)r._start===i&&r.data==="isPause"&&Kn(r),r=r._next},t.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),l=s.length;l--;)Hn!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],s=nn(i),l=this._first,c=Nn(r),u;l;)l instanceof nt?C_(l._targets,s)&&(c?(!Hn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(s,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,s=Jt(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=nt.to(a,sn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale())||ke,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&ur(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,sn({startAt:{time:Jt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ec(this,Jt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ec(this,Jt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ke)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,l=this.labels,c;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return yi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),yi(this)},t.totalDuration=function(i){var r=0,a=this,s=a._last,l=tn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&a._sort&&s._ts&&!a._lock?(a._lock=1,mn(a,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ur(a,a===We&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(We._ts&&($c(We,ws(i,We)),jc=Vt.frame),Vt.frame>=$l){$l+=Yt.autoSleep||120;var r=We._first;if((!r||!r._ts)&&Yt.autoSleep&&Vt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Vt.sleep()}}},e}(fr);sn(Et.prototype,{_lock:0,_hasPause:0,_forcing:0});var K_=function(e,t,n,i,r,a,s){var l=new Lt(this._pt,e,t,0,1,wu,null,r),c=0,u=0,h,f,m,g,d,p,x,S;for(l.b=n,l.e=i,n+="",i+="",(x=~i.indexOf("random("))&&(i=zr(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(wa)||[];h=wa.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Ji(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=wa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(Hc.test(i)||x)&&(l.e=0),this._pt=l,l},xo=function(e,t,n,i,r,a,s,l,c,u){qe(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:qe(h)?c?e[t.indexOf("set")||!qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=qe(h)?c?n0:bu:yo,g;if(ct(i)&&(~i.indexOf("random(")&&(i=zr(i)),i.charAt(1)==="="&&(g=Ji(f,i)+(_t(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ka)return!isNaN(f*i)&&i!==""?(g=new Lt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?r0:Su,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&po(t,i),K_.call(this,e,t,f,i,m,l||Yt.stringFilter,c))},J_=function(e,t,n,i,r){if(qe(e)&&(e=Ir(e,r,t,n,i)),!yn(e)||e.style&&e.nodeType||vt(e)||Gc(e))return ct(e)?Ir(e,r,t,n,i):e;var a={},s;for(s in e)a[s]=Ir(e[s],r,t,n,i);return a},vu=function(e,t,n,i,r,a){var s,l,c,u;if(Bt[e]&&(s=new Bt[e]).init(r,s.rawVars?t[e]:J_(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Lt(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Zi))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Hn,Ka,vo=function o(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,x=e._startAt,S=e._targets,v=e.parent,M=v&&v.data==="nested"?v.vars.targets:S,y=e._overwrite==="auto"&&!co,T=e.timeline,A,_,b,L,I,k,D,R,U,j,Y,V,K;if(T&&(!g||!r)&&(r="none"),e._ease=Mi(r,lr.ease),e._yEase=m?mu(Mi(m===!0?r:m,lr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(R=S[0]?vi(S[0]).harness:0,V=R&&i[R.prop],A=Ss(i,mo),x&&(x._zTime<0&&x.progress(1),t<0&&f&&s&&!d?x.render(-1,!0):x.revert(f&&p?gs:E_),x._lazy=0),a){if(Kn(e._startAt=nt.set(S,sn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!x&&Ct(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt||!s&&!d)&&e._startAt.revert(gs),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!x){if(t&&(s=!1),b=sn({overwrite:!1,data:"isFromStart",lazy:s&&!x&&Ct(l),immediateRender:s,stagger:0,parent:v},A),V&&(b[R.prop]=V),Kn(e._startAt=nt.set(S,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xt?e._startAt.revert(gs):e._startAt.render(-1,!0)),e._zTime=t,!s)o(e._startAt,ke,ke);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ct(l)||l&&!p,_=0;_<S.length;_++){if(I=S[_],D=I._gsap||_o(S)[_]._gsap,e._ptLookup[_]=j={},Xa[D.id]&&Yn.length&&bs(),Y=M===S?_:M.indexOf(I),R&&(U=new R).init(I,V||A,e,Y,M)!==!1&&(e._pt=L=new Lt(e._pt,I,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(J){j[J]=L}),U.priority&&(k=1)),!R||V)for(b in A)Bt[b]&&(U=vu(b,A,e,Y,I,M))?U.priority&&(k=1):j[b]=L=xo.call(e,I,b,"get",A[b],Y,M,0,i.stringFilter);e._op&&e._op[_]&&e.kill(I,e._op[_]),y&&e._pt&&(Hn=e,We.killTweensOf(I,j,e.globalTime(t)),K=!e.parent,Hn=0),e._pt&&l&&(Xa[D.id]=1)}k&&Tu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,g&&t<=0&&T.render(tn,!0,!0)},Q_=function(e,t,n,i,r,a,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ka=1,e.vars[t]="+=0",vo(e,s),Ka=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=je(n)+_t(u.e)),u.b&&(u.b=c.s+_t(u.b))},e0=function(e,t){var n=e[0]?vi(e[0]).harness:0,i=n&&n.aliases,r,a,s,l;if(!i)return t;r=Ei({},t);for(a in i)if(a in r)for(l=i[a].split(","),s=l.length;s--;)r[l[s]]=r[a];return r},t0=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,s;if(vt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:r})},Ir=function(e,t,n,i,r){return qe(e)?e.call(t,n,i,r):ct(e)&&~e.indexOf("random(")?zr(e):e},yu=go+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mu={};Pt(yu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Mu[o]=1});var nt=function(o){Bc(e,o);function e(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:Rr(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,x=l.yoyoEase,S=i.parent||We,v=(vt(n)||Gc(n)?Nn(n[0]):"length"in i)?[n]:nn(n),M,y,T,A,_,b,L,I;if(s._targets=v.length?_o(v):Ms("GSAP target "+n+" not found. https://greensock.com",!Yt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||ds(c)||ds(u)){if(i=s.vars,M=s.timeline=new Et({data:"nested",defaults:d||{},targets:S&&S.data==="nested"?S.vars.targets:v}),M.kill(),M.parent=M._dp=Ln(s),M._start=0,f||ds(c)||ds(u)){if(A=v.length,L=f&&su(f),yn(f))for(_ in f)~yu.indexOf(_)&&(I||(I={}),I[_]=f[_]);for(y=0;y<A;y++)T=Ss(i,Mu),T.stagger=0,x&&(T.yoyoEase=x),I&&Ei(T,I),b=v[y],T.duration=+Ir(c,Ln(s),y,b,v),T.delay=(+Ir(u,Ln(s),y,b,v)||0)-s._delay,!f&&A===1&&T.delay&&(s._delay=u=T.delay,s._start+=u,T.delay=0),M.to(b,T,L?L(y,b,v):0),M._ease=Ce.none;M.duration()?c=u=0:s.timeline=0}else if(g){Rr(sn(M.vars.defaults,{ease:"none"})),M._ease=Mi(g.ease||i.ease||"none");var k=0,D,R,U;if(vt(g))g.forEach(function(j){return M.to(v,j,">")}),M.duration();else{T={};for(_ in g)_==="ease"||_==="easeEach"||t0(_,g[_],T,g.easeEach);for(_ in T)for(D=T[_].sort(function(j,Y){return j.t-Y.t}),k=0,y=0;y<D.length;y++)R=D[y],U={ease:R.e,duration:(R.t-(y?D[y-1].t:0))/100*c},U[_]=R.v,M.to(v,U,k),k+=U.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||s.duration(c=M.duration())}else s.timeline=0;return m===!0&&!co&&(Hn=Ln(s),We.killTweensOf(v),Hn=0),mn(S,Ln(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===ft(S._time)&&Ct(h)&&D_(Ln(s))&&S.data!=="nested")&&(s._tTime=-ke,s.render(Math.max(0,-u)||0)),p&&tu(Ln(s),p),s}var t=e.prototype;return t.render=function(i,r,a){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ke&&!u?l:i<ke?0:i,f,m,g,d,p,x,S,v,M;if(!c)F_(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=ft(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),x=this._yoyo&&g&1,x&&(M=this._yEase,f=c-f),p=cr(this._tTime,d),f===s&&!a&&this._initted)return this._tTime=h,this;g!==p&&(v&&this._yEase&&gu(v,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=a=1,this.render(ft(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(nu(this,u?i:f,a,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(M||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!s&&!r&&!g&&(rn(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(S,m.d),m=m._next;v&&v.render(i<0?i:!f&&x?-ke:v._dur*v._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&qa(this,i,r,a),rn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&rn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&qa(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Kn(this,1),!r&&!(u&&!s)&&(h||s||x)&&(rn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,s){Ur||Vt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||vo(this,l),c=this._ease(l/this._dur),Q_(this,i,r,a,s,c,l)?this.resetTo(i,r,a,s):(Os(this,0),this.parent||Qc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Pr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Hn&&Hn.vars.overwrite!==!0)._first||Pr(this),this.parent&&a!==this.timeline.totalDuration()&&ur(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,l=i?nn(i):s,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,x;if((!r||r==="all")&&L_(s,l))return r==="all"&&(this._pt=0),Pr(this);for(h=this._op=this._op||[],r!=="all"&&(ct(r)&&(d={},Pt(r,function(S){return d[S]=1}),r=d),r=e0(s,r)),x=s.length;x--;)if(~l.indexOf(s[x])){f=c[x],r==="all"?(h[x]=r,g=f,m={}):(m=h[x]=h[x]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Is(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Pr(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Dr(1,arguments)},e.delayedCall=function(i,r,a,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(i,r,a){return Dr(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return We.killTweensOf(i,r,a)},e}(fr);sn(nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pt("staggerTo,staggerFrom,staggerFromTo",function(o){nt[o]=function(){var e=new Et,t=ja.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var yo=function(e,t,n){return e[t]=n},bu=function(e,t,n){return e[t](n)},n0=function(e,t,n,i){return e[t](i.fp,n)},i0=function(e,t,n){return e.setAttribute(t,n)},Mo=function(e,t){return qe(e[t])?bu:uo(e[t])&&e.setAttribute?i0:yo},Su=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},r0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},wu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},bo=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},s0=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},a0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Is(this,t,"_pt"):t.dep||(n=1),t=i;return!n},o0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Tu=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Lt=function(){function o(t,n,i,r,a,s,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Su,this.d=l||this,this.set=c||yo,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=o0,this.m=n,this.mt=r,this.tween=i},o}();Pt(go+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return mo[o]=1});jt.TweenMax=jt.TweenLite=nt;jt.TimelineLite=jt.TimelineMax=Et;We=new Et({sortChildren:!1,defaults:lr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yt.stringFilter=pu;var dr=[],xs={},l0=[],nc=0,Pa=function(e){return(xs[e]||l0).map(function(t){return t()})},Ja=function(){var e=Date.now(),t=[];e-nc>2&&(Pa("matchMediaInit"),dr.forEach(function(n){var i=n.queries,r=n.conditions,a,s,l,c;for(s in i)a=Qt.matchMedia(i[s]).matches,a&&(l=1),a!==r[s]&&(r[s]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Pa("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),nc=e,Pa("matchMedia"))},Eu=function(){function o(t,n){this.selector=n&&Za(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=o.prototype;return e.add=function(n,i,r){qe(n)&&(r=i,i=n,n=qe);var a=this,s=function(){var c=Qe,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Za(r)),Qe=a,h=i.apply(a,arguments),qe(h)&&a._r.push(h),Qe=c,a.selector=u,a.isReverted=!1,h};return a.last=s,n===qe?s(a):n?a[n]=s:s},e.ignore=function(n){var i=Qe;Qe=null,n(this),Qe=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof fr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var s=dr.indexOf(this);~s&&dr.splice(s,1)}},e.revert=function(n){this.kill(n||{})},o}(),c0=function(){function o(t){this.contexts=[],this.scope=t}var e=o.prototype;return e.add=function(n,i,r){yn(n)||(n={matches:n});var a=new Eu(0,r||this.scope),s=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qt.matchMedia(n[c]),l&&(dr.indexOf(a)<0&&dr.push(a),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ja):l.addEventListener("change",Ja)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Ts={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hu(i)})},timeline:function(e){return new Et(e)},getTweensOf:function(e,t){return We.getTweensOf(e,t)},getProperty:function(e,t,n,i){ct(e)&&(e=nn(e)[0]);var r=vi(e||{}).get,a=n?Jc:Kc;return n==="native"&&(n=""),e&&(t?a((Bt[t]&&Bt[t].get||r)(e,t,n,i)):function(s,l,c){return a((Bt[s]&&Bt[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=nn(e),e.length>1){var i=e.map(function(u){return Dt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Bt[t],s=vi(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Zi._pt=0,h.init(e,n?u+n:u,Zi,0,[e]),h.render(1,h),Zi._pt&&bo(1,Zi)}:s.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=Dt.to(e,Ei((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return We.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Mi(e.ease,lr.ease)),Kl(lr,e||{})},config:function(e){return Kl(Yt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Bt[s]&&!jt[s]&&Ms(t+" effect requires "+s+" plugin.")}),Ta[t]=function(s,l,c){return n(nn(s),sn(l||{},r),c)},a&&(Et.prototype[t]=function(s,l,c){return this.add(Ta[t](s,yn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ce[e]=Mi(t)},parseEase:function(e,t){return arguments.length?Mi(e,t):Ce},getById:function(e){return We.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Et(e),i,r;for(n.smoothChildTiming=Ct(e.smoothChildTiming),We.remove(n),n._dp=0,n._time=n._tTime=We._time,i=We._first;i;)r=i._next,(t||!(!i._dur&&i instanceof nt&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=r;return mn(We,n,0),n},context:function(e,t){return e?new Eu(e,t):Qe},matchMedia:function(e){return new c0(e)},matchMediaRefresh:function(){return dr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ja()},addEventListener:function(e,t){var n=xs[e]||(xs[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xs[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:V_,wrapYoyo:H_,distribute:su,random:ou,snap:au,normalize:G_,getUnit:_t,clamp:z_,splitColor:fu,toArray:nn,selector:Za,mapRange:cu,pipe:B_,unitize:k_,interpolate:W_,shuffle:ru},install:qc,effects:Ta,ticker:Vt,updateRoot:Et.updateRoot,plugins:Bt,globalTimeline:We,core:{PropTween:Lt,globals:Yc,Tween:nt,Timeline:Et,Animation:fr,getCache:vi,_removeLinkedListItem:Is,reverting:function(){return xt},context:function(e){return e&&Qe&&(Qe.data.push(e),e._ctx=Qe),Qe},suppressOverwrites:function(e){return co=e}}};Pt("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Ts[o]=nt[o]});Vt.add(Et.updateRoot);Zi=Ts.to({},{duration:0});var u0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},h0=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=u0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},La=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(s){var l,c;if(ct(r)&&(l={},Pt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}h0(s,r)}}}},Dt=Ts.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,s,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",s=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),s.op=a,s.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)xt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},La("roundProps",$a),La("modifiers"),La("snap",au))||Ts;nt.version=Et.version=Dt.version="3.11.5";Xc=1;ho()&&hr();Ce.Power0;Ce.Power1;Ce.Power2;Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;Ce.Expo;Ce.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ic,Wn,Qi,So,gi,rc,wo,f0=function(){return typeof window<"u"},zn={},fi=180/Math.PI,er=Math.PI/180,Xi=Math.atan2,sc=1e8,To=/([A-Z])/g,d0=/(left|right|width|margin|padding|x)/i,p0=/[\s,\(]\S/,_n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qa=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},m0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},g0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Au=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},x0=function(e,t,n){return e.style[t]=n},v0=function(e,t,n){return e.style.setProperty(t,n)},y0=function(e,t,n){return e._gsap[t]=n},M0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},b0=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},S0=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Xe="transform",fn=Xe+"Origin",w0=function o(e,t){var n=this,i=this.target,r=i.style;if(e in zn){if(this.tfm=this.tfm||{},e!=="transform")e=_n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Rn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Rn(i,e);else return _n.transform.split(",").forEach(function(a){return o.call(n,a,t)});if(this.props.indexOf(Xe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(fn,t,"")),e=Xe}(r||t)&&this.props.push(e,t,r[e])},Pu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},T0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(To,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=wo(),(!r||!r.isStart)&&!n[Xe]&&(Pu(n),i.uncache=1)}},Lu=function(e,t){var n={target:e,props:[],revert:T0,save:w0};return e._gsap||Dt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Ru,eo=function(e,t){var n=Wn.createElementNS?Wn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Wn.createElement(e);return n.style?n:Wn.createElement(e)},vn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(To,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,pr(t)||t,1)||""},ac="O,Moz,ms,Ms,Webkit".split(","),pr=function(e,t,n){var i=t||gi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ac[a]+e in r););return a<0?null:(a===3?"ms":a>=0?ac[a]:"")+e},to=function(){f0()&&window.document&&(ic=window,Wn=ic.document,Qi=Wn.documentElement,gi=eo("div")||{style:{}},eo("div"),Xe=pr(Xe),fn=Xe+"Origin",gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ru=!!pr("perspective"),wo=Dt.core.reverting,So=1)},Ra=function o(e){var t=eo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Qi.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Qi.removeChild(t),this.style.cssText=r,a},oc=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Du=function(e){var t;try{t=e.getBBox()}catch{t=Ra.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ra||(t=Ra.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+oc(e,["x","cx","x1"])||0,y:+oc(e,["y","cy","y1"])||0,width:0,height:0}:t},Iu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Du(e))},Br=function(e,t){if(t){var n=e.style;t in zn&&t!==fn&&(t=Xe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(To,"-$1").toLowerCase())):n.removeAttribute(t)}},Xn=function(e,t,n,i,r,a){var s=new Lt(e._pt,t,n,0,1,a?Cu:Au);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},lc={deg:1,rad:1,turn:1},E0={grid:1,flex:1},Jn=function o(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=gi.style,l=d0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,x;return i===a||!r||lc[i]||lc[a]?r:(a!=="px"&&!f&&(r=o(e,t,n,"px")),x=e.getCTM&&Iu(e),(m||a==="%")&&(zn[t]||~t.indexOf("adius"))?(g=x?e.getBBox()[l?"width":"height"]:e[u],je(m?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,x&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Wn||!d.appendChild)&&(d=Wn.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Vt.time&&!p.uncache?je(r/p.width*h):((m||a==="%")&&!E0[vn(d,"display")]&&(s.position=vn(e,"position")),d===e&&(s.position="static"),d.appendChild(gi),g=gi[u],d.removeChild(gi),s.position="absolute",l&&m&&(p=vi(d),p.time=Vt.time,p.width=d[u]),je(f?g*r/h:g&&r?h/g*r:0))))},Rn=function(e,t,n,i){var r;return So||to(),t in _n&&t!=="transform"&&(t=_n[t],~t.indexOf(",")&&(t=t.split(",")[0])),zn[t]&&t!=="transform"?(r=Gr(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:As(vn(e,fn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Es[t]&&Es[t](e,t,n)||vn(e,t)||Zc(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Jn(e,t,r,n)+n:r},A0=function(e,t,n,i){if(!n||n==="none"){var r=pr(t,e,1),a=r&&vn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=vn(e,"borderTopColor"))}var s=new Lt(this._pt,e.style,t,0,1,wu),l=0,c=0,u,h,f,m,g,d,p,x,S,v,M,y;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=vn(e,t)||i,e.style[t]=n),u=[n,i],pu(u),n=u[0],i=u[1],f=n.match(ji)||[],y=i.match(ji)||[],y.length){for(;h=ji.exec(i);)p=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,M=d.substr((m+"").length),p.charAt(1)==="="&&(p=Ji(m,p)+M),x=parseFloat(p),v=p.substr((x+"").length),l=ji.lastIndex-v.length,v||(v=v||Yt.units[t]||M,l===i.length&&(i+=v,s.e+=v)),M!==v&&(m=Jn(e,t,d,v)||0),s._pt={_next:s._pt,p:S||c===1?S:",",s:m,c:x-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Cu:Au;return Hc.test(i)&&(s.e=0),this._pt=s,s},cc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},C0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cc[n]||n,t[1]=cc[i]||i,t.join(" ")},P0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],zn[s]&&(l=1,s=s==="transformOrigin"?fn:Xe),Br(n,s);l&&(Br(n,Xe),a&&(a.svg&&n.removeAttribute("transform"),Gr(n,1),a.uncache=1,Pu(i)))}},Es={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Lt(e._pt,t,n,0,0,P0);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},kr=[1,0,0,1,0,0],Fu={},Ou=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},uc=function(e){var t=vn(e,Xe);return Ou(t)?kr:t.substr(7).match(Vc).map(je)},Eo=function(e,t){var n=e._gsap||vi(e),i=e.style,r=uc(e),a,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?kr:r):(r===kr&&!e.offsetParent&&e!==Qi&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,s=e.nextElementSibling,Qi.appendChild(e)),r=uc(e),l?i.display=l:Br(e,"display"),c&&(s?a.insertBefore(e,s):a?a.appendChild(e):Qi.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},no=function(e,t,n,i,r,a){var s=e._gsap,l=r||Eo(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],x=l[4],S=l[5],v=t.split(" "),M=parseFloat(v[0])||0,y=parseFloat(v[1])||0,T,A,_,b;n?l!==kr&&(A=m*p-g*d)&&(_=M*(p/A)+y*(-d/A)+(d*S-p*x)/A,b=M*(-g/A)+y*(m/A)-(m*S-g*x)/A,M=_,y=b):(T=Du(e),M=T.x+(~v[0].indexOf("%")?M/100*T.width:M),y=T.y+(~(v[1]||v[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&s.smooth?(x=M-c,S=y-u,s.xOffset=h+(x*m+S*d)-x,s.yOffset=f+(x*g+S*p)-S):s.xOffset=s.yOffset=0,s.xOrigin=M,s.yOrigin=y,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[fn]="0px 0px",a&&(Xn(a,s,"xOrigin",c,M),Xn(a,s,"yOrigin",u,y),Xn(a,s,"xOffset",h,s.xOffset),Xn(a,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},Gr=function(e,t){var n=e._gsap||new xu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",s="deg",l=getComputedStyle(e),c=vn(e,fn)||"0",u,h,f,m,g,d,p,x,S,v,M,y,T,A,_,b,L,I,k,D,R,U,j,Y,V,K,J,ue,G,$,te,ne;return u=h=f=d=p=x=S=v=M=0,m=g=1,n.svg=!!(e.getCTM&&Iu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),A=Eo(e,n.svg),n.svg&&(n.uncache?(V=e.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),no(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,T=n.yOrigin||0,A!==kr&&(I=A[0],k=A[1],D=A[2],R=A[3],u=U=A[4],h=j=A[5],A.length===6?(m=Math.sqrt(I*I+k*k),g=Math.sqrt(R*R+D*D),d=I||k?Xi(k,I)*fi:0,S=D||R?Xi(D,R)*fi+d:0,S&&(g*=Math.abs(Math.cos(S*er))),n.svg&&(u-=y-(y*I+T*D),h-=T-(y*k+T*R))):(ne=A[6],$=A[7],J=A[8],ue=A[9],G=A[10],te=A[11],u=A[12],h=A[13],f=A[14],_=Xi(ne,G),p=_*fi,_&&(b=Math.cos(-_),L=Math.sin(-_),Y=U*b+J*L,V=j*b+ue*L,K=ne*b+G*L,J=U*-L+J*b,ue=j*-L+ue*b,G=ne*-L+G*b,te=$*-L+te*b,U=Y,j=V,ne=K),_=Xi(-D,G),x=_*fi,_&&(b=Math.cos(-_),L=Math.sin(-_),Y=I*b-J*L,V=k*b-ue*L,K=D*b-G*L,te=R*L+te*b,I=Y,k=V,D=K),_=Xi(k,I),d=_*fi,_&&(b=Math.cos(_),L=Math.sin(_),Y=I*b+k*L,V=U*b+j*L,k=k*b-I*L,j=j*b-U*L,I=Y,U=V),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,x=180-x),m=je(Math.sqrt(I*I+k*k+D*D)),g=je(Math.sqrt(j*j+ne*ne)),_=Xi(U,j),S=Math.abs(_)>2e-4?_*fi:0,M=te?1/(te<0?-te:te):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ou(vn(e,Xe)),Y&&e.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(m*=-1,S+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=je(m),n.scaleY=je(g),n.rotation=je(d)+s,n.rotationX=je(p)+s,n.rotationY=je(x)+s,n.skewX=S+s,n.skewY=v+s,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[fn]=As(c)),n.xOffset=n.yOffset=0,n.force3D=Yt.force3D,n.renderTransform=n.svg?R0:Ru?Nu:L0,n.uncache=0,n},As=function(e){return(e=e.split(" "))[0]+" "+e[1]},Da=function(e,t,n){var i=_t(t);return je(parseFloat(t)+parseFloat(Jn(e,"x",n+"px",i)))+i},L0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nu(e,t)},li="0deg",Er="0px",ci=") ",Nu=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,x=n.force3D,S=n.target,v=n.zOrigin,M="",y=x==="auto"&&e&&e!==1||x===!0;if(v&&(h!==li||u!==li)){var T=parseFloat(u)*er,A=Math.sin(T),_=Math.cos(T),b;T=parseFloat(h)*er,b=Math.cos(T),a=Da(S,a,A*b*-v),s=Da(S,s,-Math.sin(T)*-v),l=Da(S,l,_*b*-v+v)}p!==Er&&(M+="perspective("+p+ci),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(y||a!==Er||s!==Er||l!==Er)&&(M+=l!==Er||y?"translate3d("+a+", "+s+", "+l+") ":"translate("+a+", "+s+ci),c!==li&&(M+="rotate("+c+ci),u!==li&&(M+="rotateY("+u+ci),h!==li&&(M+="rotateX("+h+ci),(f!==li||m!==li)&&(M+="skew("+f+", "+m+ci),(g!==1||d!==1)&&(M+="scale("+g+", "+d+ci),S.style[Xe]=M||"translate(0, 0)"},R0=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,x=n.yOffset,S=n.forceCSS,v=parseFloat(a),M=parseFloat(s),y,T,A,_,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=er,c*=er,y=Math.cos(l)*h,T=Math.sin(l)*h,A=Math.sin(l-c)*-f,_=Math.cos(l-c)*f,c&&(u*=er,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,_*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),y*=b,T*=b)),y=je(y),T=je(T),A=je(A),_=je(_)):(y=h,_=f,T=A=0),(v&&!~(a+"").indexOf("px")||M&&!~(s+"").indexOf("px"))&&(v=Jn(m,"x",a,"px"),M=Jn(m,"y",s,"px")),(g||d||p||x)&&(v=je(v+g-(g*y+d*A)+p),M=je(M+d-(g*T+d*_)+x)),(i||r)&&(b=m.getBBox(),v=je(v+i/100*b.width),M=je(M+r/100*b.height)),b="matrix("+y+","+T+","+A+","+_+","+v+","+M+")",m.setAttribute("transform",b),S&&(m.style[Xe]=b)},D0=function(e,t,n,i,r){var a=360,s=ct(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?fi:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*sc)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*sc)%a-~~(c/a)*a)),e._pt=f=new Lt(e._pt,t,n,i,c,m0),f.e=u,f.u="deg",e._props.push(n),f},hc=function(e,t){for(var n in t)e[n]=t[n];return e},I0=function(e,t,n){var i=hc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xe]=t,s=Gr(n,1),Br(n,Xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xe],a[Xe]=t,s=Gr(n,1),a[Xe]=c);for(l in zn)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=_t(c),g=_t(u),h=m!==g?Jn(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Lt(e._pt,s,l,h,f-h,Qa),e._pt.u=g||0,e._props.push(l));hc(s,i)};Pt("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?o+s:"border"+s+o});Es[e>1?"border"+o:o]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return Rn(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var zu={name:"css",register:to,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,s=e.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,x,S,v,M,y,T,A,_;So||to(),this.styles=this.styles||Lu(e),_=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Bt[d]&&vu(d,t,n,i,e,r)))){if(m=typeof u,g=Es[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=zr(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",jn.lastIndex=0,jn.test(c)||(p=_t(c),x=_t(u)),x?p!==x&&(c=Jn(e,d,c,x)+x):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),a.push(d),_.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],ct(c)&&~c.indexOf("random(")&&(c=zr(c)),_t(c+"")||(c+=Yt.units[d]||_t(Rn(e,d))||""),(c+"").charAt(1)==="="&&(c=Rn(e,d))):c=Rn(e,d),f=parseFloat(c),S=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),d in _n&&(d==="autoAlpha"&&(f===1&&Rn(e,"visibility")==="hidden"&&h&&(f=0),_.push("visibility",0,s.visibility),Xn(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=_n[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in zn,v){if(this.styles.save(d),M||(y=e._gsap,y.renderTransform&&!t.parseTransform||Gr(e,t.parseTransform),T=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new Lt(this._pt,s,Xe,0,1,y.renderTransform,y,0,-1),M.dep=1),d==="scale")this._pt=new Lt(this._pt,y,"scaleY",y.scaleY,(S?Ji(y.scaleY,S+h):h)-y.scaleY||0,Qa),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){_.push(fn,0,s[fn]),u=C0(u),y.svg?no(e,u,0,T,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==y.zOrigin&&Xn(this,y,"zOrigin",y.zOrigin,x),Xn(this,s,d,As(c),As(u)));continue}else if(d==="svgOrigin"){no(e,u,1,T,0,this);continue}else if(d in Fu){D0(this,y,d,f,S?Ji(f,S+u):u);continue}else if(d==="smoothOrigin"){Xn(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){I0(this,u,e);continue}}else d in s||(d=pr(d)||d);if(v||(h||h===0)&&(f||f===0)&&!p0.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),x=_t(u)||(d in Yt.units?Yt.units[d]:p),p!==x&&(f=Jn(e,d,c,x)),this._pt=new Lt(this._pt,v?y:s,d,f,(S?Ji(f,S+h):h)-f,!v&&(x==="px"||d==="zIndex")&&t.autoRound!==!1?_0:Qa),this._pt.u=x||0,p!==x&&x!=="%"&&(this._pt.b=c,this._pt.r=g0);else if(d in s)A0.call(this,e,d,c,S?S+u:u);else if(d in e)this.add(e,d,c||e[d],S?S+u:u,i,r);else if(d!=="parseTransform"){po(d,u);continue}v||(d in s?_.push(d,0,s[d]):_.push(d,1,c||e[d])),a.push(d)}}A&&Tu(this)},render:function(e,t){if(t.tween._time||!wo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Rn,aliases:_n,getSetter:function(e,t,n){var i=_n[t];return i&&i.indexOf(",")<0&&(t=i),t in zn&&t!==fn&&(e._gsap.x||Rn(e,"x"))?n&&rc===n?t==="scale"?M0:y0:(rc=n||{})&&(t==="scale"?b0:S0):e.style&&!uo(e.style[t])?x0:~t.indexOf("-")?v0:Mo(e,t)},core:{_removeProperty:Br,_getMatrix:Eo}};Dt.utils.checkPrefix=pr;Dt.core.getStyleSaver=Lu;(function(o,e,t,n){var i=Pt(o+","+e+","+t,function(r){zn[r]=1});Pt(e,function(r){Yt.units[r]="deg",Fu[r]=1}),_n[i[13]]=o+","+e,Pt(n,function(r){var a=r.split(":");_n[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Yt.units[o]="px"});Dt.registerPlugin(zu);var Uu=Dt.registerPlugin(zu)||Dt;Uu.core.Tween;const tr=new Hg,nr=new kt(45,window.innerWidth/window.innerHeight,.1,200),Rt=new Nc({antialias:!0}),Ns=new s_(nr,Rt.domElement),Bu=document.querySelector("#newWorldBtn");Ns.target.set(0,0,0);Ns.dampingFactor=.02;Ns.enableDamping=!0;tr.background=new Fe("#AECFE6");nr.position.set(25,20,ku(window.innerWidth));Rt.setSize(innerWidth,innerHeight);Rt.toneMapping=mc;Rt.outputEncoding=Ge;Rt.physicallyCorrectLights=!0;Rt.shadowMap.enabled=!0;Rt.shadowMap.type=ro;document.body.appendChild(Rt.domElement);const F0=()=>{let o=window.innerWidth,e=window.innerHeight;nr.updateProjectionMatrix(),nr.aspect=o/e,Rt.setSize(o,e),nr.position.set(25,20,ku(o))};function ku(o){return o<800?90:o<900?70:50}const Gu=async()=>{let o=new ka(Rt),e=await new r_().setDataType(un).loadAsync("assets/envmap.hdr"),t=o.fromEquirectangular(e).texture;const n=10;let i={dirt:await new Vn().loadAsync("assets/dirt.jpg"),clay:await new Vn().loadAsync("assets/clay.jpg"),grass:await new Vn().loadAsync("assets/grass.png"),bark:await new Vn().loadAsync("assets/bark.png"),leaves:await new Vn().loadAsync("assets/leaves.jpg"),sand:await new Vn().loadAsync("assets/sand.jpg"),stone:await new Vn().loadAsync("assets/stone.png"),water:await new Vn().loadAsync("assets/water.png")},r={dirt:new en(0,0,0),clay:new en(0,0,0),grass:new en(0,0,0),bark:new en(0,0,0),leaves:new en(0,0,0),sand:new en(0,0,0),stone:new en(0,0,0)};g_(n,r);let a=oi(t,r.dirt,i.dirt),s=oi(t,r.clay,i.clay),l=oi(t,r.grass,i.grass),c=oi(t,r.bark,i.bark),u=oi(t,r.leaves,i.leaves),h=oi(t,r.sand,i.sand),f=oi(t,r.stone,i.stone);const m=l_(t,i.dirt,n),g=c_(t,i.clay,n),d=o_(t,i.water,n),p=a_(t),x=v_(),S=y_();tr.add(a,s,l,c,u,h,f,m,g,d,p,x,S);const v=Uu.timeline({defaults:{duration:1}});v.fromTo(d.scale,{z:0,x:0,y:0},{z:1,x:1,y:1}),v.fromTo([c.scale,u.scale],{y:0},{y:1}),v.fromTo(p.scale,{z:0,x:0,y:2},{z:1,x:1,y:1}),Rt.setAnimationLoop(()=>{Ns.update(),Rt.render(tr,nr)}),Bu.disabled=!1};Gu();Bu.addEventListener("click",async o=>{o.target.disabled=!0,O0(),Gu()});window.addEventListener("resize",async()=>{F0()});const O0=async()=>{Rt.setAnimationLoop(null),Rt.renderLists.dispose(),await tr.remove.apply(tr,tr.children)};
