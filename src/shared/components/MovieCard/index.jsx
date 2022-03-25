import { Typography } from "@mui/material";
import classNames from "classnames";
import { useCallback } from "react";
import { useStyles } from "./styles";



const MovieCard = ({ isTrending, title, thumbnail }) => {
    const classes = useStyles();

    const CardDescription = useCallback(() => (
        <div 
            className={classNames({ [classes.cardContentTrending]: isTrending }, 
            { 'absolute bottom-0 left-0 px-4': isTrending }, `w-full text-slate-100 py-2` )}>
            <Typography
                className={classNames(`flex items-center text-sm`)}
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
            <div className={classNames(classes.trendingImageContainer)}>
                <img
                    alt={title}
                    className={classNames('block h-full w-full object-cover')}
                    src={`${process.env.PUBLIC_URL}/images${thumbnail.trending.small}`}
                />
            </div>
            <CardDescription /> 
        </article>
    );
};

export default MovieCard;