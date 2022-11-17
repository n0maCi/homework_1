const student = "Алтухов Максим Иванович"; 
let test = [1, 2, 1, 2];                                                            //Тестовый вариант. Через консоль.

function getScoreOfMatch (score) {
    const realWhoWinMatch = score[0] > score[1] ? 'TeamA' : 'TeamB';                //Проверяем какая команда реально выиграла матч.
    const supposedWhoWinMatch = score[2] > score[3] ? 'TeamA' : 'TeamB';            //Проверем какая команда выиграла матч, по мнению другого человека.
    const getGuessResult = realWhoWinMatch === supposedWhoWinMatch ? true : false;  //Проверка. Угадал ли человек исход матча.    
     if (score[0] === score[2] && score[1] === score[3]) {                          //Проверяем на точность счета.
        return 'Счёт был угадан верно!'
    } else if (getGuessResult === true) {                                           //Если человек не угадал счет, то проверяем на исход.
        return 'Счёт не угадали, но исход угадали'
    } else {                                                                        //Если ничего не подошло.
        return 'Ни счёта, ни исхода не угадали'
    }
};

document.querySelector('#buttonData').addEventListener('click', () => {             //Обращаемся к HTML документу. Считываем кнопку, ожидая клик.
    let message = document.querySelector('#inputData').value;                       //Создаем переменную со считыванием тега <input>.
    let newMessage = Array.from(message.replaceAll(' ', '').replaceAll(',', ''));   //Записываем полученную инфу в массив, но перед этим убираем лишние пробелы и запятые.
    document.querySelector('#result').innerHTML = getScoreOfMatch(newMessage);      //Обращаюсь к функции getScoreOfMatch() для вывода информации в HTML документ.
});

document.querySelector('#inputData').addEventListener('input',                      //Обращение к тегу <input>, для запрета лишних символов.      
    function(e){
      this.value = this.value.replace(/[^\d, ]/g, '');
});

document.getElementById("student").innerHTML = student;
console.log(getScoreOfMatch(test));                                                 //Вывод тестового варианта для консоли.