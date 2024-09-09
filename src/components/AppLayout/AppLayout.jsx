import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './AppLayout.css'

const AppLayout = () => {
    const [rightSideBar, setRightSideBar] = useState(false);

    const toggleSideBar = () => {
        setRightSideBar(!rightSideBar);
    };

  return (
    <div className="background">
            <div className="dashboard-container">
                <Sidebar position="left" />
                <div className="content">
                    <Navbar
                        rightSideBar={rightSideBar}
                        toggleSideBar={toggleSideBar}
                    />
                    <Outlet />
                </div>

                <Sidebar
                    position="right"
                    isOpen={rightSideBar}
                    toggleSideBar={toggleSideBar}
                />
            </div>
        </div>
  )
}

export default AppLayout
