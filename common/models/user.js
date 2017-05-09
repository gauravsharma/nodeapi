'use strict';

module.exports = function(User) {
    User.get = function(password,email, cb) {
        cb(null, password, email);
    };

    User.remoteMethod('get', {
            http: {
                path: '/get',
                verb: 'get'
            },
            accepts: [
                {arg: 'password', type: 'string'},
                {arg: 'email', type: 'string'}
            ],
            returns: {
                arg: 'id',
                type: 'string'
            }
        }
    );
};
