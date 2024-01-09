<script>
export default {
  scrollToTop: true,
  data: () => {
    return {
      experiences: [
        {
          id: 1,
          role: "Senior Frontend Engineer",
          company: "Leatherback",
          timeframe: "Mar 2022 - Present",
          link: "https://leatherback.co/",
          description:
            "Design and implement new features and enhancements using NuxtJs on the client application - Debugging and Improvement of existing systems",
          skillsets: [
            "Vue.js",
            "Nuxt.js",
            "TypeScript",
            "Pinia",
            "Vuex",
            "TailwindCss",
            "Ant Design",
            "Contentfull",
          ],
        },
        {
          id: 2,
          role: "Software Engineer (Frontend)",
          company: "Youverify",
          timeframe: "Oct 2021 - Nov 2022",
          link: "https://youverify.co/",
          description:
            "Design and implement new features and enhancements using Vue.js, Fix bugs assigned during the sprint planning process, Design, innovate and solve complex problems inherent in operating a high scale classifieds platform, Play a key role in reviewing and approving the work of your peers as part of the software development process, Interact with product owners, partners, and business stakeholders to understand and develop requirements, Debugging and Improvement of existing systems, Building modular and reusable components and libraries, Other tasks as assigned by management.",
          skillsets: ["Vue.js", "Nuxt.js", "Vuex", "TailwindCss", "Strapi"],
        },
        {
          id: 3,
          role: "Front-End Software Engineer",
          company: "Spinel Consulting",
          timeframe: "Aug 2021 - Jul 2022",
          link: "https://spinel.consulting/",
          description:
            "Meeting with the development team to discuss user interface ideas and applications. Reviewing application requirements and interface designs. Identifying web-based user interactions. Developing and implementing highly responsive user interface components using react concepts. Writing application interface codes using JavaScript following react.js workflows. Troubleshooting interface software and debugging application codes. Developing and implementing front-end architecture to support user interface concepts. Monitoring and improving front-end performance. Documenting application changes and developing updates",
          skillsets: [
            "React",
            "Redux",
            "APIs",
            "TailwindCss",
            "Styled components",
          ],
        },
        {
          id: 4,
          role: "Lead Front End Developer",
          company: "ZKTeco West Africa",
          timeframe: "Jul 2020 - Aug 2021",
          link: "https://www.zkteco-wa.com/",
          description:
            "Convert high fidelity designs and prototypes into mobile responsive HTML CSS. Suggest ideas for how to improve user experience and flow. Play a key role in reviewing and approving the work of your peers as part of the software development process. Interact with product owners, partners, and business stakeholders to understand and develop requirements",
          skillsets: [
            "Vue.js",
            "Nuxt.js",
            "Vuex",
            "TailwindCss",
            "Strapi",
            "Vuetify",
          ],
        },
        {
          id: 6,
          role: "Fullstack Engineer",
          company: "ASB Technologies",
          timeframe: "Feb 2020 - Jul 2020",
          link: "https://asb.ng/",
          description:
            "Convert high fidelity designs and prototypes into mobile responsive HTML CSS. Work with leadership and product managers to provide an engineering perspective to the evolution of the product requirements and backlog. Suggest ideas for how to improve user experience and flow. See web-based projects from conception to functional product",
          skillsets: ["React", "Gridsome", "forestry.io", "NodeJs", "SASS"],
        },
        {
          id: 7,
          role: "Junior Software Developer",
          company: "ASB Technologies",
          timeframe: "Jun 2018 - Nov 2019",
          link: "https://www.fieldinsight.io/",
          description:
            "- Maintained existing applications and designed and delivered new applications. Developed code fixes and enhancements for inclusion in future code releases and patches. Modified existing software to correct errors adapt to new hardware and improve performance",
          skillsets: ["Vuejs", "SailsJs", "React", "SCSS", 'Javascript'],
        },
      ],
    };
  },
  computed: {
    // @todo
  },
};
</script>

<template>
  <div class="container mx-auto">
    <div class="pt-10 sm:pt-20 md:pt-24">
      <!-- Projects grid header -->
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
          Experience
        </p>
        <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
        <!-- <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p> -->
      </div>

      <!-- Filter and search projects -->
      <div class="mt-8">
        <h3
          class="
            font-general-regular
            text-center text-secondary-dark
            dark:text-ternary-light
            text-md
            sm:text-xl
            font-normal
            mb-4
          "
        >
          Here are the timeline of experience i have
        </h3>
      </div>

      <div class="mt-8 space-y-10">
        <div class="md:flex justify-between" v-for="item in experiences">
          <div
            class="md:w-3/12 text-secondary-dark dark:text-ternary-light text-xl"
          >
            {{ item.timeframe }}
          </div>
          <div class="md:w-10/12">
            <a :href="item.link" target="_blank" rel="noopener noreferrer">
              <span
                class="
                  ext-center
                  text-secondary-dark
                  dark:text-ternary-light
                  text-xl
                "
                >{{ item.role }} ·
                <span class="inline-block"
                  >{{ item.company }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="
                      inline-block
                      h-4
                      w-4
                      shrink-0
                      transition-transform
                      group-hover/link:-translate-y-1
                      group-hover/link:translate-x-1
                      group-focus-visible/link:-translate-y-1
                      group-focus-visible/link:translate-x-1
                      motion-reduce:transition-none
                      ml-1
                      translate-y-px
                    "
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path></svg></span
              ></span>
            </a>
            <p
              class="
                mt-2
                text-base
                leading-6
                text-gray-400
                font-normal
                text-justify
              "
            >
              {{ item.description }}
            </p>
            <div class="mt-1">
              <ul class="flex flex-wrap">
                <li
                  v-for="i in item.skillsets"
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
  </div>
</template>

<style lang="scss" scoped></style>
