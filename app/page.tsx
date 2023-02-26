import Image from "next/image";

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
                    <Image src={"/media.png"} className="inline mr-10 max-[980px]:hidden" alt={"Alive Media Logo"} width={"99"} height={"99"}></Image>
                    Alive Media
                </h1>
                <p className="text-[25px] font-light pb-[61px]">
                    At Alive Media I create Minecraft gaming
                    content on the Twitch channel{" "}
                    <a
                        href="https://www.twitch.tv/dukcccc"
                        target={"_blank"}
                        className="underline"
                    >
                        dukcccc
                    </a>
                    . Every 2 weeks I create a highlight of the
                    Twitch content and uploads it to the YouTube channel{" "}
                    <a
                        href="https://www.youtube.com/@dukc0"
                        target={"_blank"}
                        className="underline"
                    >
                        @dukc0
                    </a>
                    . <br /> <br />
                    <b>Schedule</b> <br />
                    Minecraft hardcore streams - Saturday and Sundays at 11:00 AM{" "}
                    <br />
                    Alive City building streams - Wednesdays at 3:30 PM
                </p>
                <h2 className="text-[50px] font-normal pb-[61px]">
                    Hardcore World:
                </h2>
                <p className="text-[25px] font-light">
                    <b>Version:</b> Minecraft Java 1.19.2, Forge 43.2.0 <br />
                    <b>Seed:</b> -8809820003186613556 <br />
                    <b>Mods:</b>
                </p>
                <div className="flex flex-wrap pb-20">
                    <ul className="list-disc ml-6 text-[25px] mr-80 underline font-light">
                        <li><a href="https://modrinth.com/mods?q=3d%20sk" target={"_blank"}>3D Skin Layers</a></li>
                        <li><a href="https://modrinth.com/mod/another-furniture" target={"_blank"}>Another Furniture</a></li>
                        <li><a href="https://modrinth.com/mod/architectury-api" target={"_blank"}>Architectury API</a></li>
                        <li><a href="https://modrinth.com/mod/betterf3" target={"_blank"}>Better F3</a></li>
                        <li><a href="https://modrinth.com/mod/chickensshed" target={"_blank"}>ChickensShed</a></li>
                        <li><a href="https://modrinth.com/mod/cloth-config" target={"_blank"}>Cloth Config API</a></li>
                        <li><a href="https://modrinth.com/mod/cofh-core" target={"_blank"}>CoFH Core</a></li>
                        <li><a href="https://modrinth.com/mod/collective" target={"_blank"}>Collective</a></li>
                        <li><a href="https://modrinth.com/mod/companion" target={"_blank"}>Companion</a></li>
                        <li><a href="https://modrinth.com/mod/create" target={"_blank"}>Create</a></li>
                        <li><a href="https://modrinth.com/mod/cull-leaves" target={"_blank"}>Cull Leaves</a></li>
                        <li><a href="https://modrinth.com/mod/double-doors" target={"_blank"}>Double Doors</a></li>
                        <li><a href="https://modrinth.com/mod/easy-anvils" target={"_blank"}>Easy Anvils</a></li>
                        <li><a href="https://modrinth.com/mod/editsign" target={"_blank"}>EditSign</a></li>
                        <li><a href="https://modrinth.com/mod/entityculling" target={"_blank"}>EntityCulling</a></li>
                        <li><a href="https://modrinth.com/mod/essential" target={"_blank"}>Essential</a></li>
                        <li><a href="https://modrinth.com/mod/extractinator" target={"_blank"}>Extractinator</a></li>
                    </ul>
                    <ul className="list-disc ml-6 text-[25px] mr-80 underline font-light">
                        <li><a href="https://modrinth.com/mod/farmers-delight" target={"_blank"}>Farmer's Delight</a></li>
                        <li><a href="https://modrinth.com/mod/fastload" target={"_blank"}>Fastload</a></li>
                        <li><a href="https://modrinth.com/mod/ferrite-core" target={"_blank"}>FerriteCore</a></li>
                        <li><a href="https://modrinth.com/mod/geckolib" target={"_blank"}>GeckoLib</a></li>
                        <li><a href="https://modrinth.com/mod/incendium" target={"_blank"}>Incendium</a></li>
                        <li><a href="https://modrinth.com/plugin/lmd" target={"_blank"}>Let Me Despawn</a></li>
                        <li><a href="https://modrinth.com/mod/mavapi" target={"_blank"}>More Axolotl Variants API</a></li>
                        <li><a href="https://modrinth.com/mod/mavm" target={"_blank"}>More Axolotl Variants Mod</a></li>
                        <li><a href="https://modrinth.com/mod/morefrogs" target={"_blank"}>More Frogs</a></li>
                        <li><a href="https://modrinth.com/mod/not-enough-animations" target={"_blank"}>Not Enough Animations</a></li>
                        <li><a href="https://modrinth.com/mod/nullscape" target={"_blank"}>Nullscape</a></li>
                        <li><a href="https://optifine.net/downloads" target={"_blank"}>Optifine</a></li>
                        <li><a href="https://modrinth.com/mod/pluto" target={"_blank"}>Pluto</a></li>
                        <li><a href="https://modrinth.com/mod/puzzles-lib" target={"_blank"}>Puzzles Lib</a></li>
                        <li><a href="https://modrinth.com/mod/raised" target={"_blank"}>Raised</a></li>
                        <li><a href="https://modrinth.com/mod/reblured" target={"_blank"}>Reblurred</a></li>
                        <li><a href="https://modrinth.com/mod/rechiseled" target={"_blank"}>Rechiseled</a></li>
                    </ul>
                    <ul className="list-disc ml-6 text-[25px] underline font-light">
                        <li><a href="https://modrinth.com/mod/rbip" target={"_blank"}>Recipe Book is Pain</a></li>
                        <li><a href="https://modrinth.com/mod/resourceful-lib" target={"_blank"}>Resourceful Lib</a></li>
                        <li><a href="https://modrinth.com/mod/resourceful-config" target={"_blank"}>Resourceful Config</a></li>
                        <li><a href="https://modrinth.com/mod/roughly-enough-items" target={"_blank"}>Roughly Enough Items</a></li>
                        <li><a href="https://modrinth.com/mod/saturn" target={"_blank"}>Saturn</a></li>
                        <li><a href="https://modrinth.com/mod/shuffle" target={"_blank"}>Shuffle</a></li>
                        <li><a href="https://modrinth.com/mod/shulkerboxtooltip" target={"_blank"}>ShulkerBoxTooltip</a></li>
                        <li><a href="https://modrinth.com/mod/shulker-drops-two" target={"_blank"}>Shulker Drops Two</a></li>
                        <li><a href="https://modrinth.com/mod/bl4cks-sit" target={"_blank"}>Sit</a></li>
                        <li><a href="https://modrinth.com/mod/spark" target={"_blank"}>Spark</a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-config-lib/files" target={"_blank"}>SuperMartijn642's Config Lib</a></li>
                        <li><a href="https://www.curseforge.com/minecraft/mc-mods/supermartijn642s-core-lib/files" target={"_blank"}>SuperMartijn642's Core Lib</a></li>
                        <li><a href="https://modrinth.com/mod/terralith" target={"_blank"}>Terralith</a></li>
                        <li><a href="https://modrinth.com/mod/texels-paintings" target={"_blank"}>Texels Paintings</a></li>
                        <li><a href="https://modrinth.com/mod/untitled-duck-mod" target={"_blank"}>Untitled Duck Mod</a></li>
                        <li><a href="https://modrinth.com/mod/yungs-api" target={"_blank"}>YUNG's API</a></li>
                        <li><a href="https://modrinth.com/mod/yungs-bridges" target={"_blank"}>YUNG's Bridges</a></li>
                        <li><a href="https://modrinth.com/mod/yungs-extras" target={"_blank"}>YUNG's Extras</a></li>
                    </ul>
                </div>
                <a href="https://drive.google.com/file/d/1pxpSHnKLKjOkbCA_irLR8uOC94Y2yKwu/view?usp=sharing" target={"_blank"} className="text-[25px] text-[#078FFF] underline">Download All Mods</a>
            </section>
            <hr className="border-2 border-white/5 mx-[122px] max-[640px]:mx-[61px]" />
            <section
                id="media"
                className="px-[122px] py-[122px] max-[640px]:px-[61px] max-[640px]:py-[61px] flex flex-wrap place-content-between"
            >
                <div className="w-[50vw]">
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
                            target={"_blank"}
                            className="underline"
                        >
                            Twitch
                        </a>
                        , and highlights/timelapses on{" "}
                        <a
                            href="https://www.youtube.com/@dukc0"
                            target={"_blank"}
                            className="underline"
                        >
                            YouTube
                        </a>
                        . <br />
                        Built in Minecraft creative 1.14.4, with world edit, and
                        using{" "}
                        <a
                            href="https://cubed.community/texturepack/"
                            target={"_blank"}
                            className="underline"
                        >
                            Cubed Pack
                        </a>
                        . <br />
                        Custom world made with{" "}
                        <a
                            href="https://www.worldpainter.net/"
                            target={"_blank"}
                            className="underline"
                        >
                            Worldpainter
                        </a>
                        .
                        <br /> <br />
                        View the Google Doc, full with all the inspiration and plans{" "}
                        <a
                            href="https://docs.google.com/document/d/1DBUbqnyhlIRg2SAnMq3Q9TKBcUDeoyxfySVRvgm7CX8/edit?usp=sharing"
                            target={"_blank"}
                            className="underline"
                        >
                            here
                        </a>
                        .
                    </p>
                </div>
                <Image src={"/city.jpg"} className="shadow-xl" alt={"Alive Logo"} width={"687"} height={"1"} />
            </section>
            <hr className="border-2 border-white/5 mx-[122px] max-[640px]:mx-[61px]" />
            <section
                id="media"
                className="px-[122px] py-[122px] max-[640px]:px-[61px] max-[640px]:py-[61px]"
            >
                <h1 className="text-[100px] font-bold pb-[61px] text-transparent max-[690px]:text-[70px] max-[490px]:text-[50px] bg-clip-text bg-gradient-to-br from-[#4DC0FF] to-[#078FFF] block">
                    <Image src={"/resources.png"} className="inline mr-10 max-[1200px]:hidden" alt={"Alive Resources Logo"} width={"99"} height={"99"}></Image>
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
