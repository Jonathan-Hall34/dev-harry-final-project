const lastForm = {
  gamertag: "Witness Finesse",
  console: "Xbox",
  gameTitle: "Halo",
  genre: "Shooter",
  date: "2012-08-02",
  subscribe: true
};

function populateGameTitles(console) {
  const gameTitle = document.getElementById("gameTitle");
  gameTitle.innerHTML = "";
  
  let options = [];
  if (console === "Xbox") {
    options = ["Gears of War", "Halo", "Grand Theft Auto", "Resident Evil", "Fallout", "Bioshock", "Other"];
  } else if (console === "PlayStation") {
    options = ["The Last of Us", "Uncharted", "Spider-Man", "God of War", "Silent Hill", "Metal Gear Solid", "Other"];
  } else if (console === "PC") {
    options = ["Call of Duty", "Minecraft", "Fortnite", "Apex Legends", "World of Warcraft", "League of Legends", "Other"];
  }
+
  options.forEach(game => {
    const optionElement = document.createElement("option");
    optionElement.value = game;
    optionElement.textContent = game;
    gameTitle.appendChild(optionElement);
  });
}

function loadForm(data) {
  document.getElementById("gamertag").value = data.gamertag;
  document.querySelector(`input[name="console"][value="${data.console}"]`).checked = true;
  populateGameTitles(data.console);
  document.getElementById("gameTitle").value = data.gameTitle;
  document.getElementById("genre").value = data.genre;
  document.getElementById("date").value = data.date;
  document.getElementById("subscribe").checked = data.subscribe;
}

function collectFormData() {
  const gamertag = document.getElementById("gamertag").value;
  const console = document.querySelector('input[name="console"]:checked')?.value;
  const gameTitle = document.getElementById("gameTitle").value;
  const genre = document.getElementById("genre").value;
  const date = document.getElementById("date").value;
  const subscribe = document.getElementById("subscribe").checked;

  return {
    gamertag,
    console,
    gameTitle,
    genre,
    date,
    subscribe
  };
}

function renderFormSummary(data) {
  const output = document.getElementById("output");

  output.innerHTML = "";

  const content = `
    <p><strong>Gamertag:</strong> ${data.gamertag}</p>
    <p><strong>Preferred Console:</strong> ${data.console}</p>
    <p><strong>Game Title:</strong> ${data.gameTitle}</p>
    <p><strong>Genre:</strong> ${data.genre}</p>
    <p><strong>Session Date:</strong> ${data.date}</p>
    <p><strong>Subscribed to Gaming News:</strong> ${data.subscribe ? "Yes" : "No"}</p>
  `;
  output.innerHTML = content;
}

function submitForm() {
  const updatedData = collectFormData();
  
  renderFormSummary(updatedData);

  console.log(JSON.stringify(updatedData, null, 1));
}

document.querySelectorAll('input[name="console"]').forEach(radio => {
  radio.addEventListener("change", event => {
    populateGameTitles(event.target.value);
  });
});

document.getElementById("loadLastForm").addEventListener("click", () => {
  loadForm(lastForm);
});

document.getElementById("submitForm").addEventListener("click", submitForm);