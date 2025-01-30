import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet"
import  { Toaster } from "react-hot-toast";

const notify = () => toast.success('Here is your toast.');
const Layout = ({ children,title,description,keywords,author }) => {
  return (
    <div>  
      <Toaster></Toaster>     
      <Helmet>
        <meta charSet='utf-8'></meta>
        <meta name="description" content={description}></meta>
        <meta name="keywords" content={keywords}></meta>
        <meta name="description" content={author}></meta>
        <title>{title}</title>
      </Helmet>
      <Header />
       <main style={{ minHeight: "70vh" }}>{children}</main>
      
      <Footer />
    </div>
  );
};

Layout.defaultProps={
  title:"Ecommerce app",
  description:"mern stack project",
  keywords:"mern,react,node,mongodb",
  author:"Coderdharamvir"
}

export default Layout;
