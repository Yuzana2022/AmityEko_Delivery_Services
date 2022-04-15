import { Action, ActionTypes } from "../actions"
import { NavigatorDataInterFace } from "../interfaces/navigator.interface"

export const NavigatorReducers = (
    state: NavigatorDataInterFace = {
        navOpen: true
    },
    action: Action
) => {
    switch (action.type) {
        case ActionTypes.navStatus:{
            let navOpen = !state.navOpen;
            return {
                navOpen
            }
        }
        default:
            return state
    }
}