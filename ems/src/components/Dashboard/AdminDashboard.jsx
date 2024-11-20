import React from 'react'
// import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
// import CreateTask from '../'
// import AllTask from '../other/AllTask'
import AllTask from '../Other/AllTask'
// import Header from '../Other/Header'
import Header from '../other/Header'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard