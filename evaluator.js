// URLパラメータから動画URL取得
const params = new URLSearchParams(window.location.search);
const videoURL = params.get("video");

if (videoURL) {
  document.getElementById("videoSource").src = videoURL;
  document.getElementById("lectureVideo").load();
} else {
  document.getElementById("resultText").textContent = "動画URLが指定されていません。";
}

// 擬似評価関数（ランダム）
function analyzeSpeechSpeed() {
  const results = ["速い", "普通", "遅い"];
  const picked = results[Math.floor(Math.random() * results.length)];
  const message = "スピーチ速度：" + picked;

  // 表示更新
  document.getElementById("resultText").textContent = message;

  // App Inventor連携
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(message);
  } else {
    console.warn("AppInventorインターフェースが見つかりません。");
  }
}