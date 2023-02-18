document.getElementById('btn-rhombus').addEventListener('click', function () {
	console.log('clicked button');
	const sevenValue = updateNumberField('input-field-seven');
	const eightValue = updateNumberField('input-field-eight');
	const multiplications = sevenValue * eightValue;
	const result = 0.5 * multiplications;
	const finalResult = result.toFixed(2);
	console.log(finalResult);
	const rhombusNumber = document.getElementById('rhombus-number');
	const rhombusNumberString = rhombusNumber.innerText;
	rhombusNumber.innerText = sevenValue;
	const rhombusText = document.getElementById('rhombus-text');
	const rhombusTextString = rhombusText.innerText;
	rhombusText.innerText = eightValue;

	if (isNaN(sevenValue)) {
		alert('please Give a Valid number');
	} else if (isNaN(eightValue)) {
		alert('please Give a Valid number');
	} else {
		document.getElementById('value-four').innerText = finalResult;
	}
});
