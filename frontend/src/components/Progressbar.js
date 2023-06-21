import React from 'react'

function Progressbar(props) {
	const { total, now } = props;
	console.log();
	return (
	  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 m-6">
		<div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-4/6">{now/total * 100}%</div>
	  </div>
	)
}

export default Progressbar;