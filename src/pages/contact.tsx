import axios from 'axios';
import { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FormInputs } from 'types/formInputs';
import { Toaster, toast } from 'react-hot-toast';

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
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
      <h1 className="pt-36 text-center text-5xl">Contact</h1>
      <form onSubmit={handleSubmit(handleSendMessage)}>
        <div className="grid place-items-center gap-10 w-full mt-16 pb-40">
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-lg">{textInputContents[0].label}</span>
            </label>
            <input
              type="text"
              placeholder={textInputContents[0].placeholder}
              className="input input-bordered w-full max-w-xl input-secondary text-lg placeholder:text-slate-600 focus:border-violet-600"
              {...register('name', { required: errorMessages.nameError })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              as="p"
              className="mt-3 text-red-400"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-lg">{textInputContents[1].label}</span>
            </label>
            <input
              type="email"
              placeholder={textInputContents[1].placeholder}
              className="input input-bordered w-full max-w-xl input-secondary text-lg placeholder:text-slate-600 focus:border-violet-600"
              {...register('email', { required: errorMessages.emailError })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              as="p"
              className="mt-3 text-red-400"
            />
          </div>
          <div className="form-control w-full max-w-xl">
            <label className="label">
              <span className="label-text text-lg">{textAreaContent.label}</span>
            </label>
            <textarea
              className="textarea textarea-bordered max-w-xl textarea-secondary text-lg placeholder:text-slate-600 focus:border-violet-600"
              placeholder={textAreaContent.placeholder}
              rows={10}
              {...register('message', { required: errorMessages.messageError })}
            />
            <ErrorMessage
              errors={errors}
              name="message"
              as="p"
              className="mt-3 text-red-400"
            />
          </div>
          <button type="submit" className="w-full mt-10 btn btn-primary max-w-sm text-lg font-medium">
            SEND
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
