import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Lock, Sparkles } from 'lucide-react';
import { ArchDivider } from '../components/ArchDivider';
import confetti from 'canvas-confetti';
import { trackPixelEvent, trackPixelCustom, generateEventId } from '../utils/pixel';

export const UpsellPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bump1, bump2, name, email, phone, items } = location.state || {};
  
  const [isProcessing, setIsProcessing] = useState(false);
  // ── PRICING (LIVE) ──
  const upsellPrice = 397;

  // Generate event IDs for CAPI deduplication
  const [upsellPurchaseEventId] = useState(() => generateEventId());

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPixelCustom('ViewUpsell', { currency: 'INR', value: upsellPrice });
    
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#dfab43', '#fcd34d', '#22c55e', '#ffffff'],
      disableForReducedMotion: true,
      gravity: 0.8,
      scalar: 0.8
    });
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if ((window as any).Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleUpsellPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailToUse = email || "test@example.com";
    const nameToUse = name || "Test User";

    setIsProcessing(true);

    try {
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert("Razorpay SDK failed to load. Are you online?");
        setIsProcessing(false);
        return;
      }

      const API_BASE = import.meta.env.VITE_API_URL || "";
      const orderRes = await fetch(`${API_BASE}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: upsellPrice, event_id: upsellPurchaseEventId }),
      });
      const orderData = await orderRes.json();

      if (orderData.error) {
        alert(orderData.error);
        setIsProcessing(false);
        return;
      }

      const options = {
        key: orderData.key_id,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Mini Wellness",
        description: "The Fussy Eater Fix Bundle (Upsell)",
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            const upsellItems = [
              "The Fussy Eater Fix — 7-Day Reset System",
              "Bonus 1: 50 Sneaky Nutrition Hacks for Indian Moms",
              "Bonus 2: Lunchbox Presentation Magic — The Visual Tricks Guide",
              "Bonus 3: 7-Day Fussy Eater Progress Tracker"
            ];

            const API_BASE = import.meta.env.VITE_API_URL || "";
            trackPixelEvent('Purchase', { currency: 'INR', value: upsellPrice }, upsellPurchaseEventId);

            const verifyRes = await fetch(`${API_BASE}/api/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                email: emailToUse,
                name: nameToUse,
                phone: phone,
                items: upsellItems,
                bump1, 
                bump2,
                isUpsell: true,
                event_id: upsellPurchaseEventId,
                amount: upsellPrice
              })
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              navigate("/thank-you", { state: { bump1, bump2, upsell1: true } });
            } else {
              alert("Payment verification failed. Please contact support.");
              navigate("/thank-you", { state: { bump1, bump2, upsell1: false } });
            }
          } catch (verifyError) {
            console.error("Verification error:", verifyError);
            alert("Payment successful but verification failed.");
            navigate("/thank-you", { state: { bump1, bump2, upsell1: true } });
          }
        },
        prefill: { name: nameToUse, email: emailToUse },
        theme: { color: "#dfab43" },
        modal: { ondismiss: function () { setIsProcessing(false); } },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong with the payment.");
      setIsProcessing(false);
    }
  };

  const handleSkip = () => {
    navigate("/thank-you", { state: { bump1, bump2, upsell1: false } });
  };

  const valueItems = [
    {
      num: "1",
      title: "The Fussy Eater Fix — 7-Day Reset System",
      price: "₹999",
      desc: "7-day step-by-step system that turns your fussy eater into a willing eater — without fights, bribes, or tears. Backed by child psychology.",
      img: "/images/upsell-main.webp"
    },
    {
      num: "2",
      title: "50 Sneaky Nutrition Hacks for Indian Moms",
      price: "₹499",
      desc: "Hide nutrition in food your child already loves. Palak in paratha dough, protein in milkshakes — 50 tested Indian kitchen tricks.",
      img: "/images/upsell-bonus1.webp",
      bonus: true
    },
    {
      num: "3",
      title: "Lunchbox Presentation Magic — The Visual Tricks Guide",
      price: "₹399",
      desc: "Make tiffin so attractive your child opens it first. Star-shaped parathas, rainbow bowls, smiley plates — simple visual tricks that work.",
      img: "/images/upsell-bonus2.webp",
      bonus: true
    },
    {
      num: "4",
      title: "7-Day Fussy Eater Progress Tracker",
      price: "₹299",
      desc: "Printable daily tracker — new foods tried, child's reaction, your daily wins. See real progress in just 7 days.",
      img: "/images/upsell-bonus3.webp",
      bonus: true
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-[#dfab43] selection:text-black">
      
      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 1: DARK NAVY — Confirmation + Bridge   */}
      {/* ═══════════════════════════════════════════════ */}
      
      {/* Confirmation Bar — Compact */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-center py-1.5 px-4 font-bold text-xs md:text-sm flex justify-center items-center gap-1.5">
        <CheckCircle2 className="w-4 h-4" /> Payment Successful! Your Tiffin Bundle Is Ready.
      </div>
      
      {/* Bridge Section — Dark Navy */}
      <div className="bg-[#15212E] text-white">
        <div className="max-w-3xl mx-auto px-5 pt-10 pb-4">
          
          {/* Intro */}
          <p className="text-gray-300 font-medium mb-6 text-sm md:text-base text-center leading-relaxed">
            Your tiffin recipes are ready. But will your child actually EAT them? 🤔
          </p>
          
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center leading-tight">"Bachha Khaata Hi Nahi Hai…"</h1>
          <h2 className="text-[#dfab43] text-xl md:text-3xl font-extrabold mb-8 text-center">Ab <em className="not-italic underline decoration-[#dfab43] underline-offset-4">Ye Problem</em> Bhi Solve Ho Jaayegi.</h2>

          {/* Hero Image + Emotional Copy — Side by side on desktop */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center mb-10">
            {/* Hero Image */}
            <div className="w-full md:w-[45%] shrink-0">
              <img 
                src="/images/upsell-hero.webp" 
                alt="An Indian mom looking at her child's untouched school tiffin with worry" 
                width="600" 
                height="338"
                className="w-full rounded-2xl shadow-2xl shadow-black/30 border border-white/10 object-cover"
                loading="eager"
              />
            </div>
            
            {/* Emotional Copy — Left aligned */}
            <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4 text-left">
              <p>You just got the <span className="text-white font-semibold">best tiffin recipes.</span> That was the easy part.</p>
              <p>But if your dabba comes back <span className="text-white font-semibold">untouched…</span> if dinner becomes a <span className="text-white font-semibold">daily fight…</span> if you hear <span className="text-[#dfab43] font-semibold italic">"mujhe nahi khaana"</span> one more time —</p>
              <p><em className="text-white font-medium">This is the missing piece your Tiffin Bundle needs.</em></p>
            </div>
          </div>

          {/* Promise Card */}
          <div className="bg-white/[0.06] border border-white/10 p-5 md:p-7 rounded-2xl shadow-xl max-w-2xl mx-auto mb-6">
            <p className="text-gray-400 text-sm mb-3">This isn't another recipe book. It's not a nutrition chart.</p>
            <p className="text-white font-bold text-base md:text-lg leading-relaxed mb-4">
              It's a proven <span className="text-[#dfab43]">7-day system that makes your child WANT to eat</span> — using simple psychology tricks and sneaky nutrition hacks from real Indian moms.
            </p>
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-400 text-sm">
                Right now: <span className="text-white font-semibold">untouched dabbas, mealtime fights, guilt, tears.</span>
              </p>
              <p className="text-[#dfab43] font-bold text-base md:text-lg mt-2 leading-relaxed">
                7 days from now: <span className="text-white">your child tries new foods, eats without drama, and that dabba?</span> <span className="underline underline-offset-4">It comes back empty.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* ARCH DIVIDER — Dark to White                   */}
      {/* ═══════════════════════════════════════════════ */}
      <ArchDivider 
        type="dark-to-light" 
        badgeHighlight="4-in-1" 
        badgeText={"Fussy Eater\nFix Bundle"} 
        badgeIcon="🍱" 
      />

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 2: WHITE — Value Stack                 */}
      {/* ═══════════════════════════════════════════════ */}
      <div className="bg-white pt-10 pb-6">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">Here's Everything You Get Today:</h3>
          
          {/* Gold diamond separator */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-8 h-px bg-[#dfab43]/40" />
            <span className="text-[#dfab43] text-sm">◆</span>
            <div className="w-8 h-px bg-[#dfab43]/40" />
          </div>
          
          <div className="space-y-4">
            {valueItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm relative overflow-hidden">
                {/* Gold left accent border */}
                <div className="absolute left-0 top-3 bottom-3 w-1 rounded-full bg-[#dfab43]" />
                
                {/* Book cover */}
                <img 
                  loading="lazy" 
                  src={item.img} 
                  alt={item.title} 
                  width="80" 
                  height="106" 
                  className="w-[72px] md:w-20 aspect-[3/4] shrink-0 rounded-xl object-cover shadow-md border border-gray-100 ml-2" 
                />
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                      {item.bonus && <span className="text-[#dfab43] text-xs font-bold uppercase mr-1">FREE BONUS: </span>}
                      {item.num}. {item.title}
                    </h4>
                    <span className="text-gray-400 font-medium line-through text-sm shrink-0">{item.price}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-snug mt-1.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════ */}
      {/* ARCH DIVIDER — White to Dark                   */}
      {/* ═══════════════════════════════════════════════ */}
      <ArchDivider 
        type="light-to-dark" 
        badgeHighlight="82%" 
        badgeText={"OFF\nToday Only"} 
        badgeIcon="🔥" 
      />

      {/* ═══════════════════════════════════════════════ */}
      {/* SECTION 3: DARK NAVY — Price + CTA             */}
      {/* ═══════════════════════════════════════════════ */}
      <div className="bg-[#15212E] pt-8 pb-14">
        <div className="max-w-xl mx-auto px-4">
          <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.03] rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/30 border border-white/10">
            
            {/* Gold corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#dfab43]/40 rounded-tl-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#dfab43]/40 rounded-tr-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#dfab43]/40 rounded-bl-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#dfab43]/40 rounded-br-3xl pointer-events-none" style={{ filter: 'drop-shadow(0 0 6px rgba(223,171,67,0.15))' }} />

            {/* Price comparison */}
            <div className="text-center mb-3">
              <p className="text-gray-500 text-sm font-medium mb-1">Total Value</p>
              <p className="text-gray-500 line-through text-xl md:text-2xl font-bold mb-2">₹2,196</p>
              <p className="text-[#dfab43] text-3xl md:text-4xl font-extrabold">Just ₹{upsellPrice}</p>
            </div>
            
            {/* Price anchoring pill */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[#dfab43]/10 border border-[#dfab43]/20 text-[#dfab43] text-sm font-semibold px-4 py-1.5 rounded-full">
                ₹13/day — cheaper than a cup of chai
              </span>
            </div>

            {/* Guarantee */}
            <div className="bg-green-500/10 rounded-xl p-4 mb-8 flex gap-3 items-start border border-green-500/20">
              <ShieldCheck className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
              <p className="text-sm text-green-300 leading-snug">
                <strong className="text-green-200">7-Day Money-Back Guarantee:</strong> Not happy? Reply to your receipt email → full refund. No questions. No drama.
              </p>
            </div>

            {/* CTA */}
            <form onSubmit={handleUpsellPayment} className="flex flex-col items-center">
              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#dfab43] hover:bg-[#c99a3a] text-[#15212E] py-4 md:py-5 px-4 rounded-xl text-base sm:text-lg md:text-xl font-extrabold shadow-lg shadow-[#dfab43]/30 flex items-center justify-center gap-2 md:gap-3 transition-all transform active:scale-95 disabled:opacity-70 disabled:active:scale-100 mb-3 leading-tight uppercase tracking-wide"
              >
                {isProcessing ? "Processing..." : (
                  <>
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <span>YES! Fix My Fussy Eater — Just ₹{upsellPrice}</span>
                  </>
                )}
              </button>
              
              {/* Secure payment badge */}
              <p className="text-xs text-gray-500 mb-8 font-medium flex items-center gap-1.5">
                <Lock className="w-3 h-3" /> Secure Payment • Instant Download
              </p>

              {/* Skip button */}
              <button 
                type="button" 
                onClick={handleSkip}
                className="text-gray-300 hover:text-white font-semibold text-sm transition-all bg-white/[0.08] hover:bg-white/[0.12] px-6 py-3 rounded-full border border-white/10 hover:border-white/20"
              >
                No thanks, my child eats everything I make →
              </button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};
