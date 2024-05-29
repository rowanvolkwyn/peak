const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getRecord,
    getWorkout,
    createWorkout, 
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// GET workout records
router.get('/records/:title', getRecord);

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;