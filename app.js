const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});




app.use(express.static("public"));


app.listen(3001, function(){
  console.log("Server started on port 3001");
});
