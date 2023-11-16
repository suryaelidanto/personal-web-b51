// AJAX
// definisinya : sebuah teknik dalam javascript untuk berinteraksi dengan request yang asynchronous -> ketika mengambil data di internet

// Syntax : 
const xhttp = new XMLHttpRequest()

xhttp.open('GET', 'https://urlkamu', true)
// param 1 : method
// param 2 : url -> tujuannya
// param 3 : true or false, true -> asynchronous, berjalan di layar secara paralel, false -> synchronous, blocking jika proses belum selesai

xhttp.onload = () => {
    if (xhttp.status === 200) {
        console.log(xhttp.response)
    } else {
        console.log("Server mereka lagi error!")
    }
}

xhttp.onerror = () => { // error di kitanya, misal : kita mau ngambil data ke internet, misal ke facebook.com -> kita fetching / get data ke mereka, tapi internet kita mati di tengah jalan
    console.log("Network error")
} 