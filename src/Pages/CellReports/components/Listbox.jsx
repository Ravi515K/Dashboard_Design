import { Listbox } from "@headlessui/react"
import { useState } from "react"

const gender = [
    { name:  'Select Gender', value:"" },
    { name:  'Male', value:"male" },
    { name:  'Female', value:"female" },
  ]
export default function GenderListbox() {
    const [selectedGender, setSelectedGender] = useState(gender[0])
  
    return (
      <Listbox value={selectedGender} onChange={setSelectedGender}>
        
        <Listbox.Button>{selectedGender.name}</Listbox.Button>
        <Listbox.Options>
          {gender.map((gender) => (
            <Listbox.Option
             
              value={gender.value}
              disabled={gender.name=="Select Gender"}
            >
              {gender.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    )
  }