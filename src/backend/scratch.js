import { getDate } from "./GetDate.js";

const exercises = {
    BenchPress: {
        '24/04/2024': [80, 12, 9],
        '26/04/2024': [82.5, 11, 9]
    },
    Squat: {
        '28/12/2022': [140, 2, 9],
        '28/12/2022': [150, 1, 10]
    },
    Deadlift: {
        '19/01/2020': [120, 1, 8],
        '26/01/2020': [120, 3, 9]
    }
  };

const updateExistingExercise = (exercise, weight, reps, rpe) => {
    if (!exercises[exercise]) {
        exercises[exercise] = {};
    }

    exercises[exercise][getDate()] = [weight, reps, rpe];
}


console.log(exercises.BenchPress);

updateExistingExercise('BenchPress', 82.5, 12, 9);

console.log(exercises.BenchPress);