function addFruit(fruitName, fruitColor)    {

    let fruitsContainer = document.getElementById('container');
    let newFruit = document.createElement('div');
    let name = document.createTextNode(fruitName);

    newFruit.classList.add('fruitContainer');
    newFruit.style.backgroundColor = fruitColor;

    newFruit.appendChild(name);
    fruitsContainer.appendChild(newFruit);
}

addFruit('Banana', 	'rgba(255, 255, 0, 0.3)')
addFruit('Morango', 'rgba(255, 0, 0, 0.3)')
addFruit('Melancia', 'rgba(255, 0, 0, 0.3)')
addFruit('Cenoura', 'rgba(255, 165, 0, 0.3)')
addFruit('Nabo', 'rgba(211, 211, 211, 0.3)')
addFruit('Morango', 'rgba(255, 0, 0, 0.3)')
addFruit('Maçã', 'rgba(255, 0, 0, 0.3)')
addFruit('Maçã', 'rgba(255, 0, 0, 0.3)')
addFruit('Cenoura', 'rgba(255, 165, 0, 0.3)')
addFruit('Banana', 	'rgba(255, 255, 0, 0.3)')
addFruit('Melancia', 'rgba(255, 0, 0, 0.3)')
addFruit('Nabo', 'rgba(211, 211, 211, 0.3)')