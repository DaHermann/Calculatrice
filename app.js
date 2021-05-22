let body = document.querySelector('body')

let container = document.createElement('div');
let allumage = document.createElement('div');
let buttons = document.createElement('div');
let screen = document.createElement('input');
let btn0 = document.createElement('button');
let btn00 = document.createElement('button');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');
let btn3 = document.createElement('button');
let btn4 = document.createElement('button');
let btn5 = document.createElement('button');
let btn6 = document.createElement('button');
let btn7 = document.createElement('button');
let btn8 = document.createElement('button');
let btn9 = document.createElement('button');

let dot = document.createElement('button');
let equaal = document.createElement('button');
let add = document.createElement('button');
let sub = document.createElement('button');
let multi = document.createElement('button');
let divide = document.createElement('button');
let reset = document.createElement('button');

let btnSin = document.createElement('button');
let btnCos = document.createElement('button');
let btnTan = document.createElement('button');
let btnLn = document.createElement('button');
let del = document.createElement('button');
let btnPss = document.createElement('button');
let btnExp = document.createElement('button');
let btnLog = document.createElement('button');
let btnFac = document.createElement('button');

let btnOn = document.createElement('button');
let btnSecond = document.createElement('button');
let percent = document.createElement('button');
let braket1 = document.createElement('button');
let braket2 = document.createElement('button');
let err = false;
let onOff = false;


// screen.disabled = true
// screen.placeholder = 0

btn0.textContent = '0';
btn00.textContent = '00';
btn1.textContent = '1';
btn2.textContent = '2';
btn3.textContent = '3';
btn4.textContent = '4';
btn5.textContent = '5';
btn6.textContent = '6';
btn7.textContent = '7';
btn8.textContent = '8';
btn9.textContent = '9';

add.textContent = '+';
sub.textContent = '-';
multi.textContent = '*';
divide.textContent = '/';
braket1.textContent = '(';
braket2.textContent = ')';
dot.textContent = '.';

btnSin.textContent = 'sin';
btnCos.textContent = 'cos';
btnTan.textContent = 'tan';
btnLn.textContent = 'ln';
btnLog.textContent = 'log';
btnFac.textContent = '!';
btnPss.textContent = '^';
btnExp.textContent = 'e';
del.textContent = 'CE'
reset.textContent = 'AC'
equaal.textContent = '='

btnOn.textContent = 'ON'
btnSecond.textContent = '2nd'
percent.textContent = '%'



body.appendChild(container);
container.appendChild(screen);
container.appendChild(allumage);
allumage.appendChild(btnSecond)
allumage.appendChild(btnOn)
container.appendChild(buttons)



buttons.appendChild(btnSin)
buttons.appendChild(btnCos)
buttons.appendChild(btnTan)
buttons.appendChild(del)
buttons.appendChild(reset)

buttons.appendChild(btnLn)
buttons.appendChild(btnExp)
buttons.appendChild(btnPss)
buttons.appendChild(btnFac)
buttons.appendChild(btnLog)


buttons.appendChild(btn7)
buttons.appendChild(btn8)
buttons.appendChild(btn9)
buttons.appendChild(braket1)
buttons.appendChild(braket2)


buttons.appendChild(btn4)
buttons.appendChild(btn5)
buttons.appendChild(btn6)
buttons.appendChild(divide)
buttons.appendChild(multi)

buttons.appendChild(btn1)
buttons.appendChild(btn2)
buttons.appendChild(btn3)
buttons.appendChild(add)
buttons.appendChild(sub)

buttons.appendChild(btn0)
buttons.appendChild(dot)
buttons.appendChild(btn00)
buttons.appendChild(percent)
buttons.appendChild(equaal)



container.classList.add('container');
screen.classList.add('screen');
buttons.classList.add('buttons')
btn9.classList.add('button')
btn8.classList.add('button')
btn7.classList.add('button')
btn6.classList.add('button')
btn5.classList.add('button')
btn4.classList.add('button')
btn3.classList.add('button')
btn2.classList.add('button')
btn1.classList.add('button')
btn0.classList.add('button')
braket1.classList.add('button')
braket2.classList.add('button')
btn00.classList.add('button')
add.classList.add('button')
btnLog.classList.add('trigo')
btnFac.classList.add('trigo')
btnLn.classList.add('trigo')
btnExp.classList.add('trigo')
btnPss.classList.add('trigo')
add.classList.add('button')
percent.classList.add('button')
equaal.classList.add('button')
sub.classList.add('button')
multi.classList.add('button')
divide.classList.add('button')
dot.classList.add('button')
del.classList.add('button')
reset.classList.add('rougeB')
allumage.classList.add('allumage')
btnOn.classList.add('rouge')

btnSecond.classList.add('second')



btnSin.classList.add('trigo')
btnCos.classList.add('trigo')
btnTan.classList.add('trigo')


btn0.addEventListener('click', showInScreen);
btn0.addEventListener('click', showInScreen);
btn1.addEventListener('click', showInScreen);
btn2.addEventListener('click', showInScreen);
btn3.addEventListener('click', showInScreen);
btn4.addEventListener('click', showInScreen);
btn5.addEventListener('click', showInScreen);
btn6.addEventListener('click', showInScreen);
btn7.addEventListener('click', showInScreen);
btn8.addEventListener('click', showInScreen);
btn9.addEventListener('click', showInScreen);
add.addEventListener('click', showInScreen);
sub.addEventListener('click', showInScreen);
btnFac.addEventListener('click', showInScreen);
btnExp.addEventListener('click', showInScreen);
btnLog.addEventListener('click', showInScreen);
btnPss.addEventListener('click', showInScreen);
multi.addEventListener('click', showInScreen);
divide.addEventListener('click', showInScreen);
del.addEventListener('click', deL);
reset.addEventListener('click', reseT);

btnOn.addEventListener('click', onOFF)

btnCos.addEventListener('click', showInScreen)
btnSin.addEventListener('click', showInScreen)
btnTan.addEventListener('click', showInScreen)
braket1.addEventListener('click', showInScreen)
braket2.addEventListener('click', showInScreen)
dot.addEventListener('click', showInScreen)
btn00.addEventListener('click', showInScreen)
btnLn.addEventListener('click', showInScreen)
equaal.addEventListener('click', result)






let calculator_button = [{
        name: 'cosinus',
        Symbol: 'cos',
        formule: 'Math.cos'
    },
    {
        name: 'sinus',
        Symbol: 'sin',
        formule: 'Math.sin'
    },
    {
        name: 'tangente',
        Symbol: 'tan',
        formule: 'Math.tan'
    },
    {
        name: 'exponentielle',
        Symbol: 'e',
        formule: 'Math.exp'
    },
    {
        name: 'logaritme',
        Symbol: 'ln',
        formule: 'Math.ln'
    }
]


let data = {
    operation: [],
    resultat: []
}



// function change() {
//     if (true) {
//         btnOn.textContent = 'off'
//         btnOn.style.background = " rgb(155, 150, 86)"
//     }
// }



// function factorielle(num) {
//     if (num === 0 || num === 0) return 1

//     let result = 1
//     for (let i = 0; i < num; i++) {
//         result = result * i
//         if (result === Infinity) return Infinity
//     }


/***
 * Winner calculatrice par
 */

/**
 * Fonction permettant de d'showInScreen une valeur à l'ecran
 */
function showInScreen(){
    if(!onOff)
        return;

    if(!err){
        screen.value += this.textContent;
        console.log('clicked : '+ this.textContent);
    }else{
        screen.value = this.textContent;
        err = !err;
    }
    
}

/**
 * Fonction permettant de calculer le resultat
 */
function result(){
    if(!onOff)
        return;

    let operation = screen.value;

    // + * / - 

    // let operation = screen.value.split('')
    // let op = operation.join(''); // recuperation de l'operation conversion en chaine
    // try {
    //     screen.value = eval(op); // insertion du resutltat à l'ecran
    // } catch (error) {
    //     // screen.value = 'ERROR';
    //     err = !err;
    //     errBG();
    // }


    // factoriel 

    // let reg = /^[0-9]*!$/;
    // let fact = operation.match(reg);
    // if(fact != null){
    //     fact = fact[0].split('');
    //     fact.pop()
    //     let f = parseInt(fact.join(''));
    //     screen.value = facT(f);
    //     console.log('OUI '+typeof(f));
    // }else{

    //     console.log('NON '+ fact);

    // }

    // Puissance

    PuisS()


}


/**
 * Fonction permetttant de supprimer les elements de l'ecran
 */

function deL(e){
    if(!onOff)
        return;

    if(!err){
        let operation = screen.value.split('');
        operation.pop();
        let op = operation.join('');
        screen.value = op;
    }else{
        e.preventDefault();
        reseT();
        err = !err;
        console.log(err);
    }
    errBG();
}

/**
 * Fonction de Mise à 0
 */
function reseT(){
    if(!onOff)
        return;
        
    screen.value = '';
    errBG();
}


/**
 * Fonction de gestion d'erreur de calcul
 */
function errBG(){
    if(!err){
        screen.style.backgroundColor = 'rgb(155, 150, 86)';
    }else{
        screen.style.backgroundColor = '#FF4233';
        err = !err;
    }
}

/**
 * Fonction permettant l'allumage et l'exteinction de la calculatrice
 */
function onOFF(){
    if(!onOff){
        onOff = !onOff;
        screen.disabled = true
        screen.placeholder = 0
        btnOn.textContent = 'OFF';
        btnOn.style.background = " rgb(155, 150, 86)";
    }else {
        onOff = !onOff;
        screen.disabled = true
        screen.value = ''
        screen.placeholder = ''
        btnOn.textContent = 'ON';
        btnOn.style.background = "rgb(255, 0, 0)";
    }
}



function facT(nbr){
    if(nbr == 1 || nbr == 0)
        return 1;
    return nbr * facT(nbr - 1);    
}



function PuisS(){
    let operation = screen.value;
    let reg = /^[0-9]*\^[0-9]{1,3}$/; 
    let puis = operation.match(reg);

    if(puis != null){
        puis = puis[0].split('^');
        let nb = parseInt(puis[0]);
        let pu = parseInt(puis[1]);

        // let p = parseInt(puis.join(''));
        screen.value = calPuiss(nb,pu);
        console.log('OUI '+nb+' '+pu);
    }else{

        console.log('NON '+ puis);

    }

    function calPuiss(nbr,p){
        for(let i = 1; i < p; i++){
            nbr *= nbr
        }
        return nbr;
    }
}