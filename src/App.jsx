import ButtonAcheteretvendre from "./components/ButtonAcheteretvendre"
import Categories from "./components/Categories"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Search from "./components/Search"
import Slideshow from "./components/Slideshow"

function App() {
  return (
    <>
      <NavBar />
      <Search />
      {/* <Carouseel /> */}
      <Slideshow title='Featured' />
      <Slideshow title='latestPost' />
      <Categories />
      <ButtonAcheteretvendre/>
      <Footer />
    </>
  )
}

export default App
