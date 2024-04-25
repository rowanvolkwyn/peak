import { getDate } from "./GetDate";

const updateExistingExercise = (exercise, weight, reps, rpe) => {
    switch (exercise) {
        case 'BenchPress':
            exercises.BenchPress[getDate()] = [weight, reps, rpe];
            break;
        case 'Squat':
            exercises.Squat[getDate()] = [weight, reps, rpe];
            break;
        case 'Deadlift':
            exercises.Deadlift[getDate()] = [weight, reps, rpe];
            break;
    }
    

    exercises.BenchPress[getDate()] = [weight, reps, rpe];
}

const createNewExercise = (exercise, weight, reps, rpe) => {

}

export {updateExistingExercise, createNewExercise}