const Laptop = require('../models/Laptop');

const getLaptops = async (req, res) => {
  const laptops = await Laptop.find().populate('seller', 'name email');
  res.json(laptops);
};

const getLaptopById = async (req, res) => {
  const laptop = await Laptop.findById(req.params.id);
  res.json(laptop);
};

const createLaptop = async (req, res) => {
  const laptop = new Laptop({
    ...req.body,
    seller: req.user._id,
  });
  const created = await laptop.save();
  res.status(201).json(created);
};

const updateLaptop = async (req, res) => {
  const updated = await Laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

const deleteLaptop = async (req, res) => {
  await Laptop.findByIdAndDelete(req.params.id);
  res.json({ message: 'Laptop deleted' });
};

module.exports = {
  getLaptops,
  getLaptopById,
  createLaptop,
  updateLaptop,
  deleteLaptop,
};
