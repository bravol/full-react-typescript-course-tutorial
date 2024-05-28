"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.router = void 0;
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
exports.router = express_1.default.Router();
function controller(routePrefix) {
    return function (target) {
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata("path", target.prototype, key);
            if (path) {
                exports.router.get(`${routePrefix}${path}`, routeHandler);
                // console.log(`${routePrefix}${path}`);
            }
        }
    };
}
exports.controller = controller;
