import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import urlFor from '@/helpers/sanity/urlFor';

const SEO = ({
  inputSEO = '',
  defaultSEO = '',
  webTitle = '',
  title = 'Locavore',
  pagelink = 'https://book.locavorenext.com',
}) => {
  const description =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_description !== 'undefined' &&
    inputSEO.seo_description
      ? inputSEO.seo_description // Check and Get Input
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_description !== 'undefined' &&
        defaultSEO.seo_description
      ? defaultSEO.seo_description // Check and Get Default
      : ''; // Insert Blank
  const image =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_image !== 'undefined' &&
    typeof inputSEO.seo_image.asset !== 'undefined' &&
    inputSEO.seo_image
      ? urlFor(inputSEO.seo_image).url() // Check and Get Input
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_image !== 'undefined' &&
        typeof defaultSEO.seo_image.asset !== 'undefined' &&
        defaultSEO.seo_image
      ? urlFor(defaultSEO.seo_image).url() // Check and Get Default
      : ''; // Insert Blank

  const image_alt =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_image !== 'undefined' &&
    typeof inputSEO.seo_image.name !== 'undefined' &&
    inputSEO.seo_image.name
      ? inputSEO.seo_image.name
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_image !== 'undefined' &&
        defaultSEO.seo_image.name
      ? defaultSEO.seo_image.name
      : '';

  const meta_keywords =
    typeof inputSEO !== 'undefined' &&
    typeof inputSEO.seo_keywords !== 'undefined' &&
    inputSEO.seo_keywords
      ? inputSEO.seo_keywords
      : typeof defaultSEO !== 'undefined' &&
        typeof defaultSEO.seo_keywords !== 'undefined' &&
        defaultSEO.seo_keywords
      ? defaultSEO.seo_keywords
      : '';

  const pagetitle = title && webTitle ? `${title} • ${webTitle}` : `Locavore®`;
  const canonicalLink = `https://book.locavorenext.com${
    pagelink ? `${pagelink.startsWith('/') ? '' : '/'}${pagelink}` : ''
  }`;

  return (
    <>
      <NextSeo
        title={pagetitle}
        description={description}
        canonical={canonicalLink}
        openGraph={{
          url: canonicalLink,
          title: pagetitle,
          description: description,
          images: [
            {
              url: image,
              alt: image_alt,
            },
          ],
          site_name: 'Locavore Booking',
        }}
        twitter={{
          site: 'Locavore Booking',
          cardType: 'summary_large_image',
        }}
      />
      <Head>
        <meta name='keywords' content={meta_keywords} />
      </Head>
    </>
  );
};

export default SEO;
