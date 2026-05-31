<h1>Xscriptor AI</h1>

<p>91 ready-to-use AI agents for <a href="https://opencode.ai">OpenCode</a> and <a href="https://docs.anthropic.com/en/docs/claude-code/overview">Claude Code</a>, plus reusable skills, scripts, and an npm package.</p>

<p>Repository: <a href="https://github.com/xscriptor/ai">github.com/xscriptor/ai</a><br>
npm: <code>npx @xscriptor/ai-agents</code></p>

<h2>Structure</h2>

<table>
  <thead><tr><th>Path</th><th>Content</th></tr></thead>
  <tbody>
    <tr><td><a href="agents/"><code>agents/</code></a></td><td>91 agents (22 groups) for OpenCode + Claude Code</td></tr>
    <tr><td><a href="skills/"><code>skills/</code></a></td><td>3 SKILL.md (xscriptor, devx, samurai) for both platforms</td></tr>
    <tr><td><a href="skills/"><code>skills/</code></a></td><td>SKILL.md definitions (ambas plataformas)</td></tr>
    <tr><td><a href="scripts/"><code>scripts/</code></a></td><td>8 utility scripts (install, validate, generate, etc.)</td></tr>
    <tr><td><a href="packages/ai-agents/"><code>packages/ai-agents/</code></a></td><td>npm package @xscriptor/ai-agents</td></tr>
  </tbody>
</table>

<h2>Quick Start</h2>

<pre><code># npx (no clone)
npx @xscriptor/ai-agents
npx @xscriptor/ai-agents --skills
npx @xscriptor/ai-agents --anthropic

# Clone
git clone https://github.com/xscriptor/ai.git
cd ai
./scripts/install-agents.sh

# Remote
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash</code></pre>
