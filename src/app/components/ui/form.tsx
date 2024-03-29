'use client';

import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { formValidationSchema } from '@/features/common/formValidationSchema';
import { FormInputs } from '@/types/formInputs';

const sendMessageType = {
  success: 'メッセージの送信に成功しました🥳',
  error: 'メッセージの送信に失敗しました🥲',
};

type sendMessageType = (typeof sendMessageType)[keyof typeof sendMessageType];
type Sending = {
  isDisabled: boolean;
  buttonLabel: string;
};

const inputContentType = {
  name: { label: 'Name*', placeholder: 'Your Name' },
  email: { label: 'Email*', placeholder: 'Your Email' },
  message: { label: 'Message*', placeholder: 'Message' },
};

type inputContentType = (typeof inputContentType)[keyof typeof inputContentType];

export const Form = () => {
  const initialSendingState: Sending = {
    isDisabled: false,
    buttonLabel: 'SEND',
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: 'onBlur',
    resolver: zodResolver(formValidationSchema),
  });

  const [sendingState, setSendingState] = useState<Sending>(initialSendingState);

  const handleSendMessage: SubmitHandler<FormInputs> = (data: FormInputs) => {
    setSendingState({ isDisabled: true, buttonLabel: 'SENDING...' });
    const formData = new FormData();

    for (let field in data) {
      let key: keyof FormInputs = field;
      formData.append(field, data[key]);
    }

    fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT!, {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        reset();
        toast.success(sendMessageType.success, {
          style: {
            border: '1px solid #4DD0E1',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .catch(() => {
        toast.error(sendMessageType.error, {
          style: {
            border: '1px solid #4DD0E1',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .finally(() => {
        setSendingState(initialSendingState);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleSendMessage)}>
      <div className='mt-16 grid w-full place-items-center gap-10 pb-40'>
        <div className='form-control w-full max-w-xl'>
          <label className='label'>
            <span className='label-text text-base antialiased'>{inputContentType.name.label}</span>
          </label>
          <input
            type='text'
            placeholder={inputContentType.name.placeholder}
            className='input-bordered input-secondary input w-full max-w-xl text-lg placeholder:text-slate-600 focus:border-violet-600'
            {...register('name')}
          />
          <ErrorMessage errors={errors} name='name' as='p' className='mt-3 text-red-400' />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label'>
            <span className='label-text text-base antialiased'>{inputContentType.email.label}</span>
          </label>
          <input
            type='email'
            placeholder={inputContentType.email.placeholder}
            className='input-bordered input-secondary input w-full max-w-xl text-lg placeholder:text-slate-600 focus:border-violet-600'
            {...register('email')}
          />
          <ErrorMessage errors={errors} name='email' as='p' className='mt-3 text-red-400' />
        </div>
        <div className='form-control w-full max-w-xl'>
          <label className='label'>
            <span className='label-text text-base antialiased'>
              {inputContentType.message.label}
            </span>
          </label>
          <textarea
            className='textarea-bordered textarea-secondary textarea max-w-xl text-lg placeholder:text-slate-600 focus:border-violet-600'
            placeholder={inputContentType.message.placeholder}
            rows={10}
            {...register('message')}
          />
          <ErrorMessage errors={errors} name='message' as='p' className='mt-3 text-red-400' />
        </div>
        <button
          type='submit'
          className='btn mt-10 w-full max-w-sm bg-fuchsia-400 text-lg font-medium'
          disabled={sendingState.isDisabled}
        >
          {sendingState.buttonLabel}
        </button>
      </div>
    </form>
  );
};
