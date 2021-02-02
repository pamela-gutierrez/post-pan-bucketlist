// // Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var bucketlist = {
    all: function (cb) {
        orm.all("bucketlist", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("bucketlist", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("bucketlist", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("bucketlist", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (bucketlist_controller.js).
module.exports = bucketlist;