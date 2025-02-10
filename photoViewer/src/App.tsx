import './App.css'
import { DisplayThumbnail } from './Thumbnail/Thumbnail'


function App() {
  //const [count, setCount] = useState(0)

  return (   
       <div>
            <h1 className = 'logo'>React Photo Viewer</h1>
            <DisplayThumbnail src={"https://th.bing.com/th/id/OIP.Qcy1dh_eWTUTzZ7i8Ge34gHaEK?rs=1&pid=ImgDetMain"}/>
        </div>
   
  )
}

export default App
