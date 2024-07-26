'use client'

import axios from 'axios'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PulseLoader } from 'react-spinners'

import { Button } from '../ui/moving-border'
import Alert from './Alert'

interface FormInput {
	tel: string
	email: string
	message: string
}

export default function ContactForm() {
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)
	const [showButton, setShowButton] = useState(true)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInput>()
	const phoneRegex = /^(\+7|8|7|\+8)?(\d{10})?$/
	const botToken = `6908904529:AAGOcvUq1b3Uyos0g4UJtqwIDbUjEDqOw6I`
	const chatId = `-4211624380`

	const removeAlert = () => {
		setSuccess(false)
		setError(false)
	}

	const onSubmit = async (data: FormInput) => {
		try {
			setLoading(true)
			setShowButton(false)
			const response = await axios.post(
				`https://api.telegram.org/bot${botToken}/sendMessage`,
				{
					chat_id: chatId,
					text: `Name: ${data.tel}\nEmail: ${data.email}\nMessage: ${data.message}`,
				}
			)
			console.log('Message sent successfully:', response.data)
			setSuccess(true)
			reset()
		} catch (error) {
			setError(true)
			console.error('Failed to send message:', error)
		} finally {
			setLoading(false)
			setShowButton(true)
		}
	}

	return (
		<motion.div className='y-8 px-4 mx-auto max-w-screen-md pb-4'>
			<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white py-10 mx-auto max-w-screen-md'>
				Свяжитесь с нами
			</h2>
			<p className='mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
				Получите бесплатную консультацию!
			</p>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				{success && (
					<Alert
						bgColor={'bg-green-300'}
						icon={'✅'}
						status='Успешно!'
						message='Мы получили ваше сообщение😊'
						onClick={removeAlert}
					/>
				)}
				{error && (
					<Alert
						bgColor={'bg-red-300'}
						icon={'❎'}
						status='Ошибка!'
						message='Что то пошло не так. Повторите попытку позже😢'
						onClick={removeAlert}
					/>
				)}

				<div className='flex flex-col gap-4 text-sm md:text-base'>
					<label
						htmlFor='tel'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Ваш номер телефона
					</label>
					<input
						type='tel'
						id='tel'
						{...register('tel', {
							required: 'Пожалуйста введите ваш номер телефона',
							pattern: {
								value: phoneRegex,
								message: 'Введите корректный номер телефона',
							},
						})}
						name='tel'
						placeholder='+7-(123)-(456-78-90)'
						className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
					/>
					{errors.tel && (
						<span className='text-red-500'>{errors.tel.message}</span>
					)}
					<label
						htmlFor='subject'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
					>
						Ваша почта
					</label>
					<input
						type='email'
						id='email'
						{...register('email', {
							required: 'Пожалуйста введите вашу почту',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Пожалуйста используйте формат: example@example.com',
							},
						})}
						aria-invalid={errors.email ? 'true' : 'false'}
						name='email'
						placeholder='Ваш email'
						className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
					/>
					{errors.email && (
						<span className='text-red-500'>{errors.email.message}</span>
					)}
					<label
						htmlFor='message'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
					>
						Ваше сообщение
					</label>
					<textarea
						id='message'
						{...register('message', {
							required: 'Пожалуйста введите ваше сообщение',
						})}
						placeholder='Ваше сообщение'
						className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
						rows={4}
					/>
					{errors.message && (
						<span className='text-red-500'>{errors.message.message}</span>
					)}

					{showButton && (
						<div className='flex items-center justify-center mb-6'>
							<Button
								type='submit'
								borderRadius='1.75rem'
								className='bg-transparent dark:bg-slate-900 border-2 text-white dark:text-white border-[#add7ff] dark:border-slate-800 hover:border-sky-100 hover:transition-colors hover:duration-400 flex items-center justify-center m-auto'
							>
								Отправить
							</Button>
						</div>
					)}

					{loading && (
						<div className='flex justify-center'>
							<PulseLoader size={15} color={`#1e1b4b`} speedMultiplier={0.5} />
						</div>
					)}
				</div>
			</form>
		</motion.div>
	)
}
