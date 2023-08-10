import {useState,useEffect} from 'react'
import './App.css'
//import QRCode from 'react-qr-code';
import QRCode from 'qrcode';
function App() {
  const [url, setUrl] = useState('hello world!')
  const [qr, setQr] = useState('')

  useEffect(() => {
  GenerateQRCode();
  }, [])
  
  const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 700,
			margin: 2,
			color: {
				dark: '#000000',
				light: '#FFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
      
		})
	}

  return (
    <div className="App">
    <h1 >QR CODE GENERATOR</h1>
    <input type="text"  placeholder='ex. google.com'  onChange={(e)=>{
      setUrl(e.target.value);
       GenerateQRCode();}}/>
    <button onClick={GenerateQRCode}>Generate</button>
{/* < QRCode value={url}/> */}
    {qr && <div className="">
    <img src={qr} alt="" width='350px' />
    <a href={qr} download='qr.png'><button>Download</button></a>
    </div>}
    </div>
  )
}

export default App
