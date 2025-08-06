window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-image');
    if (window.scrollY > 50) {
      header.classList.add('header-shrink');
    } else {
      header.classList.remove('header-shrink');
    }
  }); //Ativa a alteração de tamanho do Header com o scroll do mouse 