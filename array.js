var kotak =["aku","doa","kamu"];
kotak[1]= "dia";

var tex = "namanya "+ kotak[1];
document.writeln(tex);

//metode array 
//sort, reverse, concat=menggabungkan, length, join=pemisah
var orang = ["adi","budi","esi"];
var orang2 = ["ada","buda","asi"];

//splice(mulai, dihapus?, isi)=menyisipkan/menghapus 
//pop=hapus akhir, push=tambah akhir, shift=hapus awal, unshift=tambah awal

orang.splice(2,1,"ani");
orang.push("eri");

var tottal = orang.concat(orang2);

document.writeln(tottal.join(" "));