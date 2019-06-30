<template>
  <main class="main" id="main">
    <Hero :backgroundUrl="aboutData.heroImage.url">
      <template slot="heroTitle">{{aboutData.heroTitle}}</template>
    </Hero>
    <Section class="Section">
      <template slot="sectionContent">
        <div class="Content" v-html="aboutData.aboutUsBody.html"></div>
      </template>
    </Section>
  </main>
</template>

<script>
import aboutus from "~/apollo/queries/aboutus";

import Hero from "~/components/Hero";
import Section from "~/components/Section";

export default {
  components: {
    aboutus,
    Hero,
    Section
  },
  async asyncData({ params, payload, error, app }) {
    let { data } = await app.apolloProvider.defaultClient.query({
      query: aboutus,
      prefetch: true,
      variables: { id: "cjx5g773g5zzu0830owznbmo9" }
    });

    return {
      aboutData: data.aboutUs
    };
  },
  head() {
    return {
      title: "About | East Coast Cricket Club",
      meta: [
        {
          hid: "about",
          name: "about",
          content:
            "East Coast Cricket Club (ECCC) was formed as a result of restructure within the Halifax Cricket League (HCL), which is governed by the Nova Scotia Cricket Association (NSCA). The core members of ECCC were part of Halifax Gold team in the former centralized HCL. Halifax Gold dominated the league by winning the HCL championships in 2016 and 2017."
        },
        {
          hid: `og:image`,
          property: "og:image",
          content: this.aboutData.heroImage.url
        }
      ]
    };
  }
};
</script>
