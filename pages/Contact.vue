<template>
  <main class="main" id="main">
    <Hero :backgroundUrl="contactData.heroImage.url">
      <template slot="heroTitle">{{contactData.heroTitle}}</template>
    </Hero>
    <Section class="Section">
      <template slot="sectionContent">
        <div class="Content">
          <form
            name="contact"
            method="POST"
            class="Form Form--compressed"
            action="https://www.elformo.com/forms/6016c647-5d2b-400d-bbce-ee3ab7acd3bf"
          >
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Name"
                v-model="name"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="abc@test.com"
              />
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                rows="5"
                cols="50"
                name="message"
                class="form-control"
                id="message"
                placeholder="Provide your message here."
                v-model="message"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-default Button">Submit</button>
          </form>
        </div>
      </template>
    </Section>
  </main>
</template>

<script>
import contact from "~/apollo/queries/contact";

import Hero from "~/components/Hero";
import Section from "~/components/Section";

export default {
  components: {
    contact,
    Hero,
    Section
  },
  async asyncData({ params, payload, error, app }) {
    let { data } = await app.apolloProvider.defaultClient.query({
      query: contact,
      prefetch: true,
      variables: { id: "cjx7sx5qoepph0830a5x3kfiu" }
    });

    return {
      contactData: data.contact
    };
  },
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  head() {
    return {
      title: "Contact | East Coast Cricket Club",
      meta: [
        {
          hid: "contact",
          name: "contact",
          content:
            "East Coast Cricket Club (ECCC) was formed as a result of restructure within the Halifax Cricket League (HCL), which is governed by the Nova Scotia Cricket Association (NSCA). The core members of ECCC were part of Halifax Gold team in the former centralized HCL. Halifax Gold dominated the league by winning the HCL championships in 2016 and 2017."
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: this.contactData.heroImage.url
        }
      ]
    };
  }
};
</script>
