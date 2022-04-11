import { useEffect, useState } from "react"
import { FaPlusCircle } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { FullPageSpinner, Link, PropertyList, PropertyListItem } from "../../../../components/lib";
import { http } from "../../../../utils/http.util";
/* eslint-disable */
export const SavedApartments = () => {

    const queryClient = useQueryClient();

    const {data: savedHouses, isLoading} = useQuery({
        queryKey: 'savedHouses',
        queryFn: () => http.get('/estimation/default/appartements/saved').then(res => res.data)
    })

    const {mutate: remove} = useMutation(
        ({id}: {id: number}) => http.delete(`/estimation/default/maisons/saved/${id}`),
        {onSuccess: () => queryClient.invalidateQueries('savedHouses')}
    )

    //To do : style the list of saved properties 

    return (
        <div>
            {isLoading ? <FullPageSpinner /> : null}
            <h1>appartements estimés</h1>
            {
                savedHouses?.length === 0 ? (
                    <div>
                        <p>
                            Vous n'avez aucune estimation d'appartements pour l'instant
                            <Link to="/estimmation/simple/maison">
                              <FaPlusCircle />  Estimmer Maintenant
                            </Link>
                        </p>
                    </div>
                ) : (
                    <PropertyList>
                        {savedHouses.map((house: any) => 
                            <PropertyListItem key={house.id} onClick={() => house.id ? remove({id: house.id}) : null}>
                                {house.title}
                            </PropertyListItem>
                            )}
                    </PropertyList>
                )
            }
        </div>
    )
}