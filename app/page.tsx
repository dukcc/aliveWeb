export default function Page() {
    return (
        <>
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
                <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                    <video
                        className="min-w-full min-h-full absolute object-cover"
                        src="/landing.webm"
                        autoPlay
                        muted
                        loop
                    ></video>
                </div>
                <div className="video-content space-y-2 mb-36">
                    <h1 className="text-[200px] font-bold text-transparent bg-clip-text max-[690px]:text-[120px] bg-gradient-to-br from-[#4DC0FF] to-[#078FFF] block">
                        Alive
                    </h1>
                    <h4 className="text-[50px]">Gaming Group</h4>
                </div>
            </section>
            <section
                id="media"
                className="px-[122px] py-[122px] max-[640px]:px-[61px] max-[640px]:py-[61px]"
            >
                <h1 className="text-[100px] font-bold pb-[61px] text-transparent max-[690px]:text-[70px] bg-clip-text bg-gradient-to-br from-[#4DC0FF] to-[#078FFF] block">
                    Alive Media
                </h1>
                <p className="text-[25px] font-light pb-[61px]">
                    At Alive Media I create entertaining Minecraft gaming
                    content on the Twitch channel{" "}
                    <a
                        href="https://www.twitch.tv/dukcccc"
                        target="_blank"
                        className="underline"
                    >
                        dukcccc
                    </a>
                    . Every 2 weeks Alive Media creates a highlight of the
                    Twitch content and uploads it to the YouTube channel{" "}
                    <a
                        href="https://www.youtube.com/@dukc0"
                        target="_blank"
                        className="underline"
                    >
                        @dukc0
                    </a>
                    . <br /> <br />
                    Minecraft hardcore streams - every Saturday and Sunday{" "}
                    <br />
                    Alive City building streams (creative) - every Wednesday
                </p>
                <h2 className="text-[50px] font-normal pb-[61px]">
                    Hardcore World:
                </h2>
                <p className="text-[25px] font-light pb-[61px]">
                    <b>Seed:</b> unknown <br />
                    <b>Mods:</b> Fabulously Optimized Modpack + Better Third
                    Person + Camera Overhaul + Chunks fade in + Shulker box
                    tooltip + Litematica + Essential + Better F3
                </p>
                <div className="grid grid-cols-3 gap-[76px] max-[1160px]:grid-cols-2 max-[820px]:grid-cols-1">
                    <div className="">
                        <a
                            href="https://vanillatweaks.net/picker/datapacks/"
                            className="text-[30px] font-bold underline"
                            target="_blank"
                        >
                            Vanilla Tweaks Datapacks:
                        </a>
                        <p className="text-[25px] font-light">
                            - Armor statues <br />
                            - Coords HUD <br />
                            - Custom nether portals <br />
                            - Double shulker <br />
                            - More mob heads <br />
                            - Nether portal coords <br />
                            - Silence mobs <br />
                            - Unlock all recipes <br />
                            - Villager workstation highlights <br />- Wandering
                            trades
                        </p>
                    </div>
                    <div className="">
                        <a
                            href="https://vanillatweaks.net/picker/crafting-tweaks/"
                            className="text-[30px] font-bold underline"
                            target="_blank"
                        >
                            Crafting Tweaks Datapacks:
                        </a>
                        <p className="text-[25px] font-light">
                            - Unpackable wool, & ice <br />
                            - Craftable name tags, coral blocks, & blackstone{" "}
                            <br />
                            - More bark, trapdoors, stairs, & bricks <br />
                            - Blackstone cobblestone <br />
                            - Universal dyeing, sandstone dyeing <br />
                            - Straight to shapeless <br />
                            - Charcoal & coal to black dye <br />
                            - Unlock All Recipes <br />
                            - Villager Workstation Highlights <br />- Wandering
                            Trades
                        </p>
                    </div>
                    <div className="">
                        <a
                            href="https://www.stardustlabs.net/datapacks"
                            className="text-[30px] font-bold underline"
                            target="_blank"
                        >
                            Worlds Gen Datapacks:
                        </a>
                        <p className="text-[25px] font-light">
                            - Terralith (overworld) <br />
                            - Incendium (nether) <br />- Nullscape (end)
                        </p>
                    </div>
                </div>
            </section>
            <hr className="border-2 border-white/5 mx-[122px] max-[640px]:mx-[61px]" />
            <section
                id="media"
                className="px-[122px] py-[122px] max-[640px]:px-[61px] max-[640px]:py-[61px]"
            >
                <h1 className="text-[100px] font-bold pb-[61px] text-transparent max-[690px]:text-[70px] bg-clip-text bg-gradient-to-br from-[#4DC0FF] to-[#078FFF] block">
                    Alive City
                </h1>
                <p className="text-[25px] font-light pb-[61px]">
                    Alive City is a modern, minimal city. It will be pedestrian
                    focused, with highways outlining the edge of the city and
                    main roads coming in to the center with car lanes, and then
                    with public transport in the middle of the main roads, with
                    the rest of the streets being bike/walk focused. The city
                    will have the lowest carbon footprint. Every building is
                    required to have solar or wind power connected, and its
                    highly encouraged to have plants on your buildings. Gas cars
                    are banned, and the rest of the power grid is powered by a
                    solar and wind farm far outside of the valley.
                    <br /> <br />
                    View the building process on{" "}
                    <a
                        href="https://www.twitch.tv/dukcccc"
                        target="_blank"
                        className="underline"
                    >
                        Twitch
                    </a>
                    , and highlights/timelapses on{" "}
                    <a
                        href="https://www.youtube.com/@dukc0"
                        target="_blank"
                        className="underline"
                    >
                        YouTube
                    </a>
                    . <br />
                    Built in Minecraft creative 1.14.4, with world edit, and
                    using{" "}
                    <a
                        href="https://cubed.community/texturepack/"
                        target="_blank"
                        className="underline"
                    >
                        Cubed Pack
                    </a>
                    . <br />
                    Custom world made with{" "}
                    <a
                        href="https://www.worldpainter.net/"
                        target="_blank"
                        className="underline"
                    >
                        Worldpainter
                    </a>
                    .
                    <br /> <br />
                    View the Google Doc, full with all the inspiration and plans{" "}
                    <a
                        href="https://docs.google.com/document/d/1DBUbqnyhlIRg2SAnMq3Q9TKBcUDeoyxfySVRvgm7CX8/edit?usp=sharing"
                        target="_blank"
                        className="underline"
                    >
                        here
                    </a>
                    .
                </p>
            </section>
            <hr className="border-2 border-white/5 mx-[122px] max-[640px]:mx-[61px]" />
            <section
                id="media"
                className="px-[122px] py-[122px] max-[640px]:px-[61px] max-[640px]:py-[61px]"
            >
                <h1 className="text-[100px] font-bold pb-[61px] text-transparent max-[690px]:text-[70px] max-[490px]:text-[50px] bg-clip-text bg-gradient-to-br from-[#4DC0FF] to-[#078FFF] block">
                    Alive Resources
                </h1>
                <p className="text-[25px] font-light pb-[61px]">
                    A minimal Minecraft resourcepack, that tweaks the textures,
                    adds some more useful building blocks and changes the GUI.
                </p>
                <h2 className="text-[50px] font-normal pb-[61px]">
                    Downloads:
                </h2>
                <p className="text-[25px] font-light pb-[61px]">
                    Haven't been released yet.
                </p>
            </section>
        </>
    );
}
