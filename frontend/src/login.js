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
			<form className="w-11/12 mt-3 bg-white rounded-lg h-96 mx-auto mb-16">
			</form>
		</div>
	)
}

export default Login;