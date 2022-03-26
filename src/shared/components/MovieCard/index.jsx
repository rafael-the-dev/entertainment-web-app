import { IconButton, Typography } from "@mui/material";
import classNames from "classnames";
import { useCallback, useMemo } from "react";
import { useStyles } from "./styles";
import BookmarkIcon from '@mui/icons-material/Bookmark';


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
                <span className={classNames(categories[category], `before:bg-no-repeat before:bg-left
                    mx-2 before:h-[10px] before:w-[10px] before:inline-block before:mr-2 flex items-center`)}>
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
            <div className={classNames(classes.trendingImageContainer, `rounded-sm`)}>
                <img
                    alt={title}
                    className={classNames('block h-full w-full object-cover rounded-sm')}
                    src={`${process.env.PUBLIC_URL}/images${thumbnail.trending.small}`}
                />
            </div>
            <IconButton className={classNames(classes.saveButton, 'absolute top-[10px] right-[10px]')}>
                <BookmarkIcon  className={classNames(`text-slate-100`)} />
            </IconButton>
            <CardDescription /> 
        </article>
    );
};

export default MovieCard;