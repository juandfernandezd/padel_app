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


// Obtener parámetros de la URL
var jugadorP11 = getParameterByName("jugador1_p1");
var jugadorP12 = getParameterByName("jugador2_p1");

var jugadorP21 = getParameterByName("jugador1_p2");
var jugadorP22 = getParameterByName("jugador2_p2");
var sets = parseInt(getParameterByName("sets"));

const pareja1 = `${jugadorP11} / ${jugadorP12}`;
const pareja2 = `${jugadorP21} / ${jugadorP22}`;
var sets = parseInt(getParameterByName('sets'));

// Inicializar el puntaje de juegos para cada pareja
let juegosPareja1 = 0;
let juegosPareja2 = 0;
// Variables para llevar el seguimiento de los juegos ganados por cada pareja en cada set
let juegosSetPareja1 = []; // Array para almacenar los juegos ganados por la pareja 1 en cada set
let juegosSetPareja2 = []; // Array para almacenar los juegos ganados por la pareja 2 en cada set


function llenarTablero(scoreboardBody){
    var pareja1Row = "<tr><td>" + pareja1 + "</td><td><label id='game_pareja1'>0</label></td>";
    var pareja2Row = "<tr><td>" + pareja2 + "</td><td><label id='game_pareja2'>0</label></td>";
    for (var i = 1; i <= sets; i++) {
        pareja1Row += "<td id='set" + i + "'><label id='p1_set"+ i +"'>0</label></td>";
        pareja2Row += "<td id='set" + i + "'><label id='p2_set"+ (i) +"'>0</label></td>";
    }
    pareja1Row += "</tr>";
    pareja2Row += "</tr>";
    scoreboardBody.innerHTML = pareja1Row + pareja2Row;
}



// Rellenar los datos en la tabla

$('#scoreboard-head').append('<th>Pareja</th><th>Game</th>')  
    for (var i = 0; i < sets; i++) {
        $('#scoreboard-head').append('<th>Set ' + (i+1) + '</th>')            
}

var scoreboardBody = document.getElementById('scoreboard-body');
llenarTablero(scoreboardBody);

// Evento de clic para sumar puntos a la pareja 1
document.getElementById('btnPareja1').addEventListener('click', function() {
    var game = parseInt(document.getElementById('game_pareja1').innerText); //gamepareja1
    //getScoreGameBoard(gamePareja1)
    if (game < 30) {
        game += 15;
    }
    else if(game == 30){
        game += 10;
    } else if (game == 40) {
        // Agregar lógica para sumar 1 al set 1
        // Por ejemplo:
        var set1 = parseInt(document.getElementById('p1_set1').textContent);
        var set2 = parseInt(document.getElementById('p1_set2').textContent);
        set1 += 1;
        if(set1 <= 6){
            document.getElementById('p1_set1').textContent = set1;
        } else{
            set1 = 0;
            set2 += 1
            document.getElementById('p1_set2').textContent = set2;
        }

        game = 0; // Reiniciar puntaje del game
        document.getElementById('game_pareja2').textContent = 0;
    }

    document.getElementById('game_pareja1').textContent = game; //gamepareja1
});

// Evento de clic para sumar puntos a la pareja 2
document.getElementById('btnPareja2').addEventListener('click', function() {
    var game = parseInt(document.getElementById('game_pareja2').textContent); //gamepareja2
    //getScoreGameBoard(gamePareja2)

    if (game < 30) {
        game += 15;
    }
    else if(game == 30){
        game += 10;
    } else if (game == 40) {
        // Agregar lógica para sumar 1 al set 1
        // Por ejemplo:
        var set1 = parseInt(document.getElementById('p2_set1').textContent);
        var set2 = parseInt(document.getElementById('p2_set2').textContent);
        set1 += 1;
        if(set1 <= 6){
            document.getElementById('p2_set1').textContent = set1;
        } else{
            set1 = 0;
            set2 += 1
            document.getElementById('p2_set2').textContent = set2;
        }

        game = 0; // Reiniciar puntaje del game
        document.getElementById('game_pareja2').textContent = 0;
    }

    document.getElementById('game_pareja2').textContent = game ; // gamePareja2
});


