const janji = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hujan = false
        
        if(hujan) {
            reject("Gak jadi main bola 😢")
        } else {
            resolve("Jadi main bola skuy 😍")
        }        
    }, 1000)
})

// console.log(janji)
// janji.then(value => {
//     console.log(value)
// }).catch(error => {
//     console.log(error)
// })

async function jalankanJanji() {
    const response = await janji
    console.log(response)    
}

jalankanJanji()
