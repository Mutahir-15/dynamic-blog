import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <main className='flex'>
    <section className='max-w-[1440px] mx-auto'>
        <div className='p-2 md:p-4 lg:p-10 gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 border-b-2'>
            <div className="hover:bg-zinc-900 hover:text-white hover:p-6">
                <h1 className='text-4xl font-bold'>What is Next.JS</h1>
                <p className='text-2xl lg:mt-5'>Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based applications.</p>
                <button className='bg-yellow-400 text-black rounded-md px-2 md:px-4 lg:px-5 lg:p-3 font-bold text-xl lg:mt-5'>
                    <Link href={"/blogs/blog1"}>Read Blog 1...</Link>
                </button>
            </div>
            <div className="hover:bg-zinc-900 hover:text-white hover:p-6">
                <h1 className='text-4xl font-bold'>Why Next.JS is a better Language?</h1>
                <p className='text-2xl lg:mt-5'>Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based applications.</p>
                <button className='bg-yellow-400 text-black rounded-md px-2 md:px-4 lg:px-5 lg:p-3 font-bold text-xl lg:mt-5'>
                    <Link href={"/blogs/blog2"}>Read Blog 2...</Link>
                </button>
            </div>
        </div>
    </section>
</main>
  )
}

export default page
