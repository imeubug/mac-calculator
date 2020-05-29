'use strict';

const normalKeys = document.querySelectorAll('#normal-keys button');
const fnKeys = document.querySelectorAll('#fn-keys button');
const displayArea = document.getElementById('display');
let expr = '';
let numberEntered = false;

normalKeys.forEach(key => {
	key.addEventListener('click', () => {

		if(key.value === '=') {
			if(expr === '') return;
			let answer = Function('"use strict";return ('+expr+')')();
			displayArea.children[0].value = answer;
			expr = answer;
		} else {
			let t = displayArea.children[0];

			if (Number(key.value) >= 0 && Number(key.value) <= 9) {
				if(numberEntered == false || t.value==='0'){
					t.value = key.value
					numberEntered = true;
				} else {
					t.value += key.value
				}
			} else {
				numberEntered = false;
			}
			expr += key.value;
		}
	});
});

fnKeys.forEach(key => {
	key.addEventListener('click', () => {
		if(key.value === "C") {
			let t = displayArea.children[0];
			t.value = '0';
		} else if (key.value === "AC") {
			displayArea.children[0].value = 0;
			expr = ''
		} else {

		}
	});
});
