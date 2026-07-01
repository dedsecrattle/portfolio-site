import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const dynamic = "force-static"; // required for `output: export`
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      >
        <div style={{ display: "flex", color: "#34d399", fontSize: 28, fontFamily: "monospace" }}>
          prabhat@singapore:~$ whoami
        </div>
        <div style={{ display: "flex", color: "#fafafa", fontSize: 92, fontWeight: 700, marginTop: 24 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", color: "#a1a1a1", fontSize: 38, marginTop: 12 }}>{profile.tagline}</div>
        <div style={{ display: "flex", alignItems: "center", color: "#34d399", fontSize: 28, fontFamily: "monospace", marginTop: 56 }}>
          <span>&gt;</span>
          <span style={{ color: "#fafafa", marginLeft: 12 }}>prabhatk.tech</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
