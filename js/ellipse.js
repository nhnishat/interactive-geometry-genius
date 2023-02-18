document.getElementById('btn-ellipse').addEventListener('click', function () {
	const elevenValue = updateNumberField('input-field-eleven');
	const twelveValue = updateNumberField('input-field-twelve');

	const pi = 3.1416;
	const multiplications = elevenValue * twelveValue;
	const result = pi * multiplications;
	const finalResult = result.toFixed(2);
	console.log(finalResult);

	const ellipseNumber = document.getElementById('ellipse-number');
	const parallelogramNumberString = ellipseNumber.innerText;
	ellipseNumber.innerText = elevenValue;

	const ellipseText = document.getElementById('ellipse-text');
	const ellipseTextString = ellipseText.innerText;
	ellipseText.innerText = twelveValue;

	if (isNaN(elevenValue)) {
		alert('please Give a Valid number');
	} else if (isNaN(twelveValue)) {
		alert('please Give a Valid number');
	} else {
		document.getElementById('value-six').innerText = finalResult;
	}
});
