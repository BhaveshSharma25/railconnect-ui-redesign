# RailConnect — Dark Navy Design System (v2)

This replaces the earlier mint/cream system. Same font setup (Fraunces +
Inter) still applies — only the color palette and surface treatment change.

## Tokens

| Token | Hex | Use |
|---|---|---|
| bg | #0B0F17 | page background |
| surface | #161B26 | cards, panels |
| surface-2 | #1D2432 | inputs, nested surfaces inside cards |
| border | rgba(255,255,255,0.08) | card/input borders |
| text | #F3F4F6 | primary text |
| text-muted | #8B93A7 | secondary text |
| text-faint | #5B6274 | tertiary/placeholder text |
| blue | #3E5C99 | primary solid CTA (Search Trains, View Details) |
| blue-hover | #34508A | hover state |
| green gradient | #34D399 -> #10B981 | gradient CTA (Continue Booking, Pay Securely) |
| price | #34D399 | fare/price text |
| seat-blue | #5B7FA6 | seat map, available type A |
| seat-terracotta | #C9714F | seat map, available type B |
| seat-unavailable | #2A303D | booked/disabled seat |

## Component patterns

- Page bg: bg-[#0B0F17] text-[#F3F4F6]
- Card: bg-[#161B26] border border-white/8 rounded-3xl
- Nested input surface: bg-[#1D2432] border border-white/10 rounded-xl text-white placeholder-white/30 focus:ring-2 focus:ring-emerald-400/50 outline-none
- Navbar: bg-[#0B0F17]/95 border-b border-white/5 backdrop-blur
- Primary CTA (gradient): bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white font-medium
- Secondary CTA (solid blue): bg-[#3E5C99] hover:bg-[#34508A] text-white font-medium
- Pill badge: bg-white/10 border border-white/10 text-white/80 rounded-full text-sm
- Section heading: font-serif text-3xl md:text-4xl font-semibold text-[#F3F4F6]

## Signature element: Sparkle

The reference images repeat a small four-point sparkle glyph near the
bottom-right of hero sections and key cards (Home, Booking Summary, Seat
Selection, Payment). Sparkle.jsx implements this once, reused everywhere:

    import Sparkle from "../ui/Sparkle";
    ...
    <Sparkle className="w-6 h-6 text-white/70 absolute bottom-6 right-6" />

Put Sparkle.jsx in client/src/components/ui/Sparkle.jsx.

## Note on the reference screenshots

Some of the reference images contain garbled placeholder copy (mockup
filler text, typos like "Pass enger Details" / "Rajdhrbni Express", nonsense
footer text). These are treated as layout/style references only -- the
actual copy in the converted files uses your app's real, correct text.
