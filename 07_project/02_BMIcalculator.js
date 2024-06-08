const from = document.querySelector('form');
from.addEventListener('submit',function(e){
    e.preventDefault();
    // here value of height is in string so conevert them to int by using parseint.
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`please enter valid height $(height)`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`please enter valid height $(weight)`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        // show the result.
        result.innerHTML=`<span>${bmi}</span>`
    }
});