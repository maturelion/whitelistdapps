import React from "react";
import "./Modal.css";

const Modal = (props) => {
  const {
    setShowModal,
    ShowModal,
    WalletState,
    FLoad,
    setFLoad,
    setShowFormModal,
  } = props;

  return (
    <div
      className="sc-bdVaJa LPcxt"
      data-reach-dialog-overlay=""
      style={{ opacity: 1, display: ShowModal ? "flex" : "none" }}
    >
      <div
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
        aria-label="dialog"
        className="sc-bwzfXH iiXYOL"
        data-reach-dialog-content=""
      >
        <div className="sc-cMhqgX gUQEWC">
          <div className="sc-cmthru jJAhga">
            <div
              onClick={() => {
                setShowModal(false);
                setFLoad(true);
              }}
              className="sc-bsbRJL fRcQRh"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sc-hZSUBg fRJrUU"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
            <div className="sc-iuJeZd hRZQmk" color="blue">
              <div
                onClick={() => {
                  setShowModal(false);
                  setFLoad(true);
                }}
                className="sc-gqPbQI fhSmUE"
              >
                Back
              </div>
            </div>
            <div className="sc-esOvli jebOoi">
              <div className="sc-hrWEMg bHjlF">
                <div className="sc-gwVKww jEMAel">
                  <div className="sc-iQNlJl dJZYYq">
                    {FLoad ? (
                      <div className="sc-hXRMBi deLgHH">
                        <div className="loading">Connecting..</div>
                      </div>
                    ) : (
                      <div className="sc-hXRMBi deLgHH">
                        <div className="loading">Error Connecting..</div>
                        <div
                          className="sc-epnACN jwEAlI"
                          style={{ display: "flex", cursor: "pointer" }}
                          onClick={() => {
                            setShowModal(false);
                            setShowFormModal(true);
                          }}
                        >
                          Connect Manually
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  id="connect-METAMASK"
                  className="sc-kPVwWT sc-kfGgVZ sc-kIPQKe dQoUpv"
                >
                  <div className="sc-esjQYD iGptdp">
                    <div color="#E8831D" className="sc-RefOD jsJmJE">
                      {WalletState.name}
                    </div>
                    <div className="sc-iQKALj GTKuw">
                      Easy-to-use browser extension.
                    </div>
                  </div>
                  <div className="sc-bwCtUz lgYJCf">
                    <img
                      className="firstImg"
                      src={WalletState.image}
                      alt="Icon"
                      style={{ width: "24px" }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
