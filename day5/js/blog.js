// LOOPING : FOR, WHILE, DO-WHILE

// FOR -> perulangan yang kamu sudah tau kapan harus berhenti
// for(let index = 0; index < 10; index++) { 
//     console.log("ini adalah index", index)
// }

// WHILE -> perulangan yang belum tentu kamu tau kapan harus berhenti (berdasarkan data dinamis)

// DO WHILE -> perulangan yang jalan dulu sekali, baru dicek


function getFullTime(tanggal) {
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const date = tanggal.getDate()
    const month = tanggal.getMonth()
    const year = tanggal.getFullYear()
    let hours = tanggal.getHours()
    let minutes = tanggal.getMinutes()

    if (hours <= 9) {
        hours = "0" + hours
    }

    if (minutes <= 9) {
        minutes = "0" + minutes
    }

    return `${date} ${monthList[month]} ${year} ${hours}:${minutes}`
}

function getDistanceTime(time) {
    const timeNow = new Date().getTime() // jam sekarang miliseconds
    const timePosted = time 

    const distance = timeNow - timePosted // miliseconds

    // Math :
    // floor -> dibulatkan ke bawah, ex : 8.6 -> 8
    // round -> dibulatkan angka terdekat, ex : 8.3 -> 8
    // ceil -> dibulatkan ke atas, ex : 8.3 -> 9

    const distanceSeconds = Math.floor(distance / 1000)
    const distanceMinutes = Math.floor(distance / 1000 / 60)
    const distanceHours = Math.floor(distance / 1000 / 60 / 60)
    const distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24)

    console.log("distanceSeconds", distanceSeconds)
    console.log("distanceMinutes", distanceMinutes)
    console.log("distanceHours", distanceHours)
    console.log("distanceDay", distanceDay)

    if (distanceDay > 0) {
        return `${distanceDay} day ago`
    } else if (distanceHours > 0) {
        return `${distanceHours} hours ago`
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} minutes ago`
    } else {
        return `${distanceSeconds} seconds ago `
    }
}

const dataBlog = []

function submitBlog(event) {
    event.preventDefault()

    let inputTitle = document.getElementById("inputTitle").value
    let inputContent = document.getElementById("inputContent").value
    let inputImage = document.getElementById("inputImage").files

    console.log("title", inputTitle)
    console.log("content", inputContent)

    inputImage = URL.createObjectURL(inputImage[0])
    console.log("image", inputImage)

    const blog = {
        title: inputTitle,
        content: inputContent,
        image: inputImage,
        postAt: new Date(),
        author: "Surya Elidanto",
        nodeJs: true,
        reactJs: true,
        nextJs: false,
        typescript: false,
    }

    dataBlog.push(blog)
    console.log("dataBlog", dataBlog)
    renderBlog()
}

// function showMeHelloWorld() {
//     const container = document.getElementById("contents")
//     container.innerHTML = '<p>Hello World</p>'
// }

// dataBlog = [
//  {
//     title: "title 1",
//     content: "content 1"
//  },
//  {
//     title: "title 1",
//     content: "content 1"
//  },
//  {
//     title: "title 2",
//     content: "content 2"
//  },
//  {
//     title: "title 1",
//     content: "content 1"
//  },
//  {
//     title: "title 2",
//     content: "content 2"
//  },
//  {
//     title: "title 3",
//     content: "content 3"
//  },
// ]

function renderBlog() {
    document.getElementById("contents").innerHTML = ''
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank">${dataBlog[index].title}</a>
                </h1>
                <div class="detail-blog-content">
                    ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
                </div>
                ${dataBlog[index].nodeJs ? "nodeJs" : ""}
                ${dataBlog[index].reactJs ? "reactJs" : ""}
                ${dataBlog[index].nextJs ? "nextJs" : ""}
                ${dataBlog[index].typescript ? "typescript" : ""}            
                <p>
                   ${dataBlog[index].content}
                </p>
                <p>
                    ${getDistanceTime(dataBlog[index].postAt)}
                </p>
            </div>
        </div>`
    }
}


setInterval(function() {
    renderBlog()
}, 1000)