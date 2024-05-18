import Head from "next/head";
import { Fragment, useContext } from "react";
import { getProductsBySkin } from "@utils/product";
import sliderData from "@data/slider/home-one.json";
import { HeaderOne as Header } from "@components/header";
import { SliderOne as Slider } from "@components/slider";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ServicesOne as Services } from "@components/services";
import { CategoriesOne as Categories } from "@components/categories";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { PromoBannerOne as PromoBanners } from "@components/promo-banners";
import { BestSelling, TendingProducts as Tending } from "@components/products";
import ShopGrid from "@components/shop/ShopGrid";
import CustomHead from "@components/custom-head";

const Home = () => {
  const { products } = useContext(ProductsContext);
  const productsFashion = getProductsBySkin(products, "fashion");
  const logo = "/assets/images/no-placeholder/logo.png";
  const metadata = {
    title: "İstanbul Escorts - Profesyonel Eskort | Universe Escort",
    description:
      "İstanbul'un tüm ilçelerinde çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort, escorts...",
    conanical: "https://www.universeescort.com",
    openGraph: {
      url: "https://www.universeescort.com",
    },
    twitter: {
      url: "https://www.universeescort.com",
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
        dark={true}
        navData={navContent}
        navbarAlignment="left"
      />

      <ContentWrapper>
        <ShopGrid sidebar={false} products={products} containerFluid={false} />
      </ContentWrapper>

      <Footer logo={logo} dark={false} newsletter={true} />
    </Fragment>
  );
};

export default Home;
