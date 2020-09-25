let prevNumber = 0;
let total = 0;
let currentNumber = "";
let currentOperation = "";
let operationStack = "";
let displayingTotal = false;
const display = document.getElementById('display-current');
const opStackElement = document.getElementById('previous-operation-display');

function updateDisplays() {
	display.innerText = currentNumber;
	opStackElement.innerText = operationStack;
}

function finalizeOperation() {
	operationStack = operationStack + " " + currentNumber + " " + currentOperation;
	prevNumber = Number.parseFloat(currentNumber);
	currentNumber = total.toString();
	updateDisplays();
	displayingTotal = true;
}

function executeOperation(op) {
	let n = Number.parseFloat(currentNumber);
	switch (op) {
		case ("+"):
			total = total + n;
			break;
		case ("-"):
			total = total - n;
			break;
		case ("*"):
			total = total * n;
			break;
		case ("/"):
			total = total / n;
			break;
		default:
			total = n;
			break;
	}
}

function numberButton(numberString) {
	if (displayingTotal || currentNumber === '0') {
		currentNumber = "";
		displayingTotal = false;
	}
	currentNumber += numberString;
	updateDisplays();
}

function decimal() {
	if (displayingTotal || !currentNumber) {
		currentNumber = "0";
		displayingTotal = false;
	}
	currentNumber = currentNumber + ".";
	updateDisplays();
}

function currentOp(opString) {
	if (!currentNumber || currentNumber === '0') {
		display.innerText = "0";
		currentNumber = "0";
		return;
	}
	let n = Number.parseFloat(currentNumber);
	let m = 0;
	switch (opString) {
		case ('%'):
			m = ((prevNumber * n) / 100);
			break;
		case ('square'):
			m = (n * n);
			break;
		case ('sqrt'):
			m = Math.sqrt(n);
			break;
		case ('oneOver'):
			m = 1 / n;
			break;
		case ('sign'):
			m = -n;
			break;
		case ('backspace'):
			m = currentNumber.slice(0, currentNumber.length - 1);
			break;
	}
	if (opString == 'square' || opString == 'sqrt' || opString == 'oneOver') {
		currentNumber = (!!m ? m.toString() : "0");
		updateDisplays();
		clearState()
	} else {
		currentNumber = (!!m ? m.toString() : "0");
		updateDisplays();
	}
}

function operationButton(opString) {
	if (displayingTotal || !currentNumber) {
		return
	}
	executeOperation(currentOperation);
	currentOperation = opString;
	finalizeOperation();
}

function equalsButton() {
	if (!currentOperation) {
		return;
	}
	executeOperation(currentOperation);
	let final = total;
	clearState();
	total = final;
	finalizeOperation();
	total = 0;
}

function clearEntryButton() {
	currentNumber = ""
	display.innerText = "0"
}

function clearButton() {
	clearState()
	opStackElement.innerText = ""
	display.innerText = "0"
}

function clearState() {
	currentOperation = ""
	operationStack = ""
	currentNumber = ""
	total = 0
	prevNumber = 0
}

function funClick(buttonId) {
	let button = document.getElementById(buttonId)
	button.classList.add('clicked')
	button.click()
	setTimeout(function () {
		button.classList.remove('clicked')
	}, 100)
}

function keyboard(e) {
	e.preventDefault()
	switch (e.key) {
		case ("Equals"):
			funClick("equals")
			break
		case ("Backspace"):
			funClick("backspace")
			break
		case ("Clear"):
			funClick("clear-entry")
			break
		case ("/"):
			funClick("divide")
			break
		case ("+"):
			funClick("add")
			break
		case ("-"):
			funClick("subtract")
			break
		case ("."):
			funClick("decimal")
			break
		case ("*"):
			funClick("multiply")
			break
		case ("9"):
			funClick("nine")
			break
		case ("8"):
			funClick("eight")
			break
		case ("7"):
			funClick("seven")
			break
		case ("6"):
			funClick("six")
			break
		case ("5"):
			funClick("five")
			break
		case ("4"):
			funClick("four")
			break
		case ("3"):
			funClick("three")
			break
		case ("2"):
			funClick("two")
			break
		case ("1"):
			funClick("one")
			break
		case ("0"):
			funClick("zero")
			break
		default:
			break
	}
}

document.addEventListener("keydown", keyboard);