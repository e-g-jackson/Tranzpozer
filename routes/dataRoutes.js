const noteizer = require("../assets/noteizer");
const modeizer = require("../assets/modeizer");

module.exports = (app, db) => {
    app.get("/noteizer/:key", (req, res) => {
        const key = req.params.key;
        res.send(noteizer(key));
    })
    
    app.get("/modeizer/:mode", (req, res) => {
        const mode = req.params.mode;
        res.send(modeizer(mode));
    })
}