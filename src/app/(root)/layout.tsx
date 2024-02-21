import { Sidebar } from 'lucide-react'
import React from 'react'

const Layuot = ({children}: {children :React.ReactNode}) => {
  return (
    <main className='root'>
      <Sidebar/>
        <div className="root-contianer">
            <div className="wrapper">
            {children}
            </div>
        </div>
    </main> 
  )
}

export default Layuot