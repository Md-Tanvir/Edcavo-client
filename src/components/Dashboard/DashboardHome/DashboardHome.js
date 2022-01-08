import React from 'react';
import useAuth from '../../../hooks/useAuth'

const DashboardHome = () => {
const {user} = useAuth()    


    return (
        <div>
          {/* welcome msg */}
          <h2 className='text-center py-5'>Welcome to Dashboard <span className='text-success'> {user.displayName}</span></h2>
        
        </div>
    );
};

export default DashboardHome;