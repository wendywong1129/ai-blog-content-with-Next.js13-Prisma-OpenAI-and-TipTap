"use client"; // client component
import { useState } from "react";
import Image from "next/image";
import {
  Editor,
  useEditor,
  // EditorContent
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FormattedPost } from "@/app/types";
// import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import CategoryAndEdit from "./CategoryAndEdit";
// import EditorMenuBar from "./EditorMenuBar";
import Article from "./Article";
import SocialLinks from "@/app/(shared)/SocialLinks";

type Props = { post: FormattedPost };

// const Content = (props: Props) => {
const Content = ({ post }: Props) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>("");
  const [tempTitle, setTempTitle] = useState<string>(title);

  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>("");
  const [tempContent, setTempContent] = useState<string>(content);

  const date = new Date(post?.createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-GB", options);

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool);
    editor?.setEditable(bool); // modify both the state that we are using and the state within the TipTap editor itself
  };

  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError("");
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError("");
    setContent((editor as Editor).getHTML());
  };

  // const editor = useEditor({
  //   extensions: [StarterKit],
  //   content: "<p>Hello World!</p>",
  // });

  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent, // change the content in both the TipTap editor but also keep it in the state
    editorProps: {
      attributes: {
        class:
          "w-full max-w-full prose prose-sm xl:prose-2xl leading-8 focus:outline-none",
      },
    },
    content: content,
    editable: isEditable, // align everything inside the TipTap editor with the state
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation checks
    if (title === "") setTitleError("This field is required!");
    if (editor?.isEmpty) setContentError("This field is required!");
    if (title === "" || editor?.isEmpty) return;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`, // hit the endpoint
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
        }),
      }
    );
    const data = await response.json();

    handleIsEditable(false);
    setTempTitle("");
    setTempContent("");

    setTitle(data.title);
    setContent(data.content); // set the content
    editor?.commands.setContent(data.content); // also need to set the editor content
  };

  return (
    <div className="prose w-full max-w-full mb-10">
      <h5 className="text-wh-300">
        {/* BREADCRUMBS */}
        {`Home > ${post.category} > ${post.title}`}
      </h5>
      {/* CATEGORY AND EDIT */}
      {/* <div className="flex justify-between items-center">
        <h4 className="py-2 px-5 bg-accent-orange tex-wh-900 text-sm font-bold">
          {post.category}
        </h4>
        <div className="mt-4">
          {isEditable ? (
            <div className="flex justify-between gap-3">
              <button
                onClick={() => {
                  // console.log("cancel edit");
                  handleIsEditable(!isEditable);
                }}
              >
                <XMarkIcon className="h-6 w-6 text-accent-red" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                // console.log("make edit");
                handleIsEditable(!isEditable);
              }}
            >
              <PencilSquareIcon className="h-6 w-6 text-accent-red" />
            </button>
          )}
        </div>
      </div> */}
      <CategoryAndEdit
        isEditable={isEditable}
        handleIsEditable={handleIsEditable}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <>
          {isEditable ? (
            <div>
              <textarea
                className="w-full p-3 bg-wh-50 border-2 rounded-md"
                placeholder="Title"
                // onChange={(e) => console.log("change title: ", e.target.value)}
                onChange={handleOnChangeTitle}
                value={title}
              />
              {titleError && (
                <p className="mt-1 text-red-600 font-bold">{titleError}</p>
              )}
            </div>
          ) : (
            <h3 className="mt-3 font-bold text-3xl">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs">By {post.author}</h5>
            <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
          </div>
        </>
        {/* IMAGE */}
        <div className="relative w-auto h-96 mt-2 mb-16 ">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 480px) 100vw,
                  (max-width: 768px) 85vw,
                  (max-width: 1060px) 75vw,
                  60vw"
          />
        </div>
        {/* ARTICLE */}
        {/* <div
          className={
            isEditable
              ? "border-2 rounded-md bg-wh-50 p-3"
              : "w-full max-w-full"
          }
        >
          {isEditable && (
            <>
              <EditorMenuBar editor={editor} />
              <hr className="mt-2 mb-5 border-1" />
            </>
          )}
          <EditorContent editor={editor} />
        </div> */}
        <Article
          editor={editor}
          title={title}
          isEditable={isEditable}
          setContent={setContent}
          contentError={contentError}
        />
        {/* SUBMIT BUTTON */}
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-5 mt-5 bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold"
            >
              SUBMIT
            </button>
          </div>
        )}
      </form>
      {/* SOCIAL LINKS */}
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
