import React from 'react'
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const layout = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar/>
      <main className="flex-1 overflow-y-auto">
        <Outlet/>
      </main>
    </div>
  )
}

export default layout
