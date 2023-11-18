import { createAdoptions } from "../../services/adoptions";
import { SET_ADOPTIONS_LOADER } from "../actionTypes/adoptions";
import { showSnackbar } from "./snackbar";

export const createAdoption =({dispatch, payload}) => {
    dispatch({
        type: SET_ADOPTIONS_LOADER,
        payload: true,
    });
    createAdoptions(payload)
    .then(({data })=> {
        showSnackbar({
            dispatch,
            payload: {
                message: "Adoption requested!..",
                type: 'success',
            },
        });
        dispatch({
            type: SET_ADOPTIONS_LOADER,
            payload: false,
        });
    })
    .catch((error ) => {
       // console.log(error);
       showSnackbar({
        dispatch,
        payload: {
            message: "Error occured!!",
            type: 'danger',
        },
    });
        dispatch({
            type: SET_ADOPTIONS_LOADER,
            payload: false,
    });
   });
};
