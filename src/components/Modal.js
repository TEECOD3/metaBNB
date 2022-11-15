
import metamask from '../assets/metamaskfox.svg';
import wallet from '../assets/walletconnect.svg';
import x from '../assets/x.png';
import vector from '../assets/vector.png';




const Modal = ({ onClear }) => {
  return (
    <>
      <div className="backdrop" onClick={onClear} />
      <div
        className="modal"
      >
        <div className="head">
          <h3>Connect Wallet</h3>
          <img src={x} alt='close' onClick={onClear} />
        </div>
        <div className="details">
          <small>Choose your preferred wallet</small>
          <div className="wallet">
            <div className="side">
              <div className="meta">
                <img src={metamask} alt='metamask icon' />
                <p>Metamask</p>
              </div>
              <img src={vector} alt='vector' />
            </div>
            <div className="side">
              <div className="wal">
                <img src={wallet} alt='metamask icon' />
                <p>WalletConnect</p>
              </div>
              <img src={vector} alt='vector' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
