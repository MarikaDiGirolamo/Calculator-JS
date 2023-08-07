//Query for all numeric buttons
const numBtn = document.querySelectorAll(".numBtn");
const btnAcAll = document.querySelector(".btnAcAll");
const btnDel = document.querySelector(".btnDel");
const btnOperator = document.querySelectorAll(".btnOperator");
const btnResults = document.querySelector(".btnResults")
const display = document.querySelector(".display");

//Creo le funzioni per i singoli bottoni


numBtn.forEach(numBtn => {
    numBtn.addEventListener('click', function(){
        // console.log(numBtn.textContent);
        display.innerHTML += numBtn.textContent; //stampo a schermo i numeri richiamati dalla funzione all'intenro del display
    });
});

btnAcAll.addEventListener("click", function(){
    display.innerHTML = ""; //Funzione ALL CLEAR
});

btnDel.addEventListener("click", function(){
    display.innerHTML = display.textContent.slice(0, -1);
    //In questo modo posso andare ad eliminare SOLO l'ultimo elemento
});

//Operatori

btnOperator.forEach(btnOperator => {
    btnOperator.addEventListener('click', function(){
        // console.log(numBtn.textContent);
        display.innerHTML += btnOperator.textContent; //setto i btn egli operatori
    });
});

