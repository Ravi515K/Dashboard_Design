import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uniqueId: null,
  exceptData: [],
  singleData: {},
  data: [],
  isModal: false,
};
// console.log(initialState.data)
export const AddMemberSlice = createSlice({
  name: "addMember",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
    addData: (state, action) => {
      console.log(action.payload)
      state.data.unshift(action.payload);
    },
    singleMemberData: (state, action) => {
      console.log(action.payload, state.data)
      const targetId = action.payload;
      state.uniqueId = targetId;

      const foundMember = state.data.find((el) => el.id === targetId);
     // console.log(foundMember)
      state.singleData = foundMember || {};

      state.exceptData = state.data.filter((el) => el.id !== targetId);
    },
    GetData:(state,action)=>{
     // console.log(action.payload)
      state.data=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal, addData, singleMemberData, GetData } =
  AddMemberSlice.actions;

export default AddMemberSlice.reducer;
