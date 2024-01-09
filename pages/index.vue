<script>
import AppBanner from "../components/shared/AppBanner.vue";
import Button from "../components/reusable/Button.vue";
export default {
  scrollToTop: true,
  components: { AppBanner, Button },

  data() {
    return {
      skillset: [
        "HTML",
        "CSS",
        "JavaScript",
        "APIs",
        "Figma",
        "Vue.js",
        "Nuxt.js",
        "React",
        "Next.js",
        "TypeScript",
        "Pinia",
        "Vuex",
        "TailwindCss",
        "Vuetify",
        "Ant Design",
        "Strapi",
        "Contentfull",
      ],
    };
  },
};
</script>

<template>
  <div class="container mx-auto">
    <AppBanner />

    <div class="pt-10 sm:pt-20 md:pt-24">
      <div class="text-center">
        <p
          class="
            font-general-semibold
            text-2xl
            sm:text-5xl
            font-semibold
            mb-2
            text-ternary-dark
            dark:text-ternary-light
          "
        >
          About Me
        </p>

        <div class="mt-8 sm:mt-10">
          <h3
            class="
              font-general-regular
              text-center
          
              text-md
              sm:text-xl
              font-normal
              mb-4
              font-general-regular
              mb-4
              text-gray-400
              
              text-lg
              leading-normal
            "
          >
            Passionate frontend developer with a flair for crafting visually
            appealing and responsive user interfaces. Proficient in HTML, CSS,
            and JavaScript, I thrive on turning design concepts into elegant,
            interactive web experiences. Keen attention to detail and a
            commitment to delivering seamless and intuitive user journeys.
            Dedicated to staying abreast of emerging web technologies to bring
            innovation to every project. Enthusiastic about creating engaging
            digital solutions that bridge the gap between design and
            functionality.
          </h3>

          <div>
            <h4
              class="
                font-general-regular
                text-center text-secondary-dark
                dark:text-ternary-light
                text-md
                sm:text-xl
                font-normal
                mt-4
                font-general-regular
                mb-4
                text-ternary-dark
                dark:text-ternary-light
                text-lg
                font-semibold
                leading-normal
              "
            >
              Below are a list of my tools and languages
            </h4>

            <div class="mt-10">
              <ul class="flex flex-wrap justify-center">
                <li
                  v-for="i in skillset"
                  class="
                    mr-1.5
                    mt-2
                    font-general-medium
                    items-center
                    px-3
                    py-2
                    w-fit
                    rounded-full
                    shadow-lg
                    hover:shadow-xl
                    bg-indigo-500
                    dark:bg-ternary-dark
                    hover:bg-indigo-600
                    focus:ring-1 focus:ring-indigo-900
                    text-white text-lg
                    sm:text-lg
                    duration-300
                  "
                >
                  {{ i }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProjectsGrid />

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        "
        aria-label="More Projects"
      >
        <Button title="More Projects" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
