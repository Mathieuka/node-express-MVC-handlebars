 const path = require('path');

 /*
    Get the directory path of the file where this module is imported.
 */
 module.exports = path.dirname(process.mainModule.filename);