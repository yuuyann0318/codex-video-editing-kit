// v1.0.1の配布確認情報。本文はindex.html内の初心者向け導入文を正とする。
const officialZipSha = '86d5242b55cef329a5bbb2237c4caa3b49f7bfadfd5708f33584f3949d28d019';
const officialZipName = 'codex-video-starter-v1.0.1.zip';

const shaNode = document.querySelector('[data-official-sha]');
if (shaNode) shaNode.textContent = officialZipSha;
const zipNode = document.querySelector('[data-official-zip]');
if (zipNode) zipNode.textContent = officialZipName;
