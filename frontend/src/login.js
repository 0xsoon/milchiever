import React from 'react'

import Logo from "./goals.png"

function Introduce() {
	return (
		<div className="flex flex-col w-11/12 mt-3 p-5 bg-white rounded-lg xl:max-w-screen-xl">
			<h1 className="text-2xl font-medium text-black mb-5 ">milichiever란 무엇인가요?</h1>
			<img src="https://johnstillk8.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg" alt="test.pn" className="w-11/12 self-center rounded-lg"/>
		</div>
	);
}

function Notice() {
	return (
	<div className="flex flex-col w-11/12 mt-3 p-5 bg-white rounded-lg xl:max-w-screen-xl">
		<h1 className="text-2xl font-medium text-black mb-5">공지사항</h1>
		<img src="https://johnstillk8.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg" alt="test.pn" className="w-11/12 self-center rounded-lg"/>
	</div>
	);
}

 function Login() {
	return (
		<div className="bg-slate-100 pb-12 flex flex-col items-center">
			<div className="p-5 pt-16 w-11/12 xl:max-w-screen-xl flex justify-center">
			  <header className="flex items-center space-x-2">
				<img className="h-12 w-12" src={Logo} alt="ChitChat Logo" />
				<h1 className="text-4xl font-medium text-black">milichiever</h1>
			  </header>
			</div>
			<form action="#" className="flex flex-col items-center w-11/12 mt-3 bg-white rounded-lg xl:max-w-screen-xl">
				<input type="text" placeholder="군번" className="w-11/12 mt-7 px-5 mb-3 xl:max-w-screen-xl h-16 rounded-lg bg-neutral-200" />
				<input type="password" placeholder="비밀번호" className="w-11/12 xl:max-w-screen-xl mb-5 px-5 h-16 rounded-lg bg-neutral-200" />
				<input type="submit" value="로그인" className="w-11/12 xl:max-w-screen-xl h-14 rounded-lg bg-sky-600 mb-3 text-white font-bold" />
				<input type="button" value="회원가입" className="w-11/12 xl:max-w-screen-xl h-14 rounded-lg bg-green-600 mb-10 text-white font-bold" />
			</form>		
			<Introduce></Introduce>
			<Notice></Notice>
		</div>
	)
}



export default Login;