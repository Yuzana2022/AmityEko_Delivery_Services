import { Action, ActionTypes } from '../actions/types';
import { SelectResponseInterFace } from "../interfaces/selectResponse.interface";

export const SelectResponseReducers = (
    state: SelectResponseInterFace = {
        selectResponse: true
    },
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.navStatus:{
            let selectResponse = !state.selectResponse;
            return {
                selectResponse
            }
        }
        default:
            return state
    }
}