var withButtonClass = document.getElementsByClassName('button');

console.log(withButtonClass);

console.log(withButtonClass.length);

for (var n = 0; n < withButtonClass.length; n++) {
    console.log(withButtonClass[n].innerText);
}