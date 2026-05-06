import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'

import App from './App'
import About from './pages/About'
import Blog from './pages/Blog'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import Disclaimer from './pages/Disclaimer'
import Contact from './pages/Contact'
import StrongPasswords from './pages/blog/StrongPasswords'
import WhatIsQrCode from './pages/blog/WhatIsQrCode'
import HowUrlShortenersWork from './pages/blog/HowUrlShortenersWork'
import Tools from './pages/Tools'
import ToolDetail from './pages/ToolDetail'
import ApiTestingGuide from './pages/blog/how-to-test-api-requests'
import SqlGuide from './pages/blog/sql-client-vs-database-gui'
import TimezoneGuide from './pages/blog/timezone-guide-for-remote-teams'
import ScreenRulerLayouts from './pages/blog/screen-ruler-web-layouts'
import TestDataGeneratorDevelopment from './pages/blog/test-data-generator-development'
import BrowserTextEditorWorkflows from './pages/blog/browser-text-editor-workflows'
import EntertainmentNumberTools from './pages/blog/entertainment-number-tools'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/how-to-create-strong-passwords" element={<StrongPasswords />} />
          <Route path="/blog/what-is-qr-code" element={<WhatIsQrCode />} />
          <Route path="/blog/how-url-shorteners-work" element={<HowUrlShortenersWork />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/:id" element={<ToolDetail />} />
          <Route path="/blog/how-to-test-api-requests" element={<ApiTestingGuide />} />
          <Route path="/blog/sql-client-vs-database-gui" element={<SqlGuide />} />
          <Route path="/blog/timezone-guide-for-remote-teams" element={<TimezoneGuide />} />
          <Route path="/blog/screen-ruler-web-layouts" element={<ScreenRulerLayouts />} />
          <Route path="/blog/test-data-generator-development" element={<TestDataGeneratorDevelopment />} />
          <Route path="/blog/browser-text-editor-workflows" element={<BrowserTextEditorWorkflows />} />
          <Route path="/blog/entertainment-number-tools" element={<EntertainmentNumberTools />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
