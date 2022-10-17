import AbstractView from "./AbstractView.js";
import areaOfPropertyCalculations from "./areaOfPropertyCalculations.js";
import { functionUpdateOne, functionUpdateTwo, functionUpdateThree, 
	functionUpdateFour, calculateBy, inputs, Clear} from "./templatemo_script.js";

	console.log(functionUpdateOne); console.log(functionUpdateTwo);console.log(functionUpdateThree);
	console.log(functionUpdateFour); console.log(calculateBy);console.log(inputs); console.log(Clear); 
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("AreaOfProerty");
    }

    async getHtml() {
        return`
		<!DOCTYPE html>
        <html>
		<head></head>
		<body>
        <div class="info-section">
		<div class="info-box">
		<div  class="wrapper">
			<form id="newForm">
				<p>The area of each Room</p>
				<p>Total Area:
				<input id="value1" type="number" >
					<select>
					<option>feet</option>
					<option>inches</option>
					<option>yards</option>
					<option>centimeters</option>
					</select>
									
					<span id="error1"></span></p>
					</p>
								
					<p>1ROK:
					<input id="value2" type="number" value="10">
					<select>
					<option>feet</option>
					<option>inches</option>
					<option>yards</option>
					<option>centimeters</option>
					</select>
					<span id="error2"></span></p>
								
					<p>2ROK:
					<input id="value3" type="number" value="20">
					<select>
					<option>feet</option>
					<option>inches</option>
					<option>yards</option>
					<option>centimeters</option>
					</select>
					<span id="error3"></span></p>
			
			        <p>3ROK:
					<input id="value4"type="number" value="40">
					<select>
				    <option>feet</option>
					<option>inches</option>
					<option>yards</option>
					<option>centimeters</option>
					</select>
					<span id="error4"></span></p>
							
					<p>4ROK:
					<input id="value5" type="number" value="30">
					<select>
					<option>feet</option>
					<option>inches</option>
					<option>yards</option>
					<option>centimeters</option>
					</select>
					<span id="error5"></span></p>
			 
					<input type="button" id="btn" Value="Calculate"/>
					<button onclick="Clear()" id="Clear" type="reset">Reset</button>
					</form>
				    </div>
					</div>
					<div class="info-box">
						
					<div class="calculations">
					<form class="calculationsForm">
			        <p class="allResults">Results</p>
					<p>Total Area:</p><span id="firstInput"></span><input id="value1" type="text">
					<p>multiply value of Total Area by 1ROK:</p><span id="results"></span><input id="results" type="text"><br>
					<p>Area percentage of 1ROK</p><span id="totalArea1"></span><input id="value1" type="text">

					<p>Balance After deducting area of 1ROK</p><span id="bal1"></span><input id="value1" type="text">
				    <p>Area percentage of 2ROK</p> <span id="1ROK"></span><input id="value1" type="text">

					<p>Balance After deducting area of 2ROK</p><span id="bal2"></span><input id="value1" type="text">
					<p>Area percentage of 3ROK</p><span id="2ROK"></span><input id="value1" type="text">

					<p>Balance After deducting area of 3ROK</p><span id="bal3"></span><input id="value1" type="text">
					<p>Area percentage of 4ROK</p><span id="3ROK"></span><input id="value1" type="text">

			    	</form>
					</div>
					</div>
				</div>
				</div>
				<script src="templatemo_script.js" ></script>
			</body>
			</html> 		
			
        `;
    }
}