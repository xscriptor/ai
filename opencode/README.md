<h1>OpenCode Agents &amp; Tools</h1>

<p>91 ready-to-use <a href="https://opencode.ai/docs/agents">OpenCode agents</a>, skills, and scripts organized across 22 specialization groups. This is the <code>opencode/</code> directory of the <a href="https://github.com/xscriptor/ai">xscriptor/ai</a> monorepo.</p>

<p>Also available as: <code>npx @xscriptor/ai-agents</code></p>

<h2>Contents</h2>

<table>
  <thead><tr><th>Path</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><a href="agents/"><code>agents/</code></a></td><td>91 agent markdown files with YAML frontmatter (22 groups)</td></tr>
    <tr><td><a href="skills/"><code>skills/</code></a></td><td>Reusable SKILL.md definitions (xscriptor, devx, samurai)</td></tr>
    <tr><td><a href="scripts/"><code>scripts/</code></a></td><td>Utility scripts (install, validate, generate, stats, backup, docs, diff, audit)</td></tr>
  </tbody>
</table>

<h2>Agent Groups</h2>

<table>
  <thead><tr><th>Group</th><th>Agents</th><th>Scope</th></tr></thead>
  <tbody>
    <tr><td><strong>general</strong></td><td>11</td><td>code-reviewer, security-auditor, docs-writer, test-writer, pr-manager, etc.</td></tr>
    <tr><td><strong>languages</strong></td><td>6</td><td>Python, TypeScript, Go, Java, Kotlin, Rust</td></tr>
    <tr><td><strong>web/security</strong></td><td>4</td><td>web-security, api-security, auth-security, appsec</td></tr>
    <tr><td><strong>web/architecture</strong></td><td>4</td><td>software-architect, system-designer, scalability, reliability</td></tr>
    <tr><td><strong>web/frontend</strong></td><td>7</td><td>react, vue, nextjs, angular, css/ui, perf, a11y</td></tr>
    <tr><td><strong>web/backend</strong></td><td>6</td><td>api-designer, database, microservices, devops, mq, caching</td></tr>
    <tr><td><strong>mobile</strong></td><td>4</td><td>iOS, Android, React Native, Flutter</td></tr>
    <tr><td><strong>data-ml</strong></td><td>4</td><td>data-engineer, ml-engineer, mlops, data-scientist</td></tr>
    <tr><td><strong>cloud</strong></td><td>5</td><td>kubernetes, sre, gitops, service-mesh, cloud-architect</td></tr>
    <tr><td><strong>testing</strong></td><td>4</td><td>e2e, visual, performance, chaos</td></tr>
    <tr><td><strong>content</strong></td><td>4</td><td>technical-writer, content-editor, content-reviser, translator</td></tr>
    <tr><td><strong>observability</strong></td><td>1</td><td>OpenTelemetry, PromQL, dashboards</td></tr>
    <tr><td><strong>compliance</strong></td><td>2</td><td>SOC 2, GDPR</td></tr>
    <tr><td><strong>security/recon</strong></td><td>1</td><td>OSINT, surface mapping</td></tr>
    <tr><td><strong>security/web-pentest</strong></td><td>6</td><td>SQLi/XSS/SSRF, API, auth, WAF, cloud, server-side</td></tr>
    <tr><td><strong>security/mobile-pentest</strong></td><td>3</td><td>iOS, Android, XPC, keystore</td></tr>
    <tr><td><strong>security/desktop</strong></td><td>6</td><td>Win/Linux/macOS exploit, binary, Python</td></tr>
    <tr><td><strong>security/red-team</strong></td><td>4</td><td>adversary sim, social eng, malware, physical</td></tr>
    <tr><td><strong>security/blue-team</strong></td><td>4</td><td>threat hunting, IR, forensics, detection</td></tr>
    <tr><td><strong>embedded</strong></td><td>2</td><td>C/C++, embedded Rust</td></tr>
    <tr><td><strong>game-dev</strong></td><td>2</td><td>Unity, Unreal</td></tr>
    <tr><td><strong>graphql</strong></td><td>1</td><td>schema, resolvers, DataLoader, caching</td></tr>
  </tbody>
</table>

<h2>Quick Start</h2>

<h3>Via install script</h3>

<pre><code>git clone https://github.com/xscriptor/ai.git
cd ai/opencode
./scripts/install-agents.sh                    # All 91 agents
./scripts/install-agents.sh --dry-run           # Preview
./scripts/install-agents.sh --groups general,web/security  # Select groups
./scripts/install-agents.sh --project           # Project-level install
./scripts/install-agents.sh --interactive       # Interactive selection</code></pre>

<h3>Via npx (no clone)</h3>

<pre><code>npx @xscriptor/ai-agents
npx @xscriptor/ai-agents --groups general,web/security
npx @xscriptor/ai-agents --project</code></pre>

<h3>Via remote script</h3>

<pre><code>curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/opencode/scripts/install-agents.sh | bash
curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/opencode/scripts/install-agents.sh | bash -s -- --project</code></pre>

<h3>Manual copy</h3>

<pre><code>cp agents/general/code-reviewer.md ~/.config/opencode/agents/
cp agents/web/security/web-security-auditor.md ~/.config/opencode/agents/</code></pre>

<h2>Skills</h2>

<p>Install OpenCode skills (xscriptor, devx, samurai with references):</p>

<pre><code>npx @xscriptor/ai-agents --skills
# or
./scripts/install-agents.sh --skills</code></pre>

<h2>For Claude Code</h2>

<p>Claude Code uses directory-per-skill format. Install via:</p>

<pre><code>npx @xscriptor/ai-agents --anthropic
# or
cp -r ../anthropic/skills/* ~/.claude/skills/</code></pre>

<h2>Related</h2>

<ul>
  <li><a href="https://github.com/xscriptor/ai">Monorepo root: github.com/xscriptor/ai</a></li>
  <li><a href="../anthropic/">Claude Code skills</a></li>
  <li><a href="https://opencode.ai/docs/agents">OpenCode Agents Guide</a></li>
  <li><a href="https://www.npmjs.com/package/@xscriptor/ai-agents">npm: @xscriptor/ai-agents</a></li>
</ul>
