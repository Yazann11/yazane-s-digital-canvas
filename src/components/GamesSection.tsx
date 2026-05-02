import { useEffect, useMemo, useState } from "react";
import { Gamepad2, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/* ---------- Tic Tac Toe ---------- */
type Cell = "X" | "O" | null;

const winningLines = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const calcWinner = (b: Cell[]): Cell | "draw" | null => {
  for (const [a, c, d] of winningLines) {
    if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a];
  }
  return b.every(Boolean) ? "draw" : null;
};

const TicTacToe = () => {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);
  const winner = useMemo(() => calcWinner(board), [board]);

  const handleClick = (i: number) => {
    if (board[i] || winner) return;
    const next = board.slice();
    next[i] = xNext ? "X" : "O";
    setBoard(next);
    setXNext(!xNext);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setXNext(true);
  };

  const status =
    winner === "draw"
      ? "It's a draw!"
      : winner
      ? `Winner: ${winner}`
      : `Next: ${xNext ? "X" : "O"}`;

  return (
    <Card className="p-6 flex flex-col items-center gap-4 bg-card/60 backdrop-blur-sm border-primary/20">
      <h3 className="font-heading text-xl font-bold">Tic Tac Toe</h3>
      <p className="text-sm text-muted-foreground">{status}</p>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-16 h-16 md:w-20 md:h-20 rounded-md bg-secondary hover:bg-accent transition-colors text-3xl font-bold text-primary flex items-center justify-center"
          >
            {cell}
          </button>
        ))}
      </div>
      <Button onClick={reset} variant="outline" size="sm" className="gap-2">
        <RotateCcw size={14} /> Reset
      </Button>
    </Card>
  );
};

/* ---------- Memory Match ---------- */
const EMOJIS = ["🚀", "💻", "🎮", "⚡", "🌟", "🔥", "🎯", "🧩"];

type MemCard = { id: number; value: string; flipped: boolean; matched: boolean };

const buildDeck = (): MemCard[] => {
  const pairs = [...EMOJIS, ...EMOJIS]
    .map((value, i) => ({ id: i, value, flipped: false, matched: false }))
    .sort(() => Math.random() - 0.5);
  return pairs;
};

const MemoryGame = () => {
  const [deck, setDeck] = useState<MemCard[]>(buildDeck);
  const [picks, setPicks] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (picks.length !== 2) return;
    const [a, b] = picks;
    setMoves((m) => m + 1);
    const timeout = setTimeout(() => {
      setDeck((d) =>
        d.map((c) => {
          if (c.id !== a && c.id !== b) return c;
          if (d[a].value === d[b].value) return { ...c, matched: true };
          return { ...c, flipped: false };
        }),
      );
      setPicks([]);
    }, 700);
    return () => clearTimeout(timeout);
  }, [picks]);

  const flip = (id: number) => {
    if (picks.length === 2) return;
    setDeck((d) =>
      d.map((c) => (c.id === id && !c.flipped && !c.matched ? { ...c, flipped: true } : c)),
    );
    setPicks((p) => (p.includes(id) ? p : [...p, id]));
  };

  const won = deck.every((c) => c.matched);

  const reset = () => {
    setDeck(buildDeck());
    setPicks([]);
    setMoves(0);
  };

  return (
    <Card className="p-6 flex flex-col items-center gap-4 bg-card/60 backdrop-blur-sm border-primary/20">
      <h3 className="font-heading text-xl font-bold">Memory Match</h3>
      <p className="text-sm text-muted-foreground">
        {won ? `🎉 Won in ${moves} moves!` : `Moves: ${moves}`}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {deck.map((card) => {
          const show = card.flipped || card.matched;
          return (
            <button
              key={card.id}
              onClick={() => flip(card.id)}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-md text-2xl flex items-center justify-center transition-all ${
                show
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              } ${card.matched ? "opacity-60" : ""}`}
            >
              {show ? card.value : "?"}
            </button>
          );
        })}
      </div>
      <Button onClick={reset} variant="outline" size="sm" className="gap-2">
        <RotateCcw size={14} /> New Game
      </Button>
    </Card>
  );
};

/* ---------- Click the Target ---------- */
const ClickGame = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const [running, setRunning] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!running) return;
    if (time <= 0) {
      setRunning(false);
      return;
    }
    const t = setTimeout(() => setTime((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [running, time]);

  const move = () => {
    setPos({ x: Math.random() * 80 + 10, y: Math.random() * 70 + 15 });
  };

  const start = () => {
    setScore(0);
    setTime(15);
    setRunning(true);
    move();
  };

  const hit = () => {
    if (!running) return;
    setScore((s) => s + 1);
    move();
  };

  return (
    <Card className="p-6 flex flex-col items-center gap-4 bg-card/60 backdrop-blur-sm border-primary/20">
      <h3 className="font-heading text-xl font-bold">Click the Target</h3>
      <p className="text-sm text-muted-foreground">
        Score: {score} • Time: {time}s
      </p>
      <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-lg bg-secondary overflow-hidden border border-border">
        {running ? (
          <button
            onClick={hit}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.7)] hover:scale-110 transition-transform"
            aria-label="target"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm text-center px-4">
            {score > 0 ? `Final score: ${score} 🎯` : "Press Start to play"}
          </div>
        )}
      </div>
      <Button onClick={start} size="sm" className="gap-2">
        <Gamepad2 size={14} /> {score > 0 || time === 0 ? "Play Again" : "Start"}
      </Button>
    </Card>
  );
};

/* ---------- Section ---------- */
const GamesSection = () => (
  <section id="games" className="section-padding section-alt">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-5xl font-extrabold title-gradient title-accent-bar">
          Mini Games
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Take a break and play a quick game before you leave!
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <TicTacToe />
        <MemoryGame />
        <ClickGame />
      </div>
    </div>
  </section>
);

export default GamesSection;
