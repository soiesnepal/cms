import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <Image
          className='dark:invert'
          src='/soies-logo.webp'
          alt='SOIES Nepal Logo'
          width={180}
          height={180}
          priority
        />
        <div className='list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          <h1 className='mb-4 text-xl font-bold'>
            Society of Industrial Engineering Students(SOIES) Nepal
          </h1>
          <p className='font-semibold'>
            This is for authorized members of SOIES Nepal only
          </p>
        </div>

        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <Link
            href='/studio'
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
          >
            <LogIn />
            Login
          </Link>
        </div>
      </main>
    </div>
  );
}
