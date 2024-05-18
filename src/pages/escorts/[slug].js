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
import CustomHead from "@components/custom-head";

const PageProductDetails = ({ product }) => {
  const {
    description,
    categories,
    excerpt,
    name,
    title,
    types,
    previewImages,
  } = product;
  const slug = `/escorts/${name.toLowerCase().split(" ").join("-")}`;

  const logo = "/assets/images/no-placeholder/logo.png";
  const metadata = {
    title: `${name} - İstanbul Eskort | Universe Escort`,
    description: `İstanbul'un ateşli eskortu ${name}, ayrıntılı profiline göz atın. UniverseEscort.com'da özel eskort profili, seksi ve ateşli hizmetleriyle sizi bekliyor.`,
    conanical: `https://www.universeescort.com${slug}`,
    openGraph: {
      title: `${name} - Istanbul Escort`,
      description: `İstanbul'un ateşli eskortu ${name}, ayrıntılı profiline göz atın. UniverseEscort.com'da özel eskort profili, seksi ve ateşli hizmetleriyle sizi bekliyor.`,
      url: `https://www.universeescort.com${slug}`,
      images: [
        {
          url:
            previewImages.length > 0 && previewImages[0]
              ? `https://www.universeescort.com${previewImages[0]}`
              : "https://www.universeescort.com/assets/images/no-placeholder/icon.png",
          alt: `${name}`,
        },
      ],
    },
    twitter: {
      title: `${name} - Istanbul Escort`,
      description: `İstanbul'un ateşli eskortu ${name}, ayrıntılı profiline göz atın. UniverseEscort.com'da özel eskort profili, seksi ve ateşli hizmetleriyle sizi bekliyor.`,
      image:
        previewImages.length > 0 && previewImages[0]
          ? `https://www.universeescort.com${previewImages[0]}`
          : "https://www.universeescort.com/assets/images/no-placeholder/icon.png",
      url: `https://www.universeescort.com${slug}`,
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
