const footballTeam = {
    team: "FC Barcelona",
    year: 2026,
    headCoach: "Hansi Flick",
    players: [
        // Goalkeepers
        { name: "Joan García", position: "goalkeeper", isCaptain: false },
        { name: "Wojciech Szczęsny", position: "goalkeeper", isCaptain: false },
        { name: "Diego Kochen", position: "goalkeeper", isCaptain: false },
        // Defenders
        { name: "Ronald Araújo", position: "defender", isCaptain: true },
        { name: "Pau Cubarsí", position: "defender", isCaptain: false },
        { name: "Alejandro Balde", position: "defender", isCaptain: false },
        { name: "Jules Koundé", position: "defender", isCaptain: false },
        { name: "Andreas Christensen", position: "defender", isCaptain: false },
        { name: "Eric García", position: "defender", isCaptain: false },
        { name: "Héctor Fort", position: "defender", isCaptain: false },
        { name: "Gerard Martín", position: "defender", isCaptain: false },
        // Midfielders
        { name: "Pedri", position: "midfielder", isCaptain: false },
        { name: "Gavi", position: "midfielder", isCaptain: false },
        { name: "Frenkie de Jong", position: "midfielder", isCaptain: false },
        { name: "Dani Olmo", position: "midfielder", isCaptain: false },
        { name: "Marc Casadó", position: "midfielder", isCaptain: false },
        { name: "Fermín López", position: "midfielder", isCaptain: false },
        { name: "Marc Bernal", position: "midfielder", isCaptain: false },
        { name: "Pablo Torre", position: "midfielder", isCaptain: false },
        // Forwards
        { name: "Lamine Yamal", position: "forward", isCaptain: false },
        { name: "Raphinha", position: "forward", isCaptain: false },
        { name: "Robert Lewandowski", position: "forward", isCaptain: false },
        { name: "Ferran Torres", position: "forward", isCaptain: false },
        { name: "Pau Víctor", position: "forward", isCaptain: false },
        { name: "Ansu Fati", position: "forward", isCaptain: false }
    ]
};

// selecting elements
const headCoachEl = document.getElementById("head-coach");
const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// displaying the Team on the screen
teamEl.textContent = footballTeam.team;

// displaying the Team on the screen
yearEl.textContent = footballTeam.year;

// displaying the Head coach on the screen
headCoachEl.textContent = footballTeam.headCoach;

function setPlayerCards(arr = []) {
    let playerCardsHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const { name, position, isCaptain } = arr[i];

        // --- The Captain Switch ---
        let isCaptainText = "";
        if (isCaptain) {
            isCaptainText = "(Captain) ";
        }

        playerCardsHTML += `
      <div class="player-card">
        <h2>${isCaptainText}${name}</h2>
        <p>Position: ${position}</p>
      </div>
    `;
    }

    playerCards.innerHTML = playerCardsHTML;
}

// --- Run the function! ---
setPlayerCards(footballTeam.players);

playersDropdownList.addEventListener("change", (e) => {
    const choice = e.target.value;

    switch(choice) {
        case "forward":
            setPlayerCards(footballTeam.players.filter(player => player.position === "forward"));
            break;

        case "midfielder":
            setPlayerCards(footballTeam.players.filter(player => player.position === "midfielder"))
            break;

        case "defender":
            setPlayerCards(footballTeam.players.filter(player => player.position === "defender" ));
            break;
        
        case "goalkeeper":
            setPlayerCards(footballTeam.players.filter(player => player.position === "goalkeeper"));
            break;

        case "all":
        default:
            setPlayerCards(footballTeam.players);
    }

    // Instead of 4 separate cases, you could just do:
// setPlayerCards(footballTeam.players.filter(player => player.position === choice));
})





