let calcs = '';
let curnt='';
let disp = document.getElementById('displays'); // innerHTML 

function disps(a){
    curnt=curnt+""+a;
    calcs=calcs+a;
    disp.innerHTML='<h2>'+curnt+'</h2>';
    console.log(curnt)
}

function clr(){
    curnt='0';
    disps('');
}

function histr(){
    disp.innerHTML='<h2>'+calcs+'</h2>';
}


function evalu(){
    try {
    let aa=disp.innerText;
    let an = eval(aa);
    curnt=an;
    calcs=calcs+' = '+an+'<br>';
    disp.innerHTML='<h2>'+an+'</h2>';
}
catch(err) {
    disp.innerHTML='<h2>Syntax Error</h2>';
}
}

function backsp(){
    let aa=disp.innerText;
    let bs = (aa/10)| 0;
    disp.innerHTML='<h2>'+bs+'</h2>';
}
