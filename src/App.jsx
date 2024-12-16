// UTILITY
// import 'bootstrap/dist/css/bootstrap.min.css'


// CONTEXTS
import { GlobalContextProvider } from "./contexts/GlobalContext";


// PAGES
import HomePage from "./pages/HomePage";


// COMPONENT EXPORT

function App() {
  return (
    <>
      <GlobalContextProvider>
        <HomePage />
      </GlobalContextProvider>
    </>
  )
}

export default App
