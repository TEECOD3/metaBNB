
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';


const Hero = () => {
  return (
    <div
      className="hero"
      initial='initial'
      animate='animate'
    >
      <div className='hero_details'>
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{' '}
          <span>Metaverse</span>
        </h1>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="search">
          <label htmlFor='search'>Search</label>
          <input
            type='text'
            name='search'
            placeholder='Search for a location'
          />
        </div>
      </div>
      <div className="images">
        <div className="top">
          <img src={hero1} alt='hero_image' />
          <img src={hero2} alt='hero_image' />
        </div>
        <div className="bottom">
          <img src={hero3} alt='hero_image' />
          <img src={hero4} alt='hero_image' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
