<template>
  <div id="app">
    <b-card title="Tooltiptesting">
      <b-card-text class="p-3"
        >I'm baby do brunch la croix chicharrones sunt. Gatekeep lorem keffiyeh
        everyday carry celiac, fit organic dolor. Paleo +1 lorem hashtag.
        <mark v-b-tooltip.hover title="I'm a little tooltip"
          >Scenester food truck artisan</mark
        >
        godard fit pop-up exercitation vinyl tilde. DSA chambray veniam, big
        mood irure keytar snackwave
        <mark v-b-tooltip.hover title="yummy kale chips">kale chips</mark>
        coloring book enim quis semiotics whatever plaid culpa. Food truck id ad
        banjo commodo meditation. Brunch artisan iPhone hashtag aliquip in
        shabby chic listicle tonx franzen quis veniam. Jianbing craft beer
        seitan you probably haven't heard of them tacos ethical quinoa subway
        tile vice cillum. Echo park keffiyeh vexillologist, sus cornhole
        adipisicing you probably haven't heard of them church-key anim nulla
        meditation vaporware ea. Chartreuse deserunt echo park,
        <mark v-b-tooltip.hover title="miso hipster">hashtag typewriter</mark>
        officia scenester austin kinfolk etsy pabst paleo non aute seitan.
        Hexagon viral lumbersexual photo booth bitters VHS gatekeep pork belly
        consectetur la croix anim. Vibecession semiotics polaroid jianbing
        kombucha stumptown. Vice jean shorts enim lo-fi godard synth mixtape
        laboris laborum yuccie pinterest tote bag migas selfies. Ugh selfies
        distillery raw denim. Dummy text? More like dummy thicc text,
        amirite?</b-card-text
      >
      <b-card-text class="p-3">
        <mark v-b-tooltip.hover title="tooltip"
          >Cray tofu est shoreditch in vegan cupidatat cardigan sriracha
          kickstarter officia fingerstache humblebrag adipisicing.</mark
        >
        Distillery in twee sed beard. Ramps lorem man braid scenester eu.
        Consequat photo booth pitchfork crucifix sed food truck. Eu street art
        reprehenderit, waistcoat humblebrag chia
        <mark v-b-tooltip.hover title="tooltip">small batch swag</mark> salvia
        schlitz. Selvage VHS semiotics vinyl, lorem coloring book tousled
        chicharrones YOLO PBR&B edison bulb mlkshk slow-carb hoodie copper mug.
        Tofu retro lumbersexual, sriracha JOMO locavore schlitz poke pitchfork
        photo booth. Sartorial irony asymmetrical fixie authentic, jean shorts
        chicharrones VHS ut. Sartorial esse tbh microdosing, waistcoat neutra
        hashtag retro shaman do kogi taxidermy. Occaecat shabby chic crucifix,
        tonx edison bulb freegan asymmetrical ascot gastropub lomo swag do vegan
        in deserunt.
        <mark v-b-tooltip.hover title="you're right, i haven't"
          >You probably haven't heard of them</mark
        >
        pickled chambray, cray quis fashion axe nostrud next level. Asymmetrical
        umami offal dolor gochujang leggings trust fund blog aesthetic live-edge
        YOLO. Hashtag Hashtag post-ironic farm-to-table pitchfork.</b-card-text
      >
    </b-card>
    <b-card>
      <div>
        <h1 v-b-toggle.collapse-1>What should a CV look like?</h1>
        <b-collapse id="collapse-1">
          <div class="cv">
            <h2>FirstName LastName</h2>
            <h3
              v-b-tooltip.hover
              title="Make sure you add a number that employers can reach you on - you want them to be able to get in touch with you!"
            >
              <mark>Contact Number: 07000 000000</mark>
            </h3>
            <h3
              v-b-tooltip.hover
              title="Make sure this is your email address, and you check it regularly"
            >
              <mark>Email: anyone@anywhere.com</mark>
            </h3>
            <div class="cv-inner">
              <h4
                v-b-tooltip.hover
                title="A paragraph to introduce yourself to the reader, so they can get to know you."
              >
                <mark>Personal Summary</mark>
              </h4>
              <p
                v-b-tooltip.hover
                title="Keep this short! Talk about your education, work history (if any) and aims."
              >
                I am a hard-working individual looking for my first role in the
                tech industry. I have recently completed a Prince's Trust Get
                Into Development course.
              </p>
              <h4
                v-b-tooltip.hover
                title="You just need a bullet-point list here. You don't need to write lots, just give examples"
              >
                <mark>Skills</mark>
              </h4>
              <ul>
                <li>
                  Team work - worked on a small project as part of PT course
                </li>
                <li>
                  Communication - two weeks of work experience as school
                  receptionist
                </li>
                <li>
                  Coding - I know the basics of JavaScript, React, HTML and CSS
                </li>
              </ul>
              <h4
                v-b-tooltip.hover
                title="If you don't have any work experience, talk about volunteering."
              >
                <mark>Work Experience</mark>
              </h4>
              <p
                v-b-tooltip.hover
                title="Mention the company, the dates you worked there, and your responsibilities."
              >
                <mark
                  >Made Up Company, Made Up Town - Receptionist, June 2022.
                  Answering queries in a prompt manner, while delivering
                  excellent customer service.</mark
                >
              </p>
              <h4><mark>Education</mark></h4>
              <p
                v-b-tooltip.hover
                title="You don't need to list all your qualifications, but make sure to mention English and Maths, if you have them."
              >
                Made Up School, Made Up Town - 5 GCSEs at Grades A* - E,
                including English and Maths
              </p>
              <h4
                v-b-tooltip.hover
                title="Don't talk about your social life or parties here - stick to hobbies like music, sport or other similar interests."
              >
                <mark>Interests</mark>
              </h4>
              <p>
                I build computers in my spare time, as well as playing indoor
                football.
              </p>
            </div>
          </div>
        </b-collapse>
      </div>
    </b-card>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.cv {
  padding: 30px;
}

.cv-inner {
  padding-top: 20px;
  padding: 20px;
}
</style>
