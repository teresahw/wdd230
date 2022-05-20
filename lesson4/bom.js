const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'X';
  list.appendChild(listItem);

  function checkforblank() {
      if (document.getElementById('favchap').value == "") {
          return false;
      }
  }

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});