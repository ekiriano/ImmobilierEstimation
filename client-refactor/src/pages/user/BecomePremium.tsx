/** @jsxImportSource @emotion/react */
import { PropertyCard } from "../../components/lib";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { IUser, useAuth } from "../../contexts/AuthContext";

const BecomePremium = () => {
  const { setUser } = useAuth();

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
        <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            /* createOrder={(data, actions) => {
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
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        setUser((previousState) => ({
                            ...previousState,
                            type: "super"
                        }))
                    });
                }} */
          />
        </PayPalScriptProvider>
      </PropertyCard>
    </div>
  );
};

export default BecomePremium;
