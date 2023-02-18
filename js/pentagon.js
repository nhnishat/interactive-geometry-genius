document.getElementById('btn-pentagon').addEventListener('click', function () {
	const nineValue = updateNumberField('input-field-nine');
	const tenValue = updateNumberField('input-field-ten');

	const multiplications = nineValue * tenValue;
	const result = 0.5 * multiplications;
	const finalResult = result.toFixed(2);

	if (isNaN(nineValue)) {
		alert('please Give a Valid number');
	} else if (isNaN(tenValue)) {
		alert('please Give a Valid number');
	} else {
		document.getElementById('value-five').innerText = finalResult;
	}
});
