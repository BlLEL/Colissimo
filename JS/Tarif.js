/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function RecupPoidsPrix(poids, prix){
    const P1 = 250;
    const P2 = 500;
    const P3 = 750;
    
    if (poids <= P1){
        return prix + 4.95;
    }
    else if (poids <= P2){
        return prix + 6.70;
    }
    else if (revenus <= T3){
        let impot = ((revenus - T2)*0.3)+((T2 - T1)*0.11);
        return impot.toFixed(2);
    }
    else if (revenus <= T4){
        let impot = ((revenus - T3)*0.41)+((T3 - T2)*0.3)+((T2 - T1)*0.11);
        return impot.toFixed(2);
    }
    else if (revenus > T4){
        let impot = ((revenus - T4)*0.45)+((T4 - T3)*0.41)+((T3 - T2)*0.3)+((T2 - T1)*0.11);
        return impot.toFixed(2);
    }
}