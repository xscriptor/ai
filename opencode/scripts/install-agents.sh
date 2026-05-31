#!/usr/bin/env bash
# Install OpenCode agents from https://github.com/xscriptor/ai to any destination.
#
# The repo is organized as:
#   opencode/agents/    -> 91 agents for OpenCode (.md files)
#   opencode/scripts/   -> utility scripts (this file lives here)
#   anthropic/skills/   -> 3 skills for Claude Code (directory format)
#   packages/           -> npm package @xscriptor/ai-agents
#
# Remote:
#   curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/opencode/scripts/install-agents.sh | bash
#   curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/opencode/scripts/install-agents.sh | bash -s -- --project
#   curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/opencode/scripts/install-agents.sh | bash -s -- --groups general,languages
#
# Also available via npx:
#   npx @xscriptor/ai-agents
#   npx @xscriptor/ai-agents --anthropic
#
# Local:
#   ./install-agents.sh                    # All 91 agents, global opencode
#   ./install-agents.sh --groups general   # Specific groups only
#   ./install-agents.sh --interactive      # Interactive selection
#   ./install-agents.sh --project          # Install in .opencode/agents/ (current dir)
#   ./install-agents.sh --dest ~/my-agents # Custom destination
#   ./install-agents.sh --dry-run          # Preview only
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AGENTS_SRC="$REPO_DIR/agents"

# Detect platform
case "$(uname -s)" in
  Darwin) PLATFORM="macOS" ;;
  Linux)  PLATFORM="Linux" ;;
  MINGW*|MSYS*|CYGWIN*) PLATFORM="Windows (WSL/Git Bash)" ;;
  *)      PLATFORM="$(uname -s)" ;;
esac

ALL_GROUPS=(
  general languages web/security web/architecture web/frontend web/backend
  mobile data-ml cloud testing graphql embedded game-dev content observability compliance
  security/recon security/web-pentest security/mobile-pentest security/desktop
  security/red-team security/blue-team
)

usage() {
  echo "Usage: $0 [OPTIONS]"
  echo "Install OpenCode agents."
  echo ""
  echo "Destination options (last one wins):"
  echo "  --global           Install to OpenCode global agents dir (default)"
  echo "  --project          Install to .opencode/agents/ in current directory"
  echo "  --dest PATH        Install to a custom directory"
  echo ""
  echo "Selection options:"
  echo "  --all              Install all groups (default)"
  echo "  --groups LIST      Comma-separated group names (e.g. general,web/frontend)"
  echo "  --interactive      Select groups interactively"
  echo ""
  echo "Other options:"
  echo "  --dry-run          Preview without copying"
  echo "  --list             List available groups"
  echo "  --skills           Install skills to OpenCode (~/.config/opencode/skills/)
  --anthropic        Install skills to Claude Code (~/.claude/skills/)
  --help             Show this help"
}

list_groups() {
  echo "Available groups ($(echo "${#ALL_GROUPS[@]}")):"
  for g in "${ALL_GROUPS[@]}"; do
    count=$(find "$AGENTS_SRC/$g" -maxdepth 1 -name '*.md' 2>/dev/null | wc -l | tr -d ' ')
    echo "  $g ($count agents)"
  done
}

# --- Resolve destination ---
detect_opencode_global() {
  # OpenCode: respects XDG_CONFIG_HOME, falls back to ~/.config
  local base="${XDG_CONFIG_HOME:-$HOME/.config}"
  echo "$base/opencode/agents"
}

detect_opencode_project() {
  echo "$(pwd)/.opencode/agents"
}

DEST=""
if [[ $# -eq 0 ]]; then
  DEST=$(detect_opencode_global)
  SELECTED=("${ALL_GROUPS[@]}")
fi

while [[ $# -gt 0 ]]; do
  case "$1" in
    --global) DEST=$(detect_opencode_global); shift ;;
    --project) DEST=$(detect_opencode_project); shift ;;
    --dest) DEST="$2"; shift 2 ;;
    --all) SELECTED=("${ALL_GROUPS[@]}"); shift ;;
    --groups) IFS=',' read -ra SELECTED <<< "$2"; shift 2 ;;
    --interactive) INTERACTIVE=1; shift ;;
    --dry-run) DRY_RUN=1; shift ;;
    --list) list_groups; exit 0 ;;
    --help) usage; exit 0 ;;
    --skills) DEST="${XDG_CONFIG_HOME:-$HOME/.config}/opencode/skills"; shift ;;
    --anthropic) DEST="${HOME}/.claude/skills"; shift ;;
    *) echo "Unknown: $1"; usage; exit 1 ;;

esac

# --- Execute ---
echo "==> Xscriptor OpenCode Agents"
echo "    Platform: $PLATFORM"
echo "    Destination: $DEST"
echo ""

INSTALL_COUNT=0
for group in "${SELECTED[@]}"; do
  src_dir="$AGENTS_SRC/$group"
  if [[ ! -d "$src_dir" ]]; then
    echo "  [SKIP] $group (directory not found)"
    continue
  fi

  files=("$src_dir"/*.md)
  if [[ ! -f "${files[0]}" ]]; then
    echo "  [SKIP] $group (no .md files)"
    continue
  fi

  echo "  [$group]"
  for src in "${files[@]}"; do
    name=$(basename "$src")
    if [[ -n "${DRY_RUN:-}" ]]; then
      echo "    - $name"
    else
      mkdir -p "$DEST"
      cp "$src" "$DEST/$name"
      echo "    + $name"
    fi
    ((INSTALL_COUNT++))
  done
done

echo ""
if [[ -n "${DRY_RUN:-}" ]]; then
  echo "==> Dry run: $INSTALL_COUNT agents would be installed."
else
  echo "==> $INSTALL_COUNT agents installed to $DEST"
  echo ""
  echo "Usage: @agent-name in OpenCode (e.g. @code-reviewer)"
  echo ""
  echo "Notes:"
  echo "  - For Claude Code, use: npx @xscriptor/ai-agents --anthropic"
  echo "  - Repo: https://github.com/xscriptor/ai"
  echo "  - Structure: opencode/ (91 agents), anthropic/ (3 skills), packages/ (npm)"
fi
