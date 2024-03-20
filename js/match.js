 // Función para obtener parámetros de la URL
 function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function addScoreBoard(){

}

// Obtener parámetros de la URL
var jugadorP11 = getParameterByName("jugador1_p1");
var jugadorP12 = getParameterByName("jugador2_p1");

var jugadorP21 = getParameterByName("jugador1_p2");
var jugadorP22 = getParameterByName("jugador2_p2");
var sets = parseInt(getParameterByName("sets"));

const pareja1 = `${jugadorP11} / ${jugadorP12}`;
const pareja2 = `${jugadorP21} / ${jugadorP22}`;
var sets = parseInt(getParameterByName('sets'));

// Rellenar los datos en la tabla
var scoreboardBody = document.getElementById('scoreboard-body');
var pareja1Row = "<tr><td>" + pareja1 + "</td><td><label id='game_pareja1'>0</label></td>";
var pareja2Row = "<tr><td>" + pareja2 + "</td><td><label id='game_pareja2'>0</label></td>";
for (var i = 1; i <= sets; i++) {
    pareja1Row += "<td id='set1_" + i + "'><label id='set1_p"+ i +"'>0</label></td>";
    pareja2Row += "<td id='set2_" + i + "'><label id='set1_p"+ i +"'>0</label></td>";
}
pareja1Row += "</tr>";
pareja2Row += "</tr>";
scoreboardBody.innerHTML = pareja1Row + pareja2Row;

// Evento de clic para sumar puntos a la pareja 1
document.getElementById('btnPareja1').addEventListener('click', function() {
    var gamePareja1 = parseInt(document.getElementById('game_pareja1').innerText);
    if (gamePareja1 < 30) {
        gamePareja1 += 15;
    }
    else if(gamePareja1 == 30){
        gamePareja1 += 10;
    } else if (gamePareja1 == 40) {
        // Agregar lógica para sumar 1 al set 1
        // Por ejemplo:
        var set1 = parseInt(document.getElementById('set1_p1').textContent);
        var set2 = parseInt(document.getElementById('set1_p2').textContent);
        set1 += 1;
        if(set1 <= 6){
            document.getElementById('set1_p1').textContent = set1;
        } else{
            set1 = 0;
            set2 += 1
            document.getElementById('set1_p2').textContent = set2;
        }

        gamePareja1 = 0; // Reiniciar puntaje del game
        document.getElementById('game_pareja2').textContent = 0;
    }
    document.getElementById('game_pareja1').textContent = gamePareja1;
});

// Evento de clic para sumar puntos a la pareja 2
document.getElementById('btnPareja2').addEventListener('click', function() {
    var gamePareja2 = parseInt(document.getElementById('game_pareja2').textContent);
    if (gamePareja2 < 30) {
        gamePareja2 += 15;
    } else if(gamePareja2 == 30){
        gamePareja2 += 10;
    } else if (gamePareja2 == 40) {
        // Agregar lógica para sumar 1 al set 1
        // Por ejemplo:
        var set1 = parseInt(document.getElementById('set2_1').innerText);
        var set2 = parseInt(document.getElementById('set2_2').textContent);
        set1 += 1;
        if(set1 <= 6){
            document.getElementById('set2_1').textContent = set1;
        } else{
            set1 = 0;
            set2 += 1
            document.getElementById('set2_2').textContent = set2;
        }
        gamePareja2 = 0; // Reiniciar puntaje del game
        document.getElementById('game_pareja1').textContent = 0;
    }
    document.getElementById('game_pareja2').textContent = gamePareja2;
});