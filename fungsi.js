//deklarasi fungsi
function tampil(){
    var t ="ini fungsi";//local var
    t ="ini fungsi";//menjadi global tanpa deklarasi var
    document.getElementById("fungsi").innerHTML=t;
}
//memanggil fungsi
tampil();

//parameter
function tampilin(nama, angka, baru){
    var text = nama + angka + baru;
    document.writeln(text);
}
var nama = "parameter"
tampilin(nama , " 123" , " yang baru");

//return
function kembali(){
    a = "<br>mengembalikan";
    b = " nilai";
    return a+b;
}
document.writeln(kembali());

function tambah(angka,angka2){
    return angka+angka2;    
}
var nmr = tambah(10,20);
document.writeln(nmr);