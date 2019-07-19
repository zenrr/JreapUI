import { CREATE_BPM_ACTION_TABS, PROCESS_TRACES_UI_SWITCH} from './actionTypes';
import axios from "axios";

//显示菜单
export const getShowMenu = () => ({
	type:CREATE_BPM_ACTION_TABS
})

/**
 * 打开或关闭流程痕迹界面
 */
export const processTracesUiSwitch = () => ({
	type: PROCESS_TRACES_UI_SWITCH
})