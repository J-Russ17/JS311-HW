
let db = [];
let idCounter = 1001;

// how do we want to respond to a req to add an item
let addItem = function(req, res){

    // get the item info from the req
    // generate: id, done
    let item = {
        done: false,
        label: req.body.label,
        notes: req.body.notes,
        id: idCounter
    };
    idCounter++;

    // add the item to the db array
    db.push(item);

    // send back a 204 status (aka "everything is ok, but I don't have content send back")
    // res.sendStatus(204);

    res.json(item);

}

let deleteItem = function(req, res){

    let id = req.params.id;npm 

    let foundIndex = -1;
    for(let i = 0; i<db.length; i++){
        let item = db[i];
        if(id == item.id){
            foundIndex = i;
        }
    }

    let deletedItem;
    if(foundIndex >=0){
        deletedItem = db.splice(foundIndex, 1)[0];
    }
    res.json(deleteItem)
}

let listItems = function(req, res){

    let copyArray = []

    for(let i = 0; i<db.length; i++){
        let item = db[i]
        let copyItem = {
            done: item.done,
            label: item.label,
            id: item.id
        };
        copyArray.push(copyItem)
    }


    res.json(copyArray)
}

let getItem = function(req, res){

    //1. read id we are looking for from the req
    let id = req.params.id;

    //2. look for the item with a matching id in the db array
    let foundItem;
    for(let i = 0; id < db.length; i++){
        if(id = db[i].id){
            foundItem = db[i];
        }
    }
    // if ite found , add it to res
    // if item not found, add null to response

    res.json(foundItem)


}

let updateItem = function(req, res){

    // get id from the path param
    let id = req.params.id;

    // get label, notes, and done, from body
    let label = req.body.label;
    let notes = req.body.done;
    let done = req.body.done;

    if(done == true){
        done = true;
    } else {
        done = false;
    }

        let foundItem;
    for(let i=0; i<db.length; i++){
        let item = db[i];
        if(id == item.id){
            item.done = done;
            item.label = label;
            item.notes = notes;
            foundItem = item;
        }

        res.json(foundItem);
    }

    // if we find an itme with a mathcing id, update its; done, label and notes


}


module.exports = {
    addItem,
    deleteItem,
    listItems,
    getItem,
    updateItem
}