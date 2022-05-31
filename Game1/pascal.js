var bool = true;
/*recuperer la taille de trinagle*/
document.getElementById("valider").addEventListener("click", function() {
    if (bool == true) { //on a appuier sur valider au moins une fois
        var taille = document.getElementById("infos").value;
        afficherTriangle(TrianglePascal(taille));
        bool = false;
    }
});

document.getElementById("valider-1").addEventListener("click", function() {
    if (bool == true) {
        var numero = document.getElementById("stern").value;
        afficherStern(stern(numero));
        bool = false;
    }
});

document.getElementById("retry").addEventListener("click", function() {
    /*refraichir toute la page*/
    document.location.reload(true);
});
document.getElementById("retry-1").addEventListener("click", function() {
    document.location.reload(true);
});



/*generer le tableau*/
/*creer un tableau biodimensionel*/
function TrianglePascal(taille) {
    var tab = new Array(); /*equivalent à tab = [] */

    for (var n = 0; n < taille; n++) { // parcours le nombre de lignes
        tab[n] = new Array();

        for (var p = 0; p < n + 1; p++) {
            /*remplier les 1 dans les diagonales*/
            if (p == 0 || p == n) {
                tab[n][p] = 1;
            } else {
                /*remplir les autres cases*/
                tab[n][p] = tab[n - 1][p] + tab[n - 1][p - 1];
            }

        }

    }
    return tab;
}

/*afficher le triangle*/
function afficherTriangle(tab) {
    for (var i = 0; i < tab.length; i++) {
        for (var j = 0; j < tab[i].length; j++) {
            /*concatener les elts d'un meme tableau et rajouter un espace*/
            document.getElementById("res").innerHTML += tab[i][j] + " ";

        }
        /*dés qu'il a finit une ligne on revient à la ligne*/
        document.getElementById("res").innerHTML += "<br>";
    }
}


function stern(numero) {
    var tab1 = TrianglePascal(numero + 100);
    var tab2 = [];
    tab2.push(1);
    tab2.push(1);
    tab2.push(2);
    tab2.push(1);
    //tab2 = [1,1,2,1]
    for (var i = 4; i < numero; i++) {
        var sum = 0;
        var newval = Math.trunc(i / 2); //partie entiere
        for (var j = 0; j < newval + 1; j++) {
            sum += tab1[i - j][j] % 2;
        }
        tab2.push(sum);
    }
    return tab2;
}

console.log(TrianglePascal(4));

function afficherStern(tab) {
    for (var i = 0; i < tab.length; i++) {
        var u = i + 1;
        document.getElementById("stern-res").innerHTML += "s" + u + "=" + " " + tab[i] + " ";
    }
}