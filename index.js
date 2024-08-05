// elemen dengan kelas name ".cer2, .li-nuontainer, .containm, .num, .Submit-btn" 
// akan menyimpn kelas kariabedalam vel 'container, container2, rating, number, SubmitBtn '
const container = document.querySelector(".container"); 
const container2 = document.querySelector(".container2");
const rating = document.querySelectorAll(".li-num");
const number = document.querySelector(".num");
const SubmitBtn = document.querySelector(".Submit-btn");

// ketika variable submitbtn diklik maka 2 hal akan terjadiii
SubmitBtn.addEventListener("click", function () {
    // Dengan menambahkan kelas hidden ke elemen container, elemen ini disembunyikan dari tampilan.
    container.classList.add("hidden"); 
    // Dengan menghapus kelas hidden dari elemen container2, elemen ini ditampilkan kembali di layar jika sebelumnya tersembunyi.
    container2.classList.remove("hidden");
});

// looping ini digunakan untuk menampilkan number pada class num
for (let i = 0; i < rating.length; i++){
    rating[i].addEventListener("click", function () {
        // koding ini berguna untuk memperbarui teks di dalam elemen number untuk memperlihatkan nilai dari elemen rating[i] yang diklik
        number.textContent = rating[i].innerHTML;
    });
}