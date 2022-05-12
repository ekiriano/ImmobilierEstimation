/** @jsxImportSource @emotion/react */
import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  Button,
  FullPageSpinner,
  Link,
  PropertyList,
  PropertyListItem,
  Spinner,
} from "../../../../components/lib";
import { http } from "../../../../utils/http.util";
import { IProperty } from "../estimations/apartment/PropertyType";
/* eslint-disable */
export const SavedApartments = () => {
  const queryClient = useQueryClient();

  const {
    data: savedApartments,
    isLoading,
    isSuccess,
  } = useQuery("savedApartments", () =>
    http.get("/estimation/default/appartements/saved").then((res) => res.data)
  );

  const { mutate: remove } = useMutation(
    ({ id }: { id: number }) =>
      http.delete(`/estimation/default/appartements/saved/${id}`),
    { onMutate(removedProperty) {
        const previousProperties = queryClient.getQueriesData("savedApartments")

        queryClient.setQueriesData("savedApartments", (old: any) => {
          return old.filter((property: IProperty) => property._id !== removedProperty.id)
        })

        return () => queryClient.setQueriesData("savedApartments", previousProperties)
      },
      onSettled: () => queryClient.invalidateQueries("savedApartments"),
      onError: (err, variables, recover) =>
      typeof recover === 'function' ? recover() : null,
      
      }
  );
  //To do : style the list of saved properties
  return (
    <div>
      <h2 css={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        appartements estimés
      </h2>
      {isLoading ? <FullPageSpinner /> : null}

      {savedApartments?.length === 0 ? (
        <div>
          <p>
            You don't have any estimations for now
            <Link css={{ marginLeft: "1rem" }} to="/apartment">
              new Estimation
            </Link>
          </p>
        </div>
      ) : isSuccess ? (
        <PropertyList>
          {savedApartments.map((property: any) => (
            <PropertyListItem key={property._id}>
              {property.rue}{" "}
              <Button
                variant="primary"
                onClick={() => remove({ id: property._id })}
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
