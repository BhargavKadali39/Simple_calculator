let calcs = '';
let curnt='';
let disp = document.getElementById('displays'); 

function disps(a){
    curnt=curnt+""+a;
    calcs=calcs+a;
    disp.value=curnt;
    // console.log(curnt)
}

function clr(){
    curnt='';
    disps('');
}

function histr(){
    curnt=''
    disp.value=calcs;
}

function evalu(){
    try {
        let aa=disp.value;
        let an = eval(aa);
        curnt=an;
        calcs=calcs+' = '+an+"\n";
        disp.value=an;
    }
    catch(err) {
        disp.value='Syntax Error';
    }
}

function backsp(){
    let aa=disp.value;
    let bs='';
    if (aa=='Syntax Error') {}
    else {
        bs = (aa/10)| 0;
    }
    disp.value=bs;
}

disp.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
