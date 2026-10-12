const perete = document.getElementById("perete");
const contor = document.getElementById("contor");
const cautare = document.getElementById("cautare");

function creeazaCard(persoana) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="emoji">${persoana.emoji}</div>
    <h2>${persoana.nume}</h2>
    <p class="rol">${persoana.rol}</p>
    <p class="hobby">${persoana.hobby}</p>
  `;
  return card;
}

function afiseaza(lista) {
  perete.innerHTML = "";
  lista.forEach((persoana) => perete.appendChild(creeazaCard(persoana)));
  contor.textContent = `Suntem ${lista.length - 1} oameni în echipă`;
}

cautare.addEventListener("input", () => {
  const text = cautare.value;
  const filtrati = echipa.filter(
    (p) => p.nume.includes(text) || p.rol.includes(text)
  );
  afiseaza(filtrati);
});

afiseaza(echipa);
