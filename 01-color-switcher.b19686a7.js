!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){n.start()})),e.addEventListener("click",(function(){n.stop()}));var n={intervalID:null,start:function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),this.intervalID=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)},stop:function(){clearInterval(this.intervalID),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}}}();
//# sourceMappingURL=01-color-switcher.b19686a7.js.map