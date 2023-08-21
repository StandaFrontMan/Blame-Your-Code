import ComplainField from "@/app/modules/Editor/application/ComplaynField/ComplainField";
import EditorField from "@/app/modules/Editor/application/EditorField/EditorField";

export default function EditorPage() {
    return (
        <main className="mx-10">
            <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">Editor Page</h1>
            <div className="flex px-2 mx-2 my-2 h-[70vh]">
                <EditorField />
                <ComplainField />
            </div>
            <div className="flex items-center justify-center">
            <button className="py-2 px-2 mx-2 my-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg duration-150 ">
                Blame !
            </button>
            </div>
        </main>
    )
}