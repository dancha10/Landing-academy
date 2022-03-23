import { Types } from 'shared/lib'

import buba from './buba.jpg'
import Jinx from './jinx.jpg'

export const userReviews: Array<Types.IUserReview> = [
	{
		avatar: buba,
		fullName: 'Буба Бубенцов',
		dateOfPost: '08.01.2022',
		review:
			'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.',
	},
	{
		fullName: 'Илья Анташкевич',
		dateOfPost: '08.01.2022',
		review:
			'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.',
	},
	{
		avatar:
			'https://sun9-83.userapi.com/impf/gonC36bbXRsqLe4pD7G6cUy2SlEhAn2HUe5YRA/IRJFOQNDwjU.jpg?size=1620x2160&quality=96&sign=f4576b7a1b58c2980239d42e04240900&type=album',
		fullName: 'Брах Брахич',
		dateOfPost: '20.03.2022',
		review:
			'Поцан к успеху шел - не фортануло. Решил попробовать снова, посмотрим что получится. Надеюсь все будет крутяк !!!',
	},
	{
		avatar: Jinx,
		fullName: 'Джинкс Ваевна',
		dateOfPost: '22.03.2022',
		review:
			'Щас вернусь. Никому не умирать, пока я не разрешу! Мне так хочется тут все взоРРРРВать бубух фуфу бух',
	},
]
