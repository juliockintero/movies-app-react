import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

// Reparto principal de la película (credits.cast de TMDB)
const CastSection = ({ cast }) => {

    const profileUrl = 'https://image.tmdb.org/t/p/w185'

    if (!Array.isArray(cast) || cast.length === 0) {
        return null
    }

    return (
        <div className="cast pt-10 px-10 text-left">
            <h2 className="text-3xl font-bold text-white pb-6">Cast</h2>

            <ul className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:thin] [scrollbar-color:#475569_transparent]">
                {
                    cast.slice(0, 15).map(actor => (
                        <li key={actor.credit_id} className="flex-none w-36 rounded-lg overflow-hidden bg-slate-800">
                            {
                                actor.profile_path ?
                                    <img src={profileUrl + actor.profile_path} alt={actor.name} loading="lazy" className="w-full aspect-[2/3] object-cover" />
                                    :
                                    <div className="w-full aspect-[2/3] flex items-center justify-center bg-slate-700">
                                        <PersonIcon sx={{ fontSize: 64, color: '#64748b' }} />
                                    </div>
                            }
                            <div className="p-2">
                                <p className="text-sm font-bold text-slate-100">{actor.name}</p>
                                <p className="text-xs text-slate-400">{actor.character}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CastSection
