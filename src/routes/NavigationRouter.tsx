import { Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import Sidebar from "@/components/Sidebar"
import { routes } from "./routes"
import { TodoProvider } from "../todo/context/Todo.provider"

const NavigationRouter = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<BrowserRouter>
				<div className='flex gap-3'>
					<Sidebar
						navItems={routes.map(({ name, to: path }) => ({ name, path }))}
					/>

					<TodoProvider>
						<Routes>
							{routes.map(({ to, path, Component }) => (
								<Route key={to} path={path} element={<Component />} />
							))}

							<Route
								path='/*'
								element={<Navigate to={routes[0].to} replace />}
							/>
						</Routes>
					</TodoProvider>
				</div>
			</BrowserRouter>
		</Suspense>
	)
}

export default NavigationRouter
