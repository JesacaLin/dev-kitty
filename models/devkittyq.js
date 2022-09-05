//can create schemas aka template with Mongoose 

const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        
    },
    content: {
        type: String,
       
    },

})

//export the schema as a model and reference that model.

module.exports = mongoose.model("DevKittyQ", questionSchema, 'interviewQuestions')
//interviewQuestions is the collection inside the DevKitty-Questions database.