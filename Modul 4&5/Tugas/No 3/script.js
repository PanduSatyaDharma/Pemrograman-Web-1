document.getElementById("btnSimpan").addEventListener("click", function () {
  const nomorIdentitas = document.getElementById("nomorIdentitas").value.trim();
  const namaPemesan = document.getElementById("namaPemesan").value.trim();
  const jenisKelamin = document.getElementById("jenisKelamin").value;
  const tipeKamar = document.getElementById("tipeKamar").value;
  const tanggalPesan = document.getElementById("tanggalPesan").value;
  const durasiMenginap = parseInt(
    document.getElementById("durasiMenginap").value
  );
  const breakfastIncluded =
    document.getElementById("breakfastIncluded").checked;

  const errorNomorIdentitas = document.getElementById("errorNomorIdentitas");

  // Validasi Nomor Identitas
  if (nomorIdentitas.length !== 16) {
    errorNomorIdentitas.innerText = "Isian salah, harus 16 digit";
    return;
  } else {
    errorNomorIdentitas.innerText = "";
  }

  // Validasi Tipe Kamar dan Durasi Menginap
  if (!tipeKamar) {
    alert("Silakan pilih tipe kamar!");
    return;
  }
  if (!durasiMenginap || durasiMenginap <= 0) {
    alert("Durasi menginap harus lebih dari 0!");
    return;
  }

  let hargaKamar = 0;
  if (tipeKamar === "standar") hargaKamar = 600000;
  if (tipeKamar === "deluxe") hargaKamar = 750000;
  if (tipeKamar === "family") hargaKamar = 1000000;

  // Hitung Total Bayar
  let totalBayar = hargaKamar * durasiMenginap;
  if (durasiMenginap > 3) {
    totalBayar *= 0.1; // Diskon 10%
  }
  if (breakfastIncluded) {
    totalBayar += 80000; // Tambahan biaya breakfast
  }

  // Tampilkan Total Bayar
  document.getElementById(
    "totalBayar"
  ).value = `Rp ${totalBayar.toLocaleString()}`;

  // Isi Resume
  const resumeContent = `
        <p><strong>Nama Pemesan:</strong> ${namaPemesan}</p>
        <p><strong>Nomor Identitas:</strong> ${nomorIdentitas}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Tipe Kamar:</strong> ${tipeKamar}</p>
        <p><strong>Tanggal Pesan:</strong> ${tanggalPesan}</p>
        <p><strong>Durasi Menginap:</strong> ${durasiMenginap} hari</p>
        <p><strong>Termasuk Breakfast:</strong> ${
          breakfastIncluded ? "Ya" : "Tidak"
        }</p>
        <p><strong>Total Bayar:</strong> Rp ${totalBayar.toLocaleString()}</p>
    `;

  document.getElementById("resumeContent").innerHTML = resumeContent;

  // Tampilkan Resume
  document.getElementById("resumeContainer").style.display = "block";
});
