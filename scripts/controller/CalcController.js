class CalcController {

    constructor()
    {
        this._operation = [];
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

    clearAll(){
        this._operation = [];
    }


    clearEntry(){
        this._operation.pop();
    }

    addOperation(value){
        this._operation.push(value);
        console.log(this._operation);
    }

    setError(){
        this.displayCalc = "Error";
    }

    execBtn(value){

        switch (value){
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                break;
            case 'subtracao':
                break;

            case 'divisao':
                break;

            case 'multiplicacao':
                break;

            case 'porcento':
                break;

            case 'igual':
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break

            default:
                this.setError();
                break;
        }
    }


    initButtonsEvents(){
        // recuperando todos os filhos do id buttons e do id parts
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', func => {

                let textBtn= btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);

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
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(newDisplay){
        this._displayCalcEl.innerHTML = newDisplay;
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