import { configureStore } from "@reduxjs/toolkit"
import userreducer from '../ReduxToolkit/userreducer'

const userstore = configureStore({
    reducer:{
        'counter':userreducer
    }
})

export default userstore
