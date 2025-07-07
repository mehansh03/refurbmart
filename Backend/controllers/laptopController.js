const laptop = require('../models/laptop');

exports.getAllLaptops = async (req, res) => {
  const laptops = await laptop.find();
  res.json(laptops);
};

exports.getLaptopById = async (req, res) => {
  const laptop = await laptop.findById(req.params.id);
  if (!laptop) return res.status(404).json({ error: 'Laptop not found' });
  res.json(laptop);
};

exports.createLaptop = async (req, res) => {
  const newLaptop = new laptop(req.body);
  await newLaptop.save();
  res.status(201).json(newLaptop);
};

exports.updateLaptop = async (req, res) => {
  const updatedLaptop = await laptop.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedLaptop);
};

exports.deleteLaptop = async (req, res) => {
  await laptop.findByIdAndDelete(req.params.id);
  res.json({ message: 'Laptop deleted' });
};
