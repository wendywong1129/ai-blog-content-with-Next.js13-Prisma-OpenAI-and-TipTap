import { Editor } from "@tiptap/react";
import { FormattedPost } from "@/app/types";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  post: FormattedPost;
  editor: Editor | null;
  isEditable: boolean;
  handleIsEditable: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
};

const CategoryAndEdit = ({
  post,
  editor,
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
}: Props) => {
  const handleEnableEdit = () => {
    handleIsEditable(!isEditable);
    setTempTitle(title); // set the original title to be the tempTitle
    setTempContent(editor?.getHTML() || ""); // set the original content to be the tempContent
  };

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable);
    setTitle(tempTitle); // once cancel, use the tempTitle(original title) to be what the title needs to be
    editor?.commands.setContent(tempContent); // once cancel, use the tempContent(original content) to be what the content needs to be
  };

  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 tex-wh-900 text-sm font-bold">
        {post.category}
      </h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button onClick={handleEnableEdit}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryAndEdit;
