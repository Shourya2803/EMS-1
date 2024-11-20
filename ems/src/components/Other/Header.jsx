import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      try {
        // Parse the JSON string
        const userData = JSON.parse(storedUser);
        if (userData?.data?.firstName) {
          setUsername(userData.data.firstName);
        } else {
          setUsername('Admin'); // Fallback if firstName is missing
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        setUsername('Admin'); // Fallback in case of an error
      }
    } else {
      setUsername('Admin'); // Fallback if no user is found
    }
  }, []);

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser(''); // Inform the parent component about logout
    setUsername(''); // Clear the username state
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username || 'Guest'} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
