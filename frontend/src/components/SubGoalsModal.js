import React from 'react'
import Modal from "./Modal";

const goals = [
    { id: 1, title: 'Durward Reynolds'},
    { id: 2, title: 'Kenton Towne' },
    { id: 3, title: 'Therese Wunsch' },
    { id: 4, title: 'Benedict Kessler' },
    { id: 5, title: 'Katelyn Rohan'},
  ]

function SubGoalsModal({isOpen, onClose}){
    return (
        <Modal isOpen={true} onClose={onClose}>
            <div class="bg-white px-4 pb-4 pt-8">
                <div class="pb-2 text-left">
                    <h1 class="text-lg font-bold">단기 목표 추가</h1>
                </div>
                <div class="flex bg-gray-200 py-3 px-6 rounded-md my-3">
                    <input placeholder="이름" class="text-base font-medium bg-gray-200 w-full h-10 focus:outline-none"></input>
                    <label name="title"></label>
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500">Deactivate</button>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
            </div>
        </Modal>
    )
}

export default SubGoalsModal;