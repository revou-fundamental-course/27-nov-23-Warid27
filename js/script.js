// LUAS SEGITIGA
function luas() {
  // Mendapatkan nilai dari kedua input
  var angkaAlas = document.getElementById("input-alas").value;
  var angkaTinggi = document.getElementById("input-tinggi").value;

  // Menyimpan elemen hasil untuk nantinya diubah
  var hasilParagraphLuas = document.getElementById("hasilParagraphLuas");
  var hasilInput = document.getElementById("hasilLuas");

  // Periksa apakah inputAlas dan inputTinggi kosong
  if (angkaAlas === "" && angkaTinggi === "") {
    alert("Mohon masukkan angka");
    return;
  }

  // Periksa apakah inputAlas kosong
  if (angkaAlas === "") {
    alert("Mohon Masukkan Alas");
    return;
  }

  // Periksa apakah inputTinggi kosong
  if (angkaTinggi === "") {
    alert("Mohon Masukkan Tinggi");
    return;
  }

  // Mengalikan kedua nilai dan membaginya dengan 2
  var hasilLuas = (parseFloat(angkaAlas) * parseFloat(angkaTinggi)) / 2;

  // Periksa apakah hasilLuas adalah angka
  if (isNaN(hasilLuas)) {
    hasilParagraphLuas.style.display = "none";
    alert("Mohon masukkan angka");
  } else {
    // Menampilkan label dan hasil
    hasilParagraphLuas.style.display = "block";
    document.querySelector(".label-hasil").style.display = "block";

    // Mengisi nilai input dan menonaktifkannya
    hasilInput.value = hasilLuas;
    hasilInput.disabled = true;
  }
}

function resetLuas() {
  // Mengosongkan nilai kedua input
  document.getElementById("input-alas").value = "";
  document.getElementById("input-tinggi").value = "";

  // Menyembunyikan hasil dan pesan kesalahan
  var hasilParagraphLuas = document.getElementById("hasilParagraphLuas");
  var hasilInput = document.getElementById("hasilLuas");
  hasilInput.value = "";
  hasilInput.disabled = false;
  hasilParagraphLuas.style.display = "none";
}


// KELILING SEGITIGA
function keliling() {
  // Mendapatkan nilai dari kedua input
  var angkaS1 = document.getElementById("input-S1").value;
  var angkaS2 = document.getElementById("input-S2").value;
  var angkaS3 = document.getElementById("input-S3").value;

  // Menyimpan elemen hasil untuk nantinya diubah
  var hasilParagraphKeliling = document.getElementById("hasilParagraphKeliling");
  var hasilInputKeliling = document.getElementById("hasilKeliling");

  // Periksa apakah inputAlas dan inputTinggi kosong
  if (angkaS1 === "" && angkaS2 === "" && angkaS3 === "") {
    alert("Mohon masukkan angka");
    return;
  }

  // Periksa apakah inputS1 dan input S2 kosong
  if (angkaS1 === "" && angkaS2 === "") {
    alert("Mohon Masukkan S1 dan S2");
    return;
  }

  // Periksa apakah inputS1 dan input S3 kosong
  if (angkaS1 === "" && angkaS3 === "") {
    alert("Mohon Masukkan S1 dan S3");
    return;
  }

  // Periksa apakah inputS2 dan input S3 kosong
  if (angkaS2 === "" && angkaS3 === "") {
    alert("Mohon Masukkan S2 dan S3");
    return;
  }

  // Periksa apakah inputS1 kosong
  if (angkaS1 === "") {
    alert("Mohon Masukkan S1");
    return;
  }

  // Periksa apakah inputS2 kosong
  if (angkaS2 === "") {
    alert("Mohon Masukkan S2");
    return;
  }

  // Periksa apakah inputS3 kosong
  if (angkaS3 === "") {
    alert("Mohon Masukkan S3");
    return;
  }

  // Mengalikan kedua nilai dan membaginya dengan 2
  var hasilKeliling = parseFloat(angkaS1) + parseFloat(angkaS2) + parseFloat(angkaS3);

  // Periksa apakah hasilKeliling adalah angka
  if (isNaN(hasilKeliling)) {
    hasilParagraphKeliling.style.display = "none";
    alert("Mohon masukkan angka");
  } else {
    // Menampilkan label dan hasil
    hasilParagraphKeliling.style.display = "block";
    document.querySelector(".label-hasil").style.display = "block";

    // Mengisi nilai input dan menonaktifkannya
    hasilInputKeliling.value = hasilKeliling;
    hasilInputKeliling.disabled = true;
  }
}

function resetKeliling() {
  // Mengosongkan nilai kedua input
  document.getElementById("input-S1").value = "";
  document.getElementById("input-S2").value = "";
  document.getElementById("input-S3").value = "";

  // Menyembunyikan hasil dan pesan kesalahan
  var hasilParagraphKeliling = document.getElementById("hasilParagraphKeliling");
  var hasilInputKeliling = document.getElementById("hasilKeliling");
  hasilInputKeliling.value = "";
  hasilInputKeliling.disabled = false;
  hasilParagraphKeliling.style.display = "none";
}

