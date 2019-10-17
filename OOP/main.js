//MEMBUAT OBJEK
// key => value
var programer = {
    nama : "dzx",
    umur : 22,
    sifat : "simple"
};

let disain = new Object();
disain.nama = "aka";
disain.umur = 12;

document.getElementById('nama').innerHTML = programer.nama;
document.getElementById('umur').innerHTML = disain["umur"];
document.getElementById('sifat').innerHTML = programer.sifat;
