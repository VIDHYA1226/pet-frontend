import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MainFeaturedPost from "../../components/MainFeaturedPost";
import { mainFeaturePost } from "../../data";
import FeaturedPet from "../../components/FeaturedPet";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPets } from "../../redux/actions/pets";

const Homepage = () => {
  const dispatch = useDispatch();
  const pets = useSelector((state) => state.pets.allPets);

  useEffect(() => {
    fetchAllPets({ dispatch });
  }, []);
  return (
    <>
       <MainFeaturedPost mainFeaturePost={mainFeaturePost} />
            <Grid container spacing={4}>
            {pets.map((pet) =>(
               <FeaturedPet key={pet._id} pet={pet} />
            ))}
            </Grid>{" "}
    </>
  );
};

export default Homepage;