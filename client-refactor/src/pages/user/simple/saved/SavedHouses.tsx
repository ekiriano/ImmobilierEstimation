import { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  FullPageSpinner,
  Link,
  PropertyList,
  PropertyListItem,
} from "../../../../components/lib";
import { http } from "../../../../utils/http.util";
/* eslint-disable */
export const SavedHouses = () => {
  const queryClient = useQueryClient();

  const { data: savedHouses, isLoading } = useQuery("savedHouses", () =>
    http.get("/estimation/default/maisons/saved").then((res) => res.data)
  );

  const { mutate: remove } = useMutation(
    ({ id }: { id: number }) =>
      http.delete(`/estimation/default/maisons/saved/${id}`),
    { onSuccess: () => queryClient.invalidateQueries("savedHouses") }
  );

  //To do : style the list of saved properties

  return (
    <div>
      {isLoading ? <FullPageSpinner /> : null}
      <h1>Estimated Houses</h1>
      {savedHouses?.length === 0 ? (
        <div>
          <p>
            You don't have any estimations for now
            <Link to="/estimmation/simple/maison">
              <FaPlusCircle /> new Estimation
            </Link>
          </p>
        </div>
      ) : (
        <PropertyList>
          {savedHouses.map((house: any) => (
            <PropertyListItem
              key={house._id}
              onClick={() => (house.id ? remove({ id: house.id }) : null)}
            >
              {house.title}
            </PropertyListItem>
          ))}
        </PropertyList>
      )}
    </div>
  );
};
