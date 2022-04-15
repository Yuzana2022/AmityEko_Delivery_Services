import { ToggleMenuAction } from './menuAction';
import { HeaderAction } from './HeaderAction';
import { NavigatorAction } from './NavigatorAction';
import { SelectResponseAction } from './SelectResponseAction';

export enum ActionTypes {
  toggleMenu,
  headerStatus,
  navStatus,
  selectResponse
}

export type Action =
  | ToggleMenuAction
  | HeaderAction
  | NavigatorAction
  | SelectResponseAction
