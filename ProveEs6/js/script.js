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

// LET E CONST
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
