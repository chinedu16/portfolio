<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      // @todo
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
  computed: {
    ...mapState(["aboutMe"]),
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="~/static/passportphoto.jpeg" class="rounded-lg w-96" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <p
        v-for="bio in aboutMe"
        :key="bio.id"
        class="
          font-general-regular
          mb-4
          text-ternary-dark
          dark:text-ternary-light
          text-lg
        "
      >
        {{ bio.bio }}
      </p>
      <div>
        <h4
          class="
            font-general-regular
             text-secondary-dark
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

        <div class="mt-1">
          <ul class="flex flex-wrap ">
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
</template>
