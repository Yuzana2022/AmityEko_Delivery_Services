import { Action, ActionTypes } from '../actions/types';
import { HeaderDataInterFace } from "../interfaces/header.interface";

export const HeaderReducers = (
    state: HeaderDataInterFace = {
        headerOpen: true
    },
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.headerStatus:{
            let headerOpen = !state.headerOpen;
            return {
                headerOpen
            }
        }
        default:
            return state
    }
}