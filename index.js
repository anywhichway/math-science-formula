//const self = window.currentComponent(import.meta.url);

self.properties({
    render() {
        //debugger;
        const open = this.style.display==="block" ? "[" : "(",
            close = this.style.display==="block" ? "]" : ")";
        this.shadowRoot.innerHTML =
            '<mjx-doc><mjx-head></mjx-head><mjx-body>\\' + open + this.innerHTML + '\\' + close + '</mjx-body></mjx-doc>';
        try {
            MathJax.typesetShadow(this.shadowRoot);
        } catch(e) {

        }
        this.setAttribute("title",this.textContent);
    }
});


