function cambioTamano() {
  body = document.getElementById('body')
  body.style.height = `${window.innerHeight}px`
}

function agrandar() {
  // menu = document.getElementById('menu')
  // menu.style.height = "auto"
  document.getElementsByClassName('subc')[0].style.display = "flex"
  document.getElementsByClassName('subc')[1].style.display = "flex"
  document.getElementsByClassName('subc')[2].style.display = "flex"
  document.getElementById('desplazar').textContent = "△Secciones△"
  document.getElementById('desplazar').onclick = achicar
}

function achicar() {
  // menu = document.getElementById('menu')
  // menu.style.height = "2%"
  document.getElementsByClassName('subc')[0].style.display = "none"
  document.getElementsByClassName('subc')[1].style.display = "none"
  document.getElementsByClassName('subc')[2].style.display = "none"
  document.getElementById('desplazar').textContent = "▽Secciones▽"
  document.getElementById('desplazar').onclick = agrandar
}

function f1() {
  document.getElementById('doc').style.display = 'block'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
  achicar()
}

function f2() {
  document.getElementById('doc').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('mt').style.display = 'block'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
  achicar()
}

function f3() {
  document.getElementById('doc').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('scrum').style.display = 'block'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
  achicar()
}

function f4() {
  document.getElementById('doc').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('ae').style.display = 'block'
  document.getElementById('aoo').style.display = 'none'
  achicar()
}

function f5() {
  document.getElementById('doc').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'block'
  achicar()
}

cambioTamano();
window.onresize = cambioTamano;

