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
  var iframe = document.getElementById('if')
  iframe.style.display = 'block'
  iframe.contentWindow.location.href = 'Tema/doc.html';
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f2() {
  var iframe = document.getElementById('if')
  iframe.style.display = 'block'
  iframe.contentWindow.location.href = 'Tema/mt.html';
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f3() {
  var iframe = document.getElementById('if')
  iframe.style.display = 'block'
  iframe.contentWindow.location.href = 'Tema/scrum.html';
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f4() {
  var iframe = document.getElementById('if')
  iframe.style.display = 'block'
  iframe.contentWindow.location.href = 'Tema/ae.html';
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

function f5() {
  var iframe = document.getElementById('if')
  iframe.style.display = 'block'
  iframe.contentWindow.location.href = 'Tema/aoo.html';
  var divElement = (iframe.contentDocument || iframe.contentWindow.document).getElementById('ini');
  if (divElement) {
    divElement.scrollIntoView();
  }
  achicar()
}

cambioTamano();
window.onresize = cambioTamano;

