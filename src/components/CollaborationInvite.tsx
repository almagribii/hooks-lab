import React from "react";
import { Github, MessageSquare, Sparkles } from "lucide-react";

interface CollaborationInviteProps {
  hookName: string;
  repoUrl: string;
  issueUrl?: string;
}

export const CollaborationInvite: React.FC<CollaborationInviteProps> = ({
  hookName,
  repoUrl,
  issueUrl,
}) => {
  return (
    <section className="mt-12 overflow-hidden rounded-2rem border rounded-2xl border-slate-800 bg-linear-to-r from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl">
      <div className="relative px-8 py-10 md:px-12">
        <div
          className="absolute -left-10 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-12 -bottom-12 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
            <Sparkles className="text-amber-300" size={24} />
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200/70">
              Lab belum ada
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-2xl font-bold md:text-3xl">
              {hookName} masih menunggu contoh studi kasus.
            </h3>
            <p className="text-sm text-slate-200 md:text-base md:leading-relaxed">
              Menu atau dropdown untuk hook ini belum terisi. Kalau kamu punya
              ide, artikel, atau ingin menambah mini project, ayo kolaborasi
              lewat GitHub. PR, issue, atau diskusi sangat terbuka.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500 active:translate-y-1px"
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                Buka Repository
              </a>
              {issueUrl ? (
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:bg-white/10 active:translate-y-1px"
                  href={issueUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageSquare size={18} />
                  Mulai Diskusi
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationInvite;
