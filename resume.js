// resume.js

// Example to detect if the resume has finished loading
window.addEventListener('load', () => {
  const iframe = document.querySelector('iframe');
  iframe.onload = () => {
    console.log('Resume PDF has been successfully loaded');
    // You can add any actions you want here when the resume is loaded
  };
});

// Example to show an alert when the "Download My Resume" button is clicked
document.getElementById('downloadResume').addEventListener('click', () => {
  alert('You are about to download the resume!');
});

// Example to toggle visibility of the resume section (optional)
const toggleResumeBtn = document.getElementById('toggleResume');

if (toggleResumeBtn) {
  toggleResumeBtn.addEventListener('click', () => {
    const resumeSection = document.getElementById('resume');
    if (resumeSection.style.display === 'none') {
      resumeSection.style.display = 'block';
      toggleResumeBtn.innerText = 'Hide Resume';
    } else {
      resumeSection.style.display = 'none';
      toggleResumeBtn.innerText = 'Show Resume';
    }
  });
}
