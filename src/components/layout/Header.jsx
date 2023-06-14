import React from "react";
import { Narbar, Search, Topbar } from './index';

function Header() {
    return (
        <header className="header-v4">
            <div>
                <Topbar />
                <Narbar />
                <Search />
            </div>
        </header>
    )
}

export default Header;