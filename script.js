

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const themeToggleBtn = document.querySelector('.theme-toggle');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggle-icon');
   



let isDark = true


buttons.forEach(item => {
    item.addEventListener('click', () => {
        if(item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if(display.innerText !== '' && item.id ==='equal') {
            display.innerText = eval(display.innerText)
        } else if(display.innerText === '' && item.id ==='equal') {
            display.innerText = 'empty!';
            setTimeout(() => {display.innerText = ''}, 2000)
        } else{
            display.innerText += item.id;
        }
    })
})



 themeToggleBtn.addEventListener('click', () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
})





const years = [1990, 1965, 1937,2005, 1998];

function arrayCalc(arr, fn){
    let arrResult = [];
    
    for(let i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]))
    }
    return arrResult;
}

function calculateAge(el) {
    return 2023 - el;
}

const ages = arrayCalc(years, calculateAge)

console.log(ages);