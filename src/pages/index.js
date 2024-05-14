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
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://universeescort.com/",
        url: "https://universeescort.com/",
        name: "İstanbul Escort - Profesyonel Eskort Bayanlar | Eskort İstanbul - Universe Escort",
        isPartOf: {
          "@id": "https://universeescort.com/#website",
        },
        description:
          "İstanbul'un tüm ilçelerinde çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort...",
        breadcrumb: {
          "@id": "https://universeescort.com/#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://universeescort.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://universeescort.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Turkey",
            item: "https://universeescort.com/escort/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Istanbul",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://universeescort.com/#website",
        url: "https://universeescort.com/",
        name: "UniverseEscort.com",
        description:
          "İstanbul'un tüm ilçelerinde çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort...",
        publisher: {
          "@id": "https://universeescort.com/#organization",
        },
        alternateName: "unverseescorts",
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://universeescort.com/?s={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": "https://universeescort.com/#organization",
        name: "universeescort.com",
        alternateName: "UniverseEscort",
        url: "https://universeescort.com/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://universeescort.com/#/schema/logo/image/",
          width: 512,
          height: 512,
          caption: "universeescort.com",
        },
      },
    ],
  };
  return (
    <Fragment>
      <Head>
        <title>
          İstanbul Escort - Profesyonel Eskort Bayanlar | Eskort İstanbul -
          Universe Escort
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="İstanbul'un tüm ilçelerinde çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort..."
        />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Istanbul Escort | universeescort.com"
        />
        <meta
          property="og:description"
          content="İstanbul'un tüm ilçelerinde çekici, profesyonel ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort..."
        />
        <meta property="og:url" content="https://universeescort.com/" />
        <meta property="og:site_name" content="universeescort.com" />
        <meta
          property="og:image"
          content="../public/assets/images/no-placeholder/logo.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link rel="canonical" href="https://universeescort.com/" /> */}
        {/* <script type="application/ld+json">{JSON.stringify(schema)}</script> */}
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
