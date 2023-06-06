// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name) {
    if((typeof name === 'string' && name !== '' ) && isNaN(name)){
        return "Hello " + name + "!"
    } else if(name === ''){
        return "Hello World!"
    } else {
        return "Hello World!"
    }
}

function isEven(n) {
    n = parseInt(n);
    if(isNaN(n)){
        return false
    } else if(n % 2 === 0){
        return true
    } else {
        return false
    }
}

function isVowel(string) {
    if(typeof string !== 'string') {
        return false
    } else if(string.toLowerCase() === "a" || string.toLowerCase() === "e" || string.toLowerCase() === "i" || string.toLowerCase() === "o" || string.toLowerCase() === "u"){
        return true
    } else {
        return false
    }
}

function add(x, y){
    console.log(x);
    if(isNaN(x) || isNaN(y)) {
        return NaN
    } else {
        return parseInt(x) + parseInt(y)
    }
}
