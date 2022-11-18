const student = "Алтухов Максим Иванович"; 
let test = [1, 2, 1, 2];                                                           

function getScoreOfMatch (score) {
    const realWhoWinMatch = score[0] > score[1] ? 'TeamA' : 'TeamB';                
    const supposedWhoWinMatch = score[2] > score[3] ? 'TeamA' : 'TeamB';            
    const getGuessResult = realWhoWinMatch === supposedWhoWinMatch ? true : false;  
    if (score[4] !== undefined) {
        return 'Ошибка! Вы добавили лишнее.'
    } else if (score[0] === undefined){
        return 'Ошибка! Вы оставили поле пустым.'
    } else if (score[0] === score[2] && score[1] === score[3]) {                        
        return 'Счёт был угадан верно!'
    } else if (getGuessResult === true) {                                           
        return 'Счёт не угадали, но исход угадали'
    } else {                                                                        
        return 'Ни счёта, ни исхода не угадали'
    }
};

document.querySelector('#buttonData').addEventListener('click', () => {             
    let message = document.querySelector('#inputData').value;                       
    let newMessage = Array.from(message.replaceAll(' ', '').replaceAll(',', ''));   
    document.querySelector('#result').innerHTML = getScoreOfMatch(newMessage);      
});

document.querySelector('#inputData').addEventListener('input',                         
    function(e){
      this.value = this.value.replace(/[^\d, ]/g, '');
});

document.getElementById("student").innerHTML = student;
console.log(getScoreOfMatch(test));                                             