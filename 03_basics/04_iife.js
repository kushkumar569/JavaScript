// Immediately Invoked Function Expressions (IIFE)

//syntax of iife.
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                  // here ; is neccesry to stop execution unless next function will not executed.

//syntax of arrow function iife
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')                            // here we pass argument in function.
