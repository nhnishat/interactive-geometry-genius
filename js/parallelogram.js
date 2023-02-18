document
	.getElementById('btn-parallelogram')
	.addEventListener('click', function () {
		const fiveValue = updateNumberField('input-field-five');
		const sixValue = updateNumberField('input-field-six');

		const multiplications = fiveValue * sixValue;
		const result = multiplications;
		const finalResult = result.toFixed(2);

		const parallelogramNumber = document.getElementById('parallelogram-number');
		const parallelogramNumberString = parallelogramNumber.innerText;
		parallelogramNumber.innerText = fiveValue;

		const parallelogramText = document.getElementById('parallelogram-text');
		const parallelogramTextString = parallelogramText.innerText;
		parallelogramText.innerText = sixValue;

		if (isNaN(fiveValue)) {
			alert('please Give a Valid number');
		} else if (isNaN(sixValue)) {
			alert('please Give a Valid number');
		} else {
			document.getElementById('value-three').innerText = finalResult;
		}
	});
