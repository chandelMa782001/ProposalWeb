"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const Panda = ({ mood = "normal" }) => {
  const captions = {
    normal: "( ´• ω •` )",
    shy: "( >//< )",
    cry: "( T﹏T )",
    love: "( ♡ω♡ )",
    dance: "ヽ(♡‿♡)ノ",
  };
  return (
    <motion.div
      className="flex flex-col items-center mb-3"
      animate={
        mood === "dance"
          ? { rotate: [0, -12, 12, -12, 12, 0] }
          : { y: [0, -8, 0] }
      }
      transition={{ repeat: Infinity, duration: mood === "dance" ? 0.5 : 2 }}
    >
      <span className="text-6xl">🐼</span>
      <span className="text-sm text-gray-500 mt-1 font-mono">
        {captions[mood]}
      </span>
    </motion.div>
  );
};

const Scene = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 shadow-inner w-full py-4 px-3 flex flex-col items-center justify-center gap-1"
  >
    {children}
  </motion.div>
);

const steps = [
  {
    panda: "shy",
    emoji: "👀",
    title: "Hey meri cutie 💕",
    msg: "Sach batao… tum itni cute ho ya main hi zyada dekh leta hoon? 😌\n\nWaise kabse wait kar raha hoon tumhara… thoda jaldi aa jaya karo na 🥺",
    scene: (
      <Scene>
        <span className="text-3xl">🐼</span>
        <span className="text-xs text-gray-400 font-mono">
          wait kar raha hu...
        </span>
      </Scene>
    ),
    btn: "Kya chahiye tumhe? 😒",
  },
  {
    panda: "cry",
    emoji: "😭",
    title: "Serious sawaal hai 😤",
    msg: "Tum itni cute kyun ho? 😭\n\nKisi ne permission di thi kya itna adorable hone ki? 😤\n\nAb main kya karu… pura din bas tumhari hi yaad aati rehti hai 💭",
    scene: (
      <Scene>
        <span className="text-3xl">😤</span>
      </Scene>
    ),
    btn: "Drama band karo 😂",
  },
  {
    panda: "normal",
    emoji: "🤔",
    title: "Ek confusion hai 🤨",
    msg: "Agar main tumhe message karu\nAur tum reply na karo…\n\nToh kya main aur zyada miss karne lagta hoon ya already max ho chuka hai? 😶",
    scene: (
      <Scene>
        <span className="text-3xl">💬</span>
      </Scene>
    ),
    btn: "Pagal ho tum 😂",
  },
  {
    panda: "shy",
    emoji: "🍕",
    title: "Ek offer hai 👀",
    msg: "Main tumhe lifetime free hugs 🤗 + unlimited attention 💕 dene ko ready hoon…\n\nBas ek condition hai —\nTum mujhe thoda sa pyaar de do 🥺",
    scene: (
      <Scene>
        <span className="text-3xl">🤗</span>
      </Scene>
    ),
    noBtn: true,
  },
  {
    panda: "cry",
    emoji: "🌧️",
    title: "Sach sach batao 🥺",
    msg: "Agar main tumhare saath baarish mein bheeg raha hoon 🌧️\n\nAur main thoda close aa jaun…\n\nToh tum door jaogi ya… aur paas aaogi? 😳",
    scene: (
      <Scene>
        <span className="text-3xl">🌧️</span>
      </Scene>
    ),
    btn: "Sharam nahi aati 😳😂",
  },
  {
    panda: "love",
    emoji: "💌",
    title: "Last question… dil se 💖",
    msg: "Itne saare sawaal ke baad…\nEk final sawaal hai 🥺\n\nKya tum meri banogi?\n\nMatlab officially… meri wali ❤️",
    scene: (
      <Scene>
        <span className="text-3xl">💍</span>
      </Scene>
    ),
    finalStep: true,
  },
];

const noLabels = [
  "Nahi 😈",
  "Pakka nahi? 🤨",
  "Panda ro dega 🐼😢",
  "Last chance... 😤",
  "Galti ho rahi hai 💀",
  "Seriously?? 😭",
  "Panda ne bola please 🥺",
  "Pakad nahi paogi 😎",
  "Haan bol do yaar 😩",
];

export default function ProposalPage() {
  const [step, setStep] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const next = () => setStep((s) => s + 1);

  const moveNoButton = () => {
    const range = window.innerWidth < 400 ? 60 : 90;
    setNoPosition({
      x: Math.random() * range * 2 - range,
      y: Math.random() * range * 2 - range,
    });
    setNoCount((c) => c + 1);
  };

  const noLabel = noLabels[Math.min(noCount, noLabels.length - 1)];
  const current = steps[step];

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 text-center px-3 py-6">
      {yesClicked && <Confetti numberOfPieces={500} recycle={true} />}

      <AnimatePresence mode="wait">
        {!yesClicked ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            className="w-full max-w-sm bg-white/80 rounded-3xl shadow-xl p-6"
          >
            <Panda mood={current.panda} />
            {current.scene}
            <div className="text-3xl mb-2">{current.emoji}</div>
            <h1 className="text-xl font-bold text-pink-600 mb-3">
              {current.title}
            </h1>
            <p className="text-gray-700 mb-5 whitespace-pre-line">
              {current.msg}
            </p>

            {current.finalStep || current.noBtn ? (
              <div className="flex gap-3 justify-center relative">
                <button
                  onClick={current.finalStep ? () => setYesClicked(true) : next}
                  className="bg-pink-500 text-white px-6 py-2 rounded-xl"
                >
                  {current.finalStep ? "Haan 💖" : "Yes 😍"}
                </button>

                <motion.button
                  onMouseEnter={moveNoButton}
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  className="bg-gray-400 text-white px-4 py-2 rounded-xl"
                >
                  {noLabel}
                </motion.button>
              </div>
            ) : (
              <button
                onClick={next}
                className="bg-pink-500 text-white px-6 py-2 rounded-xl"
              >
                {current.btn}
              </button>
            )}
          </motion.div>
        ) : (
          <div className="text-center bg-white p-8 rounded-3xl shadow-xl">
            <Panda mood="dance" />
            <h1 className="text-3xl font-bold text-pink-600">I Love You 💕</h1>
            <p className="mt-3 text-gray-700">
              Mujhe pata tha tum haan bologi 😎❤️
            </p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
