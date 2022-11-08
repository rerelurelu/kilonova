import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
// import style from '../../style/markdownTemplate.module.scss';

export const MarkdownTemplate: NextPage<any> = ({ content }) => {
  return (
    <>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};
