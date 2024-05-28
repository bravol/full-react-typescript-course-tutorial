"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
const MetadataKeys_1 = require("./MetadataKeys");
const Methods_1 = require("./Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, descriptor) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.post = routeBinder(Methods_1.Methods.post);
exports.patch = routeBinder(Methods_1.Methods.patch);
exports.del = routeBinder(Methods_1.Methods.del);
