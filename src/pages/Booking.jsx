import React from "react";

export default function Booking() {
  return (
    <div className="pt-[62px] h-screen flex flex-col">
      <iframe
        src="https://jackblendss.setmore.com/book"
        title="Book a Cut — Jack Blends"
        loading="lazy"
        allow="payment"
        className="flex-1 w-full border-none block"
      />
    </div>
  );
}