import exercises from "./data";
import updateExistingExercise from './ExerciseLogic';
import createNewExercise from './ExerciseLogic'

const handleNewData = (exercise, weight, reps, rpe) => {
    
    exerciseId = exercise.split(' ').join('')+reps;
    console.log(exerciseId);

    //check if a new exercise
    if (exercises.includes(exerciseId)) {
        // update the exercise stack
        updateExistingExercise(exercise, weight, reps, rpe);
    } else {
        // create a new stack
        createNewExercise(exercise, weight, reps, rpe);
    }
    
    const newData = {
        exercise,
        weight,
        reps,
        rpe,
        timestamp: new Date().toISOString(),
    };
}


handleNewData('Bench Press', 80, 12, 9);