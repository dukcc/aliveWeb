export default async function Page() {
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
      	<a href="https://map.alivesmp.xyz" className="bg-black/50 backdrop-blur-md hover:bg-cyan-500 transition-all duration-200 w-full text-2xl font-bold rounded-xl py-3">
        	World Map
      	</a>
	</div>
	<div className="bg-black text-white h-[35rem] text-xl max-[540px]:text-lg align-middle justify-center grid place-content-center text-center">
		<h1 className="text-5xl font-bold py-5">About</h1>
		<p className="w-[50vw] max-[850px]:w-[27rem] max-[460px]:w-[20rem] max-[460px]:text-xl">
		Alive SMP is a fun SMP. We have UltimateClaims to manage land, so players don't grief/steal. We also have Shopkeepers to manage player shops, it will create entities that act like villagers. <a target="_blank" className="text-cyan-500" href="https://www.youtube.com/playlist?list=PLVyVthOY4xw8fd8rvXoUV1GPNWFbSSNmM">Tutorials for those plugins here.</a> In the new Season 2 update, we have plenty new additions, we now have a leveling system which gives you perks when you level up, and more lives! This is semi-hardcore, when you reach certain levels you can earn more lives. We also have a new map, we havent decided if it will be a real life world map, or a custom generated Iris map. We might be adding more things soon though, S2 isn't out yet.. To join, and receive news, join and apply in our Discord server. 
		</p>
	</div>
	<div className="bg-black text-white">
		<div className="p-3 bg-neutral-900/50 border border-white/5 h-[35rem] px-56 text-2xl align-middle justify-center grid place-items-center text-center grid-rows-1 grid-cols-2 max-[910px]:grid-rows-2 max-[910px]:grid-cols-1 max-[910px]:px-0 max-[910px]:py-48">
			<div className="">
				<h1 className="text-5xl font-bold py-5">Worlds</h1>
			</div>
			<div className=" ">
				<p className="inline-block pr-8 max-[910px]:pr-2">Alive Season 1</p>
				<a href="https://drive.google.com/file/d/1UBMbbJdcRTdA4BIHBRoaa8wgwW6lkh8o/view?usp=sharing" className="underline text-cyan-500 inline-block">Download</a>
			</div>
		</div>
	</div>
	</>
	)
}
