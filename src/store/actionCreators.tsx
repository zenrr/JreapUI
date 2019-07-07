import { IS_SHOW_MENUS} from './actionTypes';
import axios from "axios";

//显示菜单
export const getShowMenu = () => ({
	type:IS_SHOW_MENUS
})