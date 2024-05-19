'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: {amount:number}) => {
  return (
    <div className='w-full'>
      <CountUp end={amount} prefix='&#8377;' decimal=',' duration={2.75} decimals={2}/>
    </div>
  )
}

export default AnimatedCounter
