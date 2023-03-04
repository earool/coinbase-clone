import React from 'react';

import useViewport from '../hooks/useViewport';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import GoBackButton from '../components/UI/GoBackButton';

function Signup() {
  const { width } = useViewport();
  const breakPoint = 720;

  return (
    <main className='flex flex-col '>
      <span className='h-4 lg:h-16' />
      <div className='flex max-w-xl mx-auto'>
        {width > breakPoint ? (
          <div>
            <GoBackButton />
          </div>
        ) : null}
        <div className='flex flex-col min-w-max'>
          <div className='mb-4'>
            <h1 className='text-5xl mb-2 text-center'>Create an account</h1>
            <p className='text-sm text-center'>
              Required fields have an asterisk: *
            </p>
          </div>
          <form className=''>
            <div>
              <Input
                isRequired
                label='Username'
                input={{ id: 'username', type: 'text' }}
              />
              <Input
                isRequired
                label='Email'
                input={{ id: 'email', type: 'email' }}
              />
              <Input
                isRequired
                label='Password'
                input={{ id: 'password', type: 'password' }}
              />
            </div>
            <Button type='submit'>Create free account</Button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signup;
