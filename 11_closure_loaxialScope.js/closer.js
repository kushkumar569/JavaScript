    function init() {
        let name = "Mozilla"; 
        function displayName() {
            console.log(name); 
        }
        displayName();
    }
    init();

// similar to scoping here parent varialbe can be access to son,but son variable can't access parent and it's siblling.
    function outer(){
        let username = "hitesh"
        // console.log("OUTER", secret);
        function inner(){
            let secret = "my123"
            console.log("inner", username);
        }
        function innerTwo(){
            console.log("innerTwo", username);
            // console.log(secret);
        }
        inner()
        innerTwo()

    }
    outer()
    // console.log("TOO OUTER", username);


    function makeFunc() {
        const name = "Mozilla";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    // here makeFunc() return all it's function scope so we can also access name, this is known as loaxial Scope.
    const myFunc = makeFunc();
    myFunc();

        // document.getElementById("orange").onclick = function(){
        //     document.body.style.backgroundColor = `orange`
        // }
        // document.getElementById("green").onclick = function(){
        //     document.body.style.backgroundColor = `green`
        // }

        function clickHandler(color){
            // document.body.style.backgroundColor = `${color}`

            return function(){
                document.body.style.backgroundColor = `${color}`
            }
        }

        // also here it return all the functin on clicking in html file , then after clicking we can change it's color.
        document.getElementById('orange').onclick = clickHandler("orange")
        document.getElementById('green').onclick = clickHandler("green")
