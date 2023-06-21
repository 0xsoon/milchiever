import React, { useState } from 'react';
import { getCookie } from './Signin'
import Axios from 'axios'
import Profile from '../components/Profile'



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