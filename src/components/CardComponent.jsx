import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FooterCard from './FooterCard';


const CardComponent = ({ Films }) => {



    const movieList = Films.results
    const baseImgUrl = "https://image.tmdb.org/t/p/w400/"
    console.log(movieList)

    if (!movieList) {
        return null
    }
    return (
        <div className='container flex flex-wrap justify-between px-10 py-10'>
            {
                movieList.map(item => (
                    <Card sx={{ maxWidth: 345, minHeight: 500 }} key={item.id} className='my-2 relative'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={baseImgUrl + item.poster_path}
                        />
                        <CardContent className='h-80'>
                            <Typography gutterBottom variant="h5" component="div" className='text-blue-800 '>
                                {item.original_title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='h-24 overflow-y-hidden'>
                                {item.overview}
                            </Typography>
                        </CardContent>
                        <CardActions className='flex justify-center absolute bottom-2 transform translate-x-10'>
                            <FooterCard Date={item.release_date} Votes={item.vote_average} Views={item.vote_count} />
                        </CardActions>
                    </Card>))
            }

        </div>
    )
}

export default CardComponent