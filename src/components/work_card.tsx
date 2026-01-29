interface WorkCardProps {
  work: {
    id: number;
    company: string;
    position: string;
    image: string;
    description: string;
  };
  isExpanded: boolean;
  isPeeking: boolean;
  isVisible: boolean;
  originalIndex: number;
  translateX: number;
  onClick: () => void;
}

export default function WorkCard({
  work,
  isExpanded,
  isPeeking,
  isVisible,
  originalIndex,
  translateX,
  onClick
}: WorkCardProps) {
  return (
    <div
      onClick={onClick}
      className="work-card"
      data-expanded={isExpanded}
      data-peeking={isPeeking}
      style={{
        position: 'absolute',
        left: '50%',
        width: isExpanded ? '800px' : isPeeking ? '250px' : '400px',
        height: isExpanded ? '600px' : isPeeking ? '350px' : '400px',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '12px',
        opacity: isVisible ? (isPeeking ? 0.6 : 1) : 0,
        transform: `translateX(calc(-50% + ${translateX}px)) ${isVisible ? 'translateY(0)' : 'translateY(30px)'}`,
        transition: `opacity 0.6s ease ${0.3 + originalIndex * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1), z-index 0.3s ease`,
        zIndex: isExpanded ? 20 : isPeeking ? 5 : 10,
      }}
    >
      {/* Background Image */}
      <div
        className="work-card-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${work.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: isExpanded ? 'grayscale(0%)' : 'grayscale(100%)',
          transform: 'scale(1)',
          transition: 'filter 0.3s ease, transform 0.3s ease',
        }}
      />

      {/* Overlay */}
      <div
        className="work-card-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: isExpanded
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.95) 100%)'
            : isPeeking
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
          backdropFilter: isExpanded ? 'blur(2px)' : 'blur(0px)',
          transition: 'all 0.4s ease',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: 'white',
        }}
      >
        <div style={{
          transition: 'transform 0.3s ease',
          maxHeight: isExpanded ? 'calc(100% - 40px)' : 'auto',
          overflowY: isExpanded ? 'auto' : 'visible',
          paddingRight: isExpanded ? '12px' : '0',
          opacity: isPeeking ? 0 : 1,
        }}
        className="work-text-container">
          <p
            className="work-position"
            style={{
              fontSize: '14px',
              fontWeight: '400',
              color: '#d63030',
              marginBottom: '12px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isExpanded ? 1 : 0,
              transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            {work.position}
          </p>
          <h3
            style={{
              fontSize: isExpanded ? '36px' : '32px',
              fontWeight: '700',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: '1',
              marginBottom: isExpanded ? '24px' : '0',
            }}
          >
            {work.company}
          </h3>
          {isExpanded && (
            <div
              style={{
                animation: 'fadeInUp 0.4s ease 0.1s backwards',
                paddingBottom: '8px',
              }}
            >
              <div style={{
                height: '1px',
                background: 'linear-gradient(to right, rgba(214, 48, 48, 0.5) 0%, transparent 100%)',
                marginBottom: '20px',
                width: '60px',
              }} />
              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '300',
                  letterSpacing: '0.01em',
                }}
              >
                {work.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
