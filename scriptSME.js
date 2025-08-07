window.onload = function showAlert() {
  document.getElementById("alertMessage").innerText = "𝗦𝗲𝗷𝗮 𝗕𝗲𝗺-𝘃𝗶𝗻𝗱𝗼 𝗮𝗼 𝗽𝗼𝗿𝘁𝗮𝗹 𝗱𝗲 𝗚𝘂𝗮𝗿𝗮𝘁𝘂𝗯𝗮. ⚠️ Atenção: Esse site está propenso a mudanças";
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