const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
  
createBtn.addEventListener('click', () => {
    countBoxes(input.value);
    input.value = '';
});

const countBoxes = (amount) => {
    const boxes = [];
    let width = 30;
      for (let i = 0; i < amount; i += 1) {
      let height = width;
      const div = document.createElement('div');
      div.style.width = `${width}px`;
      div.style.height = `${height}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxes.push(div);
      width += 10;
    }
    boxesDiv.append(...boxes);
};

const destroyBoxes = () => {
    boxesDiv.innerHTML = '';
};

destroyBtn.addEventListener('click', destroyBoxes);

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};



