
async function getPosts() {
	const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30', { cache: 'no-store' });
	const data = await res.json();
	return data?.items as any[];
}

export default async function Page() {

	const posts = await getPosts();

	return (
	<>
    <head>
        <link rel="icon" href="../img/logo.png" type="image/png" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <title>Alive SMP: Home</title>
    </head>
	<div className="bg-[url('/bg.png')] bg-cover bg-fixed bg-center text-white h-screen align-middle justify-center grid place-content-center text-center">
		<h1 className="text-7xl font-default font-bold max-[600px]:text-5xl">
			Alive SMP
		</h1>
		<p className="text-xl font-default pt-3 max-[600px]:text-sm">
			A fun, semi-vanilla Minecraft SMP.<br></br>
        	Apply to join at our Discord.
		</p>
      	<a href="https://discord.gg/jazHytWPNw" className="bg-black/50 backdrop-blur-md hover:bg-[#5865F2] transition-all duration-200 w-full text-2xl font-bold rounded-xl py-3 my-7">
        	Discord
      	</a>
      	<a href="https://map.alivesmp.xyz" className="bg-black/50 backdrop-blur-md hover:bg-[#0077fc] transition-all duration-200 w-full text-2xl font-bold rounded-xl py-3">
        	Map
      	</a>
	</div>
	<div className=" bg-[#070707] h-full p-5 grid grid-cols-4 max-[1630px]:grid-cols-3 max-[1270px]:grid-cols-2 max-[850px]:grid-cols-1">
		{posts?.map((post) => {
			return <Post key={post.id} post={post} />
		})}
	</div>
	</>
	)
}

function Post({ post }: any) {
    let { id, title, content, image, created } = post || {};

	created = created.split(' ')[0];

    return (
        <>
        <div className="bg-[#101010] text-white w-96 p-8 mb-20 rounded-xl hover:bg-[#151515] transition-all duration-200">
          	<img className="aspect-video rounded-lg mb-5 shadow-md shadow-black/5" src={image} alt="Image Header" />
          	<h2 className="text-3xl font-bold">{title}</h2>
          	<p className="text-lg">{content}</p>
			<p className="text-[#666666]">{created}</p>
        </div>
        </>
    )
}
