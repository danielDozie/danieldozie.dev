import React from 'react'
import Particles from 'react-particles-js';

export const BGParticles = () => {
    return (
        <>
            <Particles
                className="absolute"
                params={{
                    "particles": {
                        "number": {
                            "value": 8,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "circle"
                            ],
                            "image": [
                                {
                                    "src": "/assets/images/particles/react.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "/assets/images/particles/next.svg",
                                    "height": 40,
                                    "width": 70
                                },
                                {
                                    "src": "/assets/images/particles/node.svg",
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#CCC"
                        },
                        "size": {
                            "value": 30,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": true
                }} />
        </>
    )
}
