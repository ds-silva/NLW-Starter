const express = require("express")
const server = express()

// Public settings
server.use(express.static("public"))

// Template Engie
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// Home
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Um ttulo"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

server.listen(3000)