import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPetsByCategory } from "../../redux/actions/pets";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import FeaturedPet from "../../components/FeaturedPet";

const CategorizedAnimal = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const petsByCategory = useSelector((state) => state.pets.petsByCategory);

  useEffect(() => {
    fetchPetsByCategory({ dispatch, payload: { category } });
  }, [category]);

 console.log({petsByCategory});
  return <Grid container spacing={4}>
  {
    petsByCategory?.map((pet,index) => (
      <FeaturedPet key={index} pet={pet} />
    ))
  }
  </Grid>
};

export default CategorizedAnimal;