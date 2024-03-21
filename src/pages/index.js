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

const Home = () => {
  const { products } = useContext(ProductsContext);
  const productsFashion = getProductsBySkin(products, "fashion");
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>Universe Escort</title>
      </Head>

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
