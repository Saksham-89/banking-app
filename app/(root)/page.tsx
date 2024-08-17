import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalance from '@/components/TotalBalance'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: "Saksham", lastName: "Birla", email: "email@email.com"}
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Guest"}
                    subtext="Access and Manage your account"
                />

                <TotalBalance
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1000.00}
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.50}, {currentBalance: 50.76}]}
        />
    </section>
  )
}

export default Home
