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
		<div className="bg-black bg-cover bg-center text-white h-[250rem] place-items-center">
      <Link href="https://discord.gg/jazHytWPNw" className="bg-black">
        <div className="w-[50rem] h-[25rem] bg-[#5170ef] p-10 m-3">
          <h1 className="text-5xl font-bold">
            Join Our Discord
          </h1>
        </div>
      </Link>
		</div>
		</>
	)
}
