import "./App.css"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NavigationRouter from '@/routes/NavigationRouter'

const queryClient = new QueryClient()

function App() {
	return (
		<>
      <QueryClientProvider client={queryClient}>
        <NavigationRouter />
      </QueryClientProvider>
    </>
	)
}

export default App
