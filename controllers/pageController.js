const Photo = require('../models/Photo');

const getAboutPage = (req, res) => {
  res.render('about');
};

const getAddPage = (req, res) => {
  res.render('add');
};

const getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};

module.exports = {
  getAboutPage,
  getAddPage,
  getEditPage,
};
