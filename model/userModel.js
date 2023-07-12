// import mongoose

const mongoose= require('mongoose')

//createa db schema ref new mongoose.schema(schema,collection)

const userSchema = new mongoose.Schema({
    name: {
        type: String, //data type
        required: true, // mandatory field
    },
    email:{
        type: String, //data type
        required: true, // mandatory field
        unique: true // unique value - willnot allow duplicates
    },
    mobile: {
        type: String, // if we have county codeit must be string
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true //default value
    }
},  {
    collection: 'users', // name of the collection
    timestamps: true // log the created and updated times in collection
})

module.exports = mongoose.model("User", userSchema) // model(exports Schema Name, schema ref)