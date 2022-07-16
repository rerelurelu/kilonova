import type { NextPage } from 'next';
import MyHead from '../components/MyHead';

const TITLE = 'Blog';

const Home: NextPage = () => {
  return <MyHead title={TITLE} />;
};

export default Home;
