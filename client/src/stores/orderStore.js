import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    orders: [],
  }),

  actions: {
    async login(userData) {
      try {
        const response = await fetch(this.baseUrl + `/users/login`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          const text = await response.json();
          throw new Error(text.message);
        }

        const data = await response.json();

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
        localStorage.access_token = data.access_token;
        this.router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Error",
          text: error.message,
        });
      }
    },
    async register(data) {
      try {
        const response = await fetch(this.baseUrl + `/users/register`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const text = await response.json();
          throw new Error(text.message);
        }

        await response.json();
        this.router.push("/login");
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Register success",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Register Error",
          text: error.message,
        });
      }
    },
  },
});
