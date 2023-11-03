let express = require("express");
let PORT = 8002;

let app = express();

let jsonParser = express.json();
app.use(jsonParser);

let routes = require("./routes");
app.use(routes);









app.listen(PORT, function(){
    console.log("Application started on port ", PORT);
});


/**
 * add an item
 * remove an item
 * update an item
 * list the items (summary)
 * get item(detail)
 * 
 * 
 */

