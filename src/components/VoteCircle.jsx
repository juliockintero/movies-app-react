import React from 'react'

// Círculo de progreso con el vote_average (0-10) expresado en %
const VoteCircle = ({ vote, size = 72 }) => {

    const percent = Math.round((parseFloat(vote) || 0) * 10)
    const rated = percent > 0
    const stroke = size * 0.09
    const radius = (size - stroke) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (percent / 100) * circumference

    const color = !rated ? '#64748b' : percent >= 70 ? '#22c55e' : percent >= 40 ? '#eab308' : '#ef4444'

    return (
        <div className='relative inline-flex items-center justify-center rounded-full bg-slate-950' style={{ width: size, height: size }} title={rated ? `Puntuación: ${percent}%` : 'Sin votos'}>
            <svg width={size} height={size} className='-rotate-90'>
                <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeOpacity='0.25' strokeWidth={stroke} fill='none' />
                <circle cx={size / 2} cy={size / 2} r={radius} stroke={color} strokeWidth={stroke} fill='none'
                    strokeLinecap='round' strokeDasharray={circumference} strokeDashoffset={offset}
                    className='transition-[stroke-dashoffset] duration-700 ease-out' />
            </svg>
            <span className='absolute font-bold text-white' style={{ fontSize: size * 0.26 }}>
                {rated ? <>{percent}<sup style={{ fontSize: size * 0.13 }}>%</sup></> : 'NR'}
            </span>
        </div>
    )
}

export default VoteCircle
