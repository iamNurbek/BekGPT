const maxLength = 60;

document.querySelectorAll('.peopleMessaged p').forEach((paragraph) => {
  const text = paragraph.textContent.trim();
  if (text.length > maxLength) {
    paragraph.textContent = text.slice(0, maxLength) + '...'; 
  }
});
