import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Lesson from "./components/Lesson";
import Lessons from "./components/Lessons";
import Quiz from "./components/Quiz";
import Exercise from "./components/Exercise";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <Navbar />
            <main className="w-full p-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
                <Routes>
                    <Route index element={<Home />} />
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
            <p className="p-4 text-white bg-neutral-800">حقوق الملكية محفوظة</p>
        </Router>
    );
}

export default App;
