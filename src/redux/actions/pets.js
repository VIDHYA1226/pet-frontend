import { GET_ALL_PETS, GET_PETS_BY_CATEGORY, GET_PET_BY_ID } from "../actionTypes/pets";
import {getAllPets,
     getPetsByCategory,
    getPetsById } 
from "../../services/pets";

export const fetchAllPets =({dispatch}) => {
    getAllPets()
    .then(({data })=> {
        dispatch({
            type: GET_ALL_PETS,
            payload: data,
        });
    })
    .catch((error ) => {
       // console.log(error);
        dispatch({
            type: GET_ALL_PETS,
            payload: [],
    });
   });
};

export const fetchPetsByCategory =({dispatch,payload }) => {
    getPetsByCategory(payload)
    .then(({data })=> {
        dispatch({
            type: GET_PETS_BY_CATEGORY,
            payload: data,
        });
    })
    .catch((error ) => {
       // console.log(error);
        dispatch({
            type: GET_PETS_BY_CATEGORY,
            payload: [],
    });
   });
};

export const fetchPetsById =({dispatch, payload}) => {
    getPetsById(payload)
    .then(({data })=> {
        dispatch({
            type: GET_PET_BY_ID,
            payload: data,
        });
    })
    .catch((error ) => {
       // console.log(error);
        dispatch({
            type: GET_PET_BY_ID,
            payload: [],
    });
   });
};
