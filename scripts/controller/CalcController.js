class CalcController {

    constructor()
    {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._horaEl = document.querySelector("#hora");
        this._currentDate; 
        this.initialize();
        this.initButtonsEvents();
    } 

    initialize(){
        
        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000)
    }

    // funcao responsavel por adicionar multiplos events a um button
    addEventListenerAll(element, events, func){

        events.split(' ').forEach(event => {

            // param false para não ocorrer duas vezes o evento, caso aconteça algum dos eventos
            element.addEventListener(event, func, false);

        })
        

    }

    initButtonsEvents(){
        // recuperando todos os filhos do id buttons e do id parts
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag mouseover', func => {

                console.log(btn.className.baseVal.replace("btn-", ""));

            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', func => {

                btn.style.cursor = "pointer";

            })

        })
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric",
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        
    }

    get displayCalc(){
        return this._displayCalc.innerHTML;
    }

    set displayCalc(newDisplay){
        this._displayCalc.innerHTML = newDisplay;
    }

    get displayTime(){
        return this._horaEl.innerHTML;
    }

    set displayTime(newTime){
        this._horaEl.innerHTML = newTime;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(newDate){
        this._dateEl.innerHTML = newDate;
    }


    get currentDate(){
        return new Date(); 
    }

    set currentDate(newDate){
        this._currentDate = newDate;
    }
}