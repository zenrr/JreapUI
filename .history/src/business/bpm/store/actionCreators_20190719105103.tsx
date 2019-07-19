import { PROCESS_TRACES_UI_CLOSE, PROCESS_TRACES_UI_OPEN} from './actionTypes';
import axios from "axios";

/**
 * 打开流程痕迹UI
 */
export const bpmProcessTracesUiOpen = (id: string) => ({
	type: PROCESS_TRACES_UI_OPEN,
	id,
})

/**
 * 关闭流程痕迹UI
 */
export const bpmProcessTracesUiClose = () => ({
	type: PROCESS_TRACES_UI_CLOSE,
})

/**
 * 打开流程办理UI
 */
export const bpmProcessHanldeUiOpen = (id: string) => ({
	type: PROCESS_TRACES_UI_OPEN,
	id,
})

/**
 * 关闭流程办理UI
 */
export const bpmProcessHandleUiClose = () => ({
	type: PROCESS_TRACES_UI_CLOSE,
})

/**
 * 打开流程转办UI
 */
export const bpmProcessTransferUiOpen = (id: string) => ({
	type: PROCESS_TRACES_UI_OPEN,
	id,
})

/**
 * 关闭流程转办UI
 */
export const bpmProcessTransferUiClose = () => ({
	type: PROCESS_TRACES_UI_CLOSE,
})

/**
 * 打开流程增签UI
 */
export const bpmProcessIncreaseSignUIOpen = (id: string) => ({
	type: PROCESS_TRACES_UI_OPEN,
	id,
})

/**
 * 关闭流程增签UI
 */
export const bpmProcessIncreaseSignUIClose = () => ({
	type: PROCESS_TRACES_UI_CLOSE,
})

/**
 * 打开流程痕迹界面
 */
export const bpmProcessTracesUiOpen = (id: string) => ({
	type: PROCESS_TRACES_UI_OPEN,
	id,
})

/**
 * 关闭流程痕迹界面
 */
export const bpmProcessTracesUiClose = () => ({
	type: PROCESS_TRACES_UI_CLOSE,
})


