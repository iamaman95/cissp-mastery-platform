import type { Question } from '../data/types';

interface Props {
  question: Question;
  index: number;
  selected?: number;
  onSelect?: (optionIndex: number) => void;
  revealAnswer?: boolean;
}

const letters = ['A', 'B', 'C', 'D'];

export default function QuestionCard({ question, index, selected, onSelect, revealAnswer }: Props) {
  return (
    <div className="border border-slate-200 rounded-lg p-4 bg-white">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-xs font-semibold text-slate-400">Q{index + 1}</span>
        {question.qualifier !== 'NONE' && (
          <span className="text-xs px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
            {question.qualifier}
          </span>
        )}
      </div>
      <p className="text-slate-900 font-medium mb-3 whitespace-pre-line">{question.stem}</p>
      <div className="space-y-2">
        {question.options.map((opt, i) => {
          const isSelected = selected === i;
          let cls = 'border-slate-200 hover:border-slate-400';
          if (revealAnswer) {
            if (opt.correct) cls = 'border-emerald-400 bg-emerald-50';
            else if (isSelected && !opt.correct) cls = 'border-rose-400 bg-rose-50';
          } else if (isSelected) {
            cls = 'border-slate-900 bg-slate-50';
          }
          return (
            <button
              key={i}
              type="button"
              disabled={revealAnswer}
              onClick={() => onSelect?.(i)}
              className={`w-full text-left border rounded-md px-3 py-2 text-sm transition-colors ${cls}`}
            >
              <span className="font-semibold mr-2">{letters[i]}.</span>
              {opt.text}
              {revealAnswer && (
                <div className="mt-1 text-xs text-slate-600 font-normal">
                  {opt.correct ? '✓ Correct — ' : isSelected ? '✗ Your answer — ' : ''}
                  {opt.rationale}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
