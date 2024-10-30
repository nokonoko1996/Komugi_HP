'use strict';
// ラジオボタンの要素を取得
const mailRadio = document.getElementById('select_mail');
const xRadio = document.getElementById('select_x');
const slackRadio = document.getElementById('select_slack');

// 追加入力欄を作成する関数
function createAdditionalInput(type) {
  // 既存の追加入力欄があれば削除
  const existingInput = document.querySelector('.additional-input');
  if (existingInput) {
    existingInput.remove();
  }

  const div = document.createElement('div');
  div.className = 'additional-input';
  
  const input = document.createElement('input');
  input.placeholder = type === 'Mail' ? 'メールアドレスを入力'
    : type === 'Twitter' ? 'X(Twitter)のIDを入力'
    : 'Slackのワークスペース名を入力';

  div.appendChild(input);
  document.querySelector('.contact-form').insertBefore(div, document.querySelector('#textarea').parentNode);
}

// ラジオボタンのイベントリスナー
mailRadio.addEventListener('change', () => {
  if (mailRadio.checked) {
    createAdditionalInput('Mail');
  }
});

xRadio.addEventListener('change', () => {
  if (xRadio.checked) {
    createAdditionalInput('Twitter');
  }
});

slackRadio.addEventListener('change', () => {
  if (slackRadio.checked) {
    createAdditionalInput('Slack');
  }
});
