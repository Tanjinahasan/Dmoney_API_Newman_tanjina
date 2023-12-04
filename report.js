const newman = require('newman');
require('dotenv').config();
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/27747969-18693cd1-6ae2-4c40-89cf-6f5bdcd49f1f?access_key=${process.env.accessKey}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});