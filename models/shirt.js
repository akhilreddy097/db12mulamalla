const mongoose = require("mongoose") 
const shirtSchema = mongoose.Schema({ 
 shirt_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("shirt", shirtSchema)