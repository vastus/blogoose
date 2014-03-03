/**
 * Globals.
 */
path = require('path');

/**
 * Constants.
 */
BASEDIR = __dirname;
MODELDIR = path.join(BASEDIR, 'models');
DBDIR = path.join(BASEDIR, 'db');
MONGOURI = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://elk:humongous@ds031359.mongolab.com:31359/blogoose' ||
    'mongodb://localhost/blogoose';

