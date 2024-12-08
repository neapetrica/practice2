document.getElementById("checkButton").addEventListener("click", function () {
  const text = document.getElementById("userInput").value.toLowerCase();
  const resultContainer = document.getElementById("resultContainer");
  const inputSection = document.getElementById("inputSection");
  const clickSound = document.getElementById("clickSound");
  const container = document.querySelector(".container");

  try {
    clickSound.play();
  } catch (error) {
    console.log("Eroare la redarea sunetului: ", error);

    alert("Nu s-a putut reda sunetul pe acest dispozitiv.");
  }

  const initialHeader = document.getElementById("initialHeader");
  const initialParagraph = document.getElementById("initialParagraph");

  if (initialHeader) initialHeader.style.display = "none";
  if (initialParagraph) initialParagraph.style.display = "none";

  const badWords = ["pula", "pl", "palm"];
  const manuWords = ["manu", "manusu", "manuil", "femei", "femeile"];
  const amuzant = ["pizda", "pisda"];

  const containsBadWords = badWords.some((badWord) => text.includes(badWord));
  const containsManuWords = manuWords.some((manuWord) =>
    text.includes(manuWord)
  );
  const containsAmuzant = amuzant.some((amuzantWord) =>
    text.includes(amuzantWord)
  );

  inputSection.style.display = "none";

  const message = document.createElement("p");
  const retryButton = document.createElement("button");
  retryButton.textContent = "Reîncearcă";

  if (containsBadWords) {
    message.textContent = "Petrica nu vorbeste asa vulgar!";
    container.style.borderColor = "red";
    container.style.boxShadow = "0 0 10px red";
  } else if (containsManuWords) {
    message.textContent = "Ce jobial!";
    container.style.borderColor = "yellow";
    container.style.boxShadow = "0 0 10px yellow";
  } else if (containsAmuzant) {
    message.innerHTML = "Ce amuzant!<br>A zis 'pisda'!";
    container.style.borderColor = "pink";
    container.style.boxShadow = "0 0 10px pink";
  } else if (text.length === 0) {
    message.innerHTML = "Am pus<br> 'Scrie aici...'<br> pentru cine?🤔";
    container.style.borderColor = "black";
    container.style.boxShadow = "0 0 10px black";
  } else if (text.length < 60) {
    message.innerHTML =
      "Nu ai ce sa intelegi.<br> si nici nu e cazul sa intelegi, <br>asta este singurul mod de a intelege. <br>daca te-apuci sa intelegi <br>intri in minte si s-a terminat";
  } else if (text.length <= 100) {
    message.textContent = "Cauta in dex si ai sa vezi ca asa e";
    container.style.borderColor = "white";
    container.style.boxShadow = "0 0 10px white";
  } else {
    message.textContent = "A scris petrica asa mult? Nu cred!";
    container.style.borderColor = "red";
    container.style.boxShadow = "0 0 10px red";
  }

  retryButton.addEventListener("click", function () {
    resultContainer.innerHTML = "";
    inputSection.style.display = "block";
    document.getElementById("userInput").value = "";

    if (initialHeader) initialHeader.style.display = "block";
    if (initialParagraph) initialParagraph.style.display = "block";

    container.style.borderColor = "";
    container.style.boxShadow = "";
  });

  resultContainer.innerHTML = "";
  resultContainer.appendChild(message);
  resultContainer.appendChild(retryButton);
});
