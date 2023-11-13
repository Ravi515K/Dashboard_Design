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
    memberData: (state, action) => {
      state.data.unshift(action.payload);
    },
    singleMemberData: (state, action) => {
      const targetId = action.payload;
      state.uniqueId = targetId;

      const foundMember = state.data.find((el) => el.id === targetId);
      state.singleData = foundMember || {};

      state.exceptData = state.data.filter((el) => el.id !== targetId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { openModal, closeModal, memberData, singleMemberData } =
  AddMemberSlice.actions;

export default AddMemberSlice.reducer;
