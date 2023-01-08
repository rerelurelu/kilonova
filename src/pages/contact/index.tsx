import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';
import { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Toaster, toast } from 'react-hot-toast';

import RootLayout from '@/components/layout';
import { CONTACT } from '@/const/seo';
import { FormInputs } from '@/types/formInputs';

const errorMessages = {
  nameError: 'Name is required.',
  emailError: 'Email is required.',
  messageError: 'Message is required.',
};

const sendMessage = {
  success: 'Your message was sent successfully🥳',
  error: 'Failed to send message🥲',
};

const textInputContents = [
  { label: 'Name*', placeholder: 'Your Name' },
  { label: 'Email*', placeholder: 'Your Email' },
];

const textAreaContent = { label: 'Message*', placeholder: 'Message' };

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleSendMessage: SubmitHandler<FormInputs> = (data: FormInputs) => {
    const formData = new FormData();

    for (let field in data) {
      let key: keyof FormInputs = field;
      formData.append(field, data[key]);
    }

    axios({
      method: 'post',
      url: process.env.NEXT_PUBLIC_FORM_ENDPOINT,
      data: formData,
    })
      .then(() => {
        reset();
        toast.success(sendMessage.success, {
          style: {
            border: '1px solid #4DD0E1',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      })
      .catch(() => {
        toast.error(sendMessage.error, {
          style: {
            border: '1px solid #4DD0E1',
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      });
  };

  return (
    <RootLayout title={CONTACT.TITLE} description={CONTACT.DESCRIPTION}>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
      <header className='m-header md:m-header-md'>
        <h1 className='text-center text-4xl font-normal tracking-widest text-white'>
          {CONTACT.TITLE}
        </h1>
      </header>
      <form onSubmit={handleSubmit(handleSendMessage)}>
        <div className='mt-16 grid w-full place-items-center gap-10 pb-40'>
          <div className='form-control w-full max-w-xl'>
            <label className='label'>
              <span className='label-text text-base antialiased'>{textInputContents[0].label}</span>
            </label>
            <input
              type='text'
              placeholder={textInputContents[0].placeholder}
              className='input-bordered input-secondary input w-full max-w-xl text-lg placeholder:text-slate-600 focus:border-violet-600'
              {...register('name', { required: errorMessages.nameError })}
            />
            <ErrorMessage errors={errors} name='name' as='p' className='mt-3 text-red-400' />
          </div>
          <div className='form-control w-full max-w-xl'>
            <label className='label'>
              <span className='label-text text-base antialiased'>{textInputContents[1].label}</span>
            </label>
            <input
              type='email'
              placeholder={textInputContents[1].placeholder}
              className='input-bordered input-secondary input w-full max-w-xl text-lg placeholder:text-slate-600 focus:border-violet-600'
              {...register('email', { required: errorMessages.emailError })}
            />
            <ErrorMessage errors={errors} name='email' as='p' className='mt-3 text-red-400' />
          </div>
          <div className='form-control w-full max-w-xl'>
            <label className='label'>
              <span className='label-text text-base antialiased'>{textAreaContent.label}</span>
            </label>
            <textarea
              className='textarea-bordered textarea-secondary textarea max-w-xl text-lg placeholder:text-slate-600 focus:border-violet-600'
              placeholder={textAreaContent.placeholder}
              rows={10}
              {...register('message', { required: errorMessages.messageError })}
            />
            <ErrorMessage errors={errors} name='message' as='p' className='mt-3 text-red-400' />
          </div>
          <button
            type='submit'
            className='btn mt-10 w-full max-w-sm bg-fuchsia-400 text-lg font-medium'
          >
            SEND
          </button>
        </div>
      </form>
    </RootLayout>
  );
};

export default Contact;
