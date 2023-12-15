import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

 const SelectComponent = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
   
    const handleChange = (value) => {
        setSelectedPerson(value);
        onSelect(value);
      };
    return (
      <Listbox value={selectedPerson} onChange={handleChange}>
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
            >
              <CheckIcon className="hidden ui-selected:block" />
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    )
  };
  export default SelectComponent