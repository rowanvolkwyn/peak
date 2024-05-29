import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js"

// Components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from "../components/WorkoutForm";
import PersonalBest from "../components/PersonalBest.jsx";

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_WORKOUTS', payload: json});
            }  
        }
        fetchWorkouts();
    }, [])

    return (
        <div className='home'>
            <div className='records'>
                <PersonalBest 
                    exercise={'Deadlift'}
                />
            </div>
            <div className="workouts">
                <div className="form">
                    <WorkoutForm /> 
                </div>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails 
                        key={workout._id}
                        workout={workout}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Home;