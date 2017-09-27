const path = require('path');
const surveys = require('../controllers/survey_controller.js');
const users = require('../controllers/user_controller.js');

module.exports = (app) => {
    app.get('/surveys', surveys.all);
    app.post('/survey', surveys.add);
    app.post('/survey/destroy', surveys.destroy);
    app.post('/register', users.register);
    app.get('/surveys/:id', surveys.one);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}