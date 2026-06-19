import React from 'react'
import Antigravity from '../components/Antigravity';

export default function Anti() {
    return (

        <div className='bg-zinc-900 z-0 w-screen h-full'>


            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Antigravity
                    count={400}
                    magnetRadius={3}
                    ringRadius={7}
                    waveSpeed={0.4}
                    waveAmplitude={1}
                    particleSize={1.5}
                    lerpSpeed={0.05}
                    color="#5227FF"
                    autoAnimate
                    particleVariance={1}
                    rotationSpeed={0}
                    depthFactor={1}
                    pulseSpeed={3}
                    particleShape="capsule"
                    fieldStrength={10}
                />
            </div>

        </div>

    )
}
