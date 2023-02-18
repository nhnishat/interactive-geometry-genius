document.getElementById('btn-rectangle').addEventListener('click', function () {
	const threeValue = updateNumberField('input-field-three');
	const fourValue = updateNumberField('input-field-four');

	const multiplications = threeValue * fourValue;
	const result = multiplications;
	const finalResult = result.toFixed(2);

	if (isNaN(threeValue)) {
		alert('please Give a Valid number');
	} else if (isNaN(fourValue)) {
		alert('please Give a Valid number');
	} else {
		document.getElementById('value-two').innerText = finalResult;
	}
});
