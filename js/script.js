function calculateInsurance() {
	var name = document.getElementById("name").value; //gets value of name from form
	var age = Number(document.getElementById("age").value); // gets value of age from form
	var country = document.getElementById("country").value; // gets value of country from form
	var hps = Number(document.getElementById("hps").value); // gets value of hps from form
	var errMessageNaN = "</b>, we cannot proceed with your request. <br>Please make sure, that you input correct data in each field.";
	var errMessageContact = "</b>, at at the moment we cannot provide calculation for your request. Please, contact us directly to get a quote <br>(Email <b>request@cf-insurance.at</b>)";
	console.log(name, age, country, hps);
	// add checker for numbers and restart the calculation again
	if (isNaN(age) || isNaN(hps)) {
		document.getElementById("output").innerHTML = "Dear <b>" + name + errMessageNaN;
	} else if (country == "at") {
		var result = hps * 100 / age + 50; // testcase Austria - OK
	} else if (country == "hu") {
		var result = hps * 120 / age + 100; // testcase Hungary - OK
	} else if (country == "gr") {
		var result = ((hps * 150) / (age + 3)) + 50; // testcase Greece - Ok
	} else {
		//document.getElementById("output").style.fontSize = "1.8vw"; // changes font-size of div to fit in a long message, how to return it back afterwrds?
		document.getElementById("output").innerHTML = "Dear <b>" + name + errMessageContact;
	}
	// console.log(result);
	// create 4th testcase with different output
	var insurance = result.toFixed(2); // rounds value of var result to max. 1 dec. point
	document.getElementById("output").innerHTML = "Dear <b>" + name + "</b>, insurance for your car will cost <b>" + insurance + " EUR.</b>";
}
	document.getElementById("calc-button").addEventListener("click", calculateInsurance, false);