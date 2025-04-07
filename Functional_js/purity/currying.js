function greet(greeting, name) {
    return `${greeting}, ${name}`
}


function curryGreet(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    }
};


const greetItal = curryGreet("Ciao");
greetItal("Alonzo");

const greetTex = curryGreet("Hodwy");
greetTex("Alonzo");
greetTex("Alan");