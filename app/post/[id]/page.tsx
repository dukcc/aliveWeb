
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
    const post = await getPost(params.id)
    return (
        <>
        <head>
            <link rel="icon" href="/logo.png" type="image/png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
            <title>Alive SMP: Home</title>
        </head>
        <div className=" bg-[#070707] h-screen p-3">    
            <div className="mt-28 bg-[#101010] text-white w-full p-8 mb-20 rounded-xl hover:bg-[#151515] transition-all duration-200">
                <img className="aspect-video rounded-lg mb-5 shadow-md shadow-black/5 min-[650px]:w-[594px]" src={post.image} alt="Image Header" />
                <h2 className="text-3xl font-bold">{post.title}</h2>
                <p className="text-lg pb-10">{post.headContent}</p>

                <hr className="border-[#202020] border-2 mb-10" />

                <p className="text-lg">{post.mainContent}</p>
                <p className="text-[#666666]">{post.created}</p>

            </div>
        </div>
        </>
    )
}