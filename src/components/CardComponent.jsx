//Packages
import { useNavigate } from 'react-router-dom';

//Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


const CardComponent = ({ Films }) => {


    const navigate = useNavigate();
    const movieList = Films.results
    const baseImgUrl = "https://image.tmdb.org/t/p/w400/"
    //console.log(movieList)

    if (!movieList) {
        return null
    }
    return (

        <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 max-w-7xl mx-auto px-10 py-10'>

            {
                movieList.map(item => (
                    <Link key={item.id} component="button" underline='none' className='group w-full h-full' onClick={() => navigate(`/movie/${item.id}`)}>
                        <Card sx={{ height: '100%', bgcolor: '#1e293b' }} className='relative transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/50'>
                            <div className='overflow-hidden'>
                                <CardMedia
                                    component="img"
                                    alt="movie-img"
                                    sx={{ aspectRatio: '2 / 3' }}
                                    className='transition-transform duration-300 ease-out group-hover:scale-110'
                                    image={baseImgUrl + item.poster_path}
                                />
                            </div>
                            <CardContent sx={{ bgcolor: '#1e293b' }}>
                                <Typography gutterBottom variant="h6" component="div" sx={{ color: '#f1f5f9' }}>
                                    {item.original_title}
                                </Typography>
                                <Typography variant="paragraph" sx={{ color: '#94a3b8' }} className='font-bold'>
                                    {item.release_date}
                                </Typography>
                                <p className='mt-1 flex items-center justify-center gap-1 text-sm font-semibold text-slate-300'>
                                    <ThumbUpAltIcon sx={{ fontSize: 16, color: '#fbbf24' }} />
                                    {item.vote_average ? `${Math.round(item.vote_average * 10)}%` : 'NR'}
                                </p>
                            </CardContent>
                        </Card>
                    </Link>))
            }
        </div>

    )
}

export default CardComponent