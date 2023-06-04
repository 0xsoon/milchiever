import React from 'react'

import Logo from "./goals.png"
// function Header() {
	
// }

 function Login() {
	return (
		<div className="bg-slate-100 pb-12">
			<div className="p-5 pt-16 w-11/12 mx-auto flex justify-center">
			  <header className="flex items-center space-x-2">
				<img className="h-12 w-12" src={Logo} alt="ChitChat Logo" />
				<h1 className="text-4xl font-medium text-black">milichiever</h1>
			  </header>
			</div>
			<div className="flex flex-col items-center w-11/12 mt-3 bg-white rounded-lg mx-auto mb-16">
				<form action="#" className="flex flex-col items-center w-11/12 mt-3 bg-white rounded-lg mx-auto mb-3">
					<input type="text" placeholder="군번" className="w-10/12 mt-5 px-5 mb-3 mx-auto h-16 rounded-lg bg-neutral-200" />
					<input type="password" placeholder="비밀번호" className="w-10/12 mx-auto mb-5 px-5 h-16 rounded-lg bg-neutral-200" />
					<input type="submit" value="로그인" className="w-10/12 mx-auto h-16 rounded-lg bg-sky-600 text-white font-bold" />
				</form>
				<a href="https://react-dcsof.run.goorm.site/">비밀번호를 잃어버렸나요?</a>
				<a href="https://react-dcsof.run.goorm.site/" className="w-11/12 mx-auto h-16 rounded-lg bg-sky-600 text-white font-bold">회원가입</a>
			</div>
		</div>
	)
}

export default Login;