import React from "react";
import { useNavigate } from "react-router-dom";
import { generateRoomId, isValidRoomId, normalizeRoomId } from "../lib/roomId";
import DecryptedText from "../components/decrypt_text";
import { StaggeredMenu } from "../components/staggered_menu";
import { getActiveRooms, addActiveRoom, formatRoomIdForMenu } from "../lib/activeRooms";
import PixelBlast from "../components/pixel_blast";

export default function Home() {
  const nav = useNavigate();
  const [roomId, setRoomId] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [menuItems, setMenuItems] = React.useState<Array<{ label: string; ariaLabel: string; link: string }>>([]);

  React.useEffect(() => {
    const fetchRooms = async () => {
      try {
        const activeRooms = getActiveRooms();
        const items = activeRooms.map((roomId: string) => ({
          label: formatRoomIdForMenu(roomId),
          ariaLabel: `Join room ${roomId}`,
          link: `/room/${roomId}`
        }));
        setMenuItems(items);
      } catch (err) {
        console.error('Failed to get active rooms:', err);
      }
    };
    fetchRooms();
  }, []);

  function go(id: string) {
    const normalized = normalizeRoomId(id);
    if (!isValidRoomId(normalized)) {
      setError("Please enter a valid room id.");
      return;
    }
    addActiveRoom(normalized);
    nav(`/room/${normalized}`);
  }

  return (
    <>
      <PixelBlast
        variant="square"
        pixelSize={4}
        color="#ff2727"
        patternDensity={0.5}
        patternScale={2}
        liquid={true}
        liquidStrength={0.05}
        enableRipples={true}
        transparent={true}
        edgeFade={0.3}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(2px)',
        zIndex: 5,
        pointerEvents: 'none'
      }} />
      <StaggeredMenu
        isFixed={true}
        items={menuItems}
        colors={['#451e1e', '#713030', '#a82e2e']}
        socialItems={[
          { label: 'GitHub', link: 'https://github.com/RiceGrainRain' },
          { label: 'LinkedIn', link: 'https://linkedin.com/in/manas-navale' },
        ]}
      />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', gap: '24px', padding: '24px', position: 'relative', zIndex: 10 }}>
      <h1 style={{ margin: 0, fontSize: '48px', fontWeight: 'bold', textShadow: '0 4px 12px rgba(0, 0, 0, 0.7)' }}>
        <DecryptedText
          text="Vagabond"
          speed={50}
          maxIterations={50}
          sequential={false}
          revealDirection="center"
          animateOn="both"
          className="text-reveal"

        />
      </h1>
      <div className="meta" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Join or create a real-time incident room.</div>

      <div className="row" style={{ marginBottom: 12, justifyContent: 'center' }}>
        <input
          value={roomId}
          onChange={(e) => {
            setRoomId(e.target.value);
            setError(null);
          }}
          placeholder="e.g. k9p3-a7df-x2m8"
        />
        <button onClick={() => go(roomId)}>Join</button>
        <button
          onClick={() => {
            const id = generateRoomId();
            setRoomId(id);
            setError(null);
          }}
        >
          Generate
        </button>
        <button onClick={() => go(generateRoomId())}>Create &amp; Go</button>
      </div>

      {error && <div style={{ color: "crimson", marginTop: 8, textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)' }}>{error}</div>}

      <div className="status" style={{ marginTop: 16, textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)', color: 'rgba(255, 255, 255, 0.85)' }}>
        Tip: Share the room URL with teammates to collaborate live.
      </div>
      </div>
    </>
  );
}
