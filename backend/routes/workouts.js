const express = require('express');
const router = express.Router();
const {
    getWorkouts,
    getWorkout,
    createWorkout
} = require('../controllers/workoutController')

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'});
})

// GET single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single workout'});
})

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'});
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'});
})

module.exports = router;