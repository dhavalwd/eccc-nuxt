<template>
    <main class="main" id="main">
      <Hero :backgroundUrl="teamData.heroImage.url">
        <template slot="heroTitle">{{teamData.heroTitle}}</template>
      </Hero>
      <Section class="Section--maroon">
        <template slot="sectionContent">
          <div class="Players Players--grid">
            <div v-for="playerItem in players" class="Players-item" v-bind:key="playerItem.id">
              <div class="Players-image">
                <img :src="playerItem.playerImage.url" />
              </div>
              <div class="Players-content">
                <p class="Players-name">{{ playerItem.playerName }}</p>
                <p class="Players-role">{{ playerItem.playerRole }}</p>
              </div>
            </div>
          </div>
        </template>
      </Section>
    </main>
</template>

<script>
  import _ from "lodash";

  import aboutus from "~/apollo/queries/aboutus";
  import team from "~/apollo/queries/team";

  import Hero from "~/components/Hero"
  import Section from "~/components/Section"

  export default {
    components: {
      aboutus,
      team,
      Hero,
      Section
    },
    async asyncData ({params, payload, error, app}) {
      let { data } = await app.apolloProvider.defaultClient.query({
        query: team,
        prefetch: true,
        variables: { id: "cjx7pep0wegic0830l152hru9" }
      });

      let players = _.sortBy(data.team.players, ['playerName']);

      return {
        teamData: data.team,
        players
      }
    },
    head () {
      return {
        title: 'Our Team | East Coast Cricket Club',
        meta: [
          { hid: 'ourteam', name: 'ourteam', content: 'East Coast Cricket Club (ECCC) was formed as a result of restructure within the Halifax Cricket League (HCL), which is governed by the Nova Scotia Cricket Association (NSCA). We are very proud to present our team.' }
        ]
      }
    }
  }
</script>
