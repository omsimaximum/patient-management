'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import CustomFormField from '../ui/CustomFormField';
import SubmitButton from '../ui/SubmitButton';
import { useState } from 'react';
import { UserFormValidation } from '@/lib/validation';

export enum FormFieldType {
	INPUT = 'input',
	TEXTAREA = 'textarea',
	PHONE_INPUT = 'phoneInput',
	CHECKBOX = 'checkbox',
	DATE_PICKER = 'datePicker',
	SELECT = 'select',
	SKELETON = 'skeleton',
}

export function PatientForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof UserFormValidation>>({
		resolver: zodResolver(UserFormValidation),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
		},
	});

	function onSubmit(values: z.infer<typeof UserFormValidation>) {}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='flex-1 space-y-6'>
				<section className='mb-12 space-y-4'>
					<h1 className='header'>Hi There 👋</h1>
					<p>Schedule your first appointment.</p>
				</section>

				<CustomFormField
					control={form.control}
					fieldType={FormFieldType.INPUT}
					name='name'
					label='Full name'
					placeholder='John Doe'
					iconSrc='/assets/icons/user.svg'
					iconAlt='user'
				/>

				<CustomFormField
					fieldType={FormFieldType.INPUT}
					control={form.control}
					name='email'
					label='Email'
					placeholder='johndoe@gmail.com'
					iconSrc='/assets/icons/email.svg'
					iconAlt='email'
				/>

				<CustomFormField fieldType={FormFieldType.PHONE_INPUT} control={form.control} name='phone' label='Phone number' placeholder='(555) 123-4567' />

				<SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
			</form>
		</Form>
	);
}
