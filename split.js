function Split()
{
    console.clear();
    // Clear the teams
    document.getElementById("teams").innerHTML = "";

    // create an array of player names from textarea contents
    var listOfPlayerNames = document.getElementById("playernames").value.split('\n');
    //var listOfPlayerNames = ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5", "Player 6", "Player 7"];
    var numberOfTeams = document.getElementById('numberofteams').value;
    listOfPlayerNames = Shuffle(listOfPlayerNames);

    var totalPlayerCount = listOfPlayerNames.length;
    var playersPerTeam = Math.floor(totalPlayerCount / numberOfTeams);

    var currentTeamUl = 1;
    for (let t = 0; t < numberOfTeams; t++) {
        const unorderedTeamList = document.createElement("ul");
        const teamLabel = document.createElement("label");
        unorderedTeamList.setAttribute("id", `team${currentTeamUl}`);
        teamLabel.innerHTML = `Team: ${currentTeamUl}`;
        unorderedTeamList.appendChild(teamLabel);

        document.getElementById("teams").appendChild(unorderedTeamList);
        currentTeamUl++;
    }
    var remPlUlGened = false;
    var currentTeamNr = 1;
    for (let k = 0; k < totalPlayerCount; k++) {
        const teamNumber = Math.ceil(currentTeamNr / playersPerTeam)
        
        const player = document.createElement("li");
        player.innerHTML = listOfPlayerNames[k];

        const teamElement = document.getElementById(`team${teamNumber}`);
        if(typeof(teamElement) != 'undefined' && teamElement != null){
            document.getElementById(`team${teamNumber}`).appendChild(player);
        } else{
            if(remPlUlGened == false) {
                const unorderedTeamList = document.createElement("ul");
                const teamLabel = document.createElement("label");
                unorderedTeamList.setAttribute("id", "remainingplayers");
                teamLabel.innerHTML = "Remaining players";
                unorderedTeamList.appendChild(teamLabel);
                document.getElementById("teams").appendChild(unorderedTeamList);
                remPlUlGened = true;
            }
            document.getElementById("remainingplayers").appendChild(player);
        }
        currentTeamNr++;
    }
}

function Shuffle(a) {
    var randNum, x, i;
    for (i = a.length - 1; i > 0; i--) {
        randNum = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[randNum];
        a[randNum] = x;
    }
    return a;
}

function UpdateLabel() {
    document.getElementById("rangeLabel").innerHTML = "Number of teams: " + document.getElementById("numberofteams").value;
}