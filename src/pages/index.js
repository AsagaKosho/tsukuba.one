import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{textAlign: 'center'}}>
      筑波大学の学生向けWebサービスのためのサブドメイン提供サービスです。<br/>
      詳細はしばらくお待ち下さい。
    </div>
  </Layout>
)

export default IndexPage
