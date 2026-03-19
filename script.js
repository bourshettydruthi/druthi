// Lightweight script for navigation and simple image upload preview
document.addEventListener('DOMContentLoaded', function(){
  const nextBtn = document.getElementById('nextBtn');
  if(nextBtn){
    nextBtn.addEventListener('click', function(){
      // Navigate to page2 (simple and obvious)
      window.location.href = 'page2.html';
    });
  }

  // Image upload preview on page2: click image to pick a file
  const photo = document.getElementById('photo');
  const fileInput = document.getElementById('fileInput');
  if(photo && fileInput){
    photo.style.cursor = 'pointer';
    photo.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if(!file) return;
      const url = URL.createObjectURL(file);
      photo.src = url;

      // revoke object URL after image loads to free memory
      photo.onload = () => URL.revokeObjectURL(url);
    });
  }

  // Optional: gentle focus animation for the message textarea
  const msg = document.getElementById('messageInput');
  if(msg){
    msg.addEventListener('focus', () => msg.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)');
    msg.addEventListener('blur', () => msg.style.boxShadow = 'none');
  }
});
