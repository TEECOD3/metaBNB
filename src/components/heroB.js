import three from '../assets/threemeta.png';


const HeroB = () => {
  return (
    <div className="meta">
      <div className="wrapper">
        <div className="meta_details">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>
        <div className="images">
          <img src={three} alt='three nfts' />
        </div>
      </div>
    </div>
  );
};

export default HeroB;
