import { Request, Response } from "express";
import { IToDo } from "../../interfaces/todo";

class Controllers {

    static create = () => {
        console.log("create")
    };

    static read = () => {
        console.log("read")
    };

    static update = () => {
        console.log("update")
    };

    static delete = () => {
        console.log("delete")
    };

}

export default Controllers;