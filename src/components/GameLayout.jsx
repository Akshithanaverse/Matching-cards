import React from 'react';
import GameTitle from './GameTitle';
import GameStatus from './GameStatus';
import CardGroup from './CardGroup';

function GameLayout() {
    return (
        <>
            <GameTitle />
            <GameStatus />
            <CardGroup />
        </>
    )
}

export default GameLayout;