<template>
  <div>
    <span id="anim"></span>
    <div id="logo">
      <div class="text">
        <p>Nothing to see here!</p>
      </div>
      <img src="logo.png" class="transformed" />
      <img src="logo.png" />
    </div>
  </div>
</template>

<style>
img {
  width: 100%;
  height: auto;
  margin-left: auto;
  box-shadow: 0 0 5rem gray;
}
#anim {
  display: none;
  position: absolute;
  animation: anim 20s infinite ease-in-out;
  background-color: black;
}

#logo {
  position: relative;
  perspective: 1000px;
  cursor: pointer;
}

#logo > .text {
  position: absolute;
  left: 0;
  top: 0;
  width: calc(100% - 2rem);
  height: calc(50% - 2rem);
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#logo > .transformed {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  clip-path: inset(0 0 50% 0);
  transition: 1s;
}

#logo::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 0;
  background-color: brown;
  transition: 1s;
  opacity: 0.1;
}

#logo:hover::after {
  height: 0.1rem;
}

#logo:hover > .transformed {
  transform: rotateX(-70deg);
  transform-origin: 50% 50%;
  border-bottom: 5px solid black;
}

@keyframes anim {
  0% {
    left: 0;
    top: 0;
    width: 0.5rem;
    height: 0.5rem;
  }

  15% {
    width: 5rem;
  }
  25% {
    left: calc(100% - 0.5rem);
    top: 0;
    width: 0.5rem;
    height: 0.5rem;
  }

  40% {
    height: 5rem;
  }
  50% {
    left: calc(100% - 0.5rem);
    top: calc(100% - 0.5rem);
    height: 0.5rem;
    width: 0.5rem;
  }

  65% {
    width: 5rem;
  }
  75% {
    left: 0%;
    top: calc(100% - 0.5rem);
    height: 0.5rem;
    width: 0.5rem;
  }

  90% {
    height: 5rem;
  }
  100% {
    left: 0%;
    top: 0%;
    height: 0.5rem;
    width: 0.5rem;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
});
</script>
