class Calculator{

    currentOperand = ""

    constructor(previousText, currentText){
        this.previousText = previousText
        this.currentText = currentText
    }

    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
        this.previousText.innerText=""
        this.currentText.innerText=""
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }

    appendNum(number){
        if(number === '.' && this.currentOperand.includes('.')){
            return
        }
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.currentOperand==='') return
        if(this.previousOperand !== ""){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand=""
    }

    compute(){
        let answer
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)){
            return
        }
        switch(this.operation){
            case '+':
                answer = prev+current
                break
            case '-':
                answer = prev-current
                break
            case '*':
                answer = prev*current
                break
            case '÷':
                answer = prev/current
                break
            default:
                return
                
        }
        this.currentOperand = answer
        this.operation = undefined
        this.previousOperand = ""
    }

    getDispplayNumber(number){
        const stringnum = number.toString()
        const intdigit = parseFloat(stringnum.split('.')[0])
        const floatdigit = stringnum.split('.')[1]
        let intdisplay
        if(isNaN(intdigit)){
            intdisplay = ''
        }
        else{
            intdisplay = intdigit.toLocaleString('en',{maximumFractionDigits: 0})
        }

        if(floatdigit != null){
            return `${intdisplay}.${floatdigit}`
        }
        else{
            return intdisplay
        }
    }

    updatedisplay(){
        this.currentText.innerText = this.getDispplayNumber(this.currentOperand)
        if(this.previousOperand === undefined) return    
        if(this.operation != null){
            this.previousText.innerText = `${this.getDispplayNumber(this.previousOperand)} ${this.operation}`
        }   
        else{
            this.previousText.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-allclear]')
const deleteButton = document.querySelector('[data-delete]')

const previousText = document.querySelector('[data-previous]')
const currentText = document.querySelector('[data-current]')

const calculator = new Calculator(previousText, currentText)

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNum(button.innerText)
        calculator.updatedisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updatedisplay()
    })
})

clearButton.addEventListener('click', () =>{
    calculator.clear()
})

equalsButton.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updatedisplay()
})

deleteButton.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updatedisplay()
})

var icon = document.getElementById("icon")
icon.onclick = function(){
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        icon.src = "images/dark theme icon/sun.png"
    }
    else{
        icon.src = "images/dark theme icon/moon.png"
    }
}