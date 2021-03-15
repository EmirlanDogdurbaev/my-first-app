import React from 'react';

const ChecBox = ({ students }) => {
    return (
        <div className={classes.ChecBox}>
            <label>
           <input type="checkbox"
            checked={students}
            onChange={() => setFilterStudents(!filterStudents)}>Only students</input>
           </label>
        </div>
    );
}
export default ChecBox;