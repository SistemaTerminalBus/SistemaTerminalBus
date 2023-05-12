function cambioTamano() {
  body = document.getElementById('body')
  body.style.height = `${document.documentElement.scrollHeight}px`
}

function f1() {
  document.getElementById('doc').style.display = 'block'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
}

function f2() {
  document.getElementById('doc').style.display = 'none'
  document.getElementById('mt').style.display = 'block'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
}

function f3() {
  document.getElementById('doc').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('ae').style.display = 'block'
  document.getElementById('aoo').style.display = 'none'
}

function f4() {
  document.getElementById('doc').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'block'
}

cambioTamano();
window.onresize = cambioTamano;

