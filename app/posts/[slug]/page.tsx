import fs from "fs";
import Markdown from 'markdown-to-jsx';
import getPostMetadata from "../../../components/getPostMetadata";
import matter from 'gray-matter';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8")
    const matterResult = matter(content);
    return matterResult.content;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

const PostPage = (props: any ) => {
    const slug = props.params.slug;
    const content = getPostContent(slug);
    return (
        <div className="bg-black h-full text-white overflow-x-hidden font-default">
            <title>Alive SMP: Post</title>
            <link rel="icon" href="/logo.png" type="image/png" />
            <div className="bg-black p-16 grid place-content-center pt-[150px] max-[370px]:p-6">
                <article className="prose lg:prose-xl prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h6:text-white prose-p:text-[#e1e1e1] prose-a:text-[#4abeff] hover:prose-a:text-[#a4deff] prose-code:text-[#b3b3b3] prose-img:rounded-xl prose-li:text-[#e1e1e1] prose-ul:text-[#e1e1e1] prose-blockquote:text-[#e1e1e1]">
                    <Markdown>{content}</Markdown>
                </article>
            </div>
        </div>
    )
}

export default PostPage;
