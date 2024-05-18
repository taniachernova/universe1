import Head from "next/head";
import { Fragment, useContext } from "react";
import ShopGrid from "@components/shop/ShopGrid";
import Breadcrumb from "@components/ui/breadcrumb";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import CustomHead from "@components/custom-head";

const PageShop = () => {
  const { products } = useContext(ProductsContext);
  const logo = "/assets/images/no-placeholder/logo.png";
  const metadata = {
    title: "İstanbul Escorts - Profesyonel Eskort | Universe Escort",
    description:
      "İstanbul'un tüm ilçelerinde çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort, escorts...",
    conanical: "https://www.universeescort.com/escorts",
    openGraph: {
      url: "https://www.universeescort.com/escorts",
    },
    twitter: {
      url: "https://www.universeescort.com/escorts",
    },
  };
  return (
    <Fragment>
      <CustomHead
        title={metadata.title}
        description={metadata.description}
        conanical={metadata.conanical}
        openGraph={metadata.openGraph}
        twitter={metadata.twitter}
      />

      <Header
        logo={logo}
        navbar={true}
        navData={navContent}
        navbarAlignment="left"
      />
      <ContentWrapper>
        <Breadcrumb />

        <ShopGrid sidebar={false} products={products} containerFluid={false} />
      </ContentWrapper>
      <Footer logo={logo} newsletter={true} />
    </Fragment>
  );
};

export default PageShop;
