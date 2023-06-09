
import React, { Fragment, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const emptyGoal = {
	id: 1, title: "장기 목표 선택 안함"
}

function MainGoalsDropDown({ defaultMainGoal, mainGoals, handleSelect }){
    const [selectedMainGoal, setSelectedMainGoal] = useState(defaultMainGoal);

    // Set selected type for render and pass goal type to parent.
    const handleDropDownSelect = (selected) => {
        setSelectedMainGoal(selected);
        handleSelect(selected);
    }

    return(
        <Listbox value={selectedMainGoal.title ? selectedMainGoal : defaultMainGoal.title ? defaultMainGoal: emptyGoal} onChange={handleDropDownSelect}>
            <div className="relative mt-1 bg-gray-200 rounded-md">
                <Listbox.Button className="relative w-full py-3 px-6 cursor-default py-2 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300">
                    <span className={selectedMainGoal.title || defaultMainGoal.title ? "block truncate" : "text-gray-400"}>{selectedMainGoal.title ? selectedMainGoal.title : defaultMainGoal.title ? defaultMainGoal.title : emptyGoal.title}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-32 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {mainGoals.map((goal, goalIdx) => (
                        <Listbox.Option
                        key={goalIdx}
                        className={({ active }) =>
                            `relative cursor-default select-none py-2 pr-4 ${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                            }`
                        }
                        value={goal}
                        >
                        {({ selected }) => (
                            <>
                            <span
                                className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                                {goal.title}
                            </span>
                            {selected ? (
                                <span className="absolute inset-y-0 left-2 flex items-center text-blue-600">
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}

export default MainGoalsDropDown;