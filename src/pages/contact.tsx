import axios from 'axios';
import { NextPage } from 'next';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from '../types/formInputs';

const errorMessages = {
  nameError: 'Name is required.',
  emailError: 'Email is required.',
  subjectError: 'Subject is required.',
  messageError: 'Message is required.',
};

const Contact: NextPage = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const handleSendMessage: SubmitHandler<FormInputs> = (data: FormInputs) => {
    setIsSubmitting(true);
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
        setIsSubmitting(false);
      })
      .catch(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit(handleSendMessage)}></form>
    </>
  );
};

export default Contact;
