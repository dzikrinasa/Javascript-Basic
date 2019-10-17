//MEMBUAT OBJEK
// key => value
var programer = {
    nama : "dzx",
    umur : 22,
    sifat : "simple",
    //membuat metode 
    getData : function(){
        return "Nama : " + this.nama + " Umur : " + this.umur;
    },
    setData : function(nama){
        this.nama = nama;
    }
};

let disain = new Object();
disain.nama = "aka";
disain.umur = 12;

document.getElementById('nama').innerHTML = programer.nama;
document.getElementById('umur').innerHTML = disain["umur"];
document.getElementById('sifat').innerHTML = programer.sifat;

programer.setData('dzz');
document.getElementById('box').innerHTML = programer.getData();

//Objek Prototype
function pemain( nama, umur){
    this.nama = nama;
    this.umur = umur;
}

//menambahkan property diluar fungsi
pemain.prototype.negara = "indo";

var aku = new pemain("Aku prototyep", 33);
var ika = new pemain("Ika prototyep", 33);
document.getElementById('pro').innerHTML = aku.nama;
document.getElementById('pro').innerHTML += ika.negara;

//mutable
let kuli = programer;
kuli.nama = " messi";

document.getElementById('pro').innerHTML += kuli.nama;