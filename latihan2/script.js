function hitungLuas(a, b, tinggi) {
    return 0.5 * (a + b) * tinggi;
}

let luas1 = hitungLuas(10, 6, 4);
console.log("Luas trapesium dengan sisi atas 10, sisi bawah 6, dan tinggi 4 adalah: " + luas1);

let luas2 = hitungLuas(12, 8, 5);
console.log("Luas trapesium dengan sisi atas 12, sisi bawah 8, dan tinggi 5 adalah: " + luas2);

document.getElementById("hasil").innerHTML =
    "Luas trapesium dengan sisi atas 10, sisi bawah 6, dan tinggi 4 adalah: " + luas1 +
    "<br>Luas trapesium dengan sisi atas 12, sisi bawah 8, dan tinggi 5 adalah: " + luas2;