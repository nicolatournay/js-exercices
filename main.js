// Boucles et tableaux

// Exercice 1

var button = document.querySelector('.ex1 button');
var sum = document.querySelector('.ex1 span');
var array = [1, 2, 3, 4];

button.addEventListener("click", function() {
    var num = 0;
    for (var i = 0; i < array.length; i++) {
        num += array[i];
    }
    sum.innerHTML = num;
})

// Exercice 2

var button2 = document.querySelector('.ex2 button');
var tri = document.querySelector('.ex2 span');
var array2 = [5, 4, 3, 2, 1];

button2.addEventListener("click", function() {
    var newArray = array2.sort();
    tri.innerHTML = "[" + newArray + "]";
})

// Exercice 3

var button3 = document.querySelector('.ex3 button');
var result = document.querySelector('.ex3 span');
var array3 = ["chat", "arbre", "cocaïne", "cheval", "seringue", "fleur", "soleil", "fusil", "mer"];
var input = document.querySelector('.ex3 input');
var result3 = null;

button3.addEventListener("click", function() {
    for (var i = 0; i < array3.length; i++) {
        if (array3[i] == input.value) {
            var result3 = array3.filter(array => array != array3[i]);
        }
    }
    if (result3 == null) {
        result.innerHTML = "Oups, recommencez !";
    } else {
        array3 = result3;
        result.innerHTML = array3;
    }
})

// Exercice 4

var button4 = document.querySelector('.ex4 button');
var sum4 = document.querySelector('.ex4 span');
var mul1 = [6, 7, 8, 9, 10];
var mul2 = [5, 4, 3, 2, 1];

button4.addEventListener("click", function() {
    var num4 = 0;
    for (var i = 0; i < mul1.length; i++) {
        var product = mul1[i]*mul2[i];
        num4 += product;
    }
    sum4.innerHTML = num4;
})

// Fonctions & arguments

// Exercice 1

var button5 = document.querySelector('.ex5 button');
var sum5 = document.querySelector('.ex5 span');
var input5 = document.querySelector('.ex5 input');

function celsiusToFahrenheit(temp) {
    var far = (temp * 1.8) + 32;
    sum5.innerHTML = far + " ℉";
}

button5.addEventListener("click", function() {
    celsiusToFahrenheit(input5.value)
})

// Exercice 2

var button6 = document.querySelector('.ex6 button');
var array6 = [6, 7, 8, 9, 10];
var sum6 = document.querySelector('.ex6 span');

function sumArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    sum6.innerHTML = sum;
}

button6.addEventListener("click", function() {
    sumArray(array6)
})

// Exercice 3

var button7 = document.querySelector('.ex7 button');
var sum7 = document.querySelector('.ex7 span');
var input7 =document.querySelector('.ex7 textarea');

function stringLength(string) {
    sum7.innerHTML = string.length;
}

button7.addEventListener("click", function() {
    stringLength(input7.value);
})

// Exerice 4

var button8 = document.querySelector('.ex8 button');
var result8 = document.querySelector('.ex8 span');
var input8 =document.querySelector('.ex8 input');

function isPalindrome(string) {
    var response = true;
    for (var i = 0; i < string.length; i++) {
        if ( string[i] != string[string.length - 1 - i]) {
            response = false;
            break;
        }
    }
    if (response) {
        result8.innerHTML = "Félicitation ! C'est un palindrome !"
    } else {
        result8.innerHTML = "Raté 😐 Réessayez avec un autre mot."
    }
}

button8.addEventListener("click", function() {
    if (input8.value == "") {
        result8.innerHTML = "Ben c'est vide 😒" 
    } else {
        var formattedString = input8.value.replaceAll(" ", "").toLowerCase();
        isPalindrome(formattedString);
    }
})

// Exerice 5

var array9 = ["un buisson", "un ruisseau", "un préservatif usagé", "un colibri", "un sourire"];
var button9 = document.querySelector('.ex9 button');
var list = document.querySelector('.ex9 ul');

function makeList(array) {
    for (var i =0; i < array.length; i++) {
        list.innerHTML += `
            <li>${array[i]}</li>
        `;
    }
}

button9.addEventListener("click", function() {
    makeList(array9);
})

// Exercice 6

var button10 = document.querySelector('.ex10 button');
var product10 = document.querySelector('.ex10 span');
var firstInput = document.querySelector('.ex10 input:first-of-type');
var secondInput = document.querySelector('.ex10 input:last-of-type');

function multiplyNumbers(num1, num2) {
    if (num1 == "" || num2 == "" ) {
        product10.innerHTML = "Merci d'insérer des nombres.";
    } else {
        var product = num1 * num2;
        product10.innerHTML = product;
    }
}

button10.addEventListener("click", function() {
    multiplyNumbers(firstInput.value, secondInput.value);
})

// Le Scope des variables

// ex 1

var globalVar = "exercice 1";

function logGlobalVar() {
    console.log(globalVar.toUpperCase);
}

logGlobalVar();
console.log(globalVar);

// ex 2

function useless() {
    var localVar = "exercice 2 : ça ne va pas fonctionnner 😑";
}

function logLocalVar() {
    console.log(localVar);
}

logLocalVar();
console.log(localVar);

// ex 3

// je n'ai pas compris 😒

// ex 4

function outerFunction() {
    var maVar = "exercice 4";
    function innerFunction() {
        console.log(maVar);
    }
}

outerFunction();

// ex 5

// je n'ai pas compris 😒

