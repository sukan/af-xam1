const express = require('express');
const CourseRoute = require('../Controllers/Course.controller');
const Router = express.Router();

Router.use('/courses',CourseRoute);

Router.get('/', function (req, res) {
    res.json({message: 'Welcome to the react + express + mongoDB'});
});


module.exports = Router;
