const submitButton = document.getElementById("submit-button");

// Gioco 
submitButton.addEventListener("click", 

    function(){


        // Due dadi
        let mioDado = Math.floor(Math.random() * 6) + 1;       // Intero casuale da 1 a 6
        let computerDado = Math.floor(Math.random() * 6) + 1;  // Intero casuale da 1 a 6

        console.log(mioDado); 
        console.log(computerDado);
        document.getElementById("mio-dado").innerHTML = mioDado;
        document.getElementById("computer-dado").innerHTML = computerDado;

        if (mioDado > computerDado){
        console.log("Hai vinto!");
        document.getElementById("result").innerHTML = "Hai vinto!";
        document.getElementById("result").style.color = "#008000";
        }
        else if(mioDado < computerDado){
        console.log("Hai perso...");
        document.getElementById("result").innerHTML = "Hai perso...";
        document.getElementById("result").style.color = "#FF0000";
        }
        else if(mioDado = computerDado){
        console.log("Pareggio");
        document.getElementById("result").innerHTML = "Pareggio";
        document.getElementById("result").style.color = "#000000";

        }
    }

)