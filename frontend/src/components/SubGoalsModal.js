import Modal from "./Modal";
import React, { useState } from 'react';


function SubGoalsModal({ isOpen, onClose, handleSubGoal }){
	const [subGoal, setSubGoal] = useState({title: "", duration: 0, mainGoal: ""});
	
	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setSubGoal({...subGoal, [name]: value})
	}

	const addSubGoal = () => {
		handleSubGoal(subGoal);
		onClose();
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div class="bg-white px-4 pb-4 pt-8">
				<div class="pb-2 text-left">
					<h1 class="text-lg font-bold">단기 목표 추가</h1>
				</div>
				<div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
					<input onChange={handleChange} name="title" placeholder="이름" class="text-base font-medium bg-gray-200 w-full h-10 focus:outline-none"/>
				</div>
				<div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
					<div class="grow my-auto text-left">
						<span class="text-base font-medium">예상 소요 시간</span>
					</div>
					<div class="grow">
						<div class="float-right">
							<input onChange={handleChange} name="duration" type="number" class="text-base text-right align-middle bg-gray-200 w-20 focus:outline-none" min="0"></input> 
						</div>
					</div>
				</div>
			</div>
			<div class="px-4 pb-6 flex">
				<button onClick={() => onClose(true)} type="button" class="mr-4 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">취소</button>
				<button onClick={addSubGoal} type="button" class="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-300">추가</button>
			</div>
		</Modal>
	)
}

export default SubGoalsModal;