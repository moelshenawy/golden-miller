import './index.scss'
import { Navbar, Footer, Hero, IconsSection, About, Trending } from './../../components/';
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <IconsSection />
      <About />
      <Trending />
      <Footer />
    </>
  )
}

export default Home
