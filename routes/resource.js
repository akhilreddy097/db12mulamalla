var express = require("express");
const shirt_controlers= require('../controllers/shirt'); 
var router = express.Router();

// Require controller modules.
var api_controller = require("../controllers/api");
var shirt_controller = require("../controllers/shirt");

/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);

/// shirt ROUTES ///

// POST request for creating a shirt
router.post("/shirt", shirt_controller.shirt_create_post);

// DELETE request to delete shirt.
router.delete("/shirt/:id", shirt_controller.shirt_delete);

// PUT request to update shirt.
router.put("/shirt/:id", shirt_controller.shirt_update_put);

// GET request for one shirt.
router.get("/shirt/:id", shirt_controller.shirt_detail);

// GET request for list of all shirt items.
router.get("/shirt", shirt_controller.shirt_list);

/* GET shirts */ 
router.get('/', shirt_controlers.shirt_view_all_Page ); 
module.exports = router; 

/* GET create shirt page */ 
router.get('/create', shirt_controlers.shirt_create_Page); 

/* GET create update page */ 
router.get('/update', shirt_controlers.shirt_update_Page); 

/* GET create shirt page */ 
router.get('/delete', shirt_controlers.shirt_delete_Page); 
 
 