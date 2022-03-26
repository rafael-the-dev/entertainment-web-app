import { Typography } from "@mui/material";
import classNames from "classnames";
import { useCallback, useMemo } from "react";
import { useStyles } from "./styles";



const MovieCard = ({ category, isTrending, title, thumbnail }) => {
    const classes = useStyles();

    const categories = useMemo(() => ({
        'Movie': classes.movie,
        'TV Series': classes.tvSeries,
    }), [ classes ]);

    const CardDescription = useCallback(() => (
        <div 
            className={classNames({ [classes.cardContentTrending]: isTrending }, 
            { 'absolute bottom-0 left-0 px-4': isTrending }, `w-full text-slate-100 py-3` )}>
            <Typography
                className={classNames(`flex items-center text-xs mb-1`)}
                component="p">
                <span className="mr-2">2019</span> *
                <span className={classNames(categories[category], `before::bg-no-repeat before::bg-left
                    mx-2`)}>
                    { category }
                </span> *
                <span className={classNames(`uppercase ml-2`)}>pg</span>
            </Typography>
            <Typography 
                component="h3"
                variant="h6">
                Beyond Earth
            </Typography>
        </div>
    ), [ classes, category, categories, isTrending ]);

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