import{a as s}from"./chunk-SA3MY6H2.js";import{a as l}from"./chunk-MA3AC62H.js";import{a as o}from"./chunk-K2U7JEMX.js";function n(t,r,A,p){t instanceof EventTarget&&t.removeEventListener(r,A,p)}var e,f,i,c,u,a;function D(t,r){t?e=t:e=r.target}function m(t){f=t.clientX,i=t.clientY}function b(t){if(t==="none")return[0,0];let r=t.split(/[()]/)[1].split(", ");return[Number(r[4]),Number(r[5])]}function w(){let t=window.getComputedStyle(e,null),r=b(t.transform);c=r[0]-f,u=r[1]-i}function g(t){(t.clientX!==f||t.clientY!==i)&&(e.style.transform=`matrix(1, 0, 0, 1, ${(t.clientX+c).toString()}, ${(t.clientY+u).toString()})`,m(t))}function X(t){let r=performance.now();r-a>16&&(g(t),a=r)}function d(t){return X(t),t.preventDefault(),!1}function Y(t){return g(t),n(document.body,"dragover",d),t.preventDefault(),!1}function y(t){let r=new Image;r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",t.dataTransfer.setDragImage(r,0,0)}function T(t,r){D(t,r),y(r),m(r),w(),a=0,r.dataTransfer.setData("text/plain",""),o(document.body,"dragover",d),s(document.body,"drop",Y)}function x(t,r){t.draggable=!0,o(t,"dragstart",l(T,r))}export{x as a};
//# sourceMappingURL=chunk-7JGP7O2F.js.map
