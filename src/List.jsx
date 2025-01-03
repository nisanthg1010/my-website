import React from 'react';
const List = () => {
    return (
        <div>
            <h1>Fruits</h1>
            <ul>
                <li>Apple</li>
                <li>Mango</li>
                <li>Banana</li>
            </ul>
            <h1>Vegetables</h1>
            <ol>
                <li>Carrot</li>
                <li>Beans</li>
                <li>Beetroot</li>
            </ol>
            <h1>Birds</h1>
            <dl>
                <dt>Peacock</dt>
                <dd>A large, colorful bird known for its iridescent tail feathers.</dd>
                <dt>Owl</dt>
                <dd>A nocturnal bird of prey with a distinctive hooting call.</dd>
                <dt>Cock</dt>
                <dd>A male chicken, also known as a rooster.</dd>
            </dl>
        </div>
    );
};

export default List;