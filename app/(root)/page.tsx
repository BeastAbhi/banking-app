import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

function Home() {
  const loggedIn = { firstName: 'Abhishek', lastName: "Kakade", email:"abhishekkakade35@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Wellcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.25}
          />
        </header>
        Recent transactions
      </div>
        <RightSidebar user = {loggedIn} transactions={[]} banks={[{ currentBalance: 12345 },{ currentBalance: 33445 }]}/>
    </section>
  )
}

export default Home