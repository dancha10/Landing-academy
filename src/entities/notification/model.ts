import { createEvent, createStore, sample } from 'effector'
import { debounce } from 'patronum/debounce'

export const notificationClosed = createEvent<boolean>()
export const $isActiveNotification = createStore(false).on(notificationClosed, (_, state) => state)

export const resetTypeNotify = createEvent()
export const setTypeNotify = createEvent<'success' | 'error'>()
export const $typeNotify = createStore<Array<'success' | 'error'>>([])
	.on(setTypeNotify, (array, notify) => [notify])
	.reset(resetTypeNotify)

export const debouncedResetArray = debounce({
	source: resetTypeNotify,
	timeout: 300,
})

sample({
	clock: resetTypeNotify,
	fn: () => false,
	target: notificationClosed,
})
