import{add} from "./action"
import{minus} from "./action"
const initialstate = {
    count: 0
}

const Counterreducer = (state = initialstate, action) => {
    switch (action.type) {
        case add: return {
            count: state.count + 1
        }
        case minus: return {
            count: state.count - 1
        }
        default:return state
    }
}

export default Counterreducer
