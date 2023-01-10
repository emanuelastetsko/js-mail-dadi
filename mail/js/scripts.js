const email = prompt("Per accedere al servizio è richiesto il proprio indirizzo email");
console.log(email);

// Array con elenco mail con autorizzazione 
const emailList = [
    "emanuelastetsko.es@gmail.com",
    "marcolucia@gmail.com",
    "alessiapassalacqua@libero.it",
    "francescorossi@gmail.com",
    "elenacampanotto@libero.it",
    "gabrielemanfredi@gmail.com"
];


// Verifica indirizzo email
if (emailList.includes(email)){     // Se l'indirizzo email è contenuto nella lista allora...
    document.getElementById('result').innerHTML = "Il tuo indirizzo email risulta valido e ora potrai accedere alla tua area riservata!";
    document.getElementById("result").style.color = "#008000";
}
else{                               // ALTRIMENTI 
    document.getElementById("result").innerHTML = "Ci dispiace, ma il tuo indirizzo NON risulta valido..."
    document.getElementById("result").style.color = "#FF0000";
}
