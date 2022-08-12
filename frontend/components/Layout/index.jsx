import React from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import { useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import { Wrapper, Content } from "./styles";
import CustomHead from "../../lib/head";

const Layout = ({ children, id, seo, fallbackTitle, shareImage }) => {
  const globalContext = useContext(GlobalContext);
  const fallbackImage = globalContext.global.logo;
  const companyName = globalContext.global.companyName;

  return (
    <>
      <CustomHead
        seo={seo}
        shareImage={shareImage || fallbackImage}
        fallbackTitle={fallbackTitle}
        companyName={companyName}
      />
      <Navigation />
      <Wrapper id={id}>
        <Content>{children}</Content>
        <Footer data={globalContext.global} />
      </Wrapper>
    </>
  );
};

export default Layout;
