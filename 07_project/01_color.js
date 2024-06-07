const button = document.querySelectorAll('.button')
const body = document.querySelector('body')


button.forEach(function(button){
    // console.log(button)
    button.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        console.log(button)
        if(e.target.id==="gray"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id
        }
    })
})

/* let's discuss about flow of program.
1. button store all class of button as a NodeList.
2. body store body part.
3. forEach loop run once when program load and add all button to the eventListner click.
4. for every click of button addEventListner load.
5. that click id store at e and chect that id to button id.
6. corresponding to that it changes the color of background.
7. note that:- e.target.id-> gary,white etc. so, it use same as to change background color insted of "gray","white"... etc.
 */