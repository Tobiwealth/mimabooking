import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] md:grid grid-cols-[15rem,1fr] w-screen">
      <Sidebar/>
      <Main/>
    </main>
  )
}
