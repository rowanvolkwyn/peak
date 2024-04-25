import { getDate } from "./GetDate.js";
import exercises from "../data.js";

const handleNewData = (exercise, weight, reps, rpe) => {
    if (!exercises[exercise]) {
        exercises[exercise] = {};
    }

    exercises[exercise][getDate()] = [weight, reps, rpe];
}

export {handleNewData}