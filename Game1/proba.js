var i = 0;
var tableau = [];

/*Selectionner le bouton click et recuperer la taille de tableau*/
document.getElementById("envoyer-1").addEventListener("click", function() {
    /*recuperer la valeur d'input*/
    var taille = document.getElementById("taille").value;
    /*creer une nouvelle tableau*/

    document.getElementById("envoyer-2").addEventListener("click", function() {
        /*rentrer les valeurs dans tab*/
        if (i < taille) {
            var chiffre = document.getElementById("tab").value;
            tableau.push(chiffre);
            i++;
        } else {
            /*on a bien rentrer tous notre valeur*/
            document.getElementById("envoyer-2").value = "Generate!";
            document.getElementById("envoyer-2").addEventListener("mouseover", function() {
                document.getElementById("moyenne").textContent = moyenne(tableau);
                document.getElementById("variance").textContent = variance(tableau);
                document.getElementById("ecart-type").textContent = ecartType(tableau);

            });
        }
    });
});

document.getElementById("reset-1").addEventListener("click", function() {
    /*refraichir toute la page*/
    document.location.reload(true);
});
document.getElementById("reset-2").addEventListener("click", function() {
    document.location.reload(true);
});

function moyenne(tableau) {
    var sum = 0;
    var calcul = 0;
    for (var i = 0; i < tableau.length; i++) {
        /*convertir chaine en int*/
        sum += parseInt(tableau[i]);
    }
    calcul = sum / tableau.length;
    return calcul;
}

function variance(tableau) {
    var moy = moyenne(tableau);
    var sum = 0;
    var varia;
    for (var i = 0; i < tableau.length; i++) {
        sum += (parseInt(tableau[i]) - moy) * (parseInt(tableau[i]) - moy);
    }
    varia = sum / tableau.length;
    return varia;
}

function ecartType(tableau) {
    var a = variance(tableau);
    return Math.sqrt(a);
}