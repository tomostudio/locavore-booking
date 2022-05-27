import client from '@/helpers/sanity/client'
import Footer from '@/components/modules/footer'
import HeaderGap from '@/components/modules/headerGap'
import Layout from '@/components/modules/layout'
import SEO from '@/components/utils/seo'

const Error500 = ({ seoAPI, footerAPI }) => {
  const [seo] = seoAPI
  const [footer] = footerAPI
  return (
    <Layout>
      <SEO
        title={'500'}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <main>
        {/* <Error statusCode={500} /> */}
        <div className="setflex-center min-h-screen text-center">
          <HeaderGap />
          <h1 className="font-sans ">
            Error <span className="font-default">500</span>
          </h1>
          <span className=" text-lg">Page Not Found</span>
        </div>
        <Footer footer={footer} mailchimp={seo.mailchimpID} />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `)
  const headerAPI = await client.fetch(`
      *[_type == "header"]
      `)

  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `)
  return {
    props: {
      seoAPI,
      headerAPI,
      footerAPI,
    },
  }
}

export default Error500
