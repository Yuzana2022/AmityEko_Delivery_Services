import { NavigatorDataInterFace } from "../interfaces/navigator.interface";
import { ActionTypes } from "./types";

export interface NavigatorAction{ 
    type: ActionTypes.navStatus;
    payload: NavigatorDataInterFace;
}

export const NavOpenACT = (navStatus: NavigatorDataInterFace) => {
    return {
        type: ActionTypes.navStatus,
        payload: navStatus
    };
};