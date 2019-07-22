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

/**
 * 流程办理状态
 */
export interface WaitingProcessState {
    switchProcessTrace: boolean // 流程痕迹开关
    switchProcessHandle: boolean // 流程处理开关
    sWitchProcesstransfer: boolean // 流程转办开关
    switchProcessIncreaseSign: boolean // 流程增签开关
    switchProcessReduceSign: boolean // 流程减签开关
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

