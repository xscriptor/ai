<h1>Anthropic / Claude Code</h1>

<p>Skills and configurations adapted for <a href="https://docs.anthropic.com/en/docs/claude-code/overview">Claude Code</a> by Anthropic.</p>

<h2>Skills</h2>

<p>Each skill is a directory with <code>SKILL.md</code> entrypoint plus optional supporting references, following the Claude Code skill format.</p>

<table>
  <thead><tr><th>Skill</th><th>Directory</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td>xscriptor</td><td><code>skills/xscriptor/</code></td><td>Design system conventions, component architecture, and UI development guidelines</td></tr>
    <tr><td>devx</td><td><code>skills/devx/</code></td><td>Development workflows, code structure, platform mapping</td></tr>
    <tr><td>samurai</td><td><code>skills/samurai/</code></td><td>Security architecture, backend patterns, database schema</td></tr>
  </tbody>
</table>

<h2>Installation</h2>

<pre><code># Personal (all projects)
cp -r skills/* ~/.claude/skills/

# Project-specific
cp -r skills/* .claude/skills/</code></pre>

<p>Then invoke with <code>/skill-name</code> in Claude Code.</p>

<h2>Related</h2>

<ul>
  <li><a href="../opencode/">OpenCode agents (91 agents)</a></li>
  <li><a href="https://github.com/xscriptor/ai">github.com/xscriptor/ai</a></li>
</ul>
