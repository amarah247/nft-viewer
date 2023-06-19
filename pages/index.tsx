import Link from 'next/link';
import NFTViewer from './nfts';
import Header from './header';

const HomePage = () => {
  return (
    <div>
      <Header/>
      <NFTViewer/>
    </div>
  );
};

export default HomePage;
