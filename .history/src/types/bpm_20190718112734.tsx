/**
 * 用户流程任务状态
 */
export interface BpmUserProcessState {
    TabDefaultKeyState: TabDefaultKeyState
    UserProcessTabComponnetState: UserProcessTabComponnetState
}

/**
 * tab默认key
 */
export interface TabDefaultKeyState {
    key: 0
}

/**
 * 个人任务界面tabs
 */
export interface UserProcessTabComponnetState {
    title: string
    component: React.Component
}

export interface WaitingProcessState {
    switchProcessTrace: false // 流程痕迹开关
    switchProcessHandle: false // 流程处理开关
    sWitchProcesstransfer: false // 流程转办开关
    switchProcessIncreaseSign: false // 流程增签开关
    switchProcessReduceSign: false // 流程减签开关
    pageNum: number // 当前页
    pageSize: number // 每页显示数量
}

/**
 * 流程痕迹状态
 */
export interface BpmProcessTracesState {
    id: string
    visiable: boolean
}

