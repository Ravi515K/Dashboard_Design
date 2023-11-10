import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  singleData:{},
  data:[],
  isModal:false,
}
// console.log(initialState.data)
export const AddMemberSlice = createSlice({
  name: 'addMember',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModal=true
    },
   closeModal:(state)=>{
    state.isModal=false
   },
   memberData:(state,action)=>{
    state.data.unshift(action.payload)
   },
   singleMemberData:(state,action)=>{
      state.singleData=state.data.filter((el)=>{
        if(el.id==action.payload)
        return el
      })
   }
  },
})

// Action creators are generated for each case reducer function
export const { openModal,closeModal,memberData, singleMemberData } = AddMemberSlice.actions

export default AddMemberSlice.reducer