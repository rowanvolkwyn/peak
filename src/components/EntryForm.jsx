import { useState } from 'react';
import './EntryForm.css';
import { handleNewData } from '../backend/handleNewData';

const EntryForm = () => {

    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [rpe, setRpe] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', {exercise, weight, reps, rpe});
        // Add code to handle this data and store it e.g handleNewData()
        handleNewData(exercise, weight, reps, rpe);
        setExercise('');
        setWeight('');
        setReps('');
        setRpe('');
    }

    return (
        <div id='card'>
            <h2 id='title'>New Entry</h2>
            <form onSubmit={handleSubmit}>
                <div id='exercise-form'>
                    <h6>Exercise:</h6>
                    <input 
                        className='input-info'
                        id='exercise'
                        type='text'
                        maxLength={80}
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                        required
                    />
                    <h6>Set 1</h6>
                    <div id='sets'>
                        <div className='sets-info' id='weight'>
                            <p>Weight (KG)</p>
                            <input
                                className='input-info'
                                id='weight'
                                type='number'
                                maxLength={3}
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                required
                            />
                        </div>
                        <div className='sets-info' id='reps'>
                            <p>Reps</p>
                            <input
                                className='input-info'
                                id='reps'
                                type='number'
                                maxLength={3}
                                value={reps}
                                onChange={(e) => setReps(e.target.value)}
                                required
                            />
                        </div> 
                        <div className='sets-info' id='rpe'>
                            <p>RPE</p>
                            <input
                                className='input-info'
                                id='rpe'
                                type='text'
                                min={1}
                                max={10}
                                value={rpe}
                                onChange={(e) => setRpe(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default EntryForm;