import { exercises } from "../data/data";

const ExerciseCard = () => {
    return (
        <div className="container">
            <div id="title">
                <h1>Exercise</h1>
            </div>
            <table>
                <tr>
                    <th>1 Rep Max</th>
                    <th>2 Rep Max</th>
                    <th>3 Rep Max</th>
                    <th>4 Rep Max</th>
                    <th>5 Rep Max</th>
                    <th>6 Rep Max</th>
                    <th>7 Rep Max</th>
                    <th>8 Rep Max</th>
                    <th>9 Rep Max</th>
                    <th>10 Rep Max</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>95</td>
                    <td>90</td>
                    <td>85</td>
                    <td>80</td>
                    <td>75</td>
                    <td>70</td>
                    <td>65</td>
                    <td>60</td>
                    <td>55</td>
                </tr>
            </table>
        </div>
    );
};

export default ExerciseCard;