import { createSlice } from "@reduxjs/toolkit"

const initialstate = {
    count=0,
}

const userreducer = createSlice({
    name: 'counter',
    initialstate,
    reducers: {
        add: (state) => {
            state.count += 1
        },
        minus: (state) => {
            state.count -= 1
        }
    }
})

export const{add,minus}=userreducer.actions
export default userreducer.reducer
