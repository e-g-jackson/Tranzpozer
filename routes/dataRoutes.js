import noteizer from "../assets/noteizer";

module.exports = (app, db) => {
    app.get("/notizer/:key", (req, res) => {
        const key = req.params.id;
        res.send(noteizer(key));
    })
    app.get("/guitarStuff", (req, res) => {
        res.send('hey')
    })
}