#!/usr/bin/env node
// @xscriptor/ai-agents - Install AI agents and skills for OpenCode and Claude Code.
// Usage: npx @xscriptor/ai-agents [--opencode|--anthropic|--skills|--project] [--groups LIST] [--dry-run]
import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_DIR = join(__dirname, "..");
const REPO_DIR = join(PKG_DIR, "..", "..");
const HELP = `
Usage: npx @xscriptor/ai-agents [options]

Target options (default: --opencode):
  --opencode          Install agents to OpenCode (~/.config/opencode/agents/)
  --skills            Install skills to OpenCode (~/.config/opencode/skills/)
  --anthropic         Install skills to Claude Code (~/.claude/skills/)
  --project           Install agents to .opencode/agents/ (current directory)

Selection options:
  --groups LIST       Comma-separated groups (e.g. general,web/security)

Other:
  --dry-run           Preview without copying
  --list              List available groups
  --help              Show this help

Examples:
  npx @xscriptor/ai-agents
  npx @xscriptor/ai-agents --skills
  npx @xscriptor/ai-agents --anthropic
  npx @xscriptor/ai-agents --groups general,web/security --dry-run
`;

const REPO_AGENTS = join(REPO_DIR, "agents");
const REPO_SKILLS = join(REPO_DIR, "skills");
const REPO_ANTHROPIC = REPO_SKILLS; // skills/ works for both platforms

const AGENT_GROUPS = [
  "general", "languages", "web/security", "web/architecture", "web/frontend", "web/backend",
  "mobile", "data-ml", "cloud", "testing", "content", "observability", "compliance",
  "security/recon", "security/web-pentest", "security/mobile-pentest", "security/desktop",
  "security/red-team", "security/blue-team", "graphql", "embedded", "game-dev",
];

const SKILL_NAMES = ["xscriptor", "devx", "samurai"];

function dstPath(target) {
  const home = process.env.HOME || process.env.USERPROFILE || "";
  switch (target) {
    case "anthropic": return join(home, ".claude", "skills");
    case "skills": {
      const xdg = process.env.XDG_CONFIG_HOME || join(home, ".config");
      return join(xdg, "opencode", "skills");
    }
    case "project": return join(process.cwd(), ".opencode", "agents");
    default: {
      const xdg = process.env.XDG_CONFIG_HOME || join(home, ".config");
      return join(xdg, "opencode", "agents");
    }
  }
}

function copyDir(src, dst, dry) {
  let count = 0;
  for (const entry of readdirSync(src)) {
    const sp = join(src, entry);
    const dp = join(dst, entry);
    if (statSync(sp).isDirectory()) {
      if (!dry) mkdirSync(dp, { recursive: true });
      count += copyDir(sp, dp, dry);
    } else if (entry.endsWith(".md")) {
      if (!dry) {
        mkdirSync(dst, { recursive: true });
        copyFileSync(sp, dp);
      }
      console.log(`    ${dry ? "-" : "+"} ${basename(dst)}/${entry}`);
      count++;
    }
  }
  return count;
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--help")) { console.log(HELP); return; }

  if (args.includes("--list")) {
    console.log("Available agent groups:");
    for (const g of AGENT_GROUPS) {
      const d = join(REPO_AGENTS, g);
      if (existsSync(d)) {
        const c = readdirSync(d).filter(f => f.endsWith(".md")).length;
        console.log(`  ${g.padEnd(25)} ${c} agents`);
      }
    }
    console.log("\nAvailable skills:");
    for (const s of SKILL_NAMES) {
      const d = join(REPO_SKILLS, "web", "literature", s);
      const d2 = join(REPO_SKILLS, "web", "dev", s);
      const d3 = join(REPO_SKILLS, "web", "cybersec", s);
      const src = existsSync(d) ? d : existsSync(d2) ? d2 : existsSync(d3) ? d3 : null;
      if (src && existsSync(src)) console.log(`  ${s}`);
    }
    return;
  }

  const target = args.includes("--anthropic") ? "anthropic"
    : args.includes("--skills") ? "skills"
    : args.includes("--project") ? "project" : "opencode";
  const dryRun = args.includes("--dry-run");
  const dst = dstPath(target);

  console.log(`==> @xscriptor/ai-agents`);
  console.log(`    Target: ${target} -> ${dst}\n`);

  let count = 0;

  if (target === "anthropic") {
    // Claude Code: install agents from agents/ + skills from skills/web/*/
    const groupsArg = args.indexOf("--groups");
    const selected = groupsArg >= 0 ? args[groupsArg + 1].split(",") : AGENT_GROUPS;
    const agentDst = join(dst.replace("/skills", "/agents"));
    for (const group of selected) {
      const gs = join(REPO_AGENTS, group);
      if (!existsSync(gs)) { console.log(`  [SKIP] ${group}`); continue; }
      const files = readdirSync(gs).filter(f => f.endsWith(".md"));
      if (files.length === 0) continue;
      console.log(`  [agents/${group}]`);
      for (const f of files) {
        if (!dryRun) { mkdirSync(agentDst, { recursive: true }); copyFileSync(join(gs, f), join(agentDst, f)); }
        console.log(`    ${dryRun ? "-" : "+"} ${f}`);
        count++;
      }
    }
  }

  if (target === "skills" || target === "anthropic") {
    // Skills from skills/web/*/
    const cats = ["literature", "dev", "cybersec"];
    const skillMap = { literature: "xscriptor", dev: "devx", cybersec: "samurai" };
    for (const cat of cats) {
      const sd = join(REPO_SKILLS, "web", cat, skillMap[cat]);
      if (!existsSync(sd)) continue;
      console.log(`  [${skillMap[cat]}]`);
      const c = copyDir(sd, join(dst, skillMap[cat]), dryRun);
      count += c;
    }
  } else {
    // OpenCode agents from agents/
    const groupsArg = args.indexOf("--groups");
    const selected = groupsArg >= 0 ? args[groupsArg + 1].split(",") : AGENT_GROUPS;
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
  }

  console.log(dryRun
    ? `\n==> Would install ${count} items to ${dst}`
    : `\n==> ${count} items installed to ${dst}`);
}

main();
