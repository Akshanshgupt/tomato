import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProvider } from './context/AppContext.tsx';
import 'leaflet/dist/leaflet.css';
import { SocketProvider } from './context/SocketContext.tsx';

 export const authService = "https://tomato-auth-latest-0s55.onrender.com"
 export const restaurantService = "https://restaurant-service-latest-kwdx.onrender.com"
 export const utilsService = "https://utils-service-latest-q99u.onrender.com"
  export const realtimeService = "https://realtime-service-latest-61oq.onrender.com"
export const riderService = "https://rider-service-latest-t6j7.onrender.com"

export const adminService = "https://admin-service-latest-tirb.onrender.com"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="846068620275-ch400a4cjjbqqvqvk1im169o0u1s96aq.apps.googleusercontent.com">
      <AppProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
        
      </AppProvider>
  
</GoogleOAuthProvider>
   
  </StrictMode>,
)
