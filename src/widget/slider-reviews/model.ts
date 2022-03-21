import { createStore } from 'effector'

import { IUserReview, userReviews } from './lib/mocha'

export const $userReviews = createStore<Array<IUserReview>>(userReviews)
