import React from 'react';

function MyComponent() {
	return (
		<div>
			<h1>Hello, React</h1>
			<p>This is a JSX example</p>
		</div>
	);
}

function Greeting({name}) {
	return <h1>Hello, {name}</h1>
}

function MyButton() {
	function handleClick() {
		alert('Button click')
	}
	return (
		<button onClick={handleClick} className="btn-primary">
			Click me
		</button>
	)
}

function ConditionalRendering({isLoggedIn}) {
	return (
		<div>
			{isLoggedIn ? <p>Welcome user</p> : <p>Please log in</p>}
		</div>
	)
}

export {MyComponent, Greeting, MyButton, ConditionalRendering};