import { z } from 'zod';

export const formValidationScheme = z.object({
  name: z.string().nonempty('名前は入力必須です。'),
  email: z
    .string()
    .nonempty('メールアドレスは入力必須です。')
    .email('メールアドレスを正しく入力してください。'),
  message: z.string().nonempty('メッセージは入力必須です。'),
});
