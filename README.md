<h1>Xscriptor AI</h1>

<p>91 ready-to-use AI agents for <a href="https://opencode.ai">OpenCode</a> and <a href="https://docs.anthropic.com/en/docs/claude-code/overview">Claude Code</a>, plus reusable skills, scripts, and an npm publishable package.</p>

<p>Repository: <a href="https://github.com/xscriptor/ai">github.com/xscriptor/ai</a></p>

<h2>Structure</h2>

<table>
  <thead><tr><th>Directory</th><th>Purpose</th><th>Format</th></tr></thead>
  <tbody>
    <tr><td><a href="opencode/"><code>opencode/</code></a></td><td>91 agents + skills + scripts for OpenCode</td><td>`.md` with YAML frontmatter</td></tr>
    <tr><td><a href="anthropic/"><code>anthropic/</code></a></td><td>3 adapted skills for Claude Code</td><td>`name/SKILL.md` directories</td></tr>
    <tr><td><a href="packages/ai-agents/"><code>packages/ai-agents/</code></a></td><td>npm package for npx/npm distribution</td><td>`package.json` + CLI</td></tr>
  </tbody>
</table>

<h2>Quick Start</h2>

<pre><code># OpenCode: install all agents globally
npx @xscriptor/ai-agents

# Claude Code: install skills
npx @xscriptor/ai-agents --anthropic

# Clone and install manually
git clone https://github.com/xscriptor/ai.git
cd ai/opencode && ./scripts/install-agents.sh</code></pre>

<h2>Platforms</h2>

<ul>
  <li><strong><a href="opencode/agents/README.md">OpenCode Agents</a></strong> — 91 agents across 22 groups (code review, security, frontend, backend, mobile, cloud, etc.)</li>
  <li><strong><a href="anthropic/README.md">Claude Code Skills</a></strong> — 3 adapted skills (xscriptor, devx, samurai) in Claude Code format</li>
</ul>

<h2>npm Package</h2>

<p>Published as <code>@xscriptor/ai-agents</code>:</p>

<pre><code>npm install -g @xscriptor/ai-agents
install-agents           # OpenCode
install-agents --anthropic  # Claude Code</code></pre>
