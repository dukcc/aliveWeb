
export default function Page() {
	return (
		<>
    <head>
        <link rel="icon" href="../img/logo.png" type="image/png" />
        <title>Alive SMP: Home</title>
    </head>
		<div className="bg-[url('/bg.png')] bg-cover bg-center text-white h-screen align-middle justify-center grid place-content-center text-center">
			<h1 className="text-7xl font-default font-bold max-[600px]:text-5xl">
				Alive SMP
			</h1>
			<p className="text-xl font-default pt-3 max-[600px]:text-sm">
				A fun, semi-vanilla Minecraft SMP.<br></br>
        Apply to join at our Discord.
			</p>
      <a href="https://discord.gg/jazHytWPNw" className="bg-[#101010] hover:bg-[#5865F2] transition-all duration-200 w-full text-2xl font-bold rounded-xl py-3 my-7">
        Discord
      </a>
      <a href="https://map.alivesmp.xyz" className="bg-[#101010] hover:bg-[#0077fc] transition-all duration-200 w-full text-2xl font-bold rounded-xl py-3">
        Map
      </a>
		</div>
		</>
	)
}
