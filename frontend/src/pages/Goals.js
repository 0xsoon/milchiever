import React, { useEffect, useState } from 'react';
import SubGoalsModal from '../components/SubGoalsModal';

import GoalLogo from '../images/goals.png';

function Goals(){
    const [values, setValues] = useState({startDate: new Date(), endDate: new Date()});
    const [isModal, setModal] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    
    function formatDate(date) {
        return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${("0" + date.getDate()).slice(-2)}`;
    }

    useEffect(() => {
        let today = formatDate(values.startDate);
        setValues({ ...values, startDate: today, endDate: today});
    }, []);

    return (
        <div class="bg-white rounded-md h-full p-6">
            <div class="border-b-2 border-b-gray-200 pb-2">
                <h1 class="text-lg font-bold">목표 추가</h1>
            </div>
            <div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                <input placeholder="이름" class="text-base font-medium bg-gray-200 w-full h-10 focus:outline-none"></input>
                <label name="title"></label>
            </div>
            <div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                <div class="grow my-auto">
                    <span class="text-base font-medium">타입</span>
                </div>
                <div class="grow">
                    <div class="float-right">
                        <div class="text-center hover:cursor-pointer">
                            <img src={GoalLogo} class="inline-block w-6 h-6 mr-1"></img>
                            <span class="text-base align-middle">자격증</span>
                        </div>
                        <div class="bg-blue-500 mt-2 py-1 px-2 rounded-md hover:bg-blue-300">
                            <button class="text-xs text-white font-bold">커스텀 타입 관리</button>
                        </div>
                    </div>
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
            <div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                <div class="grow my-auto">
                    <span class="text-base font-medium">예상 소요 시간</span>
                </div>
                <div class="grow">
                    <div class="float-right">
                        <div class="text-center hover:cursor-pointer">
                            <span class="text-base align-middle">10 시간</span>
                        </div>
                        <div class="bg-blue-500 mt-2 py-1 px-2 rounded-md hover:bg-blue-300">
                            <button class="text-xs text-white font-bold">예상 소요 시간 계산</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex pb-2">
                <h1 class="text-lg font-bold grow">단기목표</h1>
                <svg onClick={() => setModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
            <div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                <h1 class="text-md font-medium w-[95%]">단기목표</h1>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <SubGoalsModal isOpen={isModal} onClose={() => setModal(false)} />
        </div>
    )
}

export default Goals;