const n1=document.querySelector('#num1');
const n2=document.querySelector('#num2');
let result=document.querySelector('#num3');

function addition(){
    let n4=parseInt(n1.value);
    let n5=parseInt(n2.value);
    let n6=n4+n5;
    result.value=n6;
}

function substraction(){
    let n4=parseInt(n1.value);
    let n5=parseInt(n2.value);
    let n6=n4-n5;
    result.value=n6;
}

function multiplication(){
    let n4=parseInt(n1.value);
    let n5=parseInt(n2.value);
    let n6=n4*n5;
    result.value=n6;
}

function division(){
    let n4=parseInt(n1.value);
    let n5=parseInt(n2.value);
    let n6=n4/n5;
    result.value=n6;
}