# 🤝 Contributing to Digital Dropshipping OS

Thank you for your interest in contributing to the **Digital Dropshipping Operating System**! We welcome contributions from developers, growth marketers, and digital product operators worldwide.

---

## 🛠️ How to Contribute

### 1. Reporting Bugs
- Check existing issues before opening a new one.
- Use the **Bug Report** template with steps to reproduce, expected vs. actual behavior, and environment details.

### 2. Suggesting Features
- Open an issue labeled `enhancement` outlining the problem, suggested solution, and alternatives considered.

### 3. Submitting Pull Requests (PRs)
1. Fork the repository and create your feature branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Install dependencies and verify locally:
   ```bash
   cd web-engine
   npm install
   npm run build
   ```
3. Commit your changes using conventional commit messages:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation updates
   - `perf:` for performance improvements
4. Push to your fork and submit a PR to `main`.
5. Ensure all automated GitHub Actions CI checks pass!

---

## 📜 Code Style & Standards

- **React 19 & TypeScript**: Strict typing, no implicit `any`.
- **Anti-Slop Design**: Follow the 57-gate slop test in `.agents/skills/anti-slop-design/SKILL.md`. Avoid generic AI styling; maintain clean mobile typography and 90+ Lighthouse mobile performance.
- **Zero Secrets**: Never commit `.env` or credentials.
