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
 * 流程痕迹状态
 */
export interface BpmProcessTracesState {
    id: string
    visiable: false
}

