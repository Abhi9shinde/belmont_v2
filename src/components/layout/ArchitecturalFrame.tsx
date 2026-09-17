"use client";

export default function ArchitecturalFrame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
    >
      {/* MAIN FRAME */}
      <div className="absolute left-[calc(50%-680px)] top-8 bottom-8 w-px bg-white/[0.18]" />
      <div className="absolute right-[calc(50%-680px)] top-8 bottom-8 w-px bg-white/[0.18]" />
      <div className="absolute left-[calc(50%-660px)] top-0 bottom-0 w-px bg-white/[0.045]" />
      <div className="absolute right-[calc(50%-660px)] top-0 bottom-0 w-px bg-white/[0.045]" />
      <div className="absolute left-[calc(50%-680px)] right-[calc(50%-680px)] top-8 h-px bg-white/[0.16]" />
      <div className="absolute left-[calc(50%-680px)] right-[calc(50%-680px)] bottom-8 h-px bg-white/[0.12]" />

      {/* REGISTRATION CORNERS */}
      <div className="absolute left-[calc(50%-695px)] top-7 h-8 w-8">
        <div className="absolute left-0 top-1 h-px w-8 bg-white/[0.28]" />
        <div className="absolute left-3.5 -top-2.5 h-8 w-px bg-white/[0.28]" />
      </div>
      <div className="absolute right-[calc(50%-695px)] top-7 h-8 w-8">
        <div className="absolute right-0 top-1 h-px w-8 bg-white/[0.28]" />
        <div className="absolute right-3.5 -top-2.5 h-8 w-px bg-white/[0.28]" />
      </div>
      <div className="absolute bottom-7 left-[calc(50%-695px)] h-8 w-8">
        <div className="absolute bottom-1 left-0 h-px w-8 bg-white/[0.20]" />
        <div className="absolute -bottom-2.5 left-3.5 h-8 w-px bg-white/[0.20]" />
      </div>
      <div className="absolute bottom-7 right-[calc(50%-695px)] h-8 w-8">
        <div className="absolute bottom-1 right-0 h-px w-8 bg-white/[0.20]" />
        <div className="absolute -bottom-2.5 right-3.5 h-8 w-px bg-white/[0.20]" />
      </div>

      {/* LEFT TECHNICAL SYSTEM */}
      <div className="absolute left-[calc(50%-755px)] top-[47%]">
        <div className="mb-4 h-px w-14 bg-white/[0.25]" />
        <div className="space-y-4 font-mono text-[9px] tracking-[0.28em] text-white/[0.38]">
          <div>01</div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
        </div>
        {/* LEFT VERTICAL SCALE RULER */}
        <div className="absolute left-[calc(50%-680px)] top-8 bottom-8 w-6">
          {/* baseline running the full ruler height, flush on the frame's left line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/[0.14]" />

          {/* dense tick marks */}
          <svg
            className="absolute left-0 top-0 h-full w-6"
            preserveAspectRatio="none"
            viewBox="0 0 24 800"
          >
            {Array.from({ length: 81 }).map((_, i) => {
              const y = i * 10;
              const major = i % 5 === 0;
              return (
                <line
                  key={i}
                  x1={11}
                  x2={major ? 18 : 14}
                  y1={y}
                  y2={y}
                  stroke={`rgba(255,255,255,${major ? 0.22 : 0.1})`}
                  strokeWidth={major ? 0.6 : 0.4}
                />
              );
            })}
          </svg>

          {/* rotated scale label near the bottom */}
          <div className="absolute bottom-16 left-[7px] -rotate-90 origin-bottom-left whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.3em] text-white/[0.28]">
            Scale 1:100
          </div>
        </div>
      </div>

      {/* Left upper statement */}
      <div className="absolute left-[calc(50%-755px)] top-[15%] w-24">
        <p className="font-mono text-[8px] uppercase leading-[2] tracking-[0.28em] text-white/[0.38]">
          Building
          <br />
          Spaces
          <br />
          For A
          <br />
          Better
          <br />
          Tomorrow
        </p>
      </div>

      {/* Left bottom */}
      <div className="absolute bottom-[12%] left-[calc(50%-755px)]">
        <p className="font-mono text-[8px] uppercase tracking-[0.32em] text-white/[0.32]">
          ESTD.
        </p>
        <p className="mt-2 font-mono text-[10px] tracking-[0.28em] text-white/[0.45]">
          2020
        </p>
      </div>

      {/* RIGHT TECHNICAL SYSTEM */}
      <div className="absolute right-[calc(50%-755px)] top-[14%] w-28 text-right">
        <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/[0.38]">
          Pune · India
        </p>
        <p className="mt-2 font-mono text-[8px] tracking-[0.18em] text-white/[0.26]">
          18.5204° N
        </p>
        <p className="font-mono text-[8px] tracking-[0.18em] text-white/[0.26]">
          73.8567° E
        </p>
      </div>

      {/* ARCHITECTURAL ELEVATION / BLUEPRINT */}
      <div className="absolute right-[calc(50%-770px)] top-[25%] h-[390px] w-[250px] opacity-[0.34]">
        <svg
          viewBox="0 0 250 390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* MAIN BUILDING MASS */}
          <path
            d="
        M28 325
        V105
        H72
        V72
        H142
        V42
        H208
        V325
      "
            stroke="rgba(255,255,255,0.48)"
            strokeWidth="0.8"
          />

          {/* SECONDARY MASS */}
          <path
            d="M28 105H72V325H28"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="0.7"
          />

          {/* ROOF / TOP PARAPETS */}
          <path
            d="M72 72V58H142V42H208"
            stroke="rgba(255,255,255,0.38)"
            strokeWidth="0.7"
          />

          <path
            d="M142 42V30H208V42"
            stroke="rgba(255,255,255,0.24)"
            strokeWidth="0.6"
          />

          {/* FLOOR SLABS */}
          <g stroke="rgba(255,255,255,0.28)" strokeWidth="0.65">
            <path d="M28 135H208" />
            <path d="M28 168H208" />
            <path d="M28 201H208" />
            <path d="M28 234H208" />
            <path d="M28 267H208" />
            <path d="M28 300H208" />
          </g>

          {/* VERTICAL STRUCTURE */}
          <g stroke="rgba(255,255,255,0.22)" strokeWidth="0.6">
            <path d="M55 105V325" />
            <path d="M72 72V325" />
            <path d="M103 72V325" />
            <path d="M142 42V325" />
            <path d="M173 42V325" />
            <path d="M208 42V325" />
          </g>

          {/* LEFT WING WINDOWS */}
          <g stroke="rgba(255,255,255,0.30)" strokeWidth="0.6">
            <rect x="36" y="113" width="13" height="15" />
            <rect x="56" y="113" width="11" height="15" />

            <rect x="36" y="146" width="13" height="15" />
            <rect x="56" y="146" width="11" height="15" />

            <rect x="36" y="179" width="13" height="15" />
            <rect x="56" y="179" width="11" height="15" />

            <rect x="36" y="212" width="13" height="15" />
            <rect x="56" y="212" width="11" height="15" />

            <rect x="36" y="245" width="13" height="15" />
            <rect x="56" y="245" width="11" height="15" />

            <rect x="36" y="278" width="13" height="15" />
            <rect x="56" y="278" width="11" height="15" />
          </g>

          {/* CENTRAL BALCONIES */}
          <g stroke="rgba(255,255,255,0.38)" strokeWidth="0.7">
            <path d="M78 135H98V155H78Z" />
            <path d="M78 168H98V188H78Z" />
            <path d="M78 201H98V221H78Z" />
            <path d="M78 234H98V254H78Z" />
            <path d="M78 267H98V287H78Z" />
          </g>

          {/* CENTRAL WINDOWS */}
          <g stroke="rgba(255,255,255,0.26)" strokeWidth="0.55">
            <rect x="106" y="80" width="28" height="22" />
            <rect x="106" y="113" width="28" height="22" />
            <rect x="106" y="146" width="28" height="22" />
            <rect x="106" y="179" width="28" height="22" />
            <rect x="106" y="212" width="28" height="22" />
            <rect x="106" y="245" width="28" height="22" />
            <rect x="106" y="278" width="28" height="22" />
          </g>

          {/* RIGHT TOWER WINDOWS */}
          <g stroke="rgba(255,255,255,0.30)" strokeWidth="0.6">
            <rect x="151" y="55" width="17" height="20" />
            <rect x="179" y="55" width="17" height="20" />

            <rect x="151" y="85" width="17" height="20" />
            <rect x="179" y="85" width="17" height="20" />

            <rect x="151" y="118" width="17" height="20" />
            <rect x="179" y="118" width="17" height="20" />

            <rect x="151" y="151" width="17" height="20" />
            <rect x="179" y="151" width="17" height="20" />

            <rect x="151" y="184" width="17" height="20" />
            <rect x="179" y="184" width="17" height="20" />

            <rect x="151" y="217" width="17" height="20" />
            <rect x="179" y="217" width="17" height="20" />

            <rect x="151" y="250" width="17" height="20" />
            <rect x="179" y="250" width="17" height="20" />

            <rect x="151" y="283" width="17" height="20" />
            <rect x="179" y="283" width="17" height="20" />
          </g>

          {/* GROUND / SITE LINE */}
          <path
            d="M12 325H224"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="0.8"
          />

          <path
            d="M25 337H214M40 347H198"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.55"
          />

          {/* DIMENSION LINE */}
          <path
            d="M218 42V325"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.55"
          />

          <g stroke="rgba(255,255,255,0.30)" strokeWidth="0.55">
            <path d="M214 42H224" />
            <path d="M214 105H224" />
            <path d="M214 168H224" />
            <path d="M214 234H224" />
            <path d="M214 325H224" />
          </g>

          {/* EXTENSION LINES */}
          <path
            d="M18 42H5M18 325H5"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="0.55"
          />

          {/* SECTION MARK */}
          <circle
            cx="28"
            cy="365"
            r="7"
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="0.6"
          />

          <path
            d="M28 358V372M21 365H35"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.5"
          />

          {/* BASELINE */}
          <path
            d="M5 378H224"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="0.55"
          />
        </svg>
      </div>

      {/* Right measurements */}
      <div className="absolute right-[calc(50%-755px)] top-[38%]">
        <div className="space-y-8 font-mono text-[8px] tracking-[0.2em] text-white/[0.30]">
          <div className="flex items-center gap-2">
            <span className="h-px w-4 bg-white/[0.22]" />
            7200
          </div>
          <div className="flex items-center gap-2">
            <span className="h-px w-4 bg-white/[0.22]" />
            3600
          </div>
          <div className="flex items-center gap-2">
            <span className="h-px w-4 bg-white/[0.22]" />
            3600
          </div>
        </div>
      </div>

      {/* Right lower labels */}
      <div className="absolute bottom-[18%] right-[calc(50%-755px)] text-right">
        <div className="space-y-2 font-mono text-[8px] uppercase tracking-[0.32em] text-white/[0.34]">
          <p>Design</p>
          <p>Develop</p>
          <p>Deliver</p>
          <p>Reimagine</p>
        </div>
        <div className="mt-8 font-mono text-[8px] uppercase tracking-[0.25em] text-white/[0.25]">
          Scale 1:100
        </div>
      </div>

      {/* Right vertical label — mirrors the left "SCALE 1:100" */}
      <div className="absolute bottom-[30%] right-[calc(50%-770px)] rotate-90 origin-right font-mono text-[8px] tracking-[0.3em] text-white/[0.22]">
        SECTIONS
      </div>
    </div>
  );
}
