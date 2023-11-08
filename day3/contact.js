// TIPE DATA :
// string -> "Halo nama surya" OR 'Halon nama saya surya' OR `Halo nama saya surya`

// number
// integer -> 1234
// float -> 123.5

// array -> ["surya", 123, "halo"]
// object -> {
//     nama: "surya",
//     alamat: "depok"
// }

// array of object -> [{
//     nama: "surya",
//     alamat: "depok"
// }, 
// {
//     nama: "ahmad",
//     alamat: "bintaro"
// }
// ]

// LET, CONST, VAR

// bisa di dkelarasi ulang, functional scope
// var name = "Hello world"
// var name = "halo"
// console.log(name)


// tidak bisa di dkelarasi ulang, block scope, tidak bisa di inisialisasi ulang
// const name = "Hello world"
// name = "halo"
// console.log(name)

// tidak bisa di dkelarasi ulang, block scope
// let name = "Hello world"
// name = "halo"
// console.log(name)

// var name = "Novri"
// var age = 30
// console.log("Selamat datang di website saya " + name)
// console.log(`Selamat datang di website saya ${name}, umur saya adalah : ${age}`) // template string OR template literal OR string literal


// OPERATOR (+ - * / %)
// let angka1 = 105
// let angka2 = 50

// console.log(angka1 % angka2)

// CONDITION (IF ELSE | SWITCH CASE) |  CHALLENGE : bikin rentang dari nilai
// const nilai = 75
// if (nilai > 80) {
//     console.log("Nilai B")
// } else if (nilai < 20) {
//     console.log("Nilai Z")
// } else if (nilai < 50) {
//     console.log("Nilai X")
// } else {
//     console.log("Nilai tidak ada")
// }

// FUNCTION

// named function
// function Hello() {
//     const nama = "Arya Perdana"
//     console.log(nama)
// }

// arrow function
// let arrowFunction = () => {
//     console.log('hello')
// }

// arrowFunction();

// function Hello dengan parameter dinamisnya -> output : Hello, namanya
// let fullName = "Dira"
// let address = "Jakarta Selatan"
// function Hello(nama, alamat){
//     console.log(`Hallo nama saya ${nama} alamat saya di ${alamat}`)
// }

// Hello(fullName, address)

// function hello(name){
//     console.log(`hello ${name}`)
// }
// hello("dipa")

// challenge : anonymous function

function submitData() {
    const inputName = document.getElementById("inputName").value
    const inputEmail = document.getElementById("inputEmail").value
    const inputPhone = document.getElementById("inputPhone").value
    const inputSubject = document.getElementById("inputSubject").value
    const inputMessage = document.getElementById("inputMessage").value

    // kondisi (memunculkan sebuah alert "{field} harus diisi")
    if (inputName == "") {
        alert('Nama harus diisi')
    } else if (inputEmail == "") {
        alert('Email harus diisi')
    } else if (inputPhone == "") {
        alert('Phone number harus diisi')
    } else if (inputSubject == "") {
        alert('Subject harus diisi')
    } else if (inputMessage == "") {
        alert('Message harus diisi')
    } else {
        // harus tervalidasi dulu

        console.log(`Name : ${inputName}\nEmail: ${inputEmail}\nPhone: ${inputPhone}\nSubject: ${inputSubject}\nMessage: ${inputMessage}`)

        let a = document.createElement('a')
        a.href = `mailto:${inputEmail}?subject=${inputSubject}&body=${inputMessage}`
        a.click()
    }
}

// const buah = ["apel", "nanas", "mangga"]

// console.log(buah)

// const data = {
//     nama: inputName,
//     email: inputEmail,
//     phone: inputPhone,
//     subject: inputSubject,
//     message: inputMessage
// }

// console.log([data, data, data])

// 1 == "1" -> true
// 1 === "1" -> false