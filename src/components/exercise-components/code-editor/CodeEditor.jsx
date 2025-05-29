// import AceEditor from "react-ace";
import { Play, RotateCcw, Loader } from "lucide-react";
/* import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/theme-monokai";
*/
const CodeEditor = ({
    code,
    onChange,
    language,
    onReset,
    onRun,
    isRunning
}) => {
    const getEditorMode = () => {
        const lang = language?.toLowerCase();
        if (!lang) return "c_cpp";
        switch (lang) {
            case "cpp":
            case "c":
                return "c_cpp";
            case "java":
                return "java";
            case "python":
                return "python";
            case "javascript":
                return "javascript";
            default:
                return "c_cpp";
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-3 dark:p-4 dark:rounded-md dark:bg-neutral-700">
                <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-100">
                    الحل الخاص بك
                </h3>
                <button
                    onClick={onReset}
                    className="text-sm text-neutral-600 dark:text-neutral-100 hover:text-red-600 dark:hover:text-red-400 flex items-center"
                >
                    <RotateCcw className="h-4 w-4 ml-2" />
                    إعادة ضبط
                </button>
            </div>
            <div className="code-editor rounded-lg overflow-hidden border border-gray-200">
                {/* <AceEditor
                    theme="monokai"
                    mode={getEditorMode()}
                    name="ace-editor"
                    onChange={onChange}
                    value={code}
                    editorProps={{ $blockScrolling: true }}
                    setOptions={{
                        enableBasicAutocompletion: true,
                        enableLiveAutocompletion: true,
                        enableSnippets: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        fontSize: 14,
                        fontFamily: "'Fira code', 'Fira Mono', monospace",
                        useWorker: false
                    }}
                    width="100%"
                    height="400px"
                    style={{
                        borderRadius: "0.5rem",
                        paddingBlock: "0.5rem"
                    }}
                />
                */}
            </div>
            <div className="mt-4 flex gap-3">
                <button
                    onClick={onRun}
                    disabled={isRunning}
                    className="px-4 py-2 bg-green-600 dark:bg-green-300 dark:text-black hover:bg-green-700 dark:hover:bg-green-400 text-white font-medium rounded-md flex items-center"
                >
                    {isRunning ? (
                        <>
                            <Loader className="animate-spin ml-2 h-4 w-4" />
                            جارِ التشغيل
                        </>
                    ) : (
                        <>
                            <Play className="ml-2 h-4 w-4" />
                            تشغيل الكود
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default CodeEditor;
