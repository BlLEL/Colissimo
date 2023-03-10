/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function RecupPoidsPrix(poids, prix){
    const P1 = 250;
    const P2 = 500;
    const P3 = 750;
    const P4 = 1000;
    const P5 = 2000;
    const P6 = 5000;
    const P7 = 10000;
    const P8 = 15000;
    const P9 = 30000;
    
    if (poids <= P1){
        return prix + 4.95;
    }
    else if (poids <= P2){
        return prix + 6.70;
    }
    else if (poids <= P3){
        return prix + 7.60;
    }
    else if (poids <= P4){
        return prix + 8.25;
    }
    else if (poids <= P5){
        return prix + 9.55;
    }
    else if (poids <= P6){
        return prix + 14.65;
    }
    else if (poids <= P7){
        return prix + 21.30;
    }
    else if (poids <= P8){
        return prix + 26.95;
    }
    else if (poids <= P9){
        return prix + 33.40;
    }
    
}