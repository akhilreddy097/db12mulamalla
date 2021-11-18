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

/* GET shirt page. */
router.get('/', function(req, res, next) {
  const shirt1 = new shirt('blue', "nike", '10.29');
  const shirt2 = new shirt('red', "holister", '20.11');
  const shirt3 = new shirt('green', "puma", '40.12');
  res.render('shirt', {shirt : [shirt1, shirt2, shirt3]});
});

// GET request for one shirt. 
router.get('/shirt/:id', shirt_controller.shirt_detail); 

module.exports = router;

/* GET detail shirt page */
router.get('/detail', shirt_controller.shirt_view_one_Page);

/* GET create shirt page */ 
router.get('/create',shirt_controller.shirt_create_Page); 

/* GET create update page */ 
router.get('/update',shirt_controller.shirt_update_Page); 

/* GET create shirt page */ 
router.get('/delete',shirt_controller.shirt_delete_Page); 
