import React, {useState} from "react";
import { data } from "../Utility/CellRepoprts.constant";

function useCrud() {
  const [person, setPerson] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [editData, setEditData] = useState({});
 
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const handleAction = (obj) => {
    
  // };

  const handleEdit = (obj) => {
   
    setEditData(obj);
    setShowEdit(!showEdit);
  };
  const handleAdd = () => {
    setShowAdd(!showAdd);
  };
  const handleDelete = (Id) => {
    
   
    const newData = person.filter((el) => el.id !== Id);
  
    setPerson(newData);
  };

  return {
    handleToggle,
    handleEdit,
    handleDelete,
    // handleAction,
    handleAdd,
    person,
    showAdd,
    showEdit,
    editData,
    toggle,
    setShowAdd,
    setPerson
  }
}

export default useCrud;
