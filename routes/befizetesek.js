import express from 'express';
const app = express();

export const route = express.Router();



route.post("/", (req, res) => {
    console.log(req.body);
    res.send("SIKERES BEFIZETESEK");

});//

route.patch("/:uazon/:bido", (req, res) => {
    console.log(req.body);
    res.send("SIKERES BEFIZETES MODOSITAS");
});//

route.get("/:uazon", (req, res) => {
    console.log(req.body);
    res.send("SIKERES LEKERDEZES");
});//

route.get("/", (req, res) => {
    console.log(req.body);
    res.send("SIKERES LEKERDEZES");
});//

route.delete("/uazon", (req, res)=>{
    res.send("SIKERES TORLES");
});

export default route;