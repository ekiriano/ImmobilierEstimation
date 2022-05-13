/** @jsxImportSource @emotion/react */
import { FaPlusCircle } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  Button,
  FullPageSpinner,
  Link,
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
      <h2 css={{ fontWeight: "bold", fontSize: "1.5rem" }}>Estimated Houses</h2>
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
              {house.rue}{" "}
              <Button
                variant="primary"
                onClick={() => (house._id ? remove({ id: house._id }) : null)}
              >
                Delete
              </Button>
            </PropertyListItem>
          ))}
        </PropertyList>
      ) : null}
    </div>
  );
};
