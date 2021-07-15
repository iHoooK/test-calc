// Нужные валюты
const rates = {};

// div для отображения валюты
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');



// инпуты и селектор
const input = document.querySelector('#RUB-input');
const result = document.querySelector('#result-input');
const select = document.querySelector('#valute-select');

// Парсинг и отображение курса 
getCurrencies();

async function getCurrencies(){
	const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
	const data = await response.json();
	const result = await data;

	rates.USD = result.Valute.USD;
	rates.EUR = result.Valute.EUR;

	console.log(rates);

	elementUSD.textContent = rates.USD.Value.toFixed(2);
	elementEUR.textContent = rates.EUR.Value.toFixed(2);

	//Цвет для USD
	if (rates.USD.Value > rates.USD.Previous) {
		elementUSD.classList.add('green');	
		elementUSD.classList.remove('red');	
	} else {
		elementUSD.classList.add('red');
		elementUSD.classList.remove('green');	
	};

	// Цвет для EUR
	if (rates.EUR.Value > rates.EUR.Previous) {
		elementEUR.classList.add('green');	
		elementEUR.classList.remove('red');	
	} else {
		elementEUR.classList.add('red');
		elementEUR.classList.remove('green');	
	};
};

// Ввод данных в RUB
input.oninput = convertValue;
select.oninput = convertValue;

// Вывод данных
function convertValue(){
	result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
}
