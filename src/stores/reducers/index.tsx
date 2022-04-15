import { combineReducers } from 'redux';
import { HeaderDataInterFace } from '../interfaces/header.interface';
import { MenuDataInterFace } from '../interfaces/menu.interface';
import { NavigatorDataInterFace } from '../interfaces/navigator.interface';
import { HeaderReducers } from './headerReducers';
import { MenuReducers } from './menuReducers';
import { NavigatorReducers } from './navigatorReducers';
import { SelectResponseReducers } from './selectResponseReducers';

export interface StoreState {
    menuState: MenuDataInterFace;
    headerState : HeaderDataInterFace;
    navState : NavigatorDataInterFace;
}

export const reducers = combineReducers<StoreState>({
    menuState: MenuReducers,
    headerState: HeaderReducers,
    navState : NavigatorReducers
});
