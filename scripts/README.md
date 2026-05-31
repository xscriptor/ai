<h1>Scripts</h1>

<p>Utility scripts for managing, validating, generating, and auditing the Xscriptor OpenCode agent ecosystem. All scripts work on macOS, Linux, and Windows (WSL/Git Bash).</p>

<p>Repository: <a href="https://github.com/xscriptor/ai">github.com/xscriptor/ai</a></p>

<hr>

<h2>Table of Contents</h2>

<ul>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#script-reference">Script Reference</a></li>
  <li><a href="#quick-start">Quick Start</a></li>
  <li><a href="#use-cases">Use Cases</a></li>
</ul>

<hr>

<h2 id="installation">Installation</h2>

<h3>Clone the repository</h3>

<pre><code>git clone https://github.com/xscriptor/ai.git
cd ai/scripts</code></pre>

<h3>Run a script</h3>

<pre><code>./install-agents.sh                  # Install all 91 agents to OpenCode
./validate/validate-agents.sh        # Validate agent frontmatter
./stats/agent-stats.py               # Show collection statistics</code></pre>

<h3>Run remotely (no clone)</h3>

<pre><code>curl -fsSL https://raw.githubusercontent.com/xscriptor/ai/main/scripts/install-agents.sh | bash</code></pre>

<hr>

<h2 id="script-reference">Script Reference</h2>

<table>
  <thead>
    <tr>
      <th>Script</th>
      <th>Category</th>
      <th>Description</th>
      <th>Dependencies</th>
      <th>Documentation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>install-agents.sh</code></td>
      <td>Installation</td>
      <td>Installs agents to OpenCode globally, per-project, or to a custom path. Supports remote execution via curl.</td>
      <td>None</td>
      <td><a href="install-agents.sh">inline</a></td>
    </tr>
    <tr>
      <td><code>validate/validate-agents.sh</code></td>
      <td>Quality</td>
      <td>Validates all agent markdown files for correct YAML frontmatter: required fields, temperature range, color format, and permission values.</td>
      <td>None</td>
      <td><a href="validate/README.md">README</a></td>
    </tr>
    <tr>
      <td><code>generate/generate-agent.sh</code></td>
      <td>Creation</td>
      <td>Interactive CLI that prompts for agent metadata and generates a <code>.md</code> file with complete frontmatter and boilerplate prompt body.</td>
      <td>None</td>
      <td><a href="generate/README.md">README</a></td>
    </tr>
    <tr>
      <td><code>stats/agent-stats.py</code></td>
      <td>Analysis</td>
      <td>Generates statistics about the agent collection: counts per group, average lines, temperature distribution, color usage, and permission coverage.</td>
      <td>Python 3</td>
      <td><a href="stats/README.md">README</a></td>
    </tr>
    <tr>
      <td><code>backup/backup-agents.sh</code></td>
      <td>Safety</td>
      <td>Creates a timestamped <code>.tar.gz</code> backup of installed OpenCode agents before any destructive operation.</td>
      <td>tar</td>
      <td><a href="backup/README.md">README</a></td>
    </tr>
    <tr>
      <td><code>docs/build-docs.sh</code></td>
      <td>Documentation</td>
      <td>Aggregates all agent group tables into a single comprehensive markdown or HTML document for offline reference.</td>
      <td>None</td>
      <td><a href="docs/README.md">README</a></td>
    </tr>
    <tr>
      <td><code>diff/diff-agents.sh</code></td>
      <td>Synchronization</td>
      <td>Compares agents installed locally against the repository, showing pending, missing, and modified files.</td>
      <td>None</td>
      <td><a href="diff/README.md">README</a></td>
    </tr>
    <tr>
      <td><code>audit/check-permissions.sh</code></td>
      <td>Security</td>
      <td>Audits agent permissions for security risks: detects <code>edit: allow</code>, <code>bash: allow</code>, missing descriptions, and agents without color.</td>
      <td>None</td>
      <td><a href="audit/README.md">README</a></td>
    </tr>
  </tbody>
</table>

<hr>

<h2 id="quick-start">Quick Start</h2>

<h3>First time setup</h3>

<pre><code># 1. Validate all agents before installing
./validate/validate-agents.sh

# 2. Check statistics
./stats/agent-stats.py

# 3. Backup existing agents
./backup/backup-agents.sh

# 4. Install all agents
./install-agents.sh

# 5. Verify installation
./diff/diff-agents.sh</code></pre>

<h3>Creating a new agent</h3>

<pre><code>./generate/generate-agent.sh --output ../agents/custom
# Edit the generated file to add specific instructions
# Then run validation
./validate/validate-agents.sh</code></pre>

<hr>

<h2 id="use-cases">Use Cases</h2>

<table>
  <thead>
    <tr>
      <th>Goal</th>
      <th>Scripts involved</th>
      <th>Workflow</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Install agents on a new machine</td>
      <td><code>install</code>, <code>diff</code></td>
      <td>Run <code>install-agents.sh</code>, verify with <code>diff-agents.sh</code></td>
    </tr>
    <tr>
      <td>Contribute a new agent</td>
      <td><code>generate</code>, <code>validate</code>, <code>audit</code></td>
      <td>Generate with <code>generate-agent.sh</code>, validate frontmatter, audit permissions, submit PR</td>
    </tr>
    <tr>
      <td>Audit existing installation</td>
      <td><code>audit</code>, <code>diff</code>, <code>stats</code></td>
      <td>Run <code>check-permissions.sh</code>, compare versions with <code>diff-agents.sh</code>, review stats</td>
    </tr>
    <tr>
      <td>Update after repo pull</td>
      <td><code>backup</code>, <code>diff</code>, <code>install</code></td>
      <td>Backup existing, diff against new, install updates</td>
    </tr>
    <tr>
      <td>Generate offline docs</td>
      <td><code>docs</code></td>
      <td>Run <code>build-docs.sh</code> to produce a portable reference</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>Related Resources</h2>

<ul>
  <li><a href="../agents/README.md">Agent Index</a> — complete list of all 91 agents</li>
  <li><a href="../skills/README.md">Skills</a> — reusable SKILL.md definitions</li>
  <li><a href="https://opencode.ai/docs/agents">OpenCode Agents Guide</a></li>
</ul>
