const express = require('express');
const router = express.Router();
const {
  getLaptops,
  getLaptopById,
  createLaptop,
  updateLaptop,
  deleteLaptop,
} = require('../controllers/laptopController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getLaptops).post(protect, createLaptop);
router.route('/:id').get(getLaptopById).put(protect, updateLaptop).delete(protect, deleteLaptop);

module.exports = router;
