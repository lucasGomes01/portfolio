import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import App from './App.tsx'
import { clarity } from 'react-microsoft-clarity';

const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;
if (clarityProjectId) {
  clarity.init(clarityProjectId);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
