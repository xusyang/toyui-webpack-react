import './index.css'
import ReactDOM from 'react-dom/client'

const App = (props) => {
  console.log(props)
  return <div className="hello">hello world</div>
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App name="Hello World" />)
