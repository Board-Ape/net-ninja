import React from 'react';

const ninjas = (props) => {
    const { ninjas } = props;
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninjas" key={ninja.id}>
                <p>{ninja.name}</p>
                <p>{ninja.age}</p>
                <p>{ninja.skill}</p>
            </div>
        )
    });

    return (
        <div className="ninjas">
            { ninjaList }
        </div>
    );
}

export default ninjas;