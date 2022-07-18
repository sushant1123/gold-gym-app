import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Card, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
	return (
		<Link className="exercise-card" to={`/exercise/${exercise.id}`}>
			<img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
			<Stack direction="row">
				<Button
					sx={{
						ml: "21px",
						color: "#fff",
						background: "#ffa9a9",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize",
					}}
				>
					{exercise.bodyPart}
				</Button>

				<Button
					sx={{
						ml: "21px",
						color: "#fff",
						background: "#fcc757",
						fontSize: "14px",
						borderRadius: "20px",
						textTransform: "capitalize",
					}}
				>
					{exercise.target}
				</Button>
			</Stack>
			<Typography
				sx={{ fontSize: { lg: "24px", xs: "20px" } }}
				ml="21px"
				textTransform="capitalize"
				color="#000"
				pb="10px"
				mt="11px"
				fontWeight="bold"
			>
				{exercise.name}
			</Typography>
		</Link>
	);
};

export default ExerciseCard;
