function filterVersions() {
    // Arama kutusunu ve tabloyu al
    const input = document.getElementById('versionSearch');
    const filter = input.value.toUpperCase();
    const table = document.getElementById('downloadTable');
    const tr = table.getElementsByTagName('tr');

    // Tablodaki her bir satırda (başlık hariç) döngüye gir
    for (let i = 1; i < tr.length; i++) {
        // Satırdaki ilk hücreyi (Mod Sürümü) al
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let txtValue = td.textContent || td.innerText;
            // Arama metni hücrede bulunuyorsa satırı göster, bulunmuyorsa gizle
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
