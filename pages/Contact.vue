<template>
    <main class="main" id="main">
      <Hero :backgroundUrl="contactData.heroImage.url">
        <template slot="heroTitle">{{contactData.heroTitle}}</template>
      </Hero>
      <Section class="Section">
        <template slot="sectionContent">
          <form name="contact" method="POST" netlify class="Form Form--compressed" action="/Contact-success">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="abc@test.com">
            </div>
            <div class="form-group">
              <label for="message">Message</label>
               <textarea rows="5" cols="50" name="message" class="form-control" id="message" placeholder="Provide your message here." required></textarea>
            </div>
            <button type="submit" class="btn btn-default Button">Submit</button>
          </form>
        </template>
      </Section>
    </main>
</template>

<script>
  import contact from "~/apollo/queries/contact";

  import Hero from "~/components/Hero"
  import Section from "~/components/Section"

  export default {
    components: {
      contact,
      Hero,
      Section
    },
    async asyncData ({params, payload, error, app}) {
      let { data } = await app.apolloProvider.defaultClient.query({
        query: contact,
        prefetch: true,
        variables: { id: "cjx7sx5qoepph0830a5x3kfiu" }
      });

      return {
        contactData: data.contact,
      }
    },
    head () {
      return {
        title: 'Contact | East Coast Cricket Club',
        meta: [
          { hid: 'contact', name: 'contact', content: 'East Coast Cricket Club (ECCC) was formed as a result of restructure within the Halifax Cricket League (HCL), which is governed by the Nova Scotia Cricket Association (NSCA). The core members of ECCC were part of Halifax Gold team in the former centralized HCL. Halifax Gold dominated the league by winning the HCL championships in 2016 and 2017.' }
        ]
      }
    }
  }
</script>
