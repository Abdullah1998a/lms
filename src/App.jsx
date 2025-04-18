import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Lesson from "./components/Lesson";
import Lessons from "./components/Lessons";
import Quiz from "./components/Quiz";
import Exercise from "./components/Exercise";

function App() {
    return (
        <Router>
            <Navbar />
            <main className="w-full p-4 flex items-center">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/lessons">
                        <Route index element={<Lessons />} />
                        <Route path=":id">
                            <Route index element={<Lesson />} />
                            <Route path="quiz/:lessonId" element={<Quiz />} />
                            <Route
                                path="exercises/:lessonId"
                                element={<Exercise />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </main>
            <p className="p-4 text-white bg-neutral-800">حقوق الملكية محفوظة</p>
        </Router>
    );
}

export default App;
