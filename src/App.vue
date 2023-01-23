<template>
  <div id="app">
    <router-link to="/roles">Go to Bar</router-link>
    <router-view></router-view>
    <b-card title="Quiz">
      <div>
        <p>Ready?</p>
      </div>
    </b-card>
    <b-card>
      <div>
        <h1 v-b-toggle.collapse-1>What should a CV look like?</h1>
        <b-collapse id="collapse-1">
          <router-link to="/foo">Go to Bar</router-link>
          <router-view></router-view>
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
    <div>
      <b-card>
        <h1 v-b-toggle.collapse-2>Get workplace ready</h1>
        <b-collapse id="collapse-2">
          <p>insert ipsum here</p>
        </b-collapse>
      </b-card>
    </div>
    <div>
      <b-card>
        <h1 v-b-toggle.collapse-3>Confidence building</h1>
        <b-collapse id="collapse-3">
          <p>insert ipsum here</p>
        </b-collapse>
      </b-card>
    </div>
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
