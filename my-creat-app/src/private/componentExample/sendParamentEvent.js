import React from 'react';

function ButtonComponent() {
	function handleClick(parameter) {
		alert(`send ${parameter}`);
	}

    function handleSumbit(event) {
        event.preventDefault();
        alert('stop!!');
    }

	return (
        <div>
            <h4>send paramenter Example</h4>
            <button onClick={() => handleClick('hi allen')}>send parameter</button>
            <form onSubmit={handleSumbit}>
                <button type="submit">form submit</button>
            </form>
        </div>
	)
}

export default ButtonComponent;