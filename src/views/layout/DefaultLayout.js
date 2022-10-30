import React from 'react';
import Header from '../component/Header';
import Menu from '../component/Menu';

const DefaultLayout = (props) => {
    return (
        <div className={"default-layout"}>
            <Header />
            <Menu />
            <main className={"main-content"}>{props.page}</main>
        </div>
    );
}

export default DefaultLayout;