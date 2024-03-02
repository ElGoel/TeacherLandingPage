<template>
  <header>
    <div id="header-sticky"
      :class="`${isSticky ? 'header__area header__transparent header__padding-2 sticky' : `${headerShadow ? headerShadow : 'header__area header__transparent header__padding-2'}`}`">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6">
            <div class="header__left d-flex">
              <div class="sidebar__menu d-sm-none d-block">
                <div @click="handleSidebar" class="sidebar-toggle-btn ml-30" id="sidebar-toggle">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </div>
              <div class="header__btn header__btn-2 d-none d-sm-block">
                <a href="#" @mousemove="(e) => { $emit('handleMouseMove', e) }" class="header__btn-register">Contacto</a>
              </div>
            </div>
          </div>
          <div class="col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6">
            <div class="header__right d-flex align-items-center">
              <div class="main-menu main-menu-2">
                <nav id="mobile-menu" class="d-none d-lg-block header__nav">
                  <ul class="d-flex header__nav-links">
                    <li class="has-dropdown">
                      <ul class="submenu">
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/blog-details">Blog Details</a></li>
                      </ul>
                      <a href="/blog">Blog</a>
                    </li>
                    <li>
                      <a href="#">Cursos</a>
                    </li>
                    <li>
                      <a href="/courses">About</a>
                    </li>
                    <li><a href="/">Home</a></li>
                  </ul>
                </nav>
              </div>
              <div class="logo">
                <a href="/">
                  <h1 class="header__right-title">.NiaTips</h1>
                </a>
              </div>
              <div class="sidebar__menu sidebar__left d-lg-none">
                <div @click="handleSidebar" class="sidebar-toggle-btn ml-30" id="sidebar-toggle">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- sidebar area start -->
  <div :class="`${showSidebar ? 'sidebar__area sidebar-opened' : 'sidebar__area'}`">
    <div class="sidebar__wrapper">
      <div @click="handleSidebarClose" class="sidebar__close">
        <button class="sidebar__close-btn" id="sidebar__close-btn">
          <span><i class="fal fa-times"></i></span>
          <span>close</span>
        </button>
      </div>
      <div class="sidebar__content">
        <div class="logo mb-40">
          <a href="/">
            <img src="../../assets/img/logo/logo.png" alt="logo">
          </a>
        </div>

        <div class="side-info-content sidebar-menu mm-menu">

          <ul>
            <li class="menu-item-has-children"
              v-bind:class="[menuOption.homeDropdown === true ? 'active' : '']">
              <a @click="menuOption.homeDropdown = !menuOption.homeDropdown">Home</a>
            </li>


            <li class="menu-item-has-children">
              <a>Courses</a>
            </li>

            <li class="menu-item-has-children has-droupdown" :class="[menuOption.blogDropdown === true ? 'active' : '']">

              <a v-on:click="menuOption.blogDropdown = !menuOption.blogDropdown">Blog</a>
              <ul class="sub-menu" :class="[menuOption.blogDropdown === true ? 'active' : '',]">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Blog Details</a>
                </li>
              </ul>
            </li>
            <li class="menu-item-has-children">
              <a>About</a>
            </li>
            <li>
              <a href="#" class="border-0">Contact</a>
            </li>

          </ul>
        </div>

        <!-- <div class="sidebar__search p-relative mt-40 ">
          <form action="#">
            <input type="text" placeholder="Search...">
            <button type="submit"><i class="fad fa-search"></i></button>
          </form>
        </div> -->
      </div>
    </div>
  </div>
  <div @click="handleSidebarClose" :class="[showSidebar ? 'body-overlay opened' : 'body-overlay']"></div>
  <!-- sidebar area end -->
</template>

<script>
export default {
  name: 'HomeTwoHeader',
  data() {
    return {
      isSticky: false,
      showSidebar: false,
      menuOption: {
        menuShow: false,
        menuSearch: false,
        homeDropdown: false,
        coursesDropdown: false,
        pagesDropDown: false,
        blogDropdown: false,
        aboutDropdown: false,
      },
    }
  },
  props: {
    headerShadow: String,
  },
  emits: ['handleMouseMove'],
  methods: {
    handleSticky() {
      if (window.scrollY > 80) {
        this.isSticky = true;
      }
      else {
        this.isSticky = false;
      }
    },

    handleSidebar() {
      this.showSidebar = true;
    },
    handleSidebarClose() {
      this.showSidebar = false;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleSticky)
  },
};
</script>
