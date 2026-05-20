import { useEffect, useState } from "react";
import { clarity } from "react-microsoft-clarity";

export function useCVRole() {
  const [role, setRole] = useState<"backend" | "fullstack">("fullstack");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    
    // Check various query params representing Back-End
    const hasBEParam = 
      searchParams.has("BE") || 
      searchParams.get("role")?.toLowerCase() === "be" || 
      searchParams.get("v")?.toLowerCase() === "be";

    let resolvedRole: "backend" | "fullstack" = "fullstack";

    if (hasBEParam) {
      resolvedRole = "backend";
      sessionStorage.setItem("cv_role", "backend");
    } else {
      // Fallback to sessionStorage if already set in this session
      const savedRole = sessionStorage.getItem("cv_role");
      if (savedRole === "backend") {
        resolvedRole = "backend";
      }
    }

    setRole(resolvedRole);

    // Track user CV role in Microsoft Clarity
    try {
      clarity.setTag("cv_role", resolvedRole);
    } catch (e) {
      console.warn("Clarity tag tracking error:", e);
    }
  }, []);

  const baseUrl = import.meta.env.BASE_URL || "/";
  const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const cvPath = role === "backend" ? `${cleanBaseUrl}cv-backend.pdf` : `${cleanBaseUrl}cv-fullstack.pdf`;
  const cvFilename = role === "backend" ? "Curriculo_Lucas_Gomes_Backend.pdf" : "Curriculo_Lucas_Gomes_Fullstack.pdf";

  return { role, cvPath, cvFilename };
}
