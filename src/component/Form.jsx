import { useState } from "react";
import iconEye from "../assets/images/icon-eye.svg";
import iconEyeOff from "../assets/images/icon-eye-off.svg";

const fields = [
  {
    id: "callsign",
    label: "CALLSIGN",
    type: "text",
    placeholder: "e.g. Vortex_07",
    hint: "3–20 characters: letters, numbers, _ or -",
  },
  {
    id: "email",
    label: "EMAIL",
    type: "email",
    placeholder: "you@example.com",
  },
  {
    id: "password",
    label: "PASSWORD",
    type: "password",
  },
  {
    id: "confirmPassword",
    label: "CONFIRM PASSWORD",
    type: "password",
  },
];

export const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <section className="relative w-full  border border-neutral-700 bg-neutral-900 px-6 py-8 text-neutral-100 sm:px-[39px] sm:py-[39px]">
      {/* Lime corner accents */}
      <span
        aria-hidden="true"
        className="absolute -left-px -top-px h-[24px] w-[24px] border-l-2 border-t-2 border-lime-500"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-px -right-px h-[24px] w-[24px] border-b-2 border-r-2 border-lime-500"
      />

      {/* Header */}
      <header className="mb-6 flex items-center justify-between gap-3 border-b border-neutral-800 pb-4 font-mono text-[11px] tracking-[0.2em] sm:mb-[27px]">
        <span className="text-neutral-100">NEW OPERATOR</span>

        <span className="text-right text-neutral-500">ALL FIELDS REQUIRED</span>
      </header>

      <form className="space-y-5 sm:space-y-[25px]">
        {fields.map((field) => {
          const isPassword = field.id === "password";
          const isConfirm = field.id === "confirmPassword";
          const hasVisibilityToggle = isPassword || isConfirm;

          const visible = isPassword ? showPassword : showConfirm;

          const inputType = hasVisibilityToggle
            ? visible
              ? "text"
              : "password"
            : field.type;

          return (
            <div key={field.id} className="min-w-0">
              <label
                htmlFor={field.id}
                className="mb-[9px] flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-neutral-400"
              >
                <span className="text-lime-500">&gt;</span>
                {field.label}
              </label>

              <div className="relative">
                <input
                  id={field.id}
                  name={field.id}
                  type={inputType}
                  placeholder={field.placeholder ?? ""}
                  autoComplete={
                    field.id === "callsign"
                      ? "username"
                      : field.id === "email"
                        ? "email"
                        : field.id === "password"
                          ? "new-password"
                          : "new-password"
                  }
                  required
                  className="h-[48px] w-full border border-neutral-600 bg-navy-950 px-4 font-mono text-[14px] text-neutral-100 outline-none transition-colors placeholder:text-neutral-500 focus:border-lime-500 focus:ring-1 focus:ring-lime-alpha-40"
                />

                {hasVisibilityToggle && (
                  <button
                    type="button"
                    onClick={() =>
                      isPassword
                        ? setShowPassword(!showPassword)
                        : setShowConfirm(!showConfirm)
                    }
                    aria-label={visible ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 transition-colors hover:text-lime-500"
                  >
                    {!visible ? (
                      <img src={iconEye} alt="icon eye" />
                    ) : (
                      <img src={iconEyeOff} alt="icon eye off" />
                    )}
                  </button>
                )}
              </div>

              {field.hint && (
                <p className="mt-[9px] font-mono text-[11px] leading-relaxed text-neutral-500">
                  {field.hint}
                </p>
              )}

              {isPassword && (
                <div>
                  <div className="mt-[8px] flex h-[4px] gap-[4px]">
                    {[1, 2, 3, 4].map((segment) => (
                      <span key={segment} className="flex-1 bg-neutral-700" />
                    ))}
                  </div>

                  <p className="mt-[9px] font-mono text-[11px] text-neutral-500">
                    At least 8 characters
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Terms and privacy */}
        <label className="flex cursor-pointer items-center  gap-3 pt-0.5 font-mono text-[12px] leading-6 text-neutral-300">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(event) => setAcceptedTerms(event.target.checked)}
            required
            className="mt-[3px] size-[24px] shrink-0 cursor-pointer appearance-none border border-neutral-600 bg-navy-950 checked:border-lime-500 checked:bg-lime-500 checked:after:block checked:after:text-center checked:after:text-navy-950 checked:after:content-['✓'] focus-visible:outline-1 focus-visible:outline-lime-500"
          />

          <span>
            I accept the{" "}
            <a
              href="/terms"
              className="text-lime-500 underline decoration-lime-alpha-40 underline-offset-4 hover:text-lime-700"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="text-lime-500 underline decoration-lime-alpha-40 underline-offset-4 hover:text-lime-700"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="flex h-[49px] w-full items-center justify-center bg-lime-500 px-4 font-mono text-[13px] font-bold tracking-[0.2em] text-navy-950 transition-colors hover:bg-lime-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500 active:translate-y-px"
        >
          INITIALIZE ACCOUNT
        </button>

        {/* Login link */}
        <p className="pt-1 text-center font-mono text-[12px] text-neutral-400">
          Already an operator?{" "}
          <a
            href="/login"
            className="font-semibold text-lime-500 underline decoration-lime-alpha-40 underline-offset-4 hover:text-lime-700"
          >
            Log in
          </a>
        </p>
      </form>
    </section>
  );
};
