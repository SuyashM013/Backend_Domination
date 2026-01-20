import React from 'react'
import Particles from '../Components/Particles';

function Part() {
    return (
        <div className='bg-zinc-900 w-screen h-screen relative z-0'>

            <div style={{ width: '100%',height: '100%', position: 'relative' }}>
                <Particles
                    particleColors={["#ffffff"]}
                    particleCount={500}
                    particleSpread={9}
                    speed={0.2}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
        </div>
    )
}

export default Part