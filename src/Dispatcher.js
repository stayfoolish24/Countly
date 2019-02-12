class Dispatcher {
  constructor() {
    this.isDispatching = false
  }
  dispatcher(action) {
    if (this.isDispatching) {
      throw new Error('Cannot dispatch in the middle of a dispatch')
    }
    this.isDispatching = true
    // 액션을 스토어로 전달할 것
    this.isDispatching = false
  }
}

export default new Dispatcher()
