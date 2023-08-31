let analyse = document.body.innerHTML;

// const surligne = () => {
//   // const theName = new RegExp(`/\b${name}\b/`, "gi");
//   analyse = analyse.replace(
//     /Einstein/gi,
//     `<span style="background:pink">$&</span>`
//   );
//   document.body.innerHTML = analyse;
// };

const showLogo = (womanName) => {
  const logo = document.body.appendChild(document.createElement("section"));
  // Je crée, dans la balise body, un enfant, qui sera de type "section"
  logo.setAttribute("id", "icebergAlert");
  // J'attribue à cette section en param1 un id, ert en param2 le nom de cet id
  const content = document.getElementById("icebergAlert");
  // Je déclare une constante qui pointe cet id

  // Je crée ensuite 2 enfants à notre section "Iceberg" : 1 balise titre et 1 balise img
  const icebergText = content.appendChild(document.createElement("p"));
  icebergText.classList.add("icebergAlertText");
  icebergText.innerHTML = `Une femme dans l'ombre :<br> <strong>${womanName.womanfullName}</strong>`;
  // J'alimente dans le HTML de cet id du texte (ici un titre)
  const icebergIcon = content.appendChild(document.createElement("img"));
  icebergIcon.setAttribute("id", "icebergAlertIcon");
  icebergIcon.src = chrome.runtime.getURL("images/iceberg.png");
  // c'est une sorte de méthode qui simule une URL pour l'extension chrome, afin d'atteindre un dossier de notre stockage local (ici le dossier "images" qui est sur ma machine)
  const icebergBio = document.body.appendChild(
    document.createElement("section")
  );
  icebergBio.classList.add("icebergBio");
  const bioContent = document.querySelector(".icebergBio");
  const bioTitle = bioContent.appendChild(document.createElement("h3"));
  bioTitle.setAttribute("id", "bioTitle");
  bioTitle.innerHTML = womanName.womanfullName;
  const bioText = bioContent.appendChild(document.createElement("p"));
  bioText.setAttribute("id", "bioText");
  bioText.innerHTML = womanName.description;
  const bioImage = bioContent.appendChild(document.createElement("img"));
  bioImage.setAttribute("id", "bioImage");
  bioImage.src = chrome.runtime.getURL(`${womanName.urlImage}`);
  const bioLink = bioContent.appendChild(document.createElement("a"));
  bioLink.setAttribute("id", "bioLink");
  bioLink.href = womanName.urlLink;
  bioLink.target = "_blank";
  bioLink.innerHTML = "En savoir plus &#10095;";
};

for (let i = 0; i < correspondance.length; i++) {
  if (
    analyse.includes(correspondance[i].manFullName) &&
    (analyse.includes(correspondance[i].tags[0]) ||
      analyse.includes(correspondance[i].tags[1]) ||
      analyse.includes(correspondance[i].tags[2]) ||
      analyse.includes(correspondance[i].tags[3]) ||
      analyse.includes(correspondance[i].tags[4]))
    // analyse.includes(correspondance[i].)
  ) {
    // surligne();
    showLogo(correspondance[i]);
    break;
  }
}

icebergImage = document.getElementById("icebergAlertIcon");
icebergText = document.querySelector(".icebergAlertText");
icebergBio = document.querySelector(".icebergBio");

icebergImage.addEventListener("click", () => {
  icebergText.classList.toggle("removeAlert");
  icebergBio.classList.toggle("bioAppear");
});
