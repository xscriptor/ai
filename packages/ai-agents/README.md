<h1 align="center">@xscriptor/ai-agents</h1>

<p>91 ready-to-use AI agents for <a href="https://opencode.ai">OpenCode</a> and <a href="https://docs.anthropic.com/en/docs/claude-code/overview">Claude Code</a>. Code review, security auditing, documentation, refactoring, testing, cloud operations, mobile development, and more.</p>

<h2 align ="center">Installation</h2>

<h3>via npx (no install required)</h3>

<pre><code># Install all 91 agents to OpenCode (default)
npx @xscriptor/ai-agents

# Install to Claude Code
npx @xscriptor/ai-agents --anthropic

# Install to current project
npx @xscriptor/ai-agents --project

# Specific groups only
npx @xscriptor/ai-agents --groups general,web/security

# Preview without copying
npx @xscriptor/ai-agents --dry-run</code></pre>

<h3>via npm (global install)</h3>

<pre><code>npm install -g @xscriptor/ai-agents
install-agents
install-agents --anthropic</code></pre>

<h3>via clone</h3>

<pre><code>git clone https://github.com/xscriptor/ai.git
cd ai
./opencode/scripts/install-agents.sh</code></pre>

<h2 align ="center">Usage</h2>

<h3>OpenCode</h3>

<pre><code>@code-reviewer review this pull request
@web-vulnerability-hunter test the login endpoint
@react-specialist review this component
@incident-response investigate the alert</code></pre>

<h3>Claude Code</h3>

<pre><code>/xscriptor
/devx
/samurai</code></pre>

<h2 align ="center">Package Structure</h2>

<pre><code>@xscriptor/ai-agents/
  bin/install-agents.js     # CLI for npx/npm installation
  opencode/                 # 91 agents for OpenCode
    agents/                 #   Markdown files with YAML frontmatter
    skills/                 #   SKILL.md definitions
    scripts/                #   Utility scripts
  anthropic/                # 3 skills for Claude Code
    skills/                 #   Directory-per-skill with SKILL.md
  package.json</code></pre>

<h2 align ="center">License</h2>

<p>MIT</p>
