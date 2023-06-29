import { React } from 'react';
import { BsTwitch, BsYoutube } from 'react-icons/bs';

function Layout({children}) {
  return (
    <>
      <header className='w-full h-16 md:h-20 flex justify-center items-center'>
        <h1 className='flex gap-x-2 md:gap-x-5 justify-center items-center text-2xl md:text-4xl font-bold'>
          <BsTwitch />
          Streamers Spotlight
          <BsYoutube />
        </h1>
      </header>

      <main className='my-10'>

        <section className='w-full flex flex-col justify-center items-center'>
          {children}
        </section>

      </main>
    </>
  );
}

export default Layout;