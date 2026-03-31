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

// Animated scene instead of GIF
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
    title: "Hey... Himanshi!",
    msg: "Ye panda bahut der se tumhara wait kar raha hai 🐼\nAur main bhi... par panda zyada cute lagta hai toh usne start kiya 😅",
    scene: (
      <Scene>
        <motion.span
          className="text-4xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ⏰
        </motion.span>
        <motion.span
          className="text-3xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          🐼
        </motion.span>
        <span className="text-xs text-gray-400 font-mono">
          tumhara wait ho raha hai...
        </span>
      </Scene>
    ),
    btn: "Kya baat hai? 😒",
  },
  {
    panda: "cry",
    emoji: "😭",
    title: "Ek dukh bhari kahani...",
    msg: "Maine Google pe search kiya:\n'Duniya ki sabse cute ladki' 🔍\n\nResult mein tumhara naam nahi aaya 😤\nToh maine Google ko hi uninstall kar diya.\nUspe trust nahi 😌",
    scene: (
      <Scene>
        <span className="text-3xl">🔍</span>
        <motion.span
          className="text-2xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          😤
        </motion.span>
        <span className="text-xs text-gray-400 font-mono">
          Google = uninstalled 💀
        </span>
      </Scene>
    ),
    btn: "Haha pagal ho 😂",
  },
  {
    panda: "normal",
    emoji: "🤔",
    title: "Ek logical sawaal...",
    msg: "Agar main tumhe 'Good Morning' bhejta hoon\naur tum reply nahi karti...\n\nToh kya subah hoti hi nahi? 🌅\nScience confirm karo please 😐",
    scene: (
      <Scene>
        <span className="text-3xl">📱</span>
        <motion.span
          className="text-2xl"
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          💬
        </motion.span>
        <span className="text-xs text-gray-400 font-mono">
          reply... reply... reply... 😐
        </span>
      </Scene>
    ),
    btn: "Hoti hai �",
  },
  {
    panda: "shy",
    emoji: "🍕",
    title: "Business Proposal 📄",
    msg: "Main ek startup launch kar raha hoon —\n'Free Pizza For Life' 🍕\n\nInvestor requirement:\nSirf ek haan chahiye... tumse 🥺\n(Valuation: Mera dil 💀)",
    scene: (
      <Scene>
        <motion.span
          className="text-4xl"
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          🍕
        </motion.span>
        <span className="text-2xl">🤝</span>
        <span className="text-xs text-gray-400 font-mono">
          deal of the century 📄
        </span>
      </Scene>
    ),
    noBtn: true,
  },
  {
    panda: "cry",
    emoji: "🌧️",
    title: "Ek cinematic scene...",
    msg: "Tum ho. Main hoon. Baarish ho rahi hai. 🌧️\nMain bheeg raha hoon kyunki...\nmaine chhata isliye nahi liya tha\nki tum apna share karo 🥹\n\nPar tum bhi bheeg gayi 💀\nPlan fail. Sorry.",
    scene: (
      <Scene>
        <motion.div
          className="flex gap-3 text-3xl"
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          <span>🌧️</span>
          <span>🌧️</span>
          <span>🌧️</span>
        </motion.div>
        <span className="text-3xl">🙍‍♂️</span>
        <span className="text-xs text-gray-400 font-mono">plan fail 💀</span>
      </Scene>
    ),
    btn: "Idiot ho tum 😂🥺",
  },
  {
    panda: "love",
    emoji: "💌",
    title: "Himanshi... sun na 🥺",
    msg: "Ye panda roz raat ko ek star dekhta hai\naur sochta hai — kaash Sanjya bhi dekh rahi hoti 🌟\n\nTum meri life ki wo notification ho\njise main kabhi dismiss nahi karna chahta 🔔\n\nKya tum meri girlfriend banogi? 💍",
    scene: (
      <Scene>
        <motion.span
          className="text-4xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          💍
        </motion.span>
        <span className="text-3xl">🐼</span>
        <motion.span
          className="text-2xl"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          💕
        </motion.span>
        <span className="text-xs text-gray-400 font-mono">
          panda propose kar raha hai 🥺
        </span>
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
    <div className="relative flex items-start justify-center min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-200 to-red-100 text-center px-3 py-6 overflow-y-auto overflow-x-hidden">
      {yesClicked && <Confetti numberOfPieces={500} recycle={true} />}

      <AnimatePresence mode="wait">
        {!yesClicked ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -60, scale: 0.85 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="w-full max-w-sm bg-white/75 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-8"
          >
            <Panda mood={current.panda} />
            {current.scene}
            <div className="text-4xl mb-2">{current.emoji}</div>
            <h1 className="text-xl sm:text-2xl font-bold text-pink-600 mb-3">
              {current.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-700 mb-5 whitespace-pre-line leading-relaxed">
              {current.msg}
            </p>

            <div className="flex justify-center gap-2 mb-5">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${i === step ? "bg-pink-500 w-4" : "bg-pink-200 w-2"}`}
                />
              ))}
            </div>

            {current.finalStep || current.noBtn ? (
              <div className="flex flex-wrap justify-center gap-3 relative overflow-visible pb-24">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={current.finalStep ? () => setYesClicked(true) : next}
                  className="bg-gradient-to-r from-pink-500 to-red-400 text-white px-8 py-3 rounded-2xl text-base font-semibold shadow-lg hover:scale-110 transition"
                >
                  {current.finalStep ? "Haan ji 💖" : "Bilkul! 🍕😍"}
                </motion.button>
                <motion.button
                  onMouseEnter={moveNoButton}
                  onTouchStart={moveNoButton}
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gray-400 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow"
                >
                  {noLabel}
                </motion.button>
              </div>
            ) : (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:scale-110 transition"
              >
                {current.btn}
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-10"
          >
            <Panda mood="dance" />

            {/* Dance scene */}
            <motion.div className="mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 py-4 flex justify-center gap-3 text-4xl">
              <motion.span
                animate={{ y: [0, -10, 0], rotate: [0, -15, 15, 0] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
              >
                🐼
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                ❤️
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
              >
                🐼
              </motion.span>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-5xl my-3"
            >
              ❤️
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-3">
              I Love You, Himanshi 💕
            </h1>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Main jaanta tha tum haan bologe 😎
              <br />
              Ye panda bhi khush hai — dekho naach raha hai 🐼💃
              <br />
              <br />
              Tum meri sabse pyaari notification ho,
              <br />
              aur main tumhe kabhi mute nahi karunga 🔔💖
            </p>
            <p className="mt-5 text-pink-500 font-semibold text-base">
              Officially tumhara (aur is panda ka bhi) 😘🐼
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
