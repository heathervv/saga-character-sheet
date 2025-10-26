import { useEffect } from 'react'
import { ContentManagerProvider } from './contexts/ContentManager/Provider'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  // Set theme to dark mode based on system settings
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('html')?.setAttribute('data-theme', 'dracula');
    }
  }, [])

  return (
    <ContentManagerProvider>
      <main className="bg-base-200 h-screen p-4">
        <Header />
        <div className="flex gap-4">
          <Sidebar />
          <Content className="flex-1" />
        </div>
        <Footer />
      </main>
    </ContentManagerProvider>
  )
}

export default App
