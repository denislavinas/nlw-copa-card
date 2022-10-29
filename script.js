let isIgnite = true

function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`

  // Comando para repetir a animação
  card.classList.remove("animation")
  void card.offsetWidth
  card.classList.add("animation")
}
