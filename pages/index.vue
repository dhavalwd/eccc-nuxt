<template>
  <main class="main" id="main">
    <Hero :backgroundUrl="homeData.heroImage.url">
      <template slot="heroTitle">{{homeData.heroTitle}}</template>
      <nuxt-link
        :to="homeData.heroCtaLink"
        slot="heroCTA"
        class="btn Button"
      >{{homeData.heroCtaText}}</nuxt-link>
      <img src="~/static/images/scroll-icon.svg" slot="heroScroll">
    </Hero>
    <Section class="Section--center">
      <template slot="sectionContent">
        <div class="Section-heading">
          <h2>{{homeData.section1Title}}</h2>
        </div>
        <div class="Section-intro" v-html="homeData.section1Intro.html"></div>
        <nuxt-link :to="homeData.section1CtaLink" class="btn Button">{{homeData.section1CtaText}}</nuxt-link>
      </template>
    </Section>
    <Section class="Section--divider">
      <template slot="sectionContent">
        <div class="Grid Grid--two">
          <div class="Grid-item Grid-item--center">
            <div class="Box">
              <div class="Box-icon">
                <font-awesome-icon :icon="['fa', 'calendar-alt']"/>
              </div>
              <div class="Box-heading">
                <h3>{{homeData.section1ScheduleTitle}}</h3>
              </div>
              <div class="Box-desc">
                <p>{{homeData.section1ScheduleDescription}}</p>
              </div>
              <a
                :href="homeData.section1ScheduleLink"
                class="btn Button Button--link"
                target="_blank"
              >{{homeData.section1ScheduleLinkText}}</a>
            </div>
          </div>
          <div class="Grid-item Grid-item--center">
            <div class="Box">
              <div class="Box-icon">
                <font-awesome-icon :icon="['fa', 'chart-bar']"/>
              </div>
              <div class="Box-heading">
                <h3>{{homeData.section1StatTitle}}</h3>
              </div>
              <div class="Box-desc">
                <p>{{homeData.section1StatDescription}}</p>
              </div>
              <a
                :href="homeData.section1StatLink"
                class="btn Button Button--link"
                target="_blank"
              >{{homeData.section1StatLinkText}}</a>
            </div>
          </div>
        </div>
      </template>
    </Section>
    <Section class="Section--center Section--pink">
      <template slot="sectionContent">
        <div class="Section-heading">
          <h2>{{homeData.ourTeamTitle}}</h2>
        </div>
        <div class="Section-content">
          <div class="Players Players-slider">
            <no-ssr>
              <slick ref="slick" :options="slickOptions">
                <div v-for="playerItem in players" class="Players-item">
                  <div class="Players-image">
                    <img :src="playerItem.playerImage.url" />
                  </div>
                  <div class="Players-content">
                    <p class="Players-name">{{ playerItem.playerName }}</p>
                    <p class="Players-role">{{ playerItem.playerRole }}</p>
                  </div>
                </div>
              </slick>
            </no-ssr>
          </div>
        </div>
        <nuxt-link :to="homeData.ourTeamLink" class="btn Button">{{homeData.ourTeamLinkText}}</nuxt-link>
      </template>
    </Section>
    <Section class="Section--center">
      <template slot="sectionContent">
        <div class="Section-heading">
          <h2>{{homeData.ourSponsorsTitle}}</h2>
        </div>
        <div class="Section-content">
          <div class="Sponsors Grid Grid--three">
            <div v-for="sponsor in sponsors" class="Sponsors-item Grid-item">
              <div class="Sponsors-image">
                <img :src="sponsor.sponsorLogo.url" />
              </div>
            </div>
          </div>
        </div>
        <!-- <nuxt-link :to="homeData.ourSponsorsLink" class="btn Button">{{homeData.ourSponsorsLinkText}}</nuxt-link> -->
      </template>
    </Section>
  </main>
</template>

<script>
import _ from "lodash";

import home from "~/apollo/queries/home";
import Hero from "~/components/Hero";
import Section from "~/components/Section";
const heroBackground = require("~/static/images/home-hero-bg.png");

export default {
  components: {
    home,
    Hero,
    Section,
    heroBackground
  },
  head() {
    return {
      title: "ECCC - East Coast Cricket Club",
      meta: [
        {
          hid: "home",
          name: "east coast cricket club",
          content:
            "East Coast Cricket Club, formerly Halifax Gold, has been most the successful club since the inception of Halifax Cricket league in 2010. We pride ourselves in winning the most championships, the highest player retention and being only club with the most players that represent in the Nova Scotia Provincial team which is the strongest cricket team in Atlantic region."
        }
      ]
    };
  },
  async asyncData({ store, params, payload, error, app }) {
    let { data } = await app.apolloProvider.defaultClient.query({
      query: home,
      prefetch: true,
      variables: { id: "cjwehihwwtsy10830rkh5r7m6" }
    });

    let players = _.sortBy(data.homePage.teamPlayers, ['playerName']);

    return {
      homeData: data.homePage,
      players,
      sponsors: data.homePage.sponsorses
    };
  },
  data() {
    return {
      slickOptions: {
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 0,
        infinite: true,
        prevArrow: '<a href="#" class="slick-prev Players-prev"></a>',
        nextArrow: '<a href="#" class="slick-next Players-next"></a>',
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      heroBackground
    };
  }
};
</script>
