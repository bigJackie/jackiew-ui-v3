// src/directives/waves.js
export default {
  mounted(el: HTMLElement, binding) {
    if (binding.value || binding.value == undefined) {
      let dom = document.createElement("div");
      let pos = getComputedStyle(el).position;
      dom.setAttribute("class", "waves");
      dom.innerHTML = "<div></div>";
      dom.style.position = "absolu";
      dom.style.width = el.getBoundingClientRect().width + "px";
      dom.style.height = el.getBoundingClientRect().height + "px";
      dom.style.top = "0px";
      dom.style.left = "0px";
      dom.style.right = "0px";
      dom.style.bottom = "0px";

      el.addEventListener("click", (e) => {
        el.style.position = "relative";
        dom.style.animation = "wave ease-out .25s";
        dom.style.opacity = ".2";
        dom.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
      });

      dom.addEventListener("webkitAnimationEnd", (e) => {
        // el.style.position = pos;
        e.target.style.animation = "";
        e.target.style.opacity = "0";
      });

      dom.addEventListener("animationend", (e) => {
        // el.style.position = pos;
        e.target.style.animation = "";
        e.target.style.opacity = "0";
      });

      el.appendChild(dom);
      console.log(dom);
    }
  },
};
