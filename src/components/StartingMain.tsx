import React from 'react';
import { Link } from 'react-router-dom';

function StartingMain() {
  return (
    <main>
      <section className='p-12 flex'>
        <div>
          <div className='text-my-blue'>
            <Link to='/'>Jump start your portfolio </Link>
          </div>
          <h1 className='text-6xl'>
            <span>Jump start your crypto portfolio</span>
          </h1>
        </div>
        <div>right</div>
      </section>
    </main>
  );
}

export default StartingMain;
