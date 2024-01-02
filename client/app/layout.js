import { Inter } from 'next/font/google'
import './globals.css'

import FiveImg from './Assets/child.jpeg';
const inter = Inter({ subsets: ['latin'] })

// import start here 

import Navbar from './components/navbar/Navbar';
import ResNavbar from './components/navbar/ResNav';
import Footer from './components/footer/Footer';

export const metadata = {
  title: 'Smart Village Revolution',
  description: 'Smart Village Revolution at K L Deemed to be University is a rural development programme broadly focusing upon the development in the villages which includes social development, cultural development and spread motivation among the people on social mobilization of the village community. The programme was launched by the President of KLEF, Hon\'ble Shri Koneru Lakshmaiah on the birth anniversary of Jayaprakash Narayan, on 11 October 2014.'
}

export default function RootLayout({ children }) {
  return (
      <html>
          <body className={inter.className}
          // style={{
          //   backgroundImage: `url(${FiveImg.src})`,
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundAttachment: "fixed"
          // }}
          >
            <div className="Navbar">
              <Navbar/>
            </div>
            <div className="Navbar-Res">
              <ResNavbar/>
            </div>
        {children}
            <div className="Footer">
              <Footer/>
            </div>
        </body>
    </html>
  )
}
