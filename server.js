const path = require('path');
const express = require('express');
// const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3004;

const sequelize = require('./config/connection');
// const sequelizeStore = require('connect-session-sequelize');

// const sess = {
//     secret: '',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     store: new sequelizeStore({
//         db: sequelize
//     })
// };

// app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./controllers');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on Port ' + `${PORT}` ));
});