import "./App.css";
import { Form } from "./component/Form";
import logo from "./assets/images/logo.svg";

function App() {
  const requirements = [
    {
      condition: "Callsign",
      initial: "Pending",
      error: "Too short",
      correct: "ok",
      success: "locked",
    },
    {
      condition: "Email",
      initial: "Pending",
      error: "Malformed",
      correct: "ok",
      success: "locked",
    },
    {
      condition: "Password",
      initial: "Pending",
      error: "Too short",
      correct: "ok",
      success: "locked",
    },
    {
      condition: "Confirm",
      initial: "Pending",
      error: "Mismatch",
      correct: "ok",
      success: "locked",
    },
    {
      condition: "Terms",
      initial: "Required",
      error: "Required",
      correct: "ok",
      success: "locked",
    },
  ];

  return (
    <section className="max-w-full min-h-screen relative bg-neutral-950 grid place-items-center">
      <section className="absolute right-0 bg-[url('/images/pattern-backdrop.svg')] bg-no-repeat bg-right" />

      {/* grid */}
      <section className="grid place-items-center grid-cols-2 max-w-4/5 gap-16">
        {/* Left */}
        <article className="text-white">
          <div className="flex justify-between">
            <img src={logo} alt="neoncore logo" />
            <span className="block md:hidden text-neutral-300 uppercase font-jetbrains tracking-wider">
              0 / 5 ready
            </span>
          </div>
          <h1 className="text-7xl font-bold font-orbitron">
            <span className="text-lime-500">// </span>Join the nexus
          </h1>
          <p className="text-xs text-neutral-300 font-orbitron tracking-[4px] uppercase">
            Initialize your NEONCORE identity
          </p>
          <hr className="border-neutral-700" />

          <div className="flex  justify-between text-neutral-300 uppercase font-jetbrains tracking-wider">
            <div className="flex flex-col">
              {/* Operator ID readout (on tablet and mobile it becomes a one-line strip: Operator ID + callsign) */}
              <span>Operator ID</span>
              {/* Dynamic: ready count, then "Provisioned" after success */}
              {/* Dynamic: "Unassigned" until the callsign is valid, then the callsign */}
              <span className="text-neutral-300 font-orbitron">Unassigned</span>
            </div>
            <span>0/ 5 ready</span>
          </div>

          <div className="w-full uppercase font-jetbrains">
            {requirements.map((c) => (
              <div className="flex gap-1 justify-between items-center text-neutral-300">
                <span>{c.condition}</span>
                <div className="flex-1" />
                <span>{c.initial}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Right */}
        <article className="flex justify-center items-center ">
          <Form />
        </article>
      </section>
    </section>
  );
}

export default App;
