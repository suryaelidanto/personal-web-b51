// LOOPING : FOR, WHILE, DO-WHILE

// FOR -> perulangan yang kamu sudah tau kapan harus berhenti
// for(let index = 0; index < 10; index++) { 
//     console.log("ini adalah index", index)
// }

// WHILE -> perulangan yang belum tentu kamu tau kapan harus berhenti (berdasarkan data dinamis)

// DO WHILE -> perulangan yang jalan dulu sekali, baru dicek

let dataBlog = []

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
        postAt: "09 November 2023",
        author: "Surya Elidanto"
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
                    ${dataBlog[index].postAt} | ${dataBlog[index].author}
                </div>
                <p>
                   ${dataBlog[index].content}
                </p>
            </div>
        </div>`
    }
}