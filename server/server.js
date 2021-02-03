const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const axios = require("axios")
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// const options = {
//   hostname: "localhost",
//   port: 8000,
//   path: "/planets",
//   method: "GET",
// };

// const req = http.request(options, (res) => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on("data", (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on("error", (error) => {
//   console.error(error);
// });

// req.end();

///~~~~~~~~~~~~~~~~~~~~~~ Or
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const Http = new XMLHttpRequest();
// const url='http://localhost:8000/vehicles';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }

///~~~~~~~~~~~~~~~~~~~~~~ Or
axios.get(`http://localhost:8000/people`)
.then( (d) => {
  console.log(d.data)
}
)
.catch( error => {
    console.log(error);
});

app.listen(3000, () => console.log("The server LISTENS..."));
