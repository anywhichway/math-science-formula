const self = window.currentComponent(import.meta.url);

self.properties({
    render() {
        const source = this.textContent;
        this.shadowRoot.innerHTML = `<div></div>`;
        const typeset = this.shadowRoot.firstElementChild;
        typeset.innerText = source;
        this.setAttribute("title",source);
        typeset.style.display = this.style.display;
        if(this.style.display==="inline-block") {
            //this.style.display = "inline-block";
            typeset.style.display = "inline-block";
            this.classList.remove("optioneditable-block");
            this.classList.add("optioneditable");
        } else {
            //this.style.display = "block";
            typeset.style.display = this.style.display;
            this.classList.remove("optioneditable");
            this.classList.add("optioneditable-block");
        }
        typeset.replaceWith(MathJax.tex2svg(source));
    }
});


