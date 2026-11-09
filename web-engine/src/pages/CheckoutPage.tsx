import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '../components/ui';
import { Link, useNavigate } from 'react-router-dom';
import { trackPixelEvent, generateEventId } from '../utils/pixel';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const [bump1, setBump1] = useState(false);
  const [bump2, setBump2] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // ── PRICING (LIVE) ──
  const basePrice = 497;
  const bump1Price = 149;
  const bump2Price = 197;

  const total = basePrice + (bump1 ? bump1Price : 0) + (bump2 ? bump2Price : 0);

  // Generate event IDs for CAPI deduplication
  const [checkoutEventId] = useState(() => generateEventId());
  const [purchaseEventId] = useState(() => generateEventId());

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPixelEvent('InitiateCheckout', { currency: 'INR', value: total }, checkoutEventId);
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !phone) {
      alert("Please fill in your name, email, and phone number.");
      return;
    }

    setIsProcessing(true);
    
    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load. Are you offline?");
        setIsProcessing(false);
        return;
      }

      const API_BASE = import.meta.env.VITE_API_URL || "";
      const orderResponse = await fetch(`${API_BASE}/api/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: total, event_id: checkoutEventId }),
      });

      const orderData = await orderResponse.json();

      if (orderData.error) {
        alert("Failed to create order: " + orderData.error);
        setIsProcessing(false);
        return;
      }

      const options = {
        key: orderData.key_id,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Mini Wellness",
        description: "The Ultimate Tiffin Bundle",
        order_id: orderData.id,
        handler: async function (response: any) {
          // Payment Successful, Verify and Send Email
          try {
            const items = ["The Ultimate Tiffin Bundle"];
            if (bump1) items.push("Healthy Indian Breakfasts for Kids");
            if (bump2) items.push("Healthy Indian Dinners for Kids");

            const API_BASE = import.meta.env.VITE_API_URL || "";
            // Fire Purchase pixel event with deduplication ID
            trackPixelEvent('Purchase', { currency: 'INR', value: total }, purchaseEventId);

            const verifyRes = await fetch(`${API_BASE}/api/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                email,
                name,
                phone,
                items,
                bump1,
                bump2,
                event_id: purchaseEventId,
                amount: total
              })
            });

            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              navigate("/upsell", { state: { bump1, bump2, name, email, phone, items } });
            } else {
              alert("Payment verification failed. Please contact support.");
            }
          } catch (verifyError) {
            console.error("Verification error:", verifyError);
            alert("Payment successful but verification failed.");
          }
        },
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        theme: {
          color: "#dfab43",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
      
      paymentObject.on('payment.failed', function (response: any){
        alert("Payment Failed: " + response.error.description);
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#15212E] font-sans selection:bg-[#dfab43] selection:text-black py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-[#dfab43] hover:text-[#c99a3a] mb-6 md:mb-8 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to details
        </Link>
        
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/30 overflow-hidden border border-white/10 flex flex-col md:flex-row">
          
          {/* Order Summary (Left/Top) */}
          <div className="w-full md:w-1/2 bg-[#1a2c3d] p-6 md:p-10 border-b md:border-b-0 md:border-r border-white/10">
            <h2 className="text-2xl font-bold mb-6 text-white">Order Summary</h2>
            
            <div className="flex justify-between items-center mb-6 bg-white/[0.06] p-4 rounded-2xl border border-white/10">
              <div className="flex gap-4 items-center">
                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shadow-sm border border-white/10 shrink-0 flex items-center justify-center cursor-pointer overflow-hidden group"
                >
                  <img 
                    src="/images/tiffin-bundle.webp" 
                    alt="Tiffin Bundle" 
                    width="80"
                    height="80"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110" 
                  />
                </div>
                <div className="flex-1 pr-2">
                  <h3 className="font-bold text-white leading-tight text-sm sm:text-base">The Ultimate Tiffin Bundle</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">6 eBooks + 12 Printables</p>
                </div>
              </div>
              <span className="font-bold text-[#dfab43] text-base sm:text-lg shrink-0">₹{basePrice}</span>
            </div>

            {bump1 && (
              <div className="flex justify-between items-center mb-3 py-3 px-4 bg-white/[0.06] rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#dfab43]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#dfab43]" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">Breakfast Guide</h3>
                </div>
                <span className="font-semibold text-[#dfab43] shrink-0">₹{bump1Price}</span>
              </div>
            )}

            {bump2 && (
              <div className="flex justify-between items-center mb-4 py-3 px-4 bg-white/[0.06] rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#dfab43]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#dfab43]" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">Dinner Guide</h3>
                </div>
                <span className="font-semibold text-[#dfab43] shrink-0">₹{bump2Price}</span>
              </div>
            )}

            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-400 text-sm sm:text-base">Subtotal</span>
                <span className="font-medium text-gray-300">₹{total}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 text-sm sm:text-base">Taxes</span>
                <span className="font-medium text-gray-400 text-sm sm:text-base">Calculated at next step</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold bg-[#dfab43]/10 text-white p-4 rounded-xl border border-[#dfab43]/20">
                <span>Total</span>
                <span className="text-[#dfab43]">₹{total}</span>
              </div>
            </div>

            <div className="mt-8 bg-green-500/10 p-5 rounded-2xl border border-green-500/20 flex gap-4 items-start">
              <div className="bg-green-500/20 rounded-full p-1.5 shrink-0">
                <ShieldCheck className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="font-bold text-green-300 text-sm sm:text-base">100% Satisfaction Guarantee</h4>
                <p className="text-xs sm:text-sm text-green-400/80 mt-1 leading-relaxed">If you don't find value in this bundle, let us know within 7 days for a full refund.</p>
              </div>
            </div>
          </div>

          {/* Checkout Form (Right/Bottom) */}
          <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Payment Details</h2>
            <p className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" /> Your information is 100% safe
            </p>

            {/* Bump Offers Section */}
            <div className="mb-8 space-y-6">
              <div 
                className={`relative p-4 pt-6 sm:p-5 sm:pt-6 rounded-xl border-2 border-dashed transition-all cursor-pointer ${bump1 ? 'border-[#dfab43] bg-[#fffcf5]' : 'border-gray-300 hover:border-[#dfab43] hover:bg-gray-50'}`}
                onClick={() => setBump1(!bump1)}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#dfab43] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                  ⭐ One Time Offer
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className={`mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${bump1 ? 'bg-[#dfab43] border-[#dfab43]' : 'bg-white border-gray-300'}`}>
                    {bump1 && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 flex flex-col xl:flex-row xl:items-center justify-between gap-1 xl:gap-0">
                      <span className="text-[14px] sm:text-[15px] leading-tight text-red-600">⚡ YES! Solve Morning Breakfast Drama</span>
                      <span className="text-[#dfab43] whitespace-nowrap text-sm sm:text-base">+ ₹{bump1Price} <span className="text-[11px] line-through text-gray-400">₹599</span> <span className="text-[11px] text-red-500 font-bold">(75% OFF)</span></span>
                    </h4>
                    <p className="text-[13px] sm:text-sm text-gray-800 mt-1.5 font-semibold leading-snug">35+ Rapid High-Protein Indian Meals for Rushed Mornings</p>
                    <ul className="text-[11px] sm:text-xs text-gray-600 mt-2 space-y-1.5 list-disc list-outside ml-3 sm:ml-4">
                      <li>Tantrum-free morning meals kids eagerly finish (Mini Idlis, Wraps & Shakes)</li>
                      <li>5-Minute "No-Cook" emergency recipes when you're running late</li>
                      <li>Ensures your child never leaves for school on an empty tummy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div 
                className={`relative p-4 pt-6 sm:p-5 sm:pt-6 rounded-xl border-2 border-dashed transition-all cursor-pointer ${bump2 ? 'border-[#dfab43] bg-[#fffcf5]' : 'border-gray-300 hover:border-[#dfab43] hover:bg-gray-50'}`}
                onClick={() => setBump2(!bump2)}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#dfab43] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                  ⭐ One Time Offer
                </div>
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className={`mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${bump2 ? 'bg-[#dfab43] border-[#dfab43]' : 'bg-white border-gray-300'}`}>
                    {bump2 && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 flex flex-col xl:flex-row xl:items-center justify-between gap-1 xl:gap-0">
                      <span className="text-[14px] sm:text-[15px] leading-tight text-red-600">⚡ YES! Solve Bedtime Dinner Tantrums</span>
                      <span className="text-[#dfab43] whitespace-nowrap text-sm sm:text-base">+ ₹{bump2Price} <span className="text-[11px] line-through text-gray-400">₹499</span> <span className="text-[11px] text-red-500 font-bold">(60% OFF)</span></span>
                    </h4>
                    <p className="text-[13px] sm:text-sm text-gray-800 mt-1.5 font-semibold leading-snug">12 Soothing 20-Min Indian Dinners for Deep & Peaceful Sleep</p>
                    <ul className="text-[11px] sm:text-xs text-gray-600 mt-2 space-y-1.5 list-disc list-outside ml-3 sm:ml-4">
                      <li>Light, gentle recipes that prevent nighttime gas, bloating & heavy stomach</li>
                      <li>"Dinner Rhythm" routine to melt away post-school evening crankiness</li>
                      <li>Smart "Dinner Dabba" prep hacks so you never cook tired at 8:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handlePayment}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input required type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#dfab43] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input required type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#dfab43] focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input required type="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#dfab43] focus:border-transparent outline-none transition-all" />
              </div>
              
              <div className="pt-4">
                <Button variant="primary" className="w-full py-4 text-lg font-bold flex items-center justify-center gap-2" disabled={isProcessing}>
                  {isProcessing ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Pay ₹{total} Now
                    </>
                  )}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" /> Secure, 256-bit encrypted checkout
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
