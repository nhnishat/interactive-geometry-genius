document.getElementById('btn-rectangle').addEventListener('click', function () {
	const threeValue = updateNumberField('input-field-three');
	const fourValue = updateNumberField('input-field-four');

	const multiplications = threeValue * fourValue;
	const result = multiplications;
	const finalResult = result.toFixed(2);

	const rectangleNumber = document.getElementById('rectangle-number');
	const rectangleWString = rectangleNumber.innerText;
	rectangleNumber.innerText = threeValue;

	const rectangleText = document.getElementById('rectangle-text');
	const rectangleTextString = rectangleText.innerText;
	rectangleText.innerText = fourValue;

	if (isNaN(threeValue)) {
		alert('please Give a Valid number');
	} else if (isNaN(fourValue)) {
		alert('please Give a Valid number');
	} else {
		document.getElementById('value-two').innerText = finalResult;
	}
});
