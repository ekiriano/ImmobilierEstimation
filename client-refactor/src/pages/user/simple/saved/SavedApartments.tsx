import { useEffect, useState } from "react"
import { FaPlusCircle } from "react-icons/fa";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { FullPageSpinner, Link, PropertyList, PropertyListItem } from "../../../../components/lib";
import { http } from "../../../../utils/http.util";
/* eslint-disable */
export const SavedApartments = () => {

    const queryClient = useQueryClient();

    const {data: savedApartments, isLoading} = useQuery({
        queryKey: 'savedApartments',
        queryFn: () => http.get('/estimation/default/appartements/saved').then(res => res.data)
    })

    const {mutate: remove} = useMutation(
        ({id}: {id: number}) => http.delete(`/estimation/default/appartements/saved/${id}`),
        {onSettled: () => queryClient.invalidateQueries('savedApartments')}
    )

    //To do : style the list of saved properties 

    return (
        <div>
            <h1>appartements estimés</h1>
            {isLoading ? <FullPageSpinner /> : null}
            {
                savedApartments?.length === 0 ? (
                    <div>
                        <p>
                            Vous n'avez aucune estimation d'appartements pour l'instant
                            <Link to="/estimmation/simple/appartement">
                              <FaPlusCircle />  Estimmer Maintenant
                            </Link>
                        </p>
                    </div>
                ) : (
                    <PropertyList>
                        {savedApartments.map((apartment: any) => 
                            <PropertyListItem key={apartment.id} onClick={() => apartment.id ? remove({id: apartment.id}) : null}>
                                {apartment.title}
                            </PropertyListItem>
                        )}
                    </PropertyList>
                )
            }
        </div>
    )
}