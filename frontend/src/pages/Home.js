import React, { useState } from 'react';
import { getCookie } from './Signin'
import Axios from 'axios'
import profile from '../images/profile.gif';
function Profile(props) {
	return (
		<div className="flex flex-col bg-white items-center rounded-lg">
			<div className="flex p-6">
			<img className="w-1/4" src={profile} alt="profile" />
			<div className="text-2xl">{props.name}</div>
			<div className="block">입대일 : {props.enlist}</div>
			<div className="">전역일 : {props.discharge}</div>
			</div>
		</div>
	)
}

function Home(){

	const [name, setName] = useState('Login Please!');
	const [enlist, setEnlist] = useState('');
	const [discharge, setDischarge] = useState('');
	
	if(getCookie('access_token') === undefined) {
		console.log("You Must Login First!");
	} else {
		Axios.get('https://fastapi-iedjz.run.goorm.site/user', {
				headers : {
					'accept': 'application/json',
					'Authorization': `Bearer ${getCookie('access_token')}`,
				},
		}).then((res)=>{
			console.log(res);
			setName(res.data["name"]);
			setEnlist(res.data["enlistDay"]);
			setDischarge(res.data["dischargeDay"]);
		}).catch((err)=>console.log(err));
	}
	
    return (
        <div>
            <Profile name={name} enlist={enlist} discharge={discharge}></Profile>
        </div>
    )
}

export default Home;