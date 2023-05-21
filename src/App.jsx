import Categories from "./components/Categories"
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
    </>
  )
}

export default App
