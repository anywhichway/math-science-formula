//const self = window.currentComponent(import.meta.url);
let promise = Promise.resolve();

self.properties({
    connected() {
        this.innerHTML ||= "\\";
    },
    async render() {
        if(this.innerHTML==="\\") {
            this.shadowRoot.innerHTML = '<i style="font-weight:lighter">Empty LaTex Expression</i>';
            this.setAttribute("title","Empty LaTex Expression");
            return;
        }
        const open = this.style.display==="block" ? "[" : "(",
            close = this.style.display==="block" ? "]" : ")";
        this.shadowRoot.innerHTML =
            '<mjx-doc><mjx-head></mjx-head><mjx-body>\\' + open + this.innerHTML + '\\' + close + '</mjx-body></mjx-doc>';
        try {
           // MathJax.typesetShadow(this.shadowRoot);
           await promise.then(() => MathJax.typesetShadowPromise(this.shadowRoot))
                .catch((e) => console.log(e));
        } catch(e) {
            console.log(e);
        }
        this.setAttribute("title",this.textContent);
    }
});


