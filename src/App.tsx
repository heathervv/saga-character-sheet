import { ContentManagerProvider } from './contexts/ContentManager/Provider'
import { ThemeManagerProvider } from './contexts/ThemeManager/Provider'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <ThemeManagerProvider>
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
    </ThemeManagerProvider>
  )
}

export default App
