import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Authenticated from "@/Layouts/Authenticated/Authenticated";
import { useForm, Link, Head } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
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

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h3 className="text-xl">Create a new movie</h3>
            <hr className="mt-3" />

            <form onSubmit={submit}>
                <InputLabel htmlFor="name" value="Name" className="mt-5 mb-3" />
                <TextInput
                    id="name"
                    type="text"
                    name="name"
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
                    variant="primary-outline"
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                    onChange={handleOnChange}
                />
                <InputError message={errors.video_url} className="mt-2" />

                <InputLabel value="Thumbnail" className="mt-5 mb-3" />
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
                    />
                </div>
                <InputError message={errors.is_featured} className="mt-2" />

                <Button type="submit" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
