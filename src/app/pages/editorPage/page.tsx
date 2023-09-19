import BlameButton from "@/app/components/Make an Blame/BlameButton";
import ComplainField from "@/app/modules/Editor/application/ComplaynField/ComplainField";
import EditorField from "@/app/modules/Editor/application/EditorField/EditorField";

export default function EditorPage() { 
    return (
        <main className="mx-10">
            <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">Editor Page</h1>
            <div className="px-2 py-2 mx-2 my-2 bg-blue-200 rounded-lg">
                <EditorField />
            </div>
        </main>
    )
}