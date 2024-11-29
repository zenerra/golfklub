import express from 'express';
import send from 'send';
const app = express();

export const route = express.Router();

route.get('/', function(req, res){
    console.log(req.body);
    res.send("AZ OSSZES JELENLET");
});

route.patch('/:uazon', function(req, res){
    console.log(req.body);
    res.send("SIkeres FRISSITESS");
});




route.get('/:uazon'), (req, res) => {
    console.log(req.body);
    res.send("AZ ADOTT UGYFEL LATOGATASA");
};


route.post("/:uazon", (req, res) => {
    console.log(req.body);
    res.send("SIKERES FELTOLTES");
});






export default route;