let path = require("path");
module.exports = function() {
    return {
        initialFileToLoad : path.join(process.cwd(),"app-init.js"),
        
        // entry : {
            // key : Array of values
        // }
        // Eg : entry : {
        //     "components/todo.js" : ["components/javascript/todo-item.js","components/javascript/todo-modal.js"]
        // }
         
    }
}