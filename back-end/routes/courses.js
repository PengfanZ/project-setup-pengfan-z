const { Router } = require('express');
const axios = require('axios');
const { year, semester } = require('../date');

const coursesRouter = Router();

coursesRouter.get('/:schoolID/:subjectID', (req, res, next) => {
    const { schoolID } = req.params;
    const { subjectID } = req.params;
    axios
        .get(`https://schedge.a1liu.com/${year}/${semester}/${schoolID}/${subjectID}?full=true`)
        .then((response) => {
            const allCourses = response.data;
            res.json(allCourses);
        })
        .catch((err) => next(err));
});

coursesRouter.use((error, req, res) => {
    res.status(500).send(`Error: ${error.message}`);
});

module.exports = {
    coursesRouter,
};
