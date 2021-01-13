var result;
var inputCurrent = "";
var input1;
var operator;
var triggered = false;
var answer;
var clickCount = 0;

function calc(value) {
		if(!isNaN(value) || value == '.') {
				if(triggered) {
					  if(clickCount == 2) {
					  		input1 = result;
					  }
						inputCurrent = inputCurrent + value.toString();
						document.getElementById('calc').innerHTML = inputCurrent;
						switch(operator) {
								case "+":
										result = input1 + Number(inputCurrent);
										break;
								case "-":
										result = input1 - Number(inputCurrent);
										break;
								case "×":
										result = input1 * Number(inputCurrent);
										break;
								case "÷":
										result = input1 / Number(inputCurrent);
										break;
								case "rem":
										result = input1 % Number(inputCurrent);
										break;
								case "^":
										result = Math.pow(input1, Number(inputCurrent));
										break;
						}
						document.getElementById('result').innerHTML = result;
						if(clickCount == 2) {
								clickCount = 1;
						}
				} else {
						inputCurrent = inputCurrent + value.toString()
						document.getElementById('calc').innerHTML = inputCurrent;}
						
		} else if(value == '='){
				triggered = false;
				document.getElementById('calc').innerHTML = input1.toString() + " " + operator + " " + inputCurrent + ' = ' +result;
				inputCurrent = "";
				input1 = 0;
				answer = result;
				result = 0;
				operator = "";
				i = 0;
		}  else {
				triggered = true;
				operator = value;
				input1 = Number(inputCurrent);
				if(clickCount == 0) {
						result = Number(inputCurrent);
				}
				clickCount++;	document.getElementById('result').innerHTML = result;
				inputCurrent = "";
				document.getElementById('calc').innerHTML = value;
		}
}

function ac() {
		document.getElementById('calc').innerHTML = '00';
		document.getElementById('result').innerHTML = "00";
		inputCurrent = "";
		input1 = 0;
		result = 0;
		operator = "";
		triggered = false;
		clickCount = 0;
		answer = 0;
}

function z() {
		calc(0);
		calc(0);
		}

function cons(value) {
		var constantValue;
		switch(value) {
				case "π":
				  constantValue = Math.PI;
				  break;
				case "e":
				  constantValue = Math.E;
				  break;
				case "g":
				  constantValue = 9.78033;
				  break;
				case "G":
				  constantValue = 6.67 * Math.pow(10, -11);
				  break;
				case "c":
				  constantValue = 299792458;
				  break;
		}
		calc(constantValue);
		document.getElementById('calc').innerHTML = value;
}

function expo(base, power, op) {
		var o = "";
		var e;
		
		
						e = (base * base).toString();
						if(triggered) {
								switch(operator) {
										case "+":
												o = "-";
												break;
										case "-":
												o = "+";
												break;
						  			case "×":
												o = "÷";
												break;
										case "÷":
												o = "×";
												break;
										}
						calc(o);
						calc(base);
						calc(op);
						} else {
								ac();
						}
					  calc(e);	document.getElementById('calc').innerHTML = base + '<sup>' + power + '</sup> (' + inputCurrent + ')';
}

function func(value) {
		switch(value) {
				case '-':
						inputCurrent = (Number(inputCurrent) * -1).toString();
						document.getElementById('calc').innerHTML = inputCurrent;
						break;
				case 'sqr':
						expo(Number(inputCurrent), 2, operator);
						break;
				case 'cube':
						expo(Number(inputCurrent), 3, operator);
						break;
				case 'x!':
						var o = "";
						var op = operator;
						var h = inputCurrent;
						var j = 1;
						for(var i = 1; i <= Number(inputCurrent); i++) {
								j = j * i;
						}
						if(triggered) {
								switch(operator) {
										case "+":
												o = "-";
												break;
										case "-":
												o = "+";
												break;
						  			case "×":
												o = "÷";
												break;
										case "÷":
												o = "×";
												break;
										}
						calc(o);
						calc(h);
						calc(op);
						} else {
								ac();
						}
					  calc(j);
					  document.getElementById('calc').innerHTML = h + '! (' + j + ')';
						break;
		}
}

function ans() {
		calc(answer);
		document.getElementById('calc').innerHTML = 'ANS (' + answer + ')';
}

function eng() {

		result = result.toExponential();
		document.getElementById('calc').innerHTML =  result;
}

function rnd() {
		result = Math.round(result);
		document.getElementById('calc').innerHTML =  result;
		
}
