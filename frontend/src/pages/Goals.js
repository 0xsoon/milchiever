import React, { useEffect, useState } from 'react';
import SubGoalsModal from '../components/SubGoalsModal';
import GoalTypeDropDown from '../components/GoalTypeDropDown';


function Goals(){
    const [values, setValues] = useState({
        title: "", 
        startDate: new Date(), 
        endDate: new Date(), 
        goalType: ""
    });

    const [subGoals, setSubGoals] = useState([]);

    const [isSubGoalModal, setSubGoalModal] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSelect = (selected) => {
        console.log(selected);
        setValues({...values, goalType: selected.name});
    }

    const handleSubGoal = (subGoal) => {
        setSubGoals([...subGoals, subGoal]);
    }
    
    const handleDeleteSubGoals = (subGoalTitle) => {
        console.log(subGoalTitle);
        setSubGoals(subGoals.filter(subGoal => subGoal.title != subGoalTitle));
    }
    
    function formatDate(date) {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    }


    useEffect(() => {
        let today = formatDate(values.startDate);
        setValues({ ...values, startDate: today, endDate: today});
    }, []);

    return (
        <div class="relative bg-white rounded-md h-full p-6 overflow-auto">
            <div class="border-b-2 border-b-gray-200 pb-2">
                <h1 class="text-lg font-bold">목표 추가</h1>
            </div>
            <div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                <input name="title" onChange={handleChange} placeholder="이름" class="text-base font-medium bg-gray-200 w-full h-10 focus:outline-none" />
            </div>
            <div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                <div class="grow my-auto">
                    <span class="text-base font-medium">타입</span>
                </div>
                <div class="grow my-auto">
                    <GoalTypeDropDown handleSelect={handleSelect} />     
                </div>       
            </div>
            <div class="bg-gray-200 py-3 px-6 rounded-md my-3">
                <div class="flex my-3 mb-6">
                    <div class="grow my-auto">
                        <span class="text-base font-medium">시작</span>
                    </div>
                    <div class="grow">
                        <div class="float-right">
                            <div class="text-center hover:cursor-pointer">
                                <input 
                                    id="date" 
                                    type="date" 
                                    name="startDate" 
                                    class="bg-gray-200 focus:outline-none hover:cursor-pointer"
                                    value={values.startDate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex my-3">
                    <div class="grow my-auto">
                        <span class="text-base font-medium">종료</span>
                    </div>
                    <div class="grow">
                        <div class="float-right">
                            <input 
                                id="date" 
                                type="date" 
                                name="endDate" 
                                class="bg-gray-200 focus:outline-none hover:cursor-pointer"
                                value={values.endDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-2/5 overflow-auto">
                <div class="flex pb-2">
                    <h1 class="text-lg font-bold grow">단기목표</h1>
                    <svg onClick={() => setSubGoalModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                {
                    subGoals.map((subGoal, idx) => (
                        <div key={idx} class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                            <h1 class="text-md font-medium w-[95%]">{subGoal.title}</h1>
                            <button onClick={() => handleDeleteSubGoals(subGoal.title)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>       
                    ))
                }
            </div>
            <div class="absolute w-full bottom-5 left-0 px-6">
                <button class="rounded-md bg-blue-500 p-2 w-full text-white font-bold hover:bg-blue-300">추가하기</button>
            </div>
            {
                isSubGoalModal && 
                    <SubGoalsModal 
                        handleSubGoal={handleSubGoal} 
                        isOpen={isSubGoalModal} 
                        onClose={() => setSubGoalModal(false)} 
                    />
            }
        </div>
    )
}

export default Goals;