let money = 100000, 
    income = 'фриланс', 
    addExpenses = 'интернет, такси, коммуналка', 
    deposit = true,
    mission = 10000000, 
    period = 12; 

console.log('type money: ', typeof money);
console.log('type income: ', typeof income);
console.log('type deposit: ', typeof deposit);
console.log('addExpenses: ', addExpenses.length);
console.log(`Период равен ${period} месяцев.
    Цель заработать ${mission} рублей/долларов/гривен/юани`);
console.log(addExpenses.toLocaleLowerCase().split(', '));

const budgetDay = money / 30; 
console.log('budgetDay: ', budgetDay);


// Создать переменную num со значением 266219 (тип данных число)
const num = 266219;

// Вывести в консоль произведение (умножение) цифр этого числа
const multiplyingDigitsNumber = str => {
    let res = 1;
    for (let i = 0; i < str.length; i++) {
        res *= str[i];
    }
    return res;
};

const multiplyingDigits = multiplyingDigitsNumber(num.toString());
console.log('2: ', multiplyingDigits);

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
const raising = multiplyingDigits ** 3;
console.log('3: ', raising);

// Вывести на экран первые 2 цифры полученного числа
console.log('4: ', raising.toString().substr(0,2));