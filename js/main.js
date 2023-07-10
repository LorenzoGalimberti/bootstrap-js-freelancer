// ---------------- MAIN -------------------


let sendButton= document.getElementById("submitButton");
const promoCodes=["YHDNU32","JANJC63","PWKCN25","SJDPO96","POCIE24"];
a=[1,2,3,4]
console.log(findPosition(a,11));
//-------------- FUNCTIONS -----------------------


// TROVA ELEMENTO
function trovaElemento(array,elemento){
    for(let i=0;i<array.length;i++){
        if(array[i]== elemento){
            return true;
        }
    }
    return false;
  }

// FIND POSITION

function findPosition(array,elemento){
    
    for(let i=0;i<array.length;i++){
        if(array[i]==elemento){
            return i;
        }
    }
    return -1;
}


// ONCLICK FUNCTION
sendButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission
    // VARIABILI
    const backend=20.5;
    const frontend=15.3;
    const project=33.6;
    
    
    const discount=0.25;
    // 1) ESTRARRE IL TIPO DI LAVORO e le ore richieste e il codice promo
    let tipoLavoro= document.getElementById("inputTypeWork").value;
    let oreRichieste=parseInt(document.getElementById("inputHoursRequested").value);
    let oreRichiesteContainer=document.getElementById("inputHoursRequested");
    let prezzoFinale=0;
    let promoCode=document.getElementById("inputDiscountCode").value;
    let promoCodeContainer=document.getElementById("inputDiscountCode");
    
    console.log(promoCode);
    if (oreRichieste < 0) {
        validationMessageHours.innerHTML = "Perfavore inserire un numero positivo .";
        oreRichiesteContainer.classList.remove("errore");
        oreRichiesteContainer.classList.add("errore");
        
      } else {
        oreRichiesteContainer.classList.remove("errore");
        validationMessageHours.innerHTML = "";
        if (tipoLavoro=='Backend Development'){
            prezzoFinale=oreRichieste*backend;
            
        }else if (tipoLavoro=='Frontend Development'){
            prezzoFinale=oreRichieste*frontend;
            
        }else if (tipoLavoro == 'Project Analisys'){
            prezzoFinale=oreRichieste*project;
            
        }
        // rimaneggiamento del prezzo se presente un codice promo valido 
        //promoCodes.includes(promoCode)
        if (trovaElemento(promoCodes,promoCode)){
            // console.log("funziona");
            prezzoFinale=prezzoFinale*(1-discount);
            promoCodeContainer.classList.remove("errore");
            validationMessageDiscount.innerHTML = "";
            // eliminare l' elemento dall' array
            // let indexOfString=promoCodes.indexOf(promoCode);
            let indexOfString=findPosition(promoCodes,promoCode);
            //console.log(indexOfString);
            delete promoCodes[indexOfString];
        }else if (promoCode !=""){
            //validationMessageDiscount
            validationMessageDiscount.innerHTML = "Codice sconto non valido .";
            promoCodeContainer.classList.add("errore");
            
        }
        // inserimento del prezzo finale nell html

        document.getElementById("finalPrice").innerHTML = "il prezzo finale è di "+ prezzoFinale.toFixed(2) + " €";

    
    }
    
        

    
    
  })




  
  