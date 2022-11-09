import Link from "next/link";

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
		</div>
		<div className="bg-black bg-cover bg-center text-white h-[32rem] font-default p-3 grid grid-rows-1 grid-cols-2">
      <div className="bg-[#101010] h-[28.5rem] p-8 rounded-xl mr-[0.375rem]">
        <h1 className="text-5xl font-bold">About</h1>
        <p className="text-xl pt-5">Alive is a fun, semi-vanilla SMP. To join, first join our Discord server, and apply. We have a claim plugin to prevent griefing, and shopkeepers to create player entitiy shops, and some datapacks from Vanilla Tweaks.</p>
      </div>
      <div className="bg-black bg-cover bg-center text-white h-[30rem] font-default grid grid-rows-1 grid-cols-2">
        <div className="bg-[#101010] h-[28.5rem] p-8 rounded-xl mr-[0.375rem] ml-[0.375rem]">
          <h1 className="text-5xl font-bold">Join our Discord</h1>
        </div>
        <div className="bg-[#101010] h-[28.5rem] p-8 rounded-xl ml-[0.375rem]">
          <h1 className="text-5xl font-bold">Creators</h1>
        </div>
      </div>
		</div>
		</>
	)
}
