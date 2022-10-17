import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About US");
    }

    async getHtml() {
        return `
            <h1>About Us</h1>
            <p>why you not working
            </p>
        `;
    }
}