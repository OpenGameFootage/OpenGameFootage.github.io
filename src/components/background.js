import * as React from "react"
import Particles from "react-tsparticles";
import './background.css'

//https://particles.js.org/docs/interfaces/Options_Interfaces_Particles_IParticles.IParticles.html
const options = {
	fullScreen: {
		enable: true, 
		zIndex: -100
	},
	fpsLimit: 30,
	pauseOnBlur: true,
	particles: {
	   /* links: {
		distance: 125,
		enable: true,
		color: {
			value: '#F6E05E'
		  },
		triangles: {
		  enable: true,
		  opacity: 0.1,
		  color: {
			value: '#F6E05E'
		  },
		}
	  }, */
	  color: {
		value: '#F6E05E'
	  },
	  opacity: {
		  animation: {
			  enable: true,
			  minimumValue: 0,
			  speed: 1,
			  sync: false,
		  },
		  random: true,
		  value: 1,
	  },
	  move: {
		bounce: false,
		direction: "none",
		enable: true,
		outMode: "out",
		random: true,
		speed: 1,
		straight: false,
		attract: {
			enable: true,
			rotateX: 600,
			rotateY: 1200,
		  }
	},
	number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
	  size: {
		random: true,
		value: 50,
	},
	  shape: {
		type: ["triangle"],
	  },
		collision: {
			enable: true,
			mode: 'bounce',
			bounce: {
				distance: 1
			},
		},
	}
  };

function Background({}) {
    return (
        <Particles options={options} />
    )
}
export default Background