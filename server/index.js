const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const secretKey = "a secret key";

app.get("/", (req, resp) => {
  resp.json({ message: "a simple api" });
});

app.post("login", (req, resp) => {
  const user = { id: 1, username: "pawan", email: "pawn@test.com" };

  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    resp.json({ token });
  });
});

app.post('/profile', verifyToken, (req, resp)=>{
  jwt.verify(req.token,secretKey,(err, authData)=>{
    if(err){
      resp.send({result: 'invaild token'})
    } else{
      resp.json({message:'profile accessed', authData})
    }
  })
})

function verifyToken(req, resp, next){
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader == 'undefined'){
    const bearer = bearerHeader.split(' ');
    const token = bear[1];
    req.token =token;
    next();
  } else{
    resp.send({ result : 'Token is not valid'})
  }
}
app.listen(5000);