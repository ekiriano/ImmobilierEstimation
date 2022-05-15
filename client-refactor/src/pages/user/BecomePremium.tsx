/** @jsxImportSource @emotion/react */
import { PayPalButton } from "react-paypal-button-v2";

import { PropertyCard, Spinner } from "../../components/lib";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { http } from "../../utils/http.util";

//Todo: Update this BS

const BecomePremium = () => {
  const { setUser } = useAuth();
  const [loaded, setLoaded] = useState<boolean>(false);

  const loadPayPalScript = () => {
    if (window.paypal) {
      setLoaded(true);
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AYsj6K0-lvjCCw2yiuRrgFqkyppcqOl3cRKBlxz1bWKbTaECdDfqWOuA3rOxGqUwiwnFNUyM_4WotFf6";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setLoaded(true);

    document.body.appendChild(script);
  };

  useEffect(() => {
    loadPayPalScript();
  }, []);

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
        {!loaded ? (
          <Spinner />
        ) : (
          <PayPalButton
            amount="20"
            currency="USD"
            style={{
              layout: "horizontal",
              color: "black",
              shape: "pill",
              tagline: false,
            }}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details: {
              payer: { name: { given_name: string } };
            }) => {
              alert(
                "Transaction completed by " + details.payer.name.given_name
              );
              http
                .post("/upgradeto/super", {})
                .then((response) => {
                  console.log(response);
                  setUser((previousState) => ({
                    ...previousState,
                    type: "super",
                  }));
                })
                .catch((response) => {
                  console.log(response);
                });
            }}
          />
        )}
      </PropertyCard>
    </div>
  );
};

export default BecomePremium;
