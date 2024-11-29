import express from 'express';
const app = express();

export const route = express.Router();



route.post("/:uazon/:tszint", (req, res) => {
    console.log(req.body);
    res.send("SIKERES FELTOLTES");
});
route.get("/:uazon", (req, res)=>{
    console.log(req.body);
    res.send("SIKERES MODOSITAS");
});





export default route;