import { useState, useEffect } from "react";

// Components
import WorkoutDetails from '../components/WorkoutDetails';

const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('/api/workouts');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const json = await response.json();
                setWorkouts(json);
            } catch {
                console.error('Fetch error:', error)
            }
        }

        fetchWorkouts();
    }, [])

    return (
        <div className='home'>
            <div className="workouts">
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