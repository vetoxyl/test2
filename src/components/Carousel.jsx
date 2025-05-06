import React, { useRef, useEffect } from "react";

const Carousel = () => {
  const carouselRef = useRef(null);

  // Handle Mouse Wheel Scroll (sideways)
  useEffect(() => {
    const handleWheelScroll = (event) => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft +=
          event.deltaX !== 0 ? event.deltaX : event.deltaY;
      }
    };

    const handleKeyScroll = (event) => {
      if (carouselRef.current) {
        const scrollAmount = 350;
        if (event.key === "ArrowLeft") {
          carouselRef.current.scrollLeft -= scrollAmount;
        } else if (event.key === "ArrowRight") {
          carouselRef.current.scrollLeft += scrollAmount;
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("wheel", handleWheelScroll, { passive: true });
      window.addEventListener("keydown", handleKeyScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("wheel", handleWheelScroll);
        window.removeEventListener("keydown", handleKeyScroll);
      }
    };
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* Title */}
      <h2 style={{ textAlign: "center", color: "#444", marginBottom: "10px" }}>
        Suggestions for &lt;MealName&gt;
      </h2>

      {/* Scrollable Meal Cards */}
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "10px",
          padding: "10px",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Hide scrollbar in Webkit browsers */}
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            style={{
              width: "calc(28.57% - 10px)", // 3.5 cards in the viewport
              height: "588px",
              background: "#f0f0f0",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
              color: "#777",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              flexShrink: 0,
            }}
          >
            Meal {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
