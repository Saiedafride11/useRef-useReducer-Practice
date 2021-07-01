import React, { useRef } from 'react';

const ExploreRef = () => {
    const userNameRef = useRef(null);

    const handleClick = (e) => {
        // console.log(userNameRef.current.value);
        userNameRef.current.focus();
    }
    return (
        <div>
            <input ref={userNameRef} type="text" placeholder="useRef"/>
            <button onClick={handleClick}>useRef Practice</button>
        </div>
    );
};

export default ExploreRef;