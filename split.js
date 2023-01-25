function Split()
{
    document.getElementById("teams").innerHTML = "";
    var listOfPlayerNames = document.getElementById("playernames").value.split('\n');
    if(listOfPlayerNames.length == 1) {
        return;
    }
    listOfPlayerNames = FilterOutWhiteLineAndEmpty(listOfPlayerNames);
    const numberOfTeams = document.getElementById("numberofteams").value;
    listOfPlayerNames = Shuffle(listOfPlayerNames);
    const playerCount = listOfPlayerNames.length;
    const playersPerTeam = Math.floor(playerCount / numberOfTeams);
    for (let teamNumber = 1; teamNumber <= numberOfTeams; teamNumber++) {
        const unorderedTeamList = document.createElement("ul");
        const teamLabel = document.createElement("label");
        unorderedTeamList.setAttribute("id", `team${teamNumber}`);
        teamLabel.innerHTML = `Team: ${teamNumber}`;
        unorderedTeamList.appendChild(teamLabel);
        document.getElementById("teams").appendChild(unorderedTeamList);
    }
    var teamForRemainingPlayer = false;
    for (let k = 0; k < playerCount; k++) {
        const teamNumber = Math.ceil((k+1) / playersPerTeam);
        const player = document.createElement("li");
        player.innerHTML = listOfPlayerNames[k];
        const teamElement = document.getElementById(`team${teamNumber}`);
        if(typeof(teamElement) != 'undefined' && teamElement != null){
            document.getElementById(`team${teamNumber}`).appendChild(player);
        } else{
            if(teamForRemainingPlayer == false) {
                const unorderedTeamList = document.createElement("ul");
                const teamLabel = document.createElement("label");
                unorderedTeamList.setAttribute("id", "remainingplayers");
                teamLabel.innerHTML = "Remaining players";
                unorderedTeamList.appendChild(teamLabel);
                document.getElementById("teams").appendChild(unorderedTeamList);
                teamForRemainingPlayer = true;
            }
            document.getElementById("remainingplayers").appendChild(player);
        }
    }
}
function FilterOutWhiteLineAndEmpty(array)
{
    var returnArray = [];
    for (let p = 0; p < array.length; p++) {
        const playerName = array[p];
        if(playerName != " " && playerName) {
            returnArray.push(playerName);
        }
    }
    return returnArray;
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