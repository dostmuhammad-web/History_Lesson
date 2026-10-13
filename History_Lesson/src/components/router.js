import { useEffect, useState } from 'react';

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '') || '/';
  const [pathPart, queryPart] = raw.split('?');
  const segments = pathPart.split('/').filter(Boolean);
  const query = {};
  if (queryPart) {
    queryPart.split('&').forEach((pair) => {
      const idx = pair.indexOf('=');
      if (idx > -1) query[decodeURIComponent(pair.slice(0, idx))] = decodeURIComponent(pair.slice(idx + 1));
    });
  }
  return { path: `/${segments.join('/')}`, raw, segments, query };
}

export const routes = {
  home: '/',
  courses: '/courses',
  course: '/course',
  lesson: '/lesson',
  periods: '/periods',
  maps: '/maps',
  timeline: '/timeline',
  figures: '/figures',
  figure: '/figure',
  sources: '/sources',
  tests: '/tests',
  exam: '/exam',
  dictionary: '/dictionary',
  compare: '/compare',
  dashboard: '/dashboard',
  saved: '/saved',
  mistakes: '/mistakes',
  stats: '/stats',
  settings: '/settings',
  help: '/help',
};

export function navigate(to) {
  const target = typeof to === 'string' ? to : to.path;
  if (window.location.hash === `#${target}`) return;
  window.location.hash = target;
}

export function useRoute() {
  const [location, setLocation] = useState(parseHash());
  useEffect(() => {
    const onChange = () => setLocation(parseHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return location;
}