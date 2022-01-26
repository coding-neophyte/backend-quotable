const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const userProfile = await ProfileService.create({
      name: req.body.name,
    });
    res.send(userProfile);
  }catch(error){
    next(error);
  }
});
