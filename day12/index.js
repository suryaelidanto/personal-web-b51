const express = require('express')
const path = require('path')
const app = express()
const port = 5000

// app.set = buat setting varible global, configuratoin, dll
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'src/views'))

app.use("/assets", express.static(path.join(__dirname, 'src/assets')))
app.use(express.urlencoded({ extended: false })) // body parser, extended : false -> querystring, extended : true -> menggunakan querystring third party -> qs

app.get('/', home)
app.get('/contact', contact)
app.get('/blog', blog)
app.post('/delete-blog/:id', deleteBlog)

app.get('/add-blog', addBlogView)
app.post('/add-blog', addBlog)

app.get('/update-blog/:id', updateBlogView)
app.post('/update-blog', updateBlog)

app.get('/blog-detail/:id', blogDetail)
app.get('/testimonial', testimonial)

const data = []

function home(req, res) {
    res.render('index')
}

function contact(req, res) {
    res.render('contact')
}

function blog(req, res) {
    res.render('blog', { data })
}

function addBlogView(req, res) {
    res.render('add-blog')
}

function addBlog(req, res) {
    const { title, content } = req.body

    console.log("Title :", title)
    console.log("Content :", content)

    const dataBlog = { title, content }

    data.unshift(dataBlog)
    res.redirect('/blog')
}

function updateBlogView(req, res) {
    const { id } = req.params

    const dataFilter = data[parseInt(id)]
    dataFilter.id = parseInt(id)
    console.log("dataFilter", dataFilter)
    res.render('update-blog', { data: dataFilter })
}

function updateBlog(req, res) {
    const { title, content, id } = req.body

    console.log("Id :", id)
    console.log("Title :", title)
    console.log("Content :", content)

    data[parseInt(id)] = {
        title, 
        content,
    }
    
    res.redirect('/blog')
}


function deleteBlog(req, res) {
    const { id } = req.params

    data.splice(id, 1)
    res.redirect('/blog')
}

function blogDetail(req, res) {
    const { id } = req.params // destructuring

    const title = "Title 1"
    const content = "Content 1"

    const data = {
        id,
        title,
        content
    }

    res.render('blog-detail', { data })
}

function testimonial(req, res) {
    res.render('testimonial')
}

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
})