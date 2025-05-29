import { Routes, Route } from "react-router-dom";
import {
    Home,
    Statistics,
    Navbar,
    Lesson,
    Lessons,
    Quiz,
    Exercise,
    Register,
    NotFound
} from "./components";

function App() {
    return (
        <>
            <Navbar />
            <main className="w-full p-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/statistics" element={<Statistics />} />
                    <Route path="/lessons">
                        <Route index element={<Lessons />} />
                        <Route path=":lessonId">
                            <Route index element={<Lesson />} />
                            <Route path="quiz" element={<Quiz />} />
                            <Route path="exercises" element={<Exercise />} />
                        </Route>
                    </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <p className="p-4 text-white text-center bg-neutral-900">حقوق الملكية محفوظة &copy;</p>
        </>
    );
}

export default App;