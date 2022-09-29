//can create schemas aka template with Mongoose 

const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
        
    },
    content: {
        type: String,
       required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

})

//export the schema as a model and reference that model.

module.exports = mongoose.model("DevKittyQ", questionSchema, 'myQuestions')
