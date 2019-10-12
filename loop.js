//for loop
//for(mulai; sampai/syarat; perpindahan)
for (let i=1; i<=5; i++){
    //alert(i);
    document.writeln("<br>"+i);
}

//while loop
//while(syarat){perintah; perpindahan/kondisi}
let j = 6
while (j < 11) {
    document.writeln("<br>"+j);
    j++;
}
let g = 0;
let text = "";
while (g<6) {
    text += " nomor "+g;
    g++;
}
document.getElementById('loop').innerHTML = text;

//do while
do {
    text += " nomor " + g;
    g++;
} while ( g < 9 );
document.getElementById('loop').innerHTML = text;
