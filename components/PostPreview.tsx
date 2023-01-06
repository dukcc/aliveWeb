import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link href={`/posts/${props.slug}`}>
            <div className="bg-[#dddddd] text-black rounded-xl hover:bg-[#d1d1d1] shadow-lg shadow-[#628ba9]/50 hover:shadow-[#628ba9]/90 m-5 transition-all duration-200 active:scale-[0.99] text-left h-[30rem]">
                <img
                    src={props.image}
                    alt="Image Header"
                    className="rounded-t-xl aspect-video pb-5"
                />
                <div className="px-8 pb-8">
                    <h1 className="text-4xl font-bold pb-2">{props.title}</h1>
                    <p className="text-xl w-[90%]">{props.subtitle}</p>
                </div>
            </div>
        </Link>
    )
}

export default PostPreview;