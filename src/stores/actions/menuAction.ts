import { MenuDataInterFace } from "../interfaces/menu.interface";
import { ActionTypes } from "./types";

export interface ToggleMenuAction{ 
    type: ActionTypes.toggleMenu;
    payload: MenuDataInterFace;
}

export const ToggleMenuACT = (menu: MenuDataInterFace) => {
    return {
        type: ActionTypes.toggleMenu,
        payload: menu
    };
};