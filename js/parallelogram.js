document
	.getElementById('btn-parallelogram')
	.addEventListener('click', function () {
		const fiveValue = updateNumberField('input-field-five');
		const sixValue = updateNumberField('input-field-six');

		const multiplications = fiveValue * sixValue;
		const result = multiplications;
		const finalResult = result.toFixed(2);

		if (isNaN(fiveValue)) {
			alert('please Give a Valid number');
		} else if (isNaN(sixValue)) {
			alert('please Give a Valid number');
		} else {
			document.getElementById('value-three').innerText = finalResult;
		}
	});
