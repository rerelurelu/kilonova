import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
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
  const fcTitle = useColorModeValue('fc.title', 'fcDark.title');
  const fcMain = useColorModeValue('fc.main', 'fcDark.main');
  const borderColor = useColorModeValue('cyan.500', 'skyBlue.50');

  const toast = useToast();

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
        toast({
          title: 'Your message was sent successfully🥳',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        toast({
          title: 'An error has occurred.',
          description: 'Failed to send message🥲',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <Heading textAlign={'center'} mt={16} textColor={fcTitle}>
        Contact
      </Heading>
      <form onSubmit={handleSubmit(handleSendMessage)}>
        <Flex justify={'center'} textAlign={'center'}>
          <Box
            w={'3xl'}
            px={{ base: '4rem', sm: '3rem' }}
            borderRadius={'md'}
            mt={24}
            textColor={'cyan.500'}
          >
            <VStack spacing={12}>
              <FormControl isInvalid={!!errors.name}>
                <Input
                  type={'text'}
                  placeholder={'Name*'}
                  {...register('name', { required: true })}
                  borderColor={borderColor}
                  _hover={{ __hover: 'none' }}
                  _placeholder={{ color: fcMain }}
                />
                <FormErrorMessage>{errorMessages.nameError}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input
                  type={'text'}
                  placeholder={'Email*'}
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  borderColor={borderColor}
                  _hover={{ __hover: 'none' }}
                  _placeholder={{ color: fcMain }}
                />
                <FormErrorMessage>{errorMessages.emailError}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.subject}>
                <Input
                  type={'text'}
                  placeholder={'Subject*'}
                  {...register('subject', { required: true })}
                  borderColor={borderColor}
                  _hover={{ __hover: 'none' }}
                  _placeholder={{ color: fcMain }}
                />
                <FormErrorMessage>{errorMessages.subjectError}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.message}>
                <Textarea
                  placeholder={'Message*'}
                  rows={8}
                  {...register('message', { required: true })}
                  borderColor={borderColor}
                  _hover={{ __hover: 'none' }}
                  _placeholder={{ color: fcMain }}
                />
                <FormErrorMessage>{errorMessages.messageError}</FormErrorMessage>
              </FormControl>
            </VStack>
            <Button
              type={'submit'}
              title={'Send button'}
              w={'50%'}
              mt={16}
              py={6}
              bg={'teal.300'}
              textColor={'white'}
              disabled={isSubmitting}
            >
              SEND
            </Button>
          </Box>
        </Flex>
      </form>
    </>
  );
};

export default Contact;
