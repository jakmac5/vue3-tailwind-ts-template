<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="dark-bg py-12">
    <div class="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-indigo-600 text-base font-semibold tracking-wide uppercase">Transactions</h2>
        <p class="mt-2 text-white text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl">A better way to send money</p>
        <p class="text-white-500 mt-4 max-w-2xl text-xl lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:grid md:gap-x-8 md:gap-y-10 md:grid-cols-2 md:space-y-0">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                <component :is="feature.icon" class="w-6 h-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-white text-lg font-medium leading-6">{{ feature.name }}</p>
            </dt>
            <dd class="text-white-500 ml-16 mt-2 text-base">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
// todo change to ts -> change icons
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from "@heroicons/vue/outline";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: AnnotationIcon,
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>
yh
