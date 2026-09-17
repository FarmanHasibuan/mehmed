```javascript
// ========================================
// COPY NOMOR REKENING
// ========================================

function copyRekening() {

    const rekening = "1234567890";

    navigator.clipboard.writeText(rekening)
        .then(function () {

            alert("Nomor rekening berhasil disalin!");

        })
        .catch(function () {

            alert("Gagal menyalin nomor rekening.");

        });

}


// ========================================
// EFEK SCROLL
// ========================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".mynavbar");

    if (window.scrollY > 100) {

        navbar.classList.add("shadow-sm");

    } else {

        navbar.classList.remove("shadow-sm");

    }

});
```
