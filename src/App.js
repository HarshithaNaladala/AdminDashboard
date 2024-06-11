import { 
  HashRouter as Router,
  Route, 
  Routes, 
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import HomePage from "./Pages/Home/HomePage";
import Forms from "./Components/Forms/Forms";
import Tables from "./Components/Tables/Tables";
import LoginPage from "./Pages/Login/LoginPage";

import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/forms" element={<Forms />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/auth" element={<LoginPage />} />
          </Routes>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </Router>
    </QueryClientProvider>
  );
}