"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "@/styles/globals.css";
import "@/styles/responsive.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadGSAP = async () => {
        const { default: gsap } = await import("gsap");

        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
              resolve();
              return;
            }
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        };

        try {
          await Promise.all([
            loadScript("/js/ScrollTrigger.min.js"),
            loadScript("/js/ScrollToPlugin.min.js"),
            loadScript("/js/ScrollSmoother.min.js"),
          ]);

          gsap.registerPlugin(
            window.ScrollTrigger,
            window.ScrollToPlugin,
            window.ScrollSmoother
          );

          const smoother = window.ScrollSmoother.create({
            wrapper: ".scroll-wrapper",
            content: ".scroll-content",
            smooth: 1.5,
            effects: true,
          });

          return () => {
            smoother && smoother.kill();
          };
        } catch (error) {
          console.error("Failed to load GSAP plugins", error);
        }
      };

      loadGSAP();
    }
  }, []);

  // AOS ANIMATION
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return <Component {...pageProps} />;
}
