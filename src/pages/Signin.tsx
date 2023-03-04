import React from 'react';

import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

function Signin() {
  return (
    <main className='flex flex-col'>
      <span className='h-4 sm:h-32' />
      <div className=' max-w-md mx-auto sm:max-w-3xl sm:border-2 sm:border-solid sm:border-gray-border sm:rounded-lg sm:p-10 '>
        <h2 className='text-my-blue text-3xl md:text-4xl font-medium mb-4'>
          Basecoin
        </h2>
        <div>
          <h3 className='text-lg font-medium mb-2'>Sign in to Basecoin</h3>
          <p className=' mb-5 text-sm italic text-gray-border-darker'>
            Not your device? Use a private or incognito window to sign in.
          </p>
        </div>
        <form className=''>
          <Input
            isRequired={false}
            label='Email'
            input={{ type: 'text', id: 'username' }}
          />
          <Button type='button'>continue</Button>
        </form>
      </div>
    </main>
  );
}

export default Signin;
