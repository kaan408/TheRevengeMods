function filterContent() {
    // Arama kutusundaki değeri al
    const input = document.getElementById('versionSearch');
    const filter = input.value.toUpperCase();
    
    // ".searchable-table" sınıfına sahip tüm tabloları seç (Hem Modlar Hem Texture Packler)
    const tables = document.querySelectorAll('.searchable-table');

    // Her tablo için döngü başlat
    tables.forEach(table => {
        const tr = table.getElementsByTagName('tr');

        // Satırları kontrol et (Başlık hariç, i=1'den başlar)
        for (let i = 1; i < tr.length; i++) {
            // İlk hücre (Dosya Adı) ve İkinci hücre (Sürüm) içinde arama yap
            let tdName = tr[i].getElementsByTagName('td')[0];
            let tdVer = tr[i].getElementsByTagName('td')[1];
            
            if (tdName || tdVer) {
                let txtValueName = tdName.textContent || tdName.innerText;
                let txtValueVer = tdVer.textContent || tdVer.innerText;

                // Eğer aranan kelime İsimde VEYA Sürümde geçiyorsa göster
                if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueVer.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    });
}
