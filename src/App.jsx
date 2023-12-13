import "./App.css"
import Header from "./components/Header/main"
import Footer from "./components/Footer/main"
import BodyContent from "./components"

function App() {
  return (
    <>
      <div className="bg-zinc-50">
        <Header />
        <BodyContent />
        <Footer />
      </div>
    </>
  )
}

export default App
