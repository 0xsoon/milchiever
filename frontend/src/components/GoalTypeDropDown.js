import React, { useEffect, useState } from 'react';

import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const types = [
    {emoji: "😀", name: "타입 없음"},
    {emoji: "📚", name: "공부"},
    {emoji: "🎓", name: "자격증"},
    {emoji: "💪", name: "운동"},
    {emoji: "👔", name: "취업"},
    {emoji: "🎵", name: "음악"}
]

function GoalTypeDropDown({handleSelect}){
    const [selectedType, setSelectedType] = useState(types[0]);

    // Set selected type for render and pass goal type to parent.
    const handleDropDownSelect = (selected) => {
        setSelectedType(selected);
        handleSelect(selected);
    }

    // At first render, pass default goal type value to parent.
    useEffect(() => {
        handleSelect(selectedType);
    }, []);

    return (
        <Listbox name="goalType" value={selectedType} onChange={handleDropDownSelect}>
            <div class="relative bg-gray-200">
                <Listbox.Button class="text-right relative w-full py-3 px-6 cursor-default py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                    <span class="block truncate">{selectedType.emoji + " " + selectedType.name}</span>
                    <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                            class="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full max-h-34 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {
                        types.map((type, typeIdx) => (
                            <Listbox.Option
                                key={typeIdx}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pr-4 text-center ${
                                    active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                                    }`
                                }
                                value={type}
                            >
                                {
                                    ({selected}) => (
                                        <>
                                            <span
                                                className={`block truncate ${
                                                    selected ? 'font-medium' : 'font-normal'
                                                }`}
                                            >
                                                {type.emoji + " " + type.name}            
                                            </span>
                                            {selected ? (
											<span className="absolute inset-y-0 left-2 flex items-center text-blue-600">
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
                                            ) : null}
                                        </>
                                    )
                                }
                            </Listbox.Option>
                        ))
                    }
                </Listbox.Options>
            </div>
        </Listbox>
    )
}

export default GoalTypeDropDown;