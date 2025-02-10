import './App.css'
import { DisplayThumbnail } from './Thumbnail/Thumbnail'


function App() {
  //const [count, setCount] = useState(0)

  return (   
       <div>
            <h1 className = 'logo'>React Photo Viewer</h1>
            <DisplayThumbnail/>
        </div>
   
  )
}

export default App
