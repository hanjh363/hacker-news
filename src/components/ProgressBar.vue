<template>
  <div>
    <div v-if="loading" class="container">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
    </div>
    <div v-if="!loading" class="filler"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.filler {
  height: 2px;
  margin-bottom: -2px;
  background-color: #3eaf7c;
}

.container {
  position: relative;
  height: 2px;
  margin-bottom: -2px;
  background-color: #3eaf7c;
  animation: start 0.3s ease-in;
}

@keyframes start {
  from {
    max-height: 0;
    opacity: 0;
  }

  to {
    max-height: 20px;
    opacity: 0;
  }
}

.bar {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  transition: transform 0.2s linear;
}

.bar1 {
  animation: grow-bar-1 2.5s infinite, move-bar-1 2.5s infinite;
}

.bar2 {
  animation: grow-bar-2 2.5s infinite, move-bar-2 2.5s infinite;
}

@keyframes grow-bar-1 {
  0% {
    transform: scaleX(0.1);
    animation-timing-function: linear;
  }

  36.6% {
    transform: scaleX(0.1);
    animation-timing-function: cubic-bezier(0.33473, 0.12482, 0.78584, 1);
  }

  69.15% {
    transform: scaleX(0.83);
    animation-timing-function: cubic-bezier(0.22573, 0, 0.23365, 1.37098);
  }

  100% {
    transform: scaleX(0.1);
  }
}

@keyframes move-bar-1 {
  0% {
    left: -105.16667%;
    animation-timing-function: linear;
  }

  20% {
    left: -105.16667%;
    animation-timing-function: cubic-bezier(0.5, 0, 0.70173, 0.49582);
  }

  69.15% {
    left: 21.5%;
    animation-timing-function: cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);
  }

  100% {
    left: 95.44444%;
  }
}

@keyframes grow-bar-2 {
  0% {
    transform: scaleX(0.1);
    animation-timing-function: cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);
  }

  19.15% {
    transform: scaleX(0.57);
    animation-timing-function: cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);
  }

  44.15% {
    transform: scaleX(0.91);
    animation-timing-function: cubic-bezier(
      0.25776,
      -0.00316,
      0.21176,
      1.38179
    );
  }

  100% {
    transform: scaleX(0.1);
  }
}

@keyframes move-bar-2 {
  0% {
    left: -54.88889%;
    animation-timing-function: cubic-bezier(0.15, 0, 0.51506, 0.40968);
  }

  25% {
    left: -17.25%;
    animation-timing-function: cubic-bezier(0.31033, 0.28406, 0.8, 0.73372);
  }

  48.35% {
    left: 29.5%;
    animation-timing-function: cubic-bezier(0.4, 0.62703, 0.6, 0.90203);
  }

  100% {
    left: 117.38889%;
  }
}
</style>
