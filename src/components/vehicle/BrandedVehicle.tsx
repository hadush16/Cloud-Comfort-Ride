import React from 'react';

interface BrandedVehicleProps {
  className?: string;
  showCaption?: boolean;
}

export const BrandedVehicle: React.FC<BrandedVehicleProps> = ({ 
  className = '',
  showCaption = true 
}) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-[14px] border-4 border-white bg-[#dce5df] shadow-dt-photo ${className}`}>
      {/* High-Resolution Base Vehicle Image */}
      <img
        src="/cloud-medical-van.jpg"
        alt="Cloud Comfort Ride's professionally branded passenger transit van parked outside a Seattle medical center"
        className="block w-full h-auto object-cover select-none"
        loading="eager"
      />

      {/* ========================================================================= */}
      {/* REALISTIC HIGH-FIDELITY VECTOR COMPANY WRAP OVERLAY ON VAN SIDE PANEL */}
      {/* ========================================================================= */}
      <div 
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        {/* Responsive position container mapped onto the van's smooth side body */}
        <div 
          className="absolute"
          style={{
            top: '47.5%',
            left: '52.5%',
            width: '28%',
            transform: 'rotate(-0.8deg) skewY(-0.5deg)',
            transformOrigin: 'left center'
          }}
        >
          {/* Company Wrap Graphic */}
          <div className="flex flex-col items-start drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
            {/* Upper Badge & Arc */}
            <div className="w-full flex items-center justify-between mb-0.5">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#061f46] text-[#f3bf28] flex items-center justify-center text-[7px] sm:text-[9px] font-black border border-[#f3bf28]">
                  C✦
                </span>
                <span className="text-[6px] sm:text-[8px] md:text-[9px] font-black tracking-wider uppercase text-[#061f46]">
                  Cloud Comfort
                </span>
              </div>
              
              {/* Blue Wheelchair ADA Symbol */}
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#123e77] text-white flex items-center justify-center text-[7px] sm:text-[9px]">
                ♿
              </div>
            </div>

            {/* Dynamic Road / Wave Swoosh (Navy and Gold matching Dream Transit) */}
            <div className="w-full relative py-0.5 sm:py-1">
              <svg 
                viewBox="0 0 240 38" 
                className="w-full h-auto overflow-visible"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Gold accent swoosh */}
                <path 
                  d="M0 24 C50 14, 120 16, 240 36 L240 38 L0 38 Z" 
                  fill="#f3bf28" 
                  opacity="0.9"
                />
                {/* Deep Navy curved road line */}
                <path 
                  d="M0 16 C60 2, 140 6, 240 30" 
                  stroke="#061f46" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                />
                {/* Dashed white center road lane line */}
                <path 
                  d="M10 16 C65 3, 140 7, 230 29" 
                  stroke="#ffffff" 
                  strokeWidth="1.5" 
                  strokeDasharray="8 6" 
                />
              </svg>
            </div>

            {/* Exact Company Name - Perfectly Spelled & High Contrast */}
            <div className="mt-0.5 sm:mt-1 space-y-0 text-left">
              <div className="font-heading font-extrabold text-[9px] sm:text-[13px] md:text-[15px] lg:text-[17px] leading-tight text-[#061f46] tracking-tight">
                Cloud Medical
              </div>
              <div className="font-heading font-black text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] leading-none text-[#bd8b09] tracking-tight">
                TRANSPORTATION
              </div>
              <div className="text-[5px] sm:text-[7px] md:text-[8px] font-bold text-[#65758b] tracking-wider uppercase pt-0.5 sm:pt-1">
                Safe • Reliable • Caring Transit
              </div>
            </div>

            {/* Transit Feature Icons Row */}
            <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 pt-0.5 sm:pt-1 border-t border-slate-300/80 w-full">
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#061f46] text-[#f3bf28] flex items-center justify-center text-[7px] sm:text-[9px] font-bold">
                ✚
              </span>
              <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#061f46] text-[#f3bf28] flex items-center justify-center text-[6px] sm:text-[8px] font-bold">
                ♡
              </span>
              <span className="text-[5px] sm:text-[7px] font-semibold text-[#122747]">
                (206) 327-4411
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Dream Transit Style Floating Caption at bottom */}
      {showCaption && (
        <figcaption className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 bg-white/95 backdrop-blur-md rounded-lg shadow-dt-note border border-slate-100 z-10">
          <div className="w-8 h-8 rounded-full bg-[#061f46] text-[#f3bf28] flex items-center justify-center font-heading font-extrabold text-sm shrink-0 border border-[#f3bf28]">
            C✦
          </div>
          <div className="flex flex-col leading-tight">
            <strong className="text-xs sm:text-sm font-heading font-bold text-[#061f46]">
              Cloud Comfort Ride
            </strong>
            <small className="text-[10px] sm:text-[11px] text-[#65758b]">
              Dedicated Seattle Passenger Transit Fleet
            </small>
          </div>
        </figcaption>
      )}
    </div>
  );
};
