import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { ClerkProvider } from '@clerk/clerk-react'


const clerk_key = import.meta.env.VITE_CLERK_KEY

console.log(clerk_key)
if(!clerk_key){
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_key}>
      <App />
      </ClerkProvider>
  </StrictMode>,
)
