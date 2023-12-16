'use client'
import React from 'react';

const Home = () => {
function getReadableDateDifference(givenDate: string | number | Date) {
  // Parse the given date and today's date
  const givenDateTime = new Date(givenDate).getTime();
  const todayDateTime = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifference = todayDateTime - givenDateTime;

  // Calculate years, months, and days
  const millisecondsInDay = 24 * 60 * 60 * 1000;
  const years = Math.floor(timeDifference / (365.25 * millisecondsInDay));
  const months = Math.floor((timeDifference % (365.25 * millisecondsInDay)) / (30.44 * millisecondsInDay));
  const days = Math.floor((timeDifference % (30.44 * millisecondsInDay)) / millisecondsInDay);

  // Create a human-readable string
  const readableDifference =
    (years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '') +
    (months > 0 ? `${years > 0 ? ' ' : ''}${months} ${months === 1 ? 'month' : 'months'}` : '') +
    (days > 0 ? `${years > 0 || months > 0 ? ' ' : ''}${days} ${days === 1 ? 'day' : 'days'}` : '');

  return readableDifference;
}
  console.log(getReadableDateDifference('1983-4-24'))

  return (
    <body>
      <div data-theme='dark' className='card w-full bg-neutral shadow-lg text-neutral-content p-4 overflow-auto rounded-md   hover:w-[140px] transition-all hover:shadow-xl hover:shadow-indigo-500/20'>
        <div className='py-6'>
          <text>Rani: </text>
          <text>{getReadableDateDifference('1983-4-24')}</text>
        </div>
        <div className='py-6'>
          <text>Abhilash: </text>
          <text>{getReadableDateDifference('2001-10-21')}</text>
        </div>
        <div className='py-6'>
          <text>Abhinand: </text>
          <text>{getReadableDateDifference('2005-10-27')}</text>
        </div>
      </div>
    </body>
  );
};

export default Home;
