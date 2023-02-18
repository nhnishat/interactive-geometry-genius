document.getElementById('btn-triangle').addEventListener('click', function () {
	const firstValue = updateNumberField('input-field-one');
	const secondValue = updateNumberField('input-field-two');

	const multiplication = firstValue * secondValue;
	const result = 0.5 * multiplication;
	const finalResult = result.toFixed(2);

	if (isNaN(firstValue)) {
		alert('please Give a Valid number');
	} else if (isNaN(secondValue)) {
		alert('please Give a Valid number');
	} else {
		document.getElementById('value-one').innerText = finalResult;
	}
});
