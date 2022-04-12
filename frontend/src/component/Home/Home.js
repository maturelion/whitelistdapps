import React, { useEffect } from "react";
import "./Home.css";
import Logo from "../../assets/workflow-mark-blue-600.d63b0a2169dfafd9d1c0346519fec5a0.svg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "NFTCHAINSPAD";
  });
  return (
    <>
      <nav className="home-nav">
        <span>
          <img src={Logo} alt="logo" height="50" width="50" />{" "}
          <h1 className="logo-text">NFT WALLET CHAINS PAD</h1>
        </span>
      </nav>
      <main className="home-main">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingInline: "20px",
          }}
        >
          <img src={Logo} alt="logo" height="100" width="100" />
          <p style={{ textAlign: "center", fontWeight: 300, fontSize: 19 }}>
            <a className="p-link" href="/">
              NFT Wallet Chains Pad
            </a>
            . is an open source protocol for connecting decentralized
            applications to mobile wallets with QR code scanning or deep
            linking. A user can interact securely with any Dapp from their
            mobile phone, making WalletConnect wallets a safer choice compared
            to desktop or browser extension wallets.
          </p>

          <Link className="home-button-link" to="/wallets">
            <button className="home-button">Staking</button>
          </Link>

          <Link className="home-button-link" to="/wallets">
            <button className="home-button">Rectification</button>
          </Link>

          <Link className="home-button-link" to="/wallets">
            <button className="home-button">Whitelist</button>
          </Link>

          <Link className="home-button-link" to="/wallets">
            <button className="home-button">Reveal</button>
          </Link>

          <Link className="home-button-link" to="/wallets">
            <button className="home-button">Validation</button>
          </Link>

          <Link className="home-button-link" to="/wallets">
            <button className="home-button">Recovery</button>
          </Link>

          <Link className="home-button-link" to="/wallets">
            <button className="home-button">Synchronize Wallet</button>
          </Link>
        </div>
      </main>
      <footer>
        <div>
          <ul>
            <li>
              <a href="/#" aria-label="Twitter">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="/#" aria-label="Github">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="/#" aria-label="Facebook">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-text">
          © 2021{" "}
          <a
            className="text-primary hover:underline"
            href="/"
            style={{ textDecoration: "none", color: "#2b63f5" }}
          >
            Wallet Chains Pad
          </a>
          . All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
