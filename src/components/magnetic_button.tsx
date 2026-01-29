import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import DecryptedText from './decrypted_text';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  onClick,
  style = {},
  magneticStrength = 0.3
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovered ? 'background-color 0.3s ease, border-color 0.3s ease' : 'all 0.3s ease',
      }}
    >
      {isHovered ? (
        <DecryptedText
          text={typeof children === 'string' ? children : 'Learn more'}
          animateOn="hover"
          style={{ display: 'inline' }}
        />
      ) : (
        children
      )}
    </button>
  );
}
