import { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import Modal from "./Modal";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const clearModal = () => {
    setModal(null);
  };

  return (
    <>
      {modal && <Modal onClear={clearModal} />}
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="desktop">
          <nav className="nav_bar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/place">Place to stay</Link>
              </li>
              <li>
                <Link to="/">NFTs</Link>
              </li>
              <li>
                <Link to="/">Community</Link>
              </li>
            </ul>
          </nav>
        </div>
        <button
          className="desktop_btn"
          onClick={() => {
            setModal((prevState) => !prevState);
          }}
        >
          Connect wallet
        </button>
        <div className="mobile">
          {toggleMenu ? (
            <FiX
              className="icon"
              onClick={() => {
                setToggleMenu((prevState) => !prevState);
              }}
            />
          ) : (
            <FiAlignJustify
              className="icon"
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <nav className="nav_bar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/place">Place to stay</Link>
                </li>
                <li>
                  <Link to="/">NFTs</Link>
                </li>
                <li>
                  <Link to="/">Community</Link>
                </li>
              </ul>
              <button
                className="mobile_btn"
                onClick={() => {
                  setModal(true);
                }}
              >
                Connect wallet
              </button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
