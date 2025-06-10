// DATA DO AMOR 💖
const dataEspecial = new Date("2024-12-01T13:00:00");
const contador = document.getElementById("contador");

function plural(n, singular, plural) {
  return `${n} ${n === 1 ? singular : plural}`;
}

function atualizarContador() {
  const agora = new Date();
  let diff = agora - dataEspecial;

  const segundosTotal = Math.floor(diff / 1000);
  const segundos = segundosTotal % 60;
  const minutosTotal = Math.floor(segundosTotal / 60);
  const minutos = minutosTotal % 60;
  const horasTotal = Math.floor(minutosTotal / 60);
  const horas = horasTotal % 24;

  let meses = (agora.getFullYear() - dataEspecial.getFullYear()) * 12 + (agora.getMonth() - dataEspecial.getMonth());
  let dias = agora.getDate() - dataEspecial.getDate();

  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoMes;
  }

  const texto = `Estamos juntos desde aquele dia mágico... 💖\n\n` +
    `${plural(meses, "mês", "meses")}, ${plural(dias, "dia", "dias")}, ` +
    `${plural(horas, "hora", "horas")}, ${plural(minutos, "minuto", "minutos")} e ` +
    `${plural(segundos, "segundo", "segundos")} de amor sem fim 💕`;

  contador.innerText = texto;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// SLIDESHOW
let slideIndex = 0;

function mostrarSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
}

setInterval(mostrarSlides, 3000);
mostrarSlides();

// EMOJIS SUBINDO 💕
const emojis = ["💖", "💘", "💕", "💑", "💓", "💗", "❤️"];
const emojiContainer = document.getElementById("emoji-container");

function criarEmoji() {
  const emoji = document.createElement("span");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.bottom = "0";
  emoji.style.fontSize = Math.random() * 24 + 24 + "px";
  emoji.style.animationDuration = Math.random() * 3 + 3 + "s";
  emojiContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(criarEmoji, 500);

// CORAÇÕES DE FUNDO ANIMADOS
const heartBg = document.getElementById("heart-bg");

function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 5 + 5) + "s";
  heart.style.fontSize = Math.random() * 16 + 16 + "px";
  heartBg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(criarCoracao, 500);
