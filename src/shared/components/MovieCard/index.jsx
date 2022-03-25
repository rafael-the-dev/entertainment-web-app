import { Typography } from "@mui/material";
import classNames from "classnames";
import { useCallback } from "react";
import { useStyles } from "./styles";



const MovieCard = ({ isTrending }) => {
    const classes = useStyles();

    const CardDescription = useCallback(() => (
        <div 
            className={classNames({ [classes.cardContentTrending]: isTrending }, 
            { 'absolute bottom-[-20px] left-[rem]': isTrending } )}>
            <Typography
                className={classNames(`flex items-center`)}
                component="p">
                <span>2019</span>
                <span>2019</span>
                <span className={classNames(`uppercase`)}>pg</span>
            </Typography>
            <Typography 
                component="h3"
                variant="h6">
                Beyond Earth
            </Typography>
        </div>
    ), [ classes, isTrending ]);

    return (
        <article className={classNames(`relative`)}>
            <div>
                <img
                    alt=""
                    className={classNames()}
                    src=""
                />
            </div>
            <CardDescription /> 
        </article>
    );
};

export default MovieCard;