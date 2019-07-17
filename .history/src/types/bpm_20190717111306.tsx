export interface BpmUserProcessState {
    TabDefaultKeyState: TabDefaultKeyState
    UserProcessTabComponnetState: UserProcessTabComponnetState
}

export interface ProcessTracesState {

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

