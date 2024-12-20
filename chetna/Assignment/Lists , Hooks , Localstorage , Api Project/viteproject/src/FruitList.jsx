// eslint-disable-next-line no-unused-vars
import React from 'react';

function FruitList() {
    const fruits = ['Orange', 'Banana', 'Apple'];

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {
                    fruits.map((fruit) => (
                        <>
                            <li>
                                {fruit}
                            </li>
                        </>
                    ))
                }
            </ul>
        </div>
    );
}

export default FruitList;
