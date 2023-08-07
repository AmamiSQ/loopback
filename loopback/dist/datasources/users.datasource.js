"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'users',
    connector: 'mysql2',
    url: '',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dbPassword123!',
    database: 'lbdb'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let UsersDataSource = exports.UsersDataSource = class UsersDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
UsersDataSource.dataSourceName = 'users';
UsersDataSource.defaultConfig = config;
exports.UsersDataSource = UsersDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.users', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], UsersDataSource);
//# sourceMappingURL=users.datasource.js.map