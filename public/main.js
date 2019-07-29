const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

document.addEventListener('DOMContentLoaded', main)
// eslint-disable-next-line space-before-function-paren
document.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keycode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keycode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
})
