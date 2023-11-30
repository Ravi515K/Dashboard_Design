import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uniqueId: null,
  exceptData: [],
  singleData: {},
  data: [],
  isModal: false,
  isEdit:false,
  inModal:false,
  inEdit:false,
  delete_Id:1
};

export const AddMemberSlice = createSlice({
  name: "addMember",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
      state.inModal = false;
    },
    openEditModal:(state,action ) => {
      state.isEdit = true
      state.delete_Id = action.payload
    },
    closeEditModal:(state ) => {
      state.isEdit = false;
      state.inEdit = false;
    },
    // Detail Page,  Add member Modal Action
    openModal_in: (state) => {
      state.inModal = true;
    },
   
    openEditModal_in:(state,action ) => {
      state.inEdit = true
      state.delete_Id = action.payload
    },
    
    addData: (state, action) => {
    
      state.data.unshift(action.payload);
    },
    singleMemberData: (state, action) => {
     
      const targetId = action.payload;
      state.uniqueId = targetId;

      const foundMember = state.data.find((el) => el.id === targetId);
  
      state.singleData = foundMember || {};

      state.exceptData = state.data.filter((el) => el.id !== targetId);
    },
    GetData:(state,action)=>{
     
      state.data=action.payload
    }
  },
});


export const { openModal, closeModal, addData, singleMemberData, GetData, closeEditModal, openEditModal ,
                openModal_in, closeModal_in, openEditModal_in,closeEditModal_in
             } = AddMemberSlice.actions;

export default AddMemberSlice.reducer;
