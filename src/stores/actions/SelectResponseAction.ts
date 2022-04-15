import { SelectResponseInterFace } from "../interfaces/selectResponse.interface";
import { ActionTypes } from "./types";

export interface SelectResponseAction{ 
    type: ActionTypes.selectResponse;
    payload: SelectResponseInterFace;
}

export const NavOpenACT = (selectResponse: SelectResponseInterFace) => {
    return {
        type: ActionTypes.selectResponse,
        payload: selectResponse
    };
};