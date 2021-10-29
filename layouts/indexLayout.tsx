import { useState } from "react";
import Navbar from "../components/navbar";
import Particles from "react-tsparticles";

export default function IndexLayout({ children }) {
  const [theme, setTheme] = useState("light");
  const themeFunc = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div>
      <Navbar themeFunc={themeFunc} />
      <div className="w-full absolute left-0 lg:visible invisible">
        <Particles
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 1803.4120608655228,
                },
              },
              color: {
                value: theme == "dark" ? "#FFFFFF" : "#000000",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 2,
                  color: theme == "dark" ? "#FFFFFF" : "#000000",
                },
                polygon: {
                  nb_sides: 6,
                },
              },
              opacity: {
                value: 0.4008530152163807,
                random: false,
                anim: {
                  enable: false,
                  speed: 2,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 1.5,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: theme == "dark" ? "#FFFFFF" : "#000000",
                opacity: 0.3687847739990702,
                width: 0.6413648243462091,
              },
              move: {
                enable: true,
                speed: 4,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                },
                repulse: {
                  distance: 120,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 5,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      {children}
    </div>
  );
}
