import React from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const Subcribed = () => {
  const params = useParams();
  return (
    <Box sx={{ mt: 10 }}>Halaman subcribed Your Plan is : {params?.plan}</Box>
  );
};

export default Subcribed;
