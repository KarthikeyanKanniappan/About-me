import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} · ${profile.role}`;
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
          padding: 96,
          background: "#F1F1F1",
          color: "#000",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: "#EC9A22" }} />
          <div style={{ fontSize: 40, color: "#4A4A4A" }}>{profile.role}</div>
        </div>
        <div style={{ fontSize: 120, fontWeight: 700, marginTop: 24 }}>{profile.name}</div>
        <div style={{ display: "flex", gap: 20, marginTop: 48 }}>
          {["#EC9A22", "#FF3B2A", "#74D1D3"].map((color) => (
            <div key={color} style={{ width: 72, height: 72, borderRadius: 999, background: color, border: "2px solid #000" }} />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
