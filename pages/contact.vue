<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "1 Layi Oyekanmi Street, Apapa Lagos, Nigeria",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "chinedu.ohagwu@gmail.com",
          icon: "mail",
        },
        {
          id: 5,
          name: "chinedu.ohagwu@yahoo.com",
          icon: "mail",
        },
        {
          id: 3,
          name: "(+234) 816 5391 233",
          icon: "phone",
        },
        {
          id: 4,
          name: "(+234) 705 5959 007",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <ContactForm />

    <!-- Contact details -->
    <ContactDetails :contacts="contacts" />
  </div>
</template>
