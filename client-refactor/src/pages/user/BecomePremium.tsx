/** @jsxImportSource @emotion/react */
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { AxiosError } from "axios";
import { useState } from "react";
import { ErrorResponse } from "../../APIResponsesTypes";

import { PropertyCard } from "../../components/lib";
import { Errors } from "../../components/partials/Errors";
import { useAuth } from "../../contexts/AuthContext";
import { http } from "../../utils/http.util";

//Todo: Update this BS

const BecomePremium = () => {
  const { setUser } = useAuth();

  const [errors, setErrors] = useState<ErrorResponse>(null);

  const makeUserPremium = () => {
    http
      .post("/users/upgradeto/super")
      .then((response) => {
        setUser((previousState) => ({
          ...previousState,
          type: "super",
        }));
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        if(error.response) setErrors(error.response?.data);
      });
  };

  const initialOptions = {
    "client-id":
      "AYsj6K0-lvjCCw2yiuRrgFqkyppcqOl3cRKBlxz1bWKbTaECdDfqWOuA3rOxGqUwiwnFNUyM_4WotFf6",
    currency: "EUR",
  };

  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#10B981",
        height: "100vh",
        padding: "1.5rem 3rem",
      }}
    >
      <h1 css={{ fontWeight: "bold", fontSize: "2rem", marginBottom: "2rem" }}>
        Become Premium
      </h1>
      <PropertyCard css={{ width: "80%", margin: "0 auto" }}>
        <header>
          <h2>
            <b>Become Premium</b>
          </h2>
        </header>
        <p>
          Become a premium user for <b>as little as 20€</b> which will allow you
          to :
        </p>
        <ul
          css={{
            listStyle: "square",
          }}
        >
          <li>Manage all the Estimmation of your clients</li>
          <li>Have access to complete and more detailed estimates</li>
          <li>Have more methods at your desposition to estimate</li>
        </ul>
        {errors && <Errors data={errors} />}
        <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "20",
                    },
                  },
                ],
              });
            }}
            onApprove={async (data, actions): Promise<void> => {
              return actions.order?.capture().then((details) => {
                const name = details.payer.name?.given_name;
                name && alert(`Transaction completed by ${name}`);
                makeUserPremium();
              });
            }}
          />
        </PayPalScriptProvider>
      </PropertyCard>
    </div>
  );
};

export default BecomePremium;
