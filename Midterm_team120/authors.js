
fetch("./data.json")
.then(response => response.json())
.then(myAuth => loadPage(myAuth));

function loadPage(myAuth){
    var mainContainter = document.getElementById("authors");
    let name = myAuth.authors.name;
    let div = document.createElement("div");
            div.innerHTML  = `
            <h1>About the Authors:</h1>
            <h2>About ${myAuth.authors[0].name}:</h2>
            <p>${myAuth.authors[0].bio}</p>
            <p>email: ${myAuth.authors[0].email}</p>
            <h2>About ${myAuth.authors[1].name}:</h2>
            <p>${myAuth.authors[1].bio}</p>
            <p>email: ${myAuth.authors[1].email}</p>
            <h2>About used technologies</h2>
            <p>We used javascript, html, css and no C to make this webpage!</p>
            <p>For any questions or suggestions about the webpage please email us!</p>
            `;;
            mainContainter.appendChild(div);
}
