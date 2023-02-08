import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <title>PRICING_UI</title>
      <center><h1 className="pt-12 font-bold leading-tight text-6xl mt-0 mb-2 text-slate-900">PRICING UI</h1>
      <p className='px-96 text-1xl text-slate-900'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ducimus reiciendis, porro quae ut odit voluptas dolorum deserunt suscipit nam ipsa dolores. Quisquam non natus magnam illum beatae, velit corporis.</p>
      </center>
      <br></br>
      <div className="space-y-4 flex">
        <div className="bg-white flex opacity-0 w-60 h-1">
        </div>
        <div className="bg-slate-900 justify-center flex w-96 h-96 shadow-lg">
        <div>
      <h2 className='pl-10 pt-5 font-light leading-tight text-2xl mt-0 mb-2 text-blue-600'>Basic Plan</h2>
        <h1 className='pt-2 font-bold leading-tight text-5xl mt-0 mb-2 text-white'>30 USD</h1>
      <ul className="space-y-3 text-white list-disc marker:text-blue-500">
      <li>10 deploys per day</li>
      <li>10 GB of storage</li>
      <li>3 domains</li>
      <li>SSL certificates</li>  
      </ul>
      <br></br>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 border border-blue-700 rounded px-16 space-y-8">
      Get Started
      </button>
      </div> 
        </div>
        <div className="bg-white flex w-60 opacity-0 h-1">
        </div>
        <div className="bg-slate-900 flex justify-center w-96 h-96 shadow-lg">
        <div>
        <h2 className='pl-6 pt-6 font-light leading-tight text-2xl mt-0 mb-2 text-pink-600'>Premium Plan</h2>
        <h1 className='pt-2 font-bold leading-tight text-5xl mt-0 mb-2 text-white'>50 USD</h1><p className='text-gray-400'>/month</p>
      <ul className="space-y-3 text-white list-disc marker:text-pink-600">
      <li>100 deploys per day</li>
      <li>5 TB of storage</li>
      <li>10 domains</li>
      <li>SSL certificates</li>  
      </ul>
      <br></br>
      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 border border-pink-700 rounded px-16 space-y-8">
      Get Started
      </button>
      </div>
        </div>
        <div className="bg-white flex opacity-0 w-60 h-1">
        </div>
  </div>
  <center>
  <p className='pt-16 text-slate-900'>"The way to get started is to quit talking and begin doing"</p>
      <p className='font-bold text-slate-900'>Walt Disney</p>
      </center>
    </main>
  )
}
