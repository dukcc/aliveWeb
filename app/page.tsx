
export default function Page() {
	return (
	<>
    <head>
        <link rel="icon" href="/logo.png" type="image/png" />
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
	<div className="bg-black text-white h-[35rem] text-2xl align-middle justify-center grid place-content-center text-center">
		<h1 className="text-5xl font-bold py-5">About</h1>
		<p className="w-[50vw] max-[850px]:w-[27rem] max-[460px]:w-[20rem] max-[460px]:text-xl">
		Alive SMP is a fun, semi-vanilla SMP. We have UltimateClaims to manage land, so players don't grief/steal. We also have Shopkeepers to manage player shops, it will create entities that act like villagers. <a target="_blank" className="text-blue-500" href="https://www.youtube.com/playlist?list=PLVyVthOY4xw8fd8rvXoUV1GPNWFbSSNmM">Tutorials for those plugins here.</a> To join, apply in our Discord server.
		</p>
	</div>
	</>
	)
}
