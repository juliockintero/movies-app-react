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

        <div className='container flex flex-wrap justify-between px-10 py-10'>

            {
                movieList.map(item => (
                    <Link key={item.id} component="button" underline='none' onClick={() => navigate(`/movie/${item.id}`)}>
                        <Card sx={{ maxWidth: 345, minHeight: 700 }} className='my-2 relative'>
                            <CardMedia
                                component="img"
                                alt="movie-img"
                                height="150"
                                image={baseImgUrl + item.poster_path}
                            />
                            <CardContent className=''>
                                <Typography gutterBottom variant="h5" component="div" className='text-blue-800 '>
                                    {item.original_title}
                                </Typography>
                                <Typography variant="paragraph" color="text.secondary" className='h-24 overflow-y-hidden font-bold	'>
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