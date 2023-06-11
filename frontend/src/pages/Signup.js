import React from 'react'
import Logo from "../images/goals.png"
import Axios from 'axios'

function SignUpForm() {
	
	const type = ["text", "password", "date"]
	const elements = [];
	const data = [
		[0, "사용자 아이디", "aksworns2"],
		[1,"비밀번호", "최소 8자 이상으로 만들어 주세요"],
		[1, "비밀번호 확인", "사용하실 비밀번호를 다시한번 입력해주세요"],
		[0, "닉네임", "광주_조수민"],
		[0, "군번", "22-76042876"], [3], 
		[0, "최종학력", "광운대학교/컴퓨터공학과"],
		[0, "희망하는 진로", "작곡가"],
		[0, "보유 자격증", "정보처리기능사, 지게차기능사"],
		[0, "관심 분야", "전투부상자처치, 외출증 배달"]
		
	];
	for(let i = 0; i < data.length; i++) {
		const dataType = type[data[i][0]];
		if(dataType === "text" || dataType === "password") {
			elements.push(<label className="block my-3">{data[i][1]}</label>);
			elements.push(<input type={dataType} placeholder={data[i][2]} className="rounded-lg h-11 w-full p-4"/>);
		} else {
			elements.push(
					<div className="flex gap-x-2.5">
						<div className="grow">
							<label className="block my-3">입대일</label>
							<input type="date" className="rounded-lg h-11 w-full p-4"/>
						</div>
						<div className="grow">
							<label className="block my-3">전역일</label>
							<input type="date" className="rounded-lg h-11 w-full p-4"/>
						</div>
					</div>
				);
		}
	}
	
	return (
		
		<form className="w-11/12">
			<h1 className="p-2 pl-0 border-sky-600 text-xl font-bold border-b-2 border-slate-950">회원가입</h1>
			{elements}
			<input type="button" value="회원가입"  className="my-4 w-full xl:max-w-screen-xl h-14 rounded-lg bg-green-600 text-white font-bold" />
			<input type="button" value="돌아가기"  className="mb-4 w-full xl:max-w-screen-xl h-14 rounded-lg bg-yellow-600 mb-10 text-white font-bold" />
		</form>
	)
	
}

 function Signup() {
	 
	return (
		<div className="overflow-auto md:max-w-xl mx-auto bg-gray-100 h-screen flex flex-col items-center">
			<div className="p-5 pt-16 w-11/12 flex justify-center">
			  <header className="flex items-center space-x-2">
				<img className="h-12 w-12" src={Logo} alt="milchiever" />
				<h1 className="text-4xl font-bold text-black">milchiever</h1>
			  </header>
			</div>
			<SignUpForm></SignUpForm>
		</div>
	)
}

export default Signup;