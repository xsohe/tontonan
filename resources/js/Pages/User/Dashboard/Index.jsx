import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import React from "react";

export default function Dashboard({ auth, featuredMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <>
            <React.StrictMode>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                    <title>Dashboard</title>
                </Head>

                <Authenticated auth={auth}>
                    {/* Start Featured */}
                    <div>
                        <div className="font-semibold text-[22px] text-black mb-4">
                            Featured Movies
                        </div>
                        <Flickity
                            className="gap-[30px]"
                            options={flickityOptions}
                        >
                            {/* <!-- Movie Thumbnail --> */}
                            {featuredMovies.map((featuredMovie) => (
                                <FeaturedMovie
                                    key={featuredMovie.id}
                                    name={featuredMovie.name}
                                    category={featuredMovie.category}
                                    rating={featuredMovie.rating}
                                    slug={featuredMovie.slug}
                                    thumbnail={featuredMovie.thumbnail}
                                />
                            ))}
                        </Flickity>
                    </div>
                    {/* End Featured */}
                    {/* Start Browse */}
                    <div className="mt-10">
                        <div className="font-semibold text-[22px] text-black mb-4">
                            Browse
                        </div>
                        <Flickity options={flickityOptions}>
                            {/* <!-- Movies 1 --> */}
                            {movies.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    name={movie.name}
                                    category={movie.category}
                                    thumbnail={movie.thumbnail}
                                    slug={movie.slug}
                                />
                            ))}
                        </Flickity>
                    </div>
                    {/* End Browse */}
                </Authenticated>
            </React.StrictMode>
        </>
    );
}
