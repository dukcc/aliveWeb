async function getPost(postId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
        {
            next: { revalidate: 10 },
        }
    );
    const data = await res.json();
    return data;
}

export default async function PostPage({ params }: any) {
    const post = await getPost(params.id);

    return (
        <div className="bg-black h-full text-white overflow-x-hidden font-default">
            <title>Alive SMP: Post</title>
            <link rel="icon" href="/logo.png" type="image/png" />
            <div
                style={{ backgroundImage: `url(${post.image})` }}
                className="h-[75vh] bg-cover rounded-b-xl   grid place-content-center pt-[90px]"
            >
                <h2 className="text-8xl font-bold max-[1000px]:text-5xl max-[500px]:text-3xl">
                    {post.title}
                </h2>
            </div>
            <div className="bg-black p-16 grid place-content-center">
                <p className="text-2xl w-[50rem]">{post.mainContent}</p>
            </div>
        </div>
    );
}
