// 페이지 내에서 특별한 동작이 필요하다면 여기에 추가하세요.
// 현재는 정적 안내 페이지이므로 별도 스크립트는 필요 없습니다.

// 예시: 코드 블럭 클릭시 복사 기능 (선택사항)
document.querySelectorAll('pre code').forEach((block) => {
  block.addEventListener('click', function() {
    const text = this.innerText;
    navigator.clipboard.writeText(text);
    alert('코드가 복사되었습니다!');
  });
});