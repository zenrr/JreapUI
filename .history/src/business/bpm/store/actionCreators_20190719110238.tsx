import { 
	PROCESS_TRACES_UI_CLOSE, 
	PROCESS_TRACES_UI_OPEN,
	PROCESS_HANDLE_UI_OPEN,
	PROCESS_HANDLE_UI_CLOSE,
	PROCESS_TRANSFER_UI_OPEN,
	PROCESS_TRANSFER_UI_CLOSE,
	PROCESS_INCREASE_SIGN_UI_OPEN,
	PROCESS_INCREASE_SIGN_UI_CLOSE
	PROCESS_REDUCE_SIGN_UI_OPEN,
	PROCESS_REDUCE_SIGN_UI_CLOSE
} from './actionTypes';
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
	type: PROCESS_HANDLE_UI_OPEN,
	id,
})

/**
 * 关闭流程办理UI
 */
export const bpmProcessHandleUiClose = () => ({
	type: PROCESS_HANDLE_UI_CLOSE,
})

/**
 * 打开流程转办UI
 */
export const bpmProcessTransferUiOpen = (id: string) => ({
	type: PROCESS_TRANSFER_UI_OPEN,
	id,
})

/**
 * 关闭流程转办UI
 */
export const bpmProcessTransferUiClose = () => ({
	type: PROCESS_TRANSFER_UI_CLOSE,
})

/**
 * 打开流程增签UI
 */
export const bpmProcessIncreaseSignUIOpen = (id: string) => ({
	type: PROCESS_INCREASE_SIGN_UI_OPEN,
	id,
})

/**
 * 关闭流程增签UI
 */
export const bpmProcessIncreaseSignUIClose = () => ({
	type: PROCESS_INCREASE_SIGN_UI_CLOSE,
})

/**
 * 打开流程减签UI
 */
export const bpmProcessReduceSignUiOpen = (id: string) => ({
	type: PROCESS_REDUCE_SIGN_UI_OPEN,
	id,
})

/**
 * 关闭流程减签UI
 */
export const bpmProcessReduceSignUiClose = () => ({
	type: PROCESS_REDUCE_SIGN_UI_CLOSE,
})


