import { Props } from "next/script";
import React, { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    const head = () => (
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
    )

    const nav = () => (
        <ul className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Test
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toglle navgation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavMarkup">
                    <div className="navbar-nav d-flex flex-warp ms-md-auto">
                        <a className="nav-link active px-4" aria-current="page" href="index">ホーム</a>
                    </div>
                </div>
            </div>
        </ul>
    )

    return <React.Fragment>{head()} {nav()} {children}</React.Fragment>
}

export default Layout;