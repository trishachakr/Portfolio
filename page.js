import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import ProjectsCard from './components/ProjectsCard'

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-[#040104]">
   <div class="container mx-auto px-12 py-4">  
   <HeroSection/> 
   
   <Projects/>

   <ProjectsCard/>
   </div>
  </main>
  )
}