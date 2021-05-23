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

 /**
  * ########################################################################
  * 
  * ########################################################################
  */

let operation;


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

btnCos.addEventListener('click',showInScreen)
btnSin.addEventListener('click', showInScreen)
btnTan.addEventListener('click', showInScreen)
braket1.addEventListener('click', showInScreen)
braket2.addEventListener('click', showInScreen)
dot.addEventListener('click', showInScreen)
btn00.addEventListener('click', showInScreen)
btnLn.addEventListener('click', showInScreen)
equaal.addEventListener('click', resulT)




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


/**
 * regex de verification
 */

let OpReg = /[^[0-9]*[\*|\-|\+|\/][0-9]*$]*/;
let Factreg = /^[0-9]*!$/;
let cosReg = /^cos[0-9]*$/;
let sinReg = /^sin[0-9]*$/;
let tanReg = /^tan[0-9]*$/;
let eReg = /^e[0-9]*$/;
let lnReg = /^ln[0-9]*$/;
let puissReg = /^[0-9]*[\^][0-9]*$/;
let logReg = /^log[0-9]*$/;
let errReg = /[a-zA-Z]*/;



/***
 * Winner calculatrice par
 */

/**
 * Fonction permettant de d'showInScreen une valeur à l'ecran
 */
function showInScreen(e){
    if(!onOff)
        return;
        
    if(err===false){
        screen.value += e.target.textContent;
        console.log('clicked : '+ e.target.textContent);
    }else{
        // screen.value = e.target.textContent;
        reseT();
    }
}

/**
 * Fonction permettant de calculer le resultat
 */
function resulT(){
    if(!onOff)
        return;


        
    let operation = screen.value;
    
    try {
        
        console.log(OpReg.test(operation));

        if(OpReg.test(operation)){
            // Addition, Multiplication, Soustartion, Division
            basicOp(operation);
            console.log(' Addition, Multiplication, Soustartion, Division ');
        }
        else if(Factreg.test(operation)){
            // Factoriel
            let fact = operation;
            fact = fact.split('');
            fact.pop()
            let f = parseInt(fact.join(''));
            screen.value = facT(f);
            console.log('Factoriel');
        }
        else if(cosReg.test(operation)){
            // Cosinus
            trigo('cos', operation);
            console.log('Cosinus');
        }
        else if(sinReg.test(operation)){
            // Sinus
            trigo('sin', operation);
            console.log('Sinus');
        }
        else if(tanReg.test(operation)){
            // Tangente
            trigo('tan', operation);
            console.log('Tangente');
        }
        else if(eReg.test(operation)){
            // Expo
            trigo('e', operation);
            console.log('Exponaciel');
        }
        else if(lnReg.test(operation)){
            // Logarithme neperien
            trigo('ln', operation);
            console.log('Logarithme Neperien');
        }
        else if(logReg.test(operation)){
            // Logarithme à base 10
            trigo('log', operation);
            console.log('Logarithme');
        }
        else if(puissReg.test(operation)){
            // Puissance
            PuisS(operation);
            console.log('Puissance');
        }
        else if(errReg.test(operation)){
            err = true;
            errBG();
            console.log('ERROR opration')
        }
        else {
            err = true;
            errBG(); // erreur
            console.log('ERROR 2')
        }
    } catch (error) {
        err = true;
        errBG();
        console.log('error catch '+ error);
    }
}


/**
 * Fonction permetttant de supprimer les elements de l'ecran
 */

function deL(e){
    if(onOff != true)
        return;

    let operation = screen.value.split('');

    if(err!=true){
        operation.pop();
        let op = operation.join('');
        screen.value = op;
    }else{
        operation.pop();
        let op = operation.join('');
        err = false;
        errBG();
        screen.value = op;
    }
}

/**
 * Fonction de Mise à 0
 */
function reseT(){
    if(!onOff)
        return;

    screen.value = '';
    err = false;
    errBG();
}

/**
 * Fonction de gestion d'erreur de calcul
 */
function errBG(){
    console.log('erreur code');

    if(err===true){
        screen.style.backgroundColor = '#FF4233';
    }else{
        screen.style.backgroundColor = '#BDB762';
    }
}

/**
 * Fonction permettant l'allumage et l'exteinction de la calculatrice
 */
function onOFF(){
    operation = '';

    if(!onOff){
        onOff = !onOff;
        screen.disabled = true
        screen.placeholder = 0
        btnOn.textContent = 'OFF';
        btnOn.style.background = " rgb(155, 150, 86)";
        screen.style.backgroundColor = '#BDB762';
    }else {
        onOff = !onOff;
        screen.disabled = true
        screen.value = ''
        screen.placeholder = ''
        screen.style.backgroundColor = '#BDB762';
        btnOn.textContent = 'ON';
        btnOn.style.background = "rgb(255, 0, 0)";
    }
}



function facT(nbr){
    console.log('FATCTORIEL');

    if(nbr == 1 || nbr == 0)
        return 1;
    return nbr * facT(nbr - 1);    
}


function PuisS(puis){
    console.log('PUISSANCE');

    try {
        puis = puis[0].split('^');
        let nb = parseInt(puis[0]);
        let pu = parseInt(puis[1]);
        show(calPuiss(nb,pu));
    } catch (error) {
        err = true;
        errBG();
    }


    function calPuiss(nbr,p){
        let result = 1;
        for(let i = 0; i < p; i++){
            result *= nbr
        }
        return result;
    }
}



/**
 * Fonction qui calcul de cosinus et affiche le resultat
 */

function trigo(opera, data){
    console.log('TRIGO');
    console.log('data : ',data);

   try {
    let op =  data.split(opera);
    let num = parseInt(op[1]);
    
    if(opera==='cos'){
        show(Math.cos(num));
    }
    if(opera==='sin'){
        show(Math.sin(num));
    }
    if(opera==='tan'){
        show(Math.tan(num));
    }
    if(opera==='e'){
        show(Math.exp(num));
    }
    if(opera==='ln'){
        show(Math.log2(num));
    }
    if(opera==='log'){
        show(Math.log10(num));
    }
    
   } catch (error) {
       console.log(error)
   }
}



/**
 * Affiche les resultat
 */
function show(res){
    console.log('SHOW');

    console.log('Reg : '+errReg.test(res));
    console.log('res : '+res);

    if(errReg.test(res) == false){
        err = true;
        screen.value = 'Error';
        errBG();
    }else{
        screen.value = res;
    }
}


/**
 * Fonction de calul
 */
function basicOp(param){

    let operation = param.split('')
    let op = operation.join(''); // recuperation de l'operation conversion en chaine
    try {
       show(eval(op)); // insertion du resutltat à l'ecran
    } catch (error) {
        err = true;
       //errBG();
    }
}