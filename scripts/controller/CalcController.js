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

    getLastOperation(){
        return this._operation[this._operation.length - 1];
    }

    isOperator(value){
        let operators = ['/','*','-','+'];
        return operators.indexOf(value) > -1;
    }

    setLastOperation(value){
        this._operation[this._operation.length - 1] = value;
    }

    calc(){

        let last = this._operation.pop();

        let operators = this._operation.join('');

        let result = eval(operators);

        this._operation = [result, last];

    }
    
    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3){
            this.calc();

        }

    }

    setLastNumberToDisplay(){
        
    }

    addOperation(value){

        // console.log('A', isNaN(this.getLastOperation()));

        if (isNaN(this.getLastOperation())){
        
            if (this.isOperator(value)){
                this.setLastOperation(value);
            } else if (isNaN(value)){
                console.log(value);
            } else {
                this.pushOperation(value)
            }
        
        } else {

            if (this.isOperator(value)){
                
                this.pushOperation(value);

            } else {
                
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();
            }
        }
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
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;

            case 'divisao':
                this.addOperation('/');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;

            case 'porcento':
                this.addOperation('/');
                break;

            case 'igual':
                this.addOperation('=');
                break;

            case 'ponto':
                this.addOperation('.');
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