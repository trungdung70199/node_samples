const itemsModule = require("./Items");
const controlModule = require("./Control");

var items = itemsModule.items
controlModule.show(items)
