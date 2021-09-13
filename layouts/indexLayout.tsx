import { Component } from "react";
import Navbar from "../components/navbar";
import Particles from "react-tsparticles";

export default class IndexLayout extends Component<{ children }> {
  state = {
    children: this.props.children,
    theme: "light",
  };

  themeFunc = (theme: string) => {
    this.setState({ theme: theme });
  };

  setTheme = () => {
    window.document.body.classList.add("dark:bg-gray-900");
    window.document.body.classList.add("bg-white");

    localStorage.setItem(
      "theme",
      localStorage.getItem("theme") == "dark" ? "dark" : "light"
    );

    this.setState({ theme: localStorage.getItem("theme") });

    window.document.documentElement.classList.add(
      localStorage.getItem("theme")
    );
  };

  componentDidMount() {
    this.setTheme();
  }

  render() {
    return (
      <div>
        <Navbar themeFunc={this.themeFunc} />
        <div className="w-full absolute left-0">
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
                  value: this.state.theme == "dark" ? "#FFFFFF" : "#000000",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 2,
                    color: this.state.theme == "dark" ? "#FFFFFF" : "#000000",
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
                  color: this.state.theme == "dark" ? "#FFFFFF" : "#000000",
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
        {this.state.children}
      </div>
    );
  }
}
