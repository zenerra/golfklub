import express from 'express';
const app = express();

export const route = express.Router();

route.get('/uazon', function(req, res){
    let uazon = req.params.uazon;
    res.send(uazon + "UGYFELEK MEGJELENITESE");
});

route.post("/register", (req, res) => {
    console.log(req.body);
    res.send("felhasznalo rogzitese");

});

route.post("login", (req, res) => {
    console.log(req.body);
    res.send("sikeres belepes");
});

route.put("/uazon", (req, res) => {
    console.log(req.body);
    res.send("Sikeres modositas");
});

route.delete("/:uazon", (req, res) => {
    console.log(req.body);
    res.send("Sikeres torles");
});

export default route;