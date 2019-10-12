var uang = 2500;
var duit = 500;
var barang = 1000;

if(uang >= barang && duit >= barang){
    document.writeln("<br> if berhasil");
}else if(uang+barang >= barang){
    document.writeln("<br> berhasil");
}else{
    document.writeln("<br> else gagal");
}

//nested if
var kuli = 20000;
var supir= 50000;
var harga= 52000;

if (kuli < harga) {
    if(kuli + supir > harga){
        document.writeln(" berangkat <br>");
    }
}