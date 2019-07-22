import { CREATE_BPM_ACTION_TABS, PROCESS_TRACES_UI_OPEN} from './actionTypes';
import axios from "axios";

/**
 * 打开或关闭流程痕迹界面
 */
export const bpmProcessTracesUiSwitch = (id: string) => ({
	type: PROCESS_TRACES_UI_OPEN,
	id,
	visible
})
