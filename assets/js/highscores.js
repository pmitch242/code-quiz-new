// =====================================Varibles==========================================
var body = document.body;
var main = document.querySelector(".main");
var listContainer = document.querySelector(".listcontainer");
var liElement = document.querySelector("li");

// Elements created
var backButton = document.createElement("button");
var clearButton = document.createElement("button");


//Functions
function replacePage() {
    location.replace("index.html")
}

// Set Elements
backButton.textContent = "BACK";
backButton.setAttribute("class", "btn btn-secondary");
main.appendChild(backButton);
clearButton.textContent = "CLEAR HIGH SCORE"
clearButton.setAttribute("class", "btn btn-secondary");
main.appendChild(clearButton);

scoreDisplay = localStorage.getItem("scores");
initialsDisplay = localStorage.getItem("initials");
scoreDisplay = JSON.parse(scoreDisplay);
initialsDisplay = JSON.parse(initialsDisplay);
if (scoreDisplay != null) {

    for (i = 0; i < scoreDisplay.length; i++) {
        //create Elements
        var scoreLi = document.createElement("li");
        var rowDiv = document.createElement("div");
        var col1 = document.createElement("div");
        var col2 = document.createElement("div");
        // scoreLi.innerHTML = ("Name : " + initialsDisplay[i] + " Score : " + scoreDisplay[i]);

        //Set Attributes
        scoreLi.setAttribute("class", "list-group-item text-left");
        rowDiv.setAttribute("class", "row");
        col1.setAttribute("class", "col text-center");
        col2.setAttribute("class", "col text-center");

        //set and append
        col1.innerHTML = ("Name : " + initialsDisplay[i]);
        col2.innerHTML = ("Score : " + scoreDisplay[i]);

        listContainer.append(scoreLi);
        scoreLi.append(rowDiv);
        rowDiv.append(col1);
        rowDiv.append(col2);

    }
}

backButton.onclick = function () {
    replacePage();
}

clearButton.addEventListener('click', function () {
    localStorage.clear();
    while (scoreLi.firstChild) {
        scoreLi.removeChild(scoreLi.firstChild)
    }
})
