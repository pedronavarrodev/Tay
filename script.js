const audio = new Audio('./audio/niver.mp3')
const tela = document.querySelector('.container')

const luzes = document.querySelector('.luzes')
const bolo = document.querySelector('.imagem')

if (typeof audio.loop == 'boolean')
{
    audio.loop = true
}
else audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false)

luzes.addEventListener('click', function () {
    luzes.style.display = 'none'

    bolo.style.display = 'block'
    bolo.style.padding = '6% 0 0 2%'

    audio.play()
    audio.volume = 0.2
})
