const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('clicked')) {
      button.classList.remove('clicked');
    } else {
      button.classList.add('clicked');
    }
  });
});
