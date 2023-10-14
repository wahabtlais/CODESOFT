let inputValue = document.getElementById("textInput");

let calc = (num) => {
	inputValue.value += num;
};

let result = () => {
	try {
		inputValue.value = eval(inputValue.value);
	} catch (error) {
		alert("Invalid Input");
	}
};

function clr() {
	inputValue.value = "";
}

function del() {
	inputValue.value = inputValue.value.slice(0, -1);
}
