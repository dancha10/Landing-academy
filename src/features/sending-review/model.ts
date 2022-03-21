import { createEvent } from 'effector'

import { Types } from 'shared/lib'

export const localeDateString = () => new Date().toLocaleDateString().replaceAll('/', '.')

export const sentReview = createEvent<Types.IUserReview>()
