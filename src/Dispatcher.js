class Dispatcher {
  constructor() {
    this.isDispatching = false
    this.actionHandlers = []
  }

  register(actionHandlers) {
    this.actionHandlers.push(actionHandler)
  }

  dispatcher(action) {
    if (this.isDispatching) {
      throw new Error('Cannot dispatch in the middle of a dispatch')
    }
    this.isDispatching = true

    this.actionHandlers.forEach(handler => handler(action))

    // 액션을 스토어로 전달할 것
    this.isDispatching = false
  }
}

export default new Dispatcher()
