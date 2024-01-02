/* sections import */
import Hero from '@/components/sections/hero/Hero'
import Features from '@/components/sections/features/Features'
import HowItWorks from '@/components/sections/howItWorks/HowItWorks'
import Benchmarking from '@/components/sections/benchmarking/Benchmarking'
import Testimonials from '@/components/sections/testimonials/Testimonials'
import Mentors from '@/components/sections/mentors/Mentors'
import Mentorship from '@/components/sections/mentorship/Mentorship'
import Guru from '@/components/sections/Guru'
import Smartmoney from '@/components/sections/Smartmoney'
import Cookies from '@/components/Cookies'

export default () => {
  return (
    <div>
      <Cookies/>
      <Hero/>
      <main>
        <Features/>
        <HowItWorks/>
        <Benchmarking />
        <Testimonials />
        <Mentors/>
        <Mentorship/>
        <Guru/>
        <Smartmoney/>
      </main>
    </div>
  )
}
