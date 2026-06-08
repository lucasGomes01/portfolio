import { useEffect, useState } from "react";
import { clarity } from "react-microsoft-clarity";

function safeSetClarityTag(key: string, value: string) {
  try {
    clarity.setTag(key, value);
  } catch (e) {
    console.warn(`Clarity tag error [${key}]:`, e);
  }
}

function setWithExpiry(key: string, value: string, ttlDays: number | null) {
  const now = new Date();
  const item = {
    value: value,
    expiry: ttlDays ? now.getTime() + ttlDays * 24 * 60 * 60 * 1000 : null,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (item.expiry && now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export function useCVRole() {
  const [role, setRole] = useState<"backend" | "fullstack">("fullstack");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    // ── CV Role detection ──────────────────────────────────────
    const roleParam = searchParams.get("role")?.toLowerCase();
    const hasBEParam =
      searchParams.has("BE") ||
      roleParam === "b" ||
      roleParam === "backend" ||
      roleParam === "be" ||
      searchParams.get("v")?.toLowerCase() === "be";

    let resolvedRole: "backend" | "fullstack" = "fullstack";

    if (hasBEParam) {
      resolvedRole = "backend";
      setWithExpiry("cv_role", "backend", 5);
    } else {
      const savedRole = getWithExpiry("cv_role");
      if (savedRole === "backend") resolvedRole = "backend";
    }

    setRole(resolvedRole);
    safeSetClarityTag("cv_role", resolvedRole);

    // ── UTM Source tracking ────────────────────────────────────
    const utmSource = searchParams.get("utm_source");
    const utmMedium = searchParams.get("utm_medium");
    const utmCampaign = searchParams.get("utm_campaign");

    if (utmSource) {
      safeSetClarityTag("utm_source", utmSource);
      sessionStorage.setItem("utm_source", utmSource);
    }
    if (utmMedium) {
      safeSetClarityTag("utm_medium", utmMedium);
      sessionStorage.setItem("utm_medium", utmMedium);
    }
    if (utmCampaign) {
      safeSetClarityTag("utm_campaign", utmCampaign);
      sessionStorage.setItem("utm_campaign", utmCampaign);
    }

    const savedUtmSource = sessionStorage.getItem("utm_source");
    if (savedUtmSource && !utmSource) {
      safeSetClarityTag("utm_source", savedUtmSource);
    }

    // ── Custom access token (tk) ───────────────────────────────
    const token = searchParams.get("tk");
    if (token) {
      const ttl = token === "TesteLucas" ? null : 5;
      setWithExpiry("cv_tk", token, ttl);
      safeSetClarityTag("cv_tk", token);
      try {
        clarity.event(`token:${token}`);
      } catch (e) {
        console.warn("Clarity event error:", e);
      }
    } else {
      const savedToken = getWithExpiry("cv_tk");
      if (savedToken) safeSetClarityTag("cv_tk", savedToken);
    }
  }, []);

  const baseUrl = import.meta.env.BASE_URL || "/";
  const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cvPath = role === "backend" ? `${cleanBaseUrl}cv-backend.pdf` : `${cleanBaseUrl}cv-fullstack.pdf`;
  const cvFilename = role === "backend" ? "Curriculo_Lucas_Gomes_Backend.pdf" : "Curriculo_Lucas_Gomes_Fullstack.pdf";

  return { role, cvPath, cvFilename };
}
