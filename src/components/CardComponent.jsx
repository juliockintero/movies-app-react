//Packages
import { useNavigate } from 'react-router-dom';

//Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


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
                        <Card sx={{ height: '100%' }} className='relative transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/50'>
                            <div className='overflow-hidden'>
                                <CardMedia
                                    component="img"
                                    alt="movie-img"
                                    sx={{ aspectRatio: '2 / 3' }}
                                    className='transition-transform duration-300 ease-out group-hover:scale-110'
                                    image={baseImgUrl + item.poster_path}
                                />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-blue-800 '>
                                    {item.original_title}
                                </Typography>
                                <Typography variant="paragraph" color="text.secondary" className='font-bold'>
                                    {item.release_date}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>))
            }
        </div>

    )
}

export default CardComponent