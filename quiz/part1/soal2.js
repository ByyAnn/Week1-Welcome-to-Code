let tanggal = 9; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan = 11; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun = 2022; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

//code switch case kamu disini
switch (bulan) {
    case 1:
    namaBulan = "Januari";
    break; 
    case 2:
    namaBulan = "Februari";
    break;
    case 3:
    namaBulan = "Maret";
    break;
    case 4:
    namaBulan = "April";
    break;
    case 5:
    namaBulan = "Mei";
    break;
    case 6:
    namaBulan = "Juni";
    break;
    case 7:
    namaBulan = "Juli";
    break;
    case 8:
    namaBulan = "Agustus";
    break;
    case 9:
    namaBulan = "September";
    break;
    case 10:
    namaBulan = "Oktober";
    break;
    case 11:
    namaBulan = "November";
    break;
    case 12:
    namaBulan = "Desember";
    break;
    default:
    namaBulan = "nama bulan tidak valid!";
    break;
}

console.log (`${tanggal} ${namaBulan} ${tahun}`);