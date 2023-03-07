//password generator

//Chiedi all'utente il suo nome
const userName = prompt("Qual è il tuo nome?")
console.log (userName);

//poi chiedi il suo cognome
const surname = prompt("Qual è il tuo cognome?")
console.log (surname);

//poi chiedi il suo colore preferito
const color = prompt("Qual è il tuo colore preferito?")
console.log (color);

//Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23
const pwd = userName + surname + color + 23

console.log(pwd)

let element = document.getElementById("password")
console.log (element)
element.innerHTML = "password: " + pwd

