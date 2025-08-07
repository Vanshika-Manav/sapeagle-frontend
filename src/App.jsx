import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BillUpload from "./pages/BillUpload";
import ViewBills from "./pages/ViewBills";
import GenerateReport from "./pages/GenerateReport";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import ExportReport from "./pages/ExportReport";
// import Contact from "./pages/Contact";
import ContactUs from "./components/ContactUs";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bill-upload" element={<BillUpload />} />
            <Route path="/view-bills" element={<ViewBills />} />
            <Route path="/generate-report" element={<GenerateReport />} />
            <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
            <Route path="/export-report" element={<ExportReport />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

