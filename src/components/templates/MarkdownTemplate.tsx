import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import style from '../../style/markdown.module.scss';

export const MarkdownTemplate: NextPage<any> = ({ content }) => {
  return (
    <>
      <ReactMarkdown className={style.markdown}>{content}</ReactMarkdown>;
    </>
  );
};
