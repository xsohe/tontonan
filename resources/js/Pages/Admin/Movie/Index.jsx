import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Authenticated";
import { Link, Head, useForm } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();

    return (
        <Authenticated auth={auth}>
            <Head title="List of Movie" titl />
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-sm text-left text-gray-500 mt-8">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 text-center">
                    <tr className="bg-white border-b border-gray-200">
                        <th className="pb-4">Image</th>
                        <th className="pb-4">Name</th>
                        <th className="pb-4">Category</th>
                        <th className="pb-4">Rating</th>
                        <th className="pb-4" colSpan={2}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr
                            key={movie.id}
                            className="bg-white border-b border-gray-200 text-center"
                        >
                            <td className="py-2 text-center">
                                <div className="h-20 overflow-hidden rounded-md">
                                    <img
                                        src={
                                            movie.thumbnail.startsWith("http")
                                                ? movie.thumbnail
                                                : `/storage/${movie.thumbnail}`
                                        }
                                        alt={movie.slug}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </td>

                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        movie.id
                                    )}
                                >
                                    <Button type="button" variant="warning">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <div
                                    onClick={() => {
                                        movie.deleted_at
                                            ? put(
                                                  route(
                                                      "admin.dashboard.movie.restore",
                                                      movie.id
                                                  )
                                              )
                                            : destroy(
                                                  route(
                                                      "admin.dashboard.movie.destroy",
                                                      movie.id
                                                  )
                                              );
                                    }}
                                >
                                    <Button type="button" variant="danger">
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
