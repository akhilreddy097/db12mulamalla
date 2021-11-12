var Costume = require("../models/costume");

// List of all costumes
exports.costume_list = function (req, res) {
  res.send("NOT IMPLEMENTED: costume list");
};

// for a specific costume
exports.costume_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: costume detail: " + req.params.id);
};

// Handle costume create on POST.
exports.costume_create_post = async function (req, res) {
  let document = new Costume();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  document.costume_brand = req.body.costume_brand;
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

// Handle costume delete form on DELETE.
exports.costume_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: costume delete DELETE " + req.params.id);
};

// Handle costume update form on PUT.
exports.costume_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: costume update PUT" + req.params.id);
};

// List of all Costumes 
exports.costume_list = async function(req, res) { 
  try{ 
      theCostumes = await Costume.find(); 
      res.send(theCostumes); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   

};
// VIEWS
// Handle a show all view
exports.costume_view_all_Page = async function(req, res) { 
  try{ 
      theCostume = await Costume.find(); 
      res.render('costume', { title: 'costume Search Results', results: theCostume }); 
  } 
  catch(err){ 
      res.status(500); 
      res.send(`{"error": ${err}}`); 
  }   
}; 