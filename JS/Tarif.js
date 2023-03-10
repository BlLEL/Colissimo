/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.addEventListener("load", function () {

    window.document.querySelector("#btn_calculer").addEventListener("click", function () {
        // Déclaration des constantes
        

        // Déclaration et affectation des variables
        let numPoids = parseInt(window.document.querySelector("#num_poids").value);
        let TarifFinale = RecupPoids(numPoids);
        // Affichage du résultat
        window.document.querySelector("#TarifFinale").innerHTML =
                "Le prix avec tarif sera : " + TarifFinale + " €";
    });
});



function RecupPoids(poids){
    const P1 = 250;
    const P2 = 500;
    const P3 = 750;
    const P4 = 1000;
    const P04 = 1;
    const P5 = 2000;
    const P05 = 2;
    const P6 = 5000;
    const P06 = 5;
    const P7 = 10000;
    const P07 = 10;
    const P8 = 15000;
    const P08 = 15;
    const P9 = 30000;
    const P09 = 30;
    
    if (poids <= P1){
        return 4.95;
    }
    else if (poids <= P2){
        return 6.70;
    }
    else if (poids <= P3){
        return 7.60;
    }
    else if (poids <= P4){
        return 8.25;
    }
    else if (poids <= P5){
        return 9.55;
    }
    else if (poids <= P6){
        return 14.65;
    }
    else if (poids <= P7){
        return 21.30;
    }
    else if (poids <= P8){
        return 26.95;
    }
    else if (poids <= P9){
        return 33.40;
    }
    else if (poids > P9){
        return ('pas possible, car on ne valide pas si cela dépasse 30kg, point positif vous dépensez 0');
    }  
}