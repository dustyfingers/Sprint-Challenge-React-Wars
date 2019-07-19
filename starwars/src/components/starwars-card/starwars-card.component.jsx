import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import sizes from './sizes';

const useStyles = makeStyles(theme => ({
    card: {
        width: '100%',
        margin: '1rem',
        [sizes.up('sm')]: {
            width: '45%'
        },
        [sizes.up('lg')]: {
            width: '30%'
        }
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const StarWarsCard = ({ personId }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [person, setPerson] = React.useState({});

    React.useEffect(() => {
        async function fetchAPI(id) {
            const res = await axios.get(`https://swapi.co/api/people/${id}/`);
            setPerson(res.data);
        };
        fetchAPI(personId);
    }, []);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        {personId}
                    </Avatar>
                }
                title={person.name}
                subheader={person.birth_year}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Height: {person.height}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Mass: {person.mass}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Hair Color: {person.hair_color}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Eye Color: {person.eye_color}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Skin Color: {person.skin_color}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Link: <a href={person.url}>{person.name}</a>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default StarWarsCard;