
    fetch("./data.json")
    .then(response => response.json())
    .then(myHP => loadPage(myHP));

    function loadPage(myHP){
        var mainContainter = document.getElementById("home");
        let name = myHP.homepage_pics.name;
        let div = document.createElement("div");
                div.innerHTML  = `
                <h1>Welcome To Cooper And Qusai's VideoGame site!</h1>
                <p>Here you can learn more about: </p>
                <br></br>
                <h2><strong>${myHP.homepage_pics[0].name}: </strong></h2>
                <img src="${myHP.homepage_pics[0].url}" alt="Videogame Consoles">
                <h3><strong> ${myHP.homepage_pics[0].info}</strong></h3>
                <br></br>
                <h2><strong>${myHP.homepage_pics[1].name}: </strong></h2>
                <img src="${myHP.homepage_pics[1].url}" alt="Videogames">
                <h3><strong> ${myHP.homepage_pics[1].info}</strong></h3>
                <br></br>
                <h2><strong>${myHP.homepage_pics[2].name}: </strong></h2>
                <img src="${myHP.homepage_pics[2].url}" alt="Videogames">
                <h3> ${myHP.homepage_pics[2].info}</h3>
                `;;
                mainContainter.appendChild(div);
        console.log(myHP.homepage_pics[0].name)
    }
