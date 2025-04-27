const inputName = document.querySelector('#name-input');
inputName.addEventListener('input', addOutput);
function addOutput() {
  const output = document.querySelector('#name-output');
  output.textContent = inputName.value.trim() || 'Anonymous';
}
