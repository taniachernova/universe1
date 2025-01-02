import Head from "next/head";
import { Fragment } from "react";
import products from "@data/products";
import Breadcrumb from "@components/ui/breadcrumb";
import SocialShare from "@components/social-share";
import { RelatedProducts } from "@components/products";
import { FooterOne as Footer } from "@components/footer";
import { HeaderOne as Header } from "@components/header";
import ProductDetails from "@components/product-details";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageProductDetails = ({ product }) => {
  const { categories, excerpt, name, title, types } = product;
  const slug = `/escort/${name.toLowerCase().split(" ").join("-")}`;

  const logo = "/assets/images/no-placeholder/logo.png";
  // const schema = {
  //   "@context": "https://schema.org",
  //   "@graph": [
  //     {
  //       "@type": "WebPage",
  //       "@id": `https://universeescort.com/escort/${name
  //         .toLowerCase()
  //         .split(" ")
  //         .join("-")}/`,
  //       url: `https://universeescort.com/escort/${name
  //         .toLowerCase()
  //         .split(" ")
  //         .join("-")}/`,
  //       name: `${name} - ${title}  - Universe Escort`,
  //       isPartOf: {
  //         "@id": "https://universeescort.com/#website",
  //       },
  //       datePublished: "2024-04-10T13:19:08+00:00",
  //       dateModified: "2024-04-10T13:19:08+00:00",
  //       description: `Mesleğinin hakkını veren seksi eskortların Bakırköy’de neler sunduğunu bilmeyenler olabilir. Esmer escort kadınlara olan ilgi her geçen gün artmaktadır ve`,
  //       breadcrumb: {
  //         "@id": `https://universeescort.com/escort/${name
  //           .toLowerCase()
  //           .split(" ")
  //           .join("-")}/#breadcrumb`,
  //       },
  //       inLanguage: "tr",
  //       potentialAction: [
  //         {
  //           "@type": "ReadAction",
  //           target: [
  //             `https://universeescort.com/escort/${name
  //               .toLowerCase()
  //               .split(" ")
  //               .join("-")}/`,
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       "@type": "BreadcrumbList",
  //       "@id": `https://universeescort.com/escort/${name
  //         .toLowerCase()
  //         .split(" ")
  //         .join("-")}/#breadcrumb`,
  //       itemListElement: [
  //         {
  //           "@type": "ListItem",
  //           position: 1,
  //           name: "Ana Sayfa",
  //           item: "https://universeescort.com/",
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 2,
  //           name: "Escort",
  //           item: "https://universeescort.com/escort/",
  //         },
  //         {
  //           "@type": "ListItem",
  //           position: 3,
  //           name: `${name} - ${title}  - Universe Escort`,
  //         },
  //       ],
  //     },
  //     {
  //       "@type": "WebSite",
  //       "@id": "https://universeescort.com/#website",
  //       url: "https://universeescort.com/",
  //       name: `${name} - ${title}  - Universe Escort`,
  //       description: `Bakırköy'un ateşli eskortu ${name}'nın ayrıntılı profiline göz atın. UniverseEscort.com'daki özel eskort profili, 
  //         seksi fotoğrafları, videoları ve ateşli hizmetleriyle sizi bekliyor.`,
  //       publisher: {
  //         "@id": "https://universeescort.com/#organization",
  //       },
  //       potentialAction: [
  //         {
  //           "@type": "SearchAction",
  //           target: {
  //             "@type": "EntryPoint",
  //             urlTemplate: "https://universeescort.com/?s={search_term_string}",
  //           },
  //           "query-input": "required name=search_term_string",
  //         },
  //       ],
  //       inLanguage: "tr",
  //     },
  //     {
  //       "@type": "Organization",
  //       "@id": "https://universeescort.com/#organization",
  //       name: `${name} - ${title}  - Universe Escort`,
  //       url: "https://universeescort.com/",
  //       logo: {
  //         "@type": "ImageObject",
  //         inLanguage: "tr",
  //         "@id": "https://universeescort.com/#/schema/logo/image/",
  //         url: logo,
  //         contentUrl: logo,
  //         caption: "Bakırköy escort - Universe Escort",
  //       },
  //       image: {
  //         "@id": logo,
  //       },
  //     },
  //   ],
  // };
  console.log("PAGE REDIRECT")
  return (
    <Fragment>
      <Head>
        <title>{name + " - " + title + "  - Universe Escort"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`Bakırköy'ün ateşli eskortu ${name}'nın ayrıntılı profiline göz atın. UniverseEscort.com'daki özel eskort profili, 
          seksi fotoğrafları, videoları ve ateşli hizmetleriyle sizi bekliyor.`}
        />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={name + " - Bakırköy Escort | universeescort.com"}
        />
        <meta
          name="og:description"
          content={`Bakırköy'ün ateşli eskortu ${name}'nın ayrıntılı profiline göz atın. UniverseEscort.com'daki özel eskort profili, 
          seksi fotoğrafları, videoları ve ateşli hizmetleriyle sizi bekliyor.`}
        />
        <meta
          property="og:url"
          content={`https://universeescort.com/escort/${name}`}
        />
        <meta property="og:site_name" content="universeescort.com" />
        <meta
          property="og:image"
          content="../public/assets/images/no-placeholder/logo.png"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <link
          rel="canonical"
          href={`https://universeescort.com/escort/${name}`}
        /> */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        /> */}
      </Head>

      <Header
        logo={logo}
        navbar={true}
        navData={navContent}
        navbarAlignment="left"
      />
      <ContentWrapper>
        <Breadcrumb />

        <ProductDetails product={product} />
        <SocialShare url={slug} content={name} />
        <RelatedProducts categories={categories} types={types} />
      </ContentWrapper>
      <Footer logo={logo} />
    </Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  const product = products.find(
    (product) => product.name.toLowerCase().split(" ").join("-") === params.slug
  );
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: products.map((product) => {
      return {
        params: {
          slug: product.name.toLowerCase().split(" ").join("-"),
        },
      };
    }),
    fallback: false,
  };
};

export default PageProductDetails;
