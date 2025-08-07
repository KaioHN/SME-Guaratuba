window.onload = function showAlert() {
  document.getElementById("alertMessage").innerText = "Seja Bem-vindo ao portal de Guaratuba. ⚠️ Atenção: Esse site está propenso a mudanças";
  document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
 } //Fim da função para Alertbox


window.addEventListener('scroll', function () {
  const header = document.querySelector('.header-image');
  if (window.scrollY > 50) {
    header.classList.add('header-shrink');
  } else {
    header.classList.remove('header-shrink');
  }
}); //Ativa a alteração de tamanho do Header com o scroll do mouse 