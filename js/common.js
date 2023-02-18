function updateNumberField(inputField) {
	const inputFieldNumber = document.getElementById(inputField);
	const inputFieldString = inputFieldNumber.value;
	const inputNumber = parseFloat(inputFieldString);
	inputFieldNumber.value = '';
	return inputNumber;
}
