import React from 'react'
import LibraryBookCountChart from './LibraryBookCountChart'
import GenreChart from './GenreChart'
import MonthlyRentalTrendChart from './MonthlyRentalTrendChart'
import YearlyRentalTrendChart from './YearlyRentalTrendChart'

const Dashboard = () => {
  return (
    <div style={{ margin: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <GenreChart />
        <MonthlyRentalTrendChart />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <YearlyRentalTrendChart />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <LibraryBookCountChart />
      </div>
    </div>
  )
}

export default Dashboard
