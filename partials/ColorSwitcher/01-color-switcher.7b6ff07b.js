!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}e.addEventListener("click",(function(){e.disabled=!0,t=setInterval(o,1e3)})),n.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.7b6ff07b.js.map
