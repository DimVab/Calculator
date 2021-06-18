// форма
const form = document.querySelector('.form');
// кнопки:
const plusButton = form.querySelector('.form__button_type_plus');
const minusButton = form.querySelector('.form__button_type_minus');
const multiplyButton = form.querySelector('.form__button_type_multiply');
const divideButton = form.querySelector('.form__button_type_divide');
const equalButton = form.querySelector('.form__button_type_equals');
const cleanLastButton = form.querySelector('.form__button_type_clean-last');
const cleanButton = form.querySelector('.form__button_type_clean');
// цифры
const Button1 = form.querySelector('.form__button_number_1');
const Button2 = form.querySelector('.form__button_number_2');
const Button3 = form.querySelector('.form__button_number_3');
const Button4 = form.querySelector('.form__button_number_4');
const Button5 = form.querySelector('.form__button_number_5');
const Button6 = form.querySelector('.form__button_number_6');
const Button7 = form.querySelector('.form__button_number_7');
const Button8 = form.querySelector('.form__button_number_8');
const Button9 = form.querySelector('.form__button_number_9');
// поля:
const inputField = form.querySelector('.form__input');
const outputField = form.querySelector('.form__output');

function plus() {
  inputField.value = inputField.value + ' + ';
}

function minus() {
  inputField.value = inputField.value + ' - ';
}

function multiply() {
  inputField.value = inputField.value + ' * ';
}

function divide() {
  inputField.value = inputField.value + ' / ';
}

function addInteger1() {
  inputField.value = inputField.value + '1';
}

function addInteger2() {
  inputField.value = inputField.value + '2';
}

function addInteger3() {
  inputField.value = inputField.value + '3';
}

function addInteger4() {
  inputField.value = inputField.value + '4';
}

function addInteger5() {
  inputField.value = inputField.value + '5';
}

function addInteger6() {
  inputField.value = inputField.value + '6';
}

function addInteger7() {
  inputField.value = inputField.value + '7';
}

function addInteger8() {
  inputField.value = inputField.value + '8';
}

function addInteger9() {
  inputField.value = inputField.value + '9';
}

function result() {
  if (inputField.value !== '') {
    outputField.value = eval(inputField.value);
  }
}

function cleanLast() {
  if (inputField.value.endsWith(' + ') || inputField.value.endsWith(' - ') || inputField.value.endsWith(' * ') || inputField.value.endsWith(' / ') ) {
    inputField.value = inputField.value.slice(0, -3);
  } else {
    inputField.value = inputField.value.slice(0, -1);
  }
}

function clean() {
  inputField.value = '';
  outputField.value = '';
}

// добавить слушатели:
plusButton.addEventListener('click', plus);
minusButton.addEventListener('click', minus);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
equalButton.addEventListener('click', result);
cleanLastButton.addEventListener('click', cleanLast);
cleanButton.addEventListener('click', clean);
Button1.addEventListener('click', addInteger1);
Button2.addEventListener('click', addInteger2);
Button3.addEventListener('click', addInteger3);
Button4.addEventListener('click', addInteger4);
Button5.addEventListener('click', addInteger5);
Button6.addEventListener('click', addInteger6);
Button7.addEventListener('click', addInteger7);
Button8.addEventListener('click', addInteger8);
Button9.addEventListener('click', addInteger9);
// тесты