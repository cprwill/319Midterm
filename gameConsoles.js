// Author: CooperDittmer
// ISU Netid : cooperd1@iastate.edu
// Date : 03/6, 2024



function getInputValue(){
    let consoleName = document.forms["my_form"]["input"];
    let inputconsoleName = consoleName.value;
    fetch("./data.json")
    .then(response => response.json())
    .then(myConsoles => loadgameconsoles(myConsoles));
    
    function loadgameconsoles(myConsoles) {
        var mainContainter = document.getElementById("goodconsoles");
        for (var i = 0; i<myConsoles.game_consoles.length; i++){
            if (myConsoles.game_consoles[i].name === inputconsoleName) {
                let title = myConsoles.game_consoles[i].name;
                let year = myConsoles.game_consoles[i].release_year;
                let url = myConsoles.game_consoles[i].url;
                let info = myConsoles.game_consoles[i].console_info;
                let generation = myConsoles.game_consoles[i].generation;
                let div = document.createElement("div");
                div.innerHTML  = `
                <h3> You have selected: ${title}</h3> <br>
                This console was released in: ${year} and is part of the ${generation} generation of consoles<br>
                <img src=${url} width="200"> <br> <br>
                <h3> Here is some more information! </h3>
                <p> ${info} </p>
                `;
                mainContainter.appendChild(div);
            }
        }
    }
}