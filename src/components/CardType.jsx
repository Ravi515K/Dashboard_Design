import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { ImCheckboxChecked } from "react-icons/im"
function CardType({ data }) {
  let [plan, setPlan] = useState('Leanne Graham')
  // console.log(data)
  return (
    <RadioGroup>
      <div className="grid grid-cols-4 gap-2 justify-between">
        {data.map((el) => {
          return (
            <>
              <RadioGroup.Option key={el.id} value={el.name}>
                {({ checked }) => (
                  <div   className={checked ? "w-[100%] border border-black p-2 bg-blue-200" : "w-[100%]  border-black p-2 bg-custom-blue"}>
                  
                    <p>{el.name}</p>
                    <p>{el.email}</p>
                    <p>{el.company.name}</p>
                    {checked && (
                        <div className="shrink-0 text-white">
                          <ImCheckboxChecked className="h-6 w-6  ml-[200px]" />
                        </div>
                      )}
                  </div>
                )}
              </RadioGroup.Option>
            </>
          );
        })}
      </div>
    </RadioGroup>
  );
}

export default CardType;
