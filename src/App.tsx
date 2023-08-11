
import { useRoutes } from "react-router-dom"
import routerlist from "./router/index.jsx"
import "./App.css"
function App() {
  const outleft = useRoutes(routerlist)
  return (
    <>
      <div>{ outleft }</div>
    </>
  )
}
export default App
