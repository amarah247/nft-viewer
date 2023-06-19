import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTokens } from '@reservoir0x/reservoir-kit-ui';

const nftList = [
  { contract_id: '0x1f81520596ba9ae2b0e93fa0d63742781820b7a2', token_id: '2'},
  { contract_id: '0x37a03d4af1d7046d1126987b20117a0fdcbf6535', token_id: '882'},
  { contract_id: '0x4e171e0f14a9046e14b93221f31acd2ec4af8429', token_id: '217'},
  { contract_id: '0x127eb7b87cbb33ade80961eb026996109a936a35', token_id: '6'},
  { contract_id: '0x15bf7610a7d50541e865efa3adad434147a4e1a9', token_id: '0'},
  { contract_id: '0x6d74b47e6a8830ea7691e499ff5511ddd070d444', token_id: '2'},
  { contract_id: '0xfd09eb152263488dc5e4654d9f91f0aebee45423', token_id: '239'},
  { contract_id: '0x6493a47ebd7e223c604f522c49fc858f42a93cbe', token_id: '2'},
  { contract_id: '0xb74c9f1eccddefbef7c017b97bd3a2f24a0081f8', token_id: '66'},
  { contract_id: '0x123958421d9b61815bce5a30a7d84a798336bb7f', token_id: '593'},
  { contract_id: '0x093c6e9920d7e2bde973e4e37ed8523f30e98533', token_id: '21'},
  { contract_id: '0x5c685a3ebc751f36b2123c25f5c464d3b9964afc', token_id: '340'}
]

const NFTViewer = () => {
  const [nfts, setNFTs] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {


        // const concatenatedString = nftList.map(({ contract_id, token_id }) => `tokens=${contract_id}:${token_id}&`).join('');

        // console.log(concatenatedString);

        const nftListTokens = nftList.map(({ contract_id, token_id }) => `${contract_id}:${token_id}`);

        const response = await axios.get(
          'https://api.reservoir.tools/tokens/v6?${query}',
          {
            headers: {
              Authorization: `Bearer 58093e0a-06fe-5d00-8c48-bcbd29dae3d0`,
            },
            params: {
                tokens:nftListTokens
              
            }
          }
        );

        setNFTs(response.data.tokens);
        console.log(typeof(nfts))
        console.log(response.data.tokens)
      } catch (error) {
        console.error('Error fetching NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div className="nft-list">
      <div className="nft-grid">
      {nfts.map((nft, index) => (
        <div className="nft-card" key={getNFTKey(nft, index)}>
            <div className="nft-image">
              <img src={nft.token.image} alt={nft.token.name} />
            </div>
            <div className="nft-details">
              <h1 className="nft-name">{nft.token.name}</h1>
              <div className="nft-info">
                <p className="nft-info-item">Last Sale Price:</p>
                <p>{nft.token.lastSale? nft.token.lastSale.price.amount.decimal : 0}</p>
              </div>
              <div className="nft-info">
                <p className="nft-info-item">Floor Ask:</p>
                <p>{nft.market.floorAsk.id? nft.market.floorAsk.price.amount.decimal : 0}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

const getNFTKey = (nft, index) => {

  console.log(nft.market.floorAsk, index)
  if (nft && nft.token.contract && nft.token.tokenId) {
    console.log('1', `${nft.token.contract}-${nft.token.tokenId}` )
    return `${nft.token.contract}-${nft.token.tokenId}`;
  }
  console.log('2', `nft-${index}` )
  return `nft-${index}`;
};

export default NFTViewer;
