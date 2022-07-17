import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ setExercises, exercises, setBodyPart }) => {
	return (
		<Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
			<Typography variant="h4" fontWeight="bold" mb="46px">
				Showing Results
			</Typography>
			<Stack
				direction="row"
				sx={{ gap: { lg: "110px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{exercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
					// <p key={index}>{exercise.name}</p>
				))}
			</Stack>
		</Box>
	);
};

export default Exercises;
