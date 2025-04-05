import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/Authenticated/Authenticated";
import { useForm, Head, router } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Edit({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === data.thumbnail) {
            delete data.thumbnail;
        }

        router.put(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h3 className="text-xl">Update movie: {movie.name}</h3>
            <hr className="mt-3" />

            <form onSubmit={submit} method="PUT">
                <InputLabel htmlFor="name" value="Name" className="mt-5 mb-3" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    defaultValue={movie.name}
                    variant="primary-outline"
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                    onChange={handleOnChange}
                />
                <InputError message={errors.name} className="mt-2" />

                <InputLabel
                    htmlFor="category"
                    value="Category"
                    className="mt-5 mb-3"
                />
                <TextInput
                    id="category"
                    type="text"
                    name="category"
                    defaultValue={movie.category}
                    variant="primary-outline"
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                    onChange={handleOnChange}
                />
                <InputError message={errors.category} className="mt-2" />

                <InputLabel
                    htmlFor="video_url"
                    value="Video Url"
                    className="mt-5 mb-3"
                />
                <TextInput
                    id="video_url"
                    type="text"
                    name="video_url"
                    defaultValue={movie.video_url}
                    variant="primary-outline"
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                    onChange={handleOnChange}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <InputLabel value="Thumbnail" className="mt-5 mb-3" />
                <img
                    src={
                        movie.thumbnail.startsWith("http")
                            ? movie.thumbnail
                            : `/storage/${movie.thumbnail}`
                    }
                    alt={movie.slug}
                    className="h-32 mb-2 rounded-md"
                />
                <TextInput
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    isError={errors.thumbnail}
                    onChange={handleOnChange}
                    className="border border-1 border-gray-500"
                />
                <InputError message={errors.thumbnail} className="mt-2" />

                <InputLabel
                    htmlFor="rating"
                    value="Rating"
                    className="mt-5 mb-3"
                />
                <TextInput
                    id="rating"
                    type="number"
                    name="rating"
                    defaultValue={movie.rating}
                    variant="primary-outline"
                    placeholder="Enter the rating of the movie"
                    isError={errors.rating}
                    onChange={handleOnChange}
                />
                <InputError message={errors.rating} className="mt-2" />

                <div className="flex flex-row my-4 items-center">
                    <InputLabel
                        htmlFor="is_featured"
                        value="Is Featured"
                        className="mt-4 mr-4"
                    />
                    <Checkbox
                        id="is_featured"
                        className="mt-2"
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                <InputError message={errors.is_featured} className="mt-2" />

                <Button type="submit" processing={processing}>
                    Update
                </Button>
            </form>
        </Authenticated>
    );
}
