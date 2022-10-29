import React from 'react';

const DefaultLayout = (props) => {
    return (
        <div className={"default-layout"}>
            <main className={"main-content"}>{props.page}</main>
        </div>
    );
}

export default DefaultLayout;