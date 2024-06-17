const startcolor = function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[(Math.floor(Math.random()*16))];
    }
    return color;
};
let interValid;      // here we have to declear it globally. becouse all use it.
const startchange = function(){
    // declear this condition becouse if we only declear in let so it's null value than after click on start.
    // it start printing. and also after clear by the clearIntercal it's value  is null.
    if(!interValid){
    interValid = setInterval(change,1000);
    }
    function change(){
        document.body.style.backgroundColor = startcolor();
    }
};
const stopchange = function(){
    clearInterval(interValid);
    interValid=null; //use to memory utilisation.
};

document.querySelector("#start").addEventListener('click',startchange);
document.querySelector("#stop").addEventListener('click',stopchange);