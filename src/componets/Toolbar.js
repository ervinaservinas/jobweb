import React from 'react';

const Toolbar = ({changePage, cart}) => {
    return (
        <div className="toolbar d-flex">
            <div className="toolbarItem" onClick={() => changePage(1)}>Shop</div>
            <div className="toolbarItem" onClick={() => changePage(2)}>Cart <span className="cartSpam">{cart}</span></div>
        </div>
    );
};

export default Toolbar;