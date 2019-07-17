export interface BpmUserProcessState {
    TabDefaultKeyState: TabDefaultKeyState
    UserProcessTabComponnetState: UserProcessTabComponnetState
}

/**
 * 流程痕迹状态
 */
export interface BpmProcessTracesState {
    id: string
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

