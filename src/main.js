import x from './s.js'

const demo = document.querySelector('.demo')
const demo1 = document.querySelector('.demo1')
const speed = document.querySelector('.speed')
let n = 0
let id = -1
let playtime = 50
let s = x.split('\n')
const pause = () => {
  window.clearInterval(id)
  id = -1
}
const play = () => {
  if (id !== -1) return

  if (n > s.length) {
    n = 0
    demo.innerHTML = ''
    demo1.innerHTML = ''
  }
  id = setInterval(() => {
    n += 1
    if (n > s.length) {
      pause()
      return
    }
    demo.insertAdjacentHTML('beforeEnd', s.slice(n - 1, n))
    demo1.insertAdjacentHTML('beforeEnd', s.slice(n - 1, n) + '</br>')
    demo1.scrollTop = demo1.scrollHeight
  }, playtime)
}

const setSpeed = (time, describe) => {
  pause()
  playtime = time
  play()
  speed.textContent = describe
}
document.querySelector('.btnPause').onclick = pause
document.querySelector('.btnContinue').onclick = play
document.querySelector('.btnSlow').onclick = () => {
  setSpeed(300, '当前速度：慢速')
}
document.querySelector('.btnMedium').onclick = () => {
  setSpeed(150, '当前速度：中速')
}
document.querySelector('.btnFast').onclick = () => {
  setSpeed(50, '当前速度：快速')
}
