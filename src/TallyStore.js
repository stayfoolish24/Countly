import Dispatcher from './Dispatcher'

const tally = {
  count: 0
}

const increment = () => {
  tally.count += 1
}

const decrement = () => {
  tally.count -= 1
}

const zero = () => {
  tally.count = 0
}

class TallyStore {
  getTally() {
    return Object.assign({}, tally)
  }
}

const handleAction = action => {
  switch (action.type) {
    case 'INCREMENT':
      increment()
      break
    case 'DECREMENT':
      decrement()
      break
    case 'ZERO':
      zero()
      break
    default:
    // 아무것도 하지 않음
  }
}

const instance = new TallyStore()
export default instance

Dispatcher.register(handleAction)
