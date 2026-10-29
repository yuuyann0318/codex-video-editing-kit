const officialZipSha='d18ad8ccdd10699748a7e4ff3bd634e91120104cff588070c3d494f873a811d4';
const webInstallPrompt=[
'Codex動画編集スターターを、配布元の確認から始めて導入してください。',
'',
'ZIPの場所:',
'「ここへダウンロードしたZIPの場所を入れる」',
'',
'公式の固定配布元ページ:',
'https://yuuyann0318.github.io/codex-video-editing-kit/',
'',
'ページに表示される正しいZIPのSHA-256:',
officialZipSha,
'',
'次の順で進めてください。',
'',
'1. ZIPはまだ実行しない。',
'2. 公式の固定配布元ページを独立して開き、表示されたZIPのSHA-256が上の64文字と同じか確認する。',
'3. 手元のZIP全体のSHA-256を計算し、ページの表示と64文字すべてを照合する。',
'4. 1文字でも違う場合は、ZIPを一度も実行せず停止する。ZIPを削除し、公式ページから取り直すよう案内する。',
'5. 完全一致した場合だけZIPを実行して導入する。既存の同名スキルは上書きしない。',
'6. 導入時の内部検査は「同梱ファイルの整合性」として扱い、配布元の真正性確認とは分けて報告する。',
'7. 導入先の scripts/doctor.py を実行する。',
'8. Apple SiliconのMacでFFmpegだけ不足している場合は、取得元と通信内容を説明し、キット専用フォルダへ導入する。システム全体は変更しない。',
'9. scripts/run_demo.py --all でアフレコとトークの練習動画を作る。',
'10. MP4を最後までデコードし、字幕が入ったフレームも確認する。',
'11. 外側SHA-256の照合結果、同梱ファイルの整合性、導入先、作成したMP4、通信した取得元、未確認の環境を短く報告する。',
'',
'自動文字起こしの専用環境とモデルは、実際に使う時だけ導入してください。システム全体の設定や元素材は変更しないでください。'
].join('\n');
const installPromptNode=document.querySelector('#installPrompt');
if(installPromptNode)installPromptNode.textContent=webInstallPrompt;
document.querySelectorAll('.main-action .copy-row').forEach(row=>{
  const note=document.createElement('p');
  note.className='copy-help';
  note.textContent='コピーできない場合は、文を長押しして選択し、手動でコピーしてください。';
  row.insertAdjacentElement('afterend',note);
});
const notice=document.querySelector('.notice');
if(notice){
  const card=document.createElement('section');
  card.className='hash-check';
  card.innerHTML='<h2>実行前に、このSHA-256を照合</h2><code>'+officialZipSha+'</code><p>手元のZIPと64文字すべてが一致したときだけ実行します。1文字でも違えば中止し、ZIPを削除して公式ページから取り直します。</p><a class="download" href="assets/SHA256SUMS.txt" download>SHA256SUMS.txtを保存</a>';
  notice.insertAdjacentElement('afterend',card);
}
const firstStep=document.querySelector('.timeline .step');
if(firstStep)firstStep.innerHTML='<span>1</span><b>外側SHAを照合</b><p>表示された64文字と、手元ZIP全体を実行前に比べる。</p>';
const secondStep=document.querySelectorAll('.timeline .step')[1];
if(secondStep)secondStep.querySelector('b').innerHTML='専用先へ<br>導入';
const sampleVideo=document.querySelector('video');
if(sampleVideo)sampleVideo.poster='assets/display/codex-video-starter-sample-poster.jpg';
