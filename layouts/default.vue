<template>
  <div>
    <div class="wrapper">
      <!-- Preloader -->
      <div
        class="preloader flex-column justify-content-center align-items-center"
        style="height: 0px"
      >
        <img
          class="animation__shake"
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
          style="display: none"
        />
      </div>
      <section-header-section />
      <section-sidebar-section />

      <div class="content-wrapper" style="padding: 20px">
        <Nuxt />
      </div>

      <footer class="main-footer">
        <strong
          >Copyright © 2014-2021
          <a href="https://adminlte.io">AdminLTE.io</a>.</strong
        >
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0
        </div>
      </footer>

      <div id="sidebar-overlay"></div>
    </div>

    <div class="loader-wrapper">
      <div class="loadding-drop">
        <span class="loadding-item">.</span>
        <span class="loadding-item" style="--delay: 0.2s">.</span>
        <span class="loadding-item" style="--delay: 0.4s">.</span>
        <span class="loadding-item" style="--delay: 0.6s">.</span>
        <span class="loadding-item" style="--delay: 0.8s">.</span>
      </div>
    </div>
    <!-- ./wrapper -->
  </div>
</template>

<script>
import HeaderSection from "~/components/section/header-section.vue";
import SidebarSection from "~/components/section/sidebar-section.vue";
export default {
  components: { SidebarSection, HeaderSection },
  data() {
    return {};
  },
  mounted() {
    document.querySelector("body").className =
      "sidebar-mini layout-fixed sidebar-closed sidebar-collapse";

    $(window).on("load", function () {
      $(".loader-wrapper").fadeOut("slow");
    });

    // function readURL(input) {
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    //     reader.onload = function (e) {
    //       $("#img_tag").attr("src", e.target.result);
    //     };
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // }
    // $(".input-image").change(function () {
    //   setTimeout(() => {
    //     readURL(this);
    //   });
    // });
  },
  created() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>

<style>
</style>