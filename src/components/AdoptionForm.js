import React from "react";
import {Button, FormControl, InputLabel, OutlinedInput}  from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { createAdoption } from "../redux/actions/adoptions";
import { useDispatch } from "react-redux";

const schema= yup
 .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    address: yup.string().required(),
    email: yup.string().required().email("Please enter a valid email"),
    phone: yup.number().positive().integer().required(),
}).required();

const AdoptionForm =({closeModal}) => {
    const dispatch= useDispatch();
    const {
        handleSubmit,
        control,
        formState: {errors},
        reset,
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email:"",
            phone: "",
            address: "",
        },
        resolver: yupResolver(schema),
    });

    const onSubmit= data => {
        createAdoption({dispatch, payload: data });
        closeModal();
    };
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{m: 1}}>
            <InputLabel htmlFor ="firstName">First Name</InputLabel>
            <Controller 
            name="firstName"
            control={control}
            rules={{required: true}}
            render={({field}) => (
                <OutlinedInput
                  error={errors.firstName}
                  id="firstName"
                  label="FirstName"
                  {...field}
                  />
            )}
           />
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
            <InputLabel htmlFor ="lastName">Last Name</InputLabel>
            <Controller 
            name="lastName"
            control={control}
            rules={{required: true}}
            render={({field}) => (
                <OutlinedInput
                  error={errors.lastName}
                  id="lastName"
                  label="lastName"
                  {...field}
                  />
            )}
           />
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
            <InputLabel htmlFor ="email">Email</InputLabel>
            <Controller 
            name="email"
            control={control}
            rules={{required: true}}
            render={({field}) => (
                <OutlinedInput
                  error={errors.email}
                  id="email"
                  label="email"
                  {...field}
                  />
            )}
           />
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
            <InputLabel htmlFor ="phone">Phone</InputLabel>
            <Controller 
            name="phone"
            control={control}
            rules={{required: true}}
            render={({field}) => (
                <OutlinedInput
                  error={errors.phone}
                  id="phone"
                  label="phone"
                  {...field}
                  />
            )}
           />
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
            <InputLabel htmlFor ="address">Address</InputLabel>
            <Controller 
            name="address"
            control={control}
            rules={{required: true}}
            render={({field}) => (
                <OutlinedInput
                  error={errors.address}
                  id="address"
                  label="address"
                  {...field}
                  />
            )}
           />
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
            <Button variant="contained" color="success" type="submit">
                Adopt
            </Button>
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
            <Button variant="contained" color="warning" onClick={closeModal}>
                Cancel
            </Button>
        </FormControl>
    </form>
    );
};

export default AdoptionForm;