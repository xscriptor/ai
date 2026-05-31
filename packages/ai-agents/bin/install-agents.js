#!/usr/bin/env node
// @xscriptor/ai-agents - Install AI agents for OpenCode and Claude Code.
// Usage: npx @xscriptor/ai-agents [--opencode|--anthropic|--project] [--groups LIST] [--dry-run]
import { existsSync, mkdirSync, copyFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_DIR = join(__dirname, "..");
const REPO_DIR = join(PKG_DIR, "..", "..");
const REPO_AGENTS = join(REPO_DIR, "agents");
const HELP = `
Usage: npx @xscriptor/ai-agents [options]

Target (default: --opencode):
  --opencode          Install agents to ~/.config/opencode/agents/
  --anthropic         Install agents to ~/.claude/agents/
  --project           Install to .opencode/agents/ (current dir)

Options:
  --groups LIST       Comma-separated groups (e.g. general,web/security)
  --dry-run           Preview without copying
  --list              List available groups
  --help              Show this help

Examples:
  npx @xscriptor/ai-agents
  npx @xscriptor/ai-agents --anthropic
  npx @xscriptor/ai-agents --groups general,web/security --dry-run
  npx @xscriptor/ai-agents --list
`;

const GROUPS = [
  "general", "languages", "web/security", "web/architecture", "web/frontend", "web/backend",
  "mobile", "data-ml", "cloud", "testing", "content", "observability", "compliance",
  "security/recon", "security/web-pentest", "security/mobile-pentest", "security/desktop",
  "security/red-team", "security/blue-team", "graphql", "embedded", "game-dev",
];

function dstPath(target) {
  const home = process.env.HOME || process.env.USERPROFILE || "";
  if (target === "anthropic") return join(home, ".claude", "agents");
  if (target === "project") return join(process.cwd(), ".opencode", "agents");
  const xdg = process.env.XDG_CONFIG_HOME || join(home, ".config");
  return join(xdg, "opencode", "agents");
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) { console.log(HELP); return; }
  if (args.includes("--list")) {
    console.log("Available groups:");
    for (const g of GROUPS) {
      const d = join(REPO_AGENTS, g);
      if (existsSync(d)) {
        const c = readdirSync(d).filter(f => f.endsWith(".md")).length;
        console.log(`  ${g.padEnd(25)} ${c} agents`);
      }
    }
    return;
  }

  const target = args.includes("--anthropic") ? "anthropic" : args.includes("--project") ? "project" : "opencode";
  const dryRun = args.includes("--dry-run");
  const groupsArg = args.indexOf("--groups");
  const selected = groupsArg >= 0 ? args[groupsArg + 1].split(",") : GROUPS;
  const dst = dstPath(target);

  console.log(`==> @xscriptor/ai-agents -> ${dst}\n`);
  let count = 0;

  for (const group of selected) {
    const gs = join(REPO_AGENTS, group);
    if (!existsSync(gs)) { console.log(`  [SKIP] ${group}`); continue; }
    const files = readdirSync(gs).filter(f => f.endsWith(".md"));
    if (files.length === 0) { console.log(`  [SKIP] ${group} (empty)`); continue; }
    console.log(`  [${group}]`);
    for (const f of files) {
      if (!dryRun) { mkdirSync(dst, { recursive: true }); copyFileSync(join(gs, f), join(dst, f)); }
      console.log(`    ${dryRun ? "-" : "+"} ${f}`);
      count++;
    }
  }

  console.log(dryRun ? `\n==> Would install ${count} agents` : `\n==> ${count} agents installed`);
}

main();
