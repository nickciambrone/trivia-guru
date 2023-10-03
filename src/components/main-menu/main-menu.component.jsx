import React from 'react';
import CategoryAccordian from '../accordian/accordian.component';
import './main-menu.styles.scss';

export const MainMenu = () => {
    return (
        <div className='main-menu' style={{ textAlign: 'center' }}>
            <div className='accordian-container'>
                <CategoryAccordian text='Music' subcategories = {['All Music', 'Hip-Hop', 'Country', 'Classic Rock', 'Pop']}/>
                
            </div>



        </div>
    )
}