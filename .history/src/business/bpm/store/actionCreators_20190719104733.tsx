import { PROCESS_TRACES_UI_CLOSE, PROCESS_TRACES_UI_OPEN} from './actionTypes';
import axios from "axios";

/**
 * 打开流程痕迹界面
 */
export const bpmProcessTracesUiOpen = (id: string) => ({
	type: PROCESS_TRACES_UI_OPEN,
	id,
})

export const bpmProcessTracesUiClose = () => ({
	type: PROCESS_TRACES_UI_CLOSE,
})
