<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                "name" => "The Batman",
                "slug" => "the-batman",
                "category" => "Action",
                "video_url" => "https://www.youtube.com/watch?v=mqqft2x_Aa4",
                "thumbnail" => "https://ik.trn.asia/uploads/2022/03/1646449217541.jpeg",
                "rating" => 4.3,
                "is_featured" => 1,
            ],
            [
                "name" => "Superman",
                "slug" => "superman",
                "category" => "Action",
                "video_url" => "https://www.youtube.com/watch?v=uhUht6vAsMY",
                "thumbnail" => "https://cdn.ngopibareng.id/uploads/2022/2022-05-01/sinopsis-justice-league-superhero-bergabung-menyelamatkan-dunia--thumbnail-979.webp",
                "rating" => 3.3,
                "is_featured" => 0,
            ],
            [
                "name" => "Wonder Woman",
                "slug" => "wonder-woman",
                "category" => "Action",
                "video_url" => "https://www.youtube.com/watch?v=1Q8fG0TtVAY",
                "thumbnail" => "https://www.rukita.co/stories/wp-content/uploads/2022/06/wonder-woman.jpg",
                "rating" => 4.5,
                "is_featured" => 0,
            ]
        ];

        Movie::insert($movies);
    }
}
