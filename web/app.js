// 顯示框在指定位置
function showHighlightBox(left, top, width, height) {
  const box = document.getElementById('highlight-box');
  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.classList.remove('hidden'); // 顯示框
}

// 隱藏框的功能
function hideHighlightBox() {
  document.getElementById('highlight-box').classList.add('hidden');
}

// 顯示框的位置信息
function getHighlightBoxPosition() {
  const box = document.getElementById('highlight-box');
  const rect = box.getBoundingClientRect(); // 取得框的邊界信息
  console.log('highlight box position:');
  console.log(`Left: ${rect.left}px`);
  console.log(`Top: ${rect.top}px`);
  console.log(`Right: ${rect.right}px`);
  console.log(`Bottom: ${rect.bottom}px`);
  console.log(`Width: ${rect.width}px`);
  console.log(`Height: ${rect.height}px`);
}

// 當滑鼠移出或點擊其他區域時，可以調用此函數隱藏框
document.addEventListener('click', (event) => {
  if (!event.target.closest('.university-label')) {
    hideHighlightBox();
  }
});
