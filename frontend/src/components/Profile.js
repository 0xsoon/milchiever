import React from 'react'
import profile from '../images/profile.gif'
import Progressbar from "./Progressbar"

const calculate = (startDay, endDay) => {
	const today = new Date();
	startDay = new Date(startDay);
	endDay = new Date(endDay);
	
	const total = (endDay - startDay)/(1000 * 60 * 60 * 24) + 1;
	const diff = Math.round((endDay - today)/(1000 * 60 * 60 * 24));
	return [ total, diff ];
};

function Profile(props) {
	const startDay = props.enlist;
	const endDay = props.discharge;
	const [ totalDay, dDay ] = calculate(startDay, endDay);
	console.log(totalDay, dDay);
	return (
		<div className="flex flex-col bg-white items-center rounded-lg">
			<div className="flex p-6">
				<img className="w-1/4" src={profile} alt="profile" />
				<div className="flex flex-col w-full items-center justify-center">
					<div className="text-2xl">
						<div className="inline-block mr-2">병장(진) </div>
						<div className="inline-block">{props.name}</div>
					</div>
					<div className="block">입대일 : {props.enlist}</div>
					<div className="">전역일 : {props.discharge}</div>
					<div className="text-2xl">D - {dDay}</div>
				</div>
			</div>
			<Progressbar total={totalDay} now={totalDay - dDay} />
		</div>
	)
}

export default Profile;