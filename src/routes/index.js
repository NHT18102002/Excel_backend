const authRouter = require('./auth');
const homeRouter = require('./home');
const tldlRouter = require('./tldl');
const tlctRouter = require('./FormCaculateTinhluong');

function route(app) {
    app.use('/api/v1/auth', authRouter);
    app.use('/api/v1/home', homeRouter);
    app.use('/api/v1/thiet-lap-du-lieu', tldlRouter);
    app.use('/api/v1/FormCaculateTinhluong', tlctRouter);
}

module.exports = route;
