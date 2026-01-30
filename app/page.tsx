"use client";

import { IDKitWidget, VerificationLevel } from "@worldcoin/idkit";
import { useState } from "react";

export default function HomePage() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <main className="page">
      <div className="content">
        <span className="badge">1인 1표 인증 시스템</span>
        <IDKitWidget
          app_id="app_be8f7003f1c8cd1abc081437f3c47fbc"
          action="vote-1"
          verification_level={VerificationLevel.Orb}
          onSuccess={() => setIsVerified(true)}
        >
          {({ open }) => (
            <button className="cta" type="button" onClick={open}>
              World ID로 인증하기
            </button>
          )}
        </IDKitWidget>
        {isVerified ? <p className="success">인증되었습니다! ✅</p> : null}
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #2d2f33, #141518 60%, #0c0d10);
          color: #f5f5f7;
          text-align: center;
          padding: 24px;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .badge {
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
        }

        .cta {
          font-size: 1.2rem;
          font-weight: 600;
          padding: 18px 32px;
          border-radius: 999px;
          border: none;
          background: #ffffff;
          color: #101114;
          cursor: pointer;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cta:hover {
          transform: scale(1.05);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.45);
        }

        .success {
          font-size: 1rem;
          color: #b6ffca;
          font-weight: 500;
        }

        @media (max-width: 480px) {
          .cta {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </main>
  );
}
