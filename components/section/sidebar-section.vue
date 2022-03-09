<template>
  <aside class="main-sidebar sidebar-dark-primary">
    <!-- Brand Logo -->
    <nuxt-link to="index3.html" class="brand-link">
      <img
        src="~/assets/adminLTE/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </nuxt-link>

    <!-- Sidebar -->
    <div
      class="
        sidebar
        os-host
        os-theme-light
        os-host-overflow
        os-host-overflow-y
        os-host-resize-disabled
        os-host-scrollbar-horizontal-hidden
        os-host-transition
      "
    >
      <div class="os-resize-observer-host observed">
        <div class="os-resize-observer" style="left: 0px; right: auto"></div>
      </div>
      <div
        class="os-size-auto-observer observed"
        style="height: calc(100% + 1px); float: left"
      >
        <div class="os-resize-observer"></div>
      </div>
      <div
        class="os-content-glue"
        style="margin: 0px -8px; width: 249px; height: 349px"
      ></div>
      <div class="os-padding">
        <div
          class="os-viewport os-viewport-native-scrollbars-invisible"
          style="overflow-y: scroll"
        >
          <div class="os-content">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                <img
                  src="~/assets/adminLTE/dist/img/user2-160x160.jpg"
                  class="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div class="info">
                <nuxt-link to="#" class="d-block">Alexander Pierce</nuxt-link>
              </div>
            </div>
            <nav class="side-menu mt-2">
              <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link nav-item-sidebar">
                    <i class="nav-icon ion-ios-speedometer"></i>
                    <p>Dashboard</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/user" class="nav-link nav-item-sidebar">
                    <i class="nav-icon ion-ios-body-outline"></i>
                    <p>Users</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/bookings" class="nav-link nav-item-sidebar">
                    <i class="nav-icon ion-ios-bookmarks"></i>
                    <p>Bookings</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/shops"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fas fa-store"></i>
                    <p>Shop</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/products"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fab fa-product-hunt"></i>
                    <p>Product</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/movies"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fas fa-film"></i>
                    <p>Movies</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/movieToday"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fas fa-calendar-check"></i>
                    <p>Movies today</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/seats"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fas fa-couch"></i>
                    <p>Seats</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/gallery"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fas fa-tags"></i>
                    <p>Gallery</p>
                  </nuxt-link>
                </li>
                  <li class="nav-item">
                  <nuxt-link
                    to="/category"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fas fa-tags"></i>
                    <p>Category</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link
                    to="/department"
                    class="nav-link nav-item-sidebar"
                    style="padding: 0.8rem 1rem"
                  >
                    <i class="nav-icon fas fa-tags"></i>
                    <p>Department</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/genre" class="nav-link nav-item-sidebar">
                    <i class="nav-icon fas fa-tags"></i>
                    <p>Genres</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/feedback" class="nav-link nav-item-sidebar">
                    <i class="nav-icon fas fa-comments"></i>
                    <p>Feedbacks</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="#" class="nav-link nav-item-sidebar">
                    <i class="nav-icon ion-ios-gear-outline"></i>
                    <p>Settings</p>
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/logout" class="nav-link nav-item-sidebar">
                    <i class="nav-icon ion-log-out"></i>
                    <p>Logout</p>
                  </nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="
          os-scrollbar
          os-scrollbar-horizontal
          os-scrollbar-unusable
          os-scrollbar-auto-hidden
        "
      >
        <div class="os-scrollbar-track">
          <div
            class="os-scrollbar-handle"
            style="width: 100%; transform: translate(0px, 0px)"
          ></div>
        </div>
      </div>
      <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
        <div class="os-scrollbar-track">
          <div
            class="os-scrollbar-handle"
            style="height: 16.011%; transform: translate(0px, 0px)"
          ></div>
        </div>
      </div>
      <div class="os-scrollbar-corner"></div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // const currentLocation = location.href;
    // const menuItem = document.querySelectorAll(".nav-item-sidebar");
    // const menuLength = menuItem.length;
    // for (let i = 0; i < menuLength; i++) {
    //   if (menuItem[i].href === currentLocation) {
    //     menuItem[i].className += " active-sidebar";
    //   }
    // }
  },
};
</script>

<style>
</style>