'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PulseLoader } from 'react-spinners'
import * as yup from 'yup'

import { Button } from '../ui/moving-border'
import Alert from './Alert'

const schema = yup.object().shape({
	fullname: yup.string().required('Пожалуйста введите ваше имя'),
	tel: yup
		.string()
		.required('Пожалуйста введите ваш номер телефона')
		.matches(/^(\+7|8)\d{10}$/, 'Введите корректный номер телефона'),
	email: yup
		.string()
		.required('Пожалуйста введите вашу почту')
		.email('Пожалуйста используйте формат: example@example.com'),
	message: yup.string().required('Пожалуйста введите ваше сообщение'),
})

interface FormInput {
	fullname: string
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
	} = useForm<FormInput>({
		resolver: yupResolver(schema),
	})

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
					text: `Имя: ${data.fullname}\nТелефон: ${data.tel}\nПочта: ${data.email}\nСообщение: ${data.message}`,
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
		<motion.div className='y-8 px-4 mx-auto max-w-screen-md pb-4 select-none'>
			<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white py-10 mx-auto max-w-screen-md'>
				Свяжитесь с нами
			</h2>
			<p className='mb-8 lg:mb-10 font-light text-center text-white dark:text-gray-400 sm:text-xl'>
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
						message='Что-то пошло не так. Повторите попытку позже😢'
						onClick={removeAlert}
					/>
				)}

				<div className='flex flex-col gap-4 text-sm md:text-base'>
					<div className='relative'>
						<input
							type='text'
							id='fullname'
							{...register('fullname')}
							name='fullname'
							placeholder=' '
							className='block w-full px-2.5 pb-2.5 pt-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-0 focus:border-primary-500 peer'
						/>
						<label
							htmlFor='fullname'
							className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75  top-4 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
						>
							Ваше имя
						</label>
						{errors.fullname && (
							<span className='text-red-500'>{errors.fullname.message}</span>
						)}
					</div>
					<div className='relative'>
						<input
							type='tel'
							maxLength={11}
							id='tel'
							{...register('tel')}
							name='tel'
							placeholder=' '
							className='block w-full px-2.5 pb-2.5 pt-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-0 focus:border-primary-500 peer'
						/>
						<label
							htmlFor='tel'
							className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75  top-4 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
						>
							Ваш номер телефона
						</label>
						{errors.tel && (
							<span className='text-red-500'>{errors.tel.message}</span>
						)}
					</div>
					<div className='relative'>
						<input
							type='email'
							id='email'
							{...register('email')}
							aria-invalid={errors.email ? 'true' : 'false'}
							name='email'
							placeholder=' '
							className='block w-full px-2.5 pb-2.5 pt-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-0 focus:border-primary-500 peer'
						/>
						<label
							htmlFor='email'
							className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
						>
							Ваша почта
						</label>
						{errors.email && (
							<span className='text-red-500'>{errors.email.message}</span>
						)}
					</div>
					<div className='relative'>
						<textarea
							id='message'
							{...register('message')}
							placeholder=' '
							className='block w-full px-2.5 pb-2.5 pt-8 sm:pt-4 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-0 focus:border-primary-500 peer'
							rows={4}
						/>
						<label
							htmlFor='message'
							className='absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75  top-4 z-10 origin-[0] bg-gray-50 px-2 peer-focus:px-2 peer-focus:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
						>
							Краткое описание проекта (цели, задачи)
						</label>
						{errors.message && (
							<span className='text-red-500'>{errors.message.message}</span>
						)}

						{showButton && (
							<div className='flex items-center justify-center my-6'>
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
								<PulseLoader
									size={15}
									color={`#1e1b4b`}
									speedMultiplier={0.5}
								/>
							</div>
						)}
					</div>
				</div>
			</form>
		</motion.div>
	)
}
