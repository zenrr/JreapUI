import { CREATE_BPM_ACTION_TABS, PROCESS_TRACES_UI_SWITCH} from './actionTypes';
import axios from "axios";

/**
 * 打开或关闭流程痕迹界面
 */
export const processTracesUiSwitch = (id: string) => ({
	type: PROCESS_TRACES_UI_SWITCH,
	id
})

export const processTracesUi