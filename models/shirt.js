const mongoose = require("mongoose") 
const shirtSchema = mongoose.Schema({ 
 shirt_type: {
     type: String,
     minLength: 4
 }, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("shirt", shirtSchema)