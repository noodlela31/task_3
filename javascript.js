//NO.1
let changeText = document.querySelector("#kalimat");
changeText.innerText = "Input Teks Baru";

//NO.2
let newElement = document.createElement('p');
newElement.innerHTML = "Ini Inputan Teks Baru";
changeText.appendChild(newElement);

//NO.3
let newParagraph = document.querySelector('.press');
document.body.appendChild(newParagraph);
let count = document.getElementById('increment');

count.addEventListener('click', function (event) {
    document.querySelector('#count').innerText++;
});