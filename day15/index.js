const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const config = require('./src/config/config.json')
const { Sequelize, QueryTypes } = require('sequelize')
const sequelize = new Sequelize(config.development)
const bcrypt = require('bcrypt')
const session = require('express-session')
const flash = require('express-flash')
const blogModel = require('./src/models').blog

// app.set = buat setting varible global, configuratoin, dll
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, 'src/views'))

app.use("/assets", express.static(path.join(__dirname, 'src/assets')))
app.use(express.urlencoded({ extended: false })) // body parser, extended : false -> querystring, extended : true -> menggunakan querystring third party -> qs
app.use(flash())
app.use(session({
    name: "data",
    secret: 'rahasiabanget',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

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

app.get('/register', registerView)
app.post('/register', register)
app.get('/login', loginView)
app.post('/login', login)

async function home(req, res) {
    const id = 4

    const query = `SELECT * FROM profiles WHERE id=${id}`
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT })
    console.log("ini  data profile", obj)

    res.render('index', { data: obj[0], user: req.session.user })
}

function contact(req, res) {
    res.render('contact')
}

async function blog(req, res) {
    // const query = 'SELECT * FROM blogs'
    // const obj = await sequelize.query(query, { type: QueryTypes.SELECT })
    const data = await blogModel.findAll()
    // console.log("data", data)
    // console.log("data blog", data)

    const isLogin = req.session.isLogin
    const user = req.session.user

    // res.render('blog', { data })
    res.render('blog', { data, isLogin, user })
}

function addBlogView(req, res) {
    res.render('add-blog')
}

async function addBlog(req, res) {
    const { title, content } = req.body

    const image = "gojo.jpg"
    const author = "Rifal Pratama"

    // console.log("Title :", title)
    // console.log("Content :", content)

    // const dataBlog = { title, content }

    // data.unshift(dataBlog)
    const query = `INSERT INTO blogs(title, content, image, author) VALUES ('${title}', '${content}','${image}','${author}')`
    const obj = await sequelize.query(query, { type: QueryTypes.INSERT })

    console.log("data berhasil di insert", obj)

    res.redirect('/blog')
}

async function updateBlogView(req, res) {
    const { id } = req.params

    // const dataFilter = data[parseInt(id)]
    // dataFilter.id = parseInt(id)
    // console.log("dataFilter", dataFilter)
    const query = `SELECT * FROM blogs WHERE id=${id}`
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT })

    console.log("update blog view", obj)

    res.render('update-blog', { data: obj[0] })
}

async function updateBlog(req, res) {
    const { title, content, id } = req.body

    // console.log("Id :", id)
    // console.log("Title :", title)
    // console.log("Content :", content)

    // data[parseInt(id)] = {
    //     title,
    //     content,
    // }
    const query = `UPDATE blogs SET title='${title}',content='${content}' WHERE id=${id}`
    const obj = await sequelize.query(query, { type: QueryTypes.UPDATE })

    console.log("blog berhasil di update!", obj)

    res.redirect('/blog')
}


async function deleteBlog(req, res) {
    const { id } = req.params

    // data.splice(id, 1)
    const query = `DELETE FROM blogs WHERE id=${id}`
    const obj = await sequelize.query(query, { type: QueryTypes.DELETE })

    console.log("berhasil delete blog", obj)

    res.redirect('/blog')
}

async function blogDetail(req, res) {
    const { id } = req.params // destructuring

    // const query = `SELECT * FROM blogs WHERE id=${id}`
    // const obj = await sequelize.query(query, { type: QueryTypes.SELECT })
    const data = await blogModel.findOne({
        where: { id }
    })

    console.log("blogDetail", data)

    res.render('blog-detail', { data })
}

function testimonial(req, res) {
    res.render('testimonial')
}

function loginView(req, res) {
    res.render('login')
}

async function login(req, res) {
    const { email, password } = req.body
    const query = `SELECT * FROM users WHERE email='${email}'`
    const obj = await sequelize.query(query, { type: QueryTypes.SELECT })

    if (!obj.length) {
        console.error("user not registered!")
        req.flash('danger', 'Login failed : email is wrong!')
        return res.redirect('/login')
    }

    bcrypt.compare(password, obj[0].password, (err, result) => {
        if (err) {
            req.flash('danger', 'Login failed : internal server error!')
            console.error("Login : Internal Server Error!")
            return res.redirect('/login')
        }

        if (!result) {
            console.error("Password is wrong!")
            req.flash('danger', 'Login failed : password is wrong!')
            return res.redirect('/login')
        }

        console.log('Login success!')
        req.flash('success', 'Login success!')
        req.session.isLogin = true
        req.session.user = {
            name: obj[0].name,
            email: obj[0].email
        }

        res.redirect('/')
    })
}

async function register(req, res) {
    const { name, email, password } = req.body

    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Password:", password)

    const salt = 10

    bcrypt.hash(password, salt, async (err, hash) => {
        if (err) {
            console.error("Password failed to be encrypted!")
            req.flash('danger', 'Register failed : password failed to be encrypted!')
            return res.redirect('/register')
        }

        console.log("Hash result :", hash)
        const query = `INSERT INTO users(name, email, password) VALUES ('${name}', '${email}','${hash}')`

        await sequelize.query(query, { type: QueryTypes.INSERT })
        req.flash('success', 'Register success!')
        res.redirect('/')
    })
}

function registerView(req, res) {
    res.render('register')
}

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`)
})