import { ContentManagerProvider } from './contexts/ContentManager/Provider'
import { ThemeManagerProvider } from './contexts/ThemeManager/Provider'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

const App = () => {
  return (
    <ThemeManagerProvider>
      <ContentManagerProvider>
        <main className="bg-base-200 min-h-screen p-4">
          <Header />
          <div className="flex flex-col lg:flex-row gap-4 lg:items-start">
            <Sidebar />
            <Content className="flex-1 p-4" />
          </div>
        </main>
      </ContentManagerProvider>
    </ThemeManagerProvider>
  )
}

export default App
