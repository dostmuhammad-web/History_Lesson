import { useState } from 'react';
import Icon from './Icon';
import ProgressBar from './ProgressBar';
import { useApp } from '../context/AppContext';
import { shuffle } from '../data/questions';

const TYPE_LABELS = {
  sana: 'Sana',
  shaxs: 'Shaxs',
  xronologiya: 'Xronologiya',
  sabab: 'Sabab-ogibat',
  xarita: 'Xarita',
  manba: 'Manba',
  atama: 'Atama',
  kop: 'Bir nechta javob',
  tf: 'To‘g‘ri / noto‘g‘ri',
  tahlil: 'Tahlil',
};

function normalizeResult(selected, expected) {
  const a = (Array.isArray(expected) ? expected : [expected]).slice().sort();
  const b = selected.slice().sort();
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

export default function Quiz({ questions, title = 'Test', onFinish, showFeedback = true }) {
  const { recordMistake, recordQuiz } = useApp();
  const [session, setSession] = useState(() => shuffle(questions));
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);
  const [scores, setScores] = useState([]);
  const [done, setDone] = useState(false);

  const q = session[index];
  const total = session.length;
  const isKop = q && q.type === 'kop';

  const toggle = (i) => {
    if (!q || checked) return;
    if (isKop) {
      setSelected((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
    } else {
      setSelected([i]);
    }
  };

  const check = () => {
    if (!q || checked || selected.length === 0) return;
    const correct = normalizeResult(selected, q.answer);
    setScores((s) => [...s, correct ? 1 : 0]);
    if (!correct) recordMistake(q.id, false);
    setChecked(true);
  };

  const next = () => {
    if (index + 1 >= total) {
      const finalScores = scores;
      const correctCount = finalScores.filter(Boolean).length;
      recordQuiz({ title, total, correct: correctCount });
      if (onFinish) onFinish({ total, correct: correctCount });
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected([]);
    setChecked(false);
  };

  const restart = () => {
    setSession(shuffle(questions));
    setIndex(0);
    setScores([]);
    setSelected([]);
    setChecked(false);
    setDone(false);
  };

  const correctSoFar = scores.filter(Boolean).length;

  if (done || !q) {
    const totalAsked = Math.max(total, 1);
    const pct = Math.round((correctSoFar / totalAsked) * 100);
    let msg = 'Zo‘r natija! 🏆';
    if (pct < 40) msg = 'Yana mashq qiling';
    else if (pct < 70) msg = 'Yaxshi, davom eting';
    else if (pct < 90) msg = 'A’lo natija!';
    return (
      <div className="quiz-result card">
        <div className="quiz-result-icon">{pct >= 70 ? '🏆' : '📚'}</div>
        <h3>{msg}</h3>
        <p>To‘g‘ri javoblar: <b>{correctSoFar}</b> / {totalAsked} ({pct}%)</p>
        <ProgressBar percent={pct} height={12} showLabel />
        <button className="btn btn-primary" onClick={restart}>Qayta boshlash</button>
      </div>
    );
  }

  const expected = Array.isArray(q.answer) ? q.answer : [q.answer];

  return (
    <div className="quiz card">
      <div className="quiz-head">
        <span className="chip chip-close"><Icon name="quiz" size={13} /> {title}</span>
        <span className="quiz-count">{index + 1} / {total}</span>
      </div>
      <ProgressBar percent={(index / total) * 100} height={6} />
      <div className="quiz-q">
        <span className="chip chip-type">{TYPE_LABELS[q.type] || q.type}</span>
        <p className="quiz-question">{q.q}</p>
      </div>
      <div className="quiz-options">
        {q.options.map((opt, i) => {
          const isSel = selected.includes(i);
          const isRight = expected.includes(i);
          let cls = 'quiz-opt';
          if (!checked) {
            if (isSel) cls += ' selected';
          } else if (isRight) {
            cls += ' right';
          } else if (isSel) {
            cls += ' wrong';
          }
          return (
            <button key={i} className={cls} disabled={checked} onClick={() => toggle(i)}>
              <span className="quiz-opt-key">{String.fromCharCode(65 + i)}</span>
              <span className="quiz-opt-text">{opt}</span>
              {checked && isRight && <Icon name="check" size={16} className="quiz-opt-mark" />}
              {checked && isSel && !isRight && <Icon name="x" size={16} className="quiz-opt-mark" />}
            </button>
          );
        })}
      </div>
      {checked && showFeedback && (
        <div className={`quiz-feedback ${isKop ? 'info' : normalizeResult(selected, q.answer) ? 'ok' : 'bad'}`}>
          <b>{normalizeResult(selected, q.answer) ? 'To‘g‘ri! ' : 'Noto‘g‘ri. '}</b>
          {q.explanation}
        </div>
      )}
      <div className="quiz-actions">
        {!checked ? (
          <button className="btn btn-primary" disabled={selected.length === 0} onClick={check}>
            Tekshirish <Icon name="check" size={16} />
          </button>
        ) : (
          <button className="btn btn-primary" onClick={next}>
            {index + 1 >= total ? 'Yakunlash' : 'Keyingi savol'} <Icon name="chevronR" size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export { TYPE_LABELS };