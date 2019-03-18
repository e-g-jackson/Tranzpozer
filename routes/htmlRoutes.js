const path = require("path")

module.exports = (app) => {
    app.use('/favicon.ico', (req, res)=>{
        res.sendFile(path.join(__dirname, './client/build/favicon.ico'))
    }),

    app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    })
}