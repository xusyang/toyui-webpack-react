import ReactDOM from 'react-dom/client'
import Home from './home'
import './index.css'

const App = (props) => {
  console.log(props)
  return (
    <>
      <Home />
      <div className="hello">hello world</div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App name="Hello World" />)
