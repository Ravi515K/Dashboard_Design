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

  const handleEdit = (obj) => {
   console.log("hii")
   setShowEdit(!showEdit);
    setEditData(obj);
 
  };
  const handleAdd = () => {
    setShowAdd(!showAdd);
  };
  const handleDelete = (Id) => {
    console.log(Id)
    const newData = person.filter((el) => el.id !== Id);
    console.log(newData)
    setPerson(newData);
  };
 console.log(showEdit)
  return {
    handleToggle,
    handleEdit,
    handleDelete,
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
