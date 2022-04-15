import { HeaderDataInterFace } from "../interfaces/header.interface";
import { ActionTypes } from "./types";

export interface HeaderAction{ 
    type: ActionTypes.headerStatus;
    payload: HeaderDataInterFace;
}

export const HeaderOpenACT = (headerStatus: HeaderDataInterFace) => {
    return {
        type: ActionTypes.headerStatus,
        payload: headerStatus
    };
};