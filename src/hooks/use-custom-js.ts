import { useEffect } from "react";

export function useCustomJs(): void {
  useEffect(() => {
    // Back to top button
    const myBacktotop = function () {
      // browser window scroll
      const offset = 300;
      const offset_opacity = 1200;
      const back_to_top = document.querySelector(".back-top");
      let scrollpos = window.scrollY;

      const add_class_back_scroll = function add_class_back_scroll() {
        if (back_to_top) {
          back_to_top.classList.add("block");
          back_to_top.classList.remove("hidden");
        }
      };

      const add_class_offset_scroll = function add_class_offset_scroll() {
        if (back_to_top) {
          back_to_top.classList.add("opacity-90");
        }
      };

      const remove_class_back_scroll = function remove_class_back_scroll() {
        if (back_to_top) {
          back_to_top.classList.remove("block", "opacity-90");
          back_to_top.classList.add("hidden");
        }
      };

      // back to top by es6-scroll-to
      const defaults = {
        duration: 400,
        easing: function easing(t: any, b: any, c: any, d: any) {
          return -c * (t /= d) * (t - 2) + b;
        },
        to: 0,
      };
      const animatedScrollTo = function animatedScrollTo(args: any) {
        if (isInteger(args)) {
          args = {
            to: args,
          };
        }
        const options: any = extend(defaults, args);
        options.startingYOffset = window.pageYOffset;
        options.distanceYOffset =
          parseInt(options.to, 10) - options.startingYOffset;
        window.requestAnimationFrame(function (timestamp) {
          return animateScroll(options, timestamp);
        });
      };
      const animateScroll = function animateScroll(options: any, now: any) {
        if (!options.startTime) {
          options.startTime = now;
        }
        const currentTime = now - options.startTime;
        let newYOffset = Math.round(
          options.easing(
            currentTime,
            options.startingYOffset,
            options.distanceYOffset,
            options.duration
          )
        );
        if (currentTime < options.duration) {
          window.requestAnimationFrame(function (timestamp) {
            return animateScroll(options, timestamp);
          });
        } else {
          newYOffset = options.to;
        }
        setScrollTopPosition(newYOffset);
      };
      const setScrollTopPosition = function setScrollTopPosition(
        newYOffset: any
      ) {
        document.documentElement.scrollTop = newYOffset;
        document.body.scrollTop = newYOffset;
      };
      const isInteger = function isInteger(value: any) {
        if (Number.isInteger) {
          return Number.isInteger(value);
        } else {
          return (
            typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value
          );
        }
      };
      const extend = function extend(defaults: any, options: any) {
        const extendedOptions: any = {};
        for (const key in defaults) {
          extendedOptions[key] = options[key] || defaults[key];
        }
        return extendedOptions;
      };
      const easeInQuint = function easeInQuint(t: any, b: any, c: any, d: any) {
        return c * (t /= d) * t * t * t * t + b;
      };

      const scroll_a = document.querySelectorAll(".back-top");
      if (scroll_a != null) {
        for (let i = 0; i < scroll_a.length; i++) {
          scroll_a[i].addEventListener("click", function () {
            animatedScrollTo({
              easing: easeInQuint,
              duration: 800,
            });
          });
        }
      }

      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;
        if (scrollpos > offset) {
          add_class_back_scroll();
        } else {
          remove_class_back_scroll();
        }
        if (scrollpos > offset_opacity) {
          add_class_offset_scroll();
        }
      });
    };

    // Sub Dropdown
    const myDropdown = function () {
      // submenu
      const onekit_submenu = function onekit_submenu() {
        const onekit_toggle = document.querySelectorAll(".dropdown-toggle");
        const _loop = function _loop(i: any) {
          onekit_toggle[i].addEventListener("click", function (event) {
            event.stopPropagation();
            event.preventDefault();

            onekit_toggle[i]?.nextElementSibling?.classList.toggle("show");
          });
          window.addEventListener("mouseup", function (event: any) {
            if (
              event.target != onekit_toggle[i].nextElementSibling &&
              event?.target?.parentNode !=
                onekit_toggle[i].nextElementSibling &&
              event.target.classList.contains("dropdown-toggle") != true
            ) {
              onekit_toggle[i]?.nextElementSibling?.classList.remove("show");
            }
          });
        };

        for (let i = 0; i < onekit_toggle.length; i++) {
          _loop(i);
        }
      };

      const ef = document.querySelector(".subdropdown");
      if (ef != null) {
        onekit_submenu();
      }
    };

    // Mobile menu close
    const myMobile = function () {
      const x = document.querySelectorAll(".back-menu");
      if (x != null) {
        for (let v = 0; v < x.length; v++) {
          x[v].addEventListener("click", function () {
            const y = document.getElementsByClassName("side-menu");
            for (let i = 0; i < y.length; i++) {
              y[i].classList.remove("show");
            }

            const b = document.querySelectorAll(".side-area");
            for (let i = 0; i < b.length; i++) {
              b[i].classList.remove("show");
            }
          });
        }
      }
    };

    // Mobile menu open
    const myOpen = function () {
      const x = document.querySelectorAll(".menu-mobile");
      if (x != null) {
        for (let z = 0; z < x.length; z++) {
          x[z].addEventListener("click", function () {
            const y = document.getElementsByClassName("side-menu");
            for (let i = 0; i < y.length; i++) {
              y[i].classList.add("show");
            }

            const b = document.querySelectorAll(".side-area");
            for (let i = 0; i < b.length; i++) {
              b[i].classList.add("show");
            }
          });
        }
      }
    };

    /**
     * ------------------------------------------------------------------------
     * Launch Functions
     * ------------------------------------------------------------------------
     */

    myBacktotop();
    myDropdown();
    myMobile();
    myOpen();
  }, []);
}
