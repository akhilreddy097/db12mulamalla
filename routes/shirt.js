var express = require('express');
var router = express.Router();

var shirt_controller = require('../controllers/shirt');
class shirt {
  constructor(shirt_color, shirt_brand,shirt_cost) {
    this.shirt_color = shirt_color;
    this.shirt_brand = shirt_brand;
    this.shirt_cost = shirt_cost;
  }
}

// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

// GET request for one shirt. 
router.get('/', shirt_controller.shirt_view_all_Page); 


router.get('/shirt/:id', shirt_controller.shirt_detail); 

module.exports = router;

/* GET detail shirt page */
router.get('/detail', shirt_controller.shirt_view_one_Page);

/* GET create shirt page */ 
router.get('/create', secured, shirt_controller.shirt_create_Page); 

/* GET create update page */ 
router.get('/update', secured, shirt_controller.shirt_update_Page); 

/* GET create shirt page */ 
router.get('/delete', secured, shirt_controller.shirt_delete_Page); 
