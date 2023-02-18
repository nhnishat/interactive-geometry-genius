document.getElementById('btn-rhombus').addEventListener('click', function () {
	const sevenValue = updateNumberField('input-field-seven');
	const eightValue = updateNumberField('input-field-eight');
	const multiplications = sevenValue * eightValue;
	const result = 0.5 * multiplications;
	const finalResult = result.toFixed(2);

	if (isNaN(sevenValue)) {
		alert('please Give a Valid number');
	} else if (isNaN(eightValue)) {
		alert('please Give a Valid number');
	} else {
		document.getElementById('value-four').innerText = finalResult;
	}
});
