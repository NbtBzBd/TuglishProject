const express = require("express");
const api = express();
const port = 5000;
const bodyParser = require('body-parser');
const middwares = require('./endpoints/middware');
const cors = require('cors');
middwares(api, bodyParser, cors);

api.listen(port, (error) => {
    	if (error) {
            console.log(error);
            return;
        }
        console.log("online");
})

