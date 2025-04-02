import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Authenticated";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
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
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>

            <Authenticated>
                {/* Start Featured */}
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">
                        Featured Movies
                    </div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {/* <!-- Movie Thumbnail --> */}
                        {[1, 2, 3, 4].map((i) => (
                            <FeaturedMovie
                                key={i}
                                name={`The Batman In Love ${i}`}
                                category={"Action Horror"}
                                rating={i}
                                slug="batman-in-love"
                                thumbnail={"/images/featured-1.png"}
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
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                name={`Meong Golden ${i}`}
                                category={"Action Horror"}
                                thumbnail={"/images/browse-1.png"}
                                slug={"meong-golden"}
                            />
                        ))}
                    </Flickity>
                </div>
                {/* End Browse */}
            </Authenticated>
        </>
    );
}
