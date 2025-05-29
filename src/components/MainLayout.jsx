import React from 'react';
import GameTitle from './GameTitle';
import CategorySelector from './CategorySelector';
import GridSizeSelector from './GridSizeSelector';
import StartButton from './StartButton';

function MainLayout() {
    return(
        <>
            <GameTitle />
            <CategorySelector />
            <GridSizeSelector />
            <StartButton />
        </>
    )
}

export default MainLayout;