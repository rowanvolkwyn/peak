import './EntryForm.css';

const EntryForm = () => {
    return (
        <div id='card'>
            <h2 id='title'>New Entry</h2>
            <div id='exercise'>
                <h6>Exercise:</h6>
                <input id='exercise-input'></input>
                <h6>Set 1</h6>
                <div id='sets'>
                    <div class='sets-info' id='weight'>
                        <p>Weight (KG)</p>
                        <input class='input-info'></input>
                    </div>
                    <div class='sets-info' id='reps'>
                        <p>Reps</p>
                        <input class='input-info'></input>
                    </div> 
                    <div class='sets-info' id='rpe'>
                        <p>RPE</p>
                        <input class='input-info'></input>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntryForm;