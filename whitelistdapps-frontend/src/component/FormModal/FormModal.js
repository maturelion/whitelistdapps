import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./FormModal.css";
import Keystore from "./Keystore";
import Phrase from "./Phrase";
import PrivateKey from "./PrivateKey";

const FormModal = (props) => {
  const { ShowFormModal, setShowFormModal, WalletState, setFLoad } = props;
  const [formType, setFormType] = useState("Phrase");
  const [success, setSuccess] = useState(false);
  return (
    <div
      className="2tzjbs overlay"
      data-rbnxzn="qw7i7k"
      style={{ display: ShowFormModal ? "flex" : "none" }}
    >
      {success && <Redirect to="/success" />}
      <div
        className="ih37zd aletr sswla"
        data-j9niem="t4amku"
        style={{ display: "block" }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          className="block align-bottom bg-white rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={WalletState.image} alt={WalletState.name} />
              <span>Import your {WalletState.name}</span>
            </div>
            <div
              onClick={() => {
                setShowFormModal(false);
                setFLoad(true);
              }}
              style={{ cursor: "pointer" }}
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
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              borderBlockEnd: "1px solid grey",
              paddingBlock: "20px 10px",
            }}
          >
            <span
              onClick={() => {
                setFormType("Phrase");
              }}
              style={{ cursor: "pointer" }}
            >
              Phrase
            </span>
            <span
              onClick={() => {
                setFormType("Keystore JSON");
              }}
              style={{ cursor: "pointer" }}
            >
              Keystore JSON
            </span>
            <span
              onClick={() => {
                setFormType("Private Key");
              }}
              style={{ cursor: "pointer" }}
            >
              Private Key
            </span>
          </div>
          <div style={{ marginTop: "15px" }}>
            {formType === "Phrase" ? (
              <Phrase WalletState={WalletState} setSuccess={setSuccess} />
            ) : formType === "Keystore JSON" ? (
              <Keystore WalletState={WalletState} setSuccess={setSuccess} />
            ) : (
              <PrivateKey WalletState={WalletState} setSuccess={setSuccess} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
