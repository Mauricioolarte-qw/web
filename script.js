const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segurx?',
  'Piensalo bien',
  '¿Estás lista, baby?',
'Piénsalo bien, corazón.',
'Mira bien, amor.',
'Piénsalo otra vez, vida.',
'El otro botón, cariño.',
'¿Estás segura, amor?',
'Compromiso real, vida.',
'Una vez dentro, amor.',
'Pacto entre nosotros, corazón.',
'Sonrisas permanentes, amor.',
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})