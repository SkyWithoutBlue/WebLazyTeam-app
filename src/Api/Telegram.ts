const baseUrl =
	'https://api.telegram.org/bot7305129524:AAGwFfeJUHHBiEdLGKvUhJjWVlLq0VI5f_E/getUpdates'

const sendMessage = async (message: string): Promise<void> => {
	const url: string = `${baseUrl}sendMessage?chat_id=-4242286840&text=${message}`
	const response: Response = await fetch(url)

	console.log('response:', response)
}
