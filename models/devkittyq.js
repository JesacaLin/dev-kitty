//can create schemas aka template with Mongoose 

const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true
        
    // },
    content: {
        type: String,
       required: true
    },

})

//export the schema as a model and reference that model.

module.exports = mongoose.model("DevKittyQ", questionSchema, 'myQuestions')
//interviewQuestions is the collection inside the DevKitty-Questions database.