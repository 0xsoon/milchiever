import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModal: false
    },
    reducers: {
        toggle: state => {
            state.isModal = !state.isModal
        }
    }
})

export const { toggle } = modalSlice.actions

export default modalSlice.reducer 