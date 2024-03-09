// Author: QusaiElwazir
// ISU Netid : qusaie25@iastate.edu
// Date : 03/9, 2024



function getInputValue(){
    let gameName = document.forms["my_form"]["input"];
    let inputgameName = gameName.value;
    fetch("./data.json")
    .then(response => response.json())
    .then(myGames => loadgames(myGames));
    
    function loadgames(myGames) {
        var mainContainter = document.getElementById("goodgames");
        for (var i = 0; i<myGames.game_consoles.length; i++){
            if (myGames.games[i].name === inputgameName) {
                let title = myGames.games[i].name;
                let year = myGames.games[i].release_year;
                let genre = myGames.games[i].genre;
                let url = myGames.games[i].url;
                let info = myGames.games[i].game_info;
                let div = document.createElement("div");
                div.innerHTML  = `
                <h3> You have selected: ${title}</h3> <br>
                This game was released in: ${year} and is ${year - 2024} years old<br>
                ${title} is a ${genre} game. <br>
                <img src=${url} width="200"> <br> <br>
                <h3> Here is some more information! </h3>
                <p> ${info} </p>
                `;
                mainContainter.appendChild(div);
            }
        }
    }
}