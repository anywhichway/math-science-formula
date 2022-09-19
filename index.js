const self = window.currentComponent(import.meta.url);

self.properties({
    render() {
        debugger;
        const open = this.style.display==="block" ? "[" : "(",
            close = this.style.display==="block" ? "]" : ")";
        this.shadowRoot.innerHTML =
            '<mjx-doc><mjx-head></mjx-head><mjx-body>\\' + open + this.innerHTML + '\\' + close + '</mjx-body></mjx-doc>';
        MathJax.typesetShadow(this.shadowRoot);
        this.setAttribute("title",this.textContent);
    }
});


