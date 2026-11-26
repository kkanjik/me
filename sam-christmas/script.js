

const LINKS = {
  discord: "https://discord.com/users/1353622158730985474"
};

const PROMPT_LINE1 = `<span class="prompt">┌──(</span><span class="prompt">bary</span><span class="prompt-at">㉿</span><span class="prompt-host">kali</span><span class="prompt">)-[</span><span class="prompt-path">~</span><span class="prompt">]</span>`;
const PROMPT_LINE2 = `<span class="prompt-sym">└─</span><span class="prompt">$</span>`;
const PROMPT = PROMPT_LINE1 + "\n" + PROMPT_LINE2;


const TERMINAL_SCRIPT = [
  { type: "boot", content: `<span class="term-dim">Kali GNU/Linux — terminal session opened</span>`, delay: 0 },
  { type: "boot", content: `<span class="term-dim">Last login: Dec 25 00:00:01 on tty1</span>`, delay: 60 },
  { type: "bar",  content: "initializing environment", delay: 100 },
  { type: "boot", content: `<span class="term-ok">[ OK ]</span> <span class="term-dim">environment ready</span>`, delay: 80 },
  { type: "blank", delay: 220 },
  { type: "cmd",  content: "neofetch", delay: 500 },
  { type: "out", cls: "art-line", delay: 20, content: `⠀⠀⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⠛⠛⠛⠻⠿⠷⠶⢶⣶⣶⣤⣤⣤⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-hi">bary</span><span class="term-dim">@</span><span class="prompt-host">kali</span>` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠛⠛⠛⠛⠿⠿⣿⣶⣶⣶⣶⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-dim">────────────────────</span>` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠻⠿⣿⣷⣦⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-hi">os</span>      Kali Linux x86_64` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣄⣀⣀⣈⣉⠛⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-hi">kernel</span>  6.11.2-amd64` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣴⠶⠶⠿⠿⠛⠛⠛⠛⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠛⠛⠛⠛⠻⠿⠧⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-hi">shell</span>   zsh 5.9` },
  { type: "out", cls: "art-line", delay: 10, content: `⣤⣤⠶⠶⠟⠛⠛⠋⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣤⣴⣶⣶⡎⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-hi">focus</span>   sec · game sys · RE` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⣶⣿⣿⣿⠿⠿⠿⠿⠟⠛⠛⠓⠘⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-hi">langs</span>   <span class="term-gold">C++ · C · Python · Lua · JS</span>` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣤⣶⣶⣿⠿⠿⠛⠛⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠂⠄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span class="term-hi">uptime</span>  since 2026` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⠿⠟⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣷⣦⣤⣤⣤⣤⣤⣄⣀⣀⠀⠀⠀⠀⠈⠑⠢⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  <span style="background:#ff5555;padding:1px 6px">&nbsp;</span> <span style="background:#68ff68;padding:1px 6px">&nbsp;</span> <span style="background:#68daff;padding:1px 6px">&nbsp;</span> <span style="background:#d4f5d4;padding:1px 6px">&nbsp;</span>` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡶⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣷⣶⣼⣄⠀⢠⠈⠑⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⡿⠟⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠻⢿⣿⣿⣾⣷⣄⢤⠙⢦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠄⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⢿⣿⣷⣤⣉⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⣿⣿⣿⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⣿⣷⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣦⣄⣀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠟⠉⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⣷⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣶⣶⣶⣶⣦⣤⣤⣤⣤⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠛⠛⠛⠛⠛⠛⠛⠻⠿⠿⢿⣿⣿⣿⣿⣿⠿⢷⣶⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠿⢿⣶⣤⡉⠙⠻⢷⣦⣄⡀⠀⠀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣦⡄⠀⠈⠙⠿⣦⡀⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠈⠻⣦⡀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⣷⡄⠀⠀⠀⠈⢿⡄⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⡄⠀⠀⠀⠀⢻⡄` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⢣` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣇⠀⠀⠀⠀⠘` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣇⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠀⠀` },
  { type: "out", cls: "art-line", delay: 10, content: `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀` },
  { type: "blank", delay: 180 },
  { type: "cmd",  content: "cat contact.txt", delay: 500 },
  { type: "link-row", key: "discord", label: "discord", sub: "_nsj", delay: 60 },
  { type: "blank", delay: 240 },
  { type: "cmd",  content: "echo 'merry christmas 🎄'", delay: 500 },
  { type: "out",  content: `<span class="term-gold">merry christmas 🎄</span>`, delay: 80 },
  { type: "blank", delay: 10 },
];

const output = document.getElementById("term-output");
const activeLine = document.getElementById("term-active-line");

function appendLine(html, extraClass = "") {
  const d = document.createElement("div");
  d.className = "term-line" + (extraClass ? " " + extraClass : "");
  d.innerHTML = html;
  output.appendChild(d);
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function typeLine(html) {
  // show kali two-line prompt, type command on second line
  activeLine.innerHTML =
    `<div class="term-line">${PROMPT_LINE1}</div>` +
    `<div class="term-line" id="term-cmd-row">${PROMPT_LINE2} </div>`;

  const cmdRow = activeLine.querySelector("#term-cmd-row");
  const textNode = document.createTextNode("");
  cmdRow.appendChild(textNode);
  const cursorSpan = document.createElement("span");
  cursorSpan.className = "cursor";
  cmdRow.appendChild(cursorSpan);

  const stripped = html.replace(/<[^>]+>/g, "");
  for (let i = 0; i <= stripped.length; i++) {
    textNode.textContent = stripped.slice(0, i);
    await sleep(36 + Math.random() * 22);
  }
  cursorSpan.remove();
}

async function runBootBar(label) {
  const wrap = document.createElement("div");
  wrap.className = "term-line";
  wrap.innerHTML = `<span class="term-dim">${label}&hellip;</span> <span class="boot-bar"><span class="boot-bar-fill" id="bfill"></span></span>`;
  output.appendChild(wrap);
  const fill = wrap.querySelector("#bfill");
  for (let p = 0; p <= 100; p += Math.ceil(Math.random() * 14 + 4)) {
    fill.style.width = Math.min(p, 100) + "%";
    await sleep(28 + Math.random() * 30);
  }
  fill.style.width = "100%";
  await sleep(120);
  wrap.innerHTML = `<span class="term-ok">[ OK ]</span> <span class="term-dim">${label} — done</span>`;
}

async function runTerminal() {
  activeLine.innerHTML = '<span class="cursor"></span>';

  for (const step of TERMINAL_SCRIPT) {
    await sleep(step.delay || 0);

    if (step.type === "blank") {
      appendLine("", "blank");

    } else if (step.type === "boot") {
      appendLine(`<span class="term-dim">${step.content}</span>`);

    } else if (step.type === "bar") {
      await runBootBar(step.content);

    } else if (step.type === "cmd") {
      await typeLine(step.content);
      // commit typed line to output
      const stripped = step.content.replace(/<[^>]+>/g,"");
      appendLine(PROMPT_LINE1);
      appendLine(`${PROMPT_LINE2} ${stripped}`);
      activeLine.innerHTML = '<span class="cursor"></span>';

    } else if (step.type === "out") {
      appendLine(step.content, step.cls || "");

    } else if (step.type === "link-row") {
      const href = LINKS[step.key] || "#";
      const sub = step.sub ? ` <span class="term-dim">— ${step.sub}</span>` : "";
      const inner = href !== "#"
        ? `<a href="${href}" target="_blank" rel="noopener">${step.label}</a>${sub}`
        : `<span class="dim">${step.label}</span>${sub}`;
      appendLine(`  <span class="term-gold">→</span> ${inner}`);
    }
  }

  // idle blinking cursor at end — kali two-line prompt
  activeLine.innerHTML =
    `<div class="term-line">${PROMPT_LINE1}</div>` +
    `<div class="term-line">${PROMPT_LINE2} <span class="cursor"></span></div>`;
}

runTerminal();

const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let flakes = [];
let width = 0;
let height = 0;

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  const count = Math.min(150, Math.max(45, Math.floor(width / 11)));
  flakes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 0.7 + Math.random() * 2.1,
    speed: 0.2 + Math.random() * 0.75,
    drift: (Math.random() - 0.5) * 0.4,
    alpha: 0.2 + Math.random() * 0.6,
    star: Math.random() < 0.16,
    spin: Math.random() * Math.PI
  }));
}

function drawFlake(f) {
  ctx.fillStyle = "rgba(232,238,248," + f.alpha + ")";
  if (!f.star) {
    ctx.beginPath();
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  ctx.save();
  ctx.translate(f.x, f.y);
  ctx.rotate(f.spin);
  ctx.strokeStyle = "rgba(232,238,248," + (f.alpha * 0.85) + ")";
  ctx.lineWidth = 0.8;
  const size = f.r * 2.4;
  for (let i = 0; i < 3; i++) {
    const angle = (Math.PI / 3) * i;
    ctx.beginPath();
    ctx.moveTo(-Math.cos(angle) * size, -Math.sin(angle) * size);
    ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
    ctx.stroke();
  }
  ctx.restore();
}

function drawSnow() {
  ctx.clearRect(0, 0, width, height);
  for (const f of flakes) {
    drawFlake(f);
    f.y += f.speed;
    f.x += f.drift + Math.sin(f.y / 120) * 0.12;
    f.spin += 0.004;
    if (f.y > height + 5) { f.y = -5; f.x = Math.random() * width; }
    if (f.x > width + 5) f.x = -5;
    if (f.x < -5) f.x = width + 5;
  }
  requestAnimationFrame(drawSnow);
}

resize();
window.addEventListener("resize", resize);
if (!reducedMotion) requestAnimationFrame(drawSnow);
else ctx.clearRect(0, 0, width, height);

function updateCountdown() {
  const now    = new Date();
  const today  = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // midnight today
  let xmas     = new Date(now.getFullYear(), 11, 25); // Dec 25 midnight this year
  if (today > xmas) xmas = new Date(now.getFullYear() + 1, 11, 25); // already past, next year
  const days   = Math.round((xmas - today) / 86400000);
  document.getElementById("days").textContent = String(days).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 60000);
document.getElementById("year").textContent = new Date().getFullYear();


