import React from "react"
import ButtonChildComponent from "./buttonChild"

function MyButtonProps() {
	function handleClick() {
		alert('Button click');
	}
	return (
		<ButtonChildComponent handleClick={handleClick} />
	)
}

export default MyButtonProps;