<template>
  <div class="authentication-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      "use strict";

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll(".needs-validation");

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
            }

            form.classList.add("was-validated");
          },
          false
        );
      });
    })();
  },
};
</script>

<style>
.authentication-layout {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
}

.wrap-authentication {
  width: 960px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 100px;
}

.wrap-authentication .login-pic {
  align-items: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  align-self: center;
}

.wrap-authentication img {
  width: 100%;
  vertical-align: middle;
}

.auth-form {
  width: 300px;
}

.auth-form h3 {
  font-weight: 700;
  text-align: center;
  padding: 40px 0;
}

.form-authentication .form-group {
  width: 100%;
  margin-bottom: 2rem;
}

.form-authentication .form-group .form-control {
  border-radius: 20px;
  padding: 20px;
}

.form-authentication .form-group button {
  width: 100%;
  border-radius: 20px;
  padding: 10px 0;
  background-color: #68c8d5;
  border-color: #68c8d5;
  font-weight: 700;
  transition: 0.3s;
}

.form-authentication .form-group button:hover {
  background: #000;
}

.navigate-register {
  color: #000;
  padding-top: 50px;
  transition: 0.2s;
}

.navigate-register:hover {
  color: #68c8d5;
}

.navigate-register svg {
  transition: 0.2s;
}

.navigate-register:hover svg {
  transform: translateX(10px);
}

.valid-custom {
  position: absolute;
  bottom: -20px;
  left: 20px;
}
</style>