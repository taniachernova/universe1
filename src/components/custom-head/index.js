import React from "react";
import Head from "next/head";

const CustomHead = ({ title, description, conanical, openGraph, twitter }) => {
  let metadata = {
    title: title,
    description: description,
    keywords:
      "İstanbul Escort, Eskort, vip escort, anal escort, olgun escort, gizli buluşma, güvenilir eskort, liseli escort, fetiş eskort",
    viewport: "width=device-width, initial-scale=1",
    httpEquiv: {
      type: "Content-Type",
      content: "text/html; charset=UTF-8",
    },
    mobileWebAppCapable: "Yes",
    appleMobileWebAppCapable: "yes",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    XUACompatible: "IE=edge",
    conanical: conanical,
    openGraph: {
      title: openGraph?.title
        ? openGraph.title
        : "Istanbul Escorts | universeescort.com",
      description: openGraph?.description
        ? openGraph.description
        : "Istanbul'un tüm ilçelerinde çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort, escorts...",

      url: openGraph?.url ? openGraph.url : "https://www.universeescort.com",
      type: "website",
      images: openGraph?.images
        ? openGraph.images
        : [
            {
              url: "https://www.universeescort.com/assets/images/no-placeholder/icon.png",
              width: 600,
              height: 600,
              alt: "Universe Escort",
            },
          ],
      site_name: "universeescort.com",
      locale: "tr_TR",
    },
    twitter: {
      card: twitter?.card ? twitter.card : "summary_large_image",
      title: twitter?.title
        ? twitter.title
        : "Istanbul Escorts | universeescort.com",
      description: twitter?.description
        ? twitter.description
        : "Istanbul'un tüm ilçelerinde çekici, profesyonel, VIP ve seçkin kızlarla eskort hizmetleri burada! İstanbul eskort, İstanbul bayan eskort, escorts...",
      image: twitter?.image
        ? twitter.image
        : "https://www.universeescort.com/assets/images/no-placeholder/icon.png",

      url: twitter?.url ? twitter.url : "https://www.universeescort.com",
    },
  };
  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="viewport" content={metadata.viewport} />
      <meta
        http-equiv={metadata.httpEquiv.type}
        content={metadata.httpEquiv.content}
      />
      <meta
        name="mobile-web-app-capable"
        content={metadata.mobileWebAppCapable}
      />
      <meta
        name="apple-mobile-web-app-capable"
        content={metadata.appleMobileWebAppCapable}
      />
      <meta http-equiv="X-UA-Compatible" content={metadata.XUACompatible} />

      <meta name="robots" content={metadata.robots} />

      <link rel="canonical" href={metadata.conanical}></link>

      {/* Open Graph Metadata */}
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:url" content={metadata.openGraph.url} />
      <meta property="og:type" content={metadata.openGraph.type} />
      <meta property="og:image" content={metadata.openGraph.images[0].url} />
      <meta
        property="og:image:width"
        content={metadata.openGraph.images[0].width}
      />
      <meta
        property="og:image:height"
        content={metadata.openGraph.images[0].height}
      />
      <meta
        property="og:image:alt"
        content={metadata.openGraph.images[0].alt}
      />
      <meta property="og:site_name" content={metadata.openGraph.site_name} />
      <meta property="og:locale" content={metadata.openGraph.locale} />

      {/* Twitter Metadata */}
      <meta name="twitter:card" content={metadata.twitter.card} />
      <meta name="twitter:title" content={metadata.twitter.title} />
      <meta name="twitter:description" content={metadata.twitter.description} />
      <meta name="twitter:image" content={metadata.twitter.image} />
      <meta name="twitter:url" content={metadata.twitter.url} />
    </Head>
  );
};

export default CustomHead;
