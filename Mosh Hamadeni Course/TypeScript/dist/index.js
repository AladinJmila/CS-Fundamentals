"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = __importDefault(require("./DataStructures/LinkedList"));
const list = new LinkedList_1.default();
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.addFirst(5);
