/** @jsxImportSource @emotion/react */
import { FaPlusCircle } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  Button,
  FullPageSpinner,
  Link,
  PropertyCard,
  PropertyList,
  PropertyListItem,
} from "../../../../components/lib";
import { http } from "../../../../utils/http.util";
import { IHouseProperty } from "../estimations/PropertyType";
/* eslint-disable */
export const SavedHouses = () => {
  const queryClient = useQueryClient();

  const {
    data: savedHouses,
    isLoading,
    isSuccess,
  }: {
    data?: IHouseProperty[];
    isLoading: boolean;
    isSuccess: boolean;
  } = useQuery("savedHouses", () =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    http.get("/estimation/default/maisons/saved").then((res) => res.data)
  );

  const { mutate: remove } = useMutation(
    ({ id }: { id: number }) =>
      http.delete(`/estimation/default/maisons/saved/${id}`),
    {
      onMutate(removedProperty) {
        const previousProperties = queryClient.getQueriesData("savedHouses");

        queryClient.setQueriesData("savedHouses", (old: any) => {
          return old.filter(
            (property: IHouseProperty) => property._id !== removedProperty.id
          );
        });

        return () =>
          queryClient.setQueriesData("savedHouses", previousProperties);
      },
      onSuccess: () => queryClient.invalidateQueries("savedHouses"),
      onError: (err, variables, recover) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        typeof recover === "function" ? recover() : null,
    }
  );

  //To do : style the list of saved properties

  return (
    <div>
      {isLoading ? <FullPageSpinner /> : null}
      <h2
        css={{ fontWeight: "bold", fontSize: "1.5rem", marginBottom: "2rem" }}
      >
        Estimated Houses
      </h2>
      {savedHouses?.length === 0 ? (
        <div>
          <p>
            You don't have any estimations for now
            <Link css={{ marginLeft: "1rem" }} to="/house">
              new Estimation
            </Link>
          </p>
        </div>
      ) : isSuccess ? (
        <PropertyList>
          {savedHouses?.map((house: IHouseProperty) => (
            <PropertyListItem key={house._id}>
              <PropertyCard>
                <header className="card-header">
                  <p className="card-header-title">
                    <b>
                      Addresse : {house.rue}, {house.code_postal} {house.ville}
                    </b>
                  </p>
                </header>
                <div
                  css={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <div>
                    <p>Area : {house.surface_totale_terrain}m²</p>
                  </div>
                  <div>
                    <p>Construction Year : {house.annee_construction}</p>
                  </div>
                </div>
                <Button
                  css={{ width: "100%" }}
                  variant="danger"
                  onClick={() => (house._id ? remove({ id: house._id }) : null)}
                >
                  Delete
                </Button>
              </PropertyCard>
            </PropertyListItem>
          ))}
        </PropertyList>
      ) : null}
    </div>
  );
};
