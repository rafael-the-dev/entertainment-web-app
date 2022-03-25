import { Typography } from "@mui/material";
import classNames from "classnames";
import { useStyles } from "./styles";



const MovieCard = () => {
    const classes = useStyles();

    return (
        <article className={classNames(`relative`)}>
            <div>
                <img
                    alt=""
                    className={classNames()}
                    src=""
                />
            </div>
            <div className={classNames(classes.cardContentTrending, `absolute bottom-[-20px] left-[rem]`)}>
                <p>
                    <span>2019</span>
                    <span>2019</span>
                    <span className={classNames(`uppercase`)}>pg</span>
                </p>
                <Typography 
                    component="h3"
                    variant="h6">
                    Beyond Earth
                </Typography>
            </div>
        </article>
    );
};

export default MovieCard;