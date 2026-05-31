<h1>Skills</h1>

<p>Reusable <a href="https://opencode.ai/docs/skills">OpenCode SKILL.md definitions</a> organized by domain. Skills are loaded on-demand by the agent via the built-in <code>skill</code> tool when relevant to the task.</p>

<p>Skills follow the same organization as agents, using a <code>web/</code> category prefix:</p>

<table>
  <thead>
    <tr>
      <th>Domain</th>
      <th>Directory</th>
      <th>Skill</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Design / Literature</td>
      <td><code>web/literature/</code></td>
      <td><code>xscriptor</code></td>
      <td>Design system conventions, component architecture, styling patterns, and UI development guidelines</td>
    </tr>
    <tr>
      <td>Development</td>
      <td><code>web/dev/</code></td>
      <td><code>devx</code></td>
      <td>Development workflows, code structure, platform mapping, and project conventions</td>
    </tr>
    <tr>
      <td>Cybersecurity</td>
      <td><code>web/cybersec/</code></td>
      <td><code>samurai</code></td>
      <td>Security architecture, backend/component patterns, database schema, and design tokens</td>
    </tr>
  </tbody>
</table>

<h2>Installation</h2>

<h3>Remote (no clone)</h3>

<pre><code># Clone skills directory only
git clone --depth 1 --filter=blob:none --sparse https://github.com/xscriptor/ai.git
cd ai/skills

# Copy to OpenCode skills directory
cp -r web/* ~/.config/opencode/skills/</code></pre>

<h3>Clone and install</h3>

<pre><code>git clone https://github.com/xscriptor/ai.git
cd ai/skills
cp -r web/* ~/.config/opencode/skills/</code></pre>

<h3>Per-project installation</h3>

<pre><code>cp -r skills/web/literature/xscriptor .opencode/skills/
cp -r skills/web/dev/devx .opencode/skills/</code></pre>

<h2>Usage</h2>

<p>Skills are loaded automatically when the agent determines they are relevant. You can also invoke them directly:</p>

<pre><code>/xscriptor
/devx
/samurai</code></pre>

<h2>Structure</h2>

<p>Each skill is a directory containing a <code>SKILL.md</code> entrypoint with optional supporting files:</p>

<pre><code>web/
  literature/
    xscriptor/
      SKILL.md
      references/
  dev/
    devx/
      SKILL.md
      references/
  cybersec/
    samurai/
      SKILL.md
      references/</code></pre>

<h2>Deep Dive References</h2>

<p>For in-depth development of each skill with minimalist examples and extended documentation:</p>

<ul>
  <li><a href="https://dev.xscriptor.com/en/resources/ai/skills/devx/">dev.xscriptor.com/en/resources/ai/skills/devx/</a></li>
  <li><a href="https://dev.xscriptor.com/en/resources/ai/skills/xscriptor/">dev.xscriptor.com/en/resources/ai/skills/xscriptor/</a></li>
  <li><a href="https://dev.xscriptor.com/en/resources/ai/skills/samurai/">dev.xscriptor.com/en/resources/ai/skills/samurai/</a></li>
</ul>

<h2>Related Resources</h2>

<ul>
  <li><a href="https://opencode.ai/docs/skills">OpenCode Skills Documentation</a></li>
  <li><a href="../agents/">Agents</a></li>
  <li><a href="https://github.com/xscriptor/ai">github.com/xscriptor/ai</a></li>
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

