import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'
import { Children } from 'react'

export const metadata = {
    title: "Promptopia",
    description: "Discover $ share AI Prompts"
}

function RootLayout({children}) {
  const [cout  ,setCout] = useState(0)
  return (
    <html lang='en'>
        <body>
            <div className='main'>
               <div className='gradient'/>
            </div>

            <main className='app'>
              <Nav/>
              
                 {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout