import AbstractView from './AbstractView.js';

export default class extends AbstractView {
	constructor(params) {
		super(params);
		this.setTitle('HomeScreen');
	}

	async getHtml() {
		return `
        <div class="products">
        <div class="product"><a href="/math" class="thumbnail"><img src="static/images/house.jpg" alt="" class="img-responsive"><p>Property calculator</p></a></div>
        <div class="product"><a href="calculator" class="thumbnail"><img src="static/images/OIP (1).jpeg" alt="" class="img-responsive"><p>calculator</p></a></div>
        <div class="product"><a href="calculator" class="thumbnail"><img src="static/images/R (1).jpeg" alt="" class="img-responsive"><p>calculator</p></a></div>
        <div class="product"><a href="calculator" class="thumbnail"><img src="static/images/R.jpeg" alt="" class="img-responsive"><p>calculator</p></a></div>
        
        <div class="product"><a href="calculator" class="thumbnail"><img src="static/images/OIP.jpeg" alt="" class="img-responsive"><p>calculator</p></a></div>
        <div class="product"><a href="calculator" class="thumbnail"><img src="static/images/home-area.jpg" alt="" class="img-responsive"><p>calculator</p></a></div>
        <div class="product"><a href="calculator" class="thumbnail"><img src="static/images/property calculator.jpg" alt="" class="img-responsive"><p>calculator</p></a></div>
        <div class="product"><a href="calculator" class="thumbnail"><img src="static/images/property.jpeg" alt="" class="img-responsive"><p>calculator</p></a></div>
        </div>
        `;
	}
}
