<h1>Xscriptor AI</h1>

<p>A collection of <strong>91 ready-to-use <a href="https://opencode.ai/docs/agents">OpenCode agents</a></strong> organized across 22 specialization groups, plus reusable skills and configurations for AI-assisted development workflows.</p>

<p>Repository: <a href="https://github.com/xscriptor/ai">github.com/xscriptor/ai</a></p>

<h2 id="contents">Table of Contents</h2>

<ul>
  <li><a href="#agents">Agents</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#quick-start">Quick Start</a></li>
  <li><a href="#remote-install">Remote Install</a></li>
  <li><a href="#manual-install">Manual Install</a></li>
  <li><a href="#related-documents">Related Documents</a></li>
</ul>

<h2 id="agents">Agents</h2>

<p>91 agents across 22 groups covering the full development lifecycle:</p>

<table>
  <thead><tr><th>Category</th><th>Groups</th><th>Agents</th></tr></thead>
  <tbody>
    <tr><td><strong>General</strong></td><td>general</td><td>11</td></tr>
    <tr><td><strong>Languages</strong></td><td>languages</td><td>6</td></tr>
    <tr><td><strong>Web</strong></td><td>security, architecture, frontend, backend</td><td>21</td></tr>
    <tr><td><strong>Mobile</strong></td><td>mobile</td><td>4</td></tr>
    <tr><td><strong>Data & ML</strong></td><td>data-ml</td><td>4</td></tr>
    <tr><td><strong>Cloud</strong></td><td>cloud</td><td>5</td></tr>
    <tr><td><strong>Testing</strong></td><td>testing</td><td>4</td></tr>
    <tr><td><strong>Content</strong></td><td>content</td><td>4</td></tr>
    <tr><td><strong>Observability</strong></td><td>observability</td><td>1</td></tr>
    <tr><td><strong>Compliance</strong></td><td>compliance</td><td>2</td></tr>
    <tr><td><strong>Security Recon</strong></td><td>security/recon</td><td>1</td></tr>
    <tr><td><strong>Security Web Pentest</strong></td><td>security/web-pentest</td><td>6</td></tr>
    <tr><td><strong>Security Mobile Pentest</strong></td><td>security/mobile-pentest</td><td>3</td></tr>
    <tr><td><strong>Security Desktop</strong></td><td>security/desktop</td><td>6</td></tr>
    <tr><td><strong>Security Red Team</strong></td><td>security/red-team</td><td>4</td></tr>
    <tr><td><strong>Security Blue Team</strong></td><td>security/blue-team</td><td>4</td></tr>
    <tr><td><strong>Embedded</strong></td><td>embedded</td><td>2</td></tr>
    <tr><td><strong>Game Development</strong></td><td>game-dev</td><td>2</td></tr>
    <tr><td><strong>GraphQL</strong></td><td>graphql</td><td>1</td></tr>
  </tbody>
</table>

<p>See the full <a href="agents/README.md">agents documentation</a> for individual agent descriptions.</p>

<h2 id="skills">Skills</h2>

<p>Reusable <a href="skills/">SKILL.md definitions</a> for project-specific workflows, conventions, and knowledge bases. Skills are loaded on-demand by the agent via the built-in <code>skill</code> tool.</p>

<p>Organized by domain following the same structure as agents:</p>

<ul>
  <li><code>web/literature/xscriptor</code> - Design system and UI conventions</li>
  <li><code>web/dev/devx</code> - Development workflows and code conventions</li>
  <li><code>web/cybersec/samurai</code> - Security patterns and architecture</li>
</ul>

<h2 id="quick-start">Quick Start</h2>

<h3>Via Install Script (Recommended)</h3>

<pre><code># Clone the repo
git clone https://github.com/xscriptor/ai.git
cd ai

# Install all 91 agents globally to ~/.config/opencode/agents/
./scripts/install-agents.sh

# Or install only specific groups
./scripts/install-agents.sh --groups general,web/security

# Or install for the current project
./scripts/install-agents.sh --project

# Preview what will be installed
./scripts/install-agents.sh --dry-run</code></pre>

<h3>Via Remote Script</h3>

<pre><code># Download and run the install script directly from GitHub
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash

# With specific groups
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash -s -- --groups general,web/security,mobile

# Dry run remotely
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash -s -- --dry-run</code></pre>

<h3>Usage in OpenCode</h3>

<pre><code>@code-reviewer review this pull request
@security-auditor scan the authentication module
@react-specialist review this component
@web-vulnerability-hunter test the login endpoint
@incident-response investigate the alert</code></pre>

<h2 id="remote-install">Remote Install</h2>

<p>Without cloning the repository:</p>

<pre><code># Install all agents
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash

# Install to current project instead of global
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash -s -- --project

# Install to custom directory
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash -s -- --dest ~/.config/opencode/agents</code></pre>

<h2 id="manual-install">Manual Install</h2>

<p>Without the install script:</p>

<pre><code># Clone the specific folder you need
git clone --depth 1 --filter=blob:none --sparse https://github.com/xscriptor/ai.git
cd ai
git sparse-checkout set agents/general agents/web/security

# Copy specific agents to OpenCode
cp agents/general/code-reviewer.md ~/.config/opencode/agents/
cp agents/web/security/web-security-auditor.md ~/.config/opencode/agents/

# Or copy entire groups
cp agents/general/*.md ~/.config/opencode/agents/
cp agents/languages/*.md ~/.config/opencode/agents/

# Project-level install (committable to .git)
cp agents/general/*.md .opencode/agents/</code></pre>

<h2 id="related-documents">Related Documents</h2>

<ul>
  <li><a href="agents/README.md">Full Agents Documentation</a></li>
  <li><a href="skills/README.md">Skills Documentation</a></li>
  <li><a href="https://opencode.ai/docs/agents">OpenCode Agents Guide</a></li>
  <li><a href="https://opencode.ai/docs/permissions">OpenCode Permissions Guide</a></li>
  <li><a href="https://opencode.ai/docs/skills">OpenCode Skills Guide</a></li>
  <li><a href="https://github.com/xscriptor/ai">Repository: github.com/xscriptor/ai</a></li>
</ul>

<div id="x" align="center">
<h2>X</h2>

<a href="https://dev.xscriptor.com">
  <img src="https://xscriptor.github.io/icons/icons/code/product-design/xsvg/verified-filled.svg" width="24" alt="X Web" />
</a>
 & 
<a href="https://github.com/xscriptor">
  <img src="https://xscriptor.github.io/icons/icons/code/product-design/xsvg/github.svg" width="24" alt="X Github Profile" />
</a>
 & 
<a href="https://www.xscriptor.com">
  <img src="https://xscriptor.github.io/icons/icons/code/product-design/xsvg/quotes.svg" width="24" alt="Xscriptor web" />
</a>

</div>
