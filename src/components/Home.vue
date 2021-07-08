<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="dark-bg relative h-full overflow-hidden">
    <div class="absolute mx-auto lg:w-1/2">
      <!-- <div class="mx-auto max-w-7xl"> -->
      <div class="dark-bg relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
        <svg
          class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <!-- <polygon fill="#462f5b" points="50,0 100,0 50,100 0,100" /> -->
        </svg>

        <Popover>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex flex-grow flex-shrink-0 items-center lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Workflow</span>
                    <img class="w-auto h-8 sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
                  </a>
                  <div class="flex items-center -mr-2 md:hidden">
                    <PopoverButton
                      class="
                        dark-bg
                        inline-flex
                        items-center
                        justify-center
                        p-2
                        text-gray-400
                        hover:text-gray-500
                        hover:bg-gray-100
                        rounded-md
                        focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Open main menu</span>
                      <!-- <HeroiconsMenuOutline class="w-6 h-6" aria-hidden="true" /> -->
                      <img src="../assets/icons/hamburger-menu.svg" class="w-6 h-auto" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-gray-500 hover:text-gray-900 font-medium">{{ item.name }}</a>
                <a href="#" class="hover:text-indigo-500 text-indigo-600 font-medium">Log in</a>
              </div>
            </nav>
          </div>

          <transition
            enter-active-class="duration-150 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <PopoverPanel focus class="absolute inset-x-0 top-0 p-2 transform origin-top-right transition md:hidden">
              <div class="dark-bg rounded-lg shadow-md overflow-hidden ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between pt-4 px-5">
                  <div>
                    <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton
                      class="
                        dark-bg
                        inline-flex
                        items-center
                        justify-center
                        p-2
                        text-gray-400
                        hover:text-gray-500
                        hover:bg-gray-100
                        rounded-md
                        focus:outline-none
                        focus:ring-2 focus:ring-inset focus:ring-indigo-500
                      "
                    >
                      <span class="sr-only">Close main menu</span>
                      <!-- <HeroiconsXOutline class="w-6 h-6" aria-hidden="true" /> -->
                    </PopoverButton>
                  </div>
                </div>
                <div class="pb-3 pt-2 px-2 space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="block px-3 py-2 text-gray-700 hover:text-gray-900 text-base font-medium hover:bg-gray-50 rounded-md"
                    >{{ item.name }}</a
                  >
                </div>
                <a href="#" class="block px-5 py-3 w-full text-center text-indigo-600 font-medium hover:bg-gray-100 bg-gray-50"> Log in </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <main class="mt-10 mx-auto px-4 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-white text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Data to enrich your</span>
              {{ " " }}
              <span class="block text-indigo-600 xl:inline">online business</span>
            </h1>
            <p class="mt-3 text-gray-500 text-base sm:mt-5 sm:mx-auto sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div class="mt-5 sm:flex sm:justify-center sm:mt-8 lg:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    w-full
                    text-white text-base
                    font-medium
                    bg-indigo-600
                    hover:bg-indigo-700
                    border border-transparent
                    rounded-md
                    md:px-10
                    md:py-4
                    md:text-lg
                  "
                >
                  Get started
                </a>
              </div>
              <div class="mt-3 sm:ml-3 sm:mt-0">
                <a
                  href="#"
                  class="
                    flex
                    items-center
                    justify-center
                    px-8
                    py-3
                    w-full
                    text-indigo-700 text-base
                    font-medium
                    bg-indigo-100
                    hover:bg-indigo-200
                    border border-transparent
                    rounded-md
                    md:px-10
                    md:py-4
                    md:text-lg
                  "
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="absolute z-20 bottom-0 lg:bottom-auto lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="lg:max-h-1xl w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="../assets/dark/hero.png" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
// declare module '@heroicons/*';
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    //    HeroiconsMenuOutline,
    //  HeroiconsXOutline,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>

<style scoped></style>
