import React from "react";
import wrapper from './wrapper.scss';
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import Footer from "./Footer";
const Wrapper = () => {
    return (
        <div className="wrapper">
            <Header></Header>
            <Aside></Aside>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}
export default Wrapper;