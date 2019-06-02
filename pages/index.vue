<template>
  <main class="main" id="main">
      <Hero :title="Hola" :backgroundUrl="homeData.heroImage.url">
        <template slot="heroTitle">{{homeData.heroTitle}}</template>
        <nuxt-link to="/about" slot="heroCTA" class="btn Button">Learn More</nuxt-link>
        <img src="~/static/images/scroll-icon.svg" slot="heroScroll" />
      </Hero>
  </main>
</template>

<script>
  import home from '~/apollo/queries/home'
  import Author from '~/components/author'
  import Hero from '~/components/Hero'
  import IntroBox from '~/components/intro_box'
  import BlogPostCard from '~/components/Blog_Post_Card'
  import Card from '~/components/dv-card'
  import Instafeed from '~/components/instafeed'
  const heroBackground = require('~/static/images/home-hero-bg.png')

  export default {
    components: {
      home,
      Author,
      Hero,
      IntroBox,
      BlogPostCard,
      Card,
      Instafeed,
      heroBackground
    },
    head () {
      return {
        title: 'Dhaval Vyas - Front End Developer',
        meta: [
          { hid: 'home', name: 'dhaval vyas', content: 'Dhaval Vyas is a Front End developer from Halifax, Nova Scotia, Canada. He creates for the web. This is portfolio of Dhaval Vyas.' }
        ]
      }
    },
    async asyncData ({params, payload, error, app}) {
      if (payload) return { allPosts: payload }
      else {
        let {data} = await app.apolloProvider.defaultClient.query(
          { query: home, prefetch: true, variables: {id: 'cjwehihwwtsy10830rkh5r7m6'} }
        )

        console.log(data);

        // ToDo: Convert date in readable format and pass it to data
        // for (let i = 0; i < data.allPosts.length; i++) {
        //   data.allPosts[i].dateAndTime = new Date(data.allPosts[i].dateAndTime).toDateString()
        // }
        return { 
          homeData: data.homePage
        }
      }
    },
    data () {
      return {
        slickOptions: {
          slidesToShow: 1,
          rows: 0,
          infinite: false,
          prevArrow: '<a href="#" class="slick-prev"></a>',
          nextArrow: '<a href="#" class="slick-next"></a>'
        },
        heroBackground
      }
    }
  }
</script>

<style lang="scss" scoped type="text/scss">
  @import 'slick-carousel/slick/slick.css';
  @import '../styles/main.scss';

  .hero {
    position: relative;
  }

  .subtitle {
    color: #f3f3f3;
  }
  
  section.home_about_me {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6em 0;
  }

  .about-me-description {
    font-size: 1.5em;
    text-align: center;
    // @extend %font-lora;
    padding: 2em;
    font-style: italic;
  }

  // Recent Posts
  .Recent_Posts-title {
    h2 {
      text-align: center;
    }
  }
  .Recent_Posts-details {
    display: flex;
    flex-flow: row; 
    flex-wrap: wrap;
  }

  .Recent_Posts-item {
    flex: 0 0 100%;
    padding: 10px;
    margin-bottom: 16px;
  } 

  .noBlogs {
    h2 {
      font-size: 2rem;
    }
  }

  .column {
    width: 100%;
    @media (min-width:640px) {
      width: 33%;
    }
  }

  /* Tablet (medium) screens */
  @media (min-width: 768px) {
    .Recent_Posts-item {
      flex: 0 0 50%;     
    }
  }

  /* Large screens */
  @media (min-width: 960px) {
    .Recent_Posts-item{
      flex: 0 0 33.33%;
    }
    .Recent_Posts-item:first-of-type {
      flex: 0 0 33.33%;
    }
  }

  // Recent Projects
  .Recent_Projects-title {
    padding: 24px 0;
    h2 {
      text-align: center;
    }
  }

  .Recent_Project-columns {
    display: flex;
    flex-flow: row; 
    flex-wrap: wrap;
  }

  .Recent_Project-column {
    width: 100%;
    padding: 20px 30px;

    @media (min-width: 640px) {
      width: 50%;
      padding: 0 24px 32px;
    }
  }

</style>

