var result;
var math = "";
var math_;
var operator;
var triggered;
var i = 0;

function calc(a) {
		if(Number.isInteger(a) || a == '.') {
				if(triggered) {
					  if(i == 2) {
					  		math_ = result;
					  }
						math = math + a.toString();
						document.getElementById('calc').innerHTML = math;
						switch(operator) {
								case "+":
										result = math_ + Number(math);
										break;
								case "-":
										result = math_ - Number(math);
										break;
								case "×":
										result = Number(math) * math_;
										break;
								case "÷":
										result = math_ / Number(math);
										break;
								case "rem":
										result = math_ % Number(math);
										break;
								case "^":
										result = Math.pow(math_, Number(math));
										break;
						}
						document.getElementById('result').innerHTML = result;
						if(i == 2) {
								i = 0;
						}
				} else {
						math = math + a.toString()
						document.getElementById('calc').innerHTML = math;}
						
		} else if(a == '='){
				triggered = false;
				document.getElementById('calc').innerHTML = math_.toString() + " " + operator + " " + math + ' = ' +result;
				math = "";
				math_ = 0;
				result = 0;
				operator = "";
				i = 0;
		}  else {
				triggered = true;
				operator = a;
				math_ = Number(math);
				i++;	document.getElementById('result').innerHTML = math;
				math = "";
				document.getElementById('calc').innerHTML = a;
		}
}

function ac() {
		document.getElementById('calc').innerHTML = '00';
		document.getElementById('result').innerHTML = "00";
		math = "";
		math_ = 0;
		result = 0;
		operator = "";
		triggered = false;
		i = 0;
}

function z() {
		calc(0);
		calc(0);
}
