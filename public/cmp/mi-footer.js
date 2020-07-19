class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Cruz Ramirez Brandon de Jesus.`;
            `Copyright &copy; 2020 Rivera Zavala Daniel.`;
    }
}
customElements.define("mi-footer", MiFooter);