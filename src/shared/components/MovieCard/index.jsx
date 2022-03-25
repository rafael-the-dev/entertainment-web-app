import classNames from "classnames";



const MovieCard = () => {
    return (
        <article className={classNames(`relative`)}>
            <div>
                <img
                    alt=""
                    className={classNames()}
                    src=""
                />
            </div>
            <div className={classNames(`absolute bottom-[-20px] left-[rem]`)}>
                <p>
                    <span>2019</span>
                    <span>2019</span>
                    <span className={classNames(`uppercase`)}>pg</span>
                </p>
            </div>
        </article>
    );
};

export default MovieCard;