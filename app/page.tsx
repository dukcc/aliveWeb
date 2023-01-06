import Link from "next/link";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

export default function Page() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <>
            <head>
                <link rel="icon" href="/logo.png" type="image/png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
                <title>Alive SMP: Home</title>
            </head>
            <div className="bg-[url('/bg.png')] bg-cover bg-fixed bg-center text-white h-screen align-middle justify-center grid place-content-center text-center">
                <h1 className="text-7xl font-default font-bold max-[600px]:text-5xl">
                    Alive SMP
                </h1>
                <p className="text-xl font-default pt-3 max-[600px]:text-sm">
                    A fun civilizations SMP.
                </p>
            </div>
            <div className="bg-[#060606] text-white rounded-t-xl h-full text-xl max-[540px]:text-lg text-center">
                <div className="h-full w-full grid grid-cols-5 max-[1450px]:grid-cols-4 max-[1150px]:grid-cols-3 max-[850px]:grid-cols-2 max-[590px]:grid-cols-1">
                    {postPreviews}
                </div>
            </div>
            <div className="bg-black text-white h-full py-12 text-xl max-[540px]:text-lg align-middle justify-center grid place-content-center text-center">
                <h1 className="text-7xl font-bold py-5 bg-gradient-to-r from-[#004b95] to-[#6fe7f9] inline-block text-transparent bg-clip-text">
                    About
                </h1>
                <p className="w-[50vw] max-[850px]:w-[27rem] max-[460px]:w-[20rem] max-[460px]:text-xl text-left">
                    Alive SMP is a fun civilizations SMP! The new world is gonna have custom world generation done by Stardust labs (Terralith, Incendium, Nullscape, and Structory), with a unique seed, there are now many more places to explore! We've changed the claiming plugin to Lands, so you can create nations, certain areas to players to create a town! You can also start wars with other nations. Lands uses economy, so we now have player shops, and you can trade out blocks with money at the spawn. There is also now a brand new skills plugin: Adapt! There are so many unique skills to the plugin, and when you level up you gain a life! Yes, this is semi-hardcore, you start with 1 life and can gain more by killing, leveling up, or crafting.
                </p>
            </div>
            <div className="bg-[#060606] text-white h-full py-16 max-[790px]:py-7 text-xl max-[540px]:text-lg align-middle justify-center grid place-content-center text-center">
                <h1 className="text-7xl font-bold py-5 bg-gradient-to-r from-[#004b95] to-[#6fe7f9] inline-block text-transparent bg-clip-text max-[510px]:text-6xl max-[490px]:text-4xl">
                    Modifications
                </h1>
                <h6 className="text-xl text-[#cfcfcf] pt-5 font-light max-[490px]:text-lg">
                    Server running on Purpur 1.19.3 <br />
                    And you don't have to install any of this, its on the
                    server!
                </h6>
                <div className="grid grid-cols-2 grid-rows-1 pt-10 max-[790px]:grid-cols-1 max-[790px]:grid-rows-2">
                    <div className="text-left px-5">
                        <h3 className="text-3xl">Datapacks</h3>
                        <h6 className="text-2xl text-[#acacac] pt-2 font-bold">
                            World (Stardust Labs)
                        </h6>
                        <p className="w-[25vw] max-[850px]:w-[27rem] max-[460px]:w-[20rem] max-[490px]:text-lg">
                            Terralith - custom world gen <br />
                            Incendium - custom nether gen <br />
                            Nullscape - custom end gen <br />
                            Structory - custom structures
                        </p>
                        <h6 className="text-2xl text-[#acacac] pt-5 font-bold">
                            VanillaTweaks
                        </h6>
                        <p className="w-[25vw] max-[850px]:w-[27rem] max-[460px]:w-[20rem] max-[490px]:text-lg">
                            Unlock all recipies, Armor statues, Custom nether
                            portals, Graves, Track raw statues, Workstation
                            highlights, Coords hud, Nether portal coords,
                            Pillager tools, Player head drops, Armored elytra,
                            Double shulker shells, More mob heads, Wandering
                            trades. <br />
                            <b className="text-[#acacac]">
                                Crafting Tweaks:
                            </b>
                            <br />
                            Rotten flesh to leather, Coal/charcoal to black dye,
                            Blackstone cobblestone, Straight to shapeless,
                            Universal dyeing, More trapdoors, More bark, More
                            bricks, More stairs, Craftable gravel, Craftable
                            nametags, Craftable coral blocks (3x3), Craftable
                            Blackstone, Unpackable wool.
                        </p>
                    </div>
                    <div className="text-left px-5 max-[790px]:pt-10">
                        <h3 className="text-3xl">Plugins</h3>
                        <p className="w-[25vw] max-[850px]:w-[27rem] max-[460px]:w-[20rem] max-[490px]:text-lg">
                            BetterRTP (teleports you to somewhere random) <br />
                            Coreprotect (can restore bases after griefed) <br />
                            DiscordSRV (links discord and mc chats) <br />
                            Essentials <br />
                            Lands (claiming system) <br />
                            Adapt (skills) <br />
                            Luckperms (ranks) <br />
                            Orebfuscator (anti xray) <br />
                            Shopkeepers (custom villagar shops for players) <br />
                            Squaremap (online world map) <br />
                            Timedrewards (diamond reward every 24hrs) <br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white h-full py-24 px-56 text-2xl align-middle justify-center grid place-items-center text-center grid-rows-1 grid-cols-2 max-[910px]:grid-rows-2 max-[910px]:grid-cols-1 max-[910px]:px-0 max-[910px]:py-48">
                <div className="">
                    <h1 className="text-6xl font-bold py-5 bg-gradient-to-r from-[#0064c9] to-[#34ddf7] inline-block text-transparent bg-clip-text">
                        Worlds
                    </h1>
                </div>
                <div className=" ">
                    <p className="inline-block pr-8 max-[910px]:pr-2">
                        Alive Season 1
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1UBMbbJdcRTdA4BIHBRoaa8wgwW6lkh8o/view?usp=sharing"
                        className="underline text-cyan-500 inline-block"
                    >
                        Download
                    </a>
                </div>
            </div>
            <div className="bg-[#060606] text-white h-full py-24 px-56 text-2xl align-middle justify-center grid place-items-center text-center grid-rows-2 grid-cols-1 max-[910px]:px-0 max-[910px]:py-48">
                <div className="">
                    <h1 className="text-6xl font-bold py-5 bg-gradient-to-r from-[#0064c9] to-[#34ddf7] inline-block text-transparent bg-clip-text">
                        Socials
                    </h1>
                    <p className="text-xl w-96 max-[385px]:w-64 text-left">
                        What are you waiting for? Join our discord and apply to
                        get into the smp! While you're here, you might as well
                        check out our socials! <br />
                        <b>Applications:</b> <br />
                        We are looking for dedicated players, no you dont have to be online 24/7 and build crazy projects but if you feel like you arent gonna play that much then dont apply. We also would love to have people that have good skills in building, redstone, or pvp.
                    </p>
                </div>
                <div className=" ">
                    <a
                        href="https://discord.gg/9ve738vbrP"
                        className="block p-3 m-5 w-56 bg-[#5662f6] rounded-xl hover:translate-y-1 active:scale-[0.99] transition-all duration-200 hover:bg-[#1f1f1f]"
                        target="_blank"
                    >
                        Discord
                    </a>
                    <a
                        href="https://map.alivesmp.xyz"
                        className="block p-3 m-5 w-56 bg-[#33adff] rounded-xl hover:translate-y-1 active:scale-[0.99] transition-all duration-200 hover:bg-[#1f1f1f]"
                        target="_blank"
                    >
                        World Map
                    </a>
                    <a
                        href="https://www.youtube.com/@alivesmp"
                        className="block p-3 m-5 w-56 bg-[#ff0000] rounded-xl hover:translate-y-1 active:scale-[0.99] transition-all duration-200 hover:bg-[#1f1f1f]"
                        target="_blank"
                    >
                        YouTube
                    </a>
                </div>
            </div>
        </>
    );
}
