// // COSTANTE
// const x = 10;
// x = 5; //Errore: Nuova assegnazione su una costante

// // CONST ARRAY / OBJECT
// // ARRAY
// const array = [1, 2];
// array = [1, 2, 3];
// console.log(array); //Errore: Nuova assegnazione su una costante
// array.push(3);
// console.log(array); //OK: Posso aggiungere o eliminare elementi di un array, ma non posso fare una nuova assegnazione completa

// // OBJECT
// const obj = {
//   nome: "Simone",
// }
// // obj = 5; //Errore: Nuova assegnazione su una costante
// obj.cognome = "Romiti";
// console.log(obj); //OK: Posso aggiungere o eliminare elementi di un oggetto, ma non posso fare una nuova assegnazione completa
// // FINE COSTANTE

// // VAR E LET
// variable = 10;
// var variable;
// console.log(variable); // OK: Quando uso var posso dichiarare la variabile anche successivamente
//
// variable2 = 5;
// let variable2;
// console.log(variable2); //Errore: Quano uso let devo dichiarare la variabile prima di fare qualsiasi altra cosa
// // FINE VAR E LET

// // SCOPE VAR LET E CONST
// // SCOPE FUNCTION
// myFunction();
// function myFunction(){
//   var variable = "ciao"
//   alert(variable);
// }
// console.log(variable); //Errore: variable ha scope locale (quello della funzione) quindi fuori dalla funzione non è definita, stessa cosa accadrebbe anche con let e const
// // FINE SCOPE FUNCTION

// // SCOPE BLOCCHI IF E CICLI
// VAR
// var condizione = true;
// if(condizione == true){
//   var i = 5;
// }
// console.log(i); //OK: var dentro un blocco if o in un ciclo ha comunque scope globale quindi è visibile anche fuori dal blocco dove è stato dichiarata

// // LET E CONST
// var condizione = true;
// if(condizione == true){
//   let i = 5;
// }
// console.log(i); //Errore: let e const all'interno di parentesi graffe (dentro un blocco if o in un ciclo o in una funzione) hanno scope locale per cui la variabile non sarà visibile all'esterno del blocco dove è stata dichiarata

// for(var i = 0; i < 5; i++){
//   console.log(i); //OK
// }
// console.log(i); //OK

// for(let i = 0; i < 5; i++){
//   console.log(i); //OK: let i è dichiarata nel ciclo quindi ha scope locale dentro il for ed è
// }
// console.log(i); //Errore: let i ha scope interno al blocco for, quindi all'esterno di esso i risulta non definita, stessa cosa per const
// // FINE SCOPE BLOCCHI IF E CICLI

// // BACKTICK con ${variabile} per concatenare variabili o per scrivere html rispettando anche l'indentazione
// let string = "Ciao";
// let string2 = "Simone"
// console.log(
//   `
//   ${string} mi chiamo
//   ${string2}
//   `
// );
//
// let titolo = "Il mio titolo";
// let paragrafo = "Il mio paragrafo";
// document.getElementById("container").innerHTML =
//   `
//   <div class="prova">
//     <h1>${titolo}</h1>
//     <p>${paragrafo}</p>
//   </div>
//   `;
// // FINE BACKTICK

// // ARROW FUNCTION
// // FUNZIONI CON NOME
// function myFunction(){
//   return 5 + 5;
// }
// var x = myFunction();
// console.log("myFunction:", x);
//
// const myArrowFunction = () => 5 + 10; //Return implicito se scritto codice in una sola riga senza graffe
// var y = myArrowFunction();
// console.log("myArrowFunction", y);

// // FUNZIONI ANONIME
// document.getElementById("button").addEventListener("click",
//   function(){
//     alert("Ciao");
//   }
// );

// document.getElementById("button").addEventListener("click",
//   () => alert("Ciao a tutti")
// );

// const myArrowFunction2 = (num) => {
//   var x = 10;
//   var somma = num + x;
//   return somma;
// } // Se il codice è su più righe utilizzo le parentesi graffe ed il return non è più implicito
// var result = myArrowFunction2(5);
// console.log(result);

// // ARROW FUNCTION THIS
// document.getElementById("button").addEventListener("click",
//   function(){
//     console.log("funzione normale", this);
//   }
// );
//
// document.getElementById("button").addEventListener("click",
//   () => {
//     console.log("arrow function", this);
//   }
// );
// // FINE ARROW FUNCTION

// // SPREAD E REST
// function myFunction(...myArguments){
//   console.log(myArguments);
// }
// myFunction(1, 2, "Ciao", 57, "Simone", [58, 12, 23], {nome: "Simone", cognome: "Romiti"}); //...myArguments passato come parametro di una funzione significa che la funzione potrà avere un numero variabile di parametri da 1 a infinito
//
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var newArray = [arr1, arr2]; //Così ottengo un array bidimensionale che ha in posizione 0 l'array arr1 e in posizione 1 l'array arr2
// var mergedArray = [...arr1,...arr2]; // Così ottengo un array che contiene gli elementi di arr1 e gli elementi di arr2
// console.log(newArray);
// console.log(mergedArray);
//
// var object = {
//   nome: "Simone",
//   cognome: "Romiti"
// }
// var copyObj = {
//   ...object,
//   eta: 28,
// }
// console.log(copyObj); //Posso mettere lo spread più il nome di un altro oggetto come elemento di un nuovo oggetto, in questo modo il nuovo oggetto prenderà tutte le coppie chiave: valore dell'oggetto inserito dopo lo spread più quelle che inserisco dopo
// // FINE SPREAD E REST

// // AGEVOLAZIONI OGGETTI
// var nome = "nome";
// var cognome = "cognome";
// var object = {
//   nome,
//   cognome
// };
// console.log(object); //Se chiave e valore sono uguali basta scriverli semplicemente una volta
//
// var key = "eta";
// var newObject = {
//   nome: "Simone",
//   cognome: "Romiti",
//   [key]: 28
// };
// console.log(newObject); // Posso memorizzare una chiave in una variabile e richiamarla nell'oggetto mettendola tra parentesi quadre
