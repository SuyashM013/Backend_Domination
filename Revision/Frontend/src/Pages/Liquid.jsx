import React from 'react'
import LiquidEther from '../components/LiquidEther';

function Liquid() {
    return (

        <div className='bg-zinc-900 w-screen h-screen relative z-0'>

            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                <LiquidEther
                    colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                    color0="#5227FF"
                    color1="#FF9FFC"
                    color2="#B19EEF"
                />
            </div>

        </div >
    )
}

export default Liquid