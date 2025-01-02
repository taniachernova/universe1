import Head from "next/head";
import { Fragment, useContext } from "react";
import ShopGrid from "@components/shop/ShopGrid";
import Breadcrumb from "@components/ui/breadcrumb";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageShop = () => {
  const { products } = useContext(ProductsContext);
  const logo = "/assets/images/no-placeholder/logo.png";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://universeescort.com/escorts/",
        url: "https://universeescort.com/escorts/",
        name: "Bakırköy Escort - Profesyonel Eskort Bayanlar | Eskort Bakırköy - Universe Escort",
        isPartOf: {
          "@id": "https://universeescort.com/escorts/#website",
        },
        description:
          "Bakırköy'de çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! Bakırköy eskort, Bakırköy bayan eskort...",
        breadcrumb: {
          "@id": "https://universeescort.com/escorts/#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://universeescort.com/escorts/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: "https://universeescort.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Turkey",
            item: "https://universeescort.com/escorts/",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://universeescort.com/#website",
        url: "https://universeescort.com/escorts/",
        name: "UniverseEscort.com",
        description:
          "Bakırköy'de çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! Bakırköy eskort, Bakırköy bayan eskort...",
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
        url: "https://universeescort.com/escorts/",
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
          Bakırköy Escort - Profesyonel Eskort Bayanlar | Eskort Bakırköy -
          Universe Escort
        </title>
        <meta name="keywords" content="Bakırköy escort, İstanbul Bakırköy bayanlar, Bakırköy güvenilir eskort, Bakırköy vip hizmet, Bakırköy gizli buluşma, Bakırköy fetiş eskort, Bakırköy olgun bayanlar, Bakırköy liseli escort, esc, escort">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Bakırköy'de çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! Bakırköy eskort, Bakırköy bayan eskort..."
        />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Bakırköy Escort | universeescort.com"
        />
        <meta
          property="og:description"
          content="Bakırköy'nde çekici, profesyonefl ve seçkin kızlarla eskort hizmetleri burada! Bakırköy eskort, Bakırköy bayan eskort..."
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
