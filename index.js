
//deklarasi variable
//string
var x = "Javascript ";

//metode string
//var.length Menghitung panjang karakter
//var.indexOf()/search() mencari urutan karakter dan charAt() kebalikanya
var ganti = x.replace("script","Script");
//var.toUpperCase menjadi Kapital
var ganti = x.substr(4,10); //substr(start,lenth) membatasi karakter dan subsring(start,end)
//parseInt/parseFloat membuat string ke integer
var y = "1020";
var y = parseInt(y);

//angka
var angka = 100;
var angka = angka+angka*angka;
var dec = 2.3423423;

//metode number
//toFixed(n)
var fix = dec.toFixed(2);
//toString
var str = dec.toString();
//random()
var acak = Math.random().toFixed(1);
var acak = Math.floor(Math.random() * 10) + 5;
//Math.min/max(n,n,n) mencari nilai terkecil
//Math.round() membulatkan angka ceil keatas floor

//metode innerHTML
document.getElementById("wrap").innerHTML = "Basic "+x+angka+y+fix+str+acak+ganti;