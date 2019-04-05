import React from 'react';

const ninjas = ({ ninjas }) => {

    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 25) {
    //         return (
    //             <div className="ninjas" key={ninja.id}>
    //                 <p>{ninja.name}</p>
    //                 <p>{ninja.age}</p>
    //                 <p>{ninja.skill}</p>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // });

    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 25 ? (
    //         <div className="ninjas" key={ninja.id}>
    //             <p>{ninja.name}</p>
    //             <p>{ninja.age}</p>
    //             <p>{ninja.skill}</p>
    //         </div>
    //     ) : null
    // })

    return (
        <div className="ninjas">
            { 
                ninjas.map(ninja => {
                    return ninja.age > 25 ? (
                        <div className="ninjas" key={ninja.id}>
                            <p>{ninja.name}</p>
                            <p>{ninja.age}</p>
                            <p>{ninja.skill}</p>
                        </div>
                ) : null
        })
                 }
        </div>
    );
}

export default ninjas;