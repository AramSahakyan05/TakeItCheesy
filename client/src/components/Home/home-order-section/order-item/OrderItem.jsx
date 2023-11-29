import { useEffect, useRef, useState } from "react";

const OrderItem = ({ title, content, img }) => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX || window.pageXOffset);
      setScrollY(window.scrollY || window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    if (scrolled) {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  if (scrollX === 0 && scrollY > 0 && !scrolled) {
    itemRef.current.style.display = "flex";
    setScrolled(true);
  }

  return (
    <div className="home-order-section-item" ref={itemRef}>
      <img src={img} alt="icon" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default OrderItem;
