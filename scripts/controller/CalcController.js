class CalcController {

    constructor()
    {
        this._displayCalc = "0";
        this._currentDate; 
    } 

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let horaEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "0";
        dateEl.innerHTML = "02/12/2019";
        horaEl.innerHTML = "08:00";
        
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(newDisplay){
        this._displayCalc = newDisplay;
    }

    get currentDate(){
        return this._dateNow;
    }

    set currentDate(newDate){
        this._dateNow = newDate;
    }
}