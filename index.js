function cambioTamano() {
  body = document.getElementById('body')
  body.style.height = `${window.innerHeight}px`
}

function agrandar() {
  document.getElementsByClassName('subc')[0].style.display = "flex"
  document.getElementsByClassName('subc')[1].style.display = "flex"
  document.getElementsByClassName('subc')[2].style.display = "flex"
  document.getElementById('desplazar').textContent = "△Secciones△"
  document.getElementById('desplazar').onclick = achicar
}

function achicar() {
  document.getElementsByClassName('subc')[0].style.display = "none"
  document.getElementsByClassName('subc')[1].style.display = "none"
  document.getElementsByClassName('subc')[2].style.display = "none"
  document.getElementById('desplazar').textContent = "▽Secciones▽"
  document.getElementById('desplazar').onclick = agrandar
  document.getElementById('contenido').style.display = 'block'
}

function f1() { 
  var iframe = document.getElementById('doc')
  iframe.style.display = 'block'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f2() {
  var iframe = document.getElementById('mt')
  iframe.style.display = 'block'
  document.getElementById('doc').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f3() {
  var iframe = document.getElementById('scrum')
  iframe.style.display = 'block'
  document.getElementById('doc').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f4() {
  var iframe = document.getElementById('ae')
  iframe.style.display = 'block'
  document.getElementById('doc').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('aoo').style.display = 'none'
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f5() {
  var iframe = document.getElementById('aoo')
  iframe.style.display = 'block'
  document.getElementById('doc').style.display = 'none'
  document.getElementById('scrum').style.display = 'none'
  document.getElementById('mt').style.display = 'none'
  document.getElementById('ae').style.display = 'none'
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

cambioTamano();
window.onresize = cambioTamano;

