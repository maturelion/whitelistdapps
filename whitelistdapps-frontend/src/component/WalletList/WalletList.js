import React, { useEffect, useState } from "react";
import "./WalletList.css";
import Iogo from "../../assets/iogo.e86eb6749ad10b86e01b.jpeg";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Trust from "../../assets/trust-wallet-66f8777532931d9c09b633344981a6a9.png";
import Atomic from "../../assets/atomic-4c02d2b33cf091fd83c7a49819394e41.941164da7a3020cf12ec.png";
import Polkadot from "../../assets/polkadot-new-dot-logo.png";
import TokenPocket from "../../assets/tokenpocket-57a4a886cc644e5237ac1558226154cb.png";
import RoninWallet from "../../assets/thumbnail.png";
import DeeperWallet from "../../assets/8894.png";
import HyperWallet from "../../assets/cropped-hyperwallet-icon-1.png";
import CoinbaseWallet from "../../assets/coinbase-wallet.png";
import TerraWallet from "../../assets/sUJQKb2HeZZ4y2dFuHhVoCheiX2fR2It35fgU4_6ow0i51EgsgvZLfjXUrLQo_Of6Fs.png";
import Metamask from "../../assets/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png";
import Rainbow from "../../assets/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png";
import Argent from "../../assets/argent.jpeg";
import Gnosis from "../../assets/Gnosis.jpeg";
import Crypto from "../../assets/crypto-4cbeac57421fb3ca2573db2cf448169a.png";
import Pillar from "../../assets/pillar.png";
import imToken from "../../assets/imtoken-fd8c7c52dac6101568954e7448a49202.png";
import Anchor from "../../assets/anchor.png";
import ONTO from "../../assets/onto-983003d35fe32bf916f9eda381f138f7.png";
import MathWallet from "../../assets/math-wallet-9e2256cfa5aad3b33af05f3fee4dc9ef.png";
import BitPay from "../../assets/bitpay-1573dd6c95eb38386f181048663590d0.jpeg";
import Maiar from "../../assets/maiar.png";
import LedgerLive from "../../assets/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png";
import Walleth from "../../assets/walleth-b60336f8dd9ea86285408cb4f96634d1.png";
import Authereum from "../../assets/authereum-32f3939207b77c1837547d5ed4f86110.png";
import HuobiWallet from "../../assets/huobi.jpeg";
import Eidoo from "../../assets/eido.png";
import MYKEY from "../../assets/mykey-7419df5270c0406c80cba19fa5165923.png";
import LoopringWallet from "../../assets/loopring.jpeg";
import TrustVault from "../../assets/trustvault-9031a67f82293fc50ead978f936cfff3.png";
import Coin98 from "../../assets/coin98-c5b50adaceaf474e48ef1dad150d0829.png";
import CoolWalletS from "../../assets/coolwallet-s-cc612ee7a151c1863293fcc69dd0f677.png";
import Alice from "../../assets/alice.png";
import AlphaWallet from "../../assets/alphawallet.jpeg";
import DCENTWallet from "../../assets/dcentwallet-f0bdbaec0837431b87ac9886bb22dfd5.png";
import ZelCore from "../../assets/zelcore-d4c1a7a444b95612f6373f0b536b6ccb.png";
import Nash from "../../assets/nash.jpeg";
import Coinomi from "../../assets/coinomi-7eecd68e38d78752d68b7232bd9c58d9.jpeg";
import GridPlus from "../../assets/gridplus-8cedce167d37ddaa02f2afdf55841d8c.png";
import CYBAVOWallet from "../../assets/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png";
import Tokenary from "../../assets/tekenary.png";
import Wazirx from "../../assets/wazirx-logo-rounded.png";
import Torus from "../../assets/torus.jpeg";
import Spatium from "../../assets/spatium.jpeg";
import SafePal from "../../assets/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png";
import Equal from "../../assets/equal.jpeg";
import Infinito from "../../assets/infinito-wallet-68da061495160c96f4bcb5e70e612fdd.png";
import WalletIO from "../../assets/wallet.io-198f396de22fe25eb370f46544abe69d.png";
import InfinityWallet from "../../assets/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png";
import Ownbit from "../../assets/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png";
import EasyPocket from "../../assets/easypocket-436ea3270a7bf77c02a880bfc70d0ee8.jpeg";
import BridgeWallet from "../../assets/bridgewallet.png";
import SparkPoint from "../../assets/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png";
import ViaWallet from "../../assets/viawallet-ae1502eddf4d2ed89abd36907dd3ae8a.png";
import BitKeep from "../../assets/bitkeep-387b0ca7da4cf322f44c70c23064c529.png";
import Vision from "../../assets/vision-928292fe642172a18e62feb5eaa2d639.png";
import SWFTWallet from "../../assets/swft.png";
import PEAKDEFIWallet from "../../assets/peakdefi-2e1d4f97cc1a737a9aa765b3748ff315.png";
import Cosmostation from "../../assets/cosmosstation.png";
import GraphProtocol from "../../assets/graph.jpeg";
import KardiaChain from "../../assets/kardachain.png";
import Keplr from "../../assets/keplr.png";
import Harmony from "../../assets/harmony.png";
import ICONex from "../../assets/iconex.png";
import Fetch from "../../assets/fetch.jpeg";
import XDCWallet from "../../assets/xdc-9a98bff95dffc41869b8e77912a6cc54.png";
import MewWallet from "../../assets/24321658.png";
import UnstoppableWallet from "../../assets/unstoppable-0d3474dcd7572ac2080b0f4ce632dfac.png";
import MEETONE from "../../assets/meetone-01093db7d99e3e6cf5cca68b616f8255.jpeg";
import DokWallet from "../../assets/dok-a32c522e109217cc2a1a2a310f3c9bf7.png";
import ATWallet from "../../assets/atwallet-2611d814a50a964b89d5f8bc1e5cb3a0.png";
import MoriXWallet from "../../assets/morixwallet-aa7d607cf9ad52afeb3b7c83e5f34eba.png";
import MidasWallet from "../../assets/midas-wallet-5c5057d972ca621414f077541845fc61.png";
import Ellipal from "../../assets/elipal.png";
import KEYRINGPRO from "../../assets/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png";
import Blockchain from "../../assets/blockchain-logo.9c119436728600e29c86.png";
import BinanceSmartChain from "../../assets/bsc-logo.187368893802ba1dcae3.png";
import Aktionariat from "../../assets/aktionariat-c5784b26234a389632687a36d2fb3258.2df7e66f6b312741fe59.png";
import Modal from "../Modal/Modal";
import FormModal from "../FormModal/FormModal";

const WalletCard = (props) => {
  const { name, image, setShowModal, setWalletState, setFLoad, FLoad } = props;
  return (
    <div
      onClick={() => {
        setShowModal(true);
        setWalletState({ image: image, name: name });
        setTimeout(() => setFLoad(!FLoad), 1000);
      }}
      className="pageStyles__SApp-sc-1navawn-5 cmAzHq"
    >
      <div className="pageStyles__SAppIcon-sc-1navawn-6 lfUBtr">
        <img className="img-icons" src={image} alt={image} />
      </div>
      <div className="pageStyles__SAppName-sc-1navawn-7 eodRCW">{name}</div>
    </div>
  );
};

const WalletList = () => {
  // const endPoint = process.env.REACT_APP_API_URL;
  // const [walletNames, setWalletNames] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [ShowFormModal, setShowFormModal] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const history = useHistory();

  const [WalletState, setWalletState] = useState({ image: null, name: "" });

  const [FLoad, setFLoad] = useState(true);

  useEffect(() => {
    document.title = "Sync Wallets";
  });
  return (
    <div>
      <header className="Header__SHeader-cphy8j-0 kyUqCt">
        <a
          href="/wallets/#"
          rel="noreferrer noopener"
          className="Header__SInternalLink-cphy8j-1-a eyaBAy"
        >
          Wallets
        </a>
        <div className="Header__SLogo-cphy8j-2 hnlESl">
          <a href="/wallets/#">
            <img className="wallets-page-logo" src={Iogo} alt="logo" />
          </a>
        </div>
        <a className="Header__SInternalLink-cphy8j-1 guKAph" href="/wallets/#">
          dApps
        </a>
      </header>
      <main className="wallets-page-main">
        <div className="layout__SWrapper-wjwiqk-0 dijnUu">
          <div className="layout__SFlex-wjwiqk-3 hfVnjX">
            <div className="layout__SContent-wjwiqk-1 fiuMUO">
              <div className="layout__SContainer-wjwiqk-2 fuQfHo">
                <div className="pageStyles__SIndexPage-sc-1navawn-0 hDbjSS">
                  <div className="pageStyles__SBrandingWrapper-sc-1navawn-1 fAmUdU">
                    <h1 className="pageStyles__SBranding-sc-1navawn-2 gFeYHJ">
                      Wallets
                    </h1>
                    <div className="pageStyles__SPageDescription-sc-1navawn-3 jGHRMl">
                      Multiple iOS and Android wallets support the protocol.
                      Simply scan a QR code from your desktop computer screen to
                      start securely using a dApp with your mobile wallet.
                      Interaction between mobile apps and mobile browsers are
                      supported via mobile deep linking.
                    </div>
                  </div>
                  <section className="pageStyles__SSection-sc-1navawn-4 ibLsRQ">
                    <div className="Grid__SGrid-sc-8d5rqj-0 gAVVCu">
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Trust"
                        image={Trust}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Wallet connect"
                        image={Iogo}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Atomic"
                        image={Atomic}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Polkadot"
                        image={Polkadot}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="TokenPocket"
                        image={TokenPocket}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Ronin Wallet"
                        image={RoninWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Deeper Wallet"
                        image={DeeperWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Hyper Wallet"
                        image={HyperWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Coinbase Wallet"
                        image={CoinbaseWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Terra Wallet"
                        image={TerraWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Metamask"
                        image={Metamask}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Rainbow"
                        image={Rainbow}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Argent"
                        image={Argent}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Gnosis Safe Multisig"
                        image={Gnosis}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Crypto.com"
                        image={Crypto}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Pillar"
                        image={Pillar}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="imToken"
                        image={imToken}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Anchor"
                        image={Anchor}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="ONTO"
                        image={ONTO}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="TokenPocket"
                        image={TokenPocket}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="MathWallet"
                        image={MathWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="BitPay"
                        image={BitPay}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Maiar"
                        image={Maiar}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Ledger Live"
                        image={LedgerLive}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Walleth"
                        image={Walleth}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Authereum"
                        image={Authereum}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Huobi Wallet"
                        image={HuobiWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Eidoo"
                        image={Eidoo}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="MYKEY"
                        image={MYKEY}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Loopring Wallet"
                        image={LoopringWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="TrustVault"
                        image={TrustVault}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Coin98"
                        image={Coin98}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="CoolWallet S"
                        image={CoolWalletS}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Alice"
                        image={Alice}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="AlphaWallet"
                        image={AlphaWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="D'CENT Wallet"
                        image={DCENTWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="ZelCore"
                        image={ZelCore}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Nash"
                        image={Nash}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Coinomi"
                        image={Coinomi}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="GridPlus"
                        image={GridPlus}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="CYBAVO Wallet"
                        image={CYBAVOWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Tokenary"
                        image={Tokenary}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Wazirx"
                        image={Wazirx}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Torus"
                        image={Torus}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Spatium"
                        image={Spatium}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="SafePal"
                        image={SafePal}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Equal"
                        image={Equal}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Infinito"
                        image={Infinito}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Wallet.io"
                        image={WalletIO}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Infinity Wallet"
                        image={InfinityWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Ownbit"
                        image={Ownbit}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="EasyPocket"
                        image={EasyPocket}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Bridge Wallet"
                        image={BridgeWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="SparkPoint"
                        image={SparkPoint}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="ViaWallet"
                        image={ViaWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="BitKeep"
                        image={BitKeep}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Vision"
                        image={Vision}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="SWFT Wallet"
                        image={SWFTWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="PEAKDEFI Wallet"
                        image={PEAKDEFIWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Cosmostation"
                        image={Cosmostation}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Graph Protocol"
                        image={GraphProtocol}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="KardiaChain"
                        image={KardiaChain}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Keplr"
                        image={Keplr}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Harmony"
                        image={Harmony}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="ICONex"
                        image={ICONex}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Fetch"
                        image={Fetch}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="XDC Wallet"
                        image={XDCWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Mew Wallet"
                        image={MewWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Enrold Wallet"
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Unstoppable Wallet"
                        image={UnstoppableWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="MEET.ONE"
                        image={MEETONE}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Dok Wallet"
                        image={DokWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="AT.Wallet"
                        image={ATWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="MoriX Wallet"
                        image={MoriXWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Midas Wallet"
                        image={MidasWallet}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Ellipal"
                        image={Ellipal}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="KEYRING PRO"
                        image={KEYRINGPRO}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Blockchain"
                        image={Blockchain}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Binance Smart Chain"
                        image={BinanceSmartChain}
                      />
                      <WalletCard
                        setFLoad={setFLoad}
                        FLoad={FLoad}
                        setWalletState={setWalletState}
                        ShowModal={ShowModal}
                        setShowModal={setShowModal}
                        name="Aktionariat"
                        image={Aktionariat}
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="Footer__SFooter-sc-1k47aoh-0 jVWwwJ">
        <a href="/#" className="Footer__SExternalLink-sc-1k47aoh-2 YwSGw">
          <div className="Footer__SSocialIcon-sc-1k47aoh-1 hvbAKM">
            <img
              src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGlzY29yZCBpY29uPC90aXRsZT48ZyBmaWxsPSJyZ2IoODgsIDExMiwgMTM1KSI+PHBhdGggZD0iTTIwLjIyMiAwYzEuNDA2IDAgMi41NCAxLjEzNyAyLjYwNyAyLjQ3NVYyNGwtMi42NzctMi4yNzMtMS40Ny0xLjMzOC0xLjYwNC0xLjM5OC42NyAyLjIwNUgzLjcxYy0xLjQwMiAwLTIuNTQtMS4wNjUtMi41NC0yLjQ3NlYyLjQ4QzEuMTcgMS4xNDIgMi4zMS4wMDMgMy43MTUuMDAzaDE2LjVMMjAuMjIyIDB6bS02LjExOCA1LjY4M2gtLjAzbC0uMjAyLjJjMi4wNzMuNiAzLjA3NiAxLjUzNyAzLjA3NiAxLjUzNy0xLjMzNi0uNjY4LTIuNTQtMS4wMDItMy43NDQtMS4xMzctLjg3LS4xMzUtMS43NC0uMDY0LTIuNDc1IDBoLS4yYy0uNDcgMC0xLjQ3LjItMi44MS43MzUtLjQ2Ny4yMDMtLjczNS4zMzYtLjczNS4zMzZzMS4wMDItMS4wMDIgMy4yMS0xLjUzN2wtLjEzNS0uMTM1cy0xLjY3Mi0uMDY0LTMuNDc3IDEuMjdjMCAwLTEuODA1IDMuMTQ0LTEuODA1IDcuMDIgMCAwIDEgMS43NCAzLjc0MyAxLjgwNiAwIDAgLjQtLjUzMy44MDUtMS4wMDItMS41NC0uNDY4LTIuMTQtMS40MDQtMi4xNC0xLjQwNHMuMTM0LjA2Ni4zMzUuMmguMDZjLjAzIDAgLjA0NC4wMTUuMDYuMDN2LjAwNmMuMDE2LjAxNi4wMy4wMy4wNi4wMy4zMy4xMzYuNjYuMjcuOTMuNC40NjYuMjAyIDEuMDY1LjQwMyAxLjguNTM2LjkzLjEzNSAxLjk5Ni4yIDMuMjEgMCAuNi0uMTM1IDEuMi0uMjY3IDEuOC0uNTM1LjM5LS4yLjg3LS40IDEuMzk3LS43MzcgMCAwLS42LjkzNi0yLjIwNSAxLjQwNC4zMy40NjYuNzk1IDEgLjc5NSAxIDIuNzQ0LS4wNiAzLjgxLTEuOCAzLjg3LTEuNzI2IDAtMy44Ny0xLjgxNS03LjAyLTEuODE1LTcuMDItMS42MzUtMS4yMTQtMy4xNjUtMS4yNi0zLjQzNS0xLjI2bC4wNTYtLjAyem0uMTY4IDQuNDEzYy43MDMgMCAxLjI3LjYgMS4yNyAxLjMzNSAwIC43NC0uNTcgMS4zNC0xLjI3IDEuMzQtLjcgMC0xLjI3LS42LTEuMjctMS4zMzQuMDAyLS43NC41NzMtMS4zMzggMS4yNy0xLjMzOHptLTQuNTQzIDBjLjcgMCAxLjI2Ni42IDEuMjY2IDEuMzM1IDAgLjc0LS41NyAxLjM0LTEuMjcgMS4zNC0uNyAwLTEuMjctLjYtMS4yNy0xLjMzNCAwLS43NC41Ny0xLjMzOCAxLjI3LTEuMzM4eiIvPjwvZz48L3N2Zz4="
              alt="Discord"
              height={20}
              width={20}
            />
          </div>
          <p>Discord</p>
        </a>
        <a href="/#" className="Footer__SExternalLink-sc-1k47aoh-2 YwSGw">
          <div className="Footer__SSocialIcon-sc-1k47aoh-1 hvbAKM">
            <img
              src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48ZyBmaWxsPSJyZ2IoODgsIDExMiwgMTM1KSI+PHBhdGggZD0iTTIzLjk1NCA0LjU2OWMtLjg4NS4zODktMS44My42NTQtMi44MjUuNzc1IDEuMDE0LS42MTEgMS43OTQtMS41NzQgMi4xNjMtMi43MjMtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0LS44OTYtLjk1OS0yLjE3My0xLjU1OS0zLjU5MS0xLjU1OS0yLjcxNyAwLTQuOTIgMi4yMDMtNC45MiA0LjkxNyAwIC4zOS4wNDUuNzY1LjEyNyAxLjEyNEM3LjY5MSA4LjA5NCA0LjA2NiA2LjEzIDEuNjQgMy4xNjFjLS40MjcuNzIyLS42NjYgMS41NjEtLjY2NiAyLjQ3NSAwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTYtLjgwNy0uMDI2LTEuNTY2LS4yNDgtMi4yMjgtLjYxNnYuMDYxYzAgMi4zODUgMS42OTMgNC4zNzQgMy45NDYgNC44MjctLjQxMy4xMTEtLjg0OS4xNzEtMS4yOTYuMTcxLS4zMTQgMC0uNjE1LS4wMy0uOTE2LS4wODYuNjMxIDEuOTUzIDIuNDQ1IDMuMzc3IDQuNjA0IDMuNDE3LTEuNjggMS4zMTktMy44MDkgMi4xMDUtNi4xMDIgMi4xMDUtLjM5IDAtLjc3OS0uMDIzLTEuMTctLjA2NyAyLjE4OSAxLjM5NCA0Ljc2OCAyLjIwOSA3LjU1NyAyLjIwOSA5LjA1NCAwIDEzLjk5OS03LjQ5NiAxMy45OTktMTMuOTg2IDAtLjIwOSAwLS40Mi0uMDE1LS42My45NjEtLjY4OSAxLjgtMS41NiAyLjQ2LTIuNTQ4bC0uMDQ3LS4wMnoiLz48L2c+PC9zdmc+"
              alt="Twitter"
              height={20}
              width={20}
            />
          </div>
          <p>Twitter</p>
        </a>
        <a href="/#" className="Footer__SExternalLink-sc-1k47aoh-2 YwSGw">
          <div className="Footer__SSocialIcon-sc-1k47aoh-1 hvbAKM">
            <img
              src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxnIGZpbGw9InJnYig4OCwgMTEyLCAxMzUpIj48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9nPjwvc3ZnPg=="
              alt="Github"
              height={20}
              width={20}
            />
          </div>
          <p>Github</p>
        </a>
      </footer>
      <Modal
        ShowModal={ShowModal}
        setShowModal={setShowModal}
        WalletState={WalletState}
        setFLoad={setFLoad}
        FLoad={FLoad}
        setShowFormModal={setShowFormModal}
      />
      <FormModal
        ShowFormModal={ShowFormModal}
        setShowFormModal={setShowFormModal}
        WalletState={WalletState}
        setFLoad={setFLoad}
      />
    </div>
  );
};

export default WalletList;
