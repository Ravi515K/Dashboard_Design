import React from "react";

function Input({label,name,register,errors}) {
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
       {label}
      </label>
      <input
        {...register(name, { required: "name is Required" })}
        className="border border-gray-500 rounded-md"
      />
      {errors?.name && (
        <p className="text-red-500 text-xs italic">{errors?.name?.message}</p>
      )}
    </div>
  );
}

export default Input;
