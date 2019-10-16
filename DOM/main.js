//SELECTOR
document.getElementById('box1').innerHTML = "DOM";

let box = document.getElementsByClassName('boxes');
box[0].innerHTML = "coba lagi";
box[1].innerHTML = "coba trus";
box[2].innerHTML = "coba coba sisan";

let list = document.getElementsByTagName('li');
list[0].innerHTML = "konten";
list[1].innerHTML = "value";
list[2].innerHTML = "isi";

//EDIT HTML
var el = document.createElement('h2');
let text = document.createTextNode("Belajar Programing");
var boxx = document.getElementById("box2");

el.appendChild(text); //menyambungkan
boxx.appendChild(el); //menampilkan

boxx.removeChild(el); //menghapus

//mengedit
var el1 = document.createElement('h3');
let text1 = document.createTextNode("Belajar Edit");
el1.appendChild(text1);
let p2 = document.getElementById("p1");

boxx.replaceChild(el1, p1);

let img = document.getElementById('gambar');
img.width = 400;

let input = document.getElementById('input');
input.value = "nama lengkap";

//menambahkan atribut
//img.setAttribute('class', 'merah');
img.className += ' merah';

//CSS
input.style.border = '3px solid blue';
input.style.backgroundColor = 'grey';

//EVENT
function ubah(){
    img.style.border = '3px solid blue';
}

input.onclick = function(){ ubah2() };//tambah atribut & fungsi
function ubah2(){
    input.style.backgroundColor = 'white';
}

input.addEventListener('mouseenter', function(){
    input.style.backgroundColor = 'aqua';    
});

input.addEventListener('mouseleave', function(){
    input.style.backgroundColor = 'blue';    
});

let submit = document.getElementById('submit');
let span = document.getElementById('p1');

submit.onclick = function(){
    let text = input.value;
    span.innerHTML = text;
}
