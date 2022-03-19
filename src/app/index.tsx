import { FC, lazy, Suspense } from 'react'

const MainPage = lazy(() => import('pages/main'))

export const App: FC = () => {
	return (
		<Suspense fallback={<p>Loading....</p>}>
			<MainPage />
		</Suspense>
	)
}
