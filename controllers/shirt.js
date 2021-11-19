var shirt = require("../models/shirt");


// Handle shirt create on POST.
exports.shirt_create_post = async function (req, res) {
  let document = new shirt();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  document.shirt_brand = req.body.shirt_brand;
  document.size = req.body.size;
  document.price = req.body.price;
  console.log(req.body);
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle shirt delete on DELETE.
exports.shirt_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await shirt.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
 };

// List of all shirts 
exports.shirt_list = async function(req, res) { 
  try{ 
      theshirts = await shirt.find(); 
      // res.send(theshirts); 
      console.log(theshirts,'Shirts list cjheckong');
      res.render('shirt', { title: 'Shirts List', results: theshirts }); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   

};
// VIEWS
// Handle a show all view
exports.shirt_view_all_Page = async function(req, res) { 
  try{ 
      theshirt = await shirt.find(); 
      console.log(theshirt,'dd');
      res.render('shirt', { title: 'shirt Search Results', results: theshirt }); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   
}; 
// for a specific shirt.
exports.shirt_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await shirt.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };


   exports.shirt_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await shirt.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.shirt_type)  
               toUpdate.shirt_type = req.body.shirt_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle a show one view with id specified by query
exports.shirt_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await shirt.findById( req.query.id)
  res.render('shirtdetail',
 { title: 'shirt Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 }

 
 // Handle building the view for creating a shirt. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.shirt_create_Page =  function(req, res) { 
  console.log("create view") 
  try{ 
      res.render('shirtcreate', { title: 'shirt Create'}); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 

// Handle building the view for updating a shirt. 
// query provides the id 
exports.shirt_update_Page =  async function(req, res) { 
  console.log("update view for item "+req.query.id) 
  try{ 
      let result = await shirt.findById(req.query.id) 
      res.render('shirtupdate', { title: 'shirt Update', toShow: result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 
// Handle a delete one view with id from query 
exports.shirt_delete_Page = async function(req, res) { 
  console.log("Delete view for id "  + req.query.id) 
  try{ 
      result = await shirt.findById(req.query.id) 
      res.render('shirtdelete', { title: 'shirt Delete', toShow: 
result }); 
  } 
  catch(err){ 
      res.status(500) 
      res.send(`{'error': '${err}'}`); 
  } 
}; 