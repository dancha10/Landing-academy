import { FC, lazy, Suspense } from 'react'

import { Loader } from 'shared/ui/loader'

const MainPage = lazy(() => import('pages/main'))

export const App: FC = () => {
	return (
		<Suspense
			fallback={
				<div className='full'>
					<Loader />
				</div>
			}
		>
			<MainPage />
		</Suspense>
	)
}
