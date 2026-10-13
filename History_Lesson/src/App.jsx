import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { useRoute } from './components/router';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Lesson from './pages/Lesson';
import NotFound from './pages/NotFound';
import Maps from './pages/Maps';
import TimelinePage from './pages/TimelinePage';
import HistoricalFigures from './pages/HistoricalFigures';
import FigureDetail from './pages/FigureDetail';
import Sources from './pages/Sources';
import Dictionary from './pages/Dictionary';
import Compare from './pages/Compare';
import Tests from './pages/Tests';
import Exam from './pages/Exam';
import Saved from './pages/Saved';
import Mistakes from './pages/Mistakes';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Dashboard from './pages/Dashboard';
import HistoricalPeriods from './pages/HistoricalPeriods';
import './styles/index.css';

function RouteRenderer() {
  const { path, segments, query } = useRoute();
  if (path === '/' || path === '/home') return <Home />;
  if (path === '/courses') return <Courses />;
  if (path.startsWith('/course/')) return <CourseDetail params={{ id: segments[1] }} />;
  if (path.startsWith('/lesson/')) return <Lesson params={{ id: segments[1] }} />;
  if (path.startsWith('/figure/')) return <FigureDetail params={{ id: segments[1] }} />;
  if (path === '/maps') return <Maps />;
  if (path === '/timeline') return <TimelinePage />;
  if (path === '/figures') return <HistoricalFigures />;
  if (path === '/periods') return <HistoricalPeriods />;
  if (path === '/sources') return <Sources />;
  if (path === '/dictionary') return <Dictionary />;
  if (path === '/compare') return <Compare />;
  if (path === '/tests') return <Tests />;
  if (path === '/exam') return <Exam query={query} />;
  if (path === '/saved') return <Saved />;
  if (path === '/mistakes') return <Mistakes />;
  if (path === '/stats') return <Stats />;
  if (path === '/settings') return <Settings />;
  if (path === '/help') return <Help />;
  if (path === '/dashboard') return <Dashboard />;
  if (path === '/search') return <Courses />;
  return <NotFound />;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppProvider>
      <div className="app-shell">
        <Header onMenu={() => setMenuOpen((o) => !o)} />
        <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="main">
          <RouteRenderer />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
