var express = require("express");
const costume_controlers= require('../controllers/costume'); 
var router = express.Router();

// Require controller modules.
var api_controller = require("../controllers/api");
var costume_controller = require("../controllers/costume");

/// API ROUTE ///
// GET resources base.
router.get("/", api_controller.api);

/// costume ROUTES ///

// POST request for creating a costume
router.post("/costume", costume_controller.costume_create_post);

// DELETE request to delete costume.
router.delete("/costume/:id", costume_controller.costume_delete);

// PUT request to update costume.
router.put("/costume/:id", costume_controller.costume_update_put);

// GET request for one costume.
router.get("/costume/:id", costume_controller.costume_detail);

// GET request for list of all costume items.
router.get("/costume", costume_controller.costume_list);

/* GET costumes */ 
router.get('/', costume_controlers.costume_view_all_Page ); 
module.exports = router; 