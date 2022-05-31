var scoreTmp = 0;
var scoreActuel = [0, 0];
var indexPlayer = 1;
var boolPlay = true;
//sur quelle image on était
var numberTmp = 0;

var randomNumber = Math.floor(Math.random() * 8) + 1; //genere un chiffre aleatoire entre 1 et 8 pour les images


document.getElementsByClassName("score-1").textContent = "0";
document.getElementsByClassName("score-2").textContent = "0";
document.getElementsByClassName("current-score-1").textContent = "0";
document.getElementsByClassName("current-score-2").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {
    if (boolPlay) {
        var randomNumber = Math.floor(Math.random() * 8) + 1; //genere un chiffre aleatoire entre 1 et 8 pour les images
        /*pour changer l'image à chaque fois qu'on clique sur Roll Dice*/
        document.querySelector(".image-roll").src = "pics/" + randomNumber + ".png";

        // AJOUTE LE SCORE
        //si on tombe sur deux soers d'affile on a gagné
        if (randomNumber == 1 && numberTmp == 6) {
            scoreTmp += 200;
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp;
        } else if (randomNumber == 4) {
            //bonus si on tombe sur l'image 4
            scoreTmp += 30;
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp;
        } else if (randomNumber != 3) {
            scoreTmp += randomNumber;
            document.querySelector(".current-score-" + indexPlayer).textContent = scoreTmp;
        } else { //BURNS on est tombé sur 3 ,on passe a lautre joueur,on met tous les points à 0
            indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
            scoreTmp = 0;
            document.querySelector(".current-score-1").textContent = "0";
            document.querySelector(".current-score-2").textContent = "0";
            //pour changer le point blanc pour l'autre joueur
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;
            //pour faire varier la classe active
            elem1.classList.toggle("active");
            elem2.classList.toggle("active");

        }
        //recuperer le nombre precedent
        numberTmp = randomNumber;
    }
});

//botton hold : passer a l'autre joueur et souvegarder le score
document.querySelector(".btn-hold").addEventListener("click", function() {

    if (boolPlay) { //boolPlay = true

        //actualiser le score actuel
        scoreActuel[indexPlayer - 1] += scoreTmp;

        document.querySelector(".score-" + indexPlayer).textContent = scoreActuel[indexPlayer - 1];
        //sil est gagne = 200
        if (scoreActuel[indexPlayer - 1] >= 200) {
            //changer palyer par winner
            document.querySelector(".name-" + indexPlayer).textContent = "Winner!";
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;
            elem1.classList.remove("active");
            elem2.classList.remove("active");

            boolPlay = false;

        } else {
            indexPlayer === 1 ? indexPlayer = 2 : indexPlayer = 1;
            scoreTmp = 0;
            document.querySelector(".current-score-1").textContent = "0";
            document.querySelector(".current-score-2").textContent = "0";
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;
            elem1.classList.toggle("active");
            elem2.classList.toggle("active");
        }
    }
});