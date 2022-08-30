const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./homepageRoutes.js');
const dashboardRoutes = require('./dashboard-routes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;