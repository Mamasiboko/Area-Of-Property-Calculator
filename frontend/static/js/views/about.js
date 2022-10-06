import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About US");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>why you not working
            </p>
        `;
    }
}