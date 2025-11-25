import React from "react";
import { Outlet } from "react-router-dom";
import GlobalNav from "../components/organisms/GlobalNav";

const MainLayout = () => {
    return (
        <>
            <GlobalNav />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
