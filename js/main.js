/*
Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido, il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito tag HTML appena sotto il bottone send.
Alcuni consigli
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :slightly_smiling_face:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
Bonus:
Quando l’utente clicca sul pulsante “Send”, se il codice promozionale inserito non è valido, facciamo diventare quest’ultimo di colore rosso.
Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, eliminare quel codice dall’elenco dei codici sconto disponibili, in modo che non sia più utilizzabile.

*/


let sendButton= document.getElementById("submitButton");

sendButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    // VARIABILI
    const backend=20.5;
    const frontend=15.3;
    const project=33.6;

    const promoCodes=["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];
    const discount=0.25;
    // 1) ESTRARRE IL TIPO DI LAVORO e le ore richieste e il codice promo
    let tipoLavoro= document.getElementById("inputTypeWork").value;
    let oreRichieste=parseInt(document.getElementById("inputHoursRequested").value);
    let prezzoFinale=0;
    let promoCode=document.getElementById("inputDiscountCode").value;

    console.log(promoCode);
    if (oreRichieste < 0) {
        validationMessageHours.innerHTML = "Perfavore inserire un numero positivo .";
      } else {
        validationMessageHours.innerHTML = "";
        if (tipoLavoro=='Backend Development'){
            prezzoFinale=oreRichieste*backend;
            
        }else if (tipoLavoro=='Frontend Development'){
            prezzoFinale=oreRichieste*frontend;
            
        }else if (tipoLavoro == 'Project Analisys'){
            prezzoFinale=oreRichieste*project;
            
        }
        // rimaneggiamento del prezzo se presente un codice promo valido 
        if (promoCodes.includes(promoCode)){
            // console.log("funziona");
            prezzoFinale=prezzoFinale*(1-discount);
        }else{
            //validationMessageDiscount
            validationMessageDiscount.innerHTML = "Codice sconto non valido .";
        }
        // inserimento del prezzo finale nell html

        document.getElementById("finalPrice").innerHTML = "il prezzo finale è di "+ prezzoFinale.toFixed(2) + " €";

    
    }
    
        

    
    
  })